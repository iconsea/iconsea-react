function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require("react");

module.exports.Agenda = function Agenda(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14 2V0H1v17h13v-2h2V2h-2zM2 16V1h2v15H2zm11 0H5V1h8v15zm2-2h-1v-3h1v3zm0-4h-1V7h1v3zm-1-4V3h1v3h-1zM6 4h5v1H6V4zm0 2h4v1H6V6z"
  }));
};

module.exports.AlarmClock = function AlarmClock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14.714 6.791a2.69 2.69 0 0 0 .786-1.903 2.729 2.729 0 0 0-2.725-2.726c-.886 0-1.695.434-2.207 1.15A6.938 6.938 0 0 0 9 3.025V2h1V1H7v1h1v1.025a6.938 6.938 0 0 0-1.568.287 2.703 2.703 0 0 0-2.207-1.15A2.729 2.729 0 0 0 1.5 4.888c0 .723.282 1.392.786 1.903a6.963 6.963 0 0 0 .849 7.696L1.85 16.2l.8.6 1.192-1.59C5.081 16.319 6.71 17 8.5 17s3.419-.681 4.658-1.79l1.192 1.59.8-.6-1.285-1.713a6.963 6.963 0 0 0 .849-7.696zm-1.939-3.629c.951 0 1.725.774 1.725 1.726 0 .373-.12.724-.335 1.017a7.031 7.031 0 0 0-2.63-2.202 1.705 1.705 0 0 1 1.24-.541zM2.5 4.888c0-.951.774-1.726 1.725-1.726.478 0 .918.202 1.24.54a7.048 7.048 0 0 0-2.63 2.202A1.707 1.707 0 0 1 2.5 4.888zM8.5 16c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm.5-6h4v1H8V7h1v3z"
  }));
};

module.exports.Alert = function Alert(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.454 1.492.212 16h16.581L8.454 1.492zm.005 2.016L15.064 15H1.93L8.459 3.508zM9 10.938H8V7h1v3.938zm.5 2.093a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  }));
};

module.exports.AlignCenter = function AlignCenter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 2v1H0V2h17zM1.5 6v1h14V6h-14zM0 11h17v-1H0v1zm3.5 4h10v-1h-10v1z"
  }));
};

module.exports.AlignJustify = function AlignJustify(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 2v1H0V2h17zM0 7h17V6H0v1zm0 4h17v-1H0v1zm0 4h17v-1H0v1z"
  }));
};

module.exports.AlignLeft = function AlignLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 2v1H0V2h17zm-3 4H0v1h14V6zM0 11h17v-1H0v1zm0 4h10v-1H0v1z"
  }));
};

module.exports.AlignRight = function AlignRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 2v1H0V2h17zM3 7h14V6H3v1zm-3 4h17v-1H0v1zm7 4h10v-1H7v1z"
  }));
};

module.exports.Anchor = function Anchor(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m15.291 12.592-1.57-3.127-3.127 1.568.448.895 1.871-.939A4.491 4.491 0 0 1 9 14.574V7h1.5V6H9V4.949c1.14-.232 2-1.241 2-2.449C11 1.121 9.878 0 8.5 0S6 1.121 6 2.5c0 1.208.86 2.217 2 2.449V6H6.5v1H8v7.574a4.491 4.491 0 0 1-3.912-3.58l1.86.934.448-.895-3.127-1.568-1.57 3.127.894.449.651-1.298A5.51 5.51 0 0 0 8.5 15.625a5.51 5.51 0 0 0 5.252-3.867l.645 1.283.894-.449zM7 2.5C7 1.673 7.673 1 8.5 1s1.5.673 1.5 1.5S9.327 4 8.5 4 7 3.327 7 2.5z"
  }));
};

module.exports.Android = function Android(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M3.809 5.696h9.383v6.807a1.12 1.12 0 0 1-1.113 1.125h-.769v2.32a1.053 1.053 0 0 1-2.106 0v-2.32H7.796v2.32c0 .582-.472 1.052-1.055 1.052a1.05 1.05 0 0 1-1.042-1.052l-.009-2.32h-.757a1.122 1.122 0 0 1-1.124-1.125V5.696zm-1.452-.194a1.05 1.05 0 0 0-1.053 1.042v4.396c0 .583.471 1.052 1.053 1.052s1.042-.47 1.042-1.052V6.544c0-.571-.468-1.042-1.042-1.042zm10.865-.174H3.768c0-1.625.972-3.036 2.413-3.771L5.454.219a.149.149 0 0 1 .051-.205c.071-.031.164-.011.205.062l.735 1.349c.625-.277 1.32-.43 2.055-.43s1.43.153 2.055.429L11.29.075c.041-.072.134-.092.205-.062a.149.149 0 0 1 .051.205l-.727 1.338c1.432.736 2.403 2.147 2.403 3.772zM6.741 3.223a.398.398 0 0 0-.397-.399.397.397 0 0 0-.389.399c0 .214.173.398.389.398a.397.397 0 0 0 .397-.398zm4.304 0a.397.397 0 0 0-.389-.399.398.398 0 0 0 0 .797.395.395 0 0 0 .389-.398zm3.598 2.279a1.04 1.04 0 0 0-1.042 1.042v4.396a1.047 1.047 0 1 0 2.095 0V6.544a1.044 1.044 0 0 0-1.053-1.042z"
  }));
};

module.exports.AngleDoubleDown = function AngleDoubleDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 10.644 1.646 3.79l.707-.707L8.5 9.229l6.146-6.146.707.707L8.5 10.644zm0 3.43L2.354 7.927l-.708.707L8.5 15.488l6.854-6.854-.707-.707L8.5 14.074z"
  }));
};

module.exports.AngleDoubleLeft = function AngleDoubleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m7.987 8.5 6.146 6.146-.707.707L6.573 8.5l6.854-6.854.707.707L7.987 8.5zM9.29 2.353l-.707-.707L1.729 8.5l6.854 6.854.707-.707L3.144 8.5 9.29 2.353z"
  }));
};

module.exports.AngleDoubleRight = function AngleDoubleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9.644 8.5 2.79 15.354l-.707-.707L8.229 8.5 2.083 2.354l.707-.708L9.644 8.5zm-2.01-6.854-.707.708L13.073 8.5l-6.146 6.146.707.707L14.487 8.5 7.634 1.646z"
  }));
};

module.exports.AngleDoubleUp = function AngleDoubleUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m8.5 6.073 6.854 6.854-.707.707L8.5 7.487l-6.146 6.146-.707-.707L8.5 6.073zm0-3.429 6.146 6.146.707-.707L8.5 1.229 1.646 8.083l.708.707L8.5 2.644z"
  }));
};

module.exports.AngleDown = function AngleDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m16.354 5.075-7.855 7.854L.646 5.075l.707-.707 7.145 7.146 7.148-7.147.708.708z"
  }));
};

module.exports.AngleLeft = function AngleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m5.207 8.471 7.146 7.147-.707.707-7.853-7.854L11.647.618l.707.707-7.147 7.146z"
  }));
};

module.exports.AngleRight = function AngleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m13.207 8.472-7.854 7.854-.707-.707 7.146-7.146-7.146-7.148.707-.707 7.854 7.854z"
  }));
};

module.exports.AngleUp = function AngleUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m16.354 11.896-.707.707L8.5 5.457l-7.146 7.146-.707-.707L8.5 4.043l7.854 7.853z"
  }));
};

module.exports.Announcement = function Announcement(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.469 2.222h-1.927a.527.527 0 0 0-.531.521v.667L3.016 7.44v-.27a.79.79 0 0 0-.797-.781H.797A.79.79 0 0 0 0 7.17v4.688c0 .429.358.781.797.781h1.422a.792.792 0 0 0 .797-.781v-.331l1.034.189a3.506 3.506 0 0 0-.038.491c0 1.897 1.561 3.441 3.479 3.441a3.438 3.438 0 0 0 3.38-2.682l3.14.576v.659c0 .287.239.521.531.521h1.927a.527.527 0 0 0 .531-.521V2.743a.527.527 0 0 0-.531-.521zM7.491 14.648c-1.367 0-2.479-1.095-2.479-2.441 0-.104.027-.205.04-.308l4.84.888a2.449 2.449 0 0 1-2.401 1.861zM16 13.722h-.989v-1.013L2.016 10.326v1.312H1v-4.25h1.016v1.484l12.995-4.763v-.887H16v10.5z"
  }));
};

module.exports.Apple = function Apple(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14.001 11.125a3.91 3.91 0 0 1-.704-2.278c0-.776.225-1.482.664-2.115.245-.357.633-.756 1.165-1.205-.347-.43-.706-.777-1.063-1.022a3.73 3.73 0 0 0-2.176-.664c-.501 0-1.093.123-1.767.347-.675.235-1.165.348-1.461.348-.236 0-.706-.102-1.411-.307-.715-.204-1.308-.306-1.808-.306-1.176 0-2.136.491-2.901 1.471-.766.991-1.154 2.258-1.154 3.821 0 1.675.511 3.381 1.501 5.139C3.897 16.111 4.909 17 5.961 17c.337 0 .787-.112 1.349-.348.553-.224 1.042-.337 1.451-.337.419 0 .939.102 1.542.327.614.214 1.083.327 1.431.327.868 0 1.747-.665 2.626-2.003.592-.889 1.001-1.747 1.256-2.554-.602-.183-1.144-.612-1.615-1.287zm-.478 3.293c-.657 1-1.293 1.552-1.79 1.552-.147 0-.459-.047-1.081-.264-.693-.259-1.33-.39-1.892-.39-.541 0-1.155.138-1.838.415-.58.243-.865.269-.961.269-.628 0-1.412-.762-2.204-2.137-.923-1.639-1.372-3.159-1.372-4.648 0-1.336.31-2.387.942-3.206.579-.741 1.251-1.086 2.113-1.086.401 0 .902.088 1.529.267 1.051.305 1.444.346 1.689.346.425 0 1.01-.132 1.777-.399.589-.196 1.077-.296 1.45-.296a2.727 2.727 0 0 1 1.814.644 5.282 5.282 0 0 0-.562.677 4.622 4.622 0 0 0-.843 2.686c0 1.048.297 2.006.884 2.85.354.505.748.908 1.182 1.206a9.752 9.752 0 0 1-.837 1.514zM9.424 3.964c-.235.072-.582.133-1.062.174.021-1.011.286-1.89.797-2.625C9.67.776 10.527.276 11.714 0c.02.092.04.164.05.225 0 .071.011.132.011.204 0 .419-.102.889-.296 1.39a4.175 4.175 0 0 1-.951 1.41c-.368.367-.736.612-1.104.735z"
  }));
};

module.exports.Archive = function Archive(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 2H0v4h1v11h15V6h1V2zm-2 14H2V6h13v10zm1-11H1V3h15v2zM6 11h5.016c1.103 0 2-.897 2-2s-.897-2-2-2H6c-1.103 0-2 .897-2 2s.897 2 2 2zm0-3h5.016a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2z"
  }));
};

module.exports.ArrowCircleDown = function ArrowCircleDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m12.146 6.146.707.707L8.5 11.207 4.146 6.854l.707-.707L8.5 9.793l3.646-3.647zM17 8.5c0 4.687-3.813 8.5-8.5 8.5S0 13.187 0 8.5 3.813 0 8.5 0 17 3.813 17 8.5zm-1 0C16 4.364 12.636 1 8.5 1S1 4.364 1 8.5 4.364 16 8.5 16 16 12.636 16 8.5z"
  }));
};

module.exports.ArrowCircleLeft = function ArrowCircleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M10.854 4.854 7.207 8.5l3.646 3.646-.707.707L5.793 8.5l4.354-4.354.707.708zM17 8.5c0 4.687-3.813 8.5-8.5 8.5S0 13.187 0 8.5 3.813 0 8.5 0 17 3.813 17 8.5zm-1 0C16 4.364 12.636 1 8.5 1S1 4.364 1 8.5 4.364 16 8.5 16 16 12.636 16 8.5z"
  }));
};

module.exports.ArrowCircleRight = function ArrowCircleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M6.854 4.146 11.207 8.5l-4.354 4.354-.707-.707L9.793 8.5 6.146 4.854l.708-.708zM17 8.5c0 4.687-3.813 8.5-8.5 8.5S0 13.187 0 8.5 3.813 0 8.5 0 17 3.813 17 8.5zm-1 0C16 4.364 12.636 1 8.5 1S1 4.364 1 8.5 4.364 16 8.5 16 16 12.636 16 8.5z"
  }));
};

module.exports.ArrowCircleUp = function ArrowCircleUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m8.5 5.793 4.354 4.354-.707.707L8.5 7.207l-3.646 3.646-.707-.707L8.5 5.793zM17 8.5c0 4.687-3.813 8.5-8.5 8.5S0 13.187 0 8.5 3.813 0 8.5 0 17 3.813 17 8.5zm-1 0C16 4.364 12.636 1 8.5 1S1 4.364 1 8.5 4.364 16 8.5 16 16 12.636 16 8.5z"
  }));
};

module.exports.ArrowDown = function ArrowDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.854 8.854 8.5 16.207 1.146 8.854l.707-.707L8 14.293V1h1v13.293l6.146-6.146.708.707z"
  }));
};

module.exports.ArrowLeft = function ArrowLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16 8.972H3.207l6.146 6.146-.707.707-7.353-7.353 7.354-7.354.707.707-6.147 6.147H16v1z"
  }));
};

module.exports.ArrowRight = function ArrowRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m15.707 8.472-7.354 7.354-.707-.707 6.146-6.146H1v-1h12.793L7.646 1.825l.707-.707 7.354 7.354z"
  }));
};

module.exports.ArrowTopLeft = function ArrowTopLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M12.292 13 1.975 2.703V10h-1V.997H10v1H2.684l10.315 10.295-.707.708z"
  }));
};

module.exports.ArrowTopRight = function ArrowTopRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z"
  }));
};

module.exports.ArrowUp = function ArrowUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.146 8.854 9 2.707V16H8V2.707L1.854 8.854l-.708-.708L8.5.793l7.354 7.354-.708.707z"
  }));
};

module.exports.Arrow = function Arrow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m13.603 11.349-.706-.708L14.541 9H9v5.541l1.641-1.644.708.706L8.5 16.458l-2.849-2.855.708-.706L8 14.541V9H2.459l1.644 1.641-.706.708L.542 8.5l2.855-2.849.706.708L2.459 8H8V2.459L6.359 4.103l-.708-.706L8.5.542l2.849 2.855-.708.706L9 2.459V8h5.541l-1.644-1.641.706-.708L16.458 8.5l-2.855 2.849z"
  }));
};

module.exports.ArrowsCorner = function ArrowsCorner(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15 9.5V15H9.5v-1h3.803L3 3.697V7.5H2V2h5.5v1H3.717L14 13.283V9.5h1z"
  }));
};

module.exports.ArrowsHorizontal = function ArrowsHorizontal(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m16.716 8.5-3.954 3.858-.698-.716L14.771 9H2.229l2.708 2.642-.698.716L.284 8.5l3.954-3.858.698.716L2.229 8h12.543l-2.708-2.642.698-.716L16.716 8.5z"
  }));
};

module.exports.ArrowsVertical = function ArrowsVertical(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m11.642 12.063.716.698L8.5 16.716l-3.858-3.954.716-.698L8 14.771V2.229L5.358 4.937l-.716-.699L8.5.284l3.858 3.954-.716.698L9 2.229v12.543l2.642-2.709z"
  }));
};

module.exports.BackLeft = function BackLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15 7.5c0 3.033-2.467 5.5-5.5 5.5H6.588l2.646 2.646-.707.707L4.674 12.5l3.854-3.854.707.707L6.588 12H9.5c2.481 0 4.5-2.019 4.5-4.5S11.981 3 9.5 3H2.417V2H9.5C12.533 2 15 4.467 15 7.5z"
  }));
};

module.exports.BackRight = function BackRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14.583 15v1H7.5C4.468 16 2 13.533 2 10.5S4.468 5 7.5 5h2.912L7.766 2.354l.707-.707L12.326 5.5 8.473 9.354l-.707-.708L10.412 6H7.5C5.019 6 3 8.019 3 10.5S5.019 15 7.5 15h7.083z"
  }));
};

module.exports.Bag = function Bag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13 4V1.606C13 .721 12.263 0 11.357 0H5.658c-.905 0-1.642.721-1.642 1.606V4H1v13h15V4h-3zM5.016 1.606c0-.334.288-.606.642-.606h5.699c.355 0 .643.272.643.606V4H5.016V1.606zM15 16H2V8h13v8zm0-9H2V5h2.016v.643h1V5H12v.643h1V5h2v2z"
  }));
};

module.exports.BarChartAlt = function BarChartAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 16v1H0v-1h17zm-5-6h2v5h1V9h-4v6h1v-5zM7 7h2v8h1V6H6v9h1V7zM2 3h2v12h1V2H1v13h1V3z"
  }));
};

module.exports.BarChart = function BarChart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 16v1H0v-1h17zM2 10h2v5h1V9H1v6h1v-5zm5-3h2v8h1V6H6v9h1V7zm5-4h2v12h1V2h-4v13h1V3z"
  }));
};

module.exports.Basketball = function Basketball(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5S13.202 0 8.516 0zm4.473 8a7.48 7.48 0 0 1 1.497-4.02A7.448 7.448 0 0 1 15.99 8h-3.001zm3.001 1a7.445 7.445 0 0 1-1.505 4.021A7.483 7.483 0 0 1 12.99 9h3zm-2.164-5.791A8.475 8.475 0 0 0 11.989 8H9V1.024a7.483 7.483 0 0 1 4.826 2.185zM8 1.026V8H5.04a8.462 8.462 0 0 0-1.834-4.791A7.473 7.473 0 0 1 8 1.026zM1.041 8a7.445 7.445 0 0 1 1.505-4.021A7.485 7.485 0 0 1 4.041 8h-3zM4.04 9a7.465 7.465 0 0 1-1.494 4.021A7.445 7.445 0 0 1 1.041 9H4.04zm-.835 4.791A8.449 8.449 0 0 0 5.04 9H8v6.974a7.478 7.478 0 0 1-4.795-2.183zM9 15.976V9h2.99a8.478 8.478 0 0 0 1.835 4.792A7.485 7.485 0 0 1 9 15.976z"
  }));
};

module.exports.Bell = function Bell(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.312 14.125c-.014-.013-1.312-1.294-1.312-3.21V7.623C14 4.522 11.532 2 8.5 2S3 4.522 3 7.623v3.292c0 1.861-1.306 3.203-1.318 3.216l-.843.853h15.357l-.884-.859zm-12.26-.141c.444-.692.948-1.764.948-3.069V7.623C4 5.074 6.019 3 8.5 3S13 5.074 13 7.623v3.292c0 1.32.495 2.383.938 3.069H3.052zM9 2H8V1h1v1zm0 13h1c0 .827-.673 1.5-1.5 1.5S7 15.827 7 15h1a.5.5 0 0 0 1 0z"
  }));
};

module.exports.Blackboard = function Blackboard(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9 2V0H8v2H1v10h15V2H9zm6 9H2V3h13v8zM3.5 13h10v1h-2.584l1.504 2.326-.84.543L9.725 14H9v3H8v-3h-.712l-1.869 2.87-.838-.545L6.095 14H3.5v-1z"
  }));
};

module.exports.BoltAlt = function BoltAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m11.83 8-3.826 7.233-.884-.467L10.17 9H5.061l4.9-7.279.829.559L6.939 8h4.891z"
  }));
};

module.exports.Bolt = function Bolt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14.313 2.012H7.161L4.83 9.026h1.666l-2.01 6.052 9.483-8.051h-2.904l3.248-5.015zm-3.066 6.015L6.56 12.006l1.322-3.979H6.217l1.665-5.015h4.592L9.226 8.027h2.021z"
  }));
};

module.exports.Book = function Book(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.592 1.152a17.77 17.77 0 0 0-2.981-.244c-2.105 0-3.828.366-5.125 1.088C6.968 1.231 5.222.844 3.29.844c-1.681 0-2.866.302-2.915.315L0 1.257l.001 13.906.624-.161c.011-.002 1.12-.283 2.665-.283 1.447 0 2.771.24 3.96.703v.828h2.5v-.856c1.281-.488 2.747-.611 3.86-.611 1.562 0 2.786.225 2.798.227l.592.11V1.229l-.408-.077zM1 13.907V2.049a12.77 12.77 0 0 1 2.29-.205c1.761 0 3.339.36 4.71 1.044v11.776c-1.403-.617-2.977-.945-4.71-.945-.969 0-1.773.101-2.29.188zm15 .031a18.844 18.844 0 0 0-2.39-.154c-1.848 0-3.381.298-4.61.855V2.866c1.422-.78 3.271-.958 4.61-.958 1.023 0 1.902.097 2.39.164v11.866z"
  }));
};

module.exports.BookmarkAlt = function BookmarkAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M10.027 10.074V0H3.973v10.077l3.021-2.053 3.033 2.05zM4.973 8.188V1h4.055v7.191L6.991 6.815 4.973 8.188zM16 1.007V16H1V1.007h1.974v1H2V15h13V2.007h-4.005v-1H16z"
  }));
};

module.exports.Bookmark = function Bookmark(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M3.562 1v15.459l4.686-3.27L13 16.449V1H3.562zM12 14.551l-3.756-2.578-3.681 2.568V2H12v12.551z"
  }));
};

module.exports.Briefcase = function Briefcase(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M7 13v-1.5h1v.5h1v-.5h1V13H7zm10-2h-1v6H1v-6H0V3h3.616C4.554 1.17 6.421 0 8.5 0s3.947 1.171 4.884 3H17v8zM4.769 3h7.464c-.825-1.233-2.21-2-3.732-2s-2.907.768-3.732 2zM15 11H2v5h13v-5zm1-7H1v6h15V4z"
  }));
};

module.exports.BrushAlt = function BrushAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 7.531c0-.827-.673-1.5-1.5-1.5h-4.808l.285-.914L11 1.5C11 .673 10.327 0 9.5 0h-2C6.673 0 6 .673 6 1.5v3.452l.31 1.08H1.5c-.827 0-1.5.673-1.5 1.5v3.486h.932L.166 17h16.668l-.766-5.982H17V7.531zM15.698 16H14v-2h-1v2h-1v-3h-1v3h-1v-4H9v4H4v-2H3v2H1.302l.638-4.982h13.12L15.698 16zM1.06 10.018H1V7.531a.5.5 0 0 1 .5-.5h6.165L7 4.876V1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3.393l-.667 2.138H15.5a.5.5 0 0 1 .5.5v2.486H1.06zM8 2h1v1H8V2z"
  }));
};

module.exports.Brush = function Brush(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m15.913 1.782-6.5 9.5-.825-.564 6.5-9.5.825.564zM9 13.992c0 1.103-.897 2-2 2-.203 0-.538.015-.541.015H1.005l4.553-3.431c.15-.104.859-.584 1.442-.584 1.103 0 2 .897 2 2zm-1 0c0-.551-.449-1-1-1-.175 0-.582.203-.853.393l-2.153 1.623h2.433c.063-.003.376-.016.573-.016.551 0 1-.449 1-1z"
  }));
};

module.exports.Calendar = function Calendar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14 2V1h-3v1H6V1H3v1H0v15h17V2h-3zm-2 0h1v2h-1V2zM4 2h1v2H4V2zm12 14H1V7.079h15V16zM1 6.079V3h2v2h3V3h5v2h3V3h2v3.079H1z"
  }));
};

module.exports.Camera = function Camera(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M5.958 3V2H3.042v1H0v12h17V3H5.958zM16 14H1V7h6.557A3.953 3.953 0 0 0 7 9c0 2.206 1.794 4 4 4s4-1.794 4-4c0-.731-.212-1.409-.557-2H16v7zm-2-5c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm-.382-3c-.704-.614-1.612-1-2.618-1s-1.914.386-2.618 1H1V4h15v2h-2.382z"
  }));
};

module.exports.Car = function Car(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m17 9.984-1.958.002L12.991 6H5.042L2.074 9.999 0 10v4.977h2.002L2 15c0 1.103.897 2 2 2s2-.897 2-2l-.002-.023h5.005c-.001.008-.003.015-.003.023 0 1.103.897 2 2 2s2-.897 2-2l-.002-.023H17V9.984zm-3.082.003-3.897.004V7h2.36l1.537 2.987zM5.544 7h3.477v2.992l-5.701.005L5.544 7zM4 16c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm9 0c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm3-2.023h-1.291C14.359 13.395 13.728 13 13 13s-1.359.395-1.709.977H5.709C5.359 13.395 4.728 13 4 13s-1.359.395-1.709.977H1V11l15-.015v2.992z"
  }));
};

module.exports.CheckBox = function CheckBox(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14 5.761h1V16H1V2h8.393v1H2v12h12V5.761zM4.854 8.146l-.708.708 3.434 3.434L15.167.776l-.835-.551L7.42 10.713 4.854 8.146z"
  }));
};

module.exports.Check = function Check(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.418 1.774 6.585 15.259l-4.918-4.386.666-.746 4.051 3.614 8.198-12.515.836.548z"
  }));
};

module.exports.Clip = function Clip(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M12.021 4.234v8.498h-1V4.234c0-1.091-.799-2.266-2.554-2.266-1.941 0-2.459 1.424-2.459 2.266v8.121h.007v1.457c0 .62.693 1.206 1.426 1.206.844 0 1.567-.683 1.567-1.241v-.27h-.003l.008-7.617c0-.874-.247-.874-.466-.874-.369 0-.547.035-.547.823v5.146H7V5.839c0-.451 0-1.823 1.547-1.823.669 0 1.466.325 1.466 1.875l-.007 6.43h.002v1.457c0 1.173-1.224 2.241-2.567 2.241-1.292 0-2.426-1.031-2.426-2.206v-.074h-.007V4.234C5.008 2.661 6.09.968 8.467.968c2.333.001 3.554 1.643 3.554 3.266z"
  }));
};

module.exports.Clipboard = function Clipboard(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16 2v15H1V2h2.244v1H2v13h13V3h-1.278V2H16zm-3 3H4V1h3.085c.207-.582.763-1 1.415-1s1.208.418 1.415 1H13v4zm-1-3H9v-.5a.5.5 0 0 0-1 0V2H5v2h7V2z"
  }));
};

module.exports.Close = function Close(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m9.207 8.5 6.646 6.646-.707.707L8.5 9.207l-6.646 6.646-.707-.707L7.793 8.5 1.146 1.854l.707-.707L8.5 7.793l6.646-6.646.707.707L9.207 8.5z"
  }));
};

module.exports.CloudDown = function CloudDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 6.75A4.255 4.255 0 0 1 12.75 11H9.993v-1h2.757C14.542 10 16 8.542 16 6.75S14.542 3.5 12.75 3.5a3.22 3.22 0 0 0-1.56.417l-.354.195-.265-.306A3.744 3.744 0 0 0 7.75 2.5c-1.661 0-3.099 1.08-3.576 2.688l-.126.422-.435-.072c-.119-.019-.238-.038-.363-.038C2.01 5.5 1 6.509 1 7.75S2.01 10 3.25 10h3.699v1H3.25A3.254 3.254 0 0 1 0 7.75c0-1.826 1.511-3.335 3.353-3.248A4.702 4.702 0 0 1 7.75 1.5c1.234 0 2.42.494 3.309 1.367A4.115 4.115 0 0 1 12.75 2.5 4.255 4.255 0 0 1 17 6.75zm-8 6.98V6H8v7.73l-1.646-1.646-.707.707L8.5 15.644l2.854-2.854-.707-.707L9 13.73z"
  }));
};

module.exports.CloudUp = function CloudUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 6.75A4.255 4.255 0 0 1 12.75 11H9.993v-1h2.757C14.542 10 16 8.542 16 6.75S14.542 3.5 12.75 3.5a3.22 3.22 0 0 0-1.56.417l-.354.195-.265-.306A3.744 3.744 0 0 0 7.75 2.5c-1.661 0-3.099 1.08-3.576 2.688l-.126.422-.435-.072c-.119-.019-.238-.038-.363-.038C2.01 5.5 1 6.509 1 7.75S2.01 10 3.25 10h3.699v1H3.25A3.254 3.254 0 0 1 0 7.75c0-1.826 1.529-3.335 3.353-3.248A4.702 4.702 0 0 1 7.75 1.5c1.234 0 2.42.494 3.309 1.367A4.115 4.115 0 0 1 12.75 2.5 4.255 4.255 0 0 1 17 6.75zm-6.354 2.104.707-.707L8.5 5.293 5.646 8.146l.707.707L8 7.207V15h1V7.207l1.646 1.647z"
  }));
};

module.exports.Cloud = function Cloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M12.75 4.5c-.578 0-1.146.123-1.691.367A4.728 4.728 0 0 0 7.75 3.5a4.702 4.702 0 0 0-4.397 3.002C1.55 6.428 0 7.923 0 9.75A3.254 3.254 0 0 0 3.25 13h9.5C15.093 13 17 11.093 17 8.75S15.093 4.5 12.75 4.5zm0 7.5h-9.5C2.009 12 1 10.991 1 9.75S2.009 7.5 3.25 7.5c.125 0 .244.019.363.038l.435.072.126-.422C4.652 5.58 6.089 4.5 7.75 4.5c1.073 0 2.102.477 2.821 1.307l.265.306.354-.195a3.208 3.208 0 0 1 1.56-.418C14.542 5.5 16 6.958 16 8.75S14.542 12 12.75 12z"
  }));
};

module.exports.CommentAlt = function CommentAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.5 0h-14C.673 0 0 .673 0 1.5v10c0 .827.673 1.5 1.5 1.5H2v4.102L6.688 13H15.5c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5zm.5 11.5a.5.5 0 0 1-.5.5H6.312L3 14.898V12H1.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v10zM3 3h11v1H3V3zm0 2h11v1H3V5zm0 2h6v1H3V7z"
  }));
};

module.exports.Comment = function Comment(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.5 0h-14C.673 0 0 .673 0 1.5v10c0 .827.673 1.5 1.5 1.5H2v4.102L6.688 13H15.5c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5zm.5 11.5a.5.5 0 0 1-.5.5H6.312L3 14.898V12H1.5a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v10z"
  }));
};

module.exports.CommentsSmiley = function CommentsSmiley(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13 8h1c0 2.481-2.019 4.5-4.5 4.5S5 10.481 5 8h1c0 1.93 1.57 3.5 3.5 3.5S13 9.93 13 8zM7.5 6.5a1 1 0 1 0 0-2 1 1 0 1 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 1 0 0 2zm5.5 1c0 4.136-3.364 7.5-7.5 7.5a7.466 7.466 0 0 1-3.803-1.041l-5.5 2.843 2.843-5.499A7.475 7.475 0 0 1 2 7.5C2 3.364 5.364 0 9.5 0S17 3.364 17 7.5zm-1 0C16 3.916 13.084 1 9.5 1S3 3.916 3 7.5c0 1.244.358 2.459 1.036 3.511l.157.243-1.664 3.218 3.217-1.664.243.157A6.479 6.479 0 0 0 9.5 14c3.584 0 6.5-2.916 6.5-6.5z"
  }));
};

module.exports.Comments = function Comments(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 1.5v7.969c0 .827-.673 1.5-1.5 1.5h-.508v-1h.508a.5.5 0 0 0 .5-.5V1.5a.5.5 0 0 0-.5-.5h-14a.5.5 0 0 0-.5.5v7.969a.5.5 0 0 0 .5.5H3v2.892l1.779-1.569.661.75L2 15.077v-4.108h-.5c-.827 0-1.5-.673-1.5-1.5V1.5C0 .673.673 0 1.5 0h14c.827 0 1.5.673 1.5 1.5zm-2.98 8.04v3.043c0 .827-.673 1.5-1.5 1.5h-.5v3.064l-3.667-3.064H7.5c-.827 0-1.5-.673-1.5-1.5V9.54c0-.827.673-1.5 1.5-1.5h5.02c.827 0 1.5.673 1.5 1.5zm-1 0a.5.5 0 0 0-.5-.5H7.5a.5.5 0 0 0-.5.5v3.043a.5.5 0 0 0 .5.5h1.217l2.303 1.926v-1.926h1.5a.5.5 0 0 0 .5-.5V9.54z"
  }));
};

module.exports.ControlBackward = function ControlBackward(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M6.719 8.474 14 14.571V2.436L6.719 8.474zM13 12.429 8.281 8.478 13 4.564v7.865zM3.281 8.478l5.54 4.639-.643.768-6.46-5.41L8.18 3.117l.639.77-5.538 4.591z"
  }));
};

module.exports.ControlEject = function ControlEject(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.474 2.719 2.436 10h12.135L8.474 2.719zm.004 1.562L12.429 9H4.564l3.914-4.719zM15 13v1H2v-1h13z"
  }));
};

module.exports.ControlForward = function ControlForward(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M3 2.436v12.136l7.281-6.098L3 2.436zm1 2.128 4.719 3.913L4 12.429V4.564zm11.281 3.91-6.46 5.41-.643-.768 5.54-4.639-5.537-4.592.639-.77 6.461 5.359z"
  }));
};

module.exports.ControlPause = function ControlPause(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M3 15h4V2H3v13zM4 3h2v11H4V3zm6-1v13h4V2h-4zm3 12h-2V3h2v11z"
  }));
};

module.exports.ControlPlay = function ControlPlay(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M3 2.692V14.31l11.618-5.837L3 2.692zm1 1.616 8.382 4.17L4 12.689V4.308z"
  }));
};

module.exports.ControlRecord = function ControlRecord(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 2.5c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
  }));
};

module.exports.ControlShuffle = function ControlShuffle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m8.94 6.871 1.081-1.34-.004-.003A4.504 4.504 0 0 1 13.395 4h1.898l-1.646-1.646.707-.707L17.207 4.5l-2.854 2.854-.707-.707L15.293 5h-1.898c-.989 0-1.931.425-2.595 1.159L9.72 7.498l-.78-.627zm-3.089 3.825-.011-.008A3.484 3.484 0 0 1 3.107 12H0v1h3.107a4.477 4.477 0 0 0 3.503-1.676l.011.009.941-1.166-.777-.629-.934 1.158zm7.795-.342L15.293 12h-1.898a3.484 3.484 0 0 1-2.7-1.281L6.426 5.454l-.01.008A4.496 4.496 0 0 0 3.107 4H0v1h3.107c.998 0 1.948.428 2.611 1.17l4.161 5.132-.005.004A4.485 4.485 0 0 0 13.394 13h1.898l-1.646 1.646.707.707 2.854-2.854-2.854-2.854-.707.709z"
  }));
};

module.exports.ControlSkipBackward = function ControlSkipBackward(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M6.719 8.526 14 14.564V2.429L6.719 8.526zM13 12.436 8.281 8.522 13 4.571v7.865zM3 2h1v13H3V2z"
  }));
};

module.exports.ControlSkipForward = function ControlSkipForward(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m3 14.571 7.281-6.097L3 2.436v12.135zM4 4.564l4.719 3.914L4 12.429V4.564zM14 2v13h-1V2h1z"
  }));
};

module.exports.ControlStop = function ControlStop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M3 3v11h11V3H3zm10 10H4V4h9v9z"
  }));
};

module.exports.CreditCard = function CreditCard(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.5 2h-14C.673 2 0 2.673 0 3.5v10c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5v-10c0-.827-.673-1.5-1.5-1.5zm.5 11.5a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5V8h15v5.5zM1 5V3.5a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5V5H1z"
  }));
};

module.exports.Crown = function Crown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M12.626 6.743 8.543.07 4.332 6.745-.167 2.912 1.572 16h13.855l1.738-13.075-4.539 3.818zM2.447 15l-.133-1h12.371l-.133 1H2.447zm12.371-2H2.182L1.167 5.363l3.396 2.892 3.967-6.29 3.851 6.292 3.454-2.906L14.818 13z"
  }));
};

module.exports.Css3 = function Css3(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m16.5 1.26-2.407 12.064-7.277 2.416L.5 13.324l.643-3.223h2.688l-.263 1.33 3.818 1.457 4.398-1.457.614-3.068H1.469l.524-2.686h10.94l.345-1.73H2.347L2.88 1.26H16.5z"
  }));
};

module.exports.Cup = function Cup(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.999 1h-2.257c.001-.168.008-.328.008-.5V0H2.25v.5c0 .16.004.333.005.5H.001L0 1.499a27.312 27.312 0 0 0 .195 3.31c.352 2.937 1.271 6.341 2.795 7.087.194.096.395.144.596.144.238 0 .479-.068.707-.206l.209-.14c.833 1.277 1.97 2.139 3.498 2.298V16H5.047v1h7v-1H9v-1.997c1.415-.149 2.585-.935 3.493-2.312l.234.155a1.31 1.31 0 0 0 1.283.049c1.524-.746 2.443-4.15 2.795-7.087A27.3 27.3 0 0 0 17 1.498L16.999 1zM3.988 10.834l-.229.154c-.112.066-.204.07-.328.01-.785-.385-1.808-2.675-2.243-6.309-.108-.9-.169-1.802-.184-2.689h1.273c.097 2.924.513 6.468 1.792 8.956l-.081-.122zM8.5 13.041c-4.54 0-5.199-8.05-5.247-12.041h10.494c-.049 4.721-.838 12.041-5.247 12.041zm7.312-8.352c-.436 3.634-1.458 5.924-2.243 6.309-.123.061-.216.058-.308.003l-.25-.167-.116.174C13.974 8.97 14.602 5.942 14.726 2h1.271a26.66 26.66 0 0 1-.185 2.689z"
  }));
};

module.exports.Cut = function Cut(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13 11c-.545 0-1.049.157-1.49.412L9.188 8.958l6.26-6.614-.727-.688L8.5 8.23 2.277 1.656l-.726.688 6.26 6.614-2.322 2.453A2.969 2.969 0 0 0 4 11c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-.747-.285-1.424-.738-1.949L8.5 9.686l2.238 2.365A2.973 2.973 0 0 0 10 14c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3zm-9 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm9 0c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
  }));
};

module.exports.Dashboard = function Dashboard(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 11.5v.5h-6.168v-1h5.152a7.47 7.47 0 0 0-1.842-4.434l-.806.806-.707-.707.802-.802A7.464 7.464 0 0 0 9 4.024V7H8V4.024a7.459 7.459 0 0 0-4.43 1.839l.796.796-.707.707-.8-.8A7.463 7.463 0 0 0 1.017 11h5.171v1H0v-.5C0 6.813 3.813 3 8.5 3S17 6.813 17 11.5zm-6.5 0c0 1.103-.897 2-2 2s-2-.897-2-2c0-.644.311-1.21.784-1.577l-2.082-3.63.867-.497L8.21 9.529c.095-.014.19-.029.29-.029 1.103 0 2 .897 2 2zm-1 0c0-.551-.449-1-1-1s-1 .449-1 1 .449 1 1 1 1-.449 1-1z"
  }));
};

module.exports.Desktop = function Desktop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M2 11h13V3H2v8zm1-7h11v6H3V4zm12.5-3h-14C.673 1 0 1.638 0 2.423v10.154C0 13.362.673 14 1.5 14h14c.827 0 1.5-.638 1.5-1.423V2.423C17 1.638 16.327 1 15.5 1zm.5 11.577c0 .234-.225.423-.5.423h-14c-.275 0-.5-.189-.5-.423V2.423C1 2.189 1.225 2 1.5 2h14c.275 0 .5.189.5.423v10.154zM5 15h7v1H5v-1z"
  }));
};

module.exports.DirectionAlt = function DirectionAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9 6h4.695l1.938-2.563L13.687 1H9V0H8v1H2v5h6v2H3.313l-1.946 2.437L3.305 13H8v4h1v-4h6V8H9V6zM3 2h10.206l1.161 1.454L13.198 5H3V2zm11 10H3.802l-1.169-1.546L3.794 9H14v3z"
  }));
};

module.exports.Direction = function Direction(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.641 5.409 13.83 2H9V0H8v2H1v7h7v8h1V9h4.838l2.803-3.591zM9 8H2V3h11.358l2.001 2.426L13.35 8H9z"
  }));
};

module.exports.Download = function Download(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 16v1H0v-1h17zm-3.646-7.146-.707-.707-3.646 3.646V0h-1v11.794L4.354 8.146l-.708.708L8.5 13.707l4.854-4.853z"
  }));
};

module.exports.Dribbble = function Dribbble(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 0a8.5 8.5 0 1 0 .001 17.001A8.5 8.5 0 0 0 8.5 0zm7.494 8.621c-2.075-.456-3.896-.423-5.469-.092a33.17 33.17 0 0 0-.849-1.93c1.681-.648 3.292-1.586 4.548-2.934A7.465 7.465 0 0 1 16 8.5c0 .041-.006.08-.006.121zm-2.471-5.674c-1.16 1.257-2.688 2.135-4.297 2.74a27.504 27.504 0 0 0-2.814-4.385A7.464 7.464 0 0 1 8.5 1a7.46 7.46 0 0 1 5.023 1.947zM5.43 1.665a25.94 25.94 0 0 1 2.828 4.353c-2.974.92-5.966 1.028-7.114 1.03A7.516 7.516 0 0 1 5.43 1.665zM1 8.5c0-.151.014-.3.022-.449l.212.001c1.306 0 4.402-.125 7.482-1.114.3.625.578 1.245.82 1.844-3.605 1.101-5.736 3.705-6.513 4.826A7.462 7.462 0 0 1 1 8.5zm2.758 5.804c.596-.901 2.601-3.518 6.145-4.57.961 2.598 1.405 4.744 1.566 5.651A7.46 7.46 0 0 1 8.5 16a7.46 7.46 0 0 1-4.742-1.696zm8.642.59a34.174 34.174 0 0 0-1.503-5.405c1.444-.28 3.109-.288 5.008.145a7.507 7.507 0 0 1-3.505 5.26z"
  }));
};

module.exports.DropboxAlt = function DropboxAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m.5 9.344 4.707 3.07L8.5 9.668l-4.745-2.93z"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M5.207 1.062.5 4.133l3.255 2.605L8.5 3.811z"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m16.5 4.133-4.706-3.071L8.5 3.811l4.746 2.927z"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m8.5 9.668 3.294 2.746 4.706-3.07-3.254-2.606z"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m8.51 10.259-3.303 2.739-1.413-.924v1.035l4.716 2.829 4.717-2.829v-1.035l-1.414.924z"
  }));
};

module.exports.Dropbox = function Dropbox(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.853 4.371 11.557.917 8.5 3.455 5.454.917.147 4.371l3.1 2.476L.148 9.329l3.444 2.243v1.533l4.917 2.939 4.926-2.938v-1.548l3.417-2.23-3.098-2.481 3.099-2.476zm-5.226-2.214 3.52 2.296-2.232 1.782-3.56-2.19 2.272-1.888zM12 6.847 8.5 9.006 5 6.847l3.5-2.154L12 6.847zM1.853 4.453 5.38 2.157l2.265 1.887-3.561 2.191-2.231-1.782zm-.001 4.792 2.232-1.789 3.562 2.198-2.266 1.89-3.528-2.299zm10.583 3.293L8.51 14.881l-3.917-2.342v-.315l.862.561 3.047-2.54 3.056 2.54.878-.573v.326zm2.713-3.292-3.521 2.298-2.273-1.89 3.561-2.198 2.233 1.79z"
  }));
};

module.exports.Drupal = function Drupal(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.563 16.5c-3.718 0-7.062-2.926-7.062-6.906 0-3.974 3.098-5.813 3.672-6.114.684-.364 1.176-.556 1.95-1.175.383-.301.702-.739.803-1.805.555.665 1.221 1.439 1.694 1.759.775.51 1.55.711 2.36 1.221.492.301 3.518 2.15 3.518 6.241 0 4.082-3.226 6.779-6.935 6.779zm5.467-6.597c-.729 0-2.205 1.513-2.979 1.522-.901.018-2.149-1.787-3.954-1.77-1.422.01-2.542 1.14-2.561 2.343-.009.675.21 1.176.675 1.494.31.209.592.337 1.512.337 1.531 0 3.472-1.896 4.365-1.867.71.026 1.812 1.768 2.369 1.804.437.036.665-.164 1.038-.701.364-.547.52-1.404.52-1.887 0-.473-.21-1.275-.985-1.275zm-2.113 4.838c-.31.228-1.003.511-1.987.511s-1.448-.21-1.758-.447c-.045-.036-.027-.036-.119-.036-.1 0-.154.046-.236.109a.23.23 0 0 0 0 .328c.674.619 1.804.565 2.633.491.839-.082 1.55-.573 1.622-.646.109-.108.082-.2.063-.264-.018-.064-.073-.154-.218-.046zm-.493-1.557c-.182-.118-.445-.137-.691-.137-.247 0-.383-.018-.646.091-.266.109-.539.355-.711.511-.174.154-.201.273-.11.401.092.117.192.044.447-.174.264-.21.438-.401.975-.401s.629.201.737.401c.11.2.119.228.228.174.128-.064.192-.156.128-.312-.065-.154-.174-.427-.357-.554z"
  }));
};

module.exports.Email = function Email(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 2v13h17V2H0zm8.494 7.817L1.598 3h13.82L8.494 9.817zM5.755 8.516 1 13.198V3.815l4.755 4.701zm.711.703 2.026 2.003 1.996-1.966 4.8 4.744H1.611l4.855-4.781zm4.735-.664L16 3.83v9.467l-4.799-4.742z"
  }));
};

module.exports.Envelope = function Envelope(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M2 0v17h13V0H2zm2.695 4L3.287 1h10.426l-1.41 3H4.695zm-.634 1H8v9H3.998L3 15.155V2.741L4.061 5zm.394 10h8.092l.862 1H3.593l.862-1zm8.551-1H9V5h3.938L14 2.739v12.415L13.006 14z"
  }));
};

module.exports.Eraser = function Eraser(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13.446 4.201 8.25 1.2c-.69-.397-1.65-.141-2.048.55l-6 10.393a1.503 1.503 0 0 0 .55 2.05l3.179 1.824 4.357-.018 5.708-9.749a1.502 1.502 0 0 0-.55-2.049zm-5.733 10.8-3.518.014-2.945-1.689a.501.501 0 0 1-.183-.684l2.75-4.764 6.027 3.48-2.131 3.643zm5.417-9.254-2.781 4.75-6.032-3.483 2.75-4.764a.503.503 0 0 1 .683-.184l5.196 3a.5.5 0 0 1 .184.681zM17 15v1h-7v-1h7z"
  }));
};

module.exports.ExchangeVertical = function ExchangeVertical(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M6 15.043V8H5v7.043l-3.646-3.646-.707.707L5.5 16.957l4.854-4.854-.707-.707L6 15.043zm-.512.488h.023l-.011.012-.012-.012zm10.158-9.927L12 1.957v7.096h-1V1.957L7.354 5.604l-.708-.708L11.5.043l4.854 4.854-.708.707z"
  }));
};

module.exports.Export = function Export(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m4.359 5.956-.718-.697L8.5.254l4.859 5.005-.718.696L9 2.205v10.767H8V2.205L4.359 5.956zM16 9.03v6.47a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5V9.025H0V15.5c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V9.03h-1z"
  }));
};

module.exports.Eye = function Eye(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.965 8.817C15.681 5.55 12.278 3.354 8.5 3.354S1.319 5.55.035 8.817a.5.5 0 0 0 0 .365C1.32 12.45 4.722 14.646 8.5 14.646s7.18-2.195 8.465-5.463a.493.493 0 0 0 0-.366zM8.5 13.646c-3.298 0-6.269-1.859-7.459-4.646C2.23 6.213 5.201 4.354 8.5 4.354S14.77 6.213 15.959 9c-1.19 2.786-4.161 4.646-7.459 4.646zm0-8.289C6.491 5.357 4.857 6.991 4.857 9s1.634 3.643 3.644 3.643c2.008 0 3.643-1.634 3.643-3.643S10.509 5.357 8.5 5.357zm0 6.286c-1.458 0-2.644-1.186-2.644-2.643S7.043 6.357 8.5 6.357 11.143 7.543 11.143 9 9.958 11.643 8.5 11.643zm0-4c-.748 0-1.357.609-1.357 1.357s.609 1.357 1.357 1.357S9.857 9.748 9.857 9 9.248 7.643 8.5 7.643zm0 1.714a.357.357 0 1 1 0-.714.357.357 0 0 1 0 .714z"
  }));
};

module.exports.FaceSad = function FaceSad(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 0C3.813 0 0 3.813 0 8.5S3.813 17 8.5 17 17 13.187 17 8.5 13.187 0 8.5 0zm0 16C4.364 16 1 12.636 1 8.5S4.364 1 8.5 1 16 4.364 16 8.5 12.636 16 8.5 16zm4.5-3a.5.5 0 0 1-1 0c0-1.93-1.57-3.5-3.5-3.5S5 11.07 5 13a.5.5 0 0 1-1 0c0-2.481 2.019-4.5 4.5-4.5S13 10.519 13 13zM4.5 5.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"
  }));
};

module.exports.FaceSmile = function FaceSmile(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 0C3.813 0 0 3.813 0 8.5S3.813 17 8.5 17 17 13.187 17 8.5 13.187 0 8.5 0zm0 16C4.364 16 1 12.636 1 8.5S4.364 1 8.5 1 16 4.364 16 8.5 12.636 16 8.5 16zM13 9c0 2.481-2.019 4.5-4.5 4.5S4 11.481 4 9a.5.5 0 0 1 1 0c0 1.93 1.57 3.5 3.5 3.5S12 10.93 12 9a.5.5 0 0 1 1 0zM4.5 5.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"
  }));
};

module.exports.Facebook = function Facebook(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m12.461 5.57-.309 2.93H9.81V17H6.292V8.5H4.539V5.57h1.753V3.806C6.292 1.423 7.283 0 10.1 0h2.341v2.93h-1.465c-1.093 0-1.166.413-1.166 1.176V5.57h2.651z"
  }));
};

module.exports.File = function File(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9.667 0H2v17h13V5.308L9.667 0zM10 1.742 13.273 5H10V1.742zM3 16V1h6v5h5v10H3z"
  }));
};

module.exports.Files = function Files(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M12.497 0H6v2.01h1V1h5v4h4v8h-4.017v1H17V4.182L12.497 0zM13 1.832 15.335 4H13V1.832zM0 3v14h11V7.182L6.497 3H0zm7 1.832L9.335 7H7V4.832zM1 16V4h5v4h4v8H1z"
  }));
};

module.exports.Filter = function Filter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M.54 0 7 9.229V17h3V9.229L16.46 0H.54zM9 8.914V16H8V8.914L2.46 1h12.08L9 8.914z"
  }));
};

module.exports.FlagAlt2 = function FlagAlt2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15 0v17h-1V0h1zM4.984 1h8v8H8v2H1V3h3.984V1zM7 9H5V4H2v6h5V9zM5.984 2v1H6v5h5.984V2h-6z"
  }));
};

module.exports.FlagAlt = function FlagAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15 0v17h-1V0h1zM1.527.976H13v8H1.51l2.911-3.952L1.527.976zm10.473 1H3.472l2.185 3.056-2.168 2.944H12v-6z"
  }));
};

module.exports.Flag = function Flag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13 10.008V.77L1.121 5.389 13 10.008zm-1-1.461L3.879 5.389 12 2.23v6.317zM15 0v17h-1V0h1z"
  }));
};

module.exports.FlickrAlt = function FlickrAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5.5a8.001 8.001 0 0 0 0 16 8 8 0 0 0 0-16zM5.433 10.979a2.518 2.518 0 1 1-.002-5.036 2.518 2.518 0 0 1 .002 5.036zm6.317 0a2.517 2.517 0 1 1 0-5.036 2.518 2.518 0 1 1 0 5.036z"
  }));
};

module.exports.Flickr = function Flickr(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M7.295 8.5A3.648 3.648 0 1 1 0 8.499a3.648 3.648 0 0 1 7.295.001zM17 8.5a3.648 3.648 0 0 1-7.295 0A3.648 3.648 0 0 1 17 8.5zm-1 0a2.65 2.65 0 0 0-2.649-2.647c-1.459 0-2.646 1.188-2.646 2.647s1.187 2.647 2.646 2.647A2.65 2.65 0 0 0 16 8.5z"
  }));
};

module.exports.Folder = function Folder(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8 4 6.042 2H0v15h17V4H8zM5.622 3 7.58 5H16v2.027L1 7.001V3h4.622zM1 16V8.001l15 .026V16H1z"
  }));
};

module.exports.Fullscreen = function Fullscreen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.996 11.352 16 16l-4.649-.004.001-1 2.94.003L8.5 9.208 2.708 15l2.94-.003.001 1L1 16l.004-4.649 1 .001-.003 2.939L7.793 8.5 2.001 2.708l.003 2.939-1 .001L1 1l4.649.004-.001 1-2.94-.003L8.5 7.793l5.792-5.792-2.94.003-.001-1L16 1l-.004 4.649-1-.001.003-2.939L9.207 8.5l5.792 5.792-.003-2.939 1-.001z"
  }));
};

module.exports.Gallery = function Gallery(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13 10V0H0v13h13v-3zM1 1h11v8h-.755L8.681 5.681 7.522 6.895 5.274 3.014 1.698 9H1V1zm8.982 8H2.863l2.398-4.014L7.325 8.55 8.6 7.213 9.982 9zM1 12v-2h11v2H1zm16-9v13H4v-1.984h1V15h11V4h-2V3h3z"
  }));
};

module.exports.Game = function Game(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9 3.988V1H8v2.988c-3.564.105-8 1.282-8 2.487v7.041c0 .827.673 1.5 1.5 1.5h1.79l1.996-3.931c.567.104 1.713.274 3.173.274a19.74 19.74 0 0 0 3.288-.277l1.908 3.934H15.5c.827 0 1.5-.673 1.5-1.5V6.475c0-1.205-4.437-2.383-8-2.487zm7 9.528c0 .275-.225.5-.5.5h-1.218l-1.976-4.07-.386.085c-.015.003-1.515.329-3.462.329-1.941 0-3.315-.323-3.329-.327l-.384-.093-2.068 4.075H1.5a.501.501 0 0 1-.5-.5V6.6c.502-.437 3.38-1.518 7-1.611V5h1v-.013c3.619.094 6.498 1.175 7 1.612v6.917zM5 7.02h.998v1H5v1.02H4V8.02H3v-1h1V6h1v1.02zm7.5 2c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5a1.501 1.501 0 0 0 0 3zm0-2c.275 0 .5.225.5.5s-.225.5-.5.5-.5-.225-.5-.5.225-.5.5-.5z"
  }));
};

module.exports.Gift = function Gift(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m7.839 5.611-.034.198.673-.086.031-.004.637.081-.031-.181c1.09-.202 3.308-.725 4.575-1.81.494-.422.766-.99.766-1.6s-.272-1.178-.766-1.601c-.942-.808-2.561-.807-3.503 0-.814.697-1.359 1.726-1.711 2.628-.352-.9-.897-1.926-1.711-2.621-.941-.806-2.558-.805-3.499 0-.494.422-.766.989-.766 1.597s.272 1.174.766 1.595C4.533 4.889 6.751 5.41 7.839 5.611zm2.998-4.243a1.685 1.685 0 0 1 1.101-.386c.419 0 .811.137 1.101.386.269.229.416.528.416.841 0 .312-.147.61-.416.84-1.032.883-2.929 1.355-3.966 1.558.245-.888.783-2.399 1.764-3.239zm-6.922.007A1.69 1.69 0 0 1 5.016.99c.419 0 .81.137 1.1.385.976.833 1.514 2.337 1.76 3.223-1.036-.201-2.928-.67-3.961-1.552-.268-.228-.415-.524-.415-.834 0-.311.147-.608.415-.837zM17 6H0v4h1v7h15v-7h1V6zM6.976 7h3.006l1.066 5.843-1.648-.685-1.301 1.205L6.976 7zM1 7h4.96l.353 2H1V7zm14 9H2v-6h4.49l.942 5.343 2.176-2.015 2.752 1.145L11.545 10H15v6zm1-7h-4.638l-.365-2H16v2z"
  }));
};

module.exports.Github = function Github(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13.077 11.115c0 .746-.389 1.962-1.308 1.962-.92 0-1.309-1.216-1.309-1.962 0-.745.389-1.962 1.309-1.962.919 0 1.308 1.217 1.308 1.962zM5.231 9.153c-.919 0-1.308 1.217-1.308 1.962 0 .746.389 1.962 1.308 1.962s1.308-1.216 1.308-1.962c0-.745-.389-1.962-1.308-1.962zM17 9.317c0 1.135-.112 2.34-.623 3.382-1.349 2.728-5.057 2.993-7.713 2.993-2.697 0-6.63-.234-8.03-2.993C.112 11.667 0 10.452 0 9.317c0-1.492.409-2.901 1.39-4.045a5.614 5.614 0 0 1-.276-1.738c0-.766.173-1.531.521-2.227 1.614 0 2.646.705 3.872 1.665a13.672 13.672 0 0 1 3.157-.357c.96 0 1.931.103 2.861.327 1.216-.95 2.247-1.635 3.841-1.635.348.695.521 1.461.521 2.227 0 .583-.092 1.165-.276 1.717C16.592 6.405 17 7.825 17 9.317zm-2.289 1.798c0-1.563-.949-2.942-2.615-2.942-.674 0-1.317.123-1.992.215-.531.082-1.062.112-1.604.112s-1.073-.03-1.604-.112c-.664-.092-1.318-.215-1.992-.215-1.665 0-2.615 1.379-2.615 2.942 0 3.126 2.86 3.606 5.353 3.606h1.717c2.493.001 5.352-.48 5.352-3.606z"
  }));
};

module.exports.Google = function Google(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 2.615v1.308h-2.615v2.616h-1.308V3.923h-2.615V2.615h2.615V0h1.308v2.615H17zM10.39 12.78c0 1.175-.561 2.125-1.43 2.881C7.785 16.673 6.181 17 4.669 17 2.759 17 0 16.183 0 13.813c0-.48.164-.951.379-1.38.908-1.838 3.748-2.309 5.577-2.36-.336-.439-.653-.949-.653-1.522 0-.337.121-.562.225-.878-.246.03-.48.051-.715.051-1.982 0-3.698-1.461-3.698-3.515 0-1.941 1.501-3.596 3.36-4.004A9.112 9.112 0 0 1 6.385 0h4.466L9.472.807H8.091c1.013.633 1.523 1.87 1.523 3.014 0 2.707-2.289 2.911-2.289 4.26 0 1.318 3.065 1.839 3.065 4.699zM7.725 4.853C7.725 3.3 6.886.736 4.996.736c-1.337 0-1.991 1.185-1.991 2.391 0 1.552 1.021 3.984 2.84 3.984 1.398-.001 1.88-1.012 1.88-2.258zm1.225 8.806c0-1.43-1.34-2.227-2.381-2.953-.174-.02-.338-.02-.512-.02-1.674 0-4.168.531-4.168 2.656 0 1.961 2.207 2.718 3.842 2.718 1.522 0 3.219-.613 3.219-2.401z"
  }));
};

module.exports.HandDrag = function HandDrag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13.963 5.6v5.844c0 .777-.383 1.241-.663 1.579-.234.284-.356.443-.356.694V15.5a.5.5 0 0 1-1 0v-1.783c0-.623.325-1.016.586-1.331.242-.293.434-.524.434-.941V5.6c0-.312-.268-.606-.551-.606-.329 0-.399.051-.402.053-.066.089-.064.569-.063.956.001.189.002.4-.002.632-.004.274-.213.478-.504.493a.5.5 0 0 1-.496-.5v-2.12c0-.307-.222-.538-.516-.538-.27 0-.468.201-.492.488v2.003a.5.5 0 0 1-1 0V4.45l-.002-.01v-.773c0-.066-.014-.642-.474-.642-.45 0-.518.402-.518.642v.703c0 .028-.011.054-.016.081v2.594a.5.5 0 0 1-1 0V4.361c-.048-.194-.188-.39-.466-.39-.286 0-.527.261-.527.57v3.35c0 .007-.006.013-.006.02v1.101a.5.5 0 0 1-1 0v-.834c-.176-.064-.431-.116-.577-.083-.118.023-.237.127-.311.271a.719.719 0 0 0-.009.637L5.73 12.72a.524.524 0 0 1 .035.108.546.546 0 0 0 .588.431.502.502 0 0 1 .553.497V15.5a.5.5 0 0 1-1 0v-1.286a1.536 1.536 0 0 1-1.107-1.125L3.12 9.414a1.734 1.734 0 0 1 .032-1.507c.214-.413.588-.709 1.001-.793.21-.043.494-.031.775.026v-.72c0-.01.005-.019.006-.029v-1.85c0-.866.686-1.57 1.527-1.57.2 0 .392.04.566.112.199-.644.733-1.057 1.433-1.057.668 0 1.192.422 1.389 1.061.178-.075.373-.116.579-.116.689 0 1.258.444 1.447 1.072.183-.04.369-.049.536-.049.842 0 1.552.735 1.552 1.606z"
  }));
};

module.exports.HandOpen = function HandOpen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m15.242 5.42-1.188 8.064c-.118.612-.389.88-.586 1.076-.191.19-.318.316-.318.933V16.5a.5.5 0 0 1-1 0v-1.007c0-.955.278-1.309.614-1.642.155-.154.248-.247.304-.534l1.185-8.039c.018-.123.051-.54-.273-.585-.112-.016-.203.002-.275.057-.096.071-.164.209-.188.378l-.497 3.316a.5.5 0 0 1-.78.336c-.05.008-.134-.023-.218-.078a.498.498 0 0 1-.229-.448l.285-5.286a.481.481 0 0 0-.432-.532.467.467 0 0 0-.346.109.468.468 0 0 0-.167.321l-.463 4.782a.49.49 0 0 1-.531.451 4.948 4.948 0 0 0-.246-.011.501.501 0 0 1-.49-.491l-.115-6.119A.47.47 0 0 0 8.82 1a.469.469 0 0 0-.468.468l-.118 6.586a.5.5 0 0 1-.286.443c-.062.03-.122.06-.179.092a.503.503 0 0 1-.744-.387L6.51 2.873a.472.472 0 1 0-.939.075l.503 7.097a.499.499 0 0 1-.89.346L3.633 8.438c-.203-.34-.562-.435-.84-.274a.582.582 0 0 0-.213.799l3.529 6.087c.08.139.211.236.367.274a.5.5 0 0 1 .382.486v.69a.5.5 0 0 1-1 0v-.35a1.568 1.568 0 0 1-.614-.598l-3.53-6.087a1.565 1.565 0 0 1-.16-1.202 1.585 1.585 0 0 1 2.903-.386l.506.634-.389-5.483a1.469 1.469 0 0 1 2.414-1.246c.146.123.263.269.35.431l.014-.753a1.468 1.468 0 0 1 2.936.009l.014.746c.088-.163.206-.31.353-.434a1.476 1.476 0 0 1 2.419 1.258l-.053.978a1.348 1.348 0 0 1 1.099-.314c.785.109 1.248.816 1.122 1.717z"
  }));
};

module.exports.HandPointDown = function HandPointDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13.753 11.303c-.956.577-1.702-.173-1.982-.454l-.26-.282v4.898c0 .847-.675 1.535-1.505 1.535s-1.505-.688-1.505-1.535V13.14a1.507 1.507 0 0 1-.517.091c-.79 0-1.44-.629-1.496-1.424a1.44 1.44 0 0 1-.505.09c-.83 0-1.505-.689-1.505-1.537v-.136a1.44 1.44 0 0 1-.463.075A1.527 1.527 0 0 1 2.5 8.764V5.578c0-.67.322-1.555.606-2.335.185-.507.394-1.082.394-1.309v-.856a.5.5 0 0 1 1 0v.855c0 .404-.2.955-.454 1.652-.256.703-.546 1.499-.546 1.993v3.186c0 .29.236.535.516.535.292 0 .454-.262.463-.52a.5.5 0 0 1 .5-.482h.009a.5.5 0 0 1 .491.5v1.562c0 .296.227.537.505.537.264 0 .484-.22.502-.5a.5.5 0 0 1 .998.032v1.268c0 .295.225.535.5.535a.535.535 0 0 0 .521-.461c.034-.261.267-.464.528-.435a.5.5 0 0 1 .468.499v3.631c0 .295.227.535.505.535s.505-.24.505-.535v-6.18a.5.5 0 0 1 .868-.339l1.114 1.211c.459.462.607.373.748.287a.557.557 0 0 0 .188-.74l-3.288-7.098a.488.488 0 0 0-.297-.211.5.5 0 0 1-.378-.485v-.832a.5.5 0 0 1 1 0v.499c.233.134.428.33.564.574l3.288 7.098c.393.694.148 1.631-.565 2.054z"
  }));
};

module.exports.HandPointLeft = function HandPointLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.422 13.5a.5.5 0 0 1-.5.5h-.855c-.227 0-.802.209-1.309.394-.781.284-1.666.606-2.336.606H8.237c-.847 0-1.536-.68-1.536-1.516 0-.163.026-.318.075-.463h-.135c-.847 0-1.536-.676-1.536-1.506 0-.177.031-.346.089-.504-.795-.055-1.424-.704-1.424-1.495 0-.181.032-.355.091-.518H1.535C.688 8.998 0 8.323 0 7.494c0-.83.688-1.506 1.535-1.506h4.897l-.266-.245c-.296-.295-1.043-1.04-.468-1.998a1.557 1.557 0 0 1 2.088-.547l7.028 3.252c.268.149.471.348.607.583h.5a.5.5 0 0 1 0 1h-.831a.5.5 0 0 1-.485-.378.504.504 0 0 0-.245-.315L7.332 4.089c-.294-.164-.627-.08-.775.169-.086.144-.174.29.3.764L8.053 6.12a.5.5 0 0 1-.339.868h-6.18c-.294 0-.534.227-.534.506 0 .278.24.504.535.504h3.631a.5.5 0 0 1 .065.996.535.535 0 0 0-.461.522c0 .275.24.5.535.5h1.268a.5.5 0 0 1 .031.999c-.28.018-.499.237-.499.501 0 .279.241.506.536.506h1.562a.5.5 0 0 1 .018 1c-.258.009-.52.171-.52.463 0 .279.246.515.536.515h3.185c.494 0 1.291-.29 1.994-.546.696-.254 1.247-.454 1.65-.454h.855a.5.5 0 0 1 .501.5z"
  }));
};

module.exports.HandPointRight = function HandPointRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.922 7.494c0 .829-.688 1.504-1.535 1.504h-2.325c.059.162.091.337.091.518 0 .791-.629 1.44-1.424 1.496.058.158.089.327.089.504 0 .83-.689 1.506-1.536 1.506h-.136c.049.145.075.3.075.463 0 .835-.69 1.515-1.536 1.515H5.5c-.67 0-1.555-.322-2.336-.606C2.657 14.209 2.083 14 1.855 14H1a.5.5 0 0 1 0-1h.855c.403 0 .954.2 1.65.454.704.256 1.501.546 1.995.546h3.185a.533.533 0 0 0 .536-.516c0-.292-.262-.454-.52-.463a.5.5 0 0 1 .018-1h1.562c.296 0 .536-.227.536-.506 0-.264-.219-.483-.498-.501a.5.5 0 0 1 .03-.999h1.268c.295 0 .535-.225.535-.5a.535.535 0 0 0-.462-.521.5.5 0 0 1 .065-.996h3.631c.295 0 .535-.226.535-.504 0-.279-.24-.506-.535-.506h-6.18a.5.5 0 0 1-.338-.868l1.211-1.113c.46-.459.372-.605.287-.748a.551.551 0 0 0-.742-.188L2.527 7.358a.501.501 0 0 0-.211.297.497.497 0 0 1-.484.378H1a.5.5 0 0 1 0-1h.499a1.5 1.5 0 0 1 .573-.564L9.17 3.181c.693-.39 1.632-.146 2.055.565.574.957-.173 1.702-.453 1.982l-.282.26h4.897c.846 0 1.535.676 1.535 1.506z"
  }));
};

module.exports.HandPointUp = function HandPointUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14.5 8.236v3.186c0 .67-.322 1.555-.606 2.335-.185.507-.394 1.082-.394 1.31v.855a.5.5 0 0 1-1 0v-.855c0-.404.201-.955.454-1.652.256-.702.546-1.498.546-1.992V8.236a.533.533 0 0 0-.516-.535c-.292 0-.454.262-.463.52-.009.272-.209.507-.508.482a.5.5 0 0 1-.491-.5V6.641c0-.296-.227-.537-.505-.537-.264 0-.484.22-.502.5a.484.484 0 0 1-.515.468.5.5 0 0 1-.484-.5V5.305c0-.295-.224-.535-.5-.535a.535.535 0 0 0-.521.461.491.491 0 0 1-.528.434.5.5 0 0 1-.468-.499V1.535c0-.295-.227-.535-.505-.535s-.505.24-.505.535v6.18a.5.5 0 0 1-.868.339L4.507 6.843c-.459-.462-.607-.374-.748-.287a.557.557 0 0 0-.188.74l3.288 7.098a.491.491 0 0 0 .297.211.5.5 0 0 1 .378.485v.832a.5.5 0 0 1-1 0v-.499a1.52 1.52 0 0 1-.565-.574L2.682 7.751c-.393-.694-.147-1.631.565-2.054.96-.575 1.703.173 1.982.454l.26.282V1.535C5.489.688 6.165 0 6.994 0s1.505.688 1.505 1.535V3.86a1.53 1.53 0 0 1 .517-.09c.791 0 1.44.629 1.496 1.424a1.44 1.44 0 0 1 .505-.09c.83 0 1.505.689 1.505 1.537v.136c.145-.049.3-.075.463-.075A1.526 1.526 0 0 1 14.5 8.236z"
  }));
};

module.exports.HandStop = function HandStop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14 4.403v7.258c0 .856-.337 1.867-.635 2.758-.179.538-.365 1.093-.365 1.331v.75a.5.5 0 0 1-1 0v-.75c0-.4.184-.95.417-1.647.259-.78.583-1.749.583-2.442V4.403a.47.47 0 0 0-.478-.483c-.278 0-.512.21-.521.468l-.002.009.001 3.86a.5.5 0 0 1-1 0l-.001-4.086c0-.005.003-.009.003-.015V2.75c0-.232-.14-.483-.446-.483-.274 0-.528.21-.544.45-.001.013-.01.025-.012.039v4.48a.5.5 0 0 1-1 0V2.34c0-.022.01-.042.013-.063v-.795c0-.261-.241-.482-.525-.482a.484.484 0 0 0-.497.482v.866c.002.015.009.028.009.044v4.896a.5.5 0 0 1-1 0V2.696c0-.004-.003-.007-.004-.011a.499.499 0 0 0-.5-.418.495.495 0 0 0-.505.483v5.705a.498.498 0 0 1-.873.332L4.001 7.533c-.393-.459-.656-.311-.753-.255a.48.48 0 0 0-.232.297.466.466 0 0 0 .05.357l3.292 7.009a.503.503 0 0 0 .294.188.499.499 0 0 1 .382.486v.885a.5.5 0 0 1-1 0v-.546a1.487 1.487 0 0 1-.56-.545l-3.291-7.01a1.42 1.42 0 0 1-.134-1.081c.103-.387.354-.71.706-.91.676-.381 1.422-.206 2 .468l.237.266V2.75c0-.818.675-1.483 1.505-1.483.174 0 .343.03.5.085A1.493 1.493 0 0 1 8.488 0c.801 0 1.459.604 1.521 1.367.171-.064.356-.1.548-.1.811 0 1.446.651 1.446 1.483v.262c.163-.059.338-.091.52-.091A1.463 1.463 0 0 1 14 4.403z"
  }));
};

module.exports.Harddrive = function Harddrive(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14.134 2.996H2.868L0 7.37v6.634h17V7.435l-2.866-4.439zm-10.725 1h10.18l1.942 3.008H1.437l1.972-3.008zM1 13.004v-5h15v5H1zm12.5-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm0 2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5z"
  }));
};

module.exports.Harddrives = function Harddrives(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13.5 12.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5S15 14.827 15 14s-.673-1.5-1.5-1.5zm0 2c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5zM17 3.15 14.077 0H2.926L0 3.087V9.52h.936L0 10.692V17h17v-6.26l-1.046-1.22H17V3.15zM3.355 1h10.286l1.854 2H1.46l1.895-2zM1 16v-4h15v4H1zm14.906-5H1.033l1.181-1.48h12.424L15.906 11zM1 8.52V4h15v4.52H1zM13.5 5c-.827 0-1.5.673-1.5 1.5 0 .826.673 1.499 1.5 1.499S15 7.326 15 6.5c0-.827-.673-1.5-1.5-1.5zm0 1.999a.5.5 0 0 1 0-.999.5.5 0 0 1 0 .999z"
  }));
};

module.exports.HeadphoneAlt = function HeadphoneAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.668 6.017C14.711 2.46 11.805 0 8.5 0 5.205 0 2.288 2.464 1.332 6.017A1.494 1.494 0 0 0 0 7.5v4a1.5 1.5 0 0 0 .924 1.385C1.118 14.632 2.587 16 4.385 16h2.707c.207.581.757 1 1.408 1h3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-3c-.651 0-1.201.419-1.408 1H4.385a2.502 2.502 0 0 1-2.449-2H3v-1h1V7H3V6h-.606C3.307 3.039 5.746 1 8.5 1c2.762 0 5.193 2.037 6.106 5H14v1h-1v5h1v1h1.506C16.33 13 17 12.327 17 11.5v-4c0-.771-.585-1.401-1.332-1.483zM8.5 15h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zM2 12h-.506A.498.498 0 0 1 1 11.5v-4c0-.276.222-.5.494-.5H2v5zm14-.5c0 .276-.222.5-.494.5H15V7h.506c.272 0 .494.224.494.5v4z"
  }));
};

module.exports.Headphone = function Headphone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.981 8.085C15.789 3.592 12.512 0 8.5 0S1.211 3.592 1.019 8.085A1.498 1.498 0 0 0 0 9.5v4c0 .827.67 1.5 1.494 1.5H3v-1h1V9H3V8h-.978c.225-3.902 3.04-7 6.478-7s6.253 3.098 6.478 7H14v1h-1v5h1v1h1.506C16.33 15 17 14.327 17 13.5v-4c0-.659-.429-1.214-1.019-1.415zM2 14h-.506A.498.498 0 0 1 1 13.5v-4c0-.275.222-.5.494-.5H2v5zm14-.5c0 .275-.222.5-.494.5H15V9h.506c.272 0 .494.225.494.5v4z"
  }));
};

module.exports.HeartBroken = function HeartBroken(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M.153 6.276A4.53 4.53 0 0 1 0 5.158c0-2.481 2.019-4.5 4.5-4.5 1.739 0 3.251.992 4 2.439a4.506 4.506 0 0 1 4-2.439c2.481 0 4.5 2.019 4.5 4.5 0 .342-.047.688-.147 1.091l-.113.368c-.081.331-.228.721-.453 1.199l-.904-.426c.196-.418.322-.749.395-1.041l.112-.369c.073-.295.11-.564.11-.822 0-1.93-1.57-3.5-3.5-3.5S9 3.229 9 5.158H8c0-1.93-1.57-3.5-3.5-3.5S1 3.229 1 5.158c0 .259.038.536.116.847l.1.316c.094.287.235.618.441 1.033L.761 7.8a8.975 8.975 0 0 1-.498-1.173l-.11-.351zm8.346 8.935c-.806-.633-3.102-2.533-4.976-5.013l-.797.604c2.394 3.167 5.354 5.352 5.478 5.443l.298.218.296-.22c.129-.095 3.187-2.374 5.536-5.438l-.793-.609c-1.848 2.409-4.219 4.366-5.042 5.015zm5.673-7.796-2.832 2-2.832-2-2.833 2-2.837-1.999-3.126 2.202.576.818 2.55-1.798 2.837 2.001 2.833-2 2.832 2 2.832-2 2.539 1.796.578-.816-3.117-2.204z"
  }));
};

module.exports.Heart = function Heart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M12.5.658a4.506 4.506 0 0 0-4 2.439 4.506 4.506 0 0 0-4-2.439 4.505 4.505 0 0 0-4.5 4.5c0 .343.048.699.154 1.118l.109.351c1.432 4.354 7.659 9.393 7.924 9.604l.313.252.313-.252c.282-.227 6.926-5.598 7.927-9.614l.112-.368c.101-.402.148-.749.148-1.091 0-2.481-2.019-4.5-4.5-4.5zm3.389 5.322-.113.37c-.809 3.246-5.946 7.727-7.276 8.843-1.282-1.083-6.122-5.337-7.285-8.872l-.1-.316A3.517 3.517 0 0 1 1 5.158c0-1.93 1.57-3.5 3.5-3.5S8 3.229 8 5.158v.252h1v-.252c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .258-.038.527-.111.822z"
  }));
};

module.exports.HelpAlt = function HelpAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 0C3.813 0 0 3.813 0 8.5S3.813 17 8.5 17 17 13.187 17 8.5 13.187 0 8.5 0zm0 16C4.364 16 1 12.636 1 8.5S4.364 1 8.5 1 16 4.364 16 8.5 12.636 16 8.5 16zm1.158-3.781a1.032 1.032 0 1 1-2.064-.002 1.032 1.032 0 0 1 2.064.002zm1.004-8.004c.448.565.674 1.328.55 1.855-.243 1.027-.842 1.567-1.371 2.043-.543.489-.934.84-.934 1.647h-1c0-1.251.671-1.856 1.264-2.39.461-.415.896-.807 1.066-1.529.034-.143-.039-.6-.36-1.005-.307-.389-.728-.586-1.248-.586-1.779 0-1.869 1.444-1.873 1.609l-1-.027c.024-.893.655-2.582 2.873-2.582.818 0 1.539.343 2.033.965z"
  }));
};

module.exports.Help = function Help(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M10.311 14.831a1.63 1.63 0 1 1-3.26-.003 1.63 1.63 0 0 1 3.26.003zm1.357-12.458C11.156 1.728 10.224.959 8.685.959c-4.098 0-4.245 3.758-4.246 3.796l1 .026c.003-.115.11-2.822 3.246-2.822 1.14 0 1.825.563 2.199 1.035.555.7.7 1.508.624 1.833-.291 1.229-1.011 1.877-1.773 2.563-.935.841-1.9 1.71-1.9 3.558h1c0-1.402.692-2.026 1.569-2.815.804-.724 1.715-1.544 2.077-3.078.149-.634-.083-1.76-.813-2.682z"
  }));
};

module.exports.Home = function Home(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14 16h-3v-6H6v6H3V7H2v10h13V7h-1v9zm-7 0v-5h3v5H7zm9.796-9.527-.592.807L8.5 1.62.796 7.278l-.592-.806L8.5.38l8.296 6.093z"
  }));
};

module.exports.Html5 = function Html5(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m15.54.5-1.28 14.379L8.48 16.5l-5.74-1.621L1.46.5h14.08zm-2.62 2.939H4.08l.47 5.34h6.121l-.222 2.279-1.969.532-1.96-.531-.13-1.399H4.641l.22 2.779 3.62 1h.039v-.01l3.591-.99.5-5.44H6.17l-.15-1.81h6.74l.16-1.75z"
  }));
};

module.exports.Hummer = function Hummer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9 4h5.625l-3.609-4H4v4h4v3.723H6.875V17h3.25V7.723H9V4zM5 1h5.571l1.805 2H5V1zm4.125 15h-1.25V8.723h1.25V16z"
  }));
};

module.exports.IdBadge = function IdBadge(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 3v12h17V3H0zm16 11H1V4h15v10zm-13.438-.489-1-.022c.033-1.43 1.398-2.652 3.309-3.017v-.326c-.248-.259-.425-.61-.545-.923a1.239 1.239 0 0 1-.399-.516c-.185-.41-.153-.821.063-1.068a4.04 4.04 0 0 1-.006-.217l-.002-.184c-.006-.537-.016-1.42.929-1.584.194-.339.483-.627 1.179-.651 1.123-.035 1.916.378 2.185 1.151.091.265.006.485-.056.645-.059.152-.115.295-.082.564.013.107.011.212.003.312.175.237.211.597.082.975-.095.273-.249.484-.434.608-.111.287-.27.604-.487.845v.377c1.909.375 3.228 1.571 3.261 3.008l-1 .023c-.023-1.021-1.21-1.908-2.823-2.109l-.438-.055V9.638l.2-.15c.106-.08.271-.321.415-.761l.135-.344.074-.631c.014-.106.027-.207.019-.268-.062-.52.066-.85.142-1.046l.012-.031c-.21-.396-.879-.413-1.171-.406-.277.011-.297.05-.351.153-.068.132-.229.442-.637.478-.092.008-.121.027-.121.027-.041.064-.038.367-.036.568l.001.195c0 .141.01.292.029.446l.07.573.12.021.003.248c.154.466.339.721.451.798l.215.149v1.687l-.442.052c-1.612.189-2.844 1.098-2.867 2.115zM15 8h-5V7h5v1zm-1 2h-4V9h4v1z"
  }));
};

module.exports.Image = function Image(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M1 1v15h15V1H1zm14 14H2v-2h13v2zM2 12V2h13v10H2zm12.203-1.835-.697.717-2.417-2.349-1.554 1.676-2.486-4.415-3.401 4.975-.826-.564 4.31-6.303 2.604 4.622 1.317-1.422 3.15 3.063z"
  }));
};

module.exports.Import = function Import(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m8.5 13.677-4.853-4.83.705-.709L8 11.769V.972h1v10.797l3.647-3.63.705.709L8.5 13.677zM16 9.03v6.47a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5V9.025H0V15.5c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V9.03h-1z"
  }));
};

module.exports.Infinite = function Infinite(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 8c0 2.206-1.794 4-4 4a3.98 3.98 0 0 1-3.074-1.452l-.002.001-.014-.018c-.011-.014-.026-.023-.038-.038l.004-.003-3.634-4.482A3.003 3.003 0 0 0 4 5C2.346 5 1 6.346 1 8s1.346 3 3 3c.915 0 1.769-.41 2.342-1.125l.009.007.817-1.012.778.628-.823 1.019-.01-.008A3.98 3.98 0 0 1 4 12c-2.206 0-4-1.794-4-4s1.794-4 4-4c1.12 0 2.186.477 2.943 1.301l.008-.006.042.052 3.698 4.56A2.983 2.983 0 0 0 13 11c1.654 0 3-1.346 3-3s-1.346-3-3-3c-.846 0-1.65.362-2.22.989l-.948 1.175-.778-.628.948-1.175-.004-.003A4.003 4.003 0 0 1 13 4c2.206 0 4 1.794 4 4z"
  }));
};

module.exports.InfoAlt = function InfoAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 0C3.813 0 0 3.813 0 8.5S3.813 17 8.5 17 17 13.187 17 8.5 13.187 0 8.5 0zm0 16C4.364 16 1 12.636 1 8.5S4.364 1 8.5 1 16 4.364 16 8.5 12.636 16 8.5 16zm.5-3.631h.979v1H7.021v-1H8v-4.42h-.946v-1H9v5.42zM7.185 4.986a.985.985 0 1 1 1.97-.001.985.985 0 0 1-1.97.001z"
  }));
};

module.exports.Info = function Info(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M10.8 14.276v1H6.2v-1H8V6.845H6.25v-1H9v8.431h1.8zM7.988 4.045A1.533 1.533 0 1 0 7.987.978a1.533 1.533 0 0 0 .001 3.067z"
  }));
};

module.exports.InkPen = function InkPen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M3 0v6.499l5.466 9.499L14 6.5V0H3zm5.471 14h.002l-.001.002L8.471 14zM8.5 6a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm4.5.23-4 6.866V6.929c.86-.223 1.5-1 1.5-1.929 0-1.103-.897-2-2-2s-2 .897-2 2c0 .929.64 1.706 1.5 1.929v6.254L4 6.231V1h9v5.23z"
  }));
};

module.exports.Instagram = function Instagram(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13 0H4C1.8 0 0 1.8 0 4v9c0 2.2 1.8 4 4 4h9c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm3 13c0 1.654-1.346 3-3 3H4c-1.654 0-3-1.346-3-3V7h3.207a4.691 4.691 0 0 0-.457 2c0 2.619 2.131 4.75 4.75 4.75s4.75-2.131 4.75-4.75c0-.717-.171-1.39-.457-2H16v6zm-3.75-4c0 2.068-1.682 3.75-3.75 3.75S4.75 11.068 4.75 9 6.432 5.25 8.5 5.25 12.25 6.932 12.25 9zm-.098-3C11.28 4.941 9.976 4.25 8.5 4.25S5.72 4.941 4.848 6H1V4c0-1.654 1.346-3 3-3h9c1.654 0 3 1.346 3 3v2h-3.848zm2.302-3.278V4.02a.544.544 0 0 1-.542.543h-1.368A.546.546 0 0 1 12 4.02V2.722c0-.299.244-.543.544-.543h1.368c.298 0 .542.244.542.543z"
  }));
};

module.exports.Italic = function Italic(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M11.895 2.014 6.204 15H7v1H4v-1h1.111l5.691-12.986H10v-1h3v1h-1.105z"
  }));
};

module.exports.Joomla = function Joomla(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m9.979 12.011-1.573 1.583-.312.312a3.552 3.552 0 0 1-3.364.927 2.142 2.142 0 0 1-4.23-.479c0-1.009.698-1.864 1.646-2.082a3.533 3.533 0 0 1 .927-3.386l.125-.125 1.573 1.584-.114.114c-.521.51-.51 1.343 0 1.863.51.511 1.344.511 1.854 0l.313-.312 1.573-1.584 1.677-1.666 1.573 1.584-1.668 1.667zm-1.76-8.646L6.636 4.947l-.126-.125a1.315 1.315 0 0 0-1.854 0 1.328 1.328 0 0 0 0 1.865l3.552 3.552-1.572 1.583-1.677-1.667-1.573-1.582-.313-.312c-.959-.948-1.25-2.313-.886-3.532A2.124 2.124 0 0 1 .521 2.646a2.14 2.14 0 0 1 4.25-.354 3.57 3.57 0 0 1 3.323.947l.125.126zm6.406 1.406a3.546 3.546 0 0 1-.906 3.489l-.125.125-1.573-1.584.125-.124c.51-.511.51-1.345 0-1.855a1.315 1.315 0 0 0-1.854 0L6.729 8.386 5.146 6.802l1.677-1.667 1.583-1.582.302-.313a3.548 3.548 0 0 1 3.511-.895 2.142 2.142 0 0 1 4.261.301 2.156 2.156 0 0 1-1.855 2.125zM14.364 16.5a2.146 2.146 0 0 1-2.104-1.719 3.547 3.547 0 0 1-3.552-.875l-.114-.125 1.573-1.583.125.124c.51.511 1.344.511 1.854 0 .51-.51.51-1.343 0-1.854l-.312-.313-3.251-3.249 1.583-1.584 3.25 3.251.303.312a3.532 3.532 0 0 1 .937 3.354 2.141 2.141 0 0 1-.292 4.261z"
  }));
};

module.exports.Jsfiddle = function Jsfiddle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.5 10.867c0 1.711-1.414 3.102-3.148 3.102-.062 0-.117-.008-.172-.008H3.672C1.922 13.859.5 12.523.5 10.789c0-1.164.633-2.18 1.578-2.734a2.17 2.17 0 0 1-.094-.641c0-1.195.977-2.164 2.195-2.164.5 0 .969.172 1.344.453a4.754 4.754 0 0 1 4.289-2.672c2.633 0 4.758 2.102 4.758 4.688 0 .094-.008.188-.008.281 1.133.469 1.938 1.578 1.938 2.867zM6.438 12.141c.766 0 1.32-.242 1.875-.773-.227-.281-.477-.555-.711-.836-.32.312-.672.508-1.125.508-.555 0-1.031-.367-1.031-.945 0-.57.477-.945 1.016-.945 1.719 0 2.086 3 4.586 3 1.219 0 2.25-.766 2.25-2.047 0-1.297-1.039-2.055-2.273-2.055-.766 0-1.336.219-1.883.758.25.273.484.562.727.844.312-.305.664-.5 1.109-.5.516 0 1.031.367 1.031.914 0 .602-.438.984-1.023.984-1.664 0-2.109-3-4.547-3-1.211 0-2.281.742-2.281 2.031-.002 1.319 1.037 2.062 2.28 2.062z"
  }));
};

module.exports.Key = function Key(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m14.811 6.299.707-.707-1.733-1.733.757-.753-.705-.709-8.146 8.107a2.976 2.976 0 0 0-1.703-.535c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-.661-.222-1.268-.585-1.764l5.264-5.238 1.738 1.738.707-.707-1.737-1.736.701-.698 1.735 1.735zm-10.824 8.67c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
  }));
};

module.exports.LayersAlt = function LayersAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M11 1H0v9h11V1zm-1 8H1V2h9v7zm4 4H3v-1.981h1V12h9V5h-.994V4H14v9zm3-6v9H6v-1.981h1V15h9V8h-.994V7H17z"
  }));
};

module.exports.Layers = function Layers(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13 1H0v11h13V1zm-1 10H1V2h11v9zm5-6v11H4v-3.031h1V15h11V6h-2.016V5H17z"
  }));
};

module.exports.LayoutAccordionList = function LayoutAccordionList(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M4 0v9h13V0H4zm12 8H5V1h11v7zM0 3h3V0H0v3zm1-2h1v1H1V1zm3 12h13v-3H4v3zm1-2h11v1H5v-1zm-5 2h3v-3H0v3zm1-2h1v1H1v-1zm3 6h13v-3H4v3zm1-2h11v1H5v-1zm-5 2h3v-3H0v3zm1-2h1v1H1v-1z"
  }));
};

module.exports.LayoutAccordionMerged = function LayoutAccordionMerged(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 0v17h17V0H0zm16 1v9H1V1h15zm0 10v2H1v-2h15zM1 16v-2h15v2H1z"
  }));
};

module.exports.LayoutAccordionSeparated = function LayoutAccordionSeparated(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 0v3h17V0H0zm16 2H1V1h15v1zM0 13h17V4H0v9zm1-8h15v7H1V5zM0 17h17v-3H0v3zm1-2h15v1H1v-1z"
  }));
};

module.exports.LayoutColumn2Alt = function LayoutColumn2Alt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 0h8v17H0V0zm9 0v17h8V0H9z"
  }));
};

module.exports.LayoutColumn2 = function LayoutColumn2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 17h8V0H0v17zM1 1h6v15H1V1zm8-1v17h8V0H9zm7 16h-6V1h6v15z"
  }));
};

module.exports.LayoutColumn3Alt = function LayoutColumn3Alt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 0h5v17H0V0zm6 17h5V0H6v17zm6-17v17h5V0h-5z"
  }));
};

module.exports.LayoutColumn3 = function LayoutColumn3(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 17h5V0H0v17zM1 1h3v15H1V1zm5 16h5V0H6v17zM7 1h3v15H7V1zm5-1v17h5V0h-5zm4 16h-3V1h3v15z"
  }));
};

module.exports.LayoutColumn4Alt = function LayoutColumn4Alt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M1 0h3v17H1V0zm4 17h3V0H5v17zm4 0h3V0H9v17zm4-17v17h3V0h-3z"
  }));
};

module.exports.LayoutColumn4 = function LayoutColumn4(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M1 17h3V0H1v17zM2 1h1v15H2V1zm3 16h3V0H5v17zM6 1h1v15H6V1zm3 16h3V0H9v17zm1-16h1v15h-1V1zm3-1v17h3V0h-3zm2 16h-1V1h1v15z"
  }));
};

module.exports.LayoutCtaBtnLeft = function LayoutCtaBtnLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15 7H8V6h7v1zM8.007 9h5V8h-5v1zM17 3v10H0V3h17zm-1 1H1v8h15V4zM7 6H2v2h5V6z"
  }));
};

module.exports.LayoutCtaBtnRight = function LayoutCtaBtnRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9 7H2V6h7v1zM3.993 9h5V8h-5v1zM17 3v10H0V3h17zm-1 1H1v8h15V4zm-1 2h-5v2h5V6z"
  }));
};

module.exports.LayoutCtaCenter = function LayoutCtaCenter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14 8H3V7h11v1zm3-5v11H0V3h17zm-1 1H1v9h15V4zm-9.643 7h4.286V9H6.357v2z"
  }));
};

module.exports.LayoutCtaLeft = function LayoutCtaLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 3v11h17V3H0zm16 10H1V4h15v9zm-3-5H3V7h10v1zm-5 3H3V9h5v2z"
  }));
};

module.exports.LayoutCtaRight = function LayoutCtaRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 3v11h17V3H0zm16 10H1V4h15v9zm-2-5H4V7h10v1zM9 9h5v2H9V9z"
  }));
};

module.exports.LayoutGrid2Alt = function LayoutGrid2Alt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 0h7v7H0V0zm9 0v7h7V0H9zM0 16h7V9H0v7zm9 0h7V9H9v7z"
  }));
};

module.exports.LayoutGrid2Thumb = function LayoutGrid2Thumb(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 2h3v3H0V2zm9 3h3V2H9v3zm-9 8h3v-3H0v3zm9 0h3v-3H9v3zM4 3h4V2H4v1zm0 2h4V4H4v1zm9-3v1h4V2h-4zm0 3h4V4h-4v1zm-6 .999H4v1h3v-1zm9 0h-3v1h3v-1zM4 11h4v-1H4v1zm0 2h4v-1H4v1zm9-2h4v-1h-4v1zm0 2h4v-1h-4v1zm-9 1.999h3v-1H4v1zm9 0h3v-1h-3v1z"
  }));
};

module.exports.LayoutGrid2 = function LayoutGrid2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 7h7V0H0v7zm1-6h5v5H1V1z"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9 0v7h7V0H9zm6 6h-5V1h5v5z"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 16h7V9H0v7zm1-6h5v5H1v-5z"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9 16h7V9H9v7zm1-6h5v5h-5v-5z"
  }));
};

module.exports.LayoutGrid3Alt = function LayoutGrid3Alt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 0h5v5H0V0zm6 5h5V0H6v5zm6-5v5h5V0h-5zM0 11h5V6H0v5zm6 0h5V6H6v5zm6 0h5V6h-5v5zM0 17h5v-5H0v5zm6 0h5v-5H6v5zm6 0h5v-5h-5v5z"
  }));
};

module.exports.LayoutGrid3 = function LayoutGrid3(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 5h5V0H0v5zm1-4h3v3H1V1zm5 4h5V0H6v5zm1-4h3v3H7V1zm5-1v5h5V0h-5zm4 4h-3V1h3v3zM0 11h5V6H0v5zm1-4h3v3H1V7zm5 4h5V6H6v5zm1-4h3v3H7V7zm5 4h5V6h-5v5zm1-4h3v3h-3V7zM0 17h5v-5H0v5zm1-4h3v3H1v-3zm5 4h5v-5H6v5zm1-4h3v3H7v-3zm5 4h5v-5h-5v5zm1-4h3v3h-3v-3z"
  }));
};

module.exports.LayoutGrid4Alt = function LayoutGrid4Alt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M1 1h3v3H1V1zm4 3h3V1H5v3zm4 0h3V1H9v3zm4-3v3h3V1h-3zM1 8h3V5H1v3zm4 0h3V5H5v3zm4 0h3V5H9v3zm4 0h3V5h-3v3zM1 12h3V9H1v3zm4 0h3V9H5v3zm4 0h3V9H9v3zm4 0h3V9h-3v3zM1 16h3v-3H1v3zm4 0h3v-3H5v3zm4 0h3v-3H9v3zm4 0h3v-3h-3v3z"
  }));
};

module.exports.LayoutGrid4 = function LayoutGrid4(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M1 4h3V1H1v3zm1-2h1v1H2V2zm3 2h3V1H5v3zm1-2h1v1H6V2zm3 2h3V1H9v3zm1-2h1v1h-1V2zm3-1v3h3V1h-3zm2 2h-1V2h1v1zM1 8h3V5H1v3zm1-2h1v1H2V6zm3 2h3V5H5v3zm1-2h1v1H6V6zm3 2h3V5H9v3zm1-2h1v1h-1V6zm3 2h3V5h-3v3zm1-2h1v1h-1V6zM1 12h3V9H1v3zm1-2h1v1H2v-1zm3 2h3V9H5v3zm1-2h1v1H6v-1zm3 2h3V9H9v3zm1-2h1v1h-1v-1zm3 2h3V9h-3v3zm1-2h1v1h-1v-1zM1 16h3v-3H1v3zm1-2h1v1H2v-1zm3 2h3v-3H5v3zm1-2h1v1H6v-1zm3 2h3v-3H9v3zm1-2h1v1h-1v-1zm3 2h3v-3h-3v3zm1-2h1v1h-1v-1z"
  }));
};

module.exports.LayoutLineSolid = function LayoutLineSolid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 8v1H0V8h17z"
  }));
};

module.exports.LayoutListLargeImage = function LayoutListLargeImage(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.497 5H14V4h2.497v1zm-.998 2.996H14v1h1.499v-1zm-1.495-1.998v1H17v-1h-2.996zM14 10.993h2.996v-1H14v1zM14 13h2.497v-1H14v1zM0 4h13v9H0V4zm1 8h11V5H1v7z"
  }));
};

module.exports.LayoutListPost = function LayoutListPost(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14 5H0V3h14v2zM0 6v1h17V6H0zm14 4H0v2h14v-2zM0 14h17v-1H0v1z"
  }));
};

module.exports.LayoutListThumbAlt = function LayoutListThumbAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15 5H6V4h9v1zM6 6v1h11V6H6zM0 8h5V3H0v5zm15 3H6v1h9v-1zm-9 3h11v-1H6v1zm-6 1h5v-5H0v5z"
  }));
};

module.exports.LayoutListThumb = function LayoutListThumb(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15 4H6V3h9v1zM6 5v1h11V5H6zM0 2h5v5H0V2zm1 4h3V3H1v3zm14 4H6v1h9v-1zm-9 3h11v-1H6v1zM0 9h5v5H0V9zm1 4h3v-3H1v3z"
  }));
};

module.exports.LayoutMediaCenterAlt = function LayoutMediaCenterAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M1 13h15v1H1v-1zm3 2.993h9v-1H4v1zM17 1v11H0V1h17zm-1 1H1v9h15V2z"
  }));
};

module.exports.LayoutMediaCenter = function LayoutMediaCenter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M1 4v6h15V4H1zm14 5H2V5h13v4zm-1 2v1H3v-1h11zM2 13h13v1H2v-1z"
  }));
};

module.exports.LayoutMediaLeftAlt = function LayoutMediaLeftAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 13h15v1H0v-1zm0 2.993h10v-1H0v1zM17 1v11H0V1h17zm-1 1H1v9h15V2z"
  }));
};

module.exports.LayoutMediaLeft = function LayoutMediaLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M10 4h5.826v1H10V4z"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M10 7.996h3.497v1H10v-1z"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M10.009 5.998H17v1h-6.991v-1z"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M10 9.993h6.991v1H10v-1z"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M10 12h5.826v1H10v-1z"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 13h9V4H0v9zm1-8h7v7H1V5z"
  }));
};

module.exports.LayoutMediaOverlayAlt2 = function LayoutMediaOverlayAlt2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M12 9H2V8h10v1zm0 1H2v1h10v-1zm5-9v15H0V1h17zm-1 1H1v13h15V2z"
  }));
};

module.exports.LayoutMediaOverlayAlt = function LayoutMediaOverlayAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 2v12h17V2H0zm1 8.01V3h15v7.01H1z"
  }));
};

module.exports.LayoutMediaOverlay = function LayoutMediaOverlay(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15 12H2v-1h13v1zm-3 .993H2v1h10v-1zM17 1v15H0V1h17zm-1 1H1v13h15V2z"
  }));
};

module.exports.LayoutMediaRightAlt = function LayoutMediaRightAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M2 13h15v1H2v-1zm5 2.993h10v-1H7v1zM17 1v11H0V1h17zm-1 1H1v9h15V2z"
  }));
};

module.exports.LayoutMediaRight = function LayoutMediaRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8 4v9h9V4H8zm8 8H9V5h7v7zM1.174 4H7v1H1.174V4zm2.329 3.996H7v1H3.503v-1zm3.488-.998H0v-1h6.991v1zM.009 9.993H7v1H.009v-1zM1.174 12H7v1H1.174v-1z"
  }));
};

module.exports.LayoutMenuFull = function LayoutMenuFull(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 7v3h17V7H0zm9 1h3v1H9V8zM8 9H5V8h3v1zM1 8h3v1H1V8zm15 1h-3V8h3v1z"
  }));
};

module.exports.LayoutMenuSeparated = function LayoutMenuSeparated(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 10h5V7H0v3zm1-2h3v1H1V8zm5 2h5V7H6v3zm1-2h3v1H7V8zm5-1v3h5V7h-5zm4 2h-3V8h3v1z"
  }));
};

module.exports.LayoutMenuV = function LayoutMenuV(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M3 1v3h11V1H3zm10 2H4V2h9v1zM3 8h11V5H3v3zm1-2h9v1H4V6zm-1 5.997h11v-3H3v3zm1-2h9v1H4v-1zm-1 6h11v-3H3v3zm1-2h9v1H4v-1z"
  }));
};

module.exports.LayoutMenu = function LayoutMenu(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 7v3h13V7H0zm8 1v1H5V8h3zM1 8h3v1H1V8zm11 1H9V8h3v1z"
  }));
};

module.exports.LayoutPlaceholder = function LayoutPlaceholder(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M.021 1.012v15h17v-15h-17zm8.116 7.497-7.116 6.197V2.294l7.116 6.215zM1.459 2.012h14.138L8.518 8.177 1.459 2.012zm7.058 6.829 7.066 6.171H1.431l7.086-6.171zm.381-.332 7.123-6.204V14.73L8.898 8.509z"
  }));
};

module.exports.LayoutSidebar2 = function LayoutSidebar2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 0v17h-4V0h4zM0 17h3V0H0v17zm11 0h1v-1h-1v1zm-3.429 0h.857v-1h-.857v1zm1.715 0h.857v-1h-.857v1zm-3.429 0h.857v-1h-.857v1zM4 17h1v-1H4v1zM4 3h1V2H4v1zm0 10h1v-1H4v1zm0 2h1v-1H4v1zm0-4h1v-1H4v1zm0-4h1V6H4v1zm0-2h1V4H4v1zm0 4h1V8H4v1zm0-8h1V0H4v1zm1.857 0h.857V0h-.857v1zm3.429 0h.857V0h-.857v1zM7.571 1h.857V0h-.857v1zM11 1h1V0h-1v1zm0 4h1V4h-1v1zm0-2h1V2h-1v1zm0 4h1V6h-1v1zm0 2h1V8h-1v1zm0 6h1v-1h-1v1zm0-2h1v-1h-1v1zm0-2h1v-1h-1v1z"
  }));
};

module.exports.LayoutSidebarLeft = function LayoutSidebarLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 0h5v17H0V0zm7 17h1v-1H7v1zm7.222 0h.889v-1h-.889v1zm-1.778 0h.889v-1h-.889v1zm-3.555 0h.889v-1h-.889v1zm1.778 0h.889v-1h-.889v1zM16 17h1v-1h-1v1zm0-14h1V2h-1v1zm0 12h1v-1h-1v1zm0-8h1V6h-1v1zm0-2h1V4h-1v1zm0 4h1V8h-1v1zm0 2h1v-1h-1v1zm0 2h1v-1h-1v1zm0-13v1h1V0h-1zm-1.777 1h.889V0h-.889v1zm-1.778 0h.889V0h-.889v1zm-1.778 0h.889V0h-.889v1zM8.889 1h.889V0h-.889v1zM7 1h1V0H7v1zm0 14h1v-1H7v1zm0-2h1v-1H7v1zm0-6h1V6H7v1zm0 4h1v-1H7v1zm0-6h1V4H7v1zm0-2h1V2H7v1zm0 6h1V8H7v1z"
  }));
};

module.exports.LayoutSidebarNone = function LayoutSidebarNone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 16h1v1H0v-1zm14 1h1v-1h-1v1zm-2 0h1v-1h-1v1zm-2 0h1v-1h-1v1zm-2 0h1v-1H8v1zm-2 0h1v-1H6v1zm-4 0h1v-1H2v1zm2 0h1v-1H4v1zm12 0h1v-1h-1v1zm0-6h1v-1h-1v1zm0 2h1v-1h-1v1zm0-8h1V4h-1v1zm0 4h1V8h-1v1zm0-2h1V6h-1v1zm0-4h1V2h-1v1zm0 12h1v-1h-1v1zm0-15v1h1V0h-1zM4 1h1V0H4v1zM2 1h1V0H2v1zm10 0h1V0h-1v1zm-2 0h1V0h-1v1zM6 1h1V0H6v1zm8 0h1V0h-1v1zM8 1h1V0H8v1zM0 1h1V0H0v1zm0 12h1v-1H0v1zm0 2h1v-1H0v1zm0-4h1v-1H0v1zm0-6h1V4H0v1zm0 4h1V8H0v1zm0-6h1V2H0v1zm0 4h1V6H0v1z"
  }));
};

module.exports.LayoutSidebarRight = function LayoutSidebarRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 0v17h-5V0h5zM9 17h1v-1H9v1zm-1.777 0h.889v-1h-.889v1zm-5.334 0h.889v-1h-.889v1zm1.778 0h.889v-1h-.889v1zm1.778 0h.889v-1h-.889v1zM0 17h1v-1H0v1zm0-8h1V8H0v1zm0-6h1V2H0v1zm0 8h1v-1H0v1zm0-4h1V6H0v1zm0 6h1v-1H0v1zm0 2h1v-1H0v1zM0 5h1V4H0v1zm0-4h1V0H0v1zm8.111-1h-.889v1h.889V0zM6.333 0h-.889v1h.889V0zM2.777 0h-.888v1h.889V0zm1.778 0h-.888v1h.889V0zM9 1h1V0H9v1zm0 14h1v-1H9v1zm0-2h1v-1H9v1zm0-4h1V8H9v1zm0 2h1v-1H9v1zm0-6h1V4H9v1zm0 2h1V6H9v1zm0-4h1V2H9v1z"
  }));
};

module.exports.LayoutSliderAlt = function LayoutSliderAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M2 14h13V3H2v11zM3 4h11v9H3V4z"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16 4.531h1v7.938h-1V4.531z"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 4.531h1v7.938H0V4.531z"
  }));
};

module.exports.LayoutSlider = function LayoutSlider(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 1v14h17V1H0zm16 13H1V2h15v12zM4.646 10.354 2.293 8l2.354-2.354.707.707L3.707 8l1.646 1.646-.707.708zm7-.708L13.293 8l-1.646-1.646.707-.707L14.707 8l-2.354 2.354-.707-.708z"
  }));
};

module.exports.LayoutTabMin = function LayoutTabMin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M7 2V1H0v3.997h1V2h5v3h11V2H7zm0 1h4v1H7V3zm5 1V3h4v1h-4z"
  }));
};

module.exports.LayoutTabV = function LayoutTabV(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M6 1v1H0v4h1v4h5v6.018h11V1H6zM2 6h4v1H2V6zm0 3V8h4v1H2zm14 6.018H7V5H1V3h6V2h9v13.018z"
  }));
};

module.exports.LayoutTabWindow = function LayoutTabWindow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M12 2H0v14h17V2h-5zm4 1v2h-4V3h4zm-5 0v2H6V3h5zM1 3h4v2H1V3zm15 12H1V6h15v9z"
  }));
};

module.exports.LayoutTab = function LayoutTab(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M7 3V2H0v14h17V3H7zm4 1v1H7V4h4zm5 11H1V3h5v3h10v9zM12 5V4h4v1h-4z"
  }));
};

module.exports.LayoutWidthDefaultAlt = function LayoutWidthDefaultAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M2 16h1v1H2v-1zm8 1h1v-1h-1v1zm2 0h1v-1h-1v1zm-8 0h1v-1H4v1zm2 0h1v-1H6v1zm2 0h1v-1H8v1zm6 0h1v-1h-1v1zm0-14h1V2h-1v1zm0 2h1V4h-1v1zm0 8h1v-1h-1v1zm0-6h1V6h-1v1zm0 2h1V8h-1v1zm0 6h1v-1h-1v1zm0-4h1v-1h-1v1zm0-11v1h1V0h-1zm-2 1h1V0h-1v1zM6 1h1V0H6v1zm2 0h1V0H8v1zm2 0h1V0h-1v1zM4 1h1V0H4v1zM2 1h1V0H2v1zm0 12h1v-1H2v1zm0 2h1v-1H2v1zm0-4h1v-1H2v1zm0-8h1V2H2v1zm0 2h1V4H2v1zm0 2h1V6H2v1zm0 2h1V8H2v1z"
  }));
};

module.exports.LayoutWidthDefault = function LayoutWidthDefault(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 0v17h17V0H0zm16 16H1V1h15v15zM3 8h1v1H3V8zm0-4h1v1H3V4zm0 6h1v1H3v-1zm0-4h1v1H3V6zm0-4h1v1H3V2zm0 12h1v1H3v-1zm0-2h1v1H3v-1zM13 2h1v1h-1V2zm0 4h1v1h-1V6zm0-2h1v1h-1V4zm0 4h1v1h-1V8zm0 2h1v1h-1v-1zm0 2h1v1h-1v-1zm0 2h1v1h-1v-1z"
  }));
};

module.exports.LayoutWidthFull = function LayoutWidthFull(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 0v17h17V0H0zm16 16H1V1h15v15z"
  }));
};

module.exports.Layout = function Layout(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 0v17h17V0H0zm1 6h9v10H1V6zm15 10h-5V6h5v10zM1 5V1h15v4H1z"
  }));
};

module.exports.LightBulb = function LightBulb(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 0C5.468 0 3 2.617 3 5.833c0 2.354.964 3.67 1.814 4.831C5.451 11.532 6 12.282 6 13.337v2.096C6 16.297 6.673 17 7.5 17h2c.827 0 1.5-.703 1.5-1.567v-2.126c0-1.045.517-1.735 1.17-2.609C12.985 9.607 14 8.251 14 5.833 14 2.617 11.532 0 8.5 0zm1 16h-2c-.275 0-.5-.254-.5-.567V13.8h3v1.633c0 .313-.225.567-.5.567zm1.869-5.901c-.587.785-1.19 1.593-1.336 2.701H6.961c-.152-1.102-.754-1.927-1.34-2.727C4.824 8.985 4 7.86 4 5.833 4 3.168 6.019 1 8.5 1S13 3.168 13 5.833c0 2.085-.829 3.194-1.631 4.266z"
  }));
};

module.exports.LineDashed = function LineDashed(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 8h4v1H0V8zm6.5 1h4V8h-4v1zM13 8v1h4V8h-4z"
  }));
};

module.exports.LineDotted = function LineDotted(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 7.998h.5v1H0v-1zm2.383 1.001h.941v-1h-.941v1zm2.823 0h.941v-1h-.941v1zM10.854 9h.941V8h-.941v1zM8.03 8.999h.94V8h-.94v.999zM13.677 9h.941V8h-.941v1zM16.5 8v1h.5V8h-.5z"
  }));
};

module.exports.LineDouble = function LineDouble(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 6v1H0V6h17zM0 10h17V9H0v1z"
  }));
};

module.exports.Link = function Link(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m12.983 6.94-.938.938-.707-.707.938-.938c.975-.975.975-2.561 0-3.535s-2.561-.975-3.535 0L5.754 5.686c-.975.975-.975 2.561 0 3.535s2.561.975 3.535 0l.707.707c-.683.683-1.578 1.023-2.475 1.023s-1.792-.341-2.474-1.023a3.504 3.504 0 0 1 0-4.949l2.987-2.987a3.502 3.502 0 0 1 4.949 0 3.501 3.501 0 0 1 0 4.948zM6.042 8.034l-.13.129.705.709.131-.13c.975-.975 2.561-.975 3.535 0s.975 2.561 0 3.535L7.26 15.302c-.975.975-2.561.975-3.535 0s-.975-2.561 0-3.535l1.058-1.059-.707-.707-1.058 1.059a3.504 3.504 0 0 0 0 4.949c.683.683 1.578 1.023 2.475 1.023s1.792-.341 2.475-1.023l3.023-3.024a3.504 3.504 0 0 0 0-4.949 3.503 3.503 0 0 0-4.949-.002z"
  }));
};

module.exports.Linkedin = function Linkedin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M.698 5.823h3.438v10.323H.698V5.823zM2.438.854C1.271.854.5 1.625.5 2.636c0 .989.74 1.781 1.896 1.781h.021c1.198 0 1.948-.792 1.938-1.781C4.344 1.625 3.615.854 2.438.854zm10.114 4.729c-1.829 0-2.643 1.002-3.094 1.709V5.823H6.031s.042.969 0 10.323h3.427v-5.761c0-.312.032-.615.114-.843.251-.615.812-1.25 1.762-1.25 1.238 0 1.738.948 1.738 2.333v5.521H16.5v-5.917c0-3.167-1.688-4.646-3.948-4.646z"
  }));
};

module.exports.Linux = function Linux(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13.849 15.25c-.509.26-1.188.832-1.438 1.072-.188.179-.964.269-1.402.045-.509-.26-.241-.671-1.027-.696-.393-.01-.777-.01-1.161-.01-.339.01-.678.027-1.027.035-1.178.027-1.294.787-2.054.76-.518-.018-1.169-.429-2.295-.66-.786-.162-1.544-.205-1.706-.554-.16-.349.197-.741.223-1.08.027-.456-.339-1.072-.071-1.305.232-.205.723-.054 1.044-.231.339-.196.482-.349.482-.768.125.427-.009.775-.286.945-.17.107-.482.161-.742.135-.205-.019-.33.008-.384.089-.08.098-.054.277.045.509.098.232.214.384.196.669-.009.286-.33.626-.276.867.018.09.107.17.33.232.357.098 1.009.196 1.643.349.706.178 1.438.499 1.894.437 1.357-.188.58-1.643.366-1.99-1.152-1.805-1.911-2.983-2.518-2.519-.152.125-.161-.304-.152-.474.027-.59.322-.803.5-1.259.339-.867.598-1.857 1.116-2.366.387-.501.994-1.313 1.111-1.741-.099-.929-.126-1.911-.143-2.767-.018-.92.125-1.725 1.161-2.286C7.527.553 7.857.5 8.206.5c.616-.01 1.303.17 1.741.491.697.518 1.134 1.616 1.081 2.401-.036.616.071 1.25.268 1.911.232.777.599 1.321 1.188 1.946.706.75 1.259 2.223 1.42 3.16.143.877-.054 1.421-.241 1.448-.286.043-.464.945-1.357.91-.571-.027-.625-.366-.786-.661-.259-.455-.518-.312-.616.17-.054.241-.019.599.062.865.161.563.107 1.09.009 1.742-.188 1.232.866 1.464 1.572.874.696-.579.848-.669 1.723-.973 1.33-.456.884-.857.169-1.098-.643-.215-.669-1.296-.438-1.501.054 1.161.661 1.331.911 1.491 1.098.681-.411 1.244-1.063 1.574zm-1.5-4.312c.241-.805.134-1.125-.026-1.885-.125-.571-.652-1.349-1.063-1.589.107.089.304.348.509.74.357.671.714 1.661.482 2.483-.089.32-.303.365-.446.374-.625.072-.259-.75-.518-1.865-.295-1.251-.598-1.34-.669-1.438-.368-1.624-.769-1.463-.886-2.07-.098-.545.474-.991-.303-1.143-.241-.045-.58-.286-.714-.304-.134-.017-.206-.902.294-.929.491-.036.581.554.491.787-.142.231.009.321.251.24.196-.062.071-.58.116-.651-.125-.75-.438-.857-.759-.92-1.233.098-.679 1.456-.804 1.331-.179-.188-.696-.018-.696-.135.009-.696-.224-1.098-.545-1.107-.357-.009-.5.491-.518.776-.027.268.152.832.286.787.089-.027.241-.206.08-.196-.08 0-.205-.197-.223-.429-.009-.233.081-.465.384-.456.348.009.348.705.312.732-.115.08-.259.233-.277.259-.115.188-.338.24-.428.322-.152.16-.187.339-.071.401.41.232.276.499.848.519.375.018.651-.054.911-.134.196-.062.831-.196.964-.429.062-.098.134-.098.178-.071.089.044.107.214-.116.268-.312.09-.625.26-.91.367-.277.115-.366.16-.625.204-.589.107-1.026-.214-.634.17.134.125.259.205.598.197.75-.027 1.581-.93 1.661-.528.017.089-.233.196-.429.295-.696.339-1.187 1.018-1.634.785-.402-.214-.803-1.206-.795-.758.009.687-.902 1.294-.482 2.08-.277.07-.893 1.384-.982 2.062-.054.393.036.875-.063 1.143-.134.393-.741-.375-.544-1.312.035-.16 0-.197-.045-.115-.241.437-.107 1.053.089 1.481.081.188.286.268.438.429.312.356 1.544 1.268 1.759 1.491a.548.548 0 0 1-.375.928c.295.554.58.608.572 1.509.339-.178.206-.571.062-.82-.099-.18-.223-.26-.197-.304.018-.027.197-.18.295-.062.303.339.875.401 1.482.321.616-.072 1.277-.286 1.58-.777.143-.232.241-.312.304-.268.071.035.099.196.089.464-.009.286-.125.581-.205.822-.081.277-.107.464.161.474.071-.501.214-.992.25-1.492.045-.571-.366-1.624.081-2.152.116-.143.258-.16.455-.16.026-.715 1.125-.66 1.491-.366 0-.162-.348-.313-.491-.376zM5.063 8.367c-.063.115-.223.204-.099.223.045.009.17-.1.224-.223.044-.152.089-.233.018-.26-.081-.026-.063.134-.143.26zm2.044-4.84c-.107-.027-.089.133-.035.116.036 0 .081.054.062.134-.018.107-.009.18.072.18.009 0 .026 0 .026-.027.037-.225-.071-.385-.125-.403zm.242.821c-.089.009-.072-.197.214-.179-.179.018-.116.179-.214.179zm.732-.152c.259-.115.348.063.259.099-.09.026-.099-.144-.259-.099zm1.08-.723c-.116.01-.08.062-.026.08.071.02.143.144.161.277 0 .018.089-.018.089-.045.008-.213-.179-.32-.224-.312zm.518-1.928c-.071-.072-.143-.135-.214-.135-.179.018-.09.205-.116.295-.036.098-.169.179-.08.25.081.062.134-.098.304-.16.044-.019.25.008.294-.09.008-.045-.107-.098-.188-.16zm.991 3.945c-.169-.106-.205-.285-.267-.223-.188.205.232.634.41.671.107.018.188-.126.161-.251-.036-.169-.161-.107-.304-.197z"
  }));
};

module.exports.ListOl = function ListOl(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 4v1H5V4h12zM5 9h12V8H5v1zm0 4h12v-1H5v1zM2.083 3.48h.009v2.383h.356V3.136h-.314l-.596.319.071.281.474-.256zm-.444 6.092.219-.201c.574-.554.939-.961.939-1.465 0-.39-.248-.793-.836-.793-.314 0-.582.117-.771.277l.117.26a.933.933 0 0 1 .58-.231c.406 0 .541.256.541.533-.004.411-.32.764-1.016 1.427l-.289.281v.227h1.74V9.58H1.639v-.008zm.597 2.819v-.009c.336-.121.504-.36.504-.642 0-.331-.243-.65-.78-.65a1.29 1.29 0 0 0-.714.21l.097.269a1 1 0 0 1 .546-.181c.34 0 .478.193.478.411 0 .323-.34.462-.608.462h-.206v.276h.205c.357 0 .701.164.705.546.005.227-.143.528-.616.528-.257 0-.5-.104-.604-.172l-.101.285c.134.089.402.186.709.186.654 0 .994-.382.994-.818 0-.382-.273-.634-.609-.701z"
  }));
};

module.exports.List = function List(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 4v1H5V4h12zM3 4.5C3 5.327 2.327 6 1.5 6S0 5.327 0 4.5.673 3 1.5 3 3 3.673 3 4.5zm-1 0a.5.5 0 1 0-1.002.002A.5.5 0 0 0 2 4.5zM5 9h12V8H5v1zm-2-.5c0 .827-.673 1.5-1.5 1.5S0 9.327 0 8.5.673 7 1.5 7 3 7.673 3 8.5zm-1 0a.5.5 0 1 0-1.002.002A.5.5 0 0 0 2 8.5zM5 13h12v-1H5v1zm-2-.5c0 .827-.673 1.5-1.5 1.5S0 13.327 0 12.5.673 11 1.5 11s1.5.673 1.5 1.5zm-1 0a.5.5 0 1 0-1.002.002A.5.5 0 0 0 2 12.5z"
  }));
};

module.exports.LocationArrow = function LocationArrow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m1.971 1.966 5.288 14.101 1.212-7.601 7.601-1.212L1.971 1.966zm5.627 5.626-.731 4.582L3.68 3.675l8.499 3.187-4.581.73z"
  }));
};

module.exports.LocationPin = function LocationPin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5.5A5.506 5.506 0 0 0 3 6c0 4.373 4.913 10.086 5.122 10.328l.378.435.378-.436C9.087 16.086 14 10.373 14 6 14 2.967 11.532.5 8.5.5zm0 14.715C7.354 13.791 4 9.336 4 6c0-2.481 2.019-4.5 4.5-4.5S13 3.519 13 6c0 3.333-3.354 7.791-4.5 9.215zm0-12.076c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
  }));
};

module.exports.Lock = function Lock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9.5 10.972a.985.985 0 0 1-.5.846v2.154H8v-2.153a.984.984 0 0 1-.5-.847 1 1 0 1 1 2 0zm5.465-2.512v7.08c0 .827-.673 1.5-1.5 1.5H3.476c-.827 0-1.5-.673-1.5-1.5V8.46c0-.827.673-1.5 1.5-1.5H3.5V4.972c0-2.757 2.243-5 5-5s5 2.243 5 5v1.992a1.498 1.498 0 0 1 1.465 1.496zM4.5 6.96h8V4.972c0-2.206-1.794-4-4-4s-4 1.794-4 4V6.96zm9.465 1.5a.497.497 0 0 0-.465-.493v.004h-10V7.96h-.024a.5.5 0 0 0-.5.5v7.08a.5.5 0 0 0 .5.5h9.989a.5.5 0 0 0 .5-.5V8.46z"
  }));
};

module.exports.Loop = function Loop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M1 9c0 2.206 1.711 4 3.813 4v1C2.159 14 0 11.757 0 9s2.159-5 4.813-5h4.229L7.396 2.354l.707-.707L10.957 4.5 8.104 7.354l-.708-.708L9.043 5h-4.23C2.711 5 1 6.794 1 9zm11.187-5v1C14.289 5 16 6.794 16 9s-1.711 4-3.813 4h-4.23l1.646-1.646-.707-.707L6.043 13.5l2.854 2.854.707-.707L7.957 14h4.229C14.841 14 17 11.757 17 9s-2.159-5-4.813-5z"
  }));
};

module.exports.Magnet = function Magnet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M11 0v10.122c0 1.329-1.122 2.409-2.5 2.409S6 11.451 6 10.122V0H1v10.432C1 14.698 4.864 17 8.5 17s7.5-2.302 7.5-6.568V0h-5zm4 1v3h-3V1h3zM5 1v3H2V1h3zm3.5 15C5.887 16 2 14.517 2 10.432V5h3v5.122c0 1.88 1.57 3.409 3.5 3.409s3.5-1.529 3.5-3.409V5h3v5.432C15 14.517 11.113 16 8.5 16z"
  }));
};

module.exports.MapAlt = function MapAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15 4v.069l-.013-.058-1.015.221C13.833 2.429 12.338 1 10.5 1 8.659 1 7.161 2.435 7.026 4.242L6 4.019V4H0v11h5.348l5.196 1.479L16 14.874V4h-1zm-4.5-2C11.879 2 13 3.122 13 4.5c0 1.806-1.719 4.209-2.5 5.207C9.719 8.709 8 6.306 8 4.5 8 3.122 9.121 2 10.5 2zM6 5.042l1.081.235c.412 2.269 2.406 4.788 2.919 5.406v4.602l-4-1.139V5.042zM1 5h4v9.017L1 14V5zm10 10.303v-4.621c.514-.619 2.513-3.145 2.921-5.416L15 5.032v9.094l-4 1.177zm.858-10.72c0-.749-.609-1.358-1.358-1.358a1.36 1.36 0 0 0 0 2.717 1.36 1.36 0 0 0 1.358-1.359zm-1.716 0a.358.358 0 1 1 .717 0 .358.358 0 0 1-.717 0z"
  }));
};

module.exports.Map = function Map(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M10.499 4.438 5.597 3.02 0 3v11h5.348l5.196 1.479L16 13.874V2.833l-5.501 1.605zM6 4.177l4 1.157v8.95l-4-1.139V4.177zM1 4h4v9.017L1 13V4zm14 9.126-4 1.177V5.334l4-1.167v8.959z"
  }));
};

module.exports.MarkerAlt = function MarkerAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m15.664 5.684-.544-.544c.078-.179.127-.368.139-.562a1.448 1.448 0 0 0-.416-1.13l-1.745-1.745c-.206-.206-.437-.31-.687-.31-.449 0-.769.323-1.108.666l-9.036 9.036-.335 2.955.105.104-.972.972 1.193.222.487-.486.104.104 2.954-.333L14.5 5.935l.456.456a.25.25 0 0 1 .076.245c-.026.141-.129.31-.283.464l-3.016 3.017.707.707 3.016-3.017c.303-.302.497-.645.56-.99a1.243 1.243 0 0 0-.352-1.133zM5.343 13.677l-2.128.241-.235-.235.242-2.126 5.622-5.622 2.121 2.121-5.622 5.621zm6.329-6.328L9.551 5.228l2.464-2.464c.136-.139.342-.347.376-.354l1.745 1.745c.12.12.129.278.125.361a.723.723 0 0 1-.218.462l-2.371 2.371z"
  }));
};

module.exports.Marker = function Marker(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M10.646 1h-.768c-.232-.588-.769-1-1.393-1H6.018c-.292 0-.53.09-.706.268-.316.317-.314.771-.312 1.253V13.3l1.851 2.325H7V17l1-.688v-.688h.147L10 13.299V2h.646c.337 0 .354.54.354.648v4.266h1V2.648C12.001 1.678 11.444 1 10.646 1zM6.018 1h2.467c.285 0 .516.291.516.648V5H6V1.516c0-.194-.002-.487.018-.516zm1.649 13.625h-.333L6.001 12.95 6 6h3v6.95l-1.333 1.675z"
  }));
};

module.exports.MedallAlt = function MedallAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 0c-2.757 0-5 2.243-5 5 0 1.375.555 2.659 1.562 3.616.085.082.18.154.276.226l.103.078c.179.141.369.257.559.371V16.5l2.479-1.901L11 16.5V9.291c.19-.114.381-.231.56-.372l.103-.077c.096-.072.19-.144.276-.226A4.951 4.951 0 0 0 13.5 5c0-2.757-2.243-5-5-5zM10 14.493l-1.526-1.151L7 14.473v-4.225a4.568 4.568 0 0 0 3 0v4.245zm1.249-6.601c-.057.055-.121.101-.185.147l-.123.094a3.927 3.927 0 0 1-4.881.001l-.124-.095c-.064-.047-.128-.093-.185-.147A3.957 3.957 0 0 1 4.5 5c0-2.206 1.794-4 4-4s4 1.794 4 4a3.957 3.957 0 0 1-1.251 2.892zM10.25 5a1.75 1.75 0 1 1-3.501-.001A1.75 1.75 0 0 1 10.25 5z"
  }));
};

module.exports.Medall = function Medall(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 0c-2.757 0-5 2.243-5 5 0 1.375.555 2.659 1.562 3.616.085.082.18.154.276.226l.103.078c.179.141.369.257.559.371V16.5l2.479-1.901L11 16.5V9.291c.19-.114.381-.231.56-.372l.103-.077c.096-.072.19-.144.276-.226A4.951 4.951 0 0 0 13.5 5c0-2.757-2.243-5-5-5zM10 14.493l-1.526-1.151L7 14.473v-4.225a4.568 4.568 0 0 0 3 0v4.245zm1.249-6.601c-.057.055-.121.101-.185.147l-.123.094a3.927 3.927 0 0 1-4.881.001l-.124-.095c-.064-.047-.128-.093-.185-.147A3.957 3.957 0 0 1 4.5 5c0-2.206 1.794-4 4-4s4 1.794 4 4a3.957 3.957 0 0 1-1.251 2.892zm-.299-4.378.184.982-1.823.341 1.146 1.937-.861.51-1.087-1.836-1.09 1.835-.859-.51 1.152-1.94-1.776-.337.186-.982L8 3.869V2h1v1.878l1.95-.364z"
  }));
};

module.exports.MenuAlt = function MenuAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16 2v2H5V2h11zM5 9h11V7H5v2zm0 5h11v-2H5v2zM2 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
  }));
};

module.exports.Menu = function Menu(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16 3v2H1V3h15zM1 10h15V8H1v2zm0 5h15v-2H1v2z"
  }));
};

module.exports.MicrophoneAlt = function MicrophoneAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M11.614 7.021a4.21 4.21 0 0 0 1.12-2.847c0-2.335-1.899-4.234-4.234-4.234S4.266 1.839 4.266 4.174c0 1.1.432 2.093 1.12 2.847L6.523 15H8v1.984h1V15h1.477l1.137-7.979zM6 2.147V4h1V1.326c.309-.164.643-.28 1-.336V5h1V.99c.357.056.691.172 1 .336V4h1V2.147c.452.557.734 1.256.734 2.026 0 1.784-1.451 3.235-3.234 3.235s-3.234-1.45-3.234-3.234c0-.771.282-1.47.734-2.027zM7.391 14l-.87-6.104c.593.316 1.26.513 1.979.513s1.386-.197 1.979-.514L9.609 14H7.391z"
  }));
};

module.exports.Microphone = function Microphone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 12c2.481 0 4.5-2.019 4.5-4.5v-3C13 2.189 11.244.303 9 .051V0H8v.051C5.756.303 4 2.189 4 4.5v3C4 9.981 6.019 12 8.5 12zM6 2.059V4h1V1.352a3.45 3.45 0 0 1 1-.301V4h1V1.051a3.42 3.42 0 0 1 1 .301V4h1V2.059c.617.631 1 1.491 1 2.441V5H5v-.5c0-.95.383-1.811 1-2.441zM5 6h7v1.5c0 1.93-1.57 3.5-3.5 3.5S5 9.43 5 7.5V6zm10 1v3.25c0 2.067-2.019 3.75-4.5 3.75H9v3H8v-3H6.5C4.019 14 2 12.317 2 10.25V7h1v3.25C3 11.767 4.57 13 6.5 13h4c1.93 0 3.5-1.233 3.5-2.75V7h1z"
  }));
};

module.exports.MicrosoftAlt = function MicrosoftAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m0 2.339 6.967-.959v6.732H0V2.339zm0 12.322 6.967.959V8.97H0v5.691zM7.734 1.277v6.835H17V0L7.734 1.277zm0 14.446L17 17V8.97H7.734v6.753z"
  }));
};

module.exports.Microsoft = function Microsoft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M7.734 15.723 17 17V8.97H7.734v6.753zm1-5.753H16v5.883l-7.266-1.002V9.97zM0 14.661l6.967.959V8.97H0v5.691zM1 9.97h4.967v4.503L1 13.789V9.97zM0 8.112h6.967V1.38L0 2.339v5.773zM1 3.21l4.967-.684v4.585H1V3.21zm6.734-1.933v6.835H17V0L7.734 1.277zM16 7.112H8.734V2.149L16 1.147v5.965z"
  }));
};

module.exports.Minus = function Minus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15 8v1H2V8h13z"
  }));
};

module.exports.Mobile = function Mobile(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M12.5 0h-8C3.673 0 3 .673 3 1.5v14c0 .827.673 1.5 1.5 1.5h8c.827 0 1.5-.673 1.5-1.5v-14c0-.827-.673-1.5-1.5-1.5zm-8 1h8a.5.5 0 0 1 .5.5V3H4V1.5a.5.5 0 0 1 .5-.5zM13 4v8H4V4h9zm-.5 12h-8a.5.5 0 0 1-.5-.5V13h9v2.5a.5.5 0 0 1-.5.5zM9 14.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
  }));
};

module.exports.Money = function Money(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m10.719 9.577-.01-.01c-.013-.011-.022-.024-.036-.034l-.003.004L9 8.255V2.548c1.14.218 2 1.164 2 2.296l.499.06.501-.06c0-1.68-1.309-3.062-3-3.296V0H8v1.548c-1.691.234-3 1.616-3 3.296 0 .942.421 1.838 1.151 2.473l-.005.005.04.031L8 8.747v5.705c-1.14-.218-2-1.164-2-2.296H5c0 1.68 1.309 3.062 3 3.296v1.549h1v-1.549c1.691-.234 3-1.616 3-3.296 0-1.006-.469-1.939-1.281-2.579zM6.822 6.581A2.29 2.29 0 0 1 6 4.844c0-1.132.86-2.078 2-2.296v4.938l-1.178-.905zM9 14.452V9.516l1.104.849c.567.447.896 1.096.896 1.791 0 1.132-.86 2.078-2 2.296z"
  }));
};

module.exports.MoreAlt = function MoreAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M4 8a2 2 0 1 1-4.001-.001A2 2 0 0 1 4 8zm4.5-2a2 2 0 1 0 .001 4.001A2 2 0 0 0 8.5 6zM15 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 15 6z"
  }));
};

module.exports.More = function More(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M2 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 2 6zm0 3a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm6.5-3a2 2 0 1 0 .001 4.001A2 2 0 0 0 8.5 6zm0 3a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zM15 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 15 6zm0 3a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2z"
  }));
};

module.exports.MouseAlt = function MouseAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 0A5.506 5.506 0 0 0 3 5.5v6C3 14.533 5.467 17 8.5 17s5.5-2.467 5.5-5.5v-6C14 2.467 11.533 0 8.5 0zM13 5.5V6H9V1.051c2.244.252 4 2.139 4 4.449zM8 1.051V6H4v-.5c0-2.31 1.756-4.197 4-4.449zM8.5 16A4.505 4.505 0 0 1 4 11.5V7h9v4.5c0 2.481-2.019 4.5-4.5 4.5z"
  }));
};

module.exports.Mouse = function Mouse(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 0A5.506 5.506 0 0 0 3 5.5v6C3 14.533 5.467 17 8.5 17s5.5-2.467 5.5-5.5v-6C14 2.467 11.533 0 8.5 0zM13 11.5c0 2.481-2.019 4.5-4.5 4.5S4 13.981 4 11.5v-6C4 3.019 6.019 1 8.5 1S13 3.019 13 5.5v6zm-4.5-8C7.673 3.5 7 4.173 7 5v2c0 .827.673 1.5 1.5 1.5S10 7.827 10 7V5c0-.827-.673-1.5-1.5-1.5zM9 7a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0v2z"
  }));
};

module.exports.MusicAlt = function MusicAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M6 .265v9.222a2.89 2.89 0 0 0-1.904-.726c-1.607 0-2.914 1.308-2.914 2.914s1.307 2.914 2.914 2.914a2.912 2.912 0 0 0 2.903-2.807v-.006c.001-.034.01-.066.01-.102s-.008-.067-.009-.101V5.479l9 1.761v4.666a2.89 2.89 0 0 0-1.914-.734c-1.607 0-2.914 1.308-2.914 2.914S12.479 17 14.086 17a2.913 2.913 0 0 0 2.907-2.849l.007.002V2.417L6 .265zM4.096 13.589c-1.056 0-1.914-.858-1.914-1.914s.858-1.914 1.914-1.914c1.021 0 1.85.805 1.904 1.812v.203a1.911 1.911 0 0 1-1.904 1.813zM7 4.461V1.479l9 1.762v2.98l-9-1.76zM14.086 16c-1.056 0-1.914-.858-1.914-1.914s.858-1.914 1.914-1.914S16 13.03 16 14.086 15.142 16 14.086 16z"
  }));
};

module.exports.Music = function Music(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m14.765 4.459.421-.906L8 .217v9.878a2.885 2.885 0 0 0-1.898-.722c-1.607 0-2.914 1.308-2.914 2.914s1.307 2.914 2.914 2.914 2.914-1.308 2.914-2.914c0-.053-.013-.103-.016-.154V1.783l5.765 2.676zm-8.663 9.742c-1.056 0-1.914-.858-1.914-1.914s.858-1.914 1.914-1.914 1.914.858 1.914 1.914-.859 1.914-1.914 1.914z"
  }));
};

module.exports.Na = function Na(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5.5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 1c1.75 0 3.348.65 4.577 1.716l-9.86 9.861A6.957 6.957 0 0 1 1.5 8.5c0-3.859 3.14-7 7-7zm0 14c-1.75 0-3.348-.65-4.577-1.716l9.86-9.861A6.957 6.957 0 0 1 15.5 8.5c0 3.859-3.14 7-7 7z"
  }));
};

module.exports.NewWindow = function NewWindow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15 2v7.5h-1V3.832l-9.334 9.334-.707-.707L13.418 3H7.5V2H15zm-4 14H1V6h6.574V5H0v12h12V9.286h-1V16z"
  }));
};

module.exports.Notepad = function Notepad(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M1 0v17h15V0H1zm14 16H2V1h2v1.092c-.581.207-1 .757-1 1.408C3 4.327 3.673 5 4.5 5S6 4.327 6 3.5c0-.651-.419-1.201-1-1.408V1h3v1.092c-.581.207-1 .757-1 1.408C7 4.327 7.673 5 8.5 5S10 4.327 10 3.5c0-.651-.419-1.201-1-1.408V1h3v1.092c-.581.207-1 .757-1 1.408 0 .827.673 1.5 1.5 1.5S14 4.327 14 3.5c0-.651-.419-1.201-1-1.408V1h2v15zM5 3.5c0 .275-.225.5-.5.5S4 3.775 4 3.5s.225-.5.5-.5.5.225.5.5zm4 0c0 .275-.225.5-.5.5S8 3.775 8 3.5s.225-.5.5-.5.5.225.5.5zm4 0c0 .275-.225.5-.5.5s-.5-.225-.5-.5.225-.5.5-.5.5.225.5.5z"
  }));
};

module.exports.Package = function Package(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.517-.035 0 3.186v10.693l8.5 3.188 8.5-3.188V3.187L8.517-.035zm6.567 3.563-2.586.97-6.557-2.489 2.575-.974 6.568 2.493zM8.5 5.997 1.919 3.529l2.609-.986 6.551 2.487-2.579.967zM1 4.253l7 2.625v8.932l-7-2.625V4.253zM9 15.81V6.878l7-2.625v8.932L9 15.81z"
  }));
};

module.exports.PaintBucket = function PaintBucket(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.701 9.818 7.833.894l-.134.133A3.527 3.527 0 0 0 5.206 0h-.001c-.948 0-1.841.37-2.512 1.041a3.528 3.528 0 0 0-1.042 2.514c0 .941.366 1.825 1.027 2.493L.47 8.257C.167 8.561 0 8.963 0 9.39c0 .429.166.83.467 1.13l4.811 4.859a1.59 1.59 0 0 0 1.131.469 1.59 1.59 0 0 0 1.133-.471L13.1 9.819l3.601-.001zM2.651 3.554c0-.682.266-1.323.749-1.806A2.538 2.538 0 0 1 5.205 1h.001c.674 0 1.306.262 1.786.734L3.386 5.341a2.532 2.532 0 0 1-.735-1.787zm4.182 11.117a.6.6 0 0 1-.847.003L2.35 11h8.154l-3.671 3.671zM11.504 10H1.359l-.183-.186a.602.602 0 0 1 .001-.85L7.831 2.31l6.468 6.509-1.614.001L11.504 10zm4.184 1.959-.407-.604-.418.598c-.319.457-1.363 2.011-1.363 2.798 0 .965.785 1.75 1.75 1.75S17 15.715 17 14.75c0-.782-1.004-2.334-1.312-2.791zM15.25 15.5a.752.752 0 0 1-.75-.75c0-.24.349-.92.766-1.591.4.67.734 1.349.734 1.591 0 .413-.337.75-.75.75z"
  }));
};

module.exports.PaintRoller = function PaintRoller(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15 2V0H2v2h-.516C.666 2 0 2.675 0 3.505v2.99C0 7.325.666 8 1.484 8h6.024c.275 0 .5.225.5.5V10H7v7h3v-7h-.992V8.5c0-.827-.673-1.5-1.5-1.5H1.484A.496.496 0 0 1 1 6.495v-2.99C1 3.227 1.218 3 1.484 3H2v3h13V3h1V2h-1zM9 16H8v-5h1v5zm5-11H3V1h11v4z"
  }));
};

module.exports.Palette = function Palette(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5.5c-4.411 0-8 3.589-8 8a7.98 7.98 0 0 0 7.631 7.982l1.288.059-2.723-2.723c-.283-.283-.439-.66-.439-1.061s.156-.777.439-1.061c.566-.566 1.555-.566 2.121 0l3.719 3.719.34-.223A7.977 7.977 0 0 0 16.5 8.5c0-4.411-3.589-8-8-8zm4.16 13.625L9.525 10.99c-.943-.944-2.592-.944-3.535 0-.472.472-.732 1.1-.732 1.768s.26 1.296.732 1.768l.741.741A6.982 6.982 0 0 1 1.5 8.5c0-3.86 3.14-7 7-7s7 3.14 7 7a6.979 6.979 0 0 1-2.84 5.625zM11.5 6.5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm0 3c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM8.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-2.75-.109a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  }));
};

module.exports.Panel = function Panel(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 0v17h17V0H0zm16 16H1V1h15v15zM4 10.232V13h1v-2.768c.738-.218 1.281-.894 1.281-1.701S5.738 7.048 5 6.83V4H4v2.83c-.738.218-1.281.894-1.281 1.701S3.262 10.015 4 10.232zm.5-2.482a.782.782 0 0 1 0 1.562.781.781 0 0 1 0-1.562zm3.5.357V13h1V8.107c.738-.218 1.281-.894 1.281-1.701S9.738 4.923 9 4.705V4H8v.705c-.738.218-1.281.894-1.281 1.701S7.262 7.89 8 8.107zm.5-2.482a.782.782 0 1 1-.002 1.564.782.782 0 0 1 .002-1.564zm4 7.792c.982 0 1.781-.799 1.781-1.781 0-.808-.543-1.483-1.281-1.701V4h-1v5.935a1.778 1.778 0 0 0-1.281 1.701c0 .982.799 1.781 1.781 1.781zm0-2.563a.782.782 0 0 1 0 1.562.782.782 0 0 1 0-1.562z"
  }));
};

module.exports.Paragraph = function Paragraph(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16 1.026H4.992c-2.181 0-3.955 1.774-3.955 3.955s1.774 3.954 3.955 3.954H8V16h1V2.026h2.015V16h1V2.026H16v-1zm-8 6.91H4.992a2.957 2.957 0 0 1-2.955-2.954 2.958 2.958 0 0 1 2.955-2.955H8v5.909z"
  }));
};

module.exports.PencilAlt = function PencilAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.499 1.843 15.096.44c-.566-.566-1.555-.566-2.122 0L5.438 7.976l-1.722 5.287 5.249-1.765 7.534-7.534c.283-.283.439-.66.439-1.061s-.156-.777-.439-1.06zM5.584 10.758l.638-1.957 1.92 1.919-1.942.653-.616-.615zm1.248-2.762 3.986-3.986 2.11 2.11-3.986 3.986-2.11-2.11zm4.693-4.693.729-.729 2.11 2.11-.729.729-2.11-2.11zm4.267-.046-.72.721-2.11-2.11.72-.721a.512.512 0 0 1 .707 0l1.403 1.403a.5.5 0 0 1 0 .707zM15 7.5h1V17H0V2h7.5v1H1v13h14V7.5z"
  }));
};

module.exports.PencilAlt2 = function PencilAlt2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9.492 0H7.508c-.827 0-1.5.673-1.5 1.5v10.657l2.521 4.956 2.464-4.959V1.5A1.503 1.503 0 0 0 9.492 0zM7.508 1h1.984c.275 0 .5.225.5.5v1.019H7.008V1.5a.5.5 0 0 1 .5-.5zm.57 13.021-.934-1.835h2.715l-.911 1.835h-.87zm-1.07-2.834V5.55h2.984v5.637H7.008zm0-6.637V3.519h2.984V4.55H7.008z"
  }));
};

module.exports.Pencil = function Pencil(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m15.529 2.857-1.403-1.404c-.565-.566-1.555-.566-2.122 0l-9.057 9.058-1.722 5.288 5.248-1.765 9.055-9.056a1.5 1.5 0 0 0 .001-2.121zM3.094 13.294l.645-1.979 1.934 1.935-1.963.66-.616-.616zm1.261-2.776 5.493-5.493 2.111 2.11-5.494 5.494-2.11-2.111zm6.2-6.201.729-.729 2.111 2.11-.729.729-2.111-2.11zm4.267-.046-.72.72-2.111-2.11.72-.721a.512.512 0 0 1 .707 0l1.403 1.404a.5.5 0 0 1 .001.707z"
  }));
};

module.exports.PieChart = function PieChart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m14.985 8.943.998.067C15.72 12.93 12.433 16 8.5 16 4.364 16 1 12.636 1 8.5c0-3.905 3.047-7.19 6.938-7.479l.074.997C4.641 2.268 2 5.115 2 8.5 2 12.084 4.916 15 8.5 15c3.409 0 6.257-2.66 6.485-6.057zM17 7.499v.5l-.501.017H9.017V-.001L9.518 0C13.644.009 17 3.374 17 7.499zm-1.014-.483c-.223-3.17-2.776-5.743-5.969-5.995v5.995h5.969z"
  }));
};

module.exports.PinAlt = function PinAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m5.404 10.889.707.707-5.258 5.257-.707-.707 5.258-5.257zM17 6.222l-2.192.637-3.682 5.246.429 1.118L10 14.778 2.222 7l1.556-1.556 1.118.429 5.245-3.682.248-.854L10.777 0 17 6.222zm-1.902-.488-3.832-3.831-.164.567-.098.338-5.97 4.19-1.009-.387L3.636 7 10 13.364l.389-.39-.195-.512-.191-.497.307-.436 3.883-5.534.338-.098.567-.163z"
  }));
};

module.exports.Pin = function Pin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M12 4.5C12 2.57 10.43 1 8.5 1S5 2.57 5 4.5a3.495 3.495 0 0 0 2.962 3.445V16h1V7.953C10.672 7.725 12 6.271 12 4.5zM8.5 7C7.121 7 6 5.879 6 4.5S7.121 2 8.5 2 11 3.121 11 4.5 9.879 7 8.5 7zM10 5H9a1 1 0 0 0-1-1V3c1.103 0 2 .897 2 2z"
  }));
};

module.exports.Pin2 = function Pin2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8 11.5h1V17H8v-5.5zm6-2.7V11H3V8.8l1.094-.487L5.2 2l-.429-.779L4.1 0h8.8l-.672 1.221L11.8 2l1.106 6.312L14 8.8zm-1 .649-.986-.44-.092-.524-1.168-6.659.17-.309.285-.517H5.791l.455.827-.06.346-1.2 6.836-.986.44V10h9v-.551z"
  }));
};

module.exports.PinterestAlt = function PinterestAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5.5a8 8 0 0 0-3.211 15.327c-.022-.559-.005-1.229.139-1.837l1.029-4.359s-.256-.511-.256-1.266c0-1.186.688-2.07 1.544-2.07.728 0 1.079.546 1.079 1.2 0 .731-.467 1.826-.707 2.839-.2.849.426 1.541 1.263 1.541 1.516 0 2.537-1.946 2.537-4.253 0-1.753-1.182-3.066-3.329-3.066-2.427 0-3.938 1.811-3.938 3.831 0 .698.205 1.189.527 1.569.147.175.168.246.115.446l-.163.642c-.054.203-.218.275-.4.201C3.61 10.788 3.09 9.564 3.09 8.188c0-2.272 1.916-4.998 5.718-4.998 3.054 0 5.064 2.211 5.064 4.583 0 3.139-1.745 5.483-4.316 5.483-.864 0-1.677-.468-1.955-.998 0 0-.464 1.844-.562 2.199-.17.617-.502 1.233-.806 1.714A8 8 0 0 0 16.5 8.5a8 8 0 0 0-8-8z"
  }));
};

module.exports.Pinterest = function Pinterest(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.025 6.225c0 3.819-2.123 6.662-5.246 6.662-1.049 0-2.035-.568-2.365-1.213a366.659 366.659 0 0 1-.682 2.667c-.203.746-.619 1.493-.985 2.074-1.043.737-1.14-.404-1.14-.404-.024-.684-.012-1.505.166-2.237 0 0 .189-.785 1.25-5.285-.315-.62-.315-1.543-.315-1.543 0-1.441.835-2.516 1.872-2.516.885 0 1.314.67 1.314 1.467 0 .885-.57 2.213-.859 3.439-.24 1.037.518 1.871 1.529 1.871 1.847 0 3.084-2.363 3.084-5.158 0-2.137-1.44-3.729-4.045-3.729-2.945 0-4.778 2.2-4.778 4.652 0 .848.252 1.442.644 1.91.178.215.203.29.139.543-.049.177-.15.607-.201.771-.063.253-.266.341-.48.253C2.574 9.891 1.941 8.4 1.941 6.731c0-2.756 2.325-6.068 6.928-6.068 3.717 0 6.156 2.692 6.156 5.562z"
  }));
};

module.exports.Plug = function Plug(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M3 4v5.014C3 11.763 5.468 14 8.5 14S14 11.763 14 9.014V4H3zm10 5.014C13 11.212 10.981 13 8.5 13S4 11.212 4 9.014V5h9v4.014zM7.016 3h-1V0h1v3zm3.968 0h-1V0h1v3zM8 14h1v3H8v-3zm3-6H6V7h5v1zm0 2H6V9h5v1z"
  }));
};

module.exports.Plus = function Plus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16 9H9v7H8V9H1V8h7V1h1v7h7v1z"
  }));
};

module.exports.PowerOff = function PowerOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16 9.5c0 4.136-3.364 7.5-7.5 7.5S1 13.636 1 9.5c0-3.498 2.476-6.579 5.888-7.326l.214.977C4.146 3.798 2 6.468 2 9.5 2 13.084 4.916 16 8.5 16S15 13.084 15 9.5c0-3.028-2.143-5.698-5.096-6.348l.215-.977C13.527 2.926 16 6.006 16 9.5zM9 0H8v10h1V0z"
  }));
};

module.exports.Printer = function Printer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 6h-3.008V4.182L9.489 0H2.992v6H0v8h3v3.1h11V14h3V6zM9.992 1.832 12.327 4H9.992V1.832zm-6-.832h5v4h4v1h-9V1zM13 16.1H4v-5h9v5zm3-3.1h-2v-2.9H3V13H1V7h15v6zm-4.994 0H5v-1h6.006v1zM9 15H5v-1h4v1zM3 9H2V8h1v1zm2 0H4V8h1v1z"
  }));
};

module.exports.Pulse = function Pulse(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m14.33 8-1.876-4.377-3.438 9.783L5.001.296 2.631 8H0v1h3.369l1.63-5.296 3.95 12.903 3.597-10.23L13.67 9H17V8z"
  }));
};

module.exports.QuoteLeft = function QuoteLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13.169 7.614a3.51 3.51 0 0 0-1.982.612c1.23-3.472 3.991-3.88 4.134-3.898l-.123-.992c-.051.006-5.126.704-5.563 7.725l.015.001c0 .027-.008.054-.008.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.584-3.529-3.529-3.529zm0 6.057c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.134 2.528-2.528 2.528zM3.733 7.614c-.734 0-1.416.227-1.981.612 1.23-3.472 3.99-3.88 4.133-3.898l-.123-.992c-.051.006-5.125.704-5.564 7.725l.015.001c0 .027-.008.054-.008.081 0 1.945 1.583 3.528 3.528 3.528s3.528-1.583 3.528-3.528-1.582-3.529-3.528-3.529zm0 6.057c-1.395 0-2.528-1.134-2.528-2.528s1.134-2.528 2.528-2.528 2.528 1.134 2.528 2.528-1.133 2.528-2.528 2.528z"
  }));
};

module.exports.QuoteRight = function QuoteRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M7.307 6.862a3.533 3.533 0 0 0-3.529-3.529A3.533 3.533 0 0 0 .25 6.862a3.532 3.532 0 0 0 3.528 3.528c.734 0 1.416-.227 1.981-.611-1.231 3.47-3.99 3.877-4.133 3.896l.123.992c.051-.006 5.125-.703 5.563-7.724l-.013-.001c.001-.027.008-.052.008-.08zM3.778 9.391c-1.394 0-2.528-1.134-2.528-2.528s1.134-2.529 2.528-2.529c1.395 0 2.529 1.135 2.529 2.529S5.173 9.391 3.778 9.391zm12.956-2.449c.001-.027.008-.053.008-.08 0-1.946-1.583-3.529-3.528-3.529S9.686 4.916 9.686 6.862a3.532 3.532 0 0 0 3.528 3.528c.734 0 1.416-.227 1.981-.611-1.23 3.47-3.99 3.877-4.133 3.896l.123.992c.051-.006 5.125-.703 5.563-7.724l-.014-.001zm-3.52 2.449c-1.394 0-2.528-1.134-2.528-2.528s1.134-2.529 2.528-2.529 2.528 1.135 2.528 2.529-1.134 2.528-2.528 2.528z"
  }));
};

module.exports.Receipt = function Receipt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M2 0v16.902l2.028-2.481 1.503 1.88 1.501-1.875 1.499 1.875 1.5-1.875 1.5 1.875 1.499-1.875 1.97 2.46V0H2zm12 14.036-.97-1.211-1.499 1.875-1.5-1.875-1.5 1.875-1.499-1.875L5.531 14.7l-1.495-1.87L3 14.098V1h11v13.036zM10.997 4h-6V3h6v1zm-2 4h-4V7h4v1zm2.981-2h-7V5h7v1zM5 10h7v1H5v-1z"
  }));
};

module.exports.Reddit = function Reddit(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.581 9.936c.024.161.04.33.04.491 0 1.308-.766 2.517-2.145 3.42-1.347.879-3.121 1.363-5.008 1.363s-3.669-.484-5.008-1.363c-1.388-.903-2.145-2.112-2.145-3.42 0-.177.016-.354.04-.532A1.834 1.834 0 0 1 .5 8.354a1.821 1.821 0 0 1 3.016-1.378c1.291-.823 2.976-1.291 4.774-1.324l1.081-3.41a.32.32 0 0 1 .371-.21l2.799.661a1.503 1.503 0 0 1 2.879.598c0 .83-.669 1.508-1.5 1.508-.823 0-1.492-.67-1.5-1.492L9.879 2.71l-.935 2.951c1.701.072 3.29.541 4.516 1.339a1.821 1.821 0 1 1 2.121 2.936zM1.532 9.25c.258-.693.75-1.339 1.451-1.896a1.168 1.168 0 0 0-.661-.201c-.661 0-1.201.54-1.201 1.201 0 .356.161.678.411.896zM15 10.427c0-1.08-.662-2.112-1.863-2.896-1.242-.806-2.903-1.257-4.669-1.257s-3.428.452-4.67 1.257c-1.202.783-1.863 1.815-1.863 2.896 0 1.089.661 2.121 1.863 2.904 1.242.806 2.903 1.258 4.669 1.258s3.428-.452 4.669-1.258C14.338 12.548 15 11.516 15 10.427zm-8.903.234c-.605 0-1.121-.492-1.121-1.097 0-.612.516-1.121 1.121-1.121s1.105.509 1.105 1.121c0 .605-.5 1.097-1.105 1.097zm4.984 1.606a.316.316 0 0 1 0 .443c-.54.54-1.379.798-2.573.798h-.016c-1.194 0-2.033-.258-2.573-.798a.316.316 0 0 1 0-.443.305.305 0 0 1 .436 0c.419.419 1.113.62 2.137.62h.016c1.017 0 1.718-.201 2.137-.62a.305.305 0 0 1 .436 0zm.943-2.703c0 .604-.5 1.097-1.105 1.097s-1.121-.492-1.121-1.097c0-.612.516-1.121 1.121-1.121s1.105.509 1.105 1.121zm1.016-6.273c0 .482.395.878.879.878s.879-.396.879-.878a.882.882 0 0 0-.879-.88.882.882 0 0 0-.879.88zm2.839 5.063c0-.661-.54-1.201-1.201-1.201-.258 0-.5.081-.694.226.694.557 1.185 1.21 1.436 1.92a1.21 1.21 0 0 0 .459-.945z"
  }));
};

module.exports.Reload = function Reload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M6 8H0V2h1v4.109C2.013 2.916 5.036.625 8.5.625c3.506 0 6.621 2.36 7.574 5.739l-.963.271A6.898 6.898 0 0 0 8.5 1.624C5.274 1.625 2.484 3.9 1.792 7H6v1zm5 1v1h4.208c-.693 3.101-3.479 5.375-6.708 5.375a6.895 6.895 0 0 1-6.611-5.011l-.963.271A7.9 7.9 0 0 0 8.5 16.374c3.459 0 6.475-2.28 7.5-5.482V15h1V9h-6z"
  }));
};

module.exports.Rocket = function Rocket(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M12 11V5c0-5-3-5-3-5S6 0 6 5v6s-2 0-2 6c0 0 2.379-2.375 4.312-2.895.004.582.31 1.051.688 1.051s.684-.47.688-1.051C11.621 14.625 14 17 14 17c0-6-2-6-2-6zM9 1.001c.26.021 1.667.27 1.947 2.999H7.053C7.333 1.271 8.74 1.022 9 1.001zM9 13c-1.271 0-2.742.868-3.877 1.717.263-2.121.859-2.629.993-2.717H7V5h4v7h.884c.134.088.73.596.993 2.717C11.742 13.868 10.271 13 9 13z"
  }));
};

module.exports.RssAlt = function RssAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M11.173 17h-1C10.173 11.486 5.609 7 0 7V6c6.161 0 11.173 4.935 11.173 11zM0 0v1c8.972 0 16 7.028 16 16h1C17 7.468 9.532 0 0 0zm4 15.001A2 2 0 0 0 2.004 13 2.004 2.004 0 0 0 0 15.001a2 2 0 0 0 4 0zm-1 0a.999.999 0 0 1-.996.999A1.002 1.002 0 0 1 1 15.001a1 1 0 1 1 2 0z"
  }));
};

module.exports.Rss = function Rss(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9.969 14h-1c0-3.233-2.678-5.863-5.969-5.863v-1c3.843 0 6.969 3.079 6.969 6.863zM3 3.5v1c5.327 0 9.5 4.173 9.5 9.5h1C13.5 8.112 8.888 3.5 3 3.5zm3 9.001a1.5 1.5 0 1 0-3.002 0A1.5 1.5 0 0 0 6 12.5zm-1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM17 15.5v-14c0-.827-.673-1.5-1.5-1.5h-14C.673 0 0 .673 0 1.5v14c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5zM15.5 1a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5v-14a.5.5 0 0 1 .5-.5h14z"
  }));
};

module.exports.RulerAlt2 = function RulerAlt2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 .293V17h16.707L0 .293zm1 2.414 2.957 2.957-.655.655.707.707.655-.655.709.709-.655.656.707.707.655-.655.71.709-.655.655.707.707.655-.655.71.71-.655.655.707.707.655-.655.709.709-.655.655.707.707.655-.655.71.71-.655.655.707.707.655-.655L14.293 16H1V2.707zM2 15h7.707L2 7.293V15zm1-5.293L7.293 14H3V9.707z"
  }));
};

module.exports.RulerAlt = function RulerAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M12.036.015.015 12.036l4.95 4.949 12.02-12.02-4.949-4.95zM1.429 12.036l.696-.696 1.414 1.414.707-.707-1.414-1.414.719-.719.707.707.707-.707-.707-.707.707-.707 1.414 1.414.707-.707-1.414-1.414.696-.696.707.707.707-.707-.707-.707.707-.707 1.414 1.414.707-.707-1.414-1.414.718-.718.707.707.707-.707-.707-.707.707-.707 1.415 1.414.707-.707-1.415-1.414.708-.708 3.535 3.536L4.965 15.571l-3.536-3.535z"
  }));
};

module.exports.RulerPencil = function RulerPencil(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M4.492 0H2.508c-.827 0-1.5.673-1.5 1.5v10.657l2.521 4.956 2.464-4.959V1.5A1.503 1.503 0 0 0 4.492 0zM2.508 1h1.984c.275 0 .5.225.5.5v1.019H2.008V1.5a.5.5 0 0 1 .5-.5zm-.5 3.55V3.519h2.984V4.55H2.008zm1.94 9.471h-.87l-1.07-2.104V5.55h1v6.481h1V5.55h.984v6.37l-1.044 2.101zM8 0v17h7V0H8zm6 16H9v-.984h2v-1H9V13h1v-1H9v-1h2v-1H9v-.984h1v-1H9v-1h2v-1H9V5h1V4H9V3h2V2H9V1h5v15z"
  }));
};

module.exports.Ruler = function Ruler(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M5 0v17h7V0H5zm6 16H6v-.984h2v-1H6V13h1v-1H6v-1h2v-1H6v-.984h1v-1H6v-1h2v-1H6V5h1V4H6V3h2V2H6V1h5v15z"
  }));
};

module.exports.SaveAlt = function SaveAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.5 0H2.836L0 2.776V15.5c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5v-14c0-.827-.673-1.5-1.5-1.5zM13 1v2H5V1h8zM3 16v-1h11v1H3zm13-.5a.5.5 0 0 1-.5.5H15v-2H2v2h-.5a.5.5 0 0 1-.5-.5V3.196L3.244 1H4v3h10V1h1.5a.5.5 0 0 1 .5.5v14zM8.5 5C6.57 5 5 6.57 5 8.5S6.57 12 8.5 12 12 10.43 12 8.5 10.43 5 8.5 5zm0 6C7.122 11 6 9.879 6 8.5S7.122 6 8.5 6 11 7.121 11 8.5 9.878 11 8.5 11z"
  }));
};

module.exports.Save = function Save(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14.164 0H1.5C.673 0 0 .673 0 1.5v14c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V2.776L14.164 0zM8 1v4h3V1h1v5H4V1h4zM3 16v-6h11v6H3zm13-.5c0 .275-.225.5-.5.5H15V9H2v7h-.5a.5.5 0 0 1-.5-.5v-14a.5.5 0 0 1 .5-.5H3v6h10V1h.756L16 3.196V15.5z"
  }));
};

module.exports.Search = function Search(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m16.604 15.868-5.173-5.173A6.468 6.468 0 0 0 13 6.472c0-3.584-2.916-6.5-6.5-6.5a6.466 6.466 0 0 0-4.598 1.903A6.457 6.457 0 0 0 0 6.472c0 3.584 2.916 6.5 6.5 6.5a6.47 6.47 0 0 0 4.224-1.569l5.173 5.173.707-.708zM6.5 11.972a5.506 5.506 0 0 1-5.5-5.5 5.455 5.455 0 0 1 1.61-3.889A5.462 5.462 0 0 1 6.5.972c3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5z"
  }));
};

module.exports.Server = function Server(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 3.5C17 1.227 12.62 0 8.5 0S0 1.227 0 3.5c0 .149.024.318.08.5H0v9.5C0 15.773 4.38 17 8.5 17s8.5-1.227 8.5-3.5V4h-.08a1.71 1.71 0 0 0 .08-.5zM8.5 1C12.793 1 16 2.32 16 3.5c0 .398-.388.835-1.093 1.229C13.488 5.525 11.093 6 8.5 6s-4.988-.475-6.407-1.271C1.388 4.335 1 3.898 1 3.5 1 2.32 4.207 1 8.5 1zm0 15C4.207 16 1 14.68 1 13.5v-1.633c.175.135.367.271.604.403 1.562.874 4.14 1.396 6.896 1.396.345 0 .687-.008 1.023-.024 2.361-.111 4.505-.607 5.872-1.372l.001-.001c.236-.133.43-.268.604-.403V13.5c0 1.18-3.207 2.5-7.5 2.5zm6.407-4.603c-1.42.795-3.814 1.27-6.407 1.27-.324 0-.646-.008-.962-.022-2.214-.102-4.203-.552-5.445-1.247C1.389 11.002 1 10.565 1 10.167V8.533c.175.135.368.271.605.403 1.561.874 4.139 1.396 6.895 1.396s5.334-.522 6.895-1.396c.237-.132.43-.268.605-.403v1.634c0 .398-.389.835-1.093 1.23zm-.001-3.334c-1.419.795-3.813 1.27-6.406 1.27s-4.987-.475-6.406-1.27C1.389 7.669 1 7.231 1 6.833V5.199c.175.136.367.271.604.404C3.166 6.478 5.743 7 8.5 7s5.334-.522 6.896-1.397c.237-.133.429-.268.604-.404v1.634c0 .398-.389.836-1.094 1.23z"
  }));
};

module.exports.Settings = function Settings(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5S11 9.85 11 8.472s-1.122-2.5-2.5-2.5zm0 4c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm8.44-.526c.037-.321.06-.645.06-.974s-.023-.653-.06-.974l-2.588-.778a5.974 5.974 0 0 0-.474-1.149l1.279-2.377a8.66 8.66 0 0 0-1.38-1.38L11.4 3.094a6.074 6.074 0 0 0-1.15-.474L9.474.032c-.32-.037-.644-.06-.974-.06s-.654.023-.974.06L6.75 2.62a5.872 5.872 0 0 0-1.15.475l-2.377-1.28a8.531 8.531 0 0 0-1.379 1.38L3.123 5.57a6.047 6.047 0 0 0-.474 1.15L.06 7.498c-.037.32-.06.644-.06.974s.023.654.06.974l2.588.776c.12.403.278.789.474 1.151l-1.279 2.376c.406.511.869.974 1.38 1.38L5.6 13.85c.362.196.748.354 1.15.474l.776 2.588c.321.037.645.06.974.06s.654-.023.974-.06l.776-2.588c.402-.12.788-.278 1.15-.474l2.376 1.279c.511-.407.974-.87 1.38-1.381l-1.278-2.376c.196-.362.354-.748.474-1.15l2.588-.776zm-3.392-.027-.154.518c-.1.337-.233.66-.396.959l-.256.475.255.475.952 1.77a7.358 7.358 0 0 1-.306.306L11.4 12.713l-.475.256a5.1 5.1 0 0 1-.96.396l-.518.154-.155.518-.579 1.932a7.672 7.672 0 0 1-.426 0l-.579-1.932-.155-.518-.518-.154a5 5 0 0 1-.959-.396l-.475-.256-2.245 1.207a8.027 8.027 0 0 1-.306-.306l1.208-2.244-.256-.475a5.112 5.112 0 0 1-.396-.96l-.153-.517-2.449-.734a5.092 5.092 0 0 1 0-.425l2.448-.734.154-.518c.1-.337.233-.66.396-.959l.256-.475L3.05 3.328a8.8 8.8 0 0 1 .305-.306l2.247 1.21.476-.259c.297-.162.619-.295.956-.395l.518-.154.155-.518.579-1.932L8.5.972l.213.003.579 1.932.155.518.518.154c.335.1.659.233.96.396l.475.255 2.244-1.208c.104.099.207.201.306.306l-.953 1.77-.255.475.257.475c.163.3.295.622.395.957l.154.518.518.155 1.932.581.002.213c0 .07-.001.141-.004.213l-2.448.734z"
  }));
};

module.exports.ShareAlt = function ShareAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M5.527 8.229 1.674 4.375 5.528.521l.707.707-2.647 2.647H6.5c3.032 0 5.5 2.467 5.5 5.5a5.523 5.523 0 0 1-1.747 4.021l-.682-.73A4.463 4.463 0 0 0 11 9.375c0-2.481-2.019-4.5-4.5-4.5H3.588l2.646 2.646-.707.708zM16 9.025V15.5c0 .275-.225.5-.5.5h-14a.501.501 0 0 1-.5-.5V9.03H0v6.47c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V9.025h-1z"
  }));
};

module.exports.Share = function Share(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M6.795 13.396a5.521 5.521 0 0 1-1.747-4.021c0-3.033 2.468-5.5 5.5-5.5h2.912l-2.646-2.646.707-.707 3.854 3.854-3.854 3.854-.707-.707 2.646-2.646h-2.912a4.505 4.505 0 0 0-4.5 4.5 4.46 4.46 0 0 0 1.429 3.29l-.682.729zm9.253-4.366v6.47c0 .275-.225.5-.5.5h-14a.501.501 0 0 1-.5-.5V9.025h-1V15.5c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V9.03h-1z"
  }));
};

module.exports.SharethisAlt = function SharethisAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.5 13.5c0 1.656-1.344 3-3 3h-10c-1.656 0-3-1.344-3-3v-10c0-1.656 1.344-3 3-3h10c1.656 0 3 1.344 3 3v10zm-4.886-4.114c-.583 0-1.114.229-1.51.604l-2.51-1.25c.01-.084.02-.156.02-.24s-.01-.156-.021-.24l2.51-1.249c.396.375.927.604 1.51.604a2.229 2.229 0 0 0 2.219-2.229c0-1.219-1-2.219-2.219-2.219a2.23 2.23 0 0 0-2.229 2.219c0 .083.01.156.021.239l-2.51 1.25a2.222 2.222 0 0 0-1.509-.594c-1.219 0-2.219.989-2.219 2.219a2.22 2.22 0 0 0 3.729 1.625l2.51 1.25c-.011.083-.021.156-.021.239 0 1.219 1 2.219 2.229 2.219 1.219 0 2.219-1 2.219-2.219 0-1.229-1-2.228-2.219-2.228z"
  }));
};

module.exports.Sharethis = function Sharethis(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.5 13.168a3.33 3.33 0 0 1-3.333 3.332 3.329 3.329 0 0 1-3.313-3.686l-3.75-1.876A3.33 3.33 0 0 1 .5 8.5a3.329 3.329 0 0 1 3.333-3.332c.875 0 1.677.343 2.271.895l3.75-1.874A3.33 3.33 0 0 1 13.167.501 3.33 3.33 0 0 1 16.5 3.835a3.33 3.33 0 0 1-5.604 2.437l-3.75 1.875c.01.115.021.24.021.354 0 .115-.011.24-.021.354l3.75 1.877a3.335 3.335 0 0 1 2.271-.897 3.327 3.327 0 0 1 3.333 3.333z"
  }));
};

module.exports.Shield = function Shield(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15 1.016c0 1.654-1.346 3-3 3s-3-1.346-3-3H8c0 1.654-1.346 3-3 3s-3-1.346-3-3H1v6.847c0 5.405 7.002 8 7.301 8.107l.166.061.167-.058C8.934 15.87 16 13.386 16 7.835V1.016h-1zM2 7.862V3.658a3.984 3.984 0 0 0 6-.011v11.114c-1.659-.747-6-3.067-6-6.899zm13-.027c0 3.895-4.293 6.163-6 6.912V3.646a3.984 3.984 0 0 0 6 .012v4.177z"
  }));
};

module.exports.ShiftLeftAlt = function ShiftLeftAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M5.854 5.854 3.207 8.5l2.646 2.646-.707.707L1.793 8.5l3.354-3.354.707.708zM9 0v17h1V0H9z"
  }));
};

module.exports.ShiftLeft = function ShiftLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 9.001H5.708l3.646 3.646-.707.707L3.793 8.5l4.854-4.854.707.707-3.648 3.648H17v1zM0 17h1V0H0v17z"
  }));
};

module.exports.ShiftRightAlt = function ShiftRightAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m15.207 8.5-3.354 3.354-.707-.707L13.793 8.5l-2.646-2.646.707-.707L15.207 8.5zM7 17h1V0H7v17z"
  }));
};

module.exports.ShiftRight = function ShiftRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.354 3.646 13.207 8.5l-4.854 4.854-.707-.707L11.293 9H0V8h11.292L7.646 4.354l.708-.708zM16 0v17h1V0h-1z"
  }));
};

module.exports.Shine = function Shine(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.5 5C6.57 5 5 6.57 5 8.5S6.57 12 8.5 12 12 10.43 12 8.5 10.43 5 8.5 5zm0 6C7.122 11 6 9.878 6 8.5S7.122 6 8.5 6 11 7.122 11 8.5 9.878 11 8.5 11zM9 4H8V1h1v3zm-1 9h1v3H8v-3zm8-5v1h-3V8h3zM4 9H1V8h3v1zm8.036-3.329-.707-.707 2.121-2.121.707.707-2.121 2.121zm-7.072 5.658.707.707-2.121 2.121-.707-.707 2.121-2.121zm7.072 0 2.121 2.121-.707.707-2.121-2.121.707-.707zM4.964 5.671 2.843 3.55l.707-.707 2.121 2.121-.707.707z"
  }));
};

module.exports.ShoppingCartFull = function ShoppingCartFull(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M2.75 12.5c-.965 0-1.75.785-1.75 1.75S1.785 16 2.75 16s1.75-.785 1.75-1.75-.785-1.75-1.75-1.75zm0 2.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75.75.337.75.75-.337.75-.75.75zm8.5-2.5c-.965 0-1.75.785-1.75 1.75S10.285 16 11.25 16 13 15.215 13 14.25s-.785-1.75-1.75-1.75zm0 2.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75.75.337.75.75-.337.75-.75.75zm2.12-13-.301 2H-.074l1.117 8.036h11.914L14 4.536 14.231 3H17V2h-3.63zm-1.284 9.036H1.914L1.074 5h11.852l-.84 6.036zM11 10H3V6.031h1V9h6V6.03h1V10zM4 2.969H3V1h8v1.906h-1V2H4v.969z"
  }));
};

module.exports.ShoppingCart = function ShoppingCart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M2.75 12.5c-.965 0-1.75.785-1.75 1.75S1.785 16 2.75 16s1.75-.785 1.75-1.75-.785-1.75-1.75-1.75zm0 2.5a.75.75 0 0 1 0-1.5.75.75 0 0 1 0 1.5zm8.5-2.5c-.965 0-1.75.785-1.75 1.75S10.285 16 11.25 16 13 15.215 13 14.25s-.785-1.75-1.75-1.75zm0 2.5a.75.75 0 0 1 0-1.5.75.75 0 0 1 0 1.5zm2.121-13-.302 2H-.074l1.118 8.036h11.913l1.038-7.463L14.231 3H17V2h-3.629zm-.445 3-.139 1H1.213l-.139-1h11.852zM1.914 11.036 1.353 7h11.295l-.561 4.036H1.914z"
  }));
};

module.exports.Shortcode = function Shortcode(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M.026 1h3v1h-2v13h2v1h-3V1zm14 0v1h2v13h-2v1h3V1h-3zM8.91 7.967c-1.115-.433-1.607-.804-1.607-1.56 0-.552.42-1.211 1.523-1.211.731 0 1.271.239 1.535.384l.288-.852c-.359-.204-.96-.396-1.787-.396-1.571 0-2.614.936-2.614 2.195 0 1.14.815 1.823 2.135 2.291 1.091.419 1.523.851 1.523 1.606 0 .815-.624 1.38-1.691 1.38-.72 0-1.403-.24-1.871-.528l-.264.876c.432.287 1.283.516 2.062.516 1.907 0 2.831-1.079 2.831-2.327.001-1.188-.696-1.847-2.063-2.374z"
  }));
};

module.exports.Signal = function Signal(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M11.5 4c0-1.654-1.346-3-3-3s-3 1.346-3 3A2.997 2.997 0 0 0 8 6.949V15H6v1h5v-1H9V6.949A2.997 2.997 0 0 0 11.5 4zm-5 0c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2zM4.504 2.192c-.378.46-.577 1.004-.577 1.574s.199 1.114.577 1.574l-.774.636c-.525-.641-.803-1.405-.803-2.209s.278-1.569.803-2.209l.774.634zM2 3.767c0 1.079.387 2.096 1.119 2.938l-.754.656C1.484 6.349 1 5.071 1 3.767S1.484 1.185 2.365.172l.754.656C2.387 1.671 2 2.688 2 3.767zm12.073 0a3.45 3.45 0 0 1-.804 2.209l-.773-.635c.378-.46.577-1.004.577-1.574s-.199-1.114-.577-1.574l.773-.635c.526.64.804 1.404.804 2.209zm1.927 0a5.49 5.49 0 0 1-1.365 3.595l-.754-.656C14.613 5.862 15 4.846 15 3.767s-.387-2.096-1.119-2.938l.754-.656A5.485 5.485 0 0 1 16 3.767z"
  }));
};

module.exports.Skype = function Skype(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.199 9.943a8.1 8.1 0 0 0 .134-1.443c0-4.788-4.269-8.608-9.277-7.699A4.449 4.449 0 0 0 4.5 0 4.505 4.505 0 0 0 0 4.5c0 .921.276 1.8.801 2.557-.089.49-.134.974-.134 1.443 0 4.788 4.27 8.608 9.277 7.699A4.449 4.449 0 0 0 12.5 17c2.481 0 4.5-2.019 4.5-4.5 0-.921-.276-1.8-.801-2.557zM12.5 16a3.473 3.473 0 0 1-2.133-.729l-.182-.14-.225.047a6.84 6.84 0 0 1-8.138-8.139l.046-.225-.14-.182A3.474 3.474 0 0 1 1 4.5C1 2.57 2.57 1 4.5 1c.775 0 1.512.252 2.133.729l.182.14.225-.047a6.84 6.84 0 0 1 8.137 8.139l-.046.225.14.182c.477.619.729 1.358.729 2.132 0 1.93-1.57 3.5-3.5 3.5zm.219-5.761c0 2.115-2.042 3.094-4 3.094-2.344 0-4.303-1.042-4.303-2.323 0-.572.323-1.093 1.053-1.093 1.115 0 1.219 1.604 3.146 1.604.916 0 1.51-.405 1.51-.937 0-.667-.573-.771-1.5-1l-1.521-.375c-1.52-.365-2.688-.99-2.688-2.74 0-2.114 2.094-2.896 3.896-2.896 1.969 0 3.958.781 3.958 1.979 0 .604-.406 1.136-1.083 1.136-1.011 0-1.042-1.197-2.678-1.197-.916 0-1.5.249-1.5.801 0 .605.594.74 1.387.928l1.082.25c1.48.333 3.241.957 3.241 2.769z"
  }));
};

module.exports.Slice = function Slice(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.561 3.844 15.158 2.44c-.563-.565-1.554-.567-2.121 0L.449 15.032l5.434-.003 2.183-2.168.824.775 7.671-7.672c.283-.282.439-.659.439-1.06s-.156-.777-.439-1.06zm-9.785 6.272.824-.824 2.109 2.109-.823.825-2.11-2.11zm-1.305 3.913-2.608.001 3.206-3.207 1.311 1.311-1.909 1.895zm10.383-8.771-5.437 5.437-2.11-2.11 5.437-5.438a.5.5 0 0 1 .707-.001l1.403 1.404a.502.502 0 0 1 0 .708z"
  }));
};

module.exports.Smallcap = function Smallcap(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M6 5.925h1v2H6v-1H4v8h1v1H2v-1h1v-8H1v1H0v-2h6zM16 2H6v2.577h1V3h4v12h-1v1h3v-1h-1V3h4v1.577h1V2h-1z"
  }));
};

module.exports.Soundcloud = function Soundcloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m.882 10.132-.139.875c-.007.035-.027.062-.062.062s-.056-.027-.062-.062L.5 10.132l.118-.889c.007-.035.028-.062.062-.062s.055.027.062.062l.14.889zm.639 0-.18 1.409c-.007.035-.035.062-.069.062-.035 0-.062-.027-.062-.068l-.16-1.403.16-1.438c0-.034.027-.062.062-.062.034 0 .062.028.069.062l.18 1.438zm.632 0-.173 1.646c0 .041-.035.076-.077.076s-.076-.035-.083-.076l-.146-1.646.146-1.701c.007-.049.042-.083.083-.083.042 0 .077.034.077.083l.173 1.701zm.639 0-.16 1.694c-.007.056-.048.091-.097.091a.088.088 0 0 1-.09-.091l-.146-1.694.146-1.75c0-.056.042-.09.09-.09.049 0 .09.034.097.09l.16 1.75zm.639 0-.146 1.709c-.007.062-.056.111-.111.111s-.104-.049-.104-.111l-.139-1.709.139-1.624c0-.057.049-.105.104-.105.056 0 .104.049.111.105l.146 1.624zm.652 0-.146 1.709c0 .068-.056.125-.118.125-.069 0-.118-.057-.125-.125l-.125-1.709.125-2.64c.008-.068.056-.124.125-.124.062 0 .118.056.118.124l.146 2.64zm.639.014-.132 1.695a.132.132 0 0 1-.132.131c-.076 0-.131-.055-.139-.131l-.111-1.695.111-3.25c.007-.076.062-.132.139-.132.069 0 .132.056.132.132l.132 3.25zm.674-.014-.125 1.681a.153.153 0 0 1-.153.146c-.076 0-.139-.062-.146-.146l-.111-1.681.111-3.514c0-.083.07-.153.146-.153.083 0 .146.07.153.153l.125 3.514zm.66 0L5.944 6.5c-.006-.09-.076-.167-.166-.167-.083 0-.16.077-.16.167l-.098 3.632.098 1.674c.007.09.077.16.16.16.09 0 .16-.07.167-.16l.111-1.674zm.666 0-.104 1.66a.172.172 0 0 1-.174.174c-.097 0-.167-.077-.173-.174l-.098-1.66.098-3.542c0-.098.076-.174.173-.174.098 0 .174.076.174.174l.104 3.542zm.681.007-.098 1.64c0 .104-.083.188-.187.188s-.188-.084-.194-.188l-.083-1.64.083-3.416c.007-.111.09-.195.194-.195.104 0 .18.084.187.195l.098 3.416zm.673 0-.083-4.07a.195.195 0 0 0-.09-.166.21.21 0 0 0-.111-.035.208.208 0 0 0-.111.035.195.195 0 0 0-.091.166l-.007.041-.07 4.021.077 1.639v.008c0 .041.014.083.042.117a.206.206 0 0 0 .16.076.198.198 0 0 0 .139-.062.172.172 0 0 0 .062-.139L8 11.604l.076-1.465zm.605 1.604c0 .118-.097.215-.215.215s-.215-.097-.223-.215l-.041-.791-.042-.813.083-4.416v-.022a.255.255 0 0 1 .084-.166.226.226 0 0 1 .138-.049c.035 0 .077.014.104.035a.23.23 0 0 1 .111.18l.097 4.438-.096 1.604zm5.854.223H9.077c-.118-.014-.215-.104-.215-.229V5.492c0-.117.042-.173.195-.229a3.473 3.473 0 0 1 4.715 2.924 1.97 1.97 0 0 1 2.729 1.82 1.964 1.964 0 0 1-1.966 1.959z"
  }));
};

module.exports.SplitH = function SplitH(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M2.207 8h3.772v1H2.207l1.646 1.646-.707.707L.293 8.5l2.854-2.854.707.707L2.207 8zm11.647-2.354-.707.707L14.793 8h-3.772v1h3.772l-1.646 1.646.707.707L16.707 8.5l-2.853-2.854zM8 17h1V0H8v17z"
  }));
};

module.exports.SplitVAlt = function SplitVAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M5.354 5.854 2.707 8.5l2.646 2.646-.707.707L1.293 8.5l3.354-3.354.707.708zm7-.708-.707.707L14.293 8.5l-2.646 2.646.707.707L15.707 8.5l-3.353-3.354zM8 17h1V0H8v17z"
  }));
};

module.exports.SplitV = function SplitV(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m10.646 13.146.707.707L8.5 16.707l-2.854-2.854.707-.707L8 14.793v-3.772h1v3.772l1.646-1.647zM8 2.207v3.772h1V2.207l1.646 1.646.707-.707L8.5.293 5.646 3.146l.707.707L8 2.207zM0 8v1h17V8H0z"
  }));
};

module.exports.Spray = function Spray(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M6.5 3a4.014 4.014 0 0 0-3.453 2H2v10.5c0 .827.673 1.5 1.5 1.5h6c.827 0 1.5-.673 1.5-1.5V5H9.953A4.019 4.019 0 0 0 6.5 3zm0 1a3.02 3.02 0 0 1 2.234 1H4.267C4.828 4.376 5.64 4 6.5 4zM10 15.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5V6h7v9.5zM8 0H5v3h3V0zM7 2H6V1h1v1zm4.945-.489 3.136.518-.163.986-6-.99.085-.514-.085-.514 6-.99.163.986-3.136.518z"
  }));
};

module.exports.StackOverflow = function StackOverflow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M12.66 16.179c0 .312-.009.312-.009.312v.009H2.545c-.313 0-.313-.009-.313-.009h-.009V9.919h1.081v5.519h8.286V9.919h1.07v6.26zm-2.151-1.823-6.312.009v-1.348l6.312-.009v1.348zm.152-3.07-.116 1.339-6.295-.58.125-1.339 6.286.58zm.42-1.768-.349 1.305-6.098-1.635.348-1.304 6.099 1.634zm.794-1.536-.688 1.16L5.75 5.929l.687-1.161 5.438 3.214zm1.33-.946-1.106.759-3.564-5.214 1.116-.769 3.554 5.224zm1.572-.312-1.331.232-1.08-6.224L13.696.5l1.081 6.224z"
  }));
};

module.exports.Stamp = function Stamp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 11.918a1.9 1.9 0 0 0-1.897-1.898h-4.396l1.26-4.517.019-3.52C11.984.908 11.071 0 9.99 0H6.999C5.916 0 5.002.908 5.002 1.983v3.361L6.28 10.02H1.897A1.9 1.9 0 0 0 0 11.918V16h1v1h15v-1h1v-4.082zM16 15H1v-3.082c0-.495.402-.898.897-.898h5.697L6.002 5.276V1.983c0-.524.466-.983.997-.983H9.99c.529 0 .994.459.994.983V5.3L9.39 11.02h5.713c.495 0 .897.403.897.898V15z"
  }));
};

module.exports.Star = function Star(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.647 7.017h-6.225L8.5 1.097l-1.923 5.92H.353l5.035 3.658-1.922 5.92L8.5 12.936l5.035 3.659-1.922-5.92 5.034-3.658zm-5.014 6.96L8.5 11.699l-3.133 2.277 1.197-3.685-3.133-2.274h3.873L8.5 4.333l1.196 3.684h3.873l-3.133 2.275 1.197 3.685z"
  }));
};

module.exports.StatsDown = function StatsDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M5.166 8.803.795 4.847l.67-.741 3.773 3.413 4.204-3.026 5.593 6.25V8.458h1v4.036h-4.036v-1h2.366L9.296 5.829l-4.13 2.974zM0 16v1h17v-1H0z"
  }));
};

module.exports.StatsUp = function StatsUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 16v1H0v-1h17zM5.203 7.976l4.204 3.026L15 4.751v2.284h1V3h-4.036v1h2.366L9.26 9.665 5.131 6.691.759 10.647l.671.741 3.773-3.412z"
  }));
};

module.exports.Support = function Support(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13.384 3c-.937-1.829-2.805-3-4.884-3S4.554 1.17 3.616 3H0v13h17V3h-3.616zM8.5 1c1.522 0 2.907.767 3.732 2H4.768A4.49 4.49 0 0 1 8.5 1zM16 15H1V4h15v11zm-8-5H6V9h2V7h1v2h2v1H9v2H8v-2z"
  }));
};

module.exports.Tablet = function Tablet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9.25 14.5a.749.749 0 1 1-1.5 0 .749.749 0 1 1 1.5 0zM16 1.5v14c0 .827-.625 1.5-1.392 1.5H2.392C1.625 17 1 16.327 1 15.5v-14C1 .673 1.625 0 2.392 0h12.217C15.375 0 16 .673 16 1.5zm-1 0c0-.271-.179-.5-.392-.5H2.392C2.179 1 2 1.229 2 1.5v14c0 .271.179.5.392.5h12.217c.212 0 .391-.229.391-.5v-14zM3 2h11v11H3V2zm1 10h9V3H4v9z"
  }));
};

module.exports.Tag = function Tag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.953 1.008 4.986 3.89v12.14l3.986-2.794 4.041 2.785V3.886l-4.06-2.878zm3.061 13.109-3.045-2.1-2.982 2.091V4.399l2.975-2.161 3.053 2.165v9.714zm-4.76-8.116c0 .965.785 1.75 1.75 1.75s1.75-.785 1.75-1.75-.785-1.75-1.75-1.75-1.75.785-1.75 1.75zm1.75-.75c.413 0 .75.337.75.75s-.337.75-.75.75-.75-.337-.75-.75.337-.75.75-.75z"
  }));
};

module.exports.Target = function Target(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17.02 8h-2.045a6.504 6.504 0 0 0-6.004-5.977V-.039h-1v2.065A6.505 6.505 0 0 0 2.025 8H-.02v1h2.045a6.505 6.505 0 0 0 5.945 5.974V17h1v-2.023A6.503 6.503 0 0 0 14.974 9h2.045V8zm-8.049 5.977V12h-1v1.974A5.508 5.508 0 0 1 3.025 9H4.98V8H3.025a5.508 5.508 0 0 1 4.946-4.974v1.935h1V3.023A5.507 5.507 0 0 1 13.975 8H12.02v1h1.955a5.507 5.507 0 0 1-5.004 4.977z"
  }));
};

module.exports.Text = function Text(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14 2v3h-1V3H9v12h1.643v1H6.357v-1H8V3H4v2H3V2h11z"
  }));
};

module.exports.ThemifyFaviconAlt = function ThemifyFaviconAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M6.096 1.85C-3.49 4.846.78 11.468 2.037 12.122 4.168 13.227.885 15.696.885 15.696s2.817-.824 6.404-1.192c4.312-.44 9.156-1.068 9.592-3.467C17.68 6.644 14.484-.77 6.096 1.85zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 .5a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zM3.7 9.45c3.2 2.864 9.6-.95 9.6-.95-5.542 6.142-9.6.95-9.6.95z"
  }));
};

module.exports.ThemifyFavicon = function ThemifyFavicon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9.401 1.304c-.996 0-2.097.169-3.305.546-9.587 2.996-5.316 9.618-4.06 10.272C4.167 13.227.885 15.696.885 15.696s2.817-.824 6.404-1.192c4.312-.44 9.155-1.068 9.592-3.467.684-3.761-1.559-9.733-7.48-9.733zm6.496 9.554c-.327 1.795-5.989 2.373-8.71 2.65-1.353.139-2.593.34-3.624.538.141-.351.216-.719.185-1.093-.035-.418-.244-1.196-1.244-1.716-.372-.222-1.708-1.95-1.479-3.878.294-2.469 3.082-3.84 5.369-4.555 1.064-.332 2.076-.5 3.007-.5 1.971 0 3.581.732 4.787 2.177 1.627 1.95 2.031 4.608 1.709 6.377zM4 6.5a1.001 1.001 0 1 1 1 1c-.552 0-1-.449-1-1zM9 6a1 1 0 1 1 1.998-.002A1 1 0 0 1 9 6zm4.3 2.5c-5.542 6.142-9.6.95-9.6.95 3.2 2.864 9.6-.95 9.6-.95z"
  }));
};

module.exports.ThemifyLogo = function ThemifyLogo(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M2.628 6.814a2.04 2.04 0 0 0-.299.017l-.024.004-.012.021c-.408.748-1.22 2.934-1.349 3.256-.28-.02-.653-.019-.653-.374 0-.258.904-2.37 1.029-2.717l.024-.066h-.07c-.084 0-.166.005-.246.011-.075.005-.146.01-.215.01-.182 0-.741.022-.808-.427a.656.656 0 0 1 .139-.488c.017.244.397.233.5.233.227 0 .707-.095 1.011-.134.353-.045.749-.148 1.113-.148.365 0 .63.222.63.526a.693.693 0 0 1-.099.337 3.454 3.454 0 0 0-.671-.061zm3.896 2.774c-.207.049-.467.026-.467-.4.002-.52.573-1.123.858-1.123.051 0 .201.037.168.203-.175.883-.98.746-.919.847.29.482 1.711-.234 1.573-1.248-.046-.346-.255-.579-.654-.579-.74 0-1.587 1.099-1.737 1.908a.888.888 0 0 1-.673.283c-.021-.029-.022-.087.013-.203a4.04 4.04 0 0 1 .369-.79c.154-.257.315-.525.315-.723 0-.239-.141-.36-.417-.36-.361 0-1.025.442-1.025.442.026-.211.697-1.568.697-1.751 0-.214-.097-.361-.363-.361-.069 0-.271.069-.387.111-.111.854-.553 1.559-.728 1.95-.327.729-.689 1.492-.689 1.81 0 .3.289.587.601.6.28-1.058.964-2.206 1.433-2.206 0 0-.541 1.127-.541 1.643 0 .254.054.515.453.515h.006c.361.037.752-.451.915-.682.022.549.501.61.71.61.609 0 1.148-.371 1.557-1.029-.227.188-.785.466-1.068.533zm4.187-.337c.021-.082.08-.245.222-.52.178-.346.421-.818.421-1.104 0-.167-.079-.241-.258-.241-.229 0-.557.209-.857.545l-.084.093v-.127c0-.332-.098-.5-.288-.5-.244 0-.643.276-1.014.704 0 0 .076-.382.076-.505 0-.26-.228-.298-.363-.298-.072 0-.147.009-.225.026-.025.291-.3.929-.543 1.495-.157.367-.319.744-.319.827 0 .266.181.438.459.438l.043-.001c.205-.689.754-1.7 1.143-1.7h.067l-.023.065a3.184 3.184 0 0 1-.227.49c-.143.268-.276.521-.276.791 0 .22.205.339.398.339a.448.448 0 0 0 .124-.015c.141-.639.877-1.713 1.182-1.713h.09l-.05.077c-.09.142-.454.817-.454 1.296 0 .298.146.442.444.442.414 0 .71-.382.826-.797a.615.615 0 0 1-.379.112c-.101.001-.185-.02-.135-.219zm1.823.32c-.221.183-.522.018-.527-.15-.004-.184.158-.511.359-.903.158-.311.363-.523.344-.68-.026-.222-.331-.396-.521-.396a.42.42 0 0 0-.05.003l-.023.001c-.104.268-.238.558-.368.84-.232.503-.452.979-.452 1.228 0 .312.211.65.552.65.356-.018.542-.173.686-.593zm.103-2.47c.092 0 .202-.01.323-.028.157-.191.236-.352.236-.477 0-.129-.202-.2-.784-.205-.184.186-.174.32-.174.469.001.161.132.241.399.241zm3.752.098-.03.001-.004.028c-.063.48-1.049 2.104-1.232 1.643-.041-.104.076-.382.175-.613.113-.264.24-.563.227-.731a.2.2 0 0 0-.035-.098.178.178 0 0 0-.07-.075.42.42 0 0 0-.123-.048 1.267 1.267 0 0 0-.376-.036 5.712 5.712 0 0 0-.425.012l.009-.027c.141-.46.516-.889.622-.954.261-.161.61-.2.688.156.066-.15.085-.193.066-.306-.056-.345-.312-.532-.715-.554-.732-.038-1.255 1.033-1.506 1.646l-.006.014-.012.009c-.071.05-.203.083-.282.104a.443.443 0 0 0-.039.011c-.153.055-.185.204-.188.271-.004.111.129.193.188.294 0 0-.258.641-.445 1.03-.293.607-.759 1.635-.767 1.864-.011.279.396.537.618.566.068-.466 1.383-3.436 1.383-3.436a.795.795 0 0 1 .253-.248.696.696 0 0 1 .277-.062.166.166 0 0 1 .114.098c-.045.16-.104.329-.163.495-.128.362-.296.92-.274 1.181.014.167.029.246.118.338.267.274.936-.196 1.135-.464l.033.014c-.238.678-.604 1.137-.995 1.149-.521.018-.738-.319-.738-.319s-.088.324.263.683c.157.16.39.226.628.208l.048-.004c.96-.104 1.378-1.193 1.715-2.217.047-.144.209-.525.257-.662.027-.074.061-.154.093-.231l.004-.009c.076-.185.126-.31.122-.373-.021-.237-.323-.355-.611-.348z"
  }));
};

module.exports.Thought = function Thought(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M11.5 10.116c3.033 0 5.5-2.269 5.5-5.058S14.533 0 11.5 0C9.588 0 7.807.938 6.816 2.431A4.682 4.682 0 0 0 4.5 1.823C2.019 1.823 0 3.683 0 5.97c0 2.286 2.019 4.146 4.5 4.146.186 0 .375-.013.573-.037A3.632 3.632 0 0 0 7.5 11c1.002 0 1.929-.387 2.592-1.07.488.125.951.186 1.408.186zM9.745 8.785l-.212.268C9.062 9.646 8.302 10 7.5 10c-.724 0-1.414-.29-1.895-.797l-.184-.193-.264.046c-.214.037-.431.06-.657.06-1.93 0-3.5-1.411-3.5-3.145 0-1.735 1.57-3.147 3.5-3.147a3.69 3.69 0 0 1 2.189.713l.472.343.267-.52C8.166 1.927 9.764 1 11.5 1 13.981 1 16 2.82 16 5.059c0 2.237-2.019 4.058-4.5 4.058-.453 0-.921-.075-1.429-.231l-.326-.101zM11.5 10.5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm0 3a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm3.75.5c-.689 0-1.25.561-1.25 1.25s.561 1.25 1.25 1.25 1.25-.561 1.25-1.25S15.939 14 15.25 14zM15 15.25a.25.25 0 0 1 .5 0c0 .275-.5.275-.5 0z"
  }));
};

module.exports.ThumbDown = function ThumbDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14.568 9.501a.5.5 0 0 1-.5.5h-2.291l-3.088 4.99c-.477.8-1.095.921-1.42.921h-.001a1.42 1.42 0 0 1-1.199-.671c-.364-.61-.238-1.446-.087-2.106l.403-2.124H2.536c-.847 0-1.535-.675-1.535-1.505 0-.548.3-1.029.748-1.292a1.225 1.225 0 0 1-.25-.729c0-.526.24-.971.621-1.233a1.517 1.517 0 0 1-.204-.769c0-.575.328-1.062.817-1.305a1.513 1.513 0 0 1-.162-.69C2.571 2.556 3.152 2 4.124 2h5.625c.754 0 1.274.404 1.653.7.219.17.426.332.569.332h2.103a.5.5 0 0 1 0 1h-2.103c-.487 0-.857-.288-1.184-.542-.322-.253-.627-.49-1.038-.49H4.124c-.467 0-.553.165-.553.488 0 .158 0 .527 1.027.527h.105a.5.5 0 0 1 0 1H3.445c-.307 0-.529.197-.529.468 0 .45.449.517.717.517h.75a.5.5 0 0 1 0 1H2.947c-.33 0-.448.25-.448.484 0 .168.366.457.705.513h.966a.5.5 0 0 1 0 1h-.983c-.007 0-.013.004-.02.004h-.631c-.295 0-.535.227-.535.505s.24.505.535.505h4.453a.499.499 0 0 1 .491.593l-.52 2.734c-.062.273-.238 1.046-.033 1.39a.412.412 0 0 0 .34.184c.196 0 .397-.157.566-.44l3.239-5.234a.5.5 0 0 1 .425-.237h2.569a.5.5 0 0 1 .502.5z"
  }));
};

module.exports.ThumbUp = function ThumbUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.368 9.725c.083.203.132.466.132.807 0 .526-.24.971-.621 1.233.138.234.204.501.204.768 0 .562-.313 1.041-.785 1.288.08.188.127.42.129.705.002.449-.129.81-.391 1.073-.276.277-.667.418-1.161.418H7.25c-.754 0-1.273-.404-1.653-.7-.219-.17-.426-.332-.57-.332H2.925a.5.5 0 0 1 0-1h2.102c.487 0 .857.288 1.184.542.323.251.628.489 1.039.489h5.625c.212 0 .373-.043.452-.123.068-.068.102-.19.101-.362-.003-.437-.092-.531-1.027-.531h-.106a.5.5 0 0 1 0-1h1.258c.307 0 .53-.197.53-.468 0-.45-.449-.517-.717-.517h-.75a.5.5 0 0 1 0-1h1.437c.331 0 .448-.25.448-.484 0-.492 0-.492-.439-.505-.051-.001-.104-.005-.156-.007H12.83a.5.5 0 0 1 0-1h.982c.007 0 .013-.004.02-.004h.631c.295 0 .536-.227.536-.505s-.24-.505-.536-.505H10.01a.499.499 0 0 1-.491-.593l.52-2.734c.062-.273.238-1.047.033-1.39a.41.41 0 0 0-.34-.184c-.196 0-.397.157-.566.44L5.925 8.778a.5.5 0 0 1-.425.237H2.931a.5.5 0 0 1 0-1h2.291l3.088-4.99c.476-.8 1.095-.921 1.42-.921h.001c.485 0 .955.264 1.198.671.364.609.238 1.445.087 2.106l-.403 2.124h3.849c.847 0 1.536.675 1.536 1.505.001.498-.248.941-.63 1.215z"
  }));
};

module.exports.Ticket = function Ticket(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9.5 1v.5a1.001 1.001 0 0 1-2 0V1H4v15h3.5v-.5a1.001 1.001 0 0 1 2 0v.5H13V1H9.5zM6.563 2c.223.861 1.007 1.5 1.937 1.5s1.714-.639 1.937-1.5H12v6H5V2h1.563zm3.874 13c-.222-.861-1.006-1.5-1.937-1.5s-1.714.639-1.937 1.5H5V9h7v6h-1.563z"
  }));
};

module.exports.Time = function Time(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.666 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5c0-4.687-3.813-8.5-8.5-8.5zm0 16c-4.136 0-7.5-3.364-7.5-7.5S4.53 1 8.666 1s7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zM14 9v1H8V5h1v4h5z"
  }));
};

module.exports.Timer = function Timer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9 2.025V1h1.5V0h-4v1H8v1.025c-3.902.26-7 3.508-7 7.475C1 13.636 4.364 17 8.5 17S16 13.636 16 9.5c0-3.967-3.098-7.215-7-7.475zM8.5 16C4.916 16 2 13.084 2 9.5S4.916 3 8.5 3 15 5.916 15 9.5 12.084 16 8.5 16zM9 9h4v1H8V6h1v3z"
  }));
};

module.exports.Trash = function Trash(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M10.935 2.016A1.999 1.999 0 0 0 9 .5c-.932 0-1.71.643-1.931 1.516H3.5v1h11v-1h-3.565zM9 1.5c.382 0 .705.221.875.516H8.142A.988.988 0 0 1 9 1.5zM13 4h1v10.516c0 .827-.673 1.5-1.5 1.5h-7c-.827 0-1.5-.673-1.5-1.5V4h1v10.516a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4zM8 5v8H7V5h1zm3 0v8h-1V5h1z"
  }));
};

module.exports.Trello = function Trello(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.5 15.833a.671.671 0 0 1-.667.667H1.167a.672.672 0 0 1-.667-.667V1.167C.5.802.802.5 1.167.5h14.667c.364 0 .667.302.667.667v14.666zM7.833 2.5a.329.329 0 0 0-.333-.333h-5a.329.329 0 0 0-.333.333v10.667a.33.33 0 0 0 .333.333h5a.329.329 0 0 0 .333-.333V2.5zm7 0a.329.329 0 0 0-.333-.333h-5a.329.329 0 0 0-.333.333v6.667c0 .187.145.333.333.333h5a.329.329 0 0 0 .333-.333V2.5z"
  }));
};

module.exports.Truck = function Truck(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 3H6v3H3.127l-1.19 4H0v4.977h2.002L2 15c0 1.103.897 2 2 2s2-.897 2-2l-.002-.023h5.005c-.001.008-.003.015-.003.023 0 1.103.897 2 2 2s2-.897 2-2l-.002-.023H17V3zM3.873 7H6v3H2.98l.893-3zM4 16c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm9 0c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm3-2.023h-1.291C14.359 13.395 13.728 13 13 13s-1.359.395-1.709.977H5.709C5.359 13.395 4.728 13 4 13s-1.359.395-1.709.977H1V11h6V4h9v9.977z"
  }));
};

module.exports.TumblrAlt = function TumblrAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9.104.5v4.042h3.793v2.51H9.104v4.104c0 .927.042 1.521.146 1.792.094.261.281.468.541.625.354.218.761.323 1.219.323.813 0 1.615-.261 2.417-.793v2.521c-.688.323-1.302.552-1.854.678a7.612 7.612 0 0 1-1.803.197c-.729 0-1.374-.094-1.938-.281a4.149 4.149 0 0 1-1.437-.781c-.395-.343-.676-.708-.822-1.093-.156-.386-.229-.947-.229-1.677V7.052H3.573V4.791a4.907 4.907 0 0 0 1.614-.874 4.464 4.464 0 0 0 1.074-1.375C6.531 2 6.719 1.323 6.823.5h2.281z"
  }));
};

module.exports.Tumblr = function Tumblr(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M13.15 12.687c-.72.478-1.42.71-2.141.71-.371 0-.684-.082-.96-.251a.728.728 0 0 1-.333-.377c-.052-.134-.113-.522-.113-1.612V7.552h3.793v-3.51H9.604V0H6.383l-.056.438c-.096.758-.27 1.391-.512 1.878-.245.481-.557.88-.948 1.217a4.423 4.423 0 0 1-1.451.783l-.343.114v3.122h1.771v5.115c0 .812.087 1.423.262 1.854.171.453.495.889.969 1.299a4.606 4.606 0 0 0 1.601.874c.611.202 1.316.306 2.095.306.699 0 1.346-.071 1.914-.21.574-.131 1.214-.364 1.955-.713l.287-.135v-3.771l-.777.516zm-.223 2.617a8.265 8.265 0 0 1-1.472.514c-1.037.253-2.476.256-3.473-.075a3.636 3.636 0 0 1-1.259-.683c-.341-.296-.571-.596-.687-.903-.129-.316-.193-.817-.193-1.489V6.552h-1.77V5.141a5.258 5.258 0 0 0 1.44-.845 4.99 4.99 0 0 0 1.194-1.53c.249-.498.43-1.078.547-1.766h1.35v4.042h3.793v1.51H8.604v4.604c0 1.068.052 1.64.176 1.961.131.363.384.66.75.882.929.571 2.225.502 3.397-.042v1.347z"
  }));
};

module.exports.TwitterAlt = function TwitterAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.253 5.038c.011.151.011.302.011.454 0 4.605-3.506 9.912-9.913 9.912A9.852 9.852 0 0 1 0 13.84c.281.032.551.042.842.042a6.98 6.98 0 0 0 4.325-1.488A3.489 3.489 0 0 1 1.91 9.977c.215.032.431.054.656.054.314 0 .627-.043.918-.118A3.485 3.485 0 0 1 .69 6.494v-.043c.464.258 1.003.42 1.575.442a3.483 3.483 0 0 1-1.078-4.66 9.897 9.897 0 0 0 7.184 3.646 3.865 3.865 0 0 1-.087-.799 3.483 3.483 0 0 1 3.484-3.483c1.003 0 1.909.42 2.546 1.1a6.874 6.874 0 0 0 2.211-.841 3.467 3.467 0 0 1-1.532 1.919A6.958 6.958 0 0 0 17 3.236a7.512 7.512 0 0 1-1.747 1.802z"
  }));
};

module.exports.Twitter = function Twitter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 3.236a6.958 6.958 0 0 1-2.007.539 3.47 3.47 0 0 0 1.532-1.919 6.865 6.865 0 0 1-2.211.841 3.472 3.472 0 0 0-2.545-1.1A3.482 3.482 0 0 0 8.285 5.08c0 .27.033.54.086.799a9.897 9.897 0 0 1-7.184-3.646 3.457 3.457 0 0 0-.475 1.759c0 1.208.615 2.275 1.553 2.901A3.53 3.53 0 0 1 .69 6.451v.043a3.485 3.485 0 0 0 2.794 3.419 3.705 3.705 0 0 1-.917.118c-.226 0-.442-.021-.657-.054a3.491 3.491 0 0 0 3.257 2.417 6.982 6.982 0 0 1-4.326 1.488c-.291 0-.561-.01-.841-.042a9.85 9.85 0 0 0 5.351 1.564c6.407 0 9.913-5.307 9.913-9.912 0-.152 0-.302-.01-.454A7.527 7.527 0 0 0 17 3.236zm-2.737 2.255c0 3.701-2.765 8.912-8.913 8.912-.492 0-.979-.04-1.458-.118a8.047 8.047 0 0 0 1.891-1.104 1.001 1.001 0 0 0-.596-1.787 2.512 2.512 0 0 1-1.467-.509l.012-.003a1 1 0 0 0-.049-1.949 2.464 2.464 0 0 1-1.559-1.046l.104.005h.038A1 1 0 0 0 2.82 6.06a2.481 2.481 0 0 1-1.098-1.841 10.943 10.943 0 0 0 6.649 2.659 1.001 1.001 0 0 0 .979-1.203 2.912 2.912 0 0 1-.066-.595 2.486 2.486 0 0 1 2.484-2.483c.698 0 1.342.278 1.815.784a.997.997 0 0 0 .417.266.994.994 0 0 0 .373.914 1 1 0 0 0-.119.544c.01.129.009.257.009.386z"
  }));
};

module.exports.Underline = function Underline(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15 1v1h-1v6.459c0 3.032-2.467 5.5-5.5 5.5S3 11.491 3 8.459V2H2V1h3v1H4v6.459c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5V2h-1V1h3zM2 16h13v-1H2v1z"
  }));
};

module.exports.Unlink = function Unlink(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m2.134 5.139 1.402-2.587C4.622.904 6.798.457 8.407 1.523l-.551.833a2.505 2.505 0 0 0-3.464.709L2.99 5.652c-.781 1.188-.464 2.742.687 3.501 1.143.752 2.41.547 3.313-.538l.768.641c-.742.892-1.694 1.352-2.678 1.352-.655 0-1.323-.204-1.954-.62a3.504 3.504 0 0 1-.992-4.849zm1.907 2.895-.13.129.705.709.131-.13c.975-.975 2.561-.975 3.535 0s.975 2.561 0 3.535l-3.023 3.024c-.975.975-2.561.975-3.535 0s-.975-2.561 0-3.535l1.058-1.059L2.075 10l-1.058 1.06a3.504 3.504 0 0 0 0 4.949c.683.683 1.578 1.023 2.475 1.023s1.792-.341 2.475-1.023l3.023-3.024a3.504 3.504 0 0 0 0-4.949 3.503 3.503 0 0 0-4.949-.002zM10.963 7h4.074V6h-4.074v1zm-.468 1.347 1.951 1.127.5-.865-1.951-1.127-.5.865zm.255-7.191L9.17 3.893l.865.5 1.58-2.736-.865-.501zm5.117 1.569-.5-.865-4.992 2.882.5.865 4.992-2.882z"
  }));
};

module.exports.Unlock = function Unlock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9.5 10.972a.985.985 0 0 1-.5.846v2.154H8v-2.153a.984.984 0 0 1-.5-.847 1 1 0 1 1 2 0zm5.494-2.512v7.08c0 .827-.673 1.5-1.5 1.5H3.506c-.827 0-1.5-.673-1.5-1.5V8.46c0-.827.673-1.5 1.5-1.5H12.5V4.972c0-2.206-1.794-4-4-4s-4 1.794-4 4h-1c0-2.757 2.243-5 5-5s5 2.243 5 5V6.96a1.503 1.503 0 0 1 1.494 1.5zm-1 0a.5.5 0 0 0-.5-.5H3.506a.5.5 0 0 0-.5.5v7.08a.5.5 0 0 0 .5.5h9.988a.5.5 0 0 0 .5-.5V8.46z"
  }));
};

module.exports.Upload = function Upload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 16v1H0v-1h17zM7.999 1.708V13h1V1.706l3.647 3.647.707-.707L8.5-.207 3.646 4.646l.707.707 3.646-3.645z"
  }));
};

module.exports.Uppercase = function Uppercase(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M7 4h1v2H7V5H5v8h1v1H3v-1h1V5H2v1H1V4h6zm8 0H9v2h1V5h2v8h-1v1h3v-1h-1V5h2v1h1V4h-1z"
  }));
};

module.exports.User = function User(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 16.488c-.063-2.687-2.778-4.999-6.521-5.609V9.505c.492-.473.842-1.207 1.071-1.833.332-.166.624-.536.794-1.033.238-.688.146-1.323-.206-1.629.028-.238.046-.481.015-.723-.079-.663.065-1.038.194-1.368.106-.277.229-.591.106-.945C12.011.701 10.726 0 8.835 0l-.264.005C7.258.052 6.864.605 6.6 1.12a2.502 2.502 0 0 0-.077.151c-1.712.153-1.697 1.569-1.684 2.707l.003.369c0 .205.009.419.026.639-.425.3-.504 1.005-.179 1.737.185.415.452.729.749.892.243.674.625 1.47 1.179 1.965v1.283C2.819 11.452.063 13.77 0 16.488L-.012 17h17.023L17 16.488zM1.054 16c.392-2.094 2.859-3.821 6.122-4.204l.441-.052V9.078l-.216-.15c-.393-.272-.791-.947-1.09-1.851l-.083-.281-.294-.051c-.053-.019-.208-.153-.33-.428a1.274 1.274 0 0 1-.112-.415l.51.143-.096-.749a7.591 7.591 0 0 1-.064-.95l-.003-.38c-.015-1.341.051-1.634.773-1.699.545-.048.752-.449.876-.689.15-.292.28-.543 1.12-.574L8.835 1c.829 0 2.279.169 2.669 1.282 0 .043-.052.177-.09.275-.145.374-.364.939-.254 1.853.024.188-.007.424-.04.675l-.089.805.441-.048c.008.104-.004.269-.075.472-.097.289-.242.438-.237.454h-.36l-.114.342c-.283.853-.65 1.497-1.009 1.768l-.198.15v2.726l.438.055c3.211.401 5.641 2.123 6.03 4.192H1.054z"
  }));
};

module.exports.Vector = function Vector(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M14.94 6a6.46 6.46 0 0 0-3.44-1 6.49 6.49 0 0 0-2.239.404l2.569-2.569c.203.102.428.165.67.165.827 0 1.5-.673 1.5-1.5S13.327 0 12.5 0 11 .673 11 1.5c0 .22.05.428.136.616l-3.91 3.909A1.46 1.46 0 0 0 6.976 6c-.827 0-1.5.673-1.5 1.5 0 .085.011.168.025.25l-3.386 3.386A1.472 1.472 0 0 0 1.5 11c-.827 0-1.5.673-1.5 1.5S.673 14 1.5 14 3 13.327 3 12.5c0-.242-.063-.467-.165-.669l2.57-2.57A6.516 6.516 0 0 0 5 11.5c0 1.469.612 2.735 1 3.391V17h3v-3H6.664C6.246 13.174 6 12.287 6 11.5c0-.887.22-1.764.628-2.545.113.027.228.045.348.045.827 0 1.5-.673 1.5-1.5 0-.18-.037-.35-.095-.51 1.644-1.131 3.847-1.268 5.619-.373V9h3V6h-2.06zM12.5 1a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zm-11 12a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM7 15h1v1H7v-1zm-.024-7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM16 8h-1V7h1v1z"
  }));
};

module.exports.VideoCamera = function VideoCamera(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M12.991 6.75V4.5c0-.827-.678-1.5-1.512-1.5H4v-.5a.5.5 0 0 1 .5-.5h5.541V1H4.5C3.673 1 3 1.673 3 2.5V3H1.512C.678 3 0 3.673 0 4.5v2.001c0 .827.678 1.5 1.512 1.5h.504V13.5c0 .827.673 1.5 1.5 1.5h7.964c.834 0 1.512-.673 1.512-1.5v-2.251L17 14.032V3.967L12.991 6.75zM16 12.121l-4.009-2.783V13.5c0 .276-.229.5-.512.5H3.516a.5.5 0 0 1-.5-.5V7.001H1.512a.506.506 0 0 1-.512-.5V4.5c0-.276.229-.5.512-.5h9.968c.282 0 .512.224.512.5v4.163L16 5.879v6.242z"
  }));
};

module.exports.VideoClapper = function VideoClapper(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 1v15h17V1H0zm16 3h-.268l-2.356-2H16v2zM8.743 7 11.1 5h2.919l-2.357 2H8.743zm-1.94-3L4.446 2h2.918l2.357 2H6.803zm2.751 1L7.197 7H4.278l2.356-2h2.92zm1.714-1L8.911 2h2.918l2.357 2h-2.918zM1 2h1.9l2.357 2H1V2zm0 3h4.089L2.732 7H1V5zm15 10H1V8h15v7zm0-8h-2.792l2.356-2H16v2z"
  }));
};

module.exports.ViewGrid = function ViewGrid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 7h7V0H0v7zm1-6h5v5H1V1zm9-1v7h7V0h-7zm6 6h-5V1h5v5zM0 17h7v-7H0v7zm1-6h5v5H1v-5zm9 6h7v-7h-7v7zm1-6h5v5h-5v-5z"
  }));
};

module.exports.ViewListAlt = function ViewListAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M5 0v4h12V0H5zm11 3H6V1h10v2zM5 10h12V6H5v4zm1-3h10v2H6V7zm-1 9h12v-4H5v4zm1-3h10v2H6v-2zM0 4h4V0H0v4zm1-3h2v2H1V1zm-1 9h4V6H0v4zm1-3h2v2H1V7zm-1 9h4v-4H0v4zm1-3h2v2H1v-2z"
  }));
};

module.exports.ViewList = function ViewList(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 0v4h17V0H0zm16 3H1V1h15v2zM0 10h17V6H0v4zm1-3h15v2H1V7zm-1 9h17v-4H0v4zm1-3h15v2H1v-2z"
  }));
};

module.exports.VimeoAlt = function VimeoAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.132 2.301c-.58-.736-1.796-.764-2.645-.637-.68.113-2.998 1.131-3.777 3.579 1.387-.113 2.12.101 1.98 1.627-.058.65-.383 1.344-.736 2.024-.426.776-1.201 2.305-2.235 1.201-.919-.99-.863-2.885-1.06-4.144-.129-.708-.255-1.585-.482-2.32-.199-.623-.666-1.371-1.216-1.542-.608-.171-1.359.099-1.797.353C2.775 3.264 1.858 4.424.5 5.385v.1c.452.227.312.594.665.651.835.112 1.625-.78 2.179.154.339.565.438 1.188.649 1.798.296.819.511 1.711.75 2.645.396 1.6.878 3.975 2.263 4.557.695.297 1.756-.1 2.279-.426 1.441-.85 2.59-2.08 3.536-3.352 2.221-2.973 3.424-6.367 3.608-7.343.127-.666.113-1.345-.297-1.868z"
  }));
};

module.exports.Vimeo = function Vimeo(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M15.664 2.69c-.416-.528-1.13-.808-2.063-.808-.264 0-.521.023-.758.059-.869.146-3.019 1.232-3.746 3.518a.499.499 0 0 0 .518.65c.562-.045.982-.012 1.112.133.104.113.142.386.106.768-.046.51-.333 1.099-.634 1.675-.145.264-.588 1.075-.862 1.075-.065 0-.169-.069-.276-.184-.514-.555-.62-1.613-.711-2.548-.032-.308-.061-.602-.104-.88l-.069-.391c-.095-.55-.203-1.173-.374-1.729-.206-.644-.699-1.474-1.421-1.698a1.858 1.858 0 0 0-.503-.066c-.688 0-1.306.329-1.481.431-.733.435-1.326.968-1.9 1.484-.433.388-.88.791-1.386 1.148-.132.094-.211.335-.211.497 0 .189.106.362.276.447.056.029.064.042.109.13.072.14.221.429.64.496.371.055.719-.054 1.008-.145.157-.05.306-.096.403-.096.035 0 .076 0 .159.139.173.289.268.619.368.969.052.178.103.356.166.54.222.611.392 1.278.571 1.984l.157.627c.358 1.475.849 3.493 2.219 4.068.207.088.443.133.703.133.669 0 1.377-.294 1.77-.54 1.166-.687 2.241-1.702 3.284-3.104 1.911-2.558 3.088-5.64 3.293-6.722.163-.866.045-1.54-.363-2.06zm-.619 1.874c-.146.768-1.153 3.688-3.112 6.309-.963 1.295-1.94 2.224-3.001 2.849-.394.246-1.187.501-1.564.341-.907-.381-1.329-2.116-1.637-3.384l-.161-.639c-.185-.729-.361-1.419-.596-2.07-.056-.16-.102-.322-.149-.482-.113-.395-.231-.804-.471-1.204-.246-.416-.588-.627-1.017-.627-.251 0-.48.072-.702.142-.159.05-.31.097-.479.107-.013-.023-.027-.05-.044-.078a20.8 20.8 0 0 0 1.054-.906c.562-.506 1.093-.983 1.738-1.365.232-.135.626-.293.975-.293.086 0 .164.01.22.025.256.079.593.547.75 1.038.151.49.253 1.08.342 1.601l.069.387c.039.247.065.523.095.812.107 1.092.23 2.328.975 3.131.312.333.651.502 1.008.502.868 0 1.393-.962 1.784-1.68.311-.597.646-1.291.708-1.98.064-.704-.051-1.19-.363-1.533-.314-.345-.761-.444-1.138-.471.808-1.539 2.363-2.115 2.671-2.167.184-.027.39-.046.602-.046.353 0 .986.056 1.277.426.218.279.272.689.166 1.255z"
  }));
};

module.exports.Volume = function Volume(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M3.587 5.933c-.956 0-1.55.5-1.55 1.306V9.4a1.547 1.547 0 0 0 1.55 1.553H5.33l5.686 5.688V.212l-5.63 5.721H3.587zm6.429-3.279v11.572L5.744 9.953H3.586a.551.551 0 0 1-.549-.553V7.239c0-.091 0-.306.55-.306h2.217l4.212-4.279zm1.989 8.333v-1a1.009 1.009 0 0 0 0-2.016v-1c1.107 0 2.008.901 2.008 2.008s-.901 2.008-2.008 2.008zm4.024-2c0 2.206-1.794 4-4 4v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3v-1c2.205 0 4 1.795 4 4z"
  }));
};

module.exports.Wallet = function Wallet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M1.564 2C.71 2 .014 2.69.014 3.538H0v10.939c0 .848.695 1.538 1.55 1.538h13.492V14.36H17V2H1.564zM1.55 15.014a.545.545 0 0 1-.55-.538V4.893c.024.007.054.005.078.012.143.042.293.068.453.071.007 0 .012.003.019.003h12.493v3.035h-2.859c-.862 0-1.563.673-1.563 1.5v1c0 .827.701 1.5 1.563 1.5h2.859v3H1.55zm9.633-4c-.311 0-.563-.224-.563-.5v-1c0-.276.253-.5.563-.5H16v2h-4.817zM16 13.359h-.958v-1.345H16v1.345zm-.958-5.345V3.979H1.564c-.273 0-.55-.137-.55-.441A.546.546 0 0 1 1.564 3H16v5.014h-.958z"
  }));
};

module.exports.Wand = function Wand(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M17 5h-3.293l2.328 2.328-.707.707L13 5.707V9h-1V5.714L1.354 16.379l-.707-.707L11.3 5H8V4h3.293L8.965 1.672l.707-.707L12 3.293V0h1v3.297l2.287-2.291.707.707L13.711 4H17v1z"
  }));
};

module.exports.Wheelchair = function Wheelchair(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m10.901 12.85.977.213A4.963 4.963 0 0 1 7 17c-2.757 0-5-2.243-5-5a5.002 5.002 0 0 1 3.725-4.836l.254.967A4.002 4.002 0 0 0 3 12c0 2.206 1.794 4 4 4a3.969 3.969 0 0 0 3.901-3.15zM16 15.121v1h-1.868l-.955-4.118H7.019l-.544-8.082A1.998 1.998 0 0 1 5 2c0-1.103.897-2 2-2s2 .897 2 2c0 .938-.65 1.72-1.521 1.936l.27 4.011 3.632-.901.24.971-3.805.943.138 2.042h6.018l.955 4.118H16zM7 3a1.001 1.001 0 1 0-1-1c0 .551.448 1 1 1z"
  }));
};

module.exports.WidgetAlt = function WidgetAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M2 0h1v1H2V0zm3 0H4v1h1V0zm2 0H6v1h1V0zm2 0H8v1h1V0zm2 0h-1v1h1V0zm2 0h-1v1h1V0zm1 1h1V0h-1v1zM2 17h1v-1H2v1zm2 0h1v-1H4v1zm2 0h1v-1H6v1zm2 0h1v-1H8v1zm2 0h1v-1h-1v1zm2 0h1v-1h-1v1zm2 0h1v-1h-1v1zm2-17v1h1V0h-1zm0 3h1V2h-1v1zm0 2h1V4h-1v1zm0 2h1V6h-1v1zm0 2h1V8h-1v1zm0 2h1v-1h-1v1zm0 2h1v-1h-1v1zm0 2h1v-1h-1v1zm0 2h1v-1h-1v1zM0 1h1V0H0v1zm0 2h1V2H0v1zm0 2h1V4H0v1zm0 2h1V6H0v1zm0 2h1V8H0v1zm0 2h1v-1H0v1zm0 2h1v-1H0v1zm0 2h1v-1H0v1zm0 2h1v-1H0v1zm8.498-6.957L4.354 5.896l-.708.708 4.852 4.854 4.855-4.854-.707-.707-4.148 4.146z"
  }));
};

module.exports.Widget = function Widget(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M2 0h1v1H2V0zm3 0H4v1h1V0zm2 0H6v1h1V0zm2 0H8v1h1V0zm2 0h-1v1h1V0zm2 0h-1v1h1V0zm1 1h1V0h-1v1zM2 17h1v-1H2v1zm2 0h1v-1H4v1zm2 0h1v-1H6v1zm2 0h1v-1H8v1zm2 0h1v-1h-1v1zm2 0h1v-1h-1v1zm2 0h1v-1h-1v1zm2-17v1h1V0h-1zm0 3h1V2h-1v1zm0 2h1V4h-1v1zm0 2h1V6h-1v1zm0 2h1V8h-1v1zm0 2h1v-1h-1v1zm0 2h1v-1h-1v1zm0 2h1v-1h-1v1zm0 2h1v-1h-1v1zM0 1h1V0H0v1zm0 2h1V2H0v1zm0 2h1V4H0v1zm0 2h1V6H0v1zm0 2h1V8H0v1zm0 2h1v-1H0v1zm0 2h1v-1H0v1zm0 2h1v-1H0v1zm0 2h1v-1H0v1zm13.465-9.071c.021.187.035.377.035.571s-.014.384-.035.571l-.037.328-1.439.432a3.569 3.569 0 0 1-.08.193l.711 1.322-.205.258a5.099 5.099 0 0 1-.811.811l-.258.206-1.322-.712a4.114 4.114 0 0 1-.193.08L9.4 13.427l-.327.038c-.188.022-.379.035-.573.035s-.385-.013-.573-.035l-.327-.038-.432-1.438a3.569 3.569 0 0 1-.193-.08l-1.323.711-.258-.205a5.052 5.052 0 0 1-.81-.811l-.204-.257.711-1.322a3.97 3.97 0 0 1-.08-.194l-1.439-.432-.037-.328C3.514 8.884 3.5 8.694 3.5 8.5s.014-.384.035-.571l.037-.328 1.439-.432c.025-.065.051-.129.08-.193L4.38 5.654l.204-.258c.237-.298.51-.571.811-.811l.258-.206 1.322.712c.063-.029.128-.055.193-.08L7.6 3.573l.327-.038c.376-.044.77-.044 1.146 0l.327.038.432 1.438c.065.024.129.051.193.08l1.322-.712.258.206c.299.238.572.511.81.81l.205.258-.711 1.323c.028.063.055.128.08.192l1.439.433.037.328zM12.5 8.5l-.003-.135-1.303-.391-.076-.26a2.735 2.735 0 0 0-.211-.512l-.127-.237.642-1.193a3.903 3.903 0 0 0-.193-.193l-1.192.642-.239-.128a2.72 2.72 0 0 0-.513-.212l-.26-.077-.39-1.301a3.039 3.039 0 0 0-.27 0l-.39 1.302-.26.077a2.73 2.73 0 0 0-.512.211l-.237.129-1.194-.643a4.39 4.39 0 0 0-.193.193l.642 1.193-.128.237c-.088.164-.16.336-.212.514l-.077.259-1.301.39a3.04 3.04 0 0 0 0 .269l1.302.391.077.26c.052.177.124.35.212.514l.127.237-.642 1.193c.062.066.126.131.193.193l1.193-.642.237.127c.164.088.337.16.513.212l.26.077.391 1.302c.089.004.181.004.27 0l.391-1.301.259-.077c.177-.052.35-.124.514-.212l.237-.127 1.192.642c.067-.062.131-.127.193-.193l-.642-1.193.127-.237c.088-.164.16-.336.212-.514l.077-.259 1.301-.391A3.12 3.12 0 0 0 12.5 8.5z"
  }));
};

module.exports.Widgetized = function Widgetized(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M2 0h1v1H2V0zm2 1h1V0H4v1zm2 0h1V0H6v1zm2 0h1V0H8v1zm2 0h1V0h-1v1zm2 0h1V0h-1v1zm2 0h1V0h-1v1zM2 9h1V8H2v1zm2 0h1V8H4v1zm2 0h1V8H6v1zm4 0h1V8h-1v1zm2 0h1V8h-1v1zm2 0h1V8h-1v1zM2 17h1v-1H2v1zm2 0h1v-1H4v1zm2 0h1v-1H6v1zm2 0h1v-1H8v1zm2 0h1v-1h-1v1zm2 0h1v-1h-1v1zm2 0h1v-1h-1v1zm2-17v1h1V0h-1zm0 3h1V2h-1v1zm0 2h1V4h-1v1zm0 2h1V6h-1v1zm0 2h1V8h-1v1zm0 2h1v-1h-1v1zm0 2h1v-1h-1v1zm0 2h1v-1h-1v1zM8 3h1V2H8v1zm0 2h1V4H8v1zm0 2h1V6H8v1zm0 2h1V8H8v1zm0 2h1v-1H8v1zm0 2h1v-1H8v1zm0 2h1v-1H8v1zm8 2h1v-1h-1v1zM0 1h1V0H0v1zm0 2h1V2H0v1zm0 2h1V4H0v1zm0 2h1V6H0v1zm0 2h1V8H0v1zm0 2h1v-1H0v1zm0 2h1v-1H0v1zm0 2h1v-1H0v1zm0 2h1v-1H0v1z"
  }));
};

module.exports.Window = function Window(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M0 1v15h17V1H0zm16 1v3H1V2h15zM1 15V6h15v9H1zM7 4H6V3h1v1zM5 4H4V3h1v1zM3 4H2V3h1v1z"
  }));
};

module.exports.Wordpress = function Wordpress(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M16.5 8.5c0 4.41-3.589 8-8 8s-8-3.59-8-8 3.589-8 8-8 8 3.59 8 8zm-.366 0c0-4.205-3.428-7.634-7.634-7.634S.866 4.295.866 8.5s3.428 7.634 7.634 7.634 7.634-3.429 7.634-7.634zM2.232 5.705l3.277 8.974A6.872 6.872 0 0 1 1.634 8.5c0-.99.215-1.938.598-2.795zm10.375 4.67-.679 2.286-2.482-7.374s.411-.027.786-.072c.366-.045.322-.59-.044-.562-1.116.08-1.831.089-1.831.089s-.669-.01-1.803-.09c-.375-.027-.42.535-.045.562l.714.073 1.071 2.928-1.5 4.5-2.5-7.428s.411-.027.786-.072c.366-.045.322-.59-.044-.562-1.108.08-1.831.089-1.831.089-.125 0-.276-.009-.437-.009A6.836 6.836 0 0 1 8.5 1.634c1.786 0 3.411.688 4.634 1.804h-.089c-.67 0-1.152.581-1.152 1.215 0 .562.33 1.036.678 1.606.269.456.562 1.045.562 1.894.001.587-.239 1.267-.526 2.222zm-1.876 4.501c.009.035.027.07.045.098a6.85 6.85 0 0 1-2.277.393c-.669 0-1.321-.1-1.938-.286L8.615 9.1l2.116 5.776zM15.366 8.5a6.845 6.845 0 0 1-3.42 5.929l2.098-6.054c.348-1.001.527-1.767.527-2.465 0-.249-.018-.482-.054-.705.537.982.849 2.099.849 3.295z"
  }));
};

module.exports.World = function World(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5S13.202 0 8.516 0zM1.041 9h2.937c.044 1.024.211 2.031.513 3H1.888a7.426 7.426 0 0 1-.847-3zm2.937-1H1.041a7.426 7.426 0 0 1 .847-3h2.6a11.76 11.76 0 0 0-.51 3zm1.569-3h5.896c.33.965.522 1.972.569 3H4.978c.046-1.028.239-2.035.569-3zm-.569 4h7.035a10.82 10.82 0 0 1-.572 3H5.55a10.783 10.783 0 0 1-.572-3zm8.035 0h2.978a7.426 7.426 0 0 1-.847 3H12.5c.302-.969.469-1.976.513-3zm0-1a11.76 11.76 0 0 0-.51-3h2.641c.48.906.775 1.923.847 3h-2.978zm1.489-4h-2.354a12.19 12.19 0 0 0-1.55-2.7A7.52 7.52 0 0 1 14.502 4zM9.074 1.028c.824.897 1.484 1.9 1.972 2.972H5.944a11.3 11.3 0 0 1 1.97-2.97c.199-.015.398-.03.602-.03.188 0 .373.015.558.028zm-2.691.285A12.163 12.163 0 0 0 4.843 4H2.529a7.518 7.518 0 0 1 3.854-2.687zM2.529 13h2.317c.391.951.915 1.851 1.547 2.689A7.51 7.51 0 0 1 2.529 13zm5.397 2.97A11.355 11.355 0 0 1 5.948 13h5.094a11.328 11.328 0 0 1-1.979 2.972c-.181.013-.363.028-.547.028-.2 0-.395-.015-.59-.03zm2.661-.267A12.176 12.176 0 0 0 12.144 13h2.358a7.518 7.518 0 0 1-3.915 2.703z"
  }));
};

module.exports.Write = function Write(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M11.667 0H3.016v1.984H2.5c-.827 0-1.5.673-1.5 1.5v8.588l2.521 4.956 2.464-4.959V3.484c0-.827-.673-1.5-1.5-1.5h-.469V1H11v5h5v10H4.5v1H17V5.308L11.667 0zM3.908 14.002h-.804L2 11.832V5.984h1v6.027h1V5.984h.984v5.851l-1.076 2.167zM4.984 3.484v1.5H2v-1.5c0-.275.225-.5.5-.5h1.984a.5.5 0 0 1 .5.5zM12 1.742 15.273 5H12V1.742z"
  }));
};

module.exports.Yahoo = function Yahoo(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9.5 16.5a5.772 5.772 0 0 0-1.01-.105c-.336 0-.673.048-1.009.105l.125-6.799C5.817 6.615 4.134 3.472 2.164.5c.336.087.682.144 1.038.144S3.923.576 4.269.5C5.615 2.886 7.077 5.202 8.49 7.548 9.913 5.221 11.423 2.904 12.712.5c.336.087.683.135 1.028.135.366 0 .741-.048 1.096-.135-.77 1.058-1.404 2.211-2.067 3.336a718.12 718.12 0 0 0-3.395 5.865L9.5 16.5z"
  }));
};

module.exports.Youtube = function Youtube(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M8.301 6.422c.437 0 .769-.161 1.006-.484.181-.237.265-.617.265-1.12v-1.66c0-.503-.084-.873-.265-1.11-.238-.321-.57-.483-1.006-.483-.428 0-.76.161-.995.483-.181.238-.266.608-.266 1.111v1.66c0 .503.085.873.266 1.12.235.322.567.483.995.483zm-.408-3.434c0-.436.133-.654.408-.654.285 0 .408.218.408.654V4.98c0 .437-.123.664-.408.664-.275 0-.408-.228-.408-.664V2.988zm2.457 3.083c-.048-.143-.075-.37-.075-.711V1.622h.863v3.481c0 .2 0 .313.01.333.019.133.085.208.199.208.17 0 .35-.133.54-.408V1.622h.863v4.734h-.863v-.522c-.341.398-.663.588-.978.588-.275 0-.474-.113-.559-.351zm3.283 5.74v.436h-.854v-.436c0-.427.143-.646.427-.646.284.001.427.219.427.646zM4.354 1.774A177.86 177.86 0 0 1 3.737 0h1.007l.673 2.495L6.062 0h.968L5.882 3.785v2.571h-.948V3.785c-.086-.465-.276-1.129-.58-2.011zm10.929 7.011A1.784 1.784 0 0 0 13.765 7.4c-1.746-.19-3.511-.19-5.266-.19s-3.52 0-5.256.19c-.738.085-1.346.635-1.526 1.385-.237 1.062-.247 2.22-.247 3.32 0 1.091 0 2.257.247 3.32.171.75.788 1.3 1.518 1.376C4.98 17 6.745 17 8.5 17s3.52 0 5.266-.199c.729-.076 1.337-.626 1.518-1.376.237-1.062.247-2.229.247-3.32-.001-1.1-.001-2.258-.248-3.32zm-9.8.958H4.469v5.398H3.52V9.743h-.997v-.892h2.96v.892zm2.562 5.398H7.2v-.512c-.342.389-.664.579-.968.579-.274 0-.474-.114-.55-.351-.048-.142-.076-.361-.076-.692v-3.709h.845v3.453c0 .2 0 .304.009.333.02.132.086.199.199.199.172 0 .352-.132.541-.398v-3.586h.845v4.684zm3.226-1.404c0 .437-.02.749-.086.948-.104.342-.342.522-.674.522-.303 0-.598-.171-.883-.522v.456h-.843v-6.29h.843v2.059c.275-.342.57-.512.883-.512.332 0 .57.18.674.531.066.19.086.502.086.939v1.869zm3.206-.778h-1.698v.825c0 .437.143.654.437.654.209 0 .332-.113.38-.341.009-.047.019-.237.019-.579h.863v.124c0 .275 0 .465-.019.55-.02.189-.096.36-.199.512-.229.332-.579.503-1.024.503-.446 0-.779-.161-1.025-.484-.18-.228-.275-.598-.275-1.101v-1.641c0-.503.086-.863.266-1.101.247-.323.579-.484 1.016-.484.428 0 .759.161 1.005.484.172.237.257.597.257 1.101v.978zm-4.051-1.158v2.002c0 .427-.124.635-.37.635-.143 0-.285-.066-.428-.208v-2.855c.143-.143.285-.209.428-.209.246 0 .37.218.37.635z"
  }));
};

module.exports.Zip = function Zip(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "M9.667 0H2v17h13V5.308L9.667 0zM10 1.742 13.273 5H10V1.742zM3 16V1h3v1h1V1h2v5h5v10H3zm2-8h1v1H5V8zm1 0V7h1v1H6zm0-2V5h1v1H6zM5 6h1v1H5V6zm0-2h1v1H5V4zm1 0V3h1v1H6zM5 2h1v1H5V2zm1 7.389c-1.103 0-2 .897-2 2s.897 2 2 2c.062 0 .121-.007.219-.02a1.997 1.997 0 0 0 1.531-1.026c.166-.303.25-.624.25-.954 0-1.103-.897-2-2-2zm.873 2.475a.994.994 0 0 1-.762.512l-.112.014a1 1 0 0 1 .001-2c.551 0 1 .449 1 1a.992.992 0 0 1-.127.474z"
  }));
};

module.exports.ZoomIn = function ZoomIn(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m16.604 15.896-5.173-5.173A6.466 6.466 0 0 0 13 6.5C13 2.916 10.084 0 6.5 0a6.457 6.457 0 0 0-4.597 1.904A6.454 6.454 0 0 0 0 6.5C0 10.084 2.916 13 6.5 13a6.473 6.473 0 0 0 4.224-1.569l5.173 5.173.707-.708zM6.5 12A5.506 5.506 0 0 1 1 6.5c0-1.47.571-2.851 1.61-3.89A5.467 5.467 0 0 1 6.5 1C9.533 1 12 3.467 12 6.5S9.533 12 6.5 12zM7 6h2v1H7v2H6V7H4V6h2V4h1v2z"
  }));
};

module.exports.ZoomOut = function ZoomOut(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React.createElement("path", {
    fill: "#000000",
    d: "m16.604 15.868-5.173-5.173A6.468 6.468 0 0 0 13 6.472c0-3.584-2.916-6.5-6.5-6.5a6.466 6.466 0 0 0-4.598 1.903A6.457 6.457 0 0 0 0 6.472c0 3.584 2.916 6.5 6.5 6.5a6.47 6.47 0 0 0 4.224-1.569l5.173 5.173.707-.708zM6.5 11.972a5.506 5.506 0 0 1-5.5-5.5 5.455 5.455 0 0 1 1.61-3.889A5.462 5.462 0 0 1 6.5.972c3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5zm-2.5-6h5v1H4v-1z"
  }));
};