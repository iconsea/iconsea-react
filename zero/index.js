function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require("react");

module.exports.Z3List = function Z3List(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14 3.951C14 3.398 13.553 3 13 3H3.048c-.552 0-1 .398-1 .951a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1zm0 4.017c0-.553-.447-.95-1-.95H3.048c-.552 0-1 .397-1 .95a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1zm0 4.031c0-.553-.447-.949-1-.949H3.048c-.552 0-1 .396-1 .949V12a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1.001z"
  }));
};

module.exports.AddFolder = function AddFolder(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M13.136 4.014H9.558C8.267 4.014 8.269 2 7.356 2H2.863A1.864 1.864 0 0 0 1 3.864v8.243c0 1.029.835 1.863 1.863 1.863h10.272a1.864 1.864 0 0 0 1.864-1.863v-6.23a1.862 1.862 0 0 0-1.863-1.863zM10.5 8.971H8v2.5a.5.5 0 0 1-1 0v-2.5H4.5a.5.5 0 0 1 0-1H7v-2.5a.5.5 0 0 1 1 0v2.5h2.5a.5.5 0 0 1 0 1z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Agent = function Agent(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 200 200"
  }), React.createElement("defs", null, React.createElement("style", null, "")), React.createElement("path", {
    fill: "#272636",
    d: "M431.267 681.97c-8.782 22.512-30.568 38.62-56.331 38.62-33.671 0-60.939-27.17-60.939-60.697 0-33.43 27.268-60.6 60.939-60.6 25.763 0 47.55 16.011 56.33 38.621l-44.2 21.979 44.2 22.076zm283.93.194c-8.78 22.608-30.615 38.67-56.33 38.67-33.72 0-60.94-27.17-60.94-60.65 0-33.477 27.269-60.648 60.94-60.648 25.716 0 47.55 16.012 56.33 38.621l-44.249 22.027 44.25 21.98zm249.531-5.435c-6.987 25.812-23.92 46.287-45.607 58.563-16.546 13.243-37.603 21.153-60.454 21.153-1.164 0-2.328-.097-3.445-.34-36.39 159.432-169.281 267.87-342.396 267.87-173.501 0-306.346-108.147-342.93-267.531a95.984 95.984 0 0 1-50.022-14.314c-28.723-10.286-52.108-33.914-60.6-65.403-11.4-42.357 4.222-72.584 24.162-92.573a654.246 654.246 0 0 1-.241-35.37c-2.621-131.096 36.678-241.718 113.679-319.978 36.679-37.31 81.317-65.937 132.455-85.44C337.286 72.333 414.72 16.44 508.8 16.44c94.078 0 171.513 55.894 179.47 126.924 51.138 19.505 95.776 48.131 132.504 85.44 76.903 78.261 116.202 189.078 113.63 320.61.195 9.705.147 19.408-.096 28.918 22.707 19.748 42.987 51.673 30.421 98.397zM508.8 48.802c-70.061 0-128.914 35.418-143.906 82.773 43.714-12.423 91.506-18.777 142.644-18.777h2.474c51.188 0 98.978 6.356 142.694 18.777C637.712 84.22 578.86 48.802 508.8 48.802zM882.83 549.37c2.426-118.192-31.78-216.393-98.93-284.61-64.722-65.84-159.432-100.63-273.887-100.63l-1.31.05-1.165-.05c-114.408 0-209.115 34.79-273.84 100.63-67.15 68.217-101.354 166.418-98.928 283.98-.048 1.357-.048 2.62-.048 3.928 24.355-6.405 42.454 12.034 45.073 13.876 91.215-30.179 131.049-126.486 131.436-127.506 3.35-8.298 12.76-12.324 21.107-9.025 8.344 3.348 12.42 12.712 9.072 21.008-1.843 4.659-44.492 108.634-147.156 144.78-1.31 21.154-2.523 43.182-2.281 51.042l.34 18.29c0 192.377 131.533 326.482 319.883 326.482.242 0 .97 0 1.212.05 146.818-.05 259.235-82.047 301.3-209.65-5.289 6.162-10.674 12.13-16.35 17.854-35.273 36.05-77.436 64.093-125.276 83.307-33.478 13.488-69.187 22.416-106.644 26.686-4.174 16.497-25.619 29.111-51.673 29.111-29.062 0-52.593-15.623-52.593-34.933 0-19.261 23.53-34.933 52.593-34.933 20.475 0 38.136 7.86 46.772 19.214 116.153-12.664 209.94-71.614 266.417-161.519 3.104-19.699 4.706-40.173 4.706-61.375l.096-2.863c-.534-.534-1.066-1.066-1.503-1.65-43.958-56.815-108.488-70.449-176.803-84.86-34.01-7.18-69.236-14.603-103.587-27.606-124.593-47.063-190.675-155.6-193.441-160.21-4.56-7.666-2.088-17.612 5.627-22.173 7.714-4.608 17.66-2.086 22.27 5.58.631 1.02 63.366 103.588 177.044 146.527 32.024 12.129 65.985 19.262 98.833 26.2 62.784 13.246 127.459 26.88 176.995 75.592.535-.533 1.069-1.066 1.65-1.551.922-15.623 1.893-28.093 2.718-32.8.096-.63.242-1.26.388-1.892-.34-1.211 5.58-31.585 39.93-31.585.001-.923-.048-1.844-.048-2.766z",
    "class": "transform-group",
    transform: "scale(.19531)"
  }));
};

module.exports.Align2Bottom = function Align2Bottom(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M9 3h3v9H9V3M8 3v9a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1zM3 6v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm-2 8.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"
  }));
};

module.exports.Align2Center = function Align2Center(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M12 9H7V7h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7V1.5a.5.5 0 0 0-1 0V3H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3v2H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5v1.5a.5.5 0 0 0 1 0V14h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 13v-3h5v3H1zm11 0H7v-3h5v3z"
  }));
};

module.exports.Align2Left = function Align2Left(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M13 10v3H4v-3h9m0-1H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-3-6H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM1.5 1a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0v-14a.5.5 0 0 0-.5-.5z"
  }));
};

module.exports.Align2Middle = function Align2Middle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M14.5 8H13V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3H8V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5H1.5a.5.5 0 0 0 0 1H3v5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9h1v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9h1.5a.5.5 0 0 0 0-1zM4 3h3v5H4V3zm3 11H4V9h3v5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Align2Right = function Align2Right(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M3 10v3h9v-3H3m0-1h9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm3-6h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm8.5-2a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-1 0v-14a.5.5 0 0 1 .5-.5z"
  }));
};

module.exports.Align2Top = function Align2Top(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M9 14h3V5H9v9m-1 0V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm-5-3V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM1 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
  }));
};

module.exports.AlignCenter = function AlignCenter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M13 7v3H2V7h11m0-1H2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M7.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.AlignLeft = function AlignLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M14 7v3H5V7h9m0-1H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"
  }));
};

module.exports.AlignRight = function AlignRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M2 7v3h9V7H2m0-1h9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm12.5-5a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
  }));
};

module.exports.Analysis = function Analysis(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8.5 4h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1zm-4 5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm2.031 4.5a.5.5 0 0 1-.5.5H1.438A.44.44 0 0 1 1 13.562V.438C1 .197 1.197 0 1.487 0h9.537L14 3v1.532a.5.5 0 1 1-1-.001V4h-2.976V1H2v12H6.031a.5.5 0 0 1 .5.5zM11 3h2l-2-2v2zM4.5 7h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm1.25-1.5a.5.5 0 0 0-.5-.5H3.5a.5.5 0 0 0 0 1h1.75a.5.5 0 0 0 .5-.5zm9.629 9.354a.594.594 0 0 1-.838-.058l-2.174-2.493a4.096 4.096 0 1 1 1.823-3.405c0 .99-.366 1.887-.952 2.595l2.2 2.522a.595.595 0 0 1-.059.839zm-5.284-2.978c1.642 0 2.978-1.336 2.978-2.978S11.737 5.92 10.095 5.92c-1.643 0-2.978 1.336-2.978 2.978s1.335 2.978 2.978 2.978z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Anchor = function Anchor(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M13.562 8.95c-.276 0-.527.224-.527.5 0 2.303-3.034 4.2-5.034 4.466V9h2.476a.504.504 0 0 0 .514-.503c0-.283-.229-.473-.514-.497H8V5.95c1-.229 2.034-1.238 2.034-2.45 0-1.381-1.105-2.5-2.486-2.5S5.021 2.119 5.021 3.5C5.021 4.712 6 5.721 7 5.95V8H4.647c-.283.024-.513.214-.513.497 0 .285.23.503.513.503H7v4.916c-2-.266-4.973-2.163-4.973-4.466 0-.276-.207-.5-.483-.5s-.492.224-.492.5c0 3.19 3.887 5.5 6.504 5.5 2.618 0 6.502-2.31 6.502-5.5a.496.496 0 0 0-.496-.5zm-7.5-5.45c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5S8.389 5 7.562 5s-1.5-.673-1.5-1.5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.AppDashboard = function AppDashboard(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14.854 1.209C13.898.223 10.772.016 8.316.016h-.108c-.08-.002-.421-.014-.912-.014-1.853 0-4.316.142-5.521.809C.01 1.788-.046 6.112.014 7.957c-.06 1.874-.003 6.256 1.761 7.235 1.203.665 3.666.807 5.518.807.492 0 .835-.011.916-.014h.109c2.455 0 5.581-.207 6.537-1.193 1.079-1.111 1.16-5.113 1.145-6.791.015-1.679-.066-5.679-1.146-6.792zm-.595 13.015a1.472 1.472 0 0 1-.466.295V9.013a.551.551 0 0 0-.551-.553H12.14a.553.553 0 0 0-.553.553v5.983c-.307.035-.616.062-.918.085V12.32a.55.55 0 0 0-.552-.551H9.015a.55.55 0 0 0-.553.551v2.846h-.267s-.256.008-.652.01v-4.234a.551.551 0 0 0-.552-.551H5.888a.551.551 0 0 0-.552.551v4.175c-.306-.021-.615-.05-.919-.085V8.184a.55.55 0 0 0-.55-.55H2.763a.551.551 0 0 0-.552.55v6.305l-.032-.014C.656 13.631.837 8.134.843 7.956a24.654 24.654 0 0 1 .13-3.278c.364-.128 1.938-.582 4.11.306 1.367.557 3.038 1.727 3.634 3.344l.479 1.3.313-1.35c.446-1.939 1.388-2.723 2.078-3.042v.987c0 .105.037.194.113.269a.375.375 0 0 0 .537 0l1.448-1.446a.379.379 0 0 0 0-.538L12.236 3.06a.364.364 0 0 0-.266-.113.371.371 0 0 0-.27.112.372.372 0 0 0-.114.269l.001 1.017c-.771.257-1.898.937-2.579 2.729-.876-1.363-2.361-2.347-3.612-2.856-1.983-.809-3.523-.629-4.289-.442.194-1.038.521-1.945 1.072-2.25C3.292.908 5.909.823 7.296.823c.544 0 .899.013.899.013h.122c.784 0 5.07.042 5.942.942.962.993.914 6.222.914 6.222s.048 5.23-.914 6.224z"
  }));
};

module.exports.AppPai = function AppPai(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M13.474 10.948c-.609 0-1.169.216-1.606.575l.003-.008s-.82.841-2.129.548l-3.925-1.051c-.807-.292-1.157-.871-1.285-1.16a2.32 2.32 0 0 0-.418-.785h.003S3.4 8.239 3.678 7.05l.609-2.277c.23-.695.745-.971 1.006-1.104.369-.137.684-.386.902-.706a1.847 1.847 0 0 1 1.345-.647h3.541c.578.047.916.419 1.021.555l.02.029s.438.59.253 1.274l-.383 1.432-.012.037c-.153.57-.485.849-.673.965a1.47 1.47 0 0 0-.646.445l-.008.008a1.42 1.42 0 0 0-.143.208c-.28.301-.723.309-.754.309h-.061a1.019 1.019 0 0 1-.698-.353l-.032-.041a.807.807 0 0 1-.148-.592l.038-.139a.814.814 0 0 1 .36-.416 1.053 1.053 0 1 0-1.275-.442c.135.392.088.69.088.69l-.001.004-.028.107c-.045.11-.158.279-.443.422A1.262 1.262 0 1 0 9 8.773c.364-.342.718-.352.718-.352h.126c.165.013.464.08.708.379a1.474 1.474 0 1 0 2.382-1.73c-.105-.223-.277-.676-.164-1.102a.458.458 0 0 0 .015-.064l.389-1.453c.205-.613.749-.91.922-.991a1.683 1.683 0 0 0-.622-3.25c-.521 0-.989.239-1.299.612l.001-.007s-.458.658-1.327.658h-3.15c-.87-.001-1.323-.427-1.489-.629a1.895 1.895 0 1 0-3.058 2.235c.322.46.438 1.05.286 1.605l-.008.037-.565 2.108c-.355 1.256-1.39 1.534-1.39 1.534l.009.003a2.317 2.317 0 1 0 2.383 3.878 2.415 2.415 0 0 1 1.99-.342c.064.018.126.03.185.042l3.484.934c1.024.317 1.467 1.208 1.567 1.442A2.527 2.527 0 0 0 16 13.474a2.525 2.525 0 0 0-2.526-2.526z"
  }));
};

module.exports.AppWorksheet = function AppWorksheet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4.536 3.409c0-.044-.017-1.414.323-1.835.344-.43 1.329-.985 1.329-.985S7.312-.11 7.519.016c.21.124.174 1.478.174 1.478s-.01 1.338-.227 1.724c-.216.385-1.341 1.058-1.341 1.058s-.985.643-1.323.63c-.332-.012-.267-1.45-.266-1.497zm.685 6.847c.008.243 1.204.877 1.204.877s1.176.646 1.615.646c.443 0 1.579-.65 1.579-.65s1.044-.544 1.199-.844c.152-.296-1.135-.944-1.176-.967-.038-.022-1.225-.706-1.757-.618-.545.092-1.511.677-1.511.677s-1.161.637-1.153.879zM4.73 9.234c.338.013 1.322-.63 1.322-.63s1.124-.673 1.341-1.058c.217-.384.228-1.723.228-1.723s.033-1.353-.174-1.479c-.208-.126-1.332.572-1.332.572s-.983.558-1.329.985c-.339.422-.323 1.791-.323 1.837-.002.045-.065 1.484.267 1.496zm7.582-3.712c.218.385 1.343 1.058 1.343 1.058s.984.644 1.322.63c.331-.013.268-1.45.267-1.496 0-.045.019-1.413-.322-1.837-.346-.428-1.33-.985-1.33-.985s-1.124-.699-1.331-.572c-.209.125-.175 1.478-.175 1.478s.012 1.341.226 1.724zm-1.096.379c-.347-.428-1.33-.986-1.33-.986s-1.124-.697-1.332-.571c-.207.126-.175 1.479-.175 1.479s.013 1.338.229 1.723c.217.385 1.34 1.058 1.34 1.058s.986.643 1.323.63c.332-.013.268-1.452.266-1.497 0-.045.018-1.414-.321-1.836zm-2.68-2.683c.215.385 1.34 1.058 1.34 1.058s.985.643 1.323.63c.331-.012.268-1.45.267-1.497 0-.044.016-1.414-.323-1.835-.345-.43-1.33-.985-1.33-.985s-1.125-.7-1.332-.574c-.209.125-.174 1.479-.174 1.479s.011 1.338.229 1.724zM3.614 9.852c.216-.386.228-1.724.228-1.724s.034-1.353-.173-1.48c-.21-.125-1.334.573-1.334.573s-.982.556-1.328.985c-.34.423-.324 1.791-.324 1.836-.001.046-.063 1.484.267 1.498.339.011 1.323-.631 1.323-.631s1.125-.675 1.341-1.057zm9.838 1.522c-.038-.021-1.224-.707-1.758-.616-.543.089-1.51.676-1.51.676s-1.161.636-1.154.879c.01.242 1.205.877 1.205.877s1.176.646 1.614.646c.443 0 1.58-.652 1.58-.652s1.044-.544 1.198-.844c.154-.295-1.132-.945-1.175-.966zM1.023 7.21c.338.013 1.323-.63 1.323-.63s1.124-.672 1.341-1.058c.216-.384.229-1.725.229-1.725s.033-1.351-.173-1.477c-.21-.126-1.334.573-1.334.573s-.984.556-1.329.984C.74 4.301.757 5.669.757 5.714c-.002.046-.065 1.484.266 1.496zm14.294 2.832c.001-.045.017-1.413-.323-1.836-.345-.429-1.33-.985-1.33-.985s-1.122-.698-1.331-.573c-.207.127-.175 1.48-.175 1.48s.013 1.338.229 1.724c.216.383 1.34 1.058 1.34 1.058s.985.642 1.324.631c.332-.015.267-1.453.266-1.499zm-8.359 2.406c.151-.295-1.135-.943-1.177-.966-.038-.021-1.224-.706-1.758-.617-.542.091-1.51.676-1.51.676s-1.16.638-1.152.881 1.204.876 1.204.876 1.174.646 1.616.646 1.579-.65 1.579-.65 1.042-.545 1.198-.846zm2.634 1.09c-.038-.021-1.223-.706-1.757-.616-.544.091-1.512.675-1.512.675s-1.159.639-1.151.882c.008.243 1.204.876 1.204.876S7.549 16 7.99 16s1.579-.65 1.579-.65 1.044-.544 1.198-.844c.152-.296-1.134-.946-1.175-.968z"
  }));
};

module.exports.AreaChart = function AreaChart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "m14.149 4.472-4.048-2.307-4.97 7.656c-.126.23-.377.294-.568.146l-2.77-2.185-.726-.65-.046-.269c0-.184.083-.352.215-.439a.35.35 0 0 1 .42.02l3.011 2.414 4.957-7.633c.12-.223.361-.289.549-.161l4.592 2.684a.528.528 0 0 1 .207.435s0 .274-.257.399-.566-.11-.566-.11zM1 10.565V14h14V8.291l-4.769-1.489-5.527 5.192L1 10.565z"
  }));
};

module.exports.ArrowBottomDot = function ArrowBottomDot(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4 6H3v1h1V6zm2 1H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM6 9H5V8h1v1zm2 0H7V8h1v1zm0 2H7v-1h1v1zm2-2H9V8h1v1z"
  }));
};

module.exports.ArrowBottomL = function ArrowBottomL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 9.75a.744.744 0 0 1-.53-.22l-4-4a.75.75 0 1 1 1.061-1.061L8 7.939l3.47-3.47a.75.75 0 1 1 1.061 1.061l-4 4A.748.748 0 0 1 8 9.75z"
  }), React.createElement("path", {
    d: "M13 12a1 1 0 0 0-1-1H4a1 1 0 1 0 0 2h8a1 1 0 0 0 1-1z"
  }));
};

module.exports.ArrowDownL = function ArrowDownL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8.75 11.5a.744.744 0 0 1-.53-.22l-4-4a.75.75 0 1 1 1.061-1.061l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.061 1.061l-4 4a.752.752 0 0 1-.532.22z"
  }));
};

module.exports.ArrowDown = function ArrowDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M3 5.625c0-.168.062-.314.186-.439A.6.6 0 0 1 3.625 5h8.75c.169 0 .315.061.439.186.125.125.186.271.186.439s-.061.314-.186.439l-4.375 4.375a.604.604 0 0 1-.439.186.603.603 0 0 1-.439-.186L3.186 6.064A.603.603 0 0 1 3 5.625z"
  }));
};

module.exports.ArrowLeftDL = function ArrowLeftDL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.53 12a.75.75 0 0 0 .53-1.281l-3.47-3.47 3.47-3.47a.75.75 0 1 0-1.061-1.061l-4 4A.752.752 0 0 0 8 7.78l4 4c.146.147.338.22.53.22z"
  }), React.createElement("path", {
    d: "M7.53 12a.75.75 0 0 0 .53-1.281l-3.47-3.47 3.47-3.47A.75.75 0 1 0 7 2.72l-4 4a.749.749 0 0 0 0 1.06l4 4c.146.147.338.22.53.22z"
  }));
};

module.exports.ArrowLeftL = function ArrowLeftL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M10.25 12.75a.75.75 0 0 0 .529-1.281L7.311 8l3.469-3.469a.75.75 0 1 0-1.061-1.062l-4 4a.751.751 0 0 0 0 1.062l4 4c.147.147.34.219.531.219z"
  }));
};

module.exports.ArrowLeft = function ArrowLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M10.375 13a.603.603 0 0 0 .439-.186.6.6 0 0 0 .186-.439v-8.75a.596.596 0 0 0-.186-.439.6.6 0 0 0-.439-.186.6.6 0 0 0-.439.186L5.561 7.561A.604.604 0 0 0 5.375 8c0 .168.062.314.186.439l4.375 4.375a.603.603 0 0 0 .439.186z"
  }));
};

module.exports.ArrowMinus = function ArrowMinus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M2 7H14V9H2z"
  }));
};

module.exports.ArrowReduce = function ArrowReduce(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M6 9 6 2 10 2 10 9 14 9 8 15 2 9z"
  }));
};

module.exports.ArrowRightDL = function ArrowRightDL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M3.75 12.5a.75.75 0 0 1-.53-1.281l3.47-3.47L3.22 4.28a.75.75 0 1 1 1.061-1.061l4 4a.75.75 0 0 1 0 1.061l-4 4a.748.748 0 0 1-.531.22z"
  }), React.createElement("path", {
    d: "M8.75 12.5a.75.75 0 0 1-.53-1.281l3.47-3.47L8.22 4.28a.75.75 0 1 1 1.061-1.061l4 4a.75.75 0 0 1 0 1.061l-4 4a.748.748 0 0 1-.531.22z"
  }));
};

module.exports.ArrowRightL = function ArrowRightL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M6.249 12.75a.75.75 0 0 1-.529-1.281L9.188 8 5.72 4.531a.75.75 0 1 1 1.061-1.062l4 4a.751.751 0 0 1 0 1.062l-4 4a.753.753 0 0 1-.532.219z"
  }));
};

module.exports.ArrowRightO = function ArrowRightO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M8 1a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1zm0 13.012A6.012 6.012 0 1 1 8 1.988a6.012 6.012 0 0 1 0 12.024zM6 5l4.875 3L6 11V5z"
  }));
};

module.exports.ArrowRight = function ArrowRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M5.625 13a.603.603 0 0 1-.439-.186.6.6 0 0 1-.186-.439v-8.75c0-.169.061-.315.186-.439.125-.125.271-.186.439-.186s.314.061.439.186l4.375 4.375c.123.124.186.27.186.439a.603.603 0 0 1-.186.439l-4.375 4.375a.603.603 0 0 1-.439.186z"
  }));
};

module.exports.ArrowRise = function ArrowRise(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M6 8 6 15 10 15 10 8 14 8 8 2 2 8z"
  }));
};

module.exports.ArrowTopDot = function ArrowTopDot(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4 11H3v-1h1v1zm2-1H5v1h1v-1zm2 0H7v1h1v-1zm2 0H9v1h1v-1zm2 0h-1v1h1v-1zM6 8H5v1h1V8zm2 0H7v1h1V8zm0-2H7v1h1V6zm2 2H9v1h1V8z"
  }));
};

module.exports.ArrowTopL = function ArrowTopL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12 11.75a.744.744 0 0 1-.53-.22L8 8.061l-3.47 3.47a.75.75 0 1 1-1.061-1.061l4-4a.75.75 0 0 1 1.061 0l4 4a.75.75 0 0 1-.53 1.28z"
  }), React.createElement("path", {
    d: "M13 4a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1z"
  }));
};

module.exports.ArrowTop = function ArrowTop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M13 10.375a.603.603 0 0 1-.186.439.6.6 0 0 1-.439.186h-8.75a.596.596 0 0 1-.439-.186.6.6 0 0 1-.186-.439.6.6 0 0 1 .186-.439l4.375-4.375A.604.604 0 0 1 8 5.375c.168 0 .314.062.439.186l4.375 4.375a.603.603 0 0 1 .186.439z"
  }));
};

module.exports.ArrowUpL = function ArrowUpL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M11.75 11.5a.744.744 0 0 1-.53-.22L7.75 7.81l-3.47 3.47a.75.75 0 1 1-1.061-1.061l4-4a.75.75 0 0 1 1.061 0l4 4a.75.75 0 0 1-.53 1.281z"
  }));
};

module.exports.ArrowUp = function ArrowUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M13 10.375a.603.603 0 0 1-.186.439.6.6 0 0 1-.439.186h-8.75a.596.596 0 0 1-.439-.186.6.6 0 0 1-.186-.439.6.6 0 0 1 .186-.439l4.375-4.375A.604.604 0 0 1 8 5.375c.168 0 .314.062.439.186l4.375 4.375a.603.603 0 0 1 .186.439z"
  }));
};

module.exports.Asterisk = function Asterisk(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8.804 6.997a60.795 60.795 0 0 0 1.791-.865c.567-.29 1.021-.504 1.356-.638.336-.131.605-.201.809-.201.336 0 .626.11.872.34.246.224.368.509.368.844 0 .192-.061.394-.181.6-.119.207-.248.34-.382.398-1.242.488-2.611.847-4.102 1.069.271.246.603.581.998.993.395.418.603.638.619.666.146.201.347.452.607.75.26.3.44.532.541.701.101.171.152.372.152.613 0 .308-.115.579-.347.809-.229.232-.53.348-.896.348s-.775-.286-1.235-.852c-.457-.566-1.048-1.589-1.77-3.062a147.175 147.175 0 0 1-1.472 2.629c-.251.42-.492.741-.722.959a1.133 1.133 0 0 1-.795.326c-.356 0-.653-.122-.891-.368-.231-.246-.352-.511-.352-.788 0-.26.047-.457.144-.59.886-1.203 1.809-2.253 2.774-3.134a28.028 28.028 0 0 1-2.165-.42 13.597 13.597 0 0 1-2.023-.68c-.117-.059-.229-.192-.34-.398A1.234 1.234 0 0 1 2 6.477a1.1 1.1 0 0 1 .368-.844 1.2 1.2 0 0 1 .846-.34c.232 0 .519.07.867.209.345.141.785.342 1.319.606.535.265 1.145.561 1.828.889a21.634 21.634 0 0 1-.311-2.086c-.082-.785-.122-1.322-.122-1.612 0-.356.113-.659.338-.917.229-.255.517-.382.874-.382.35 0 .633.127.86.382.228.258.34.596.34 1.02 0 .115-.019.343-.052.687-.03.343-.082.755-.143 1.24-.063.486-.133 1.044-.208 1.668z"
  }));
};

module.exports.Attachment = function Attachment(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M13.157 3.17a4.004 4.004 0 0 0-5.657 0L3.169 7.501a4.004 4.004 0 0 0 0 5.657c1.52 1.52 3.963 1.547 5.53.104.022-.016.048-.024.068-.045l.057-.057.002-.002.001-.001 1.697-1.696a2.449 2.449 0 0 0 0-3.458 2.449 2.449 0 0 0-3.458 0L5.721 9.35a.5.5 0 0 0 .707.707L7.774 8.71a1.447 1.447 0 0 1 2.043 0 1.449 1.449 0 0 1 0 2.043L8.119 12.45a3.002 3.002 0 0 1-4.242 0 3.003 3.003 0 0 1 0-4.243l4.331-4.331a3.002 3.002 0 0 1 4.242 0 3.003 3.003 0 0 1 0 4.243.5.5 0 0 0 .707.707 4.001 4.001 0 0 0 0-5.656z"
  }));
};

module.exports.AutoAlign24 = function AutoAlign24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M19.66 7.178h-11c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5h11c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5zm-11-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h11c.826 0 1.5-.673 1.5-1.5s-.674-1.5-1.5-1.5h-11zm11 10.66h-11c-1.378 0-2.5-1.121-2.5-2.5s1.122-2.5 2.5-2.5h11c1.378 0 2.5 1.122 2.5 2.5s-1.122 2.5-2.5 2.5zm-11-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h11c.826 0 1.5-.673 1.5-1.5s-.674-1.5-1.5-1.5h-11zm.41 5.473-2.76 2.76-.006.006c-.046.045-.08.151-.105.211-.022.053-.029.009-.033.063 0 .012-.006.022-.006.032 0 .008.003.014.004.021.002.061.014.09.035.146a.514.514 0 0 0 .09.135c.007.01.012.023.021.033l2.785 2.783c.2.201.525.109.724-.092a.51.51 0 0 0 0-.726l-1.862-1.862h9.667c.293.001.531-.154.531-.438 0-.282-.238-.464-.532-.464l-9.658-.012 1.929-1.93c.201-.201.126-.534-.075-.735-.187-.186-.523-.158-.749.069zM4 3.5a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0v1zm0 3a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0v1zm0 3a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0v1zm0 3a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0v1zm0 3a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0v1zm0 3a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0v1zm0 3a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0v1z"
  }));
};

module.exports.AutoMergeCell = function AutoMergeCell(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "m11.093 7.28 1.375-1.188c.062-.061.136-.092.22-.092s.157.031.22.093a.3.3 0 0 1 .092.219V7h.5a.5.5 0 0 1 0 1H13v.688c0 .084-.03.158-.093.22-.062.062-.136.092-.219.092s-.157-.03-.22-.093L11.093 7.72C11.031 7.658 11 7.584 11 7.5s.031-.157.093-.22zm-5.186 0L4.532 6.093C4.47 6.031 4.396 6 4.312 6s-.157.031-.22.093A.3.3 0 0 0 4 6.312V7h-.5a.5.5 0 0 0 0 1H4v.688c0 .084.03.158.093.22.062.062.136.092.219.092s.157-.03.22-.093L5.907 7.72C5.969 7.658 6 7.584 6 7.5s-.031-.157-.093-.22zM7 2H2v11h5v-2h1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2H7V2m3 0h5v11h-5v-2H9v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v2h1V2m1.286 8.036c0 .133-.055.255-.164.365s-.241.166-.396.166a.478.478 0 0 1-.393-.182c-.044-.056-.091-.142-.141-.258l-.13-.307-.27-.719H7.49l-.27.736c-.105.286-.195.479-.271.58s-.196.15-.366.15c-.145 0-.272-.054-.383-.16s-.166-.228-.166-.363c0-.078.014-.159.039-.242s.068-.199.127-.348l1.448-3.719.149-.384c.058-.149.12-.274.186-.373s.151-.179.259-.24a.774.774 0 0 1 .396-.092c.159 0 .293.03.398.092a.8.8 0 0 1 .26.236c.064.097.121.2.166.311s.102.259.172.443l1.479 3.695c.115.281.173.485.173.613zM9.483 8.231 8.63 5.868l-.839 2.363h1.692z",
    "clip-rule": "evenodd"
  }));
};

module.exports.BackwardCyclyO = function BackwardCyclyO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 .001 13.999A7 7 0 0 0 8 1zm0 13.012A6.012 6.012 0 1 1 8 1.988a6.012 6.012 0 0 1 0 12.024zm4-6.007c0 .283-.23.513-.514.513l-5.734-.005 2.401 2.401a.514.514 0 0 1-.725.726L4.15 8.363l-.004-.008a.515.515 0 0 1-.106-.159.515.515 0 0 1-.033-.164C4.007 8.021 4 8.012 4 8c0-.008.005-.014.005-.021a.524.524 0 0 1 .035-.175.49.49 0 0 1 .09-.135c.008-.01.011-.022.021-.032L7.428 4.36a.514.514 0 0 1 .726.726l-2.401 2.4h5.734c.283 0 .513.236.513.519z",
    "clip-rule": "evenodd"
  }));
};

module.exports.BringToBottom = function BringToBottom(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14 8h-1V6a2 2 0 0 0-2-2H8V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3a2 2 0 0 0 2 2h2v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-8 4c-.551 0-1-.449-1-1V8h1a2 2 0 0 0 2-2V5h3c.551 0 1 .449 1 1v2h-2a2 2 0 0 0-2 2v2H6z"
  }));
};

module.exports.BringToDowner = function BringToDowner(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M3 9h4a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2zm8.409-4.695c.025.539.051.643.549.177.382-.324.743-.743.743-.743.031-.011.872.369 1.444 1.816.569 1.444-.113 3.49-.418 4.037-.238.256-.392 1.055.371.354 1.199-1.192 1.983-2.912 1.512-4.821-.44-1.777-1.431-2.634-1.568-2.699-.011.007-.017.009-.017-.004 0 0 .007-.001.017.004.053-.034.258-.292.688-.729.406-.369.313-.485-.164-.547C13.671 1.062 11.1 1 11.1 1s.215 2.416.309 3.305zM13 9v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3h1v3c0 .551.449 1 1 1h4c.551 0 1-.449 1-1V9c0-.551-.449-1-1-1H9.815c.113-.314.185-.647.185-1h1a2 2 0 0 1 2 2z"
  }));
};

module.exports.BringToTop = function BringToTop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14 8h-1V6a2 2 0 0 0-2-2H8V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3a2 2 0 0 0 2 2h2v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-8 4c-.551 0-1-.449-1-1V6c0-.551.449-1 1-1h5c.551 0 1 .449 1 1v5c0 .551-.449 1-1 1H6z"
  }));
};

module.exports.BringToUpper = function BringToUpper(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M5.34 11.695c-.025-.539-.051-.643-.549-.177a7.844 7.844 0 0 0-.743.743c-.031.011-.872-.369-1.444-1.816-.569-1.444.113-3.49.418-4.037.238-.256.392-1.054-.371-.353C1.452 7.247.668 8.967 1.139 10.876c.44 1.777 1.431 2.634 1.568 2.699.011-.007.017-.009.017.004 0 0-.007.001-.017-.004-.053.034-.258.292-.688.729-.406.369-.313.485.164.547.896.087 3.467.149 3.467.149s-.216-2.416-.31-3.305zM10.027 2c.551 0 1 .449 1 1v4c0 .551-.449 1-1 1h-4c-.551 0-1-.449-1-1V3c0-.551.449-1 1-1h4m0-1h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM16 9v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3h2.027c1.654 0 3-1.346 3-3H14a2 2 0 0 1 2 2z",
    "clip-rule": "evenodd"
  }));
};

module.exports.BucketA = function BucketA(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("g", {
    fill: "#010101"
  }, React.createElement("path", {
    d: "m7.222 2.561 4.949 4.95-5.656 5.656-4.95-4.949 5.657-5.657m-.707-.707L.858 7.511a.997.997 0 0 0 0 1.414l4.95 4.949a.997.997 0 0 0 1.414 0l5.656-5.656a.999.999 0 0 0 0-1.414l-4.949-4.95a.999.999 0 0 0-1.414 0z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.272 1.146a.5.5 0 0 0 0 .707L6.869 6.45a.5.5 0 0 0 .707-.707L2.979 1.146a.5.5 0 0 0-.707 0z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Bucket = function Bucket(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "m7.223 2.561 4.949 4.95-5.656 5.656-4.95-4.949 5.657-5.657m-.707-.707L.858 7.511a.997.997 0 0 0 0 1.414l4.95 4.949a.997.997 0 0 0 1.414 0l5.656-5.656a.999.999 0 0 0 0-1.414L7.93 1.854a.999.999 0 0 0-1.414 0zM.858 8.925l4.95 4.949a.997.997 0 0 0 1.414 0l5.656-5.656a.993.993 0 0 0 .293-.707H.858a.999.999 0 0 0 0 1.414zm1.414-7.779a.5.5 0 0 0 0 .707L6.869 6.45a.5.5 0 0 0 .707-.707L2.979 1.146a.5.5 0 0 0-.707 0zm11.317 7.062s-1.839 2.839-2 4c-.275 1.981 1 2.214 2 2.214s2.195-.223 2-2.214c-.105-1.067-2-4-2-4z"
  }));
};

module.exports.C = function C(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1zm-.001 13.012a6.012 6.012 0 1 1 .002-12.024A6.012 6.012 0 0 1 8 14.012z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Calendar = function Calendar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M13 6v7H4V6h9m0-1H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm.5-2H12v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3H3.5a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zM6 7H5v1h1V7zm2 0H7v1h1V7zm2 0H9v1h1V7zm2 0h-1v1h1V7zM6 9H5v1h1V9zm2 0H7v1h1V9zm2 0H9v1h1V9zm2 0h-1v1h1V9zm-6 2H5v1h1v-1zm2 0H7v1h1v-1zm2 0H9v1h1v-1zm2 0h-1v1h1v-1z"
  }));
};

module.exports.CenterJustified = function CenterJustified(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm-2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm2 3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.ChartBar = function ChartBar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M5 14H3V3h2v11zM8 1H6v13h2V1zm3 6H9v7h2V7zm3-2h-2v9h2V5z"
  }));
};

module.exports.ChartFromTo = function ChartFromTo(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    id: "XMLID_23_",
    d: "M12.1 5c.2.4.5.6.8.6h.9c.6 0 1-.6 1-1.2V1.8c0-.7-.4-1.2-1-1.2H13c-.6 0-1 .6-1 1.2v.3c-.7.3-1.2 1.2-2 2.6-.4.6-.8 1.5-1.2 2-.1-.4-.5-.7-.8-.7H7c-.5 0-.9.5-1 1.1-.3-.3-.7-.8-1-1.1-.4-.5-.8-.9-1.1-1.2V3.7c0-.7-.4-1.2-1-1.2H2c-.6 0-1 .5-1 1.2v2.5c0 .7.4 1.2 1 1.2h.9c.5 0 1-.5 1-1.2.1.2.2.3.4.5.5.5.9 1.1 1.4 1.4-.5.4-1 .9-1.4 1.4-.2.1-.3.3-.5.4-.1-.6-.5-1-1-1H2c-.6 0-1 .6-1 1.2v2.5c0 .7.4 1.2 1 1.2h.9c.6 0 1-.6 1-1.2v-1.4c.3-.2.7-.6 1.1-1 .3-.3.7-.8 1-1.1v.7c0 .6.5 1.2 1 1.2h1c.6 0 1-.6 1-1.2v-.2c.3.5.7 1.1 1 1.5.7 1.2 1.3 2.1 2 2.4v.3c0 .7.4 1.2 1 1.2h.9c.6 0 1-.6 1-1.2v-2.5c0-.7-.4-1.2-1-1.2H13c-.4 0-.7.3-.9.7-.1-.2-.3-.5-.4-.7-.5-.8-.9-1.5-1.4-2 .5-.6.9-1.4 1.4-2.3.1-.3.3-.5.4-.8zm.9-3.2c0-.1 0-.2.1-.2h.8s.1.1.1.2v2.5c0 .1 0 .2-.1.2H13s-.1-.1-.1-.2V1.8zM2.9 6.2c0 .1 0 .2-.1.2H2V3.5h.8s.1.1.1.2v2.5zm0 6.5c0 .1 0 .2-.1.2H2s-.1-.1-.1-.2v-2.5c.1-.1.1-.2.1-.3h.8s.1.1.1.2v2.6zM8 9.8c0 .1 0 .2-.1.2h-.8S7 9.9 7 9.8V7.2c0-.1.1-.2.1-.2h.8s.1.1.1.2v2.6zm5 1.5c0-.1 0-.2.1-.2h.8s.1.1.1.2v2.5c0 .1 0 .2-.1.2H13s-.1-.1-.1-.2v-2.5z",
    opacity: "0.98"
  }));
};

module.exports.ChartFunnelPlot = function ChartFunnelPlot(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M11 8.938 7.993 1 5 8.938.993 15h14L11 8.938zM7.993 3.875 8.391 5h-.719l.321-1.125zM7.356 6h1.28l.867 2h-3.01l.863-2zM5.883 9.415 6.062 9h3.875l.18.415L11.161 11H4.835l1.048-1.585zM2.853 14l1.322-2h7.646l1.316 2H2.853z"
  }));
};

module.exports.ChartFunnel = function ChartFunnel(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "-191 193 16 16",
    "enable-background": "new -191 193 16 16"
  }), React.createElement("path", {
    d: "M-183 195h7v2h-7v-2zm0 5h5.9l1.1-2h-7v2zm0 3h3.2l1.8-2h-5v2zm0 3h1.4l1.1-2h-2.5v2zm-1-11h-7v2h7v-2zm0 3h-7l1 2h6v-2zm0 3h-5.6l1.6 2h4v-2zm0 3h-3.3l1 2h2.3v-2z",
    fill: "#020202"
  }));
};

module.exports.ChartIndex = function ChartIndex(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M2 8h7v1H2V8zm0 3h5v-1H2v1zm1-4H2V2h3v5H3zm0-3h1V3H3v1zm0 2h1V5H3v1zm3-4h3v5H6V2zm2 3H7v1h1V5zM7 3v1h1V3H7zm4 3h-1v1h1V6zm1 5V9h-1v2h-1v1h1v1h1v-1h1v-1h-1zM2 13h3v-1H2v1zm9-12V0h-1v1h1zm2 0V0h-1v1h1zm0 14v-1h-1v1h1zM9 1V0H8v1h1zM7 1V0H6v1h1zM5 1V0H4v1h1zM3 1V0H2v1h1zm8 14v-1h-1v1h1zm-2 0v-1H8v1h1zm-2 0v-1H6v1h1zm-2 0v-1H4v1h1zm-2 0v-1H2v1h1zM1 7V6H0v1h1zm0-6V0H0v1h1zm0 14v-1H0v1h1zM1 3V2H0v1h1zm0 2V4H0v1h1zm0 4V8H0v1h1zm0 2v-1H0v1h1zm0 2v-1H0v1h1zm14 0v-1h-1v1h1zm0-6V6h-1v1h1zm0 8v-1h-1v1h1zm0-12V2h-1v1h1zm0-2V0h-1v1h1zm0 4V4h-1v1h1zm0 4V8h-1v1h1zm0 2v-1h-1v1h1zm-2-9h-1v5h1V2z"
  }));
};

module.exports.ChartNew = function ChartNew(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M15 12V7h-1v5h-1v1H3v-1H2V4h1V3h4V2H3V1H0v3h1v8H0v3h3v-1h10v1h3v-3h-1zM1 2h1v1H1V2zm0 12v-1h1v1H1zm14 0h-1v-1h1v1zM4 12V4h2v8H4zm3-5h2v5H7V7zm3 3h2v2h-2v-2zM8 4.5a.5.5 0 0 1 .5-.5H11V1.5a.5.5 0 0 1 1 0V4h2.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-1 0V5H8.5a.5.5 0 0 1-.5-.5z"
  }));
};

module.exports.ChartScatter = function ChartScatter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M3.5 5.75a.75.75 0 1 1-.002 1.502A.75.75 0 0 1 3.5 5.75m0-.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm4-3.25a.75.75 0 1 1-.002 1.502A.75.75 0 0 1 7.5 1.75m0-.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 2.75a.75.75 0 0 1 0 1.5.75.75 0 0 1 0-1.5m0-.75a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 14.5 3zm-5 2.75a.75.75 0 1 1-.002 1.502A.75.75 0 0 1 9.5 5.75m0-.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2 5.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m0-.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-5 1.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m0-.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
  }));
};

module.exports.ChartWordCloud = function ChartWordCloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "-191 193 16 16",
    "enable-background": "new -191 193 16 16"
  }), React.createElement("path", {
    d: "m-189.1 199.1-.3-1.2-.1-.3-.4 1.6h-.4l-.6-2h.4l.3 1.2.1.4s0-.2.1-.4l.3-1.2h.4l.3 1.2.1.4.1-.4.3-1.2h.3l-.6 2h-.3zm2.1.1c-.3 0-.5-.1-.7-.3-.2-.2-.3-.4-.3-.8s.1-.7.3-.8c.2-.2.4-.2.6-.2.3 0 .5.1.7.3.2.2.3.4.3.8 0 .3 0 .5-.1.6-.1.1-.2.3-.3.3-.2 0-.4.1-.5.1zm-.5-.5c.1.1.3.2.4.2.2 0 .3-.1.4-.2s.2-.3.2-.6-.1-.4-.2-.6c-.1-.1-.3-.2-.4-.2-.2 0-.3.1-.4.2-.1.1-.2.3-.2.6s.1.5.2.6zm2.1-.6c0-.1 0-.3.1-.4 0-.1.1-.1.1-.2.1 0 .1-.1.2-.1s.2 0 .3.1l.1-.3c-.1-.1-.2-.1-.4-.1-.1 0-.2 0-.2.1s-.1.1-.2.3v-.3h-.3v2h.3v-1.1zm1 .6c-.1-.2-.1-.3-.1-.6 0-.2 0-.4.1-.6.1-.2.2-.3.3-.4.1-.1.3-.1.5-.1.1 0 .2 0 .3.1.1.1.2.1.2.2v-1h.3v2.8h-.3v-.3c-.1.2-.3.3-.6.3-.2 0-.3 0-.4-.1-.1 0-.2-.2-.3-.3zm.2-.6c0 .3.1.5.2.6.1.1.2.2.4.2.1 0 .3-.1.4-.2.1-.1.2-.3.2-.6s-.1-.5-.2-.6-.2-.2-.4-.2-.3.1-.4.2c-.1.2-.2.4-.2.6zm.8 4.7-.4-.1c0 .2-.1.3-.2.4s-.2.1-.4.1-.3-.1-.5-.2c-.1-.1-.2-.4-.2-.7 0-.3.1-.5.2-.7.1-.1.3-.2.5-.2.1 0 .2 0 .3.1.1.1.2.2.2.4l.4-.1c0-.2-.1-.4-.3-.5-.2-.1-.4-.2-.6-.2-.2 0-.4 0-.6.1-.2.1-.3.2-.4.4-.1.2-.1.4-.1.7 0 .4.1.7.3.9s.4.3.8.3c.3 0 .5-.1.6-.2.2 0 .3-.3.4-.5zm.3.8h.4v-3.2h-.4v3.2zm1.9 0c-.3 0-.6-.1-.8-.3-.2-.2-.3-.5-.3-.9s.1-.7.4-1c.2-.2.4-.3.7-.3.3 0 .6.1.8.3s.3.5.3.9c0 .3 0 .5-.1.7-.1.2-.2.3-.4.4-.2.2-.4.2-.6.2zm-.5-.5c.1.1.3.2.5.2s.4-.1.5-.2c.1-.1.2-.4.2-.7 0-.3-.1-.5-.2-.7-.1-.1-.3-.2-.5-.2s-.4.1-.5.2c-.1.1-.2.4-.2.7s.1.5.2.7zm3.5-.6c0 .2 0 .3-.1.5s-.1.2-.2.2c-.1.1-.2.1-.3.1s-.2 0-.3-.1l-.2-.2V201.3h-.4V203.1c0 .1.1.2.1.3.1.1.1.1.3.2.1.1.2.1.4.1.3 0 .6-.1.7-.4v.3h.4v-2.3h-.4v1.2zm2.9-2.1v3.2h-.4v-.3c-.1.2-.4.3-.6.3-.2 0-.4-.1-.5-.2s-.3-.2-.4-.4c-.1-.2-.1-.4-.1-.6 0-.2 0-.4.1-.6s.2-.3.3-.4.3-.2.5-.2c.1 0 .3 0 .4.1.1.1.2.1.3.2v-1.1h.4zm-.3 2.1c0-.3-.1-.6-.2-.7s-.3-.2-.5-.2-.3.1-.4.2-.2.4-.2.7c0 .3.1.5.2.7.1.1.3.2.4.2.2 0 .3-.1.4-.2s.3-.5.3-.7zm-5.7-3.9v.2h.2v-.2h1.2l.1-.1v-.4h-.2v.2h-1.3v-.3h-.2v.3h-.6l.2.3h.6zm.1-1.1c0-.1-.1-.2-.1-.4v-.3c0-.1.1-.2.1-.2.1 0 .1-.1.2-.1h1.2c.1 0 .1 0 .2-.1v.3c-.1 0-.1 0-.2.1.1.1.1.2.2.3 0 .1.1.2.1.3 0 .2 0 .3-.1.4-.1.1-.2.1-.3.1-.1 0-.2 0-.2-.1s-.1-.1-.2-.1c0-.1-.1-.1-.1-.2v-.2c0-.2-.1-.4-.1-.5h-.1c-.1 0-.2 0-.2.1-.1.1-.1.2-.1.3 0 .1 0 .2.1.3 0 .1.1.1.2.1v.3c-.1 0-.2-.1-.3-.1s-.3-.2-.3-.3zm.8-.8c0 .1.1.3.1.5 0 .1 0 .2.1.2s.1.1.1.1h.1c.1 0 .1 0 .2-.1 0-.1.1-.1.1-.2s0-.2-.1-.3c0-.1-.1-.1-.2-.2h-.4zm-.9-1.3c0-.2.1-.4.2-.5h-.2v-.3h1.4c.3 0 .4 0 .5.1.1.1.2.1.3.2.1.1.1.3.1.4 0 .2 0 .4-.1.5-.1.1-.2.2-.4.2v-.3c.1 0 .1 0 .2-.1s.1-.2.1-.3c0-.1 0-.2-.1-.3-.1-.1-.1-.1-.2-.1h-.4c.1.1.2.3.2.5s-.1.4-.2.5c-.2.1-.4.2-.6.2-.2 0-.3 0-.4-.1s-.2-.1-.3-.2c-.1-.1-.1-.2-.1-.4zm.2 0c0 .1 0 .2.2.3.1.1.2.1.4.1s.4 0 .5-.1c.1-.1.1-.2.1-.3s0-.2-.1-.3c-.1-.1-.3-.1-.5-.1s-.4 0-.5.1c0 .1-.1.2-.1.3zm-6.8 11.5c0 .1 0 .1.1.2h-.3c0-.1-.1-.1-.1-.2-.1.1-.2.2-.3.2-.1 0-.2.1-.3.1-.2 0-.3 0-.4-.1-.1-.1-.2-.2-.2-.4 0-.1 0-.2.1-.2 0-.1.1-.1.2-.2.1 0 .1-.1.2-.1h.3c.2 0 .4-.1.5-.1v-.1c0-.1 0-.2-.1-.3-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3.1-.1 0-.1.1-.1.3h-.3c0-.1.1-.2.1-.3s.1-.1.3-.2c.1 0 .2-.1.4-.1.1 0 .3 0 .4.1.1 0 .2.1.2.1s.1.1.1.2v.7c-.2.2-.2.3-.2.4zm-.3-.7c-.1 0-.3.1-.5.1-.1 0-.2 0-.3.1-.1 0-.1.1-.1.1v.1c0 .1 0 .1.1.2s.1.1.3.1c.1 0 .2 0 .3-.1s.2-.1.2-.2v-.4zm1.9-.8h.3v1.5c0 .3 0 .5-.1.6s-.1.2-.3.3c-.1.1-.3.1-.4.1-.2 0-.4 0-.5-.1s-.2-.2-.2-.4h.3c0 .1 0 .2.1.2.1.1.2.1.3.1.1 0 .2 0 .3-.1l.2-.2v-.4c-.1.2-.3.2-.5.2s-.4-.1-.6-.3c-.1-.2-.2-.4-.2-.6 0-.2 0-.3.1-.5s.1-.2.3-.3c.1-.1.2-.1.4-.1s.4.1.5.2v-.2zm0 .8c0-.2 0-.4-.1-.5-.1-.1-.2-.2-.3-.2-.1 0-.2.1-.3.2-.1.1-.1.3-.1.5s0 .4.1.5c.1.1.2.2.3.2.1 0 .2-.1.3-.2 0-.1.1-.2.1-.5zm.7-1.1h.3v-.3h-.3v.3zm0 2h.3v-1.7h-.3v1.7zm.7 0h.3v-2.4h-.3v2.4zm2.1-1.5c.1.2.2.4.2.7v.1h-1.3c0 .2.1.3.2.4s.2.2.4.2c.1 0 .2 0 .3-.1.1-.1.1-.1.2-.3h.3c0 .2-.1.3-.3.4s-.3.1-.5.1c-.3 0-.5-.1-.6-.2-.1-.2-.2-.4-.2-.7 0-.3.1-.5.2-.7.2-.2.3-.2.6-.2.1 0 .3.1.5.3zm-.1.5c0-.1-.1-.3-.1-.3-.1-.1-.2-.2-.4-.2-.1 0-.2 0-.3.1-.1.1-.1.2-.2.4h1zm3.3 0c.1.1.1.2.1.4 0 .1 0 .2-.1.3 0 .1-.1.2-.2.2-.1.1-.2.1-.3.1h-1.3v-2.4h.9c.2 0 .3 0 .4.1.1 0 .2.1.3.2.1.1.1.2.1.3 0 .1 0 .2-.1.3s-.1.2-.3.2c.3.1.4.2.5.3zm-1.4-.4h.8c.1 0 .1-.1.2-.1 0-.1.1-.1.1-.2s0-.2-.1-.2-.1-.1-.2-.1h-.9v.6zm1.2.7c0-.1 0-.2-.1-.2 0-.1-.1-.1-.2-.1h-1v.8h.8c.1 0 .1 0 .2-.1l.1-.1c.2-.1.2-.2.2-.3zm.7-1.3h.3v-.3h-.3v.3zm0 2h.3v-1.7h-.3v1.7zm-8-3.5v.4l.1.1v.1c-.1 0-.1 0-.1-.1s-.1-.1-.1-.1v-.4s0-.1.1-.1H-186.3v.2h-.1c0 .1.1.1.1.2v.2c0 .1 0 .2-.1.2 0 .1-.1.1-.2.1h-.1s-.1 0-.1-.1v-.2c0-.1 0-.2-.1-.3l-.2-.2zm.2 0c0 .1 0 .1.1.2v.2c0 .1 0 0 .1 0h.1V203.7l-.1-.1h-.2zm.5-.5h-1.2v.1h1.2v-.1zm-1.2-.3h.2v-.1h-.2v.1zm.3 0h.9v-.1h-.9v.1zm.9-.8c0-.1-.1-.1-.1-.1h-.2l-.1.1s0 .1-.1.2v.2h-.2v-.2l.1-.1v-.1c-.1 0-.1 0-.1.1l-.1.1v.4s0 .1.1.1h.2l.1-.1s0-.1.1-.2c0-.1 0-.1.1-.2h.2v.4l-.1.1v.1c.1 0 .2-.1.2-.1 0-.1.1-.1.1-.3-.2-.3-.2-.4-.2-.4zm0-.5h-.9v.1h.9v-.1zm-1.1 0h-.2v.1h.2v-.1zm1.1-.7c0-.1-.1-.1-.1-.1h-.2l-.1.1s0 .1-.1.2v.2h-.2v-.2l.1-.1v-.1c-.1 0-.1 0-.1.1l-.1.1v.4s0 .1.1.1h.2l.1-.1s0-.1.1-.2c0-.1 0-.1.1-.2h.2v.4l-.1.1v.1c.1 0 .2-.1.2-.1s.1-.1.1-.3c-.2-.3-.2-.4-.2-.4z",
    fill: "#020202"
  }));
};

module.exports.Chart = function Chart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M16 4V1h-3v1H3V1H0v3h1v8H0v3h3v-1h10v1h3v-3h-1V4h1zm-2-2h1v1h-1V2zM1 2h1v1H1V2zm0 12v-1h1v1H1zm14 0h-1v-1h1v1zm-1-2h-1v1H3v-1H2V4h1V3h10v1h1v8zM4 4h2v8H4V4zm3 4h2v4H7V8zm3-2h2v6h-2V6z"
  }));
};

module.exports.CheckTriangle = function CheckTriangle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1 15h13a1 1 0 0 0 1-1V1L1 15zm9.545-1.34c-.121.194-.332.34-.561.34h-.021a.714.714 0 0 1-.566-.289L7.145 10.88a.703.703 0 0 1 .135-.981.7.7 0 0 1 .977.135l1.641 2.018 2.957-4.747a.697.697 0 0 1 1.182.737l-3.492 5.618z"
  }));
};

module.exports.Clear = function Clear(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("g", {
    id: "XMLID_1_"
  }, React.createElement("path", {
    id: "XMLID_11_",
    d: "m13.8 6.3-2.3-.7.9-3.5c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.3-.2L9.8.9h-.4c-.1.2-.2.3-.2.4l-1 3.4L5.6 4h-.4c-.1 0-.2.3-.2.4l-1.4 5C3.3 10.7 2 12 2 12c-.1.1-.2.3-.1.5 0 .2.2.3.4.4l8.2 2.2h.1c.1 0 .3-.1.4-.2.1-.1 1.3-1.4 1.8-2.8.5-1.3 1.4-5.1 1.4-5.2 0-.3-.2-.5-.4-.6zm-2 5.4c-.4.9-1.1 1.8-1.4 2.3l-1.1-.3c.5-.6 1.1-1.5 1.4-2.5.1-.3-.1-.5-.4-.6-.3-.1-.5.1-.6.4-.3 1.1-1.2 2.1-1.5 2.4l-.9-.2c.5-.6 1.1-1.5 1.3-2.4.1-.3-.1-.5-.4-.6-.3-.1-.5.1-.6.4-.3 1-1.1 2-1.4 2.4l-1-.3c.5-.6 1.1-1.5 1.4-2.4.1-.3-.1-.5-.4-.6-.2-.2-.5 0-.5.2-.3 1-1.1 2-1.5 2.4l-.9-.3c.5-.6 1.1-1.5 1.3-2.4L5.8 5l2.6.7h.4c.1 0 .2-.1.3-.2L10 2l1.3.3-.9 3.5c-.1.3.1.5.3.6l2.3.7c-.2 1.1-.8 3.7-1.2 4.6z",
    fill: "#000202"
  }), React.createElement("path", {
    id: "XMLID_12_",
    d: "M5.7 7.4c0 .3.1.5.4.6l5.3 1.5h.1c.2 0 .4-.1.5-.4.1-.3-.1-.5-.3-.6L6.4 7c-.3 0-.6.1-.7.4z",
    fill: "#000202"
  })));
};

module.exports.Click = function Click(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m9.695 14.584 1.346-3.168 3.222 3.021.737-.787-3.223-3.021 3.076-1.548-8.038-2.452 2.88 7.955zM7.591 3.504a.702.702 0 1 1-1.402 0V1.701A.7.7 0 0 1 6.891 1a.7.7 0 0 1 .7.701v1.803zm-2.74.579a.702.702 0 0 1-.991.991L2.585 3.799a.7.7 0 1 1 .991-.99l1.275 1.274zm3.825-.265a.703.703 0 0 0 0 .992.703.703 0 0 0 .992 0l1.273-1.275a.7.7 0 0 0 0-.991.699.699 0 0 0-.99 0L8.676 3.818zM3.504 6.262a.7.7 0 1 1 0 1.402l-1.803-.001a.7.7 0 1 1 0-1.401h1.803zM4.347 8.7a.7.7 0 0 1 .991.002.7.7 0 0 1 .001.99l-1.275 1.274a.7.7 0 1 1-.991-.991L4.347 8.7z"
  }));
};

module.exports.CloseC = function CloseC(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1zm2.91 9.002c.26.26.268.675.016.926a.652.652 0 0 1-.924-.017L8 8.909 5.998 10.91a.656.656 0 0 1-.926.019.656.656 0 0 1 .02-.927l2-2L5.09 6a.656.656 0 0 1-.018-.927.655.655 0 0 1 .926.017l2.003 2.002 2.001-2.001a.654.654 0 0 1 .926-.018c.25.25.244.665-.018.926L8.908 8l2.002 2.002z",
    "clip-rule": "evenodd"
  }));
};

module.exports.CloseL = function CloseL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.529 11.469 9.061 8l3.469-3.469a.75.75 0 1 0-1.06-1.062L8 6.938 4.53 3.469a.75.75 0 1 0-1.059 1.063L6.939 8 3.47 11.468a.75.75 0 1 0 1.06 1.063L8 9.062l3.47 3.469a.75.75 0 0 0 1.059-1.062z"
  }));
};

module.exports.CloseO = function CloseO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1zm0 13.012A6.012 6.012 0 1 1 8 1.988a6.012 6.012 0 0 1 0 12.024zm2.91-4.01c.26.26.268.675.016.926a.652.652 0 0 1-.924-.017L8 8.909 5.998 10.91a.656.656 0 0 1-.926.019.656.656 0 0 1 .02-.927l2-2L5.09 6a.656.656 0 0 1-.018-.927.655.655 0 0 1 .926.017L8 7.092l2.001-2.001a.654.654 0 0 1 .926-.018c.25.25.244.665-.018.926L8.909 8l2.001 2.002z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Closedhand24 = function Closedhand24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M17.482 22.85a.5.5 0 0 1-.5-.5v-2.644a.5.5 0 0 1 .142-.349c.024-.025 2.412-2.524 3.16-6.782.182-1.037.38-1.895.539-2.584.493-2.137.471-2.39-.241-2.71a.423.423 0 0 0-.35.001c-.609.242-1.286 1.424-1.57 2.112l-.224.722a.5.5 0 0 1-.978-.157c.001-.031.044-3.067 0-4.212l-.009-.298c-.034-1.324-.143-2.138-1.361-2.291-.711-.086-1.174.557-1.322.802v5.456a.5.5 0 0 1-1 0V3.85c-.123-.243-.589-1-1.618-1-1.017 0-1.359.654-1.438.846v5.681a.5.5 0 0 1-1 0V7.83c-.037-.216-.587-1.22-1.075-2.006-.197-.362-.829-1.271-1.572-1.45-.342-.084-.677-.006-1.028.235-1.014.695.135 2.872.626 3.802.086.164.158.3.205.4.235.5.523.997.803 1.477.492.846.88 1.514.88 2.034 0 .182 0 .607-.381.769-.418.17-.677-.08-1.449-.837l-.503-.49c-1.166-1.124-2.395-1.03-2.895-.706-.201.13.007 1.151.788 2.455.094.156.204.371.334.629.525 1.037 1.404 2.771 3.212 4.271.557.463 1.497 1.547 1.497 2.677v1.261a.5.5 0 0 1-1 0V21.09c0-.701-.696-1.542-1.135-1.908-1.967-1.63-2.905-3.48-3.465-4.587-.118-.232-.215-.426-.3-.566-.534-.892-1.649-3.047-.474-3.808.974-.634 2.707-.55 4.133.825l.094.092c-.067-.118-.135-.234-.2-.346a20.735 20.735 0 0 1-.844-1.554 9.722 9.722 0 0 0-.185-.36c-.615-1.166-2.055-3.896-.307-5.094.592-.406 1.21-.533 1.833-.382 1.331.325 2.164 1.857 2.198 1.922.069.11.139.226.21.343V3.611c0-.046.006-.093.019-.137.162-.562.873-1.624 2.419-1.624 1.114 0 1.802.566 2.185 1.047.397-.415 1.029-.84 1.881-.73 2.158.27 2.207 2.14 2.236 3.256l.009.287c.018.459.021 1.195.02 1.927.361-.536.834-1.066 1.382-1.284.38-.151.77-.146 1.13.016 1.534.69 1.26 1.878.806 3.847a45.55 45.55 0 0 0-.529 2.532c-.704 4.012-2.726 6.521-3.286 7.153v2.448a.503.503 0 0 1-.502.501z"
  }));
};

module.exports.Collapse = function Collapse(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M6 9.688a.303.303 0 0 1-.093.22.3.3 0 0 1-.219.092H1.312a.298.298 0 0 1-.22-.093A.3.3 0 0 1 1 9.688c0-.083.03-.157.093-.22L3.28 7.281c.062-.062.136-.093.22-.093s.157.031.22.094l2.188 2.187A.3.3 0 0 1 6 9.688zM15 5.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 .5.5zm0 2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 .5.5zm0 2a.5.5 0 0 1-.5.5h-7a.5.5 0 1 1 0-1h7a.5.5 0 0 1 .5.5zm0 2a.5.5 0 0 1-.5.5h-7a.5.5 0 1 1 0-1h7a.5.5 0 0 1 .5.5z"
  }));
};

module.exports.Color = function Color(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("defs", null, React.createElement("path", {
    id: "a",
    d: "M3.076 12.951a6.994 6.994 0 0 0 3.088 1.8 7.051 7.051 0 0 0 3.717.001c1.186-.326 2.246-.956 3.092-1.801a6.983 6.983 0 0 0 2.051-4.95 6.99 6.99 0 0 0-2.052-4.951A6.974 6.974 0 0 0 8.024 1a6.989 6.989 0 0 0-4.948 2.05 6.99 6.99 0 0 0-1.802 6.811 6.988 6.988 0 0 0 1.802 3.09z"
  })), React.createElement("clipPath", {
    id: "b"
  }, React.createElement("use", {
    xlinkHref: "#a",
    overflow: "visible"
  })), React.createElement("g", {
    "clip-path": "url(#b)"
  }, React.createElement("image", {
    xlinkHref: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAAD3CAYAAADBjMJTAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4KmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNi0wOC0wNVQxMDowMDowMyswODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE2LTA4LTA1VDEwOjE2OjM5KzA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNi0wOC0wNVQxMDoxNjozOSswODowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo1MWNhM2U0ZC1jY2QyLTRlY2YtOTcwZi1hYjRlYzM5NWZmNmM8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnhtcC5kaWQ6NTFjYTNlNGQtY2NkMi00ZWNmLTk3MGYtYWI0ZWMzOTVmZjZjPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6NTFjYTNlNGQtY2NkMi00ZWNmLTk3MGYtYWI0ZWMzOTVmZjZjPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjUxY2EzZTRkLWNjZDItNGVjZi05NzBmLWFiNGVjMzk1ZmY2Yzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNi0wOC0wNVQxMDowMDowMyswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI0NzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNDc8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PrVLdAcAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAseFJREFUeNrsvXecpVd1Jbr2+W51t7LUClgBBRBJZNkYCWEh0hiwDeaZsY0j9uABzzi8Z+M8pMHh2c8zHs84D2Nsg41xGIIxwSSJB0jAQyAQAgNCEhLKoZW7u+539vvjO2Htfc53q1oI0ZK69CtVddWte2/d+vbZe6+91tqiqtj3tne/ff768+W29Ztx+/KWrbctbzkGwDEAjv7EVR98gAiOAuSI25c7tt++3HEYgEMBHAjgQAH2A7ANwBaBLgAEABHAUoDdAHaK4E4AtwGL2wTDjsVwzE2HbHnAjYrheiBc+7DDHnTNQVsOukokXLkWDr/y4C3bdwGCb3nAw/ZdOHv5m+wL7r3j75A/ufyWi+Wfv/RnRwLhEV+85f97yM4oDwLwIAAnpfcj8m2DbOIOAQi0+z0pNwoQDFAsILIGxRqABQQCxTB9LgMUW64HwiXA2iVA+LLK8OWHH/rkL4qEz73kUc++DjAPtO/C2hfc98/X/cpbv4Qrb71Yrtl17ZGX33LxqZfdcsGjbl6//RQApwB4OICDfZD6ABXZOLABdYFOn5vgXqTg3gLFAsAAQSjBDVlMH9P3gAGQ6aNiuAUInxcZLjp82wMvOnBtvwsfftix5x+0dvh1Jxx0pB534PZ9wb4vuO/TmVkADH/6iZ974AU3X/hEAKem98cB2D4fnF9LYNus3Q9sgSAAWEsBuxWaArsG8SIFfA7s9FECgEW5vcoAwQBMh8KNQPiUSDh/LRx4/skHn/zR55zw6MuPO/CwMQX6vgtvX3Dfe1/bD13+j3Lz8o5DPn/9x06/+NZ/PR3AaQC+GcBhm6rRO29BNlnfryjHObgFYoM2Ze4puEPJ2tPXFiWr56xdD4BAh0L6XPLnAUC4SRA+sRgOOu+QtQPP/Zajjj/3iK1H3PzQQ4/Ug7ds23cR7gvuvf4tAJDfPvcHjrnszuufAeAMAE8BcPJdDebNZuy7Uo5LecopcGVRMziG1IcPgKyl4M59+ZACdtEJ7ilzi5SgLu9asr0AkC8pFucA+PAjD33Ye59z/MOvPO7AQxQT4LfvbV9w7x0B/eEr/lE+c/2nj7745guedft4x1kpoI/bYzTtbgvs+XK8H9xrU+DKmgvuAC1Ze6324pKCnnpvTaAccjkvHNQJsCtfkxL4U+UQrogI56yF/c4+5dBvetdjDz/+qocecrgevGXrvkDfF9zfkB46vPXzf3jou6986zMB5PcH3l3BfFdL8c2W46Hk9kXN0rLF/jv12zngFWuQAqJlEG4KbslBXLJ6Dt6asevXhTK6ABIQNR0EIpcD8h4gvOdRh5z0npec8vgdKZvvu1D3BffX7+2KW74UPnvjR7Z+7Mp3P/aqndd9F4BnA3j8ZgNa74HA3hw6boPbZm0O7pCCe4sbifmyvWZsG9z58BBouU1II7Ya4DHdViQgTrhj/v4ng6y985GHPOCfjjvw4AsedODhux5x2PZ92XxfcN+9WfrXP/KDh16187rnAHgugKcCOPyeeODNouIbleN8P1IOmxyga2m+zYG9SEE7oeQTQJYzuA1sScEoVKL7XlskmGydb6Mi5WsRQ3l2Cgbj5AZF+ECEvO2gtYPe8TMPf+yOBx544L5svi+479rbLbtulItv/Nhw/nXnHnv+9ed+H4DvBnD6PXWaYA97bJ+xN8raSASVOt+uoBlMRl4rAe4RciXUXAhUq9l5KFlYSua2WVsLop4DWszhoOUd+fNzgyze8uhDj3zTww/Z/tWnHX3MuC/I9wX3pl+Tj331XWt//8XffcQdMbwQwPMBPPQeQ+f2uAzf83IcKVAEAwXulhLsKOX4UOfbkpHxipJrKsNz4Cv12QUdTz010udK2Zn7cBPwJdgHAEhl+1Sya83mX4iQNwPDG19y8iM+961HHrG+L8j3BfequNn61xe+/FHnXffRH1bF8xQ4YW8J6rtajnsQrd5mcOwzHnfVoFUzJluU4Fbqr6WLmEspx9V8rQJqKvT5JoObe3TFgBHhMoW89VsOOer1P3XKQy4EsGtfkO8L7vIafOba92/96NXnnPKFmz78ojtjeD5ojJVfHv06nigidzWotfv1uZm2vW0eay0Kl9ySUtZq5k6BXQ8ESz+dDojOTBtiwDa40nsK/F6PXQO8BnMb5GO6XVRBRLhi/8WWNz/9m77pL07Yb/+LnnjkYff7IL+/B/fa6y/4+Qd//MbPvBjACzbK1FH3lqBus/VmM/Z0O0nldkjBvaWOtcr4a1EzueOV2zl3AGQt3acN7IqcDyWQVSsyrrbMBqHkTeaOlPF9cI8qGBGwhCBquAwS/uGJhx322pc94kEXA1jfF9z3o7drbvvS4vzrPnLkh6/43y++ZXn79wNySs2Fm39TnQJoo5dQ5Gs7BHoZuxvMm8jYkvrtNmtz4PJse8rcBUE3wZ3YbbIwZfUU8G7e7ebc6vpvNZl9QtFV+QCwH3PAKwSjBowQLDVlcggiwkX7hbW/ffpRh7/2mQ847LrjD9y23Bfc9+234ZNXvvuwv/zX3/1uAD+uCf3uhco38lXZWDiimyrF2z47/25TYE+Zd61kaQ5uwZYUTDl4/Zw70MhsUbJq7bGFyvw85xbTe9csHWyAS4CqzdIVMR8owAVLDIgKjC7glzpgxIARcu6I4c//w4lHveV5x26/CcC4L7jvY28XXvMvB5x79btOu+imz7xUFd8FYKtukAt1rwrsjbM1B7fM3laoX14rQJrN2jlzBxikXAglT4E/fa2XoTPAFlxg5+ybDgPK1nFF1kaTtafPl1oydQ3wVKYrBiwRsETYtUvDP521/aA/efZRB5132hEH3r4vuO8bb4v//bmXf9NHrjnvpxV4YUwUUf61dcMQ+voG+sZVu246qFdl7Ok2oSq7sAZgSymjq5xzjQQiPC6zBJZ6GAwTR5wC29JOxYFtMIE+PX7KzioFRY8aTPmuBSFHCfLRBLek4A4pawcsU9Dv1gG7EC7fibU3/tD2Lf/jZac84GoAy33BfS98u333jXLBNW875ONXvfc5l99xzX8E8KT8m0bqmXuBq5vqeO+ZoJ4N5E0Gdhvcg2GmAVsI0V5QJu8Ht5l1y8KV3hUVr2Db0C3FDRNNhiY75yDPGXzin0spuzVn6pSlI6QCbCXop+DepVOg78ICuzDgdh0+8sj91/7w+x+w/zu+/7gDbsZ9FFW/rwb32ms+9NQTbhuHn1fg+xQ4DBCo2r+iD/I2i99VRni9H7nLga+bPhDmUXF/G6KDluy8cLTTBLDJWrptnnMPdhQmZNpAmbfVcw9upBXKEaT0c/DBnUtwDSX750CPBSmXhJRL6beXCWEfdTBZex3T+04MuEMHXKWLm3bH8KZtiv/ymSccdNkJB265z6Hq4b72C5196f865Fc/+IzvvX0cXg/gpQIcJjNZcMMZMU1h9/Rwlz0ObC2F510J7M1ST6dBWO6+g+nEtfkBvq3QbyWoDi5SNNpCWVmEySli7otfnele7P0qvfIiQs+wtXBRc5/T/6dyfvpXTPc1AlimTL8LAUvgsC3AS3dHef2ZH73te//qil2H7Nh939Kk3Jcy9/CHHzvzmKt2rr1MIT8YFYfzhaAU3r4c3yiDb9wBfy1vuilbpc321/OBLWyBlObaW1wfnT3Upn689s1bKpAmbNKwIBaaBdSyqsxn5fKxCEYGM+/2mbuKSqbAVFN+S5lzKwLWC1o+AW1T1g5YT8DaTqxhlwbcgAV2aMCWURDjgMPWlzds273868cduva7f3/m4VfeVxD1+0rmPuDvL3rlM67ZtfY6AD8D4HCf0WQTwdNTTs2VzDmbr8q02ODnZYPAlpneerNzc//71KOER1JSsjJnVjG3tblR6LeYHkM2+H1ddhXp/nZh/remA7p/yUZ6lJjar1gqCKSRGjAWi4rp4xZVBNXDAfzM56+/83XPOfumZwA4YF9w7wVvF9/w/iP/67lPeelnb/jQHwB4Oo+BgvTKcEUv8Mu7bL68ltmA1XIpSuf97irppYOKy0y5DzpKhDKqLbfhvoYSHPwIXDJXdMCX3/Vzc4yJv30OtVpC++cR3XNRum1UpM9BP18/ju7VX4dgZ8ZfYsCgioUqBlWI4unXXX3zH/zAP1/x0nOu3n3kvuD+BpbhX7zuvce/8XO//pu3jcNrAJxcMzBdPsLYLF2eGwT4XJDvkd/ZXejRZ+fWYvvrsAI/KLcvoTKVt6EIOyb6Z+6LpfTPQ+mj1ZTYmXXGgVtf1ZDvQxxLjfpxfi+3p+OpHBjUiZf+vWTsHOj2efBhEjW/UPUYHdPPLUvvLVCdHmE/OpynANeTL7nhzte8/J+//Jtv+sKtx6f+4175triXPu9t//T5nz7tMzdc+HKIPE00BbQK4duaSs7p7577af4+ZDrBhfps8zlFDPfj0kHGBXd9niJf42m8mYGdfX7BZHI0GS+UctsHUSWm2MxcP7f3Vw+ckF6nNrtKYaIJ9eeMlaTSOgXkMtdG6rCUdMBEqpmiVobbqFPmBgQLBbYppswdFWtRIVNwI6juJ6ov/pP3XfqgL1x62Gt++sxjzjt0W9i5L3N/nd8uuf59B//NJ5/0fRfdeOHvC/C0kmnpY4BlaXGJbgtQbTIiZ8awInt2e/a7+D6Xpf3jbRTY/d9FqAxPgBi5n+TgDZKyedOD5xKcfkN/O6l9tCDUnro8mdAg7oysR7ovBaPjYh5n6p2DCWR7kOSAzsSWmsFj6bsDdhZLivS6ajrS0kcoMMQIUX3aBy+69vd/5K8u+j6kJRH7gvvr9Hbh1f/7yLd86TU/c9XOLb8l0Meg6fjsYGQqzylfSS8g1YBP0nmBZK7slT54dZdHFzLfV4cNyn4RmD4fnbK9BqgNNhEbIGbMlWbR9TBwZba40lgo4DuogGYoi37ZIPZZqxuJqQvUMubS+leMGyAegCCKYDcEB0TFIgILVWxZjghTtp6CO04ftYzg8Jg7dtz+W8/9g0/+zD9+6vojd+y89wDp95pR2D9ecNoxV+7c+p+WKj8WFdsmsUAmpghGzagpoCp1vFXKt9qDRTcKU4aedFVxe9dWZWT12N1x6spKRLzHrcvOppl0kreLLIqARHmLCNZodVAonuUw47L8MY/VSABiFGNSzQ8LmSUFqTBrLaTZdO6/B0Aq/TTfx5IoqRM7DVAJhbCSSSxRkTnl2I0F1nXAnRhwqy6wAwFxFGwbBYfsXmIRFcNyiS3LiMX6EsP6Eov1JdbWR2C5hOxeAruX0PXlTl2Or3vqY77p11/+fzz0yn09991UXbz/S//xpKt3bfm/FXjBVEqnwq0EqSLIhJyK64FLstLSaU+ZQtsgnfrw9Jn6EdI8ULbR9jvZQ5eVTYN20n8WMpv/pYOU8+1DQrOtK4oBusQi5cL1jdT7tAw9V0NIsL23WuQ8CDCqENAG05Pnr6lIUYvl22gK+KhSjBwUgt0asAuCGIGgmIJaplI8AWkJpZlR3aluA/CTH/jEFUdiGX/5R59x4iXHb9+2V7Ne9uqy/JY7vzy8/cJvPfWLN336jwV4ge9Vg9jeOvfVQTyDuaLHYQWKDoem9+bec1NYcSW0L6UDfQwzt93ovqXbWyt8UV1/NiHdUjprClaLfud/M0Kdvy+mPOcyPKQeOxTv8kxSEfdbZXReRBq2m6RfaPo++K9Usr8aPnrtx+soLFRATVGzeBGPTD+3BsGgAfvHCI2pbkg99iIqJMYpacQ4lejlNS/H2wvO/sQVf/zTf/DxU/d2JH2vDe5b77xk69mXvPzbrtm55fcwGf6bDMvneg5cmMDX7ojL01BlJmMWksoKEG0z467gAnuzCPmqsdhmGgT7u3CfnQLTB3ZnTi310i5BKU3Wbh9VDPFFaFbuR1/BUXm4r25pPur+ytGMwerYS2lQmOffYzoIhgjsp9MttsQIGRUhRoSY+u38ecrmcQLWPHjxzFtvueP3nvufPvBtF11289Z9wb0Hb7ftvGTbP//rDzz9xjsv/R0AT+YBiVB2Dgk0CyUTK814UwaXzgybDwVpkXQb7NpFsVdl1z3nla8+MNrH1U614T/P2TLPqqXMuFvCSt7QGczPZkMGEQuuScfB1M6nhcr8YILeY+D8L64G6mksNpNLML99lMHovC0/ffrabmLiDSo4YIwTGh4nAouopj5NIYr6bwJnGmxK5Mm33brzd37xjz/+dADb9gX35t72v+jq1z47qvwWgCdYpNeOvETarMuBOxuAHQuiIP0A40sFmxyNbRT0e3IYtL/HCgvj2edhHU9E2lFXYDRbAo2k6qVSEXA6PFzoRirDeaDFJXp0Y63es5fSi7PPev/ynR53+iz36iVbpwy/i0DXjNcEzT13gh5TSc6ZWhIiO33dFksS5Am337bzt773Vec8G8D++4J7xdv68qb9P/GVX/2OS3e879VR8Ri4gswHcw1k7QZ77Z87pbi0I6M+XdUHlh22mDHa3agn6VcIK3aA8R+1zJ2DKa1r78j8cMcQk1YFZtlkgfpm5npXrnm5D5HOcWRBNjHfD+bVRVOai/tLAHBjMoGloUbUyckWFWyNikWMWMSIoFPJPZXiU2APOmX0XJYjRiCV51P21kpen37Jx1x3zS2v/tU//vh37G0BvjcF9/6fufJ3v+OSm97/qqjyaLhMG0rZzWV4Bc+a8jxd5AZkE+2U6G1W75XpPaNBM40VdMv3TWX4FbftcdLnSnJbgTDJJJXThgpas7jP5EIKr+k1ChTudr6NBrpk6yQ6HBzKjl5hbubwoZl39wgw9RAYqqlDUrNFCNYToAYNEA1YaNpepglIS0E85N6aS/KYSS1as3hMfyNVnsY8+iOfvPJVL/jl9+5VAb5XBPcduy7ZdsHlv/Ksy3e85xUKnAKfhTgIKFODUPLQlOvqIJyZgBXtQDV9RtvKvthl8x7YtfmgnxeZrBKx5MDWDn4vPl8Kq7NC2xWLPwQq8q4uo4sQGg40nTSDcpH7cKHDJc21K1TYCkiqHBSlDLcaPZKBAljXKigJCmyNEWsxQsYJGQ85a2tFzBlMgyowxlSWK6ATsVVLsGv5w0qQU66//tZX/Or/OO9Ze0sPHr7xgX3p1g9d/IKnX37z+14RIY+CAbrUuGELgEHIxl4s0BYc0JT/jSaD94UiQTzDrd+LC1b15y3Hqo9qe05WXwa60eOW6sQ8T3HETRpblUBmoK3OuMUN64SQciXBhxDA1ZHlzCIL0r1tQKW4tmw37Zo5+IUG06s56kAsuYnsIioQFWyJiY6jiiFO2RpREWLN3CF9TcZI2lG1ov/8XmfguQd/1Ec+eeUrvucX/uXpALber4P7zl2XLj51+S+evh7DK0bFY5uJgxtf5fFWkBzYLsALiq40A680B9+H90vutsObK9M3k1F9fmm7yM2NszYDoFnltV/fA0spNUCXBcsMls2zbekFbq8/D7UyEFsFlIAUPzabADSWbuaRnZWJwozTRpJ7xkKACaUkHyEQBbbGiayyGEdgjCbAw5hm3umj5BI9xtJzc6mez2uNSii6ZhHSY6+/7tZXPOsn33b6hV+6YXG/De7PXv69j71l18WvUci3eqCMMyz3zoNQR+YDPPXdQeznRkwitiTv9dwZbOtl91Xjsz1FwzcSnMzNvXsEHjdZLmMwSaMrKXyLzPseqKwOta+WmsFDFoiQ2CQLQzwhxczAi19bewDITF3hWwFpaxRX04QOBz1UV9Q0rhs1QOIEpG2JEUNUrKmW8jtE4pXTu44TsFZ6bxqVBaXGQd1kY7o2vnXnneuv+W9/dcFj75fB/bkrXvLgm3Yvf3OaY6vtqenPGUqWJVxXfJ9dA1xEDchW+2dyy24CvE94mfseNomubzQa25Ofwcwor71tHUOpkWTWTMoBBeHs7cUiXM7PldT1MWyfDvs4pjay9UFdOMDsAg+kERIuvqGpq37z+GuEYF0naeegE2FlEadsndHxENO8e4wYxnFCyWPqs2PqsVNQayrXVVO2Tp8LtHCZ1XZgT/7ipTf85qv/6OMPvvnW3fef4L7gy6cde+WtH/ttQP5NW4ZPtY1BrzNYJOS6JVP/bbIzUUobKqpYS3yf0YPYn59D1JuAE1tZ3JVZ9qq5eJOpZUWfL2ozbJF5DiU7C3mpVaIKDFIuaNlohkpKIJ0kEQgj8dIr1cX33jW7i2slRIQQeotgiDv6gbpCCElQMgF3qUyPgv0KgFbL8aCKYYxZvz3NsWMO6jwGq2V4UOLPKc/AVwbTv3n/uZf+9n/7q08de78I7qtv+vujbtq989cAfA8ceFV66zzy4v65ZPFeUeazNMrPBTcHt6U/c8yZ9NiZiYv9fm8MJbL58lo2AZZxUM/33JUmC7Mf29klsaWReMdSLs1pFi7W5QQSXJCGDnzXbSIswm545GLILCp9EW+VfoZGCqpuMeC6Tl8fkkhkyJLOlLWlfIwIo5bsjdRvY1RoKcmnvls11uwda+aujhE1k6udWXzP+z9yya/97T//61H3dKzdow3/TbeefcgXr/31lwDhRejQEsL010as88PpBVLFINWyLyaecEiZKk5SIKgoRhUEmf4uIau8VBBFyQkkMwunXBCThCzdtNSOjbsK87pVZmfWugEwxttC83NdtfVzDjjL5ByYIriWumKWCAhl6YyID65MR1kiICTJFFTvcGtnjOSiMpChYuWul2NTrUhEiRuefx+lasAw6TS3CUhOO2lkJtVlJdIBkTeP5MfcEhVbtY69hpTBZayfI2XymLN2zLxyLZkcEVPJrijjsHx9aMr8uTSXZhgqL/qjv/7UVQD++/d/x8Nuvi9m7m1XXP/L3w3gpVqtq1pgS2DK8oqMtx5onIGrEqxlq0FWZdl+Vp9zaAEFloj2M/gGpXigUh6d7Lyy3+4EtseqvcNaQ2hxmZxL3PnfuONiapxTMEv3qfwDb4BYf++mHhKUuTdgPdRCCmymnQKThntM2n2oIETBIiHfQ4wYErVUykeFjAlAK/+OQMrSZZ4d67NT1gqnz6cgr+Mxbaef+wF46b9+ecd335Mz8Hssc3/pypecdsv6nT+nimNK9yTJ50xRtLR50hklgRT5EpIpB8VsbqY6HeoqiBlsS3cQMZVjMaXRAC2fi0x/3JguoOmk1XoCaL2cNF3uSgVwo+8Wddpv6Wbu3s9udvzVzMelP/6qe7dsX2xKbVRTBMNYE7jeOtD+L9dzi3c3reAcZ/C55kMI+c4bRUTZ/BCFypr12HxMjUXamYA0CbRXLNk2RcHWMWJL7q3H7LSSwbNpBCYaJwBtOQIxpmwdU+ldR2FaRmI1wNUJTuAgw+IUMr3ix7zvI5f8nKpe9n++6NSzDz14y30jc9982znHX3/7R35NoI+Z44fz+MpTTBlUCxlIE/8z/P32dkMarw1ulGV6dLjvufFZS97sjcm0S+MImxh9zb9rqRR6ohdGyTMYJaTosvRSpH53cP3yULTZuddWCRYtFyf9LCwzZqeFjvaLcQBfetNvIHybltrK/blfOZTXC6lU0soAJQuliCGpwUKaaec+XNLYS8cJQdeMmmeknObcUkpwhVXfqmnnXJjnVvMx7//Ipb/27g9++fj7RFl+y+3vP+ILV//HV0DxDIVfAKC1xC0IeKTxFwNpSuQTNUpgBsX8kthVtxkYhBMrRwhNmW6FK1hZMrN/m33fsxLeBvRcC2BDnOwfxKPbjJD3WGY2O7cKsEBZVwzavjGNFc74sLYEBeSjUj87l7ZUVDi/tPqeFwNOc+1JHLIYc1BPWTssE5CWWWjLcRp5JYBNE7iWwTPE3IMn0CwqNI/IIstFqR6nYG+0/IJn/OkbP/2Kr1xx6xH39uA+4NJrXvYiAC/MYyyg0kqlN8aikZQhsjQZXClz54OBvz69L4LL7q6PD9Tvt2w3+3ykoPguu8+9ixthSe3VQ57Hr3yfOTw6w6l5hbQ0ZBWTocnJNItEDKmF/l0zeDCjNbutpGb5IExsEcMp12a0xZVACn2xhhFKywQjsesiadYHFQwJIV9LmTq/L1K2XoypJI9xyrQ50McpkDVnaA7q0l9PPPRi8aWrGYvq0FYBsD7GF/7Qz7/9RV+54tYD7q3BLZde/QtP3h13/ntA9xfK0mZ2CxozCdERhD6aIHbfB32PWMbBvFtaamAWnPl5ztj9sZfxCunx1LF6Lr6pFw4b89jtNZN9yVzgsuuKs0jS7jw7OIthoYUFQheoOKmmFCRdDOzfykZFhPCHfvOS++zeBhFe/TuSfdKIgBgFYQS2jhFbx7ESVlIwYxwRUr89jbwiECc6au6xNc2+tRBWIs27iaySMnTJ3NCm3ZbGbbNc+/sD+Pd/9Ibzn7yHl8beEdxf/Mppx950+9t/UYCHwCG8gUQh4ntfEnEEysa97D4IMISpj879NWfWQYjsQj06Z+Pmew7NFurFjV8bOlTZDcgsAXtOdJm9r1IJMJ87l9NDKXVrD+56bg45opsWT/Lcl2d/NLE0VYiloaIhwQQ3aQ9Otx2asp6ZbtrsLgvFEDFSBteyoFAwJBBtbcxstKkcH1IvvShWSlrYaFPQE388ccb5dgYmpdLbQKcEqopuylDjIR/+5JW/+KHzrjz2XhXc1970Z4fcvrz5FwA8jbHc/Gf13mfByS5Dx2HLZFlxbOL0tQE28/uNz27PZC3TSyXA9+/X5bUOL37BASijzw+GvkY+ulg/dr98wIpEnN+4TLNvU05LaJhjtUdHhwOOzhYSDnIYGajCBrA6Uo1Sz5+XE6h6ZlogQ4bQ/FWiChCDIawMqeeWQlaZ+uohZewpc4+VqJKDnFhqpa9O822JnrQCi5QnB1VK0htZ3T3tV37vnF9409s+d8i9JbiHq2/6r98p0BdW9Nh6nHlThZqJlDIrZ10/y7bZ1aDipmdv34dSEdRe3QhPiNUWPLIOKu1lVTYnc4ivQWgyt7/Mfm8gn7PcM0//DiWDDjU7E488CJNa2OUU9WdNT84lP+rIigt4w2KzMxFDMxWqNgDrikpSTxWncJNcsg+IqB7pEoG1GLFlnIJ6iBE6Tv31kPrnRdQyEstkFSSkPBNXlEQkcCOv0lpqLcm9X2XQ+cCa0RO88A/e8Mnv/OBHLh/26uAexx34/GWPOwnQnwJwJAw1VEmIUUvyIO12ZputSesjCeEWbUQfA2XwjITn+xzoa8MMrdXSVtUNXLwKy427ZJ6DDpfROeBne+4OCOcNHEpQimWLtQ6mbT/NgaRgl5aqIsuyTHEe5z19NrcE6KHlYmFAT1ZVWKDN88iVMIK6n7t+LiqpFE9ikNRjl8ydEHMda68tyzGpvjKltMo9szAEHNQ5U0c30y7miS7QUdlsK5tq1SMB/NRfvfnCk/bq4L7ltn84dIx3vAzAaSwECWalTw02LquNeINKb0bGeVZtZtZwfXqwP+eVYANVAnwfVVwCehzQoeGsm4x9v0XHGU1vvcmVenVtg7mj/W7Mh1OG5OyMlI2DU4GZLOzHYyJ9IaYEs71z+jmWiQ6UybktaBVkzQFDJbu4LZ1isn3uzafb50ytudeWANEBIQJrWrN0nmVnrXaRdyYSS/63RstWgzqQzABnFSBTkFtLPsTVHurK4hJTpxtgLb+d9oXLbnrZb/w/Hz50bw1u2XHbO58D4AVdooWzS4J41ZUFLrwvmSnXDSpux1l2ju0PCtsGVBTdmSz2rJ3QOrDaXrsvzey5sLaA2fz+bumRQOk5aTOM4rnxfBDXewuuVLaCEZUB7L5eATgYO2NpNoOJ6asV0vzyQdCpc/JChFAGa/w9tlfK9NRFskoaMhCWS2cK3kEjKb0ijbumz5V125EtjntuqB02GtFR0bmGezd3by9498cve87diZ7fbcF97fUvP3bn+gX/AdDD2XEUlL25LJ8ydixBV0EwIpfQbfgsn8rr6EpsknJyQLtR2MAltxmFtSMx02O7Mr1XqvdL5/5+7T0xZ6ilemsiWNFrDmwYxBrSbvjoAmBETFEXxMxI41oieHqrtHpycWU6l9vWSinPsD2kGlKPXa6AaSFBKsdDQsQHjRjiCBnHqtlOWm0UJlomqigwjmUEVkwaIrHSCkkFZK2kBlkXIq8oqBznOE9LEHqBTYz+w6H4D3/4uk8cu1cF9+13nHPATbf/zc8COCOIlWFaSqkak0MGybisZmCNwSk/Jqs9OFLAt3RUHpc1P9+U6LU6YOAsH0xcpg8O3PO67uAPArSeZz13l973g8DMnPuEkglYC+XzbHU0mNvDU0rhy/sMjA2Okgo3VgORVeqhgsaeyRNrgqGXhk6Pbmfi1V0lj72mA2aYyCqxAmiTZhtpvl3LcFEaeeWeOY6JsEIIOQFrnK2VoBNRNyEpJXubnEXnqzbxpfr0dsab3vGvPwvggL0muHfc+udPBPC9YiiWlMEaAkqkkZglr/jbDu573h6v0ki1S3Thz4c8LksfRex9lGAnsK2hropSoOoKqyZLhsFKUsyq2XZ/hoy0URM8thIxn0uSYlaH0eB4bMFk7Ol5B8r0dntIOQKkB6D5ISY7vzi5qFOVqXDpzWMvKZmcB6MRgYI40UxzZh7HQlqR5Zj6bi3jL4mJcjqmwB5jzb7RccnVBTurx1wJziW76NzG1RXVef3C977oZ97+xJtv3vmND+477vjg4bfv/OBPAji+9sZqel30qJ+UnQcegQGGvBI4Y+cgpJ8vQUukl/qudH8VbCuAXAdE48ceZEZQwsQX92+fpdsxmM3o0hTZPSIIe5dVdFsS5BXSPQQGu2hZHzwbDX4pnx2JeSAt5P8kVEppY8HUm4u3bUAQLt3pJ8V6m/M6IF7tm0G4RUTxQ1uMsez4Wox1rp03ikis3HEsJ/RcNBZATZ1neZUFVFcWloqaYCTgrLcXvYOOb6ARwPEXX3XzT777A18+/Bsa3Ovrl8qV1//o80XwXRPUoQZk4q7JCERg0XK4jN1kZ0ldllQLY0tPzWh6dEITKrHdzwzCP8sc9g6hhXrxwZfdfjzGLcTKvptfl3nCKXuC2z47UAafsqmWebaCHUs91TOXz2Y27TzURHxPz/rvzGhzTNPZZYL1oxbZKRqJzwSQ8cFRgbQxTQMEATICYRwJDa8fJfXaiHGimi4nsoqMOUunDDw6Smn2J48c0LUcV1KCCfmW138nMxDN2m6Y20I3NvGgl/K73vDWi57/tYJrX1Nw33rHW44G8OMCbDUjHEMvzcESTW8tzdgLqa+1AWspoZZ44gUgk1DEzrNb2WdF0vNt/e18Nh7EUmab3trf1olMfP7k7JUzYRD/9WBWAk2z58H21i6TGu+xUobXnnt6jtNIK0j2VhtKL14cT0WcuGToWxabA8Rm6CwptQHugl06SjY6XOroa1GJLJJ6bSRxSAKrqulh9SEfypxbqz9a1mqDkPHUqxcGGnHJxUg92T9NmxGXqI1in+V5dCYzGTx9betNt+368V//zXOO/kYF99qtt/3tiwV6uh0P8Q4tNQGfpQBws17uwyVlaCa0DBJdNo0uE0fju5Zlo4NYKmrN+hUHGAzJJdrMDerTQXNuMlmsl6WToAoVw64MbctZSxP1SwTs1pDQ7AGzt4c1QxTquU2QwVgKy8yWkung8fcRnHAEQLNCCC7YLa2ndUbl/jwkC6VqxaQQqAYM2fOMqKTDWMkqGREPuZ8eyR+tKL+mj8YjjfzJzVohRsjNuAuEltsmWlb02V1KcWe0JsDp7/7kFS++9LIda/d4cN94w2sePMarvhd2ktnoor0dEhsdWr64XTYglFHF9d+DtD8TXMYvGTn4Mtwi6pnwYvp0FqKU23kqLCweIF4AWSme3LPmbBuMqULucymblvdFyaBBUsZFQCjikHw7O6O2qHrqpcX3zfS51Axcn2dImd7eVys1Dc3ngP39WJgS2J9csiDEUk/zzi9IKLN2SVk7ZDmnY6VJNj8cqxJMYrQc8VgDPGu2izeaM2IQ00/zv2157tlpXTWf6kqFn/Q/fu9f/f1nHnyPBvedd35g6y13/M+fEOgjmQIKsxQvUw7cfNu5iJoem1HvlKFFGFbJ5b2aPpyzuDkYwNk5lixtEHOmrq76yJlaqPsVYMgXvEgzeppzMDElMLG9yk5sVHPDWpZTaWvuswJunAW5ZA8SWm13Y+YwGBoqPJGVmD3qLlE1nmiMpMNIRIXppoSI19sEN/5K/bkskoPKWFReg+m3c1CPKairIETihJxroqBqnnXHSmIxYhGeazPHHNopx+3txQFnvteeGYH1vfaAR57z8ct/4vLLdmy9x4L79jve8kgAzwf6+679Op+GR849uTc4lNoXB4OkK4YQSz89dDL2ItifFTOXhkHWOUPn55aR9EWo38vZvOQvEQwSMISAIX0+ZeKhQZVDQbRD6pOH9L3pc5QgDgAWCLJAQJ0vBwz07+kxIIPVbtO8OxNPc7XQM2QI9G9jkIBKMc0U1pBBLFMZsAFDKHNuIy+laiBIMA6r0lBaQ0OeKQQZqRZQUEkmh7mnztZJWbM9ln475FI8f1zGUn7noBfuv7WaM4CytJi5thbv8kbiOUfZVM++bAOZ7zN07m991Of//Mv/5ZH3VHBv27nzfT8moid5b28z8+MyXXyZ7oUk3gVVuwdD/+fRMsgEhrttdd49sK6XS7gsz2AXXEYO7UefoU2GBXmI1Qs6CC3BM31qMJ/3lvJY5rofRQXnmxb6GzopkAaxRFIxm0J8Qc4OqLxkUNxFTG4srjMVacS9lWqqUrJ3JqaI1q0h2c0U5DketO75Cmx9ZLzG65fFGC6kQIxswKDzPXJnKYEt1zcIvI1vBgFOuvqO9R+7/NId277ewS07bnzFo6Le9Nxabkerz5Z2dTqX7PDjLnMfBJYR+NYbmzXboXjuXRRkMZXedN+FzEJVALRxahlSDz1IKpJTNhsoWANlzCABQ864pJsONFeGVBvhSggRKsXFoNs9kMujy0aCyYeAWKMDT4nxqi6kxy41SlnxSwq0Bgbzgg8Y4A8Nl922DtmCWN39aNaBp9crZ+dhjFgsRwwx0UuXI8JyGnMFTaOw9Yl+imWEplIc62O1Kh5p5h1t6V2453mpH9FLC9HFKL06iHcrCmmttmdLcZ0L8Oe+/b1fetSejsb2KLh33vHBtVvvfO0PAzjeoN2ijaFBkTeypNKh537MZfpwcXNmR1zhUppBskGUwK9MWvFlfPZWq0BaEMEQUjCH6SKcSu9QP6Zye/p8ArJCLmNlgSABCwK9RCqLTExpzjTRXHqHOm/OCwNQR1mm1BfWYw/O9dSBdTLjiVYAs2DIJcFZNJmKRILdbMJZv5TgsHN0Ccb8QU3/H8rjZovijJRkl5WgUvzQFtlZJWoxPJTiZjr145Ocs/bT4Pl1mXOjMWQo9FJ0srny6Ko20aHTX2+0O64HrM0Bakxseft7v/jDANa+LsEdxx24ccdLHwHoc9sF8zabGuodgWtG5ljAtljdsmQGYEOr+a6fx3Y0lllpOTxy8OZLPl38g0gK+ICFoCLaKeQsRyzUfjkHKcKEZjMHG3VeHNK9GPSZALMCogmtxxW2CyZWWgn4wcy90ZgXCj0HB+AZ88PgPNIWdAC04zOlvd6B7J2CWyzIKrSs7ILAgXcov5sSucXr+gJCEoWMZWnfUPprGnuNKYMvqzAEKdCzL1ocyQttjIVGaogpTD01gauNIswrxuxeeDTt6aoSfDaj02Fx2zI+9/d+78OP2JPg3vRSgt27LwhRb3qhACfmpsOa8cNYPgoPCYiVNVnoaBp/pH9LVdSoStnUY0Sgmlf1KPxGpswPMkeLZrOBXPZOj5nN99QswJvscofseQ1gTBdXNN2yNUfO2SlmTrRqyVrWOGoSOqhOz2FAyHymScKozLVGY4ygpo9Nhh0S2hJYstdYSL9xPXTU9edMVNGi9poODS0EFCsG4YUBXFrnwzJqOpi0AmURg2HLqQbyN+eDg3nkk/94GJGWCGR0u6LjmgGzZQbORsSRPMfHaPZ9SYczzr7kGcUWzauogJgIMupEIYHabUFDMS8B7jv2jTjmvBOj8/mJb/nwpS887dRjP3P6U06Md2fmljvv/PsHCuLzjPaYFuTBfd16davd4ulHYUJel6kvrpmefMyFGMdMbEGeM9uMkrPwlJ2njDuUHrlm41xyDwil5F5IRsNTXi7mCCGxu6T+nAylXBdY1HyQAQGLlMFzyW6ppLbUHihTBztjlkU1LHQlc5AepxtmIYHhdxtJZ0DPvtEAZTSqg0hnR7fNzjXrw4pVBMYzTXtLBrCAxGGSa9Ice7EcMaSSO6wvJ3rpWPtupJFX3h4iZfSV6aY02zZjr7pmKGflGvCWfTYzsmJHOBqB2XJ9FdDW8NL7Jf7z/uxNFzxws733pjP3zp1/9/0i8nBDr8u/u6DJ5ELZd1rKNmXWQFm7HltS7CwktUOZI60KxEQdVc0KIs7qmpDVCgDlowHKYxhJWx9CmbVGDxSlrBMkYIxTII/QCRxTpPuovOhYAKi6O1qEWzhJz5nnuGlJHy1Qmm6n4F1dKt7EwANlfoOHLd+nz4e0DqjOsfPu7ZAzKi3+y7JKlobW146cMxzQJxJSnIjVj6fDMGolwmiqPMSw3KRUN1m+OpBUUwgAC3ECyjBG6HIqyXPGxvpYMnre1Gn80SKruwgsg9LY2rqrdHEuB5ppp5zmrF4+Srso0H+unaxNFcPDL732tu//4NmX/M6ZZ51092TuG679zu2APk+cFxi8HZBMmddm7Zj6aouKM9lEaIcEspSSevJiZiuxGjygbgbN6HbWJZf+Wgj1xpCyKCHZJeMOKd/W2wyBvpcycM7sIfWnzOgq1UCZYy+Qd2MH19+W24GUXYXIMrHSUEgsAyQ/HvfreQ4uHZKM0GFFj2KYcYVw47nf7dit8WQz2dxvHwkNQm8IN5K931haNJRDRjFM4FiMGJZjzdqZZjrWLB0SKo4k46yklNprg/Ta0/dhKKWTthvFJ00MDzx9LSce7rGbFUK6CvDedMDJihI+vT3vAx/7yva7JXMv1y/D+vKjzxbg9OasSWt1bSbnHppOKgH1a5rWsWrR/Wo5PaUkiHwvxVpH01pA8rWeenb6N2l+c7kZsl+XSlkIqJRtQJpi7htFwvQ8tfqKqU4BPk1MJCG81nuFM51Xc0tZL5t/x2AqnPx8BoGZ+0o6u0V6im82NxiqjXERZ1TEXskVVYkrDhkApdW99D2lRQZq9njZpsuDZiG9niFzxMXaWJTDRbNR4wAZpSzuEzI7nAJ0TODYiLCexl1MVkmOp4igRX48xlJAY+qnYYbVSts6g6q90inolX9zmR7CE1u0k8WDj3rtc859Bu9w0k8/+2NXPPuVwBu+5sy9a9fb9wPwvHqyRMrAscnY/D2Y/jumwpVQcnEr1It6zGb4OjKrfWJg4otQ1yhV7DBIVVvVjF7768oYC9SLh9JXF45Y6pUHCVhIzfCDcFYMqeeefrZWCpWVNtCoauqzF2Xsxeh55ovnyiIUiqrncUsj/6xGDYFGYqia6UaRxQYPoRmrSZO1K5rOiwnUSTWt++nQKtZMj13ZaQFIfmhj4o+nOfZynBxLl4leqlX0UXd71a9nnjlUEU2fTet7aQSGpge33HIzs1bfF2vTI/MMPKCvAff9NpNkVi2OBPC8v3nd+ft9rcEddt35zseI6FlmfQ7bI3kr4mZXttNMS6+Uh/VEI6GHtTKSEuT8LikNivl6LkNBc+KAEKYSOM+uM8jWzrNTKR6GQjMdZIGFLLAIw/R5SPcTqi1RnncLHRxlrh0YPBuKsUK9fToMDI11MNRWKxbh2ffgHldolr1o5tqGhJNdW2Qoj1FvGxqjhSDBMe6CI9DQWFCGcrwoze9BxgtFhhoDFqkEn97HZFE8FkqpjHX0BbJOQgLNMn8c0S8VmDc95B47uGWNklK6eKMF7QFqDhxTbGqmPTfflvkAP+u1//y5x2wUvxsFt64vz3sugCO6y+HNZg1n1CB2U6dnqLGaRpp5OdyGD+ms0UFHCx06ogihnV4kYSy/g1CwVcLIgDoDZ4VUzfSt0UEleaD0lszlNoQXpKADa64HRzelg16cW0kjH2W7Qm9nhK5qy+qnqyNKkHahYHC9d+2zUQCyygdHsSSGl4+47aFK47K8UndQxWIc68iqEFZoxY9xK02ZmTTaynNrp5+G12V3WWVENlGftVdosaUfrKvIKsEdMHPfp7cjADz3gx/4st7l4L7j1tdvF+izV+1E6Y7CTCDHDsGlfh2IFnwrxBaS+qesHRy0AzY+AGf1VBymYKzlMKhED6nMFjv2CizNrCSUUErlSgYpQByP0TBleAawjJgkZ+Zc0rtRViufDA0ltX7kcn5AtUhiYwgiysCv+5GG6toaSsgG4zSLqktDaqE5tojdzV0opjJ5jy9HLMYRw3JJ0k1yUUmjL0lL/SSORhSCnLW1ZnJhxVeSf2awrGRxgJYPEAuN2WTaEX+oZazl/hxuzrFB/twUkNbJ8s/+3MU3bL+rgJrcftvPPhOQx7N0oDfpK2MvZQqGzrFaDNRv7y7fEV8ItDtKAn0tjxakgGwFrNEJLAppVBVTGETNpA0QqYKwdxGI1pJTC5g1lMwb0wU8QDAq0qJ3IEpA0IAo6WuCsl8abltlfk4imVutFYgsoJqiNeqHOeeF/MYzN9x4lkuwt5c6BsyldAXg6kK9SL18RC212eRQU8UyartvLEiYLJNkGkcGSQCnhs4e1gFBF5BxWRBy4b1doyKmgNYEoMXlWMpt9Q4rWrM5rwfSstsLZQymhVg1Kb50bvRVJ9alyuyNtlYZM5jbdX5Oyjh14/tLnz/+45+48pkveTHeNHeCLOZ55G8VAM8U+sUyh6pvA6fpotKGucZPLIHVCSHVsszdMJ8yol3mpuni0USAUFQQJ7GejENIRrAVxiI3P4uYysnBoN0JGScQKl/MsVl7GybEW9Tk2JFVWBTgKIdI9RcPCR0PaaVtrhTzgaVUncxIEcqoC7DrgmBIJAnQ8qW6kMgje4fLBGcGIb8zmkZMvIHMqPObOO0hZqmldaunqhQADRjSxpBMVJkysy6nLI31ETF9zAGvyyzjHIs2O8+1OeBFK8qtymYMlV0pDhXnDK1skcTAGk+G8v33SmL+unZm4hTg2imlV8278+eXXHfbM6+45Ka/O+6kw3SPyvLdu951jEh8OuD3UqOxLm76bvHiEbRbn8WWpFPZWu2JbI/rTPSNzxhriqmHRrX3sbcZLDJOwFcGvIaQRCMZMHMikkURmSTUPEz3syilfkAIA7mnENpNpb0p1cUCaAP9Oz9OICBNEhhowEJqHZihxu1NuZ3xYav89kHsVN5y1Qk8Ix90BusCe7E5b7bK/JfEthswRMUiRqwl9lkYIxZaTQ4lrwOKVJYXjniaW1PZPY3A4OySrLtKs+uNlvqZXpdcVYI6BrwTgPT7a22+FuA3w25+G2zniH/6r/ynfzlmT3tuWa7/v88CcIIlpdhVtegJRaivNl5qzsMLzoqnspYGCkpencM2u0zkqHTQorwqYzNrYxTEjnLKBU8WwZL+PZAdUhBC1DsXczDIeAXcFlIR+YXkXrztrQPZB7PKyrqeSqWnFoPDUJhohnIKmB1igRBxwOq3i+S02b1tkXKmmFrzRjFWTrbvrn05qeQhspg02iqTPfH6chKHJEdTySKQ3GcvlxOHfEmrd5MYJI7RouYEsFnfcdjd2h33lBrg2h1Ir9oKI7AHxMpFj/Pqr9XmD+1tTrhq5/qzLrvkJtmTslw0Xv5Ups3ZKb2YQkENhQXzuCBTJ7UWHuptd9UivrXEC3BYOhFDkt8WUTUHY5A8lchDsQgaCqkiEoFFwIYGQwHpNJXiU98+ldkxCVGips2TCawbI4OBgqAhqQwDRpr6827ImMInFnxUC7e3lMXpAFRR2N3aoJahlv48mjLqruQCU0plBKgsqKeurYjQ2h9rTyzkhTb16SH/nFY6rOR2h1RsqknmmgI6c8OVbJFiVn2tp0BOgR1HFoNM75HtkGKsAFmsSwTy6+lJIuJAMKURlhFuzPTXPdLJZhlocYawgg2+7srzp55//lf//IROad4N7ltu+PHjAD3TgmPkWilKvXXooILi+sWKjiqNoDIjLc+pVSmYtbc2lrjNhq/MAZAvrqFcYKrTRReIPJFIcmkEU8vYzF9XWpuTQTelSiCmvjpISL02JpKsSpqLpmDVYEkeUtlRigq6ldsozEFXJv3qlvc1PuHBeYUH5/8tdWNm+RsN8JbCRRii+W8SDOmlsNbU2hYbBV0Jait+UVRhjSyXCMu8SnfKxpltpnmmvb4sGZoR8db00HqNZw55BcwY2dbSbxseOBkx1GkXO53W/rpu+2wPCqzgiq/wKZ8NXu1UDWoPpTOvvP724wB8ZTPBLevrf/90AMfZ9r41z7GfZqjNOUExgpBBsSxtFDeTFSSSQ86WVj2lWi/cHGik4C5IORgk4+zO2d+AXGLMBDQdCIV2SVJRZNpkKu0yKixKgJymFkNRqJUxAWyiwJiCOYtdtLSJk9y1ViNaDsQ6U/b6o+CWA0oJ/kqUqai6as3WXBGJDPR6oez/0kYuWkeQ0Uk1Q55Za64wqhnFeqHALtLygEmnjcQ6i2nlT34PKegjl9zjhHwvR1oqENWOrpy0Mwd1QcibvV7az46SOec2szfotfQYZ5Z3Pp/GpWuWuKoKMN8Tgaged8Gnrno6gL/wj9b03LvueKsCcsZ8e8/hzOWedLk6PINtZIG077n23OqmpIzw1vsSY2xg57fWwMABW64XLFJReDAOhiqa++8hSFlqMGTwzfTY6d9pdDakfnww70NDgx1AtsVSDRFFqqgE2WzQOKNYH/QK0iWuWbOYoL7uYBdW3m6CYP3gsm2ziFllVCYH5i+G7vcnbv+AYRyxWC6xWC4nm6QEkE2upiThXI5kiaSlbI8xQsknTYsHeTTgmrhFAsEkKHUgGn3UvkPpbF/MmR08M++TWtBB5jdips0+j/Tzl1572xlfveQm3RBQi/Fzh4mEp5jNjslxs15cQ4dDM5Ss25R5kK6trjBwBDEeYnAfawhqvdCb5XTVuVNKMCKBY2hYZpWSGgz/3Kq8MrlFsEiBPNFPAxZhslUaRLBINNRFcUcd0tcCId8JVQ/5PjK9dUAoaDw5vJAneaamVhZdC+JllByNJRNTUYc6oShg5IL+BkhIvBgQs4KZdBveW2b+joFcU4fk8jJgKESVaTnfEKvSKySxSBjzoj5rT8we45JsksRRSnO/HQzNlJhfquRIallns8DYBmwzz/WrYG1nlVTnto2KXtrbzz0u3fgpb3jdJw7bKLhlufuC0wVysie/MSOqOIEIG96hlqyOPIFOWVcPhNqDQ0LTs8MQKJNhQSNoYOfNiujy6KYg4oyCo47eBqkZrFoYW5OGbM00AGSYCDMC46AvAcwZ3ZlEVOOIzCFfJPYbY/iDodkG8UsCvL1TcBmXRSStsyp6fubeAMIfyGi92EOxX64VQjY6DCoYYg7sEYtxmYC0sSi/wnIJpD4bY93GmQPc9N0akxaJNodkb7T0eYuC1+ycs7eRbeq8WINHYFg9nloFKW/4M6uorCvu/+T3f/bq0/1dLVqJ57tPrwVW6GpXmu+JZU9NJbPaCbjaVbDeSJgNE6xRvUWvpz4QJEdkNEBq3+0aCIQs8eQldCjmBerINH75OxvliwiCSuldiyw0sdRGRelJgwqW6fsxXxjZzimx2QKAMQFrQUPqvxUqWTZJ625nByPiWp7aUwdCu9XQPvPHoWGfTaAZysGgWlFxQcDoPMqBykoLOu30GjEh49ABi+UyldpjAtImplmVao6IiTuuse72EvY+Iz65xkoZ5QyuamfRkUgpgnlG2armWNFHyeHkn6otQLZRD70KcZ9/rt2fO/3DH/jyO8946oNmg3sIMpwGDIi6uwPjiyPjtcFeB2ODmXxX8Cx9TflncyBpK/Rv6JfM3GInkuC04GJQ3VIdqFYLXyFBnpLLCc//lMG+dOGmQIpKSH9izrF+OzvBLCAYU/87Ri3WFCH/zhoQhPzjdDrAYtKvF+SmJBnLYxLpGCoUz3Xvm8bUitz2oAJuxLKDhHRGM+IfaJJBACeCdX/R/PXFZEVMC/bCOFkNhxyk2fuseKBNAV3siKmPVoUDzwBjRG52fLmMyRgXZ+9VoU6Hgu991f2rBLhqE6yiHd+1jcZeYoO8NyYjpP60VAovu8F9582/fjyAUye0egsF4kjA2WhKZm3q/NAJ1pbjli9I5dFPyah2G0Y5CHhe60Zlhaaq0h+dgemqMKYCUqqBZOJQLs46FsvIuko1VQiSKaQZKa/WTbHw0dMMOFFRJUyZXfJcPVE+RZEeC4nKSvVIGutEqVZNvsAzRCAJMwqukDJ5zdqRADY13KmKZTRcq0T0yc+1cS7VhNFoskvKEs3lEkgmC9lgQdMITGIegY3VRslwzGMxWwAt7ZtK9RQB0coyVVnggSaf9swI4dVjM5nS67y1QzPtAOk1IGf81HSDkVr3a9N9nXrJtbcdfwbw5V5wy+5dv/9EANvb2n9BJfWQHmBMAQbDVQZAM9AebKAWcBP375KhuFQHCRp5NDS4MRdKiS2ZqOIFKZSFQIQXJmhoCjTwmE0EqsPkCpNcXGLibasLhmlTxkR4KZszNCCKJh/uqVQftc61syuLKjDKdJsoU2YKyalGSmlsqyhxhJ/MWJMEgGZHU7MqV6q2WovFUfY4Y/zYOrFEer0i+aJpKsulkGQWkBiwGJeJMjq5pMhYCSrIZJU4ccaLHfHoddjVflj8lhD1z5bdiFsliCYziMgipl6gUQTZ8VNfWLIqUKWX9WfGYE3ZrytdWfht+0fO/vITf+j7HnNJ/vES3OPyMkxZuykouq28YI3AtEhKJhiVUFvODDaDc6nueke7yH1RhAc5S9eeRNyct1YJZgmd1C0XLICAW5OjhenGGSApz1KKr3N2FBWamsV2ieySxBZebz246iSmIB9TaObnXphsWq2gJB1UKjBDQy8aCUIGiCzAoSAPMuTN6UZ0k62KxRW32TJZy+c1+EtZrhOBZeCdXesjMC6hyRdNi0BkYp/psmZ0qEXHNVoGGmhnNpLxYXGlJBZAzpBGJKK6KWnlHAllllSiVvK5slfuGCzOzrVlQv/5sXTmENlx++5TAfxtk7nj8jIVyOPpfJv5lVvdSnHMLEESTZ9byS10cakadHz6mve24At2cAYBUjTKikV6tMEAYVJAoUpRzdlMi6+5l74QzVOr+irviS4st+J/PpQsH4lhFwvAlggwKWjGDL5pAs8S0SUWVt5UESTRWXk1ISigZKRqprQ1pPJi0wpIza7cf5dqQxaFqsrU2uy1BuMnblcaxdSzD+n+o+Yevm7kRHqXcURMwRsSOUUzSWW9AmtQ0mGr3QoiRZpZt4ZYhFupr+7003M18gwana/a6P3Oehl9VTCLy97Z0GKl1bE9NOCYcLEls+Dm23c/Hi6Kpgtm/NgDgOFxU7wvZogrofO53do4vWf3zuQAijWaXxMhxRBhrCjBzsP9gMxQJrrEl0KT4ZW65MYibsWtEZOQp1gmjZQ5OfJKoURiEdoBIuRPWkZlIanGJBFdJrLLgubg0+iszqbzuGxgRRisHZOk2XFRiZHKi0eDIbURQfyu7GnGzmOyyhGgJQe5tCd1njGzEG+hNAX2Yn2JsFxODqbrI2R9LKSVslZ3JPpprOw0UdrlFS3NVHmvF4s/tI64eEe2aEed5dhjfDuWaM6OxbTlCvo59apRmJhV1xsrwHqjNJMqayXwuP/yyvc+oMnc4/KyUwEc3p5fOYg3teTAzq3N08jpJ2AiYIburyKkMVbfs4sYlweR2WmkY08Zm7pCY1UG9vgx6Jhgd9W6DUWKNW/mnKN8fygbK0ap2u6QKo5RJ9OCoIJRAiRORo6jIo3NUB4zahXAKxk5aOHiew5wKscL/lCNFnMJPpV1Q6Hu5rI9Ev87FLovCoJe1j9o7ctFhsSlr4SjoAJZLkvGzsCYjmO1QxojYtRCVqmAGaxzCvXbgFvMR1eXrmKOdSC0OjVpZz+lUppfyrcy+csMmKbNdElrZ+gAOe0wVGXmMXP/nii2h5994dWn/jzwTg5uictPP7IGpNHMFIHI6iJENiFuy/3gmkErGKnNBvegdbDKskGxjDdtenNrIiC9Mr9jrF/uQ9uxGv86QmKYMhPPxhLCvXIem9U5cTSea2kBQqhouUzE8qmk1yrdHNOBFKU+HtCuXbLbRsjTzKDngWSYeWwl5TmKJHcVwiiqyYLQOC3/PVKPjQGDhomEkrZ+6DJC16f5di7BZRyhURGW40QldVJNJRaaFOsjv40TRe1VPqI6XlgVmFZOOSPiM2YKJnh0Rq0l2ThRuoYLJWh1rl9vkXrRGbRcZzC8+X7jkbfedOe7DjpsPy2ZW+MXHzkXrGyEx+W47QBaicnGHYn33ArFbqgtPlrXDykAV19pK97CSXk0hjK+KoIUnuW6wC/rbigL50CLEqg6SBZE2V4oBYUmQYnS5pOMrOfRWBCBRMGYLpoxBzqQ7JuysCVLVOFIRmIATSG/tipxHaiPXptMFKRm8ags5azjsyh1hBZT8zGmsdfUCiym7Jx54csRcb3qrktPnfZ4jcVjXAtCLskSKXLpHCmIne9Z62eG4jk+l34ipcMSZN3eO9tfJTNOlKdDN9cNM7jOz6UNGDc3w/Z3rKtS6XSJP/LCC67C6Wc9aMrc4/IyAXAK7vLbYFhi7dOU5sXoBaSaAyR0JKRwxrOgeTmTVdRk1ua29GKIy+Ql+yoFdjpExK350ULxTGBXzuwqpVQXksMUP7cEXkVCy0Un1hpCnXmLoo7LtHqsZQVZEJhWI5DKTohjL0TY4aANIoSUh5Klg5KKrGELJvWX1pXEggWwPiHeslyW2XVe/TOt/BnLAj9lg4VxJBdTV45H4oc7x1I1GZzUXXZPRhOIwmy1mXn1FPu6AXFENmS1zUk1pYOyz861VywvmEH4T7njjnUBMGXu5R1vOFIgD7e7CT0yHjoiOcBz0NGhrbZBH7pU/F4PrRqcc4s0mbwSyqTDhxdn8OBX0GtzQOQgZl25iqXL1uMjb8sQ6rvrQRQSSSWj6cUkMNM3U1BHADFJSUOegRdpaA50LdtQVJRKdBAlF0ZIAwRIGArP2xgfygJDJtxI3emldEiU8lsr8yxiUUE8HSZiyjiV4Jo02lgfk5FhxDjWTZ1lr9dYlwiYVbrghfdaDAwLSyyt95FobYoMqq02c66Co7nvhVs+EAVdBttm9dfaHBh3IW9K24vPEWTS28Ovu23XkQCuyWX5IwAcbANuFUzvyShzQR82WZ5vBpiThmxis3pw2Z+MGVCN5dvZeIci3+2569xeSiZnKmgF2sRoyFEoq0GqjnwycnA0URqliQJLTW2Hlg9E801ceUHze4tHvGmikZ9/SMScyJ7kRDc1vAM2XMwtiKbDIwqBZLEs3IPmXdm82YN6aKSVP7ztI7q+mvterb41UTcuh7HJK49ZXpsxSJj+fp1ZtsxTVGUmwGUDVhocZXYj84f0dnCK52sCACx3/8ND2tsE9y6dnrsNemtfr84If5gZsa0C5HqBKLSAXpoKQZgf7e7HLA4AS+u0UEfQwHShkfNNG1RC8UI3yxFMASxlgUJeB5wVYlVCWj3U18rnA9ZkKOqytTBgLfmhl1VGMm0+CeTVVmScpBCra4ZDGX8NZV1R9WHnQWBeScwminnRguQVSyoYsjY7ld1hmfXYddQV8pbOtBFkyvJjLcUJQMtL+eq+7BYtD9oZQSl9FAuGzS4b4LJYpJVfal8VxtN+uGsprFCU+WPYjOK6tWxf/tmO1ezv+flPXvmQgparXvvg1cEWqLcGNsbvnNdj6YFXTfDQQa+BVjcunSpiKKQWu51JZhfZ26V1nh5rz8bKBKvMMu/jBgLmNAFX2plimrEas8lSKT5l86Es0AtxuphHFQxDpq1Oz22kxAcqL4sRIkk+Czqe/o6FvJIzuA4QUQzGxSZUX7TEEhxlQMAaYlxgyKyypPAa1pfQ9WqLFMZJ+BGzk2k2XmCwDJVaWlxTIlrzA/pFJbG2os9+QocAD3CTuk7V5mb2RmMcJhJTRWYQ69KXr8isc6MxnemhVzHi5nz/lRrP/DO33LzzwQCwGHdfAEE4qUtUcSi5qnQyu25iTLbRpDBsgLBLp3SGo7haIE+6y+TR6MRFvHhFWrFJQfJtjdCAfcKbL+lAU3F/wFBuK1qBrDKGSnzyMQlNJicRwRjrZCGmDDUqC8bs71jdZux0QZ1j6QSuIY20pGiwM198yLxzCQiaevdxhK4vgeUSuj6RVWICyMJyEn/E4nmmxBmvKLnAbuAU6rPhbIkndmCSwqINYmaNhdQvV+64E2pIbdB7V1vwqYtmzdIJ0PbqsyqwsCIV7om5YrsIQbuHw2XX3nYSACxUbwaAkzYVluIWxDM9tHm4Hj8cs5wdViN5YKw/O3cB6hVSPYKLBkd5lRkyDJlB0oFXXlgR82hthg6NmENZ1y6aqJqZDDMBVZk+MoqU72f0egr0lImTbDSqluUOqvb1LwKSxHjLywlgnGSr6GOip6KAbYoBUMEQhsI+G3UNIQzQdUzIeELDdaxL+TT13tCqxa7EFLIcRirByzZOetWV/vIyZd8gKEq5QGOinMEDD2R7QJhYEUYWbvjsqW6MNZd1/TxbVwBh5Uuur1+1sWT1QaAbHRYpuONV25Azt4TpD9DpVOb67D7YJrgrwKBFsjnwQifw+1WArHCXrr12QM9Ix67+YbEFCfFFXGFHwF/RPsPw0kXrKMyaFSaQLRFUuJLJrjGqkzECiuHDNC7L3vtZWBILWJOzd+WVBwxAslKqwbuWZJuVNw+tDDUllqAmXXaQATpKytYjZH2JsezJHqsZQ9Rptk1rdrO4w3zUSBmxluclYJz5QR5ujinYI9Pq0eoO1ZXeLThmZ8ztAVD1KCIO3NqMZNPpsbsNLd0GK0rz6XWR5oCYQfBPeutffGLbQuOVRwM4wuqf7VjFGjFsVGT4IAsrGGurmLQt0i6GWAGXKe1hoF1evDVjrKV0vQ8mtIgb0ykYgRa7ssj1DGY0J1XFpsWoQaoDDB0AxSMdglGrD/iAgGUULDWksViegSfRZzkg7O8stM43GylMo7QFRKuEU/Nur1w1JKFOTHzxEQPCGKDLZbIcHtPoa8rccUwuKkDdh11MFmJTZjcbPtQBWGn7TIxTsEuko0+mqiVItb+PAAZJ/u/pgFBfIpOKTimavItxpIxaHsMFefTZG30RSq/kjjNklbnVRF7Rpq7S6CDuR1x+2U1HLyByLITHSYq5kZg0Bohi0Ot+ANPH3JPqXCESzBnYv8+2mhBhEkvo5HTZgN/DS+x6GZ32ior7mkjThaupFHKfi5LF2R+9ADKGw13JJQEBY1ZwhcljfamVrlqVjtMyhGgwByRu+WLK3Bnkk2EK1rythFRruZTXQlgZELFI8+wlsHuil8bdS8TkfRbHiLCMpccu3uJRJw65cvDyxo984apFnbWab02Sx2muHwGEINBRTRlebzutAdYOq0so6/X52Q699tnelfqBRmLAqsDM51l/c4muqJPhRnTYxCiMliocuxDgaFlZgofZwJKVmRidwPYBEWZ+JZ+tQdk4hY9YFtsqEYml0XIJbkdm4p5nzehDE+zGBUbg5sJc+tuMkRVWhhSTnV+KP/qEyuffaZKGJgqopn9DsD4qomRDCCAM0wxY3Yw60A7yLByZrLQmiuqUqVIFgaGSblI5rlhD2Lk+ccSXOVtHLJbVVzy67ZqTp3skU0Etc23+60fkuftEThmRZbWKmBR3I+2gg6aMnpxtJ2AxWVepQlO9PvHwteDIsbNd1mRkOizCXMlLlUKpDnT1bLz03ukw0JkrPeqKjI3VFksli2t97p//wnVHL8ZdH3rAarR7TnCmG4zFhk2KS+ZKdxt42mXDdRYl+LGTtkGu3bm5WN65qUpqrR3VapoZLJM5Vp7ANFaGciL1ANBUWtZXtm40LTz1VFYvNWAxCJaxRf3V8wFEpsWEpcceCo009+fR7NkeEHXK+DEOWEsWSbo+UUvHRCnV5LAiZVFfLKb/vP2jaK/BJBatPIM4ZeLSS6sbdwkILYcBN6fCKIFjZYyVr9AaUANaKyU4umovqOOGOg0ns/I9tLaqCx85HJR71NP7x6dIv37n+IAFgKNWz7ZD/zdCT1k1E8TiaKY0sqlACc/FuW8OBWAqdEvpGSf2Oeci7bhfOmM4kdXlOgwg5qSlfIgUP3UYh5PKXqvZXgnZ8dQZhdtJrmTRTLLRRZiQ9GVU6t1BJg6VdAIZEqawKPJUYEjuL7k6WWBEQJA1jDpgERVYXwfWpzI8k1BinGSb4ubXxhqJg5ivlHQlRqj5fBDBCEFITBQVQINikdqPqGlal164yL4fqWxnpV7O/owvR+q5PWqtPOd2aUxmZtQ68zVxIBlc4JcxmTNOjOgr1MT17L0s7owVj1oAcoSIbIL3utlZNvW9It3dw95uYbMqMumOreh5FXeSjQg5vqRf0RZI/2jzfHm7GgnwklUrxxRrsMr3JyB+X70QomgxJQQEaymDx2LQqGlUlFRm5ADLPueaLZcRqAx1Cri02HBQQVgu0x5sTQ4qKWhHGnFxf+icR6fsq0XkEpmYIjVrRZd9hHrbmFhhec9a7ndFgEGBGBKQNk6vdnGugRiVmKJFm73dcf67iHbGYKrN+Ku7g94BXhvNsWUFOtQr9cPMmM797BEL1au2+wt840B3ZSwdGeLUYLKnYzWTtVk/verAsSV18HxwBv14PCEBq7cih84EwD1/acUqmnd1oep9OWj5uaurGpoLgWihkRB19g+PKtBhSH2uVIdf5O0h0+5xMc60Id1npp9OIpNpqeEaFuNkuqDr09hLEzGlLOlLq3xqCa7G89ZnFqZnqgnalLXDNDULJYAx9c+jln51witSr5sMCop8M3+PLvdYzCa0nkEcuNKt0GcFJz6zdjXaNC7LB1qv1+6DcForBWk7iI2WCrqA376AXnOY7zasfrvX16KLgqN38a8kocxZOKGT14PLvNaBRLotgszQVoW2XXYQfmmXvogZwQ1uBu97fbgRGhtVWOZ9z9ARZCvFI78glXSSZZchs8hUsK4TYh4yc423bqalfJJcXNlrXFN2H3XaWSYxTOBZDuok4YxJICIxkrY6WkWXmzXnMVUO7iHk1kp5WSs0S7BEEML0/DUFLUQnNH+MiCEg6sTJHaNAgyazyInQE6MWAtqQZ+Huc557m7FSFhdFC6Ap+t5puqJ01rkDQ/ta740OF+2x4FYPpQ9bADi0zn03U3YHrF4fvlEwb+T5GNBfJ7Qi0a+4rTZDsTBLcunhAu3jbbQwpsUBvL+6ovUV93N1mA0oKAYW+RjOfO+AvCd8CvQlWTbFcpVN4pE8uw5YpPvPfuVT7x1kgMbFtNZn95SxY6aSFn+zhHKNdOzQ7DpQbxnLKqvaR49QLEJSvEluN2rPnX9PCdUsIaZojFRDl+yuMIqsYnopdkVvAdUcl9wHEpNqLLFEZ0tiXUEXNVekrtqz3RmV6TyO16Dlag9WBQ5dBOAg3SRKLuXXlE11Dqt6eS+lnO43dEsNDvzqgoI+rVW8sT5coM3hfi2/nS2aLeUWLTougo4VH30/GM43CCwTOOKN9IwqhMwIJoNG9lYftZbaAyaOes5+SLPu7D8vGrDUgUwl0iw7DpMGe3fijI+VXaaRddda+tJC9Miad0H9vqAEbMzSpjS+GuJ0mxCmbDukSI0QaARGmcZaUevYaaLfJlaeTD4Pmq3vc7USlSqmZEKYHqNgGELZWzozaQF6Gs5clhe3mE7GZdppXEEhLb09ZoQpOm/W2vDZtQu0HbQAcIAYTfZmgK1cXwT6/fuZ2Ao9dAWBBW02a6h8eXIpHZKKaabNc5ohEM0WPtI9R53jqgQ3f19Bm1XZgODTmlWoWasEUrwxy6Jm/IzOyxCmMZbKBGYpL/LLnvHJjrgoxQaILoD1JYbdS8T1yYZY0+ZNdkbJ2bmMq3g+LFO2zgEtMi1WyJJXSD0UQpiytUZBDNNfNsZcgk+/boxTxtdAduWujC4MNbVZNY/CIrSlhEa6OAkQbHzWKO149DzMs8Ns8M2QUOzVq1CsZrlhg5Fcp6o4YAFgvz63e670XBW8s5JzMwJqlagrC2H3vBQrOe4is/cojVOobIIWOzdHb5+h0p4uY/1MfPK8n0t97pfe4eCcWckoUh3UkfvmmLaILGNaSliu0wUWYTH9bEw+5cWOeA26c0RcnwI7j7cCod8BCvKOwJCiOqY+OiaWiIhgFE3EmekjQmKYpSmBpkMgImBEnKyj0oaVMZXWU8zFMrsOqaTPYCmLRQLRRnlOHk0bM3OUlzmYNuQRc63w9x15RaFd3zNxoysWtCjmPdd6CLtH92fXFNWf328ByDbs0VugTLIq+222J3dHy4Z2NLKpQ6cb0CuCVWaBPvu7SwMg2nLdjtVaFpsBHIUWJTSPHexvYMC4UN1g+YJLXDpNpg8h2TjFxJcfwqT0GsNk9xQwQLEAdk+BjWUtw0NqqzMbLPfNOTBDPq8g0+1DJY0sQuqnMQVsBBDHal2UY4n548L7Ft2MA8R44FGVH5111QoddRaYLONIIKre+3c+U3rKkP9mppyGDjNO6BCZI0XPAnbSD3J3u20LAFs2ZqR1yu3G7m2zm4f5guyX6SKrqob5NRLG1nxTTDtsUAF0hDCy6vfZDOBnf65w2c02zkVZN2xL8s5BQDvACv8tbRoJGDBgUXaWBVlDVMEiKmL2V9sNLHePdRkAqsos0ztzY61RMISJbR7Tnrc4xroWW3OfHCv6rHVezWhNCVCtn2d+eA7mIZX1hWOehSHQQlEtwF06iHKvH2l+rlJn4xH2+zrDt+xmRor2QMEVXGXQs1Vaeb8rsjgwb+rAQd5B1LcsRHQBZjQZHldeEevPMu9mKg6fDpvu4e18fSPv897IrC3tdUPkX1cO+DYm6dyV79nZ9kZVRS3L7dgKmFO9WX/y4mSKAJVFKtvXEvdcJ874EtDl+mSDlNFomcZGhcIQJP0MoMPUw2awfBx7dr1+mb00t1FxGzrU8iCjq4mm7F7vI1NVawafiLXRUzHd/bKRw6rVvc1fxfTN2mR2c0D4Hd1ufMYmDn1ewzxA1LNH1s7PpA+LRWUDzmW0GaCscxvFvHZLm9YfM6XrqiDp+JbfhaCzzLleuvUz7tVVCM+mNw54vQuHghhUve7/ynu+qhd5/h5v8ZyEKmsIsmXKqhKhY0Acl1iqYi0I4pCsn4ZkmJL+nmOaNeegrj5y2hhOqQPWRLLnmJRVkZ5exPtsCFBvbIfbIapamhKX6snZQTH1+VkpJinzh6SNjonlFtW11ZvdBebqdsbq+ofEJoEyl5U3Y2pmg3yafy5kUsoOG2esjc1gZA9uu2cXt0Ppu53Onj3mqucqbhGMyNzL26Ko3HJ0//pGiOI/CW4iL3uwxIkIOyJNn188ZSKw0IC4e30yM4yKGMe0ACGm0dMG9j+0GKAup9d2YFyCs+aqHrXTswAYae4Z+TdNFvXVEwlFzdaQbmC5+1Z+riu8wqW9ycqlAvO+ajpLgMEmkPPZfrxqvuMC0GXaCeOK67iJ/vmuHATaecnaP7VAXT6A69n2MJhlzw8C+xyk2+Ovlg40CMs0DiojPZYzDG50N91vEPsKiHCgKI0lM2abbIUn2lc6HsY0BB6hoyBEhYw6ZWVN2z6yx1naxCnjtP0Dxv8seYjHRDmNsfZ8Qiiy2hK06bPhlXHpZ2N9TUQsK6zOhBX+rG1skPl+O0CWOrCN1xa0fz01G1dXkVesY4tdKmjThfY14x3Cy9z8SWY2q9BtlgtB3A2ErfZb0pbdIrDDBUVfpMHBl/vf6EZsWry7+0eVHxTtkYXcXTqO7AWxuicX91rxIGzVGF+E6Ted+xT/GqQZs8S23xNM3O5ceGkWcCqgC2PsiBHQOE5X6AhgTGYPvJMra7GRV/rk7Zox2Qnr9Hg58JPxoYyKqIm7nRrjSBdvPpxKn+xnAgxuSWWdhVRnj2pR8kAlM9stsWuKEoMtSx+iAjKzsjf/fFzxfXAlMVPI9RApRX/TiG52lt37edXNGC7uXgC6E9CD+l0y3a1ygDPxwtvT+YD3Z53MlK0bZXusuE//i/H0UzesKgSr6iJbTawo1rqHlF1n0z7v6pc+pj9cALBMB8Ew+Qtp7Z8DWe2IBBTztXLVpdyXU8I4QuNykk4hWeTFAB1zwCq5xgHj6Fb7RFpwr2qycnZSkahlJp4DXjRVB3GyX8rstlG1mD5PbK9UQypleq1bRgriTYsK2nK+/WsIkDTkTrxCqjFeQ9SXa6bnoP2AElooKA58Y7wApnrQhjLqOx6ZK8N1Hp7uZPmdC0DvtAEwot3DLVgtE7ceFlPgDq607QVFxEamiz11jMhmMY7NgoGKuSKoLb1Biwrbj6Gc3fXQk3QlCdMpisd2ul0YaDyoddVxdkHNeU+m+xBNQubJxX+6ndIetKh1NW6k2nkEdFlpXTkrF7kmuYyaP1P26I7VbUV5+yYFPHLAU/URc5BHLa4tMQV7PeDafpe9ynNaGc3RLVQfsv5ay1L6agSRNOQA8e7bJVram3m7f2tnHOVZYr3RFq8PjhuCz65Hn1GxNWSZ6Wt3LkR2314zRnDBurA/kpxRq4+Y271tsjqrhSPdXjtoc3RPMZhBmh3HzUEdmAk4zBwyHhrN/bD9Hae3oVzl01bQmMZOEXMuLgUOcz2z2bubmWya+to0C07aTSrT6RBVQSM+LC6A0/1PlNEIXY/laxrTax8FWKa5eCKraA5a9hAvvWH1P41Z/ZU561FtlkxjtjJGiyDf8VTua0y02Jrt7SFRA736jmk1XwDLSqu4IzLqTj12MU9ES47KvXTcqNPzMtYZO2LWimOFbZLOgLBzGvE5O+RV648A3L4Adt4KbEvltQfOdWbePO3YFvtymomfhecGKmv9U4lonVzyH7kne++V5dohk6i7b3XlenTjv1pJFBM/yd1jpPtIF2/yL6nldWy7cg0ErkRi9dmLOPkRpQM2pj1kuRyHOXy6f4+U1jT5gGOUukkzSl3kp8m6elyUgM6v3KCWDKGqU8kstqwNpFuuhv/14g1UwgO25OdxmJAdUiwrguyVk1NCRrFHVPum+pexr2XunYOKQaTZ0TSKdUAJTtrpZaBmHEWGh3NbRAwgqO1VK6tIMg4k7G7zlNbtBW0Gv3UBYAewiy76Jez6IA7oBT3UEi1dkk1pBvqVRndWBVj/DaCVwfMiAXWlv/28AlxD+nOHTqFSSS7l8RWAjK71UBohhVQOexhzcAEdegUYecBzRTQkFNv1YlX4OB20SqzoIjTueX1kc+1pWYHmFT8xr+VJ7qt05epyem4axaSDsh8r78mmZfZe8xaQ0XbnvkL2MdmpJd+X0HPIkkqhKgFmL1hC6zPzLf+bUlxUmL90UHBOT1eClu9lkk6IKDvA/Xb5wtCjfWVtFtZ66MUe0aUzfnNKsjkftgZRxyZIL9pSpQDsWCiOuklwOQXugMpIHTFP18wvK7NXfSkeYAcfEcBaejZLkjoumiJERNsuovv5QGOikR5PyYo50qEyOEDLyISQ1xNN0lIt2VPVZUyZ+mrxtpj5kBLtzDaEXhd1XwdNFQbLqNAZ6Ei5l1ZgOU5/shigMR0KMf2t4tL10AMw1hQgMo3IIFIyr6oWUmvO5EoiEkaqjV1x57qrO7bdnm13aJSd23QfmZaqlJ0hVtRV+uJEUmFv8Pzv/DFSh9PRQZsGsjFWYAoqZ2Xnj5YDlK2dghuZdaWeGyDqq5YRuBi/aSFy/I2Il9aLXwBgd8OO0obnkjPlbrQGDgPmXVPXwRTK6bvrFDTBZVJPE+lpffggmbKt0L4ua6QLIqVI7UPJY1wKdzIQLddVDhrcnJQvDXYPqM9zut+h1rIZTCvVw0B/JY8kMppCELMmada4nLaBjALoiHoVp5+LCYrS6TYZNedJiBA5ZXI0rQHJQdfbgJl13KWsNut41ZFcqN+G8zXn0Rx9RM7KfDAo3E5vlGqjZHTNhKCJXisRZUsrIkpFwX51FXrojJxoV/gqQ0Slamd2KaC4v68joqzCAVbRqtL3blwAer2UxTSLdMGtpxsu0jhmqOWpuZvRZM9y+2lfRmbBpac+OJi7J9rrkUJiPa0Zj9R8uIwEioU6CC0c95odqlE1ncvGyiOUfdZl/FMaRD/jz6UzZeoyn09FXVmVkfZe54BWV8I3iwzdXETdbfK5MUZIFCBO5BTEKa6nAC71/mSrFMdUOkq5bW4qVY2ZcgnEPAsPNJqCH31R6QsX7PmvOmaHFtjMXVhhuUKQWo6api2LSaJUPITqwVxJCCE+0c3Zx9Rng0A0028nbj1jmY1ri1bDh9JMCmZX/PQQ9Wbu5Rhrc2i4om/auGLOff0CurxW425A1kzs1b51hOrY9LoiPc+zaIJVZKC1qUhXnpc38tMNNC7KWzqCA+s2ONQi983qCDRZDMyZ3hJvNFYKQggZsVXbMxtoU+mw0ToC0zqikt7YT9X1UNofzUUmtMRapscIjGECzfL8qgRtztahAoIxFdgxnQAqU+mOZFgmllUFmu8Wz/Fc4ASBZCMFGj0JjazmYFglgFCa0p3m7b68z9+TtlnUTMhxnAch6aWxKFYt40lGB0X7bWwzV+d2QHWWjTH38705zyq5J2bWBK9iiShw7ULWHnuNjh9IyOk6jcDGCmmW6WKlCOm4i7jMGWQa3Zm7pDK7t+q3xRqnMZMQar2sj5HLYmXstQJyUrJmboIYLacdkRraKkG0gk75Hsc001aFQYOQy8Qpe1dUXV3GjVUTVdbGah3hiAVPJmplveCmCzraaiUv11OZFvAlME1HZAcEwuFSlaI6gWigPnwkryFKu4xma5mBT4dm7jFHtkXRSnaRVO0UAI17YxqbqXk5tPueKy1TNaBWC5bbXimiSkCYqYXKLJ6yPU0AJSH2sdBblcpfbRJumMmq6vSSHv2efm/t98zaLjLETCaPKw4FAXDsNx14zULkkKumO1jSTdah2K/2hOUulsA4tO2/IoFZHOCDO87q5LSuAhrRNayZaSZyFs2sOAvaqZ07+5fEiL2VKKbpclD0oYxmnqFNvs2m+GbNhLo/nWoB64z6IGd8IUYY4qTJZs5kpNHYmAkqOaCFgjZ19wWOyNmZ/o4R0DFQ3WkdakpA540fiklgkkCpMiozSrFUaEhVe5Wsr/bQKOOvZDlcJJ3uDDWeOtQqhDIKIzME9SSWeoBU0ooWXfeYpwLurx7oIFJ4xxXX767ojYXNIPpotr3SdEZsIv1ee5iBm/N9Hnv0QVctAHwV3V3GO2HN+hYl8OvnofbeOtDDKrr+ktlrOo6dpxTQE5WU0RCkkl3M840zJb47y2KFdAUy45EmXX58hUgTiuwwAfGAWw4Y6ZXaTNiIZdRXZsPF7Y7+HflrIzCGtMBe6jgrShJ2BCrN01hwlKm1yj5JUadgn1Z6TPdRUpKYP53Qx7xHO/fcIxNRIspmTwbf1KPg4sggkjsY6subv2ZaYNApu0XVlsjKiw60jtyob/astGIokW7rySV+c4hvjiuKriuzOzPwGk34hhpQv01UZ7N2ek5fXehw0lUArgdwhGfl1D55bhRFwSiDBZt6ga4cjC2DzGlxyqCq/twwA7zFZlZtZErFKm9IFE11JBdp6aUlo0X351HHHc/1YGizdUFSaIKqOtuViNrXXniKl1lscfLvhuYARx2FxcQiLOMv2jc70lhNAcRhui9FKd3zASIiGFQxImmes/1DmV0TYSWNyDxBRXg+zmdGQaeTCQOhzzBgHFUFDqkHZXFeocNAHmfsQD1yyeK0VLDsGFMnJCG0Wx2xpgHJOhs/u2W1tAQVv2hwbuRVr3qdpZ2m214vwFULCSfuVMUlJri7bb1ldzUeaur77TDDLLNkFilUAzXiB3tQ+NI7YGMdjRrv2r54g+6zEDmCm1kPnU5K4dDHFoX3mb6AYVobWh4dEctE6oa72mOnIK+9dVllWdhp1aAsIeCcmUdizkUBxphILloJLb56KxeqVNGIVn81IxzJaLLyrrA61lKn+7ZltpoaLKo99BlUkljn7tx7Kx0SlYSTA10bL5+oMyuAtD6eXUWkdZqAfmr3IzKbUdWU2tLbJKJ9AI4rjh5iFdpe/JLv+0/P2LlIt7oEwBNmJSc9vE972pyeAouCsfxGuYyP1hKpt36Bj8PuoEEaci6X3aacU5htHmYUpb1fnl1GvUKshxG47yvxow2C1lrZStEc8q9HAFjUKVNrTBLOioyrUmYek4xCiaWxzKkp1PlNXAfGtJwgiuW8l+AWYqel1yKLTVCVWkxiaTa8JzaaODaa0IGhxHwoV02eu6PKQfMWkWLcqL3mTpsrQ9ohZt0z5sQjUVrzhZGO+KbW22AmLTPZeI7NtpFOsmfxpI5hEoFLAGAhW54CTf+Yx/OjRcwhqfce6KMScr7ocM7d0/WEjLycGZ0+lwUX0rOgrFm69HSaCIhZVZXlqurPul79pCT505lxRSa/xOmgcmsitCGxeGZcJX1kIooU2hQqSSVlaM3z7BzUMQc4ZW8Vy8bAMI32ltHWfAgT7jGm3y7fDzrZW52yXSsSnUdlOQsHnSSeAuaVW+pqKCpSIqpEIrmUw0ALUaW8Zn6JX0bH89eJylAprSjoNzuWFtZaRs1zSd/pnPJtpOnHN1yq1/cN8iuFtD8WE76OVo3K3Ne2H7z1EkbJLp79aZ/AN9atoMUtOcP15tW6OUTB/zqJgy0qDuRqHU2aMjxzyzfxh/LGf+awMeKGdLmoz+pCl8m0yE9jRshRsljpr3M1kcpxjaGW5pFGXoSSq1LmV3rcMZXwIMZaHuXFDP4RuKZKLD5melWkOWidQ4dY+d+iioHYaDLjMJo1f5EIKLUkrRz0oEwA7M2wSeqpWUSS01B6nnx/6Es9a6muRiUmndVDEW2vP7dMcKN1Q/7NIOCqK2fu3bo6Pa/9999ycQ3uA1/9Rdz6yg2Oh9TwZZ2xiGOY6Qoke9W51iHOufmzHU1pYVoNwuhqeukziCRt71v7eTTPu79ulzmMvSrEXH0myzCxBWYLuSbyyATu1WV6A815Y5VpjrHQTDXNpmt/jfrvgmNK6dencj1U69AsIsnTg5EqBRWXsbRzwEnJzqEsDpheH+65AwU7Z+ji8JJfZSWFmVoftkwXDVENoUWpGlBDPFFzm7Qf0Ki/Cp21exlq45lulv6pn1dr9+t2DKcuC7djtX4mbmflcwCbn48LgFPOfNAXS3AL8DlV3ALg4NUxyHPbPKde0EePKw6dcZVdfjfHr5FOgCh9XcpqIu1TWHkerZ0+XVCWw5czP4OEjgdtD5pp15bFLmHxy+iYtqWzsGO5qQwfKFsnRDwj7zn4RkkjLq3UUq0yz5KtI82xE0quIyYP4jSELlz5iEqGUSrpZ8wtmBgyAFP5nZF0Jb44aKVvEZtU8C1Q9gtwGVuqWX9RldGIirNTIBcUUx0kh9McTWEzKca0HxahD07o4QUic5laLfzch5QasYnajaINuDhvukhvtwjwuVIhyYGvuE6Az89tbWidJxWC5R4UHF/bmyoKh3m1H6hiI5fSTb1FdQFORlyRBCucbRit4VLSVPPEi1ZHXh41ldDUa2uSbmpMZXlMaq9YWR/5fRxT5RLT7VOllW6nMU4+ahqpOlhW0E/TxKMYIkZ6LpOXWr0f3h8WScM9BZ3w2Ao1W1b03GUgglMyxVTEbhMx16Ja5lmja1ZtDBOsFXK9sDZaq9H9uurGe219G7Hic5EVi61lzgi8f38APn/00Qddxz23QnERgG+d6W5tuSL8bw+siWOejZ22XzugGp+vwaDLkl05xEVRLkFlRnNroGhipqmfp4fK1zbEnVomS+mKpMy/tZFuOp81ZT+zXIqrud8yY9ZJzaWx6rOnMlwrQYUANKWyvFQGoy2/S9bPmbtk50wfXaTDws711clXOaNKqkCMWQxqKV7HYyhgWR6XFfpoOgRiHmdFO85iqyahaqCOg9TZFqthoZn76o27oAbEYoWZdhYWGKILiUdCA5arKZPnAbZ+Kd6bPeX7Wjn8tTP3i/JNq/vC1rM+i11nbzKVck+9cE8nl+g8J+aPYUWRISvAOv+4wbb2YHtL58ziSOOtn3Wnrwc7x8ysadPqiWWfH0kU3deLuD+SbLPIN1FBM80sshyLWoA0VaKbMmcol/PFoEEmmmmMphcvpJo4VlAuAWvqIVxrdmVpkp1sqZEydLTZsp7PagkumYaqlXedO5gs0bSZszLQMuEZ4JFdPXajkp4bVosoYmmrFZhze8Y86aTTDLNjgcw5pcgcpVUNm6T7+mK1ayqtBP7sI858kOGUqsqhn5U9ql7ndoPJpuCzeZPCjToZlNW1DcHFnaLSXQITO8h87JyZQnHak6XSuMpgEXn8Rl83Yoj0eAWp1lLuIgFgNXhHophKHX8p7AisuLHEEtTT7RMgpzX4i6hGw1SmxySkiVkI4wnNlmsgtMSv8QsnGqhEnRxPDPklAWqqDYNNiMCj7NRCJS5nWHhHefoZKCvr1Yj35lJKM4Ly2Z2CsE07ulLFhVUL+3TGzlM3N/byX9s6yGebzC2Lx54PvOUGAIfvWXBzpl7VtbMRotJoBvNZW7ACOtB+uR+lGvSZGTP/SOw/P507cGzVIGxGQR5pmoE25TI92PYjH93c1+cgi5L6ZakBV6RLGSWHDfTIIF06CECZPUZL2OPgjeMkBFKqBuDINNTW1EATQw4pY7H0vaiVYx645I2ZqiqFSx6Jzaaw5b84j/fQgWeRsu3o/n5BtcMJr/PtZmUQIet5ZVJ0PmnSw5U3IKM0WdqxznxqzGBjb7HgKgJL+toNj3zs0efnn6tl+dpjr4HiUwo8fc+CG22Aqj0fK3Ls5Zat53mLeEudK7PlRvEFMxvTp8vGmxv4rG843kqM4VCyfX8ZOhs72EJP1VotSRbSKJk6KCuxcsbOgT3tqc6EkvI7xDZjKwU4KGDLiCvbHKdxl6qbz+fXIE5kFjWzbl7I2BIhS4D3mFeE+mceuhKI5l1TlUZeRnDC7i+gfh0w5BYhpWCgTsevnxRt11Yqe7r1sjIFXjCkpJZ22iOieLKKdNhsTX06wwto+nS1K5ToPj71bT946jVtcG95vKjik1gZ3HPbNqvFsajl9hSwCnAUVH8oUJaN0n3oKppqFLaA03rZP4C2pBLpLVtXJxPw/TfcHEQJBScXVF1YxLwElVYJZrFICmVNT/4cpqeujLRCMSUXlfxaWYAtHQ4jpkpAyR0QJBHFEhoHQvZJ/KLBpnuRylhTrRZZYme9ZpRFk4GSSU3fTSITuNtQBs6aQE0uNlO1oA31lME9ZSgGIIELZlnWqjCuMjyp4QcSx/Xu2hXratroql66SzP19NROP75lIZ/cfuJ26ZTlJ0KHE87H8rINyXTT2xJ5C4bvb1vGr/cBs06g1nPNO5/AsMmM9Jj63MYhpbvZibnkhvIwXzEUz7TBoKF8cIhyz0/LAkqGpEohgWWa9dkxVrBMtRBVipNKrCBbmUUnEouCWGpglDwF6ojq1MIIOsh2OY61H9fYan1K7VpfrwFCTDbH2DKWxwnYyut3I1te8TycvNqy4irz6amkF/JR8z1wJcigEIoYSGV7D1ULquX7CWRaOOsp4ANTnTpLe9pGe+3O0U0xY9gomB8K8X0cd/IR5/P3FmaWf8CLPqo3v/pGANtXZW+BUjCFmSzsJvhdEktVhrWSTfsraN6ysbLnFjdyctN5TcZ4Deif00W1gBJHG2WbFknBIf4wYE64iEPCM2FkmAI7Bgryoemvp4p+LGMwkE2xKdPz3yASBmCQ97q1pJg4aCW7FMScaavKwCNs9ubZdfJUEsnEFuKdJ72fXQzI82ctGvFi55QZxQS+sU95VY8RmObKdK4lIyzX3CzRI/GLL82FV/u6sZv0tqJw1p4xV9jTLO7Bvsgjr04mV+DG4x57zEf5LhfmUQ980Vew49XnA3gGOr1DZ40b+vu2e21/JE62DWZFb4TF/fZc4FO2dD+T77N2j9PmyywksT13NuDznPhIlk6BbJMCRGkpgUaXtdmCCMbKaCKSSJVbxmSqMKKAaNnWqKi+SjlOPXEkcg3Nu8vvN45VHqpKCxKkUHQ1ZW6NoQU4oxI+0gogQuJv86tsBBxuy2X1Q88+5LUkjxygUisds56o7BOjADRBTfZXnc0pjOhnRZlqPxV2jQm1HYPpzPy5EXto3/MM2mq8ZW661HjuNXtnzj/woC1fmcvckMWJI4YTzpPlZc/YmAHmBwIjfX9A68gyg091R2uUSTxeafp3mae0ETxmGGKEnjc9eiRtd6kA+ic2SChSAleJJFMIKsQTz+UyB/6oVfSRLIkbrjj11xrpwIsE6uWeOk4EIs2Gico/w6V5em5xnIwbMqVYyc5Jo1nq6L0rahmrpQMRV56X8jfyIgLuyxkMq9rw8m8aieWvi9od3uVC9/06w56CJDCKDdU0+h42d0Vc9sMaKpgr1glMVmVkHu1lX1+ZWePbGwj7K55S0XknnvKAcTa4JxLWieeu7rtNNEAjWS7JQEvyuNKRGeLKJnin7NoHSwdVRcMtDyKdwPVabGc8UZhusEb/rCH0/HpjnSHUe6P6nSllYRK1aFF8BfocNNNWUnspiUQI8Y6ZdTZWNVfpoysLT+PMnpwy0yYjiUjOrWUm7lgS/FpEymYhbTwRX+kRzTNqUxobE4i0BhzRyTgJtCw9frSZPVJp7dlnBsRDa+Rl00cL6jW+42YUZgnnMtOjSyerW5GIzCya1Vnky9W5524/0XbTi+bntjzuXL3znC8BOHkuoPv9dj7sh87t7F6txre76ZlpsXJL7jOltrrnoMaHXDukFvYbDwTIufLe7N9hiag3eNDymKJ2mV7tqYkiWjaBSA3cMT+clC0g9d8ZL2CLJLHjLwbC8q8yymQcG2GZaTlrN5lbiAqbUXZxv7fNS7Wukrq2l8t0dh/JQUtgW5lle+aaVpqq0EIEDl7h6UZ3Fa46fbc6J2ptZKR+7g2WikqdqUd0PN60T1eFqxz93JxNH3gL6Cpr5U6Af+mBJxx6rs+YbXTu/903AThnhg4/k319QDkL48ZEQDvFBeb5N+XnYxE6CJEoJC+JjxZt6KGx1h+O7XTRWzlBQgu1Y6kys01CmoJqV8GFjqMRX6j5PIkzlmMC2LIxw1j53jHWwyXGet/83MrPVTGJjpHIK/Z7VSfOX7f3U/nm9HPl9+PPp4tdkjFiCdIsNhnT10faHBLVlOSV5RqLSUOghQh0FCVRirVeCkx/NRtR6N/iPN1oP20g3bkIXblKrq6wgpjgtq2Eeci4cenvC7Hotqrd+wpY+Zjn/MDvPe8mH7FNWS5bHyeq+DCAf7eaciquD/YYYFhB8PP1Xj0clAxxgnixXuWna9TmIKhOJgOaLZ8KN1rLq3zUGiT47K7WlFEbY1ca6cW6a8w4kHKfHckWqQBr1bHUEFTKfblRVi4mYEv4UoSoQMeB9Nqc+Xm8JxTAY11cUHaDy2o6auk5JR24ycxBgJhEM8wND2p9wu0WExR1mWpLOQXJRqHZJEKrRbLpwLj81treOBILby5R91g9eip49KVqOsfQYaQxtNtjtK3a0d3jZnYXWCtw0KHbPtzrddvMPRyqetgr3wfFFQ3lW6XzPvd05+gCEYZaVf5oMYVhrPtCo32vI6H6aolGs1uqzphdZuaDRF1GnDXHBym2tLiNZu60ZOrnGEs21iyZVMrWOZPGcULLk6RSs6xyHGvGpGw6fR9kkjh91JEyO2fltDJockIdXWaOhB/wz/SlpTVLx4Ib9N5FARmjzYxcSaXXSSNpvNP91i2gjvii9WvWSZWqMFDGBZFl+HO1O83M46S5NhzvvFpCqSHgdFJauU4ZPMxS1SbDynwGDrAy11627tbQ0+Ne8ehvf9j7eiDWoncSh4NfdIXe+OoPAviB+X6bOdsztkrle0LYyvTUgnA2jK27aAcQE5ZKNuM43xpoh9QiLc/by00N5RXmdxAODiWySuaEE0puSSrUWows2SSTw2gPzGo5HCvtVF02VXY7zbcfJ9xjRKW0MuVU6bLJzyOORUzSGNVGYnjHtp7MFZR3cy9ltxBphOynmJoaaVpRGHBuDFbooiQbrZWUFn45DECmpkdXd18VcFMj3zS9OXyv7bzHpQXOqrmD7lE2hs6vHeotRkhvHzzg4K1X9OK4G9xYO1GxOPEDWL/0B9ozI7oSeWh8wkyZnK3mNXtyRZpHhk4QwwhGZJXPmaJloRW4NnYAMstMK+oyneO0w2md1WTyfPFp5mlnELqQV6J1TlGZsj/t1FZGwrlsLweFkP+4Nzmk5xXrGGzaz53Gb4WE49DXwkjLu7pj14XaOrTI7J+L/c6EXrpclvNygnxgGVpoppXGWo4HhzBHzqDZx42cogsDTrVZiyTKXvMWSfeBN+fe4kdfHOBdSwFXPntwzIhDtPO1uZGaGNDuAyec8gDdfHADqtue8i7svvQyACfMcHFchss9cl6bE6h/HtMLIg26XauAYDh4om7Cp6sWAWrL3o9wf6JYSSblaEWLqhvvm7EeXqrN7TWbO0TfW8fqMV5YZbl/ruYMyjzykp2laYG0IxKpGduaNtSOg+2NWcoploGmUsv8UhURWs+Vmc6xA13JGt1NYVVf4JVA3OOS5/joDpoAOzrLrqdQGJkoOCM75Fv5sdV73rGnmxWVmJ3dvbXrHbJJb5rlfyagr9HGnGDEf19w2ZHHHPyuQ0/c3g3u2bWZcvCLroTifZ4B1UOVJ/ZXTNcH+XTx9FB7c+dImRC1n2WAy/TM3Ku3YyfTf/bOj6idPtyh4zFaumjkr8H20hllzts+RtcX5753ZKQ8IdLjaPvaIh4Z7WMayyW6f2O55G+vHbS7ot6q0T4fHY0lk0XlI+0wY7Rcm3cZtY7EIruwwCwwkGiVY6LVykmcuKTef0KsAYPMN/2pAd9Iipp6fWHqKzr7xunnss1fD/GGtih3D+kOKxBzuOeOzteBlb36+578bx9z5VwML2aDe9vjFMB7APx4m7n5SFusaPlX/Nvs7qadDCWrDBav7Jbno+0hjWSmNW8wxvvayfwKu8OLZ+aaACdwpgxVf53ANWUnldxzR9g5cynFl+R+4rMz6taQaA9X7QCbRXI6woyqCuofWd/uVGDlkMi3Gexrq3WMpr19slw2SoYopPS35aa8TdRs0bTlcyjWzlrOE5ZcCkjhlYMqVnQ6VwWqbtYO5oqT40tHjWYLQrJPcuLAOTfVBn3SjU0XRHVaxtDJ1OV50Bz8oEP3e8+JT3mw7nFwYzhUcfgr34PrX/1JAI9vn1bonDUddDzrhI3jaeWKCy0fED9GU8wPCnrGCurkOXwoiMv4gurnXUpVO24yfXz+I471oCjL+0rZHepILBNWQDZH6kdXUnvdKIYPoK4PnyyRKcjLVR+oH5d6mGT/tVJmB1eeg36HaDeUwFJQ7S4xAVbAIHWpapWFhlhX7FobPm0yZmskWQNZI5XgAiMbrXJUxwHvBK10MFXBjBSMzCYa91ICA6WDQ/jVvJuhmAZVqDdD7zPWPvnIZz3sPauonouV88sjX3Wj3vj778S44/FtYPfG95jhhXvJZ1omYJi7LrsakCyWOBWT+Q01Du1ye1anOZMG7WRnUD8LztaoWSzbEZFKSyNxvUsmzf33SEg4BTFIPJLL/5LZ1VUIPUPEYLN7eS70PMq6IaFdZagHDnS6BCImtZqKG1hUlH0C5zjofeauG19qliYVXbRDYM9BB/PHHZNN81oj02NLY9og5Jcmrl9uNoCuMspVyyhre+dOwHfoqphBvr0U1KvHZNbOyXz+zuMfcdSNq+I3bMDuFhz4vLdh2gLaG+mniyy/D3RBiAkWI8zvcI97+7osqczPsnmtLTroNvfiMEvizb+VmBWspfP95qhpeV4Elmk23bEABs+6PRMs1vucQKwV/XIz13ZsMqWeWzuPE9nOeLSPle5PEx5Qf1fHgsv35+fmkV6TSK9xjJAx9bY01+bVvogoH3nUFfi2tCa4fI/n0VqJLzBebOTJJnUtkZ2Fq7E0DmXNkTY9PM+wQdxzZq7xfBszs2yRtkkNDn3fDLuNrvLrBXjb0Y85ZiW7aLGhMmTtpE9D5WxgeEF7JgwdtllntGTK6TnhSHVIVbJiEh5QqCfS+31cYisGBuLiYJ+DyVJtL252fSll1ZGkhXywlH1XQhe8Q7rzqIwPs9yrmxGbOADTZZXubcQdVtFYJ9WZPOWNWL8GjKQss+1Kfb79lcfNTCdOrDV2XFF2EhXrhqpJ8y5p+Z+xJXKOLj32l6ZVRyNdnWNU2lJqJZV15KQrFVczcxmTbeEyd69XBqwpxJyDqcyg5J3nd/bDnvjAT3cIbnsU3MBBz7sT1/7ntwJ4wVxy79ETpbcvrEN2UVZb0VVgzBRVZyaP5HaimD9AsuawWAeRQ0qpQJI0ExWAqmqr2FgJaw6CVNpb8GusEs8oHQpodKuAxEk8uWx3pTnEcfWFyCuB9ovNsApZaAIhSSr33bCrgMvBmrfMqCW1uJHSFGjalN4W79Ri+5EZYHXGzWMrJX90WLQcjE/w4kBe3atWiy0EhHX803p7yRrpkgECtbA6tDe26pTYPUEIG/Ly7UJLPcAQ5K1P/+Wn37lR6G4Y3LLf46AHnPlO3P6hcwGcXgN6YZ6m9GbWOn/+maBuZoTqEHM3uqqojTUr5M2g0T0Pv9GNnVM0QpXYdsZEMLumoO6xzlkxEkuL/SjyjL0sEXDzd9dnV1805o1rVXRFMksU1oVrJROZnd3ixn7EYONZf3FnIStl6ukV6B4EhtTCZzCBokOlz5sAD0xDcBLM4qEmYnrkPL9u9NxUpqsD5cy+bnfdeb/1aGbvLrtLyxxr5uJePEWAWHdzJ/oLqLGKBFN/9tyTv/WB79xEkbGJzA1Ajn3djfrFJ7wV8ZbT6zNeYjLT8cw0z2Yjo3vXOYjQrLs4o7rSr1vGk/83xOqT2S21R0zhSiCPsgrAlIE3EqZEP8KSOuLCYEE0DkJ1zilsxRRDUZR1wbHIAQ8KTv7eWLeUlOcZpvseR0MjgKkYGEDMri2c5SM5mQi5sQS6Kp3U1qxNqunHLDFQHxgdXbVKoRhbckuV1DalNq8TIhsnW97TLnFPZWX0XFKl4JYRgHaG8X1b5Jz1DtpkXr/8Tzr2yHMtgvv3W08+80E3biZuw2ZuhC0nQg5+7t+Kxs9ngYfAGyJE9ARtpTx0/uBCGzQMQt1syWQFCbOoHLgW3avB+pSY5780P41kZZRL0gQuaSGlEGFjrCCSjlnuGTu7tWCIJ8rPvQBmYx8cY9HJWMEr9YBcFojkobqRa9K+r55ABNGQbczOsThW4Ez58dznRm5qJaD2PYtEKrgmVFEYUkushg0ZdONRmERtnFLz90DgGwtPgheiGFKJGsArUCVhhCCwo7rQE29oS1jxxBRx7YnoPIA2Z1oG4PMHHLD2tyecfiLutswNQHHAmZfjpr96KyAPt4i2OM52C96LYZbxUx/dz7llAUai2FsQ0AHDDHIOY4E0fW+kEVgtcRVcWsc6zioXfiB6J43HlEkqPH6CsVkqctAIN+9WSyElHnkxnoi+LJZKfSV3Fl3G6oEe7Yzc9ty0Ugjq1hK5toQcZSBiueb+tW7cDoxmqEp9YqUiaMmY1j0+OicWY/JgwDgvCunQXtURlXrzbs76yOuIOyYOZAslM/xxzI+vmlK9JyTRVg6VP771yS89/XJscrNlwGbftv9o1Di8UWO4VNNSutJ/Or2xIFNSQZ5iANG3+iCYMRNQCiJYo0HDp1aLGgN2pJSdUpqxmLvdqHUsFH1WBpktEI0zUsal+1JPHeWv+zEXZ8H8+ahJAYZmzJalo2Z0NarN0OPYN2RQP1KLLQWW6bsmu7cjP/M1dYdEyshhrLTPbNwAZQoqGT3EpP8u1FSikUY1EtBAY9VAWb1QQeHGXeZ7/S22gcZlXbrnjJECWxPviYEDsHpHj3u/9KGnPfCNJz75QXGzIbvAHrzJye/6nH7xWW8D8DOt5LPCJdUPSmvG8QWHGV8xzVTQLv6DRblByDfPt6PdHlrpos4UMGXUYjmkfs9WMKBU6ZkjbfhUMW6l9XZiDpBCIGH74EgOpuqXCcA5z8Ds+qq7yOyhqnlpwShVNBId666sG2JCSqSgJF+2wnqrG2HUEGB4AiKePeUunGq+FIgYmLF3a5jQIS1rZxunWlBL1LHB1HrMmx4/qmOosSOMmp4eHeJJsozDDPPUOd6zOxotc0hU01xVijP79F/b7+Ctb3vKLz39c3sSr2FPbowDz1qXb/qV1wPylQngGOmUjOldIVzakYl+IVMQV9mutOXySToXNt8XlVkjbctMrDJtSCpqem01X1Pbn5ssjGa3V9MfRyUziegez2W5MdoKgPZlq3kcR25Jj6t+1xhXHlkQkrMy7P2Dqaa+h46aFgGOXeGIMrGFn5/BQjp4R8qsYaz9daDqiuWaRUSilQhj+vVMaEk9dnC2RzD9uCNNsU0SnJe6tk6qdm+2GrJJwPxe7UpmqdVDpVcj8eatDRgLT/h5VgxAv/KIZz/89Zj2ZOPrkrkBKI5+5YVyw+vfht2X/1QzkdOOuavS8IO9cQvCHTp8dEf89RmCs7hTkNk+NVjySNYich+prmxnayTiiZesGqOTTKKll4J6cy/JNBk7EInFGR2q2+KpNOICZ2yqFsasYksjxKzvLlVJdONA4psj89Fp3g3ePwaSyZIEVGD07xrbvegMIhmTyywCkbQcUFuCStBWfCGGXWw13kZeqdbiyNAeYDeGzo2lTO+s/S2cJtvOo9zdXnvVDJzIVG876UknXrjZXvuuZe7pbScO/9HXAXpJnSnDUThjUjzFNDKj4NZgLXpLSTd0srVYkKzszIoN7VGLTZB2MqdW3zJD92T7pvp7qO+Xo1ZLJLX3rdFmv0ot9VJNl7Epi6pRZtH3igyUZ/edrJ3v30wP7HNQs1W0zcJTJR7tNAJUnWivb1dLqe2aKaqxVy6ZNLrPoxa6aJH9ElWVe2wUSmo1UwzptgPQUFGb/lm1+/UWIdeatbWPYmNFnz5735Jsldx9hT5SfslDTj/+dYcef9jOPQ3UuxLc0AO/7bOI4c1llGXGYTPL+IxXthAfnc0D0IJjJYM5HTb5fimNt8zFlbKyel+0UnK3unBlWmjZ1tFbvau0FaSW5qodrra5D5iSV5lgE2HHZlzy8moiqAP4OHj96wTbWjSab7Svj9JIUNG2N3yIND/b0mVBXuSIdhzGYzHuhcGOtbC3C+mwCGZ/N5X0jrYK5pR76yMixBid9ixLzWVh77q6YgTm92ByWT8XlAK8+cm/9PTP3pU4XdyVH5KDztqFw3/of+KGN3w7oI+s8ybveMqjL7ctxPiZOdN9A9YgWRiNdqm92nU/LMvUSM+HfdA0+WTG4C6aaBfWA4SI0+M0Omtaulf8zXrkE7iyn11YYEEtlXbDsNN1a7MFtMo9y++QqoE6ugpT2c22UsXldDBWyKoZVBM3Nkx6An9QZ/9RJZ+6xm9NLCNNe9xqKUstistpZ0iq2sorAbuMoLDNCBwrbvUJhAueKKiWKdnzHhfdeK1Gr4xXr123L0tTqqd/f/akJ53wPwHsuitxepcyNwDgpNdejC3H/Z2doYYZh9RFpT6CSvOc+dkLDOiU1AQU8ZYMznQNqNO6kajJiK5sLM8jO6VQxjclZnSuLhnoysSTkQAwIqNoOxprM2IC+/KJMM64zESv2LIjupx11VcrTab1Gd8Bai7D91oNM/rrAphagEQuxX2ZDhqVMTFEnQNvJbHAqMn468FpxIPaLNuIUQzZpS3n4UgsgVSKPVsSdEgqYbb0b4E61BL97x73vY+7+K6G6AJ3/W0dh//Ia/HV33jWxDmXzmbNYX7nKHudaysCUec8WgwBueChGbfpN0u5n6ATg8rDgWZ2IQGblVRhCN+2qqY0Z2xDYpFUHUjXnqqwZs3Ce6fuMkv+nIe5RpoYCG00Ecf487u4xYzGFGKVXjnjR3XqLwBjAIS2hRLXXMvfMo9Gg+Xxu5TGUsmea2jQpOcWs0DZ0k6dOgssFilpUoq22zu++Kya/dliIzpUQ8VisUhAZ2uezijCOgBaoMust9JXgXMf+pQHvfbgE7ev39UADfha3o74kasA+XOo7Kp2RxmFXVgHFk84ASwQZ0ZO0dEraTYJS28sQFpn3GOk36omo2ovwxiwyWfVHljXZjk1zwF2tZAy/VTN76gM5MGOmbR4slGGRGx7cn4ctUSeCrT573XILYYyyyAeA39jpeBCO0QkNLZRPP4yxJNmZEV001ippLyJxFBLoSQRrfpsI1gpmTbdXnLIapcSGjDjgeY9zBXdTI9NfB7mySu71rYMf/7E/+spV30t4bn4moJ764mKk/7kzfjyT347NLzAElH8Lq5ge+7Ix9tYx0Fsa1QyRazlPO3mMrusmPRmXFdqhixsMPDCvCSCiLGro1ZDP9XGbdRKOgNlds7w0ozE6lSBtdwwu8A0v46sJNNoKa7FHz3RaMvhETrWUVJlo+bQjR1ZKRFddLQtVwknp/NWtJXVKo/gxGLMTiteVDVZNdl0WvzJU1Ar7B7tkD5rrI2o5y6bSJxwI6/2Bf18kZ6SL3vBAMqO775kCp0qo9tjt5Pgf3rU8x/15j0dfd29wQ0AR77oBtz84T/G9X/9rUA4vi27g5UJdkz/la17mK5qGGiovagpyWvgKwcNWoNDG1RDZ0eYFNJznQZR8GTyRfEtA23x9CUxbIXC1FhSZdUtnloVWvDe6CwdDdaOKenHi81TFPu8y3BB28V+ZnOo0spcRsTFHERlNi6OR+BXMRmttDTTk+z1XdSBxuuMyC0ANJkG5tk0l7RszwRaBBC04wGubskfWuPB4KSeQrmip2qbQ9MDKcOiOFWgD3x7mX9FgD9+5AtPveFrDc2vPbgB4Mgf/Ciu+5u/U5WXFeIpBbOk3VH8x2BzfLsS11EHfVZQRsLr91T9fVCPa/Zlw6HC3HfHSuUEMeJ0rJ5oFKxWTgmifIYa8DzKQ+XDVxQehqCizeomOhCKP7pUdD4LWjS5zZj1wdH13XzwRScmUVpMwK8t8RMQqyBGHHehQM1+x3eqLhy9MiuxImfUTFMtAZssO1T7Ht7aglgW2Sa6pxvL+s120Y/EZhByoHV0UXhtd8e1tGG+SEOQAYBhIX/37P/63I/eHWEZ7pbgPuSs23HsL/w+VD484VBh8i9PNkORt28anzJYwYHWrNnslfZIt0bbPxexQ6Re3JNRop3t+s2VeXYNkIyTPL7V+4Zp6yumPWqrI7lEtdRQ3q4Ze1JLpQOJbFail156wolackuPQtr4vRPWoSzeUdeDO8KNkj/bHJZh0HPtCkB8/x2KnNOi04PZPqLd91BEI+3PB5eFjXMq7Fy6T0rpU1VXiUKsHFR79/vhR77gsb9/0Anbb787wvLuydwAcPyrvoqbz/2jePN5D4fq4aYEL8vpmaoKY7FbqYtOjmlGbbXcV0+DNOINNyMG00JZ/621P87rjUoQCJkdqOmHDY2TymCLvkuzSHB6fLeWOCHc6swZbOshNLsncGokk4dIoCW1FNUOirM0cwPEtS5qbY41eapEmpfnNgC90jxSzSkWQPVNqCN/QFqJZ/Y/F6qtK7KuXiRsspbZo639zJZ91YOIwWwBa3EEoCOOcT4s4mbbvSze/FRB4m8Ytg5/9MAzTvzq3RWSd19wAypHvfAduuOjZ0LxkmZW0ZTd1gKpKI68gAT2YtBsvaShcSu1hJFo+/3yfTHKsKlXpx7fsNuY1JL3b9FzchUHzFpdGB229nTnxS1Fq2qMW4LGJw12p1gk5RcfVsXXjSyZVK0XObuxFCSfNsAgtDzy4nbjynbGN4riDHSQiF0qQCt/fRAJykqEBHBpDdY88iI9UgbYrPRSzBgrlL635X+X0lq1tAFWTjbvIS7uAJmxcG/WebTOBwqF/MNpP3XGOw4+/jC9uwIy4O58e8CLdgD4Xaic58GH2vNIw1ZVBl+6ajGefWtnpZEYOjQaVliHgmoqB0/YoNIaxC83mQ3mvrsqNKgx8DNlbiHWeHUY+mqxlSuG23dVR18tWd2tCWrepXn8qouHs4KeW5Gs1nrJUVOVWqP8XrXafTorl82e0CIGy6k9bnDc7yxS6XHDUbaFqjkY/EYRTzENfg9Y5/57gwJXup93yAMP+d1jznzwjrszHBe4m9/CEz51SfzEk/8Ay9sfDMWRnmjAqLnxVusiuMmNlDOYORiUTPwClcmRUGVtgLQCDuV1O2QCoWYklbMfWsMIUNZltxSqUoxaTN3zVswSXYyCrBx0IxFV8tqiaMeGkdRszciNhTpOz13aA2p/ohjgUhmEM1UllfhwlODyp5T5OtWTXNLNeacXf68QPkRM8sj3N6C6pGh2eJFOya7tzFnREmeYyqoznFOh3ZI8KOopzTo+adcp8AeP+sFTL7nbY/HuvkNsO3EMD/71t4vijdVI3p1j5sKFI1g4kC3yKwujvVYmS3S1z+yRRt8rwaXVX630rjqjLIvN0oBWkBIdGce9j56CGsm7zLqhWMZdB7BrFvX11FpecMOedE55pp3lgZlgox5w09ZLzWRrrkqirXQaoLRmYfZFC54+yoQX8G2neXdQKxzpLvfj+wGaRQcM8AVHXQ0ABge4zfmpBV29XMABem980s+f+fajTz9xvLtDUVT1bo9vLHdAP/P9x2HHR/8SiqdVwApu5u3LYzhqJIM2Qsv3+H6CdSPB4Hy6QT0rOa2UXjW43lpcmW/JKpaQEkiO6qidzQohtK9B42iK+rvDrfJNrigaXZZtVv0OZRxnAa2AdidaoHHgkMZq6fNU1Gn+Wn5di0ut0NcYqAv1NUKyYga522yQajRl5TGNsaIjNCopf1XESgk8nCEtNFK/J8UCGX6Yk77nf85TFuZEcN1itX/79z/yRd/yow95/mOuwNfhLXw97hSLQyGPf9dX5bDH/g4gXzQXNToXLtzn0d02WrZlq5RSUllFN/ZB2/vFutSviB5IRqlRux5oba9KIyl4iqkfwcUO5RVtJdAVXbhsGVdRTqOliWq02V/59/QCEd66MPd7O+dZ7/ianVnhxoU9WWgncrK2O8TqugKzRsh5pfHYq1kdxP5nLnuWrN9bz0v3q+1KojCThXtUUt9v089+8bjTT/idhzz/MV/F1+ltga/fm+JxZ38IH/22P8Ntn301VPYvQRz9UUbElx7gZnpAy2AzQg/1zC5YMoxZuKduOUAklxRtBR8mS8aGLFO3k9iMrcaDnJFt0HNh7MH34bTgj2iwTeaOjE2MlkSSUfEY64Q1OgSc1/mm0r2M7QwWwmM0GKRcVQAZLF04b3oRYri1fA7L3BJJbDSZeuGgRhbKVE4/olLVRpwC+lmdGZXB7f7yIzalsZ3pm8ltZk4ognY0dsewdfizh/3AqR/6Wimm93zmrm+34yGv+QuN8sbKlILjNU8XhaoDc0axgW1GZEpcC7fqx2VV5Qw+0kYPR67QiJlMxRfPCqmm6XfHujRQLXnGZ12NzggiusqAHUlzdh3r7bUZY0UHonEmT7cde4i7dTlVzvjl/pygpIctxJGK17ECI6M2jjdd3/OCWk9ElUpksV5ocG4t3BtXtxbbX7PvGlwGDm5lUeiRWnpkFDaRQOtbPvP+xm/+qTP+4qDjD7v96xl8X5+e279d9RfHx8+87H9B8Qxfemuv5zYuLMH2oKk3VvIrq/0z8YcibctIfaMq98Y5swb7s0wxBaHnPlMmJFmd31kVdITOri44l1M3LYgwBJeCBZgMLdT/c8bNtxvgxSIGK+D+12jwF6UCmC5T7sHz5TrQv6kHz1tl+NI2e9k7RS2PITnVOkQ9pgV/MXhtjRg/xloETndizgp/WzKzRad/1/ScorYuX2YF/Ex3wfeF9uN7T/zOR/y7U37i9K98vcNugXvi7egXfUVu+Nhv6Ff/7igAj5ml7aRGSfLF6yU1eQ0PZsZIUBf0cAQPu6xePXEFxOHObDbelc3kGSSm2kiAmpGYjm4EBweqwWjLuxZT2YwiA4WR1WmhZcAVFVkwQhWFfx6xQ1KpvHg7px9TIEcY40lU8krRrxclYHSjMv7oCOBsgaLtXCxnRESpnRlQHFsg4sQealVemeBEu8Pz4wxEJiw7w2bK6iJYkfmFA6vcWdLtPr04ZOtv3BOBfc9lbgBY37FNP/kD36c3fvw3oThmMjVwaHnOfEDbe0bqaQvIJhRoQhcnZazS5xOaHR2SbIKBHT+lyb6qrndmpLuToU3GBezGjoiuKaSa1yNYKyUVt7dMzCSBJwF2K2joTBgYyc7VTUivx5BEIJyp+edyxg71/gxqzll6plhl9dgKpkiU6aAfOWM7JLy+nDKPmLsMDnqZeTELQyKxk429f+cq5DzP4xW48qATD/vVM37/+W8CsPOeCLmAe+pt7dCd8q3veItsO/JPoHKnesZa5GCE88AWq/oiimjha0fiSKeXszwG88l9fxtpPh0pW/NmEuVl9x0hSiSu+wo02/bXvjd2zDKDuI/VtKHxHO+IQNg+qUH90bLPlDelxNbEAQ4LgPZNHPl1hZ/nuw0oUWfZdcbsgVBz4z+e+2pYkQf31X7HF9socW8uzDTjObUAg6xwN9W+g2nHzfROAf7kcT/3lLfcU4F9zwb39HaznPyLfwrgLywLyoFnUbp0xWY1bdm95YKXFWEjmVUzwKaO7NFjAXv7JTjgqKG2ogO2+RFSNEYRBY2P6kQqfnRkDR37NNvYobt6EkuPthrdffbcTv0yiVips9EFvHRcYBpVoFvL7AA1v+QgxLrQD5jxQ4Oto63Bv3VCNbRSbYUlRiUmbkSGeZeVmULkLx7/82f+6QEnbL/5ngy2Be7ptwd897Vy7Md/Q6/4+6MAfI/RlZh+U9r+NHpqZmdkZZRV0bqJcm9dDpCxOqhk8A1+SZ/bpmGegy+/1YBFVXvN9yv9g8vbUNESBFU/FRidBxsrxKID/8RptLkkJjWbV56Zz4NbgEiyCHWe9COoJ4+V3Mlrl2MyfPClOduCGrhapgWCoqWXlmYPbrVyseOsjJCT1YtY3nh1cakFoszAAcKPkf5ks/Qc1X88/AnH/cZRZ5587T0davd8cK8dCnnsH35VFL+kl//DQVD5N9a9BTO+5f7r2uFku0Yo956jgztZZRZp02W+3/Q1jQS4QdzhAoeswxKQeU+YBrtcj4E2s8IYRuZZabZKVkrcgjAIFifF3Kx/OPPvqTLhtqVLU3V/C9CsvDzvaG2ZCroU7VzcB3B5EYNJ4uK2mFSppxRbo3IbUoJo0lvmoB3KeS7l9vk4GLNFkpES2KDlObpxf/Gg/owliwL/snbYtl869eXf/lV8A97uOUCtBdgQzznjm/X2G/6bKp5sSnGzkmfGBzzC+YJRFtANAK7I3PbgKoZAozTX+xsyC/9sMI9jQTMvxJCK1GuPqUdVixdyRJeNIyoIVioCPwqDA9TILsB8vYJq02FB94NA9zsk//dg7aqRgDhxixdFnK31jHWB1x+IAc1LEFeTVzEDk+mlkS6zOSYgjgcooxuTAa4bFDHDFlNMdUZsPq8A+ND+Dzzk/3z0Lz7tE/ufsB33r+BOlUN8z6OeHG+//rcxyrfawHZLBPmgp3m0jtLSWQtNNVjIFD6wpJ2Vm31eVfHVZ5q19sGtTZJ0/vpSn3dnp5nlyovFIdAi5dMhOFRUOlJw8X2g8ucVg71dZq3lr5uZNgVy4pkXVN0Hr7kvnn0PdAi0dJACc6ndM5afcsmiCTmfXhJpcoKGeq2UJazSzsLbiam0wwup+m5/1ht/NDSDj48B+KUn/o/nf2j/E7Yvv1HB9Y0ObuDmT20dP/pDz9Bbb/gNKB5rgm9EWwYrscyaDaDS+poBRsTRX52LairgV4g3/bAjwhBZo87YxRFSuMTuVBNwywKj8yxfMWLTGJxQxFcTQoeaUOA5Qgln7pK9OeMOdVyGOgozt+HAFh6BOcFJh9xSg1vasRiLsHNrHaRcHqO4gC0TUzH6HS86AdoMz9k/0uhtLsA747ULjnzSCb924gtPfe/+J2zf9Y0MrW98cE9v2/RDZz1nvOpfXw2VR03yZXGML1v36MilLmjjJWd2D165NTzN+h6p1E4/1/aZm51FS8bsZfdOS+FLa+Z6G7sn6fAAgtvwydl6cNtGg6X5jtIGm7oAz1+PwcyzSzZHyvrl9inoJRDBRerXDHPQuYDT1y15kzCUgTfmicnkY86uAoxUtreFkmAMhQdV9URBGq6TCVixTDjTn6OT9YELjzzjhFc+4pef8Y57cuS1twc3AOwfP/7vvyNe8vZX6SinmHLc1VaNHFPpNtyEoRPUfiXvzF+s7zVu1/RWwknobAuRlpQTMaOGQ5VzaifVGF81sQdZpGAyXuWhU7pTYJlgdsEe3ddRZaTKAa/+oyOxaMDsIh2ueMxhECxIaWxPxDgSGkZukJZw0qhmpfuyloDu0Vul/hvo/Fny4QFcdMQZJ7zq5Jee8c9rh+53x94QUHtTcAPA/nrOU79jeeUXXo6IR5fgHhlkamskjWiBJ5PRff3l78sdFKa87vfMhtvNzwe2z7dsN8ewowxeg1U66jErizU7uZVKYe6Ry2snLvCEFvo5FllTmpPWOym+1B8E3eDOwUocdCGev7heH6m9EOamz7HWxJbqqWCIgcrjUMvuETSFDGJ6cJOtg7SmOLm/nwn4+ieVzxx+xgmvedgvP+OfAdyxtwTT3hbcUwY/7yXfPn7p7a/SKI8xgTKuyNidQNWmb3XB7tT4XQS72d3lKKTNbYI1XYgzK4nVZf7IZXcnu/tqIvJWUo96k7FDR0TS0EJ9Oe7MMXLprWjppybIy9fQ3q84Awc+2Ob0VCoteVuoDxcLsJXsbLBH6cAWgq7LlVQQzWf0Lug2ff3Thz/pxFed9JNnvHtvydh7c3ADwLb4nrOetrz6S6/CiCcU+19PFs6oulsWYIAzB6hVySfLSDvZPWdlJi/n1bsgEKxsCfGBLZ2yGuY5qaPeGrCuB8ZFd/voSmsdCFh07YJXgfGYC8xJH9o+XIfaF0fK3MKAWmg3vfY2bvFK5zwG8wCfUZelv1Gw6HnlhaYADwZ/nYIy2GC2g5WZAA/iuie6neu/o+Dj25904qse8ivPeP/e0GP7t4C9821neObZ7wsHbP9FQD5UxmB+X3KUrq7OepfboC50VfIetwsQesQYVJppfZDqi5aDNkbrENrjYzNlFcxhV7eJFO72cN/jFyU6+mnHhdQvBOzRZSvA0SyuVk8zhXWwMcsTiHhSiUHs9uIftyu5oMeHddYp/wZ51vlF90org8kN1RBorM9aXiNs6ge//IDm2AB+8bgfOPV9e2Ng782Ze3r9b/zUED/2ysePXz3/NzXimdwwaeyAYdr5unrEHVUkYrK9uF5eKMNihv3WmUn7+bkbzTX35dHtDpCnhrLqQDutvbbGzn50SDv77gFq2o68qmQzpOwa3EiL+mkeifm+2qvCpGZw1dCOytAi/XY0RmV5sABbDOKhlToSC9IR+0k7CIG7bdt7v2fb8Yf+6oN/+Wmf3O+E7ePeGj97dXDn6mI852dOWn7hzf83RnmBIa/0EO5eic7l+YiOptqNzTISA2d1zD2974Xh5KPaouYG+ddm/jJd9FFM320CO3aYbNnCmQG1xoghOJNE2H7Yg2QEqKnvsWNoQbhcrgfu2dNj5v5avPyzkmoUzmgCnbYhZ1smt/CYLH1eAlY6AR6od57pwaNYgK3Mu1NbMIr8gx629Ze/+Q0/fAksI3Wve1tg73+Lw2n/+WJV/Oz4+bdcB+DHVLHNU4XUA2Te/jj1xuqDH7Bb1/2iBG+5EW1l3ni2xejagc6KozkbD7qPyrBTu+XToO1KqH3HgBB2wWERjhRpbBaLBEuWp8Op+I7xet7IYhCaWY3i7oN5++lnhDzl4UQl3mcN1ELx/JufT8hD78QrH9K2zpTFQ6ELTCYgEng5n9D6TynS0IipPI9BilcHFDsheN2BTzju1x/6qmddeS+Im3tF5q5R/vm/PHL9/S9/iUb5DxhxtAHWRrFBGx1aTtJkn9ltNuRynTO0mkyr3tAwzlgSF9souxusXfPrmGQere9QWc2u7ejHWTSWU2emEHvz5sGU+FMpXtbu2RaAM75BynNJHuxjGF65o5z2SnHz0c3nIwV1BtmGlLlRkXQu0XPG1iDOo0NMhzWmMZt5uUUwCq5SkT86/lfO+tNDz3zIdfeWeLlXBTcAxM/95cHxq+c/f/nZt/wcIh6jPYNqj6zT4kp/AFiVQadcN04rsFaZEY0mfVZA0qjb2p5cez5tsRPoIK67d2rx/mUq88Ft0HNflhPiDkdJVXFoeYcQM0s3pVIcVLKrOMoq/ayIxQV6/XfO4GaSV4PcThnFerJxT20+BzTIpxcP3v5fj/+lp7552wmH33JvipV7XXDnUdnyX372tOWFb3m5Kp5Ws6EfddX+Wb2bXmwX82nptTsl+MiZVmaClEGwYPry5hAAWj55KW37porFtNEcSmQrVZhk7fIBI+bQTjZ1gJkyZTSGriVT07P3RmJCzy8HcRDiqMtML069dtOD0/aZhZBtynwGHw3vRzqFkVQ+ej1T379+5H6vefTf/Mh5eysifl8MbmDnjmH80luPXX//b71cd+78QUTs15BaTHk+k7EjGUXMbPDU2AtqGrXBzd3RmZOb28uMtFX6ixpmZaLoGjYUJBtWOFK9zN3GkFLCJ8VX9Jl/cMEtbTYHCBCjA0Bo2wtYBkpBLC67FwCusyVFQgc9FzoPpLLYCgcniUyCFNAs0m1YeJKIMHeq4K8P/dFTX3PUDz/hq3Tk7wvue/Tt5kuPvPNPzvoRRLwUipPV7ZzpZmzqu5vAdqCc9oK664rnx2EdhoTP/IU842iukEabXmyUO9TVeih0jAqb4Pbf9yOvwd5uFBP4tRJA0nxzv02ZOks81eu2Oz12tyx3MtECsDGinvtvMSMxW6pPn49CwR1aokus7LYvLQ9Y+5Nv+oUz/+qQe1F/fd8M7inAD9j9wd9+8vKCd/4CVJ4+H9hoOeQz7y0fHX0j6ug3omBecAI/d5dmDj7vcR5c6e9nPaG1VWIdd5eV5nvZNM/WwWnWQ2cmHtrvlZ5+VWB7nXenxy4Z3t0vHUJtgHMGFwu4hdR3hxTATP/P/57+xO/b76kP+n8OfdETPrTthO2339vD4r4R3Akz1UvPPubOv/yxlyHiB1Vx+IYZO24U3N4/F+3M24BbLrhjvyfXRokmXfKKtUP2ijPp6MFdgHTBLrhS2gW2oaL6YHYHRgO2zdgZs/tLuT06t02zcswYQHR7bwrw3HOzeizPv0MF0uJAxJVp5n0DBH99wE+d/ruH/9vHXXlvLcPvy8E9YWef+stDdr35Vd+pip/CiNOAFRm7V4rrDPsNbVmuTdDPbO9UbcUsxlKqn7XtoeHBNT/ukhYBLyX30LrHgE0muEfvZO7y/Z7yzCHjGNJrGhqRimYf9JBLeOkeADZze+TctR5csudg5hJ9IWxAg3GQUp5PZ5icFwV/sP3Xn/H2A898yM33pVi4zwU3AMRLPrC2+/3//YTxy5/6eSi+DxGHFTbZXMaOHWpo73bdoJ57F9ePO6S+tzWFADV1vmsN483Ps+HYaRGdURetXNLO2h91M+o4w2IzGXSY0YfX22gjIJlZM5SDem4VUVGW+QPAVfs5g9O/85mY5t83xUHepA897L8c8uInXnbgGQ9av6/FwX0yuPPvNr73lYfsfO/rnwPFf4TiSdpdLgXySKNAG/vBq7rZwMaMAwtmLaAMOFeep90bTvxIW5Lnq3iEy+Bog5KBLR/I6PTbnKG9rdLYUX/lPeGp7FfMmDdIB+Dj24aZhbl+bh5C9TGWmf47ledJ6/2RXYeu/eGhv3bWOw58ykNvxtdx0+a+4P76vi3W/+W3v2nXe/70pxHxQige2B11waLsJnjjTFD3qgDKzgp0bI872Z0eX+cyeVcw4sQhXlcO9jPv+JmptFmb1hE1LDRv4oC5bM0jMRCQ5uWcnXm7dPzXxB0GBjEPM+U5au89lEC/fNw/vHH/F33L/9j2bx919XDo/sv78oV/fwju/HbAzj98/mnLiy94KUZ8FxRbm/4aM1l9s9maA3vlbaT1LQcs0OatlgBnoRzawGYrZUN/dYKMOOOcwqBZ07uHqhc3dsZsfQw7AivWTB2gjQNYZkC4odOLa5iCVec04Iyelyy+C4P8Ewb5kwPf/MLztpx4+O33hwv+/hTc0Dt2DONn3nbY7nf+8XfHG675cY04vSmJHf9cu362dhTWouErMnpzgLjFf+ig7Y3FU7CEFbieHIzKByfG6ASwKbu9FLRj6qA+uNgswoForEBrSCqd++F+Oh8+YZhB1wP13gTm2Qx+7vIBW/58vx95/FsOevFpN91XkPB9wb2qVH/7q47c+Y7XvxiK74filN6yZ92o/I4tUr4ysBvOOmfrzpzcy0NNVvf+4HY0Zu/XB6TMMM5SgJpe2/fbrvftObGU/p+cTZvxlyvNQwdoCyRqAahk7ziphgGOmnoRgvyt/MQprz3sl595HYDl/e0iv78G9/T3v/7Std1v/+8PXn7y3S/WO3a+AIoTbA/eD8jZbN277Uzmb0v9jhGEz9x8W5Nl2WgxjYC4P/fAGXq9tLjs60C5QkH1lFA3745tX606p+V2JBjvswYyWhQX/GHOWXW4DIp/WDz/Ia/d72dPu3jtxMPX76/X9/06uMtrcP2lW3f+rxefsvzCJS/SiOdDcVwTmLGXiWV+bo7VvfnsjJzHZT1JqnacVdhBlfttMGml56MW0HqeDeQgK663HmZEIRxoQ52tZ2R+5K97AI1n16GtLgaxwS8kksnPbULVrwDkzfLvTvmLw/7Tcy4CsOu+ioLvC+67GOS7/983PWr9Q3/3w/H6Hc9DnDL5xiOuFeCZC+LVPbx0sn5HRRZtaa3aEZz0enHlnWost/TkFC5vuSf2K4h6qq72Ni2ghn4gm7l1pz8Xum3N3Jfh6IPeut/3n/r6tec//MLFCYff74N6X3CveE0ArO3+x//8iJ1v/ssXIuL5AB7aLCncTED33GJ6t4EH87yIBB2SizNr8Kqwsv0DHesl2OCOHS81k7mHDuXUEWV6HHOmto4p82aMIGf90OGn5+clXm/OCLp8ASG8ee3Fp77xoJd/x+cArO8L6n3BvenXJl509rDzH/77scvPXfB9UHw3VE7XDXrpufGYzgbyHGAnbUYv/bp00G64wITbOY52G4l3WfElekdYYmScsbcLzC8WSCuIRj/fTn28rBiFZaDMKt3Ohchb5JRj37T/r5311a1Peei4L6j3Bfddfo3Gz54ddp/ztkN3f+Btz4HiuVA8FVmYMtebzwX1ZubkvaydgDY1s3KZWR/E6DkcQNYBw3zwRrESTJ1zWpkhpbCzqc4ox7STlRsSS2HY3QCRD+CA/d629qxHvGPr9zx+x5annBz3BfW+4L4738L6+/5y6x1/+JrHQvFdAJ4NxeNnA9tva+/12d2P0j0MjBcbpENPDW4vOFFTy/12Zte+5G7AtBUz6UhU0dgL+oyWewKMtGuI/OEh4ZOAvBMq/7T2km+74KBXfucu7OWOo/uC+z7wui0/c3ZYfuZjh46fOe+Zyws//UwonpmprTqHmAMbj8rYZaShx3I272Rl7WV0l83555lNpsw061g0sQGirhKBtP7jaswVHSOOe+zp9pcD8h558LHv2fa8x71n8YxH7Fh73AP3Zel9wf2Nyebx6kvljv/yE0ePn73kWQDO0oinADjOBLDvtXusNfQtkLX5miu9U8ne9Ni+1863Q88JdXC67I5YQ2fK8Z6YQwnFF2/s0PTpV0DlHEDODt988rv2e9lzrtp61sN0X5beF9x7zVu8+tKwvOCDMl5y6THjFz/1jOWnP30GgKdAcXI3Y/uPbuylsXMANN5tbvw1JxM15bxYwkh3sZ/03VuY/ur54bGzuRMzc3XIl4Bwjjz4gR/e9rxvfq8cvf3KxZMeqosTj9gX0PuCe+9/beNVl8rud/7lITv/+vWnI+J0AKdB8c1QHNZ4qm12dNb9GZ+9Z0p0XjLYLbs7fbd2xBlxVfZuZZzJxvgmRPkEVM5DkHOHf3PGuYf8+b+/2dUx+972Bfe9sEc//2yBYlh+5tMPXP5/5zwxXn31qfGaa06FyuMAbN+0Zrzp43v7w4M1hMBMBud+W3roeQf00pls3GqybwTCp3D4kecPjz7p/LXHnfRROfrIy+XoI8atZ52yL6D3Bfd993XPH+/84/985K43vP5UKB4FxSk6iVgeDuDgvpyU+wC4zSXSYbEBXlRie+45q6PekkC3u6v2zLcA8nlVuUgkXITDj7pw8bynnb/fjzz1usVJD/ANyL63fcF9P/s73LIDy89fAL31Fhm/fMmRAB4xXnTBQ/SWWx60/NSnHgTgJEScBOCIfgZHx9BhLlvPBLqGWWPD9O/rgXAJIJfIgx78ZTn4oC+vPebkL8qhB30unPro6wDVrWc9FvuCeV9w73vbw0y/6x/esHW84ivHQOWY5cfPPXq88HMPgOKoFPDboXIYFIcCciAiDgRkP0TZBsgWQBaIeROfLIGwG8BOQO6Eym2QcBui7ADkJmi4EQjXA3JtePzjrxke/7iroHIlIFce+Ip/t2tf8N473v7/AQAiO6Kk5q8MzgAAAABJRU5ErkJggg==",
    width: "247",
    height: "247",
    overflow: "visible",
    transform: "translate(1.024 1) scale(.0388)"
  })));
};

module.exports.CommentFullL = function CommentFullL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M6.68 14.916a.5.5 0 0 1-.397-.196L4.208 12H2.463C1.656 12 1 11.428 1 10.621V3.463C1 2.656 1.656 2 2.463 2h10.074C13.344 2 14 2.656 14 3.463v7.158c0 .807-.656 1.379-1.463 1.379H9.151l-2.073 2.72a.504.504 0 0 1-.398.196zM2.463 3A.464.464 0 0 0 2 3.463v7.158c0 .255.208.463.463.463h1.993a.5.5 0 0 1 .397.196l1.827 2.312 1.827-2.312a.502.502 0 0 1 .397-.196h3.633a.464.464 0 0 0 .463-.463V3.463A.464.464 0 0 0 12.537 3H2.463zm1.193 2h7.828c.284.024.514.207.514.49a.498.498 0 0 1-.514.496H3.656a.499.499 0 0 1-.514-.496c.001-.283.231-.466.514-.49zm0 3h7.828c.284.024.514.207.514.49a.498.498 0 0 1-.514.496H3.656a.499.499 0 0 1-.514-.496c.001-.283.231-.466.514-.49z"
  }));
};

module.exports.CommentL = function CommentL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M6.68 14.916a.5.5 0 0 1-.397-.196L4.208 12H2.463C1.656 12 1 11.428 1 10.621V3.463C1 2.656 1.656 2 2.463 2h10.074C13.344 2 14 2.656 14 3.463v7.158c0 .807-.656 1.379-1.463 1.379H9.151l-2.073 2.72a.504.504 0 0 1-.398.196zM2.463 3A.464.464 0 0 0 2 3.463v7.158c0 .255.208.463.463.463h1.993a.5.5 0 0 1 .397.196l1.827 2.312 1.827-2.312a.502.502 0 0 1 .397-.196h3.633a.464.464 0 0 0 .463-.463V3.463A.464.464 0 0 0 12.537 3H2.463z"
  }));
};

module.exports.Component24 = function Component24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M20.437 11.5c-.969 0-1.884.472-2.456 1.275l-.039.054a1.186 1.186 0 0 1-.012-.354V8.5a2.503 2.503 0 0 0-2.486-2.499v-.01h-3.972a1.509 1.509 0 0 1-.321-.041l.002-.001a3.004 3.004 0 0 0 1.29-2.465c0-1.654-1.346-3-3-3s-3 1.346-3 3A3.02 3.02 0 0 0 7.718 5.94l.054.039a1.22 1.22 0 0 1-.354.012H3.383v.014A2.5 2.5 0 0 0 .93 8.5h.009l.004 3.908c-.058.426.026 1.211.705 1.453.421.15.811-.02 1.165-.518A2.001 2.001 0 0 1 6.445 14.5c0 1.104-.897 2-2 2a2.01 2.01 0 0 1-1.653-.874c-.396-.575-.819-.575-1.106-.468-.773.281-.752 1.297-.748 1.39v3.909c-.001.015-.008.027-.008.043 0 1.379 1.122 2.5 2.5 2.5h12.5a.5.5 0 0 0 0-1H3.43c-.827 0-1.5-.673-1.5-1.5h.009v-3.971a1.136 1.136 0 0 1 .041-.321l.001.003A3.003 3.003 0 0 0 4.445 17.5c1.654 0 3-1.346 3-3s-1.346-3-3-3a3.02 3.02 0 0 0-2.456 1.275l-.039.054a1.186 1.186 0 0 1-.012-.354V8.5H1.93c0-.827.673-1.5 1.5-1.5v-.009l3.921-.004c.069.009.148.014.232.014.435 0 1.019-.15 1.222-.72.151-.422-.02-.811-.519-1.165a2.002 2.002 0 0 1 1.157-3.632c1.103 0 2 .897 2 2a2.01 2.01 0 0 1-.874 1.653c-.576.396-.573.82-.468 1.106.281.772 1.296.753 1.39.748h3.896c.014.002.027.009.043.009.827 0 1.5.673 1.5 1.5l.004 3.908c-.057.426.026 1.211.705 1.453.42.15.811-.02 1.165-.518a2.001 2.001 0 0 1 3.633 1.156c0 1.104-.897 2-2 2a2.01 2.01 0 0 1-1.653-.874c-.396-.575-.818-.575-1.105-.468-.773.281-.752 1.297-.748 1.39V20a.5.5 0 0 0 1 0v-3.471a1.137 1.137 0 0 1 .04-.321l.001.003a3.008 3.008 0 0 0 2.466 1.289c1.654 0 3-1.346 3-3s-1.347-3-3.001-3z"
  }));
};

module.exports.Component = function Component(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.915 7.344c-.514 0-1.006.192-1.406.555v-1.64a1.77 1.77 0 0 0-1.76-1.767v-.007l-1.631.001c.348-.381.547-.881.547-1.406A2.088 2.088 0 0 0 6.579.995 2.088 2.088 0 0 0 4.495 3.08c0 .514.191 1.004.555 1.406H2.738v.009C1.777 4.511 1 5.295 1 6.259h.005l.005 1.82c-.059.435.093.948.565 1.116.199.072.588.117.951-.395a1.086 1.086 0 0 1 1.971.626c0 .6-.487 1.086-1.086 1.086-.354 0-.688-.176-.896-.475-.348-.504-.756-.422-.914-.363-.466.168-.611.684-.596 1.053v2.506H1A1.77 1.77 0 0 0 2.769 15h6.973a1.77 1.77 0 0 0 1.768-1.768v-2.266c.381.348.881.547 1.406.547a2.088 2.088 0 0 0 2.085-2.086 2.09 2.09 0 0 0-2.086-2.083zm0 3.17c-.355 0-.688-.176-.896-.475-.348-.506-.757-.424-.915-.365-.466.168-.61.684-.595 1.053v2.506a.768.768 0 0 1-.768.768H2.769A.77.77 0 0 1 2 13.232h.005v-2.266a2.085 2.085 0 0 0 3.492-1.539 2.088 2.088 0 0 0-2.086-2.084 2.08 2.08 0 0 0-1.406.555v-1.64H2a.77.77 0 0 1 .769-.768v-.005l2.46-.005c.059.008.119.013.18.013.389 0 .793-.169.938-.579.071-.199.116-.587-.396-.949a1.086 1.086 0 1 1 1.714-.885c0 .355-.176.688-.477.898-.501.346-.421.753-.363.913.168.467.673.613 1.053.595h1.863v.006c.424 0 .768.345.768.768l.004 1.82c-.059.435.094.949.566 1.117.199.072.588.117.95-.395a1.084 1.084 0 1 1 .886 1.712z"
  }));
};

module.exports.ConcentricPieChart = function ConcentricPieChart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M12.184 13.557a7.164 7.164 0 0 1-3.027 1.34l-.016.002A6.522 6.522 0 0 1 7.998 15C4.142 15 1.016 11.831 1 7.97c.015-3.512 2.617-6.405 5.998-6.891v3.062a3.99 3.99 0 0 0-3 3.858 4 4 0 0 0 4 4c.754 0 1.45-.221 2.052-.583l2.134 2.141zm1.16-10.072L11.205 5.63c.492.665.793 1.479.793 2.37a3.97 3.97 0 0 1-1.048 2.679l2.125 2.132A6.975 6.975 0 0 0 14.998 8a6.971 6.971 0 0 0-1.654-4.515zm-.749-.756A6.966 6.966 0 0 0 7.998 1v3a3.96 3.96 0 0 1 2.463.87l2.134-2.141z"
  }));
};

module.exports.Console24 = function Console24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#231F20",
    d: "M6.363 3.5c.311 0 .515.007.57.008h.066c1.438 0 2.622.152 3.002.305.176.444.313 1.864.302 3.197.012 1.315-.126 2.734-.302 3.178-.379.152-1.561.305-2.998.305h-.116c-.01 0-.217.008-.531.008-1.405 0-2.334-.141-2.671-.289-.22-.335-.425-1.691-.378-3.207l.002-.034-.002-.032c-.047-1.487.156-2.819.376-3.148.337-.148 1.268-.291 2.68-.291m0-1c-.869 0-2.517.054-3.217.441-.956.529-.841 3.924-.838 4.034-.003.111-.117 3.557.839 4.086.698.384 2.337.439 3.208.439.344 0 .568-.008.568-.008h.08c.498 0 3.18-.027 3.727-.591.604-.622.574-3.901.574-3.901s.03-3.278-.573-3.9c-.549-.566-3.245-.592-3.731-.592h-.076S6.703 2.5 6.363 2.5zm10.129 1c.31 0 .514.007.568.008h.066c1.439 0 2.623.152 3.002.305.176.443.314 1.864.303 3.197.012 1.314-.126 2.734-.303 3.178-.378.152-1.561.305-2.998.305h-.117c-.008 0-.215.008-.529.008-1.406 0-2.334-.141-2.672-.289-.246-.369-.425-1.859-.377-3.201v-.073c-.048-1.319.129-2.785.375-3.147.336-.148 1.268-.291 2.682-.291m0-1c-.87 0-2.518.054-3.217.441-.957.529-.844 3.924-.84 4.033-.004.111-.117 3.557.84 4.086.697.385 2.337.439 3.209.439.344 0 .567-.008.567-.008h.079c.499 0 3.18-.027 3.727-.591.606-.621.575-3.9.575-3.9s.03-3.278-.574-3.9c-.548-.566-3.242-.592-3.73-.592h-.075s-.223-.008-.561-.008zm-10.133 11c.312 0 .518.008.573.008h.066c1.438 0 2.622.152 3.003.305.176.444.313 1.864.302 3.197.013 1.314-.126 2.734-.302 3.178-.379.152-1.561.305-2.999.305h-.115c-.01 0-.215.008-.527.008-1.408 0-2.337-.142-2.675-.289-.22-.335-.425-1.689-.378-3.207l.002-.033-.002-.031c-.047-1.488.156-2.82.376-3.148.337-.15 1.266-.293 2.676-.293m0-1c-.87 0-2.514.055-3.213.441-.956.528-.842 3.923-.839 4.032-.002.112-.117 3.557.839 4.087.699.386 2.342.44 3.213.44.342 0 .564-.008.564-.008h.079c.499 0 3.181-.027 3.728-.591.604-.622.574-3.901.574-3.901s.03-3.279-.573-3.9c-.549-.566-3.244-.592-3.731-.592h-.075s-.224-.008-.566-.008zm10.129 1c.312 0 .518.008.572.008h.066c1.439 0 2.623.152 3.002.305.176.443.314 1.864.303 3.197.012 1.314-.126 2.734-.303 3.178-.378.152-1.561.305-2.998.305h-.116c-.009 0-.215.008-.527.008-1.408 0-2.337-.142-2.675-.289-.246-.371-.428-1.887-.377-3.197l.001-.041-.001-.039c-.051-1.289.129-2.779.375-3.143.336-.149 1.266-.292 2.678-.292m0-1c-.871 0-2.515.055-3.213.441-.957.528-.844 3.923-.84 4.032-.004.111-.117 3.557.84 4.086.698.386 2.342.44 3.212.44.342 0 .564-.008.564-.008h.079c.499 0 3.18-.027 3.727-.591.606-.621.575-3.9.575-3.9s.03-3.279-.574-3.9c-.548-.566-3.242-.592-3.73-.592h-.075s-.223-.008-.565-.008z"
  }));
};

module.exports.CopyL = function CopyL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M15.562 16H7.438A.44.44 0 0 1 7 15.562V6.438C7 6.197 7.197 6 7.487 6h5.537L16 9v6.562a.44.44 0 0 1-.438.438zM13 7v2h2l-2-2zm2 3h-2.976V7H8v8h7v-5zm-9 1H2V2h4.024v3H10V4L7.024 1H1.487C1.197 1 1 1.197 1 1.438v10.125c0 .24.197.437.438.437H6v-1zm1-9 2 2H7V2z"
  }));
};

module.exports.CopyNode = function CopyNode(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M11 1H4C2.3 1 1 2.3 1 4s1.3 3 3 3h7c1.7 0 3-1.3 3-3s-1.4-3-3-3zm1 8c1.1 0 2 .9 2 2s-.9 2-2 2H5c-1.1 0-2-.9-2-2s.9-2 2-2h7m0-1H5c-1.7 0-3 1.3-3 3s1.3 3 3 3h7c1.7 0 3-1.3 3-3s-1.4-3-3-3z"
  }));
};

module.exports.Cry = function Cry(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 .001 13.999A7 7 0 0 0 8 1zm0 13.012A6.012 6.012 0 1 1 8 1.988a6.012 6.012 0 0 1 0 12.024zM5.583 6a.584.584 0 1 1 0 1.168.584.584 0 0 1 0-1.168zm4.916 0a.585.585 0 1 1-.001 1.17.585.585 0 0 1 .001-1.17zM5.5 11a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.CustomText = function CustomText(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M13.956 12.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .5.5zm.044-3a.5.5 0 0 0-.5-.5H2.456a.5.5 0 0 0 0 1H13.5a.5.5 0 0 0 .5-.5zm-7.5-3A.5.5 0 0 0 6 6H2.456a.5.5 0 0 0 0 1H6a.5.5 0 0 0 .5-.5zm0-3A.5.5 0 0 0 6 3H2.456a.5.5 0 0 0 0 1H6a.5.5 0 0 0 .5-.5zm7.478.846a1.346 1.346 0 1 0-1.092 1.321c-.229.661-.742.835-1.399 1.012l.25.358c1.92-.341 2.264-2.258 2.241-2.242.05-.141 0-.291 0-.449zm-3.5 0a1.346 1.346 0 1 0-1.092 1.321c-.229.661-.742.835-1.4 1.012l.25.358c1.92-.341 2.264-2.258 2.241-2.242.051-.141.001-.291.001-.449z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Cut = function Cut(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M13.503 3.838c.017-.029.038-.061.051-.086.708-1.38-.097-2.604-.097-2.604l-2.594 2.595-1.21 1.21-1.831 1.833-5.425-5.425s-.705 1.122.004 2.502c.39.757 2.292 2.666 3.979 4.366L5.362 9.247c-1.275-.692-2.526-.37-3.468.572C.707 11.008.698 12.913 1.887 14.1s3.129 1.195 4.316.008a3.03 3.03 0 0 0 .702-3.225c.229-.223.634-.615 1.128-1.104.498.486.9.876 1.131 1.098a3.043 3.043 0 0 0 4.996 3.23c1.188-1.188 1.082-3.01-.105-4.197-.941-.942-2.311-1.171-3.584-.478L9.426 8.389c1.166-1.195 2.371-2.472 3.203-3.447 0 0 .742-.849.874-1.104zm-8.168 9.395a1.81 1.81 0 1 1-2.558-2.555 1.81 1.81 0 0 1 2.558 2.555zm2.098-5.498a.75.75 0 1 1 1.061 1.06.75.75 0 0 1-1.061-1.06zm5.856 2.942a1.809 1.809 0 1 1-2.557 2.559 1.809 1.809 0 0 1 2.557-2.559z"
  }));
};

module.exports.Cycle24 = function Cycle24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#231F20",
    d: "M12 22.5C6.21 22.5 1.5 17.789 1.5 12 1.5 6.21 6.21 1.5 12 1.5c5.789 0 10.5 4.71 10.5 10.5a.5.5 0 0 1-1 0c0-5.238-4.262-9.5-9.5-9.5S2.5 6.762 2.5 12s4.262 9.5 9.5 9.5c3.902 0 7.467-2.446 8.868-6.087a.5.5 0 0 1 .933.359C20.253 19.797 16.314 22.5 12 22.5z"
  }));
};

module.exports.Dashboard24 = function Dashboard24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M12 2.559c-1.489 0-2.914.291-4.273.871-1.357.58-2.529 1.361-3.512 2.343-.982.982-1.763 2.154-2.343 3.512A10.767 10.767 0 0 0 1 13.559c0 1.523.295 2.963.884 4.322a10.996 10.996 0 0 0 2.456 3.561h15.32a11.007 11.007 0 0 0 2.456-3.561c.59-1.36.884-2.799.884-4.322 0-1.489-.291-2.914-.871-4.274-.58-1.357-1.36-2.529-2.344-3.512-.981-.982-2.152-1.763-3.513-2.343A10.763 10.763 0 0 0 12 2.559zm6.999 17.311H5.002c-1.621-1.786-2.432-3.889-2.432-6.312a9.25 9.25 0 0 1 1.265-4.727 9.355 9.355 0 0 1 3.438-3.438C8.722 4.552 10.298 4.13 12 4.13s3.278.422 4.727 1.263c1.448.844 2.595 1.989 3.438 3.438s1.265 3.025 1.265 4.727c-.001 2.423-.812 4.526-2.431 6.312zM5.371 13.117l-1.988-.367.197-1.105 1.988.368-.197 1.104zm13.063-1.105 1.988-.369.196 1.104-1.989.37-.195-1.105zM7.287 8.845 5.985 7.297l.86-.711 1.299 1.547-.857.712zm9.428 0-.86-.712 1.302-1.547.859.711-1.301 1.548zm-5.278-3.93h1.129v2.014h-1.129V4.915zm.612 8.693L8.661 9.827l1.89 4.617c-.327.589-.317 1.17.026 1.743.244.393.596.643 1.055.749.457.105.883.032 1.276-.221a1.68 1.68 0 0 0 .749-1.057 1.603 1.603 0 0 0-.208-1.265c-.328-.506-.794-.768-1.4-.785z"
  }));
};

module.exports.DataAgentLegendDimension = function DataAgentLegendDimension(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    id: "XMLID_92_",
    d: "M8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6m0-1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z",
    opacity: "0.5",
    fill: "#00AAEE"
  }));
};

module.exports.DataAgentLegendMeasure = function DataAgentLegendMeasure(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    id: "XMLID_75_",
    d: "M8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6m0-1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zM4 7.5H3v1h1v-1zm9 0h-1v1h1v-1zM5.5 4.8l-.7-.7-.7.7.7.7.7-.7zm6.4 6.4-.7-.7-.7.7.7.7.7-.7zM8.5 4V3h-1v1h1zm0 9v-1h-1v1h1zm2.7-7.5.7-.7-.7-.7-.7.7.7.7zm-6.4 6.4.7-.7-.7-.7-.7.7.7.7z",
    opacity: "0.5",
    fill: "#00AAEE"
  }));
};

module.exports.DataSource24 = function DataSource24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M12 1C7.364 1 2.375 2.398 2.375 5.469v13.062C2.375 21.601 7.364 23 12 23s9.625-1.399 9.625-4.469V5.469C21.625 2.398 16.635 1 12 1zm8.25 17.531c0 1.708-3.693 3.094-8.25 3.094-4.556 0-8.25-1.386-8.25-3.094v-2.569c1.421 1.465 4.846 2.226 8.25 2.226 3.403 0 6.829-.761 8.25-2.226v2.569zm0-4.125h-.003l.003.021c0 1.697-3.693 3.072-8.25 3.072-4.556 0-8.25-1.375-8.25-3.072l.003-.021H3.75v-2.569C5.171 13.3 8.596 14.062 12 14.062c3.403 0 6.829-.762 8.25-2.225v2.569zm0-4.125h-.003l.003.021c0 1.697-3.693 3.072-8.25 3.072-4.556 0-8.25-1.375-8.25-3.072l.003-.021H3.75V7.919C5.552 9.292 8.854 9.938 12 9.938s6.448-.646 8.25-2.018v2.361zM12 8.562c-4.556 0-8.25-1.386-8.25-3.094 0-1.709 3.694-3.094 8.25-3.094 4.557 0 8.25 1.384 8.25 3.094 0 1.709-3.693 3.094-8.25 3.094zm6.188 9.626c.381 0 .688.307.688.688s-.307.688-.688.688a.688.688 0 1 1 0-1.376zm0-4.126c.381 0 .688.307.688.688s-.307.688-.688.688-.688-.307-.688-.688.307-.688.688-.688zm0-4.124c.381 0 .688.307.688.688s-.307.688-.688.688a.688.688 0 0 1 0-1.376z"
  }));
};

module.exports.Data = function Data(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M8 1C4.687 1 2 2.343 2 4v8.479h.034c.315 1.508 2.865 2.684 5.966 2.684 3.242 0 5.877-1.286 5.989-2.895H14V4c0-1.657-2.687-3-6-3zm0 1c3.052 0 5 1.185 5 2s-1.948 2-5 2-5-1.185-5-2 1.948-2 5-2zm0 12.163c-3.052 0-5-1.185-5-2V5.657C4.075 6.466 5.912 7 8 7s3.926-.534 5-1.343v6.506c0 .816-1.948 2-5 2z"
  }));
};

module.exports.Default24 = function Default24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M15.202 22.58a.502.502 0 0 1-.446-.275l-3.688-7.335-4.271 4.55a.5.5 0 0 1-.865-.344l.076-17.098a.5.5 0 0 1 .801-.396l13.542 10.253a.5.5 0 0 1-.245.895l-6.911.793c-.259.026-.522-.166-.554-.44s.166-.521.44-.554l5.671-.65L7.003 3.083l-.065 14.825 3.891-4.145a.503.503 0 0 1 .812.118l3.784 7.528 1.05-.528-2.73-5.389a.5.5 0 1 1 .893-.451l2.957 5.836a.497.497 0 0 1-.222.672l-1.944.978a.524.524 0 0 1-.227.053z"
  }));
};

module.exports.DefaultJustified = function DefaultJustified(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.DeleteColumn = function DeleteColumn(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M5 7v2H1v6h.984L2 10h3v5h6v-5h3v5h1V9h-4V7H5zm7.5-4.207 1.646-1.646a.5.5 0 0 1 .707.707L13.207 3.5l1.646 1.646a.5.5 0 0 1-.707.707L12.5 4.207l-1.646 1.646a.5.5 0 0 1-.708-.707L11.793 3.5l-1.646-1.646a.5.5 0 1 1 .706-.708L12.5 2.793z"
  }));
};

module.exports.DeleteRow = function DeleteRow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M9 11H7v4H1v-.984L6 14v-3H1V5h5V2H1V1h6v4h2v6zm4.207-7.5 1.646-1.646a.5.5 0 0 0-.707-.707L12.5 2.793l-1.646-1.646a.5.5 0 0 0-.707.707L11.793 3.5l-1.646 1.646a.5.5 0 0 0 .707.708L12.5 4.207l1.646 1.646a.5.5 0 1 0 .708-.706L13.207 3.5z"
  }));
};

module.exports.Delete = function Delete(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M13.96 5v8.954c0 .552-.349 1-.9 1H4a1 1 0 0 1-1-1V5H2a1 1 0 0 1 1-1h1-.026 2.05V3c0-.553.397-1 .95-1h3.05c.553 0 .95.447.95 1v1H13.96a1 1 0 0 1 1 1h-1zm-3.937-2h-3.05v1h3.05V3zm3 2h-9.05v9.017h9.05V5zm-6.062 6h-.938V7h.938v4zm4.013 0h-.95V7h.95v4z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Desktop24 = function Desktop24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    d: "M20.4 2h-17C2.1 2 .9 3.1.9 4.5v12C.9 17.9 2 19 3.4 19h8.5v3H8.4c-.3 0-.5.2-.5.5s.2.5.5.5h8c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3.5v-3h7.5c1.4 0 2.5-1.1 2.5-2.5v-12c0-1.4-1.1-2.5-2.5-2.5zm-17 1h17c.8 0 1.5.7 1.5 1.5V14h-20V4.5c0-.8.7-1.5 1.5-1.5zm17 15h-17c-.8 0-1.5-.7-1.5-1.5V15h20v1.5c0 .8-.6 1.5-1.5 1.5zm-9.5-2h3v1h-3v-1z"
  }));
};

module.exports.Desktop = function Desktop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    id: "XMLID_11_",
    d: "M14 1H2c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h6v2H6.3c-.2 0-.3.2-.3.5s.1.5.3.5h4.4c.2 0 .3-.2.3-.5s-.1-.5-.3-.5H9v-2h5c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1zm0 10H2v-1h12v1zM2 9V2h12v7H2z",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }));
};

module.exports.Dials = function Dials(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 128 128",
    "enable-background": "new 0 0 128 128"
  }), React.createElement("path", {
    id: "XMLID_72_",
    d: "M9.6 64.5H4v-.9h5.6v.9zm114.4-1h-5.6v.9h5.6v-.9zM64.5 9.6V4h-.9v5.6h.9zm0 114.4v-5.6h-.9v5.6h.9zm38.3-98.1 4-4-.7-.7-4 4 .7.7zm-80.9 80.9 4-4-.7-.7-4 4 .7.7zm80.2-4 4 4 .7-.7-4-4-.7.7zM21.2 21.9l4 4 .7-.7-4-4-.7.7zm97.3 28 3.6-1-.2-.9-3.6 1 .2.9zM6.2 80l3.6-1-.2-.9-3.6 1 .2.9zm106.7-43.7 3.2-1.9-.5-.8-3.2 1.9.5.8zM12.3 94.4l3.2-1.9-.5-.8-3.2 1.9.5.8zm80.2-78.9 1.9-3.2-.8-.5-1.9 3.2.8.5zM34.4 116.2l1.9-3.2-.8-.5-1.9 3.2.8.5zM79 9.8l1-3.6-.9-.2-1 3.6.9.2zM48.9 122.1l1-3.6-.9-.2-1 3.6.9.2zm1-112.6-1-3.6-.9.3 1 3.6.9-.3zM80 121.8l-1-3.6-.9.2 1 3.6.9-.2zM36.3 15.1l-1.9-3.2-.8.5 1.9 3.2.8-.5zm58.1 100.6-1.9-3.2-.8.5 1.9 3.2.8-.5zM15.5 35.5l-3.2-1.9-.5.8 3.2 1.9.5-.8zm100.7 58.1-3.2-1.9-.5.8 3.2 1.9.5-.8zM9.8 49l-3.6-1-.2.9 3.6 1 .2-.9zm112.3 30.1-3.6-1-.2.9 3.6 1 .2-.9zM86 12.2l1.4-3.5-.9-.4-1.4 3.5.9.4zM41.5 119.6l1.4-3.5-.9-.4-1.4 3.5.9.4zM71.8 8.3l.5-3.7-.9-.1-.5 3.7.9.1zM56.6 123.5l.5-3.7-.9-.1-.5 3.7.9.1zm.5-115.3-.5-3.7-.9.1.5 3.7.9-.1zm15.2 115.2-.5-3.7-.9.1.5 3.7.9-.1zM42.9 11.9l-1.4-3.5-.9.4 1.4 3.5.9-.4zm44.5 107.4-1.4-3.5-.9.4 1.4 3.5.9-.4zM30.1 19.1l-2.3-3-.7.6 2.3 3 .7-.6zm70.8 92.2-2.3-3-.7.6 2.3 3 .7-.6zM19.7 29.4l-3-2.3-.6.7 3 2.3.6-.7zm92.2 70.8-3-2.3-.6.7 3 2.3.6-.7zM12.2 42l-3.5-1.4-.4.9 3.5 1.4.4-.9zm107.4 44.5-3.5-1.4-.4.9 3.5 1.4.4-.9zM8.3 56.2l-3.7-.5-.1.9 3.7.5.1-.9zm115.2 15.2-3.7-.5-.1.9 3.7.5.1-.9zM8.2 70.9l-3.7.5.1.9 3.7-.5-.1-.9zm115.2-15.2-3.7.5.1.9 3.7-.5-.1-.9zM11.9 85.1l-3.5 1.4.4.9 3.5-1.4-.4-.9zm107.4-44.5-3.5 1.4.4.9 3.5-1.4-.4-.9zM19.1 97.9l-3 2.3.6.7 3-2.3-.6-.7zm92.2-70.8-3 2.3.6.7 3-2.3-.6-.7zm-81.9 81.2-2.3 3 .7.6 2.3-3-.7-.6zm70.8-92.2-2.3 3 .7.6 2.3-3-.7-.6z",
    fill: "#5D5D5D"
  }));
};

module.exports.Diamond24 = function Diamond24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "m22.835 8.949-3.479-5.604a.488.488 0 0 0-.289-.201c-.037-.012-.072-.025-.111-.029-.008 0-.016-.006-.024-.006H4.92c-.01 0-.019.007-.029.007a.5.5 0 0 0-.175.046c-.015.006-.03.008-.045.016l-.01.004a.508.508 0 0 0-.154.152c-.002.004-.008.006-.01.01L.987 8.948c-.006.007-.003.016-.007.025a.48.48 0 0 0-.07.24c0 .009.005.017.005.026 0 .016.006.028.009.044.013.089.047.17.101.237.005.007.004.017.01.023l10.562 11.978c.095.107.231.17.375.17.119.033.282-.063.377-.172l5.898-6.782a.501.501 0 0 0-.754-.657l-4.446 5.116 2.834-9.483h5.431l-1.999 2.302a.5.5 0 1 0 .754.658l2.721-3.131a.501.501 0 0 0 .047-.593zM4.914 4.561l2.523 4.152H2.313l2.601-4.152zm3.461 3.77L5.81 4.109h5.013L8.375 8.331zm3.54-4.114 2.606 4.496H9.31l2.605-4.496zM7.949 9.713l2.786 9.32-8.218-9.32h5.432zm1.044 0h5.845l-2.923 9.777-2.922-9.777zm4.015-5.604h5.014l-2.566 4.222-2.448-4.222zm5.917.438 2.586 4.166h-5.118l2.532-4.166z"
  }));
};

module.exports.DiamondOkL = function DiamondOkL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m15.764 7.785-4.426 7.172a.701.701 0 0 1-.561.327l-.031.001a.703.703 0 0 1-.557-.276L7.324 11.44a.698.698 0 0 1 1.112-.842l2.254 2.762 3.893-6.311a.696.696 0 1 1 1.181.736zm-3.696-3.261L6.5 10.215.932 4.524 2.69 1h7.619l1.759 3.524zM6 4.922H2.72L6 8.274V4.922zm1 3.352 3.279-3.352H7v3.352zm3.65-4.352-.81-1.621-1.864 1.621h2.674zM8.662 2H4.348L6.5 3.878 8.662 2zM2.35 3.922h2.679L3.163 2.294 2.35 3.922z"
  }));
};

module.exports.Diamond = function Diamond(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m14.84 5.658-2.154-3.469a.397.397 0 0 0-.216-.157.402.402 0 0 0-.107-.028c-.007 0-.011-.004-.017-.004H3.673c-.006 0-.012.004-.019.005a.373.373 0 0 0-.148.038c-.01.005-.022.006-.032.012-.002.002-.005.001-.008.003a.387.387 0 0 0-.123.122c-.003.003-.007.004-.009.008L1.161 5.656c-.004.007-.001.014-.005.02a.395.395 0 0 0-.056.193c0 .007.004.014.004.021 0 .013.005.023.007.036.011.07.038.134.081.188.004.006.003.013.008.019l6.538 7.415a.4.4 0 0 0 .3.136h.001a.401.401 0 0 0 .301-.138l6.462-7.415a.399.399 0 0 0 .038-.473zM3.668 3.161 5.07 5.469H2.223l1.445-2.308zm6.023 3.108-1.688 5.646-1.688-5.646h3.376zm-3.144-.8 1.456-2.512 1.456 2.512H6.547zM8.837 2.8h2.785l-1.426 2.346L8.837 2.8zM5.81 5.146 4.384 2.8h2.785L5.81 5.146zm-.33 1.123 1.587 5.31-4.682-5.31H5.48zm5.046 0h3.095L8.91 11.674l1.616-5.405zm.411-.8 1.406-2.315 1.438 2.315h-2.844z"
  }));
};

module.exports.Dimensions = function Dimensions(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M15 8c0-.957-.193-1.869-.541-2.699v-.026h-.009a7.004 7.004 0 0 0-6.369-4.271L8.073 1l-.006.003C8.044 1.003 8.022 1 8 1a7 7 0 0 0 0 14l.066-.003.007.003.008-.004A6.998 6.998 0 0 0 15 8zm-6.926 6.035c-.487-.404-1.361-1.4-1.762-3.526h3.52c-.401 2.131-1.275 3.126-1.758 3.526zM6.201 9.704a13.599 13.599 0 0 1 .043-3.623H9.9a13.45 13.45 0 0 1 .045 3.623H6.201zM1.805 8c0-.67.11-1.314.308-1.919h3.306c-.078.59-.124 1.243-.124 1.967 0 .604.037 1.148.093 1.656H2.049A6.145 6.145 0 0 1 1.805 8zM8.07 1.985c.463.412 1.262 1.387 1.687 3.29H6.383c.421-1.909 1.216-2.877 1.687-3.29zm2.657 4.096h3.16c.197.605.307 1.249.307 1.919 0 .592-.088 1.162-.244 1.704h-3.192c.056-.508.093-1.052.093-1.656 0-.724-.046-1.377-.124-1.967zm2.828-.806h-2.962c-.339-1.662-.951-2.716-1.489-3.365a6.21 6.21 0 0 1 4.451 3.365zM7.063 1.884c-.542.646-1.167 1.707-1.51 3.391H2.445a6.199 6.199 0 0 1 4.618-3.391zM2.34 10.509h3.162c.32 1.808.961 2.933 1.526 3.602a6.209 6.209 0 0 1-4.688-3.602zm6.801 3.576c.56-.672 1.187-1.793 1.503-3.576h3.015a6.212 6.212 0 0 1-4.518 3.576z"
  }));
};

module.exports.DirectionHorizontal = function DirectionHorizontal(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M1 1h2v13H1V1zm12.875 6.14-3.156-3.015a.412.412 0 0 0-.594 0 .409.409 0 0 0-.125.297v2.593H4.53c-.293 0-.531.2-.53.483-.001.284.237.465.531.465H10v2.615c0 .113.041.213.125.297.085.084.184.125.297.125s.213-.041.297-.125l3.156-3.141A.409.409 0 0 0 14 7.438a.411.411 0 0 0-.125-.298z",
    "clip-rule": "evenodd"
  }));
};

module.exports.DirectionVertical = function DirectionVertical(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M1 14v-2h13v2H1zM7.14 1.125 4.125 4.281a.412.412 0 0 0 0 .594.409.409 0 0 0 .297.125h2.593v5.47c0 .293.2.531.483.53.283.001.464-.237.464-.531V5h2.615a.407.407 0 0 0 .297-.125c.085-.085.126-.184.126-.297s-.041-.213-.125-.297L7.734 1.125A.409.409 0 0 0 7.438 1a.411.411 0 0 0-.298.125z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Dislike24 = function Dislike24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    d: "M5.9 17h-3c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h5v13c0 1.1-.9 2-2 2zM4.4 4.5c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm17.5 10.4L20 2.8c-.1-.4-.5-.8-.9-.8H8.9v14l3 5.6c.2.2.5.4.8.4h3.1c.3 0 .5-.1.7-.3.2-.2.2-.5.2-.8L15.4 16H21c.3 0 .5-.1.7-.3.2-.2.3-.5.2-.8z"
  }));
};

module.exports.DislikeFill = function DislikeFill(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M5 11c0 .6-.4 1-1 1H2c-.5 0-1-.4-1-1V2c0-.5.5-1 1-1h3v10zm1 0 2 3.7c.1.2.3.3.5.3h2.1c.2 0 .4-.1.5-.2.1-.1.2-.3.1-.5l-.5-3.3h3.7c.2 0 .4-.1.5-.2.1-.1.2-.3.1-.5l-1.3-8.8c0-.3-.3-.5-.6-.5H6v10z"
  }));
};

module.exports.DislikeL24 = function DislikeL24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    d: "M21.8 15.7c-.2.2-.4.3-.7.3h-5.6l1.3 4.9c.1.3 0 .6-.2.8-.2.2-.4.3-.7.3h-3.1c-.3 0-.7-.2-.8-.5L9 16H7.7c-.3.6-1 1-1.7 1H3c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h5v13h1.6l3.3 6h2.9l-1.6-6H21L19.1 3h-8.6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h8.6c.5 0 .8.3.9.8l2 12.1c0 .3 0 .6-.2.8zM7 3H3c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V3zM5.5 5.5c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1z"
  }));
};

module.exports.Dislike = function Dislike(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M14.9 10.8c-.1.1-.3.2-.5.2h-3.7l.5 3.3c0 .2 0 .4-.1.5-.1.1-.3.2-.5.2H8.5c-.2 0-.4-.1-.5-.3L6.2 11H6c0 .5-.5 1-1 1H2c-.5 0-1-.5-1-1V2c0-.5.5-1 1-1h11.1c.3 0 .6.2.6.5l1.3 8.8c0 .2 0 .3-.1.5zM2 2v9h3V2H2zm10.8 0H6v8h.8l.3.6L8.8 14h1.4l-.5-2.8-.2-1.2H14l-1.2-8z"
  }));
};

module.exports.DocCsv = function DocCsv(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.024 1H1.487C1.197 1 1 1.197 1 1.438v13.125c0 .24.197.437.438.437h13.125c.24 0 .437-.197.437-.438V4l-2.976-3zM12 2l2 2h-2V2zm2.024 12H2V2h9.024v3h3v9zM3 6h3v1H4v3h2v1H3V6zm4 0h2v1H8v1h1v3H7v-1h1V9H7V6zm4 0v4h-1V6h1zm2 4h-1V6h1v4zm-2 0h1v1h-1v-1z"
  }));
};

module.exports.DocPdf = function DocPdf(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.024 1H1.487C1.197 1 1 1.197 1 1.438v13.125c0 .24.197.437.438.437h13.125c.24 0 .437-.197.437-.438V4l-2.976-3zM14 14H2V2h9.024v3H14v9zM12 4V2l2 2h-2zM3 6v5h1V9h2V6H3zm2 2H4V7h1v1zm3 2h1v1H7V6h2v1H8v3zm1-3h1v3H9V7zm2-1h2v1h-1v1h1v1h-1v2h-1V6z"
  }));
};

module.exports.DocTxt = function DocTxt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.024 1H1.487C1.197 1 1 1.197 1 1.438v13.125c0 .24.197.437.438.437h13.125c.24 0 .437-.197.437-.438V4l-2.976-3zM14 14H2V2h9.024v3H14v9zM12 4V2l2 2h-2zM6 6v1H5v4H4V7H3V6h3zm5 0h2v1h-1v4h-1V6zM8 6v2H7V6h1zm0 2h1v1H8V8zm1-2h1v2H9V6zM7 9h1v2H7V9zm2 2V9h1v2H9z"
  }));
};

module.exports.DocXls = function DocXls(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4 6v2H3V6h1zm0 3h1V8H4v1zm1-1h1V6H5v2zm-2 3h1V9H3v2zm3 0V9H5v2h1zm9-7v10.562a.44.44 0 0 1-.438.438H1.438A.44.44 0 0 1 1 14.562V1.438C1 1.197 1.197 1 1.487 1h10.537L15 4zm-3 0h2l-2-2v2zm2.024 1h-3V2H2v12h12.024V5zM8 6H7v5h3v-1H8V6zm3 3h1v1h-1v1h2V8h-1V7h1V6h-2v3z"
  }));
};

module.exports.DocumentFull = function DocumentFull(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M14.562 15H2.438A.44.44 0 0 1 2 14.562V1.438C2 1.197 2.197 1 2.487 1h9.537L15 4v10.562a.44.44 0 0 1-.438.438zM12 2v2h2l-2-2zm2 3h-2.976V2H3v12h11V5zm-4-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm3 2a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 .5-.5zm0 2a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 .5-.5zm0 2a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 .5-.5z"
  }));
};

module.exports.Document = function Document(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M14.562 15H2.438A.44.44 0 0 1 2 14.562V1.438C2 1.197 2.197 1 2.487 1h9.537L15 4v10.562a.44.44 0 0 1-.438.438zM12 2v2h2l-2-2zm2 3h-2.976V2H3v12h11V5z"
  }));
};

module.exports.Dot = function Dot(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "7",
    fill: "#010101"
  }));
};

module.exports.Download = function Download(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M14 14.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .5.5zM7.486 1.514v8.734l-2.4-2.401a.514.514 0 0 0-.726.726l3.276 3.277c.01.01.022.013.032.021a.49.49 0 0 0 .135.09.53.53 0 0 0 .175.035c.008-.001.014.004.022.004.012 0 .021-.007.032-.007a.548.548 0 0 0 .164-.032.52.52 0 0 0 .159-.106l.008-.005 3.276-3.277a.51.51 0 0 0 0-.725.514.514 0 0 0-.726 0l-2.401 2.401.005-8.734C8.518 1.23 8.288 1 8.005 1s-.519.23-.519.514z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Drag = function Drag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "m13.9 7.279-2.332-2.187A.329.329 0 0 0 11.334 5a.319.319 0 0 0-.234.093.282.282 0 0 0-.1.219V7H8V4h1.688a.289.289 0 0 0 .22-.1.335.335 0 0 0 .092-.234.338.338 0 0 0-.093-.234L7.72 1.1a.292.292 0 0 0-.441 0L5.093 3.432A.325.325 0 0 0 5 3.666c0 .091.029.169.093.234.061.068.134.1.219.1H7v3H4V5.312a.284.284 0 0 0-.1-.22A.322.322 0 0 0 3.666 5a.325.325 0 0 0-.234.093L1.1 7.279a.293.293 0 0 0 0 .441l2.332 2.188a.342.342 0 0 0 .468-.001.287.287 0 0 0 .1-.219V8h3v3H5.312a.284.284 0 0 0-.22.1.322.322 0 0 0-.092.234c0 .089.029.167.093.234L7.279 13.9a.293.293 0 0 0 .441 0l2.188-2.332a.342.342 0 0 0-.001-.468.287.287 0 0 0-.219-.1H8V8h3v1.688c0 .084.032.157.1.22.065.06.143.092.234.092a.338.338 0 0 0 .234-.093L13.9 7.72a.292.292 0 0 0 0-.441z"
  }));
};

module.exports.Edit = function Edit(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m13.482 3.021-.567-.565a1.554 1.554 0 0 0-2.198-.001L3.545 9.626c-.214.215-1.013 3.231-1.065 3.302l-.198.793.792-.199c.069-.052 3.085-.853 3.3-1.066l7.172-7.173c.303-.303.455-.703.454-1.099.001-.395-.216-.862-.518-1.163zm-7.803 8.741c.013.063-2.348.907-2.354.901.006.006.852-2.354.915-2.344l5.454-5.454 1.441 1.44-5.456 5.457zm7.173-7.173L11.83 5.611l-1.439-1.44 1.021-1.022a.575.575 0 0 1 .81 0l.565.566c.112.114.232.321.231.469a.557.557 0 0 1-.166.405z"
  }));
};

module.exports.EmptyBox = function EmptyBox(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "m14.955 4.641.001-.004a.235.235 0 0 0 .019-.043l.01-.021c.004-.012.004-.022.007-.033.003-.013.006-.024.007-.035v-.019c.001-.018.002-.034 0-.051l-.005-.024c-.002-.014-.004-.029-.008-.044l-.008-.02a.366.366 0 0 0-.018-.046l-.001-.003a.226.226 0 0 0-.013-.02c-.008-.012-.015-.025-.024-.036l-.025-.027-.023-.023a.27.27 0 0 0-.039-.027l-.016-.011-.006-.003-.002-.001-4.246-2.386-.007-.004-.032-.014a.365.365 0 0 0-.035-.014l-.021-.004a.263.263 0 0 0-.047-.01h-.016a.313.313 0 0 0-.053.001l-.02.004a.294.294 0 0 0-.048.01l-.022.009c-.015.006-.028.011-.043.019l-.006.003L8 3.003 5.785 1.764l-.006-.003c-.014-.008-.029-.012-.043-.018a.497.497 0 0 0-.022-.009.295.295 0 0 0-.05-.01l-.017-.004a.351.351 0 0 0-.056-.001h-.012a.299.299 0 0 0-.052.01l-.016.003-.04.017a.108.108 0 0 0-.028.011l-.008.004L1.188 4.15l-.006.003c-.007.004-.012.009-.017.013a.24.24 0 0 0-.063.05l-.024.026c-.01.011-.017.025-.025.037l-.012.018-.001.004c-.008.014-.013.029-.018.043-.003.008-.007.015-.009.023-.004.011-.005.023-.007.036-.002.011-.005.021-.006.032v.069l.006.028a.257.257 0 0 0 .008.04.214.214 0 0 1 .01.022c.006.015.012.03.019.043l.001.004c.002.002.005.004.006.008a.368.368 0 0 0 .064.077c.015.014.032.026.05.039l.019.013.006.003L3.096 5.79l-1.657.8c-.006.002-.012.007-.018.01-.012.007-.023.013-.033.021-.01.006-.018.014-.027.022s-.018.015-.025.024l-.025.03-.014.017c-.002.001-.003.005-.005.008l-.018.033-.014.03-.01.032-.007.036-.003.032-.002.035c0 .013.002.023.004.034a.2.2 0 0 0 .014.066.235.235 0 0 0 .014.037l.003.01.007.01c.013.022.026.045.044.065.004.004.007.01.012.014.019.02.039.037.062.054l2.144 1.424a.342.342 0 0 0-.01.079v2.118l.002.018a.4.4 0 0 0 .005.051c.002.012.006.021.01.033a.414.414 0 0 0 .01.033c.004.012.01.021.015.031.005.01.01.021.017.031.006.01.014.018.021.027.008.008.014.018.022.027l.038.031c.006.004.01.01.016.012l.001.002 4.109 2.809v.002l.024.012.023.014c.013.006.026.012.04.016a.505.505 0 0 0 .035.01c.026.006.052.01.079.01v.002L8 13.998a.333.333 0 0 0 .078-.01c.006 0 .01-.002.016-.004a.505.505 0 0 0 .059-.022.485.485 0 0 0 .023-.012l.023-.014c.001 0 .002 0 .002-.002l4.109-2.811c.007-.004.012-.01.018-.014l.035-.029.023-.027c.006-.01.014-.018.021-.027l.016-.031c.006-.01.012-.02.016-.031l.011-.033c.003-.012.007-.021.009-.033a.319.319 0 0 0 .006-.053l.002-.016V8.712a.327.327 0 0 0-.01-.078l2.145-1.425a.525.525 0 0 0 .062-.053l.011-.015a.36.36 0 0 0 .051-.075l.004-.009a.292.292 0 0 0 .014-.038l.01-.029c.002-.012.004-.023.004-.036.002-.011.004-.021.004-.033l-.001-.035-.003-.033-.008-.033c-.004-.012-.006-.023-.011-.034l-.013-.028a.253.253 0 0 0-.02-.036l-.004-.008-.014-.016a.376.376 0 0 0-.05-.054.186.186 0 0 0-.027-.022.186.186 0 0 0-.035-.022c-.006-.003-.012-.009-.018-.011l-1.656-.8 1.906-1.008.006-.004.018-.012a.311.311 0 0 0 .053-.041l.018-.017a.291.291 0 0 0 .045-.061l.007-.005zM10.388 9.15 8.699 8.048l3.42-1.843 1.564.755-3.295 2.19zm-4.776 0L2.316 6.96l1.564-.755L7.3 8.048 5.612 9.15zM5.61 2.486l1.667.934-3.396 1.975-1.777-.939 3.506-1.97zM8 7.613 4.622 5.792 8 3.829l3.379 1.963L8 7.613zm.722-4.194 1.667-.934 3.507 1.97-1.776.939-3.398-1.975zm-3.31 6.458a.196.196 0 0 0 .014.006.35.35 0 0 0 .062.029.429.429 0 0 0 .029.012.335.335 0 0 0 .089.012l.004.002.004-.002c.03 0 .06-.004.089-.012l.028-.012a.307.307 0 0 0 .062-.027l.013-.006L7.643 8.68v4.283l-3.395-2.32V9.104l1.164.773zm6.34.766-3.395 2.32V8.68l1.837 1.199a.387.387 0 0 0 .075.035c.01.002.018.006.027.01.029.008.06.012.09.012l.004.002.002-.002a.29.29 0 0 0 .119-.024.392.392 0 0 0 .062-.029c.005-.004.01-.004.014-.006l1.165-.773v1.539z"
  }));
};

module.exports.Enterprise = function Enterprise(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M13.5 0h-5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5zM13 1v13H9V1h4zm-1 3h-2V2h2v2zm0 3h-2V5h2v2zm0 3h-2V8h2v2zm-2 3v-2h2v2h-2zM6.5 6H6V3H4.5V1h-1v2H2v3h-.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zM3 4h2v2H3V4zm3 3v7H2V7h4zm-1 3H3V8h2v2zm-2 3v-2h2v2H3z",
    "clip-rule": "evenodd"
  }));
};

module.exports.ExchangeXy = function ExchangeXy(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M5.866 14.836a.367.367 0 0 1-.507.001.36.36 0 0 1-.001-.509l1.431-1.436-.484-.002c-2.558-.01-3.539-1.139-3.897-1.81a2.285 2.285 0 0 1-.284-.971c.624 1.315 2.126 2.063 4.185 2.063h.489l-1.439-1.437a.36.36 0 0 1 0-.508.367.367 0 0 1 .508 0l2.051 2.048c.067.069.105.159.105.255s-.038.188-.105.254l-2.052 2.052zM9.092 3.152a.364.364 0 0 0 .001.51l2.051 2.048a.37.37 0 0 0 .508 0 .36.36 0 0 0-.002-.508l-1.438-1.437h.488c2.057 0 3.562.749 4.184 2.064a2.273 2.273 0 0 0-.281-.971c-.359-.67-1.342-1.8-3.898-1.811l-.484-.002 1.43-1.436a.358.358 0 0 0 0-.508.367.367 0 0 0-.506 0L9.092 3.152zM1.968 7.121c-.11.154-.146.3-.111.438a.541.541 0 0 0 .245.332c.308.205.564.164.77-.125l4.147-5.802a.525.525 0 0 0 .104-.39c-.017-.131-.111-.249-.277-.351-.167-.103-.321-.13-.462-.082-.141.048-.274.159-.395.332L1.968 7.121zm1.203-5.773c-.111-.147-.222-.226-.342-.236-.12-.009-.261.044-.428.159a.595.595 0 0 0-.231.342.448.448 0 0 0 .047.38l4.147 5.763a.647.647 0 0 0 .322.26c.119.039.268 0 .448-.115.167-.109.262-.223.283-.342a.382.382 0 0 0-.061-.313L3.171 1.348zm10.026 10.67L14.898 8.9A.74.74 0 0 0 15 8.534c-.002-.115-.08-.228-.236-.337a.704.704 0 0 0-.398-.095c-.08.006-.16.027-.236.062s-.137.091-.182.168l-1.357 2.617-1.404-2.656c-.07-.128-.182-.191-.332-.191s-.289.038-.418.115a.47.47 0 0 0-.232.332.573.573 0 0 0 .059.39l1.703 3.079V14.5c0 .115.047.229.139.337s.249.163.474.163.385-.051.477-.154a.506.506 0 0 0 .141-.346v-2.482z"
  }));
};

module.exports.ExitFullscreen = function ExitFullscreen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "m6 5.482-.002.01.002.009a.483.483 0 0 1-.137.332c-.005.005-.007.012-.011.016-.016.016-.038.026-.056.04A.487.487 0 0 1 5.499 6l-.008-.001L5.482 6H1.52A.509.509 0 0 1 1 5.5a.509.509 0 0 1 .518-.5h2.775L1.156 1.865a.51.51 0 0 1-.012-.721.507.507 0 0 1 .72.013L5 4.293V1.519A.509.509 0 0 1 5.5 1c.275-.002.5.232.5.518v3.964zM13.482 5h-2.775l3.137-3.136a.51.51 0 0 0 .013-.721.507.507 0 0 0-.72.013l-3.136 3.136V1.519A.51.51 0 0 0 9.5 1a.509.509 0 0 0-.5.518v3.964l.002.01L9 5.501c0 .129.054.244.137.332.005.005.007.012.012.016.016.016.038.026.057.04A.477.477 0 0 0 9.501 6l.008-.001.009.001h3.963A.508.508 0 0 0 14 5.5a.509.509 0 0 0-.518-.5zM6 9.5a.485.485 0 0 0-.137-.332c-.005-.005-.007-.012-.011-.017-.017-.015-.038-.025-.056-.039A.486.486 0 0 0 5.499 9l-.008.002L5.482 9H1.52a.51.51 0 0 0-.52.5c-.002.275.232.5.518.5h2.775l-3.137 3.137a.51.51 0 0 0-.013.721.507.507 0 0 0 .72-.014l3.136-3.136v2.774c0 .287.226.52.501.518.275.004.5-.23.5-.518V9.52l-.002-.01L6 9.5zm4.707.5h2.775A.51.51 0 0 0 14 9.5a.51.51 0 0 0-.52-.5H9.518l-.009.002L9.501 9a.486.486 0 0 0-.297.112c-.018.014-.039.024-.056.039-.004.005-.006.012-.011.017A.485.485 0 0 0 9 9.5l.002.01L9 9.52v3.963c0 .287.225.521.5.517a.508.508 0 0 0 .501-.518v-2.774l3.136 3.136a.507.507 0 0 0 .72.014.51.51 0 0 0-.013-.721L10.707 10z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Expand = function Expand(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M6 7.312a.303.303 0 0 0-.093-.22A.3.3 0 0 0 5.688 7H1.312a.298.298 0 0 0-.22.093.3.3 0 0 0-.092.219c0 .083.03.157.093.22L3.28 9.719c.062.062.136.093.22.093s.157-.031.22-.094l2.188-2.187A.3.3 0 0 0 6 7.312zM15 5.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 .5.5zm0 2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 .5.5zm0 2a.5.5 0 0 1-.5.5h-7a.5.5 0 1 1 0-1h7a.5.5 0 0 1 .5.5zm0 2a.5.5 0 0 1-.5.5h-7a.5.5 0 1 1 0-1h7a.5.5 0 0 1 .5.5z"
  }));
};

module.exports.ExportExcel = function ExportExcel(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M10.951 6.95H10V6h.951v.95zm0 1.088H10v.95h.951v-.95zm0 1.962H10v.95h.951V10zm0 2.051H10V13h.951v-.949zm2.044-4.013h-.951v.95h.951v-.95zm0 1.962h-.951v.95h.951V10zm0 2.051h-.951V13h.951v-.949zM1.043 3.78v8.512l6.921.69V3.049l-6.921.731zm5.371 6.594c-.136.088-.249.117-.34.088a.501.501 0 0 1-.244-.197L4.505 8.422l-1.322 1.851c-.156.219-.35.25-.584.094a.417.417 0 0 1-.186-.251c-.026-.104.001-.216.084-.332l1.485-2.087-1.295-1.801a.342.342 0 0 1-.037-.289.446.446 0 0 1 .175-.259c.126-.087.234-.127.324-.12s.177.067.26.179l1.1 1.55 1.037-1.455c.092-.131.191-.215.299-.252s.224-.016.35.062c.126.078.197.167.211.266s-.012.199-.08.295L5.028 7.689l1.553 2.188c.049.068.064.147.048.237s-.089.178-.215.26zM12.1 1.032H2.438A.44.44 0 0 0 2 1.47v1.346l1-.092v-.749h8V5h3v9.032H3v-.68l-1-.096v1.306c0 .242.197.438.438.438h12.125c.24 0 .437-.196.437-.438V4l-2.9-2.968zm-.125 3V2.1L14 4.032h-2.025z"
  }));
};

module.exports.Export = function Export(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M14.803 5.709c0 .012-.006.02-.006.032a.544.544 0 0 1-.033.163.516.516 0 0 1-.106.158l-.005.004-3.777 3.77c-.1.101-.23.136-.362.136s-.264-.077-.364-.178a.582.582 0 0 1 0-.782L13.051 6H4.396C4.064 6 2 6.91 2 9.431V12s.074.611-.493.611C.986 12.611 1 12 1 12V9.431c0-2.822 2.115-4.168 3.182-4.395.035-.008.119-.036.156-.036h8.713l-2.9-2.802c-.201-.2-.201-.427 0-.626a.511.511 0 0 1 .725 0l3.777 3.775c.01.01.014.022.021.032a.564.564 0 0 1 .09.136.58.58 0 0 1 .035.174c0 .007.004.013.004.02zM14 11v3H2c-1 0-1 1 0 1h12a1 1 0 0 0 1-1v-3c0-1-1-1-1 0z"
  }));
};

module.exports.File = function File(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M10 1 14 5 10 5z"
  }), React.createElement("path", {
    d: "M14 12a1 1 0 0 1-1 1H4V2a1 1 0 0 1 1-1h4v5h5v6z"
  }), React.createElement("path", {
    d: "M12 14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1v11h9z"
  }));
};

module.exports.Filter = function Filter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#272636",
    d: "M14.811 3.294a1.84 1.84 0 0 0-1.838-1.84H3.03c-1.015 0-1.84.825-1.84 1.84 0 .446.166.868.457 1.203.018.025.028.054.051.077l4.079 4.078v4.279a.517.517 0 0 0 1.034 0V8.438a.516.516 0 0 0-.151-.365L2.465 3.88c-.008-.009-.01-.021-.019-.029a.808.808 0 0 1 .584-1.364h9.943a.807.807 0 0 1 .584 1.361c-.004.004-.006.009-.008.013L9.205 8.204a.512.512 0 0 0-.15.365v5.461a.515.515 0 1 0 1.032 0V8.783l4.215-4.214c.006-.006.008-.015.014-.021.317-.341.495-.786.495-1.254z"
  }));
};

module.exports.Fire = function Fire(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M6.532 14.845c-.761-.451-1.306-1.244-1.337-2.177-.045-1.743 1.166-2.598 1.883-3.766 1.026-1.68.746-2.722.746-2.722s.856.482 1.354 2.271a4.14 4.14 0 0 1 .14 1.557c-.077 1.26-.622 2.395-.622 2.395s.949-.202 1.213-1.929c.437.451.841 1.104.887 1.789.078 1.183-.621 2.271-1.68 2.737 1.833-.42 3.143-1.975 3.594-3.111.575-1.43.42-2.706.326-3.811-.124-1.508.404-2.629.404-2.629s-1.011.296-1.758 1.524c-.342.561-.482 1.384-.482 1.384s.078-.73-.405-2.068c-.481-1.307-.918-1.773-1.183-2.737-.341-1.292.42-2.552.42-2.552s-3.016.561-4.386 3.189c-1.213 2.333-.715 3.734-.715 3.734s-.514-.483-.778-1.152-.205-1.275-.205-1.275-2.144 2.364-1.101 5.336c.7 2.084 2.052 3.453 3.685 4.013z"
  }));
};

module.exports.Fitscreen24 = function Fitscreen24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "m14 9.501.002-.009L14 9.481V4.518c0-.287.225-.521.5-.518a.51.51 0 0 1 .501.519V9h4.481a.51.51 0 0 1 .518.5c0 .275-.23.5-.52.5h-4.963l-.009-.002-.007.002a.482.482 0 0 1-.296-.111c-.02-.015-.041-.023-.057-.04-.005-.005-.007-.011-.012-.017A.49.49 0 0 1 14 9.501zM8.5 4a.51.51 0 0 0-.501.519V9H3.518A.509.509 0 0 0 3 9.5c0 .275.23.5.52.5h4.963l.009-.002.007.002a.482.482 0 0 0 .296-.111c.02-.015.041-.023.057-.04.005-.005.007-.011.012-.017A.49.49 0 0 0 9 9.501l-.002-.009L9 9.481V4.518A.507.507 0 0 0 8.5 4zm10.98 11h-4.963l-.009.002-.007-.002a.486.486 0 0 0-.297.112c-.019.014-.04.022-.056.039-.005.005-.007.011-.012.017a.49.49 0 0 0-.136.331l.002.009-.002.011v4.964c0 .286.225.521.5.518a.51.51 0 0 0 .501-.519V16h4.481a.51.51 0 0 0 .518-.5.51.51 0 0 0-.52-.5zm-10.617.168c-.005-.006-.007-.012-.012-.017-.016-.017-.037-.025-.056-.039A.48.48 0 0 0 8.499 15l-.008.002L8.482 15H3.52a.51.51 0 0 0-.52.5c-.002.275.232.5.518.5h4.481v4.481c0 .288.226.52.501.519.275.003.5-.231.5-.518v-4.964l-.002-.011.002-.008a.487.487 0 0 0-.137-.331zM11.5 11a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 11.5 11z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Fliter = function Fliter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#272636",
    d: "M15 3.544C15 2.529 14.176 2 13.162 2H3.22c-1.015 0-1.84.529-1.84 1.544 0 .446.166.72.457 1.055.018.025.045-.02.067.003L6 8.605v4.279c0 .285.215.517.5.517s.5-.231.5-.516V8.392a.516.516 0 0 0-.151-.365L2.655 3.834c-.008-.009-.01-.021-.019-.029-.144-.15-.224-.069-.224-.277.001-.446.362-.528.808-.528h9.942c.443 0 .805.082.805.527 0 .207-.078.264-.221.414-.004.004-.005-.061-.008-.057L9.272 8.193c-.096.097-.272.194-.272.33v5.461c0 .286.215.516.5.516s.5-.23.5-.516V8.737l4.352-4.214c.006-.006.077.133.084.126.318-.34.564-.637.564-1.105z"
  }));
};

module.exports.FolderOpen = function FolderOpen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#231F20",
    fillRule: "evenodd",
    d: "M2.821 2h10.133s.992.031 1.01.902c.018.88-1.01.883-1.01.883h-7.32s-.775-.119-1.085.695c-.12.314-1.147 3.184-1.548 4.44-.113.357.157.453.377.459.23.008.437.004.627 0 .256-.002.474-.1.592-.458.257-.777 1.089-2.85 1.198-3.123.279-.705.645-.632 1.049-.632h7.683c.955 0 1.313.516 1.036 1.312L14.4 12.193c-.298.916-1.19 1.729-2.146 1.729h-9.4c-.996 0-1.854-.85-1.854-1.805v-8.35C1 2.812 1.867 2 2.821 2z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Folder = function Folder(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M2.863 2h4.493c.912 0 .91 2.013 2.201 2.013h3.578c1.03 0 1.865.835 1.865 1.864v6.229a1.864 1.864 0 0 1-1.864 1.863H2.863A1.862 1.862 0 0 1 1 12.106V3.864C1 2.834 1.835 2 2.863 2z",
    "clip-rule": "evenodd"
  }));
};

module.exports.FontBold = function FontBold(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M4 13V2h4.742c2.442 0 3.25 1.45 3.266 2.617.014.983-.239 2.37-1.713 2.719 1.775.354 2.144 1.389 2.144 2.664 0 1.241-.676 3-3.066 3H4zm1.959-6.023h2.188c.88 0 2.013-.725 2.013-2.027 0-1.719-1.208-2.066-2.141-2.066h-2.06v4.093zm0 5.14h2.117c1.156 0 2.174-.802 2.174-2.125 0-1.516-1.036-2.133-2.229-2.133H5.959v4.258z"
  }));
};

module.exports.FontColorMergeA = function FontColorMergeA(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M12.461 10.24h-.701L8.448 2.157s-.098-.134-.296-.155c-.199-.021-.508.103-.508.103L4.108 10.24h-.145c-.298 0-.389.129-.389.404 0 .272.16.354.457.354h2.062c.297 0 .539-.08.539-.354 0-.274-.241-.404-.539-.404h-.531l.744-1.752h3.838l.756 1.752h-.854c-.298 0-.539.129-.539.404 0 .272.242.354.54.354h2.413c.299.002.54-.078.54-.353 0-.275-.241-.405-.539-.405zm-5.81-2.51 1.635-3.673L9.839 7.73H6.651z"
  }));
};

module.exports.FontColorMerge = function FontColorMerge(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M12.461 10.24h-.701L8.448 2.157s-.098-.134-.296-.155c-.199-.021-.508.103-.508.103L4.108 10.24h-.145c-.298 0-.389.129-.389.404 0 .273.16.354.457.354h2.062c.297 0 .539-.08.539-.354s-.241-.404-.539-.404h-.531l.744-1.752h3.838l.756 1.752h-.854c-.298 0-.539.129-.539.404 0 .273.242.354.54.354h2.413c.299.002.54-.078.54-.353 0-.275-.241-.405-.539-.405zm-5.81-2.51 1.635-3.673L9.839 7.73H6.651zM14.5 14.5h-12v-2h12v2z"
  }));
};

module.exports.FontColor = function FontColor(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M12.461 10.24h-.701L8.448 2.157s-.098-.134-.296-.155c-.199-.021-.508.103-.508.103L4.108 10.24h-.145c-.298 0-.389.129-.389.404 0 .274.16.355.457.355h2.062c.297 0 .539-.08.539-.355 0-.274-.241-.404-.539-.404h-.531l.744-1.752h3.838l.756 1.752h-.854c-.298 0-.539.129-.539.404 0 .274.242.355.54.355h2.413c.299.001.54-.079.54-.354 0-.275-.241-.405-.539-.405zm-5.81-2.51 1.635-3.673L9.839 7.73H6.651z"
  }), React.createElement("path", {
    fill: "#95CE76",
    d: "M2.524 12.5H3.524V13.5H2.524z"
  }), React.createElement("path", {
    fill: "#89C765",
    d: "M3.5 12.5H4.5V13.5H3.5z"
  }), React.createElement("path", {
    fill: "#93CA64",
    d: "M4.5 12.5H5.5V13.5H4.5z"
  }), React.createElement("path", {
    fill: "#A1CF6E",
    d: "M5.5 12.5H6.5V13.5H5.5z"
  }), React.createElement("path", {
    fill: "#B3D67C",
    d: "M6.5 12.5H7.5V13.5H6.5z"
  }), React.createElement("path", {
    fill: "#CADF85",
    d: "M7.5 12.5H8.5V13.5H7.5z"
  }), React.createElement("path", {
    fill: "#DFE786",
    d: "M8.5 12.5H9.5V13.5H8.5z"
  }), React.createElement("path", {
    fill: "#EFED7A",
    d: "M9.5 12.5H10.5V13.5H9.5z"
  }), React.createElement("path", {
    fill: "#F8EF6D",
    d: "M10.5 12.5H11.5V13.5H10.5z"
  }), React.createElement("path", {
    fill: "#FEEE53",
    d: "M11.5 12.5H12.5V13.5H11.5z"
  }), React.createElement("path", {
    fill: "#FFD33D",
    d: "M12.5 12.5H13.5V13.5H12.5z"
  }), React.createElement("path", {
    fill: "#FDC131",
    d: "M13.5 12.5H14.5V13.5H13.5z"
  }), React.createElement("path", {
    fill: "#5373B8",
    d: "M2.5 13.5H3.5V14.5H2.5z"
  }), React.createElement("path", {
    fill: "#5E71B6",
    d: "M3.5 13.5H4.5V14.5H3.5z"
  }), React.createElement("path", {
    fill: "#5E71B6",
    d: "M4.5 13.5H5.5V14.5H4.5z"
  }), React.createElement("path", {
    fill: "#7C7ABA",
    d: "M5.5 13.5H6.5V14.5H5.5z"
  }), React.createElement("path", {
    fill: "#7C7ABA",
    d: "M6.5 13.5H7.5V14.5H6.5z"
  }), React.createElement("path", {
    fill: "#AF8FC2",
    d: "M7.5 13.5H8.5V14.5H7.5z"
  }), React.createElement("path", {
    fill: "#C18EC0",
    d: "M8.5 13.5H9.5V14.5H8.5z"
  }), React.createElement("path", {
    fill: "#C784B9",
    d: "M9.5 13.5H10.5V14.5H9.5z"
  }), React.createElement("path", {
    fill: "#C784B9",
    d: "M10.5 13.5H11.5V14.5H10.5z"
  }), React.createElement("path", {
    fill: "#CC62A5",
    d: "M11.5 13.5H12.5V14.5H11.5z"
  }), React.createElement("path", {
    fill: "#D94E9C",
    d: "M12.5 13.5H13.5V14.5H12.5z"
  }), React.createElement("path", {
    fill: "#D94E9C",
    d: "M13.5 13.5H14.5V14.5H13.5z"
  }));
};

module.exports.FontItalics = function FontItalics(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M12 2v1h-2l-3 9h2v1H3v-1h2l3-9H6V2h6z"
  }));
};

module.exports.FontSize = function FontSize(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M14.912 12.41h-.544L11.79 6.122s-.074-.104-.229-.121c-.155-.016-.395.081-.395.081l-2.75 6.328h-.114c-.231 0-.302.1-.302.315 0 .213.124.275.355.275H9.96c.229 0 .419-.064.419-.275 0-.215-.189-.314-.419-.314h-.414l.579-1.364h2.986l.588 1.364h-.663c-.231 0-.42.1-.42.314s.188.275.42.275h1.876c.232 0 .419-.062.419-.275 0-.215-.186-.315-.419-.315zm-4.518-1.953L11.665 7.6l1.208 2.857h-2.479zm-6.315 1.615h-.65l.908-2.142h3.952l.952-2.162-2.284-5.576s-.119-.164-.361-.189c-.243-.025-.622.126-.622.126l-4.321 9.943h-.177c-.365 0-.476.157-.476.494 0 .336.196.434.559.434H4.08c.364 0 .659-.1.659-.434-.001-.337-.296-.494-.66-.494zm2.68-7.558 1.897 4.49H4.76l1.999-4.49z"
  }));
};

module.exports.FontStrikethrough = function FontStrikethrough(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M14.5 7h-2.244c-.054-.869-.223-1.665-.461-2.265C11.336 3.581 9.646 2 7.255 2H4v5H1.5a.5.5 0 0 0 0 1H4v5h3.588c2.442 0 3.762-1.529 4.186-2.617A7.74 7.74 0 0 0 12.265 8H14.5a.5.5 0 0 0 0-1zM5.459 2.883h.999c.558 0 3.935-.437 4.171 4.117h-5.17V2.883zm1.405 9.234H5.459V8h5.17c-.233 4.219-3.317 4.117-3.765 4.117z",
    "clip-rule": "evenodd"
  }));
};

module.exports.FontUnderline = function FontUnderline(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M7 2v1.01c-.203-.007-.601-.044-.761.1S6 3.419 6 3.934v4.6c0 .734.064 1.306.265 1.716.374.748 1.305 1.121 2.349 1.121 1.145 0 1.956-.768 2.156-1.248.186-.443.278-.99.278-1.883V4.63c0-.761.03-1.315-.124-1.463-.192-.184-.377-.167-.89-.167V2h2.941v1.032c-.179.018-.697-.108-.864.094-.166.203-.149.771-.149 1.504v3.61c0 .967-.192 1.521-.455 2.082-.344.734-1.478 1.689-3.009 1.678-1.967-.016-3.271-.642-3.818-1.626-.296-.528-.444-1.077-.444-1.942V3.991c0-.51-.079-.738-.236-.881s-.812-.107-1-.1V2h4zm6 11.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5z"
  }));
};

module.exports.ForwardO = function ForwardO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13.012c-3.32 0-6.01-2.691-6.01-6.012S4.68 1.988 8 1.988a6.012 6.012 0 0 1 0 12.024zM4.514 7.486h5.734l-2.401-2.4a.514.514 0 0 1 .726-.726l3.277 3.276c.01.01.013.022.021.032a.49.49 0 0 1 .09.135.53.53 0 0 1 .035.175c-.001.008.004.014.004.022 0 .012-.007.021-.007.032a.548.548 0 0 1-.032.164.52.52 0 0 1-.106.159l-.005.008-3.278 3.277a.51.51 0 0 1-.725 0 .514.514 0 0 1 0-.726l2.401-2.401-5.734.005c-.284 0-.514-.23-.514-.513s.23-.519.514-.519z",
    "clip-rule": "evenodd"
  }));
};

module.exports.FreezeCell = function FreezeCell(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M12 1H1v14h14V1h-3zm-1 1v3H5V2h6zM5 8.943 6.057 10H5V8.943zM7.471 10 5 7.529V6h.307l4 4H7.471zm3.25 0-4-4h1.836L11 8.443V10h-.279zM11 6v1.029L9.971 6H11zM2 2h2v3H2V2zm0 4h2v4H2V6zm0 8v-3h2v3H2zm3 0v-3h6v3H5zm9 0h-2v-3h2v3zm0-4h-2V6h2v4zm-2-5V2h2v3h-2z"
  }));
};

module.exports.FreezeColumn = function FreezeColumn(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1 15h14V1H1v14zm9-9v4H6V6h4zm-4 8v-3h4v3H6zm-1 0h-.955L5 13.045V14zm0-2.369L2.631 14H2v-1.189l3-3v1.82zm-3-.235V9.561l3-3v1.836l-3 2.999zm0-3.25V6.311l3-3v1.836L2 8.146zm0-3.25V3.561L3.561 2h1.336L2 4.896zM14 14h-3v-3h3v3zm0-4h-3V6h3v4zm0-8v3h-3V2h3zm-4 3H6V2h4v3z"
  }));
};

module.exports.FreezeRow = function FreezeRow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1 1v14h14V1H1zm9 8H6V6h4v3zM2 6h3v3H2V6zm0-1v-.955L2.955 5H2zm2.369 0L2 2.631V2h1.189l3 3h-1.82zm.235-3H6.44l3 3H7.604l-3-3zm3.25 0h1.835l3 3h-1.836L7.854 2zm3.25 0h1.336L14 3.561v1.336L11.104 2zM2 14v-4h3v4H2zm4 0v-4h4v4H6zm8 0h-3v-4h3v4zm-3-5V6h3v3h-3z"
  }));
};

module.exports.Freeze = function Freeze(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M6 1H1v14h14V1H6zm6.439 1L14 3.561v1.336L11.104 2h1.335zM6 2h.439l3 3H7.604l-3-3H6zM2 2h1.189l3 3H5v.631l-3-3V2zm0 2.045 3 3v1.836l-3-3V4.045zm0 3.25 3 3v1.836l-3-3V7.295zM3.619 14 2 12.381v-1.836l3 3V14H3.619zM14 14H6v-3h8v3zm0-4H6V6h8v4zm-3.146-5-3-3H9.69l3 3h-1.836z"
  }));
};

module.exports.Fullscreen = function Fullscreen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "m13.998 1.508.002.01v3.964a.507.507 0 0 1-.5.518.51.51 0 0 1-.501-.519V2.708L9.863 5.844a.507.507 0 0 1-.72.013.51.51 0 0 1 .013-.721L12.293 2H9.518A.509.509 0 0 1 9 1.5c0-.275.23-.5.52-.5h3.963a.03.03 0 0 1 .009.002.48.48 0 0 1 .304.11c.019.014.04.023.056.039.005.005.007.011.012.016a.49.49 0 0 1 .136.332l-.002.009zM2.707 2h2.775c.286 0 .52-.225.518-.5a.51.51 0 0 0-.52-.5H1.518a.03.03 0 0 0-.009.002L1.501 1a.48.48 0 0 0-.297.112c-.018.014-.04.023-.056.039-.004.005-.006.012-.011.016A.487.487 0 0 0 1 1.499l.002.009L1 1.519v3.964c0 .286.225.52.5.517a.51.51 0 0 0 .501-.519V2.708l3.136 3.136c.202.203.526.21.72.013a.51.51 0 0 0-.013-.721L2.707 2zM14 9.518A.507.507 0 0 0 13.5 9a.51.51 0 0 0-.501.519v2.773L9.863 9.156a.507.507 0 0 0-.72-.013.51.51 0 0 0 .013.721L12.293 13H9.518a.509.509 0 0 0-.518.5c0 .275.23.5.52.5h3.963l.009-.002.007.002a.477.477 0 0 0 .296-.112c.019-.014.041-.022.057-.039.005-.005.007-.011.012-.016a.488.488 0 0 0 .136-.332l-.002-.01.002-.01V9.518zM5.482 13H2.707l3.137-3.136a.508.508 0 0 0 .012-.72.507.507 0 0 0-.72.013L2 12.293V9.519A.508.508 0 0 0 1.5 9a.507.507 0 0 0-.5.518v3.964l.002.01-.002.01c0 .129.054.243.137.332.004.005.006.011.011.016.016.017.038.025.056.039a.487.487 0 0 0 .297.111l.008-.002.009.002H5.48a.51.51 0 0 0 .52-.5.509.509 0 0 0-.518-.5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Function = function Function(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M13.896 11.756c-.028.098-.154.166-.321.256a.598.598 0 0 1-.45.055.564.564 0 0 1-.289-.213l-1.504-1.99-1.825 1.98c-.218.236-.465.271-.747.104-.116-.068-.328-.32-.353-.434-.024-.113.021-.232.137-.359l2.018-2.196-1.47-1.945c-.061-.089-.067-.193-.019-.311.046-.118.155-.188.271-.257a.728.728 0 0 1 .433-.088c.114.007.217.072.312.192l1.222 1.593 1.479-1.611c.128-.142.273-.192.413-.232.139-.04.414.104.564.188.154.083.234.179.244.287.009.108-.033.214-.129.319l-1.807 1.96 1.783 2.445c.056.073.07.161.038.257zM9.252 2.009c-.627-.071-1.94-.165-2.736.35-.798.517-1.256 1.405-1.478 2.461l-.313 1.492H2.478c-.261 0-.469.075-.491.543.022.255.23.457.491.457H4.51l-1.339 6.542s-.343 1.067.407 1.114c.655.041.785-1.025.785-1.025l1.35-6.631h1.715a.5.5 0 0 0 0-1H5.926l.297-1.462c.635-2.33 1.819-1.764 2.913-1.764.179 0 .854.047.901-.415.06-.578-.521-.632-.785-.662zM1.978 6.928c0-.03.007-.045.009-.072-.002-.015-.009-.028-.009-.044v.116z"
  }));
};

module.exports.GlobeO24 = function GlobeO24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "m10.501 3.8.226.996s-.496.141-.768.047-.407-.094-.407-.094l-.36.521s-.137.331-.182.521c-.045.188.09.476.09.476s.633.047.633-.144-.09-.284-.09-.284l-.091-.331s.497-.357 1.581-.261c1.084.094.655 1.02 1.107 1.207.452.19-.484 1.649-.564 1.233.248 1.28-.326-.246-.926 1.137-.227.521-.928.521-.928.521s.137.237.272.521-.046.946-.046 1.137-.812-.331-.903-.806c-.09-.47-.361-.33-.542-.283-.181.047-.768.19-.858-.047-.09-.237-.654.475-.881.615-.226.144-.384.521-.021.331.36-.188.835.05.745.428-.091.381-.046-.237 0 0s-.159.759-.068 1.09c.09.334.947.047 1.219-.094.271-.144 1.04-.284 1.129.094.092.381 1.74.334 2.057.428s1.084.378 1.445.759c.361.378-1.197 1.043-1.242 1.28s-.316.806-.497 1.184c-.181.381-.271.521-.496.712s-.362.521-.362.521l-.045.806s.226.521.361.759c.135.234-.271 1.421-.271 1.421-.392-.079-.662-.19-.798-.568s-.331-.284-.286-.712c.046-.425-.633-.946-.768-1.184-.136-.237-.316-.568-.316-.806s-.497-.568-.497-.568-.903-.428-1.038-.618c-.137-.19-.271-.993-.317-1.327-.045-.331.136-1.184.136-1.184s.361-.284.136-.521-.271-.853-.271-.853l-.817.14s-.701-.51-.745-.744c-.044-.237-.044-1.254 0-1.491s0-1.254 0-1.491C6.924 3.932 10.501 3.8 10.501 3.8zm7.409 5.218s-1.49 0-2.236 1.491-2.236 0-2.236 0 2.236 3.727 3.728 2.238c1.491-1.491 1.491-2.238 1.491-2.982-.001-.747-.747-.747-.747-.747zM11.93 22.5c-5.789 0-10.5-4.711-10.5-10.5 0-5.79 4.711-10.5 10.5-10.5s10.5 4.71 10.5 10.5a.5.5 0 0 1-1 0c0-5.238-4.262-9.5-9.5-9.5s-9.5 4.262-9.5 9.5 4.262 9.5 9.5 9.5c3.902 0 7.467-2.446 8.868-6.087a.5.5 0 0 1 .933.359c-1.548 4.025-5.487 6.728-9.801 6.728z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Group24 = function Group24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M14.93 7v3h-8V7h8m0-1h-8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm2 7v3h-8v-3h8m0-1h-8a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-13-9v1h-1V3h1m1-1h-3v3h3V2zm-1 17v1h-1v-1h1m1-1h-3v3h3v-3zm16 1v1h-1v-1h1m1-1h-3v3h3v-3zm-1-15v1h-1V3h1m1-1h-3v3h3V2zm-3 1h-15v1h15V3zm0 16h-15v1h15v-1zm-15 0V5h-1v14h1zm17 0V5h-1v14h1z"
  }));
};

module.exports.GuideAdd = function GuideAdd(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.718 3.184c.002-.395-.216-.861-.518-1.163l-.566-.565a1.552 1.552 0 0 0-2.198-.001L2.263 8.626c-.213.215-1.013 3.231-1.065 3.302L1 12.721l.792-.199c.069-.052 3.086-.853 3.3-1.066l7.173-7.173c.3-.303.454-.703.453-1.099zm-8.321 7.578c.012.063-2.348.907-2.354.901.007.006.853-2.353.915-2.344l5.455-5.454 1.439 1.44-5.455 5.457zm7.172-7.173-1.021 1.022-1.439-1.44 1.021-1.022a.577.577 0 0 1 .407-.168.58.58 0 0 1 .403.168l.565.566c.112.114.232.321.232.469a.559.559 0 0 1-.168.405zM15 11.5a.5.5 0 0 1-.5.5H12v2.5c0 .276-.199.5-.475.5-.277 0-.525-.224-.525-.5V12H8.55a.495.495 0 0 1-.491-.457c.022-.468.23-.543.491-.543H11V8.5c0-.276.248-.5.525-.5.276 0 .475.224.475.5V11h2.5a.5.5 0 0 1 .5.5zm-6.95 0c0 .016.007.028.009.043-.002.027-.009.042-.009.072V11.5z"
  }));
};

module.exports.GuideDelete = function GuideDelete(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m12.2 2.021-.566-.565a1.552 1.552 0 0 0-2.198-.001L2.263 8.626c-.213.215-1.013 3.231-1.065 3.302L1 12.721l.792-.199c.069-.052 3.086-.853 3.3-1.066l7.173-7.173c.301-.302.454-.702.453-1.099.002-.395-.216-.862-.518-1.163zm-7.803 8.741c.012.063-2.348.907-2.354.901.007.006.853-2.353.915-2.344l5.455-5.454 1.439 1.44-5.455 5.457zm7.172-7.173-1.021 1.022-1.439-1.44 1.021-1.022a.577.577 0 0 1 .407-.168.58.58 0 0 1 .403.168l.565.566c.112.114.232.321.232.469a.559.559 0 0 1-.168.405zM8.55 12a.5.5 0 0 1-.5-.5v.115c0-.547.223-.615.5-.615h5.95a.5.5 0 0 1 0 1H8.55z"
  }));
};

module.exports.HelpO24 = function HelpO24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#231F20",
    d: "M12 22.5C6.211 22.5 1.5 17.789 1.5 12 1.5 6.21 6.211 1.5 12 1.5S22.5 6.21 22.5 12a.5.5 0 0 1-1 0c0-5.238-4.262-9.5-9.5-9.5S2.5 6.762 2.5 12s4.262 9.5 9.5 9.5c3.902 0 7.467-2.446 8.868-6.087a.5.5 0 0 1 .933.359C20.253 19.797 16.314 22.5 12 22.5zm.438-8.622c0-1.129.738-1.77 1.854-2.741l.099-.085c.909-.791 1.239-2.157.803-3.325-.437-1.168-1.547-1.865-2.97-1.865-2.795 0-3.582 2.061-3.608 3.151a.498.498 0 0 0 .485.51.507.507 0 0 0 .515-.483c.007-.223.147-2.178 2.608-2.178 1.373 0 1.863.762 2.033 1.216.289.772.068 1.705-.522 2.219l-.098.085c-1.181 1.025-2.199 1.911-2.199 3.496a.5.5 0 0 0 1 0zm-.459 1.76a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"
  }));
};

module.exports.HelpO = function HelpO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 .001 13.999A7 7 0 0 0 8 1zm0 13.012A6.012 6.012 0 1 1 8 1.988a6.012 6.012 0 0 1 0 12.024zM6.076 5.151c.416-.442.987-.664 1.712-.664.671 0 1.209.189 1.612.568.404.378.605.862.605 1.451 0 .356-.072.646-.219.868-.146.223-.447.549-.9.979-.329.315-.544.58-.644.797-.1.217-.149.338-.149.763h-.899c0-.481.057-.671.172-.965.114-.295.369-.632.763-1.012l.413-.398c.124-.114.224-.234.3-.358a1.301 1.301 0 0 0-.092-1.54c-.2-.244-.533-.366-.997-.366-.574 0-.971.209-1.191.626-.124.233-.194.568-.211 1.005h-.899c0-.726.208-1.311.624-1.754zM7.146 11h1v.995h-1V11z",
    "clip-rule": "evenodd"
  }));
};

module.exports.HelpS = function HelpS(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M14 2v12H2V2h12m0-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM8.616 12.62h-1.28v-1.274h1.28v1.274zm2.102-5.917c-.188.285-.572.704-1.153 1.255-.422.401-.699.739-.826 1.019-.128.278-.191.433-.191.976H7.396c0-.616.073-.859.22-1.236.148-.376.474-.809.979-1.296l.529-.51c.158-.146.285-.301.383-.459.181-.28.27-.572.27-.874 0-.423-.128-.788-.387-1.1-.256-.31-.682-.466-1.277-.466-.734 0-1.243.268-1.524.802-.159.297-.25.727-.272 1.288H5.165c0-.93.268-1.68.8-2.246.532-.567 1.264-.851 2.193-.851.859 0 1.548.242 2.064.728.518.484.776 1.104.776 1.859.001.456-.093.827-.28 1.111z"
  }));
};

module.exports.Hexagon = function Hexagon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#1C9AEB",
    d: "m5.844.734-1.306.754h.007l-.619.357-1.579.912s-.82.468-1.261 1.217C.601 4.797.629 6.232.629 6.232v3.535s-.028 1.436.457 2.259c.441.749 1.261 1.217 1.261 1.217l1.364.787.006.009 1.552.896h.002l.573.33s1.229.743 2.185.734c.869-.009 1.683-.484 1.683-.484l.54-.311h.006l3.388-1.957s.82-.468 1.262-1.217c.485-.823.456-2.259.456-2.259V7.868l.008.012V5.73s.004-.944-.423-1.701c-.471-.832-1.729-1.525-1.729-1.525l-1.306-.754.005.01-.349-.201h.004L9.712.484S8.898.008 8.029 0c-.956-.008-2.185.734-2.185.734z"
  }));
};

module.exports.HiddenCloumn = function HiddenCloumn(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M14 3h-4V1H6v2H1v12h1v-5h1v1.688c0 .084.03.158.093.22.062.062.136.092.219.092s.157-.03.22-.093L5.907 9.72C5.969 9.658 6 9.584 6 9.5s-.031-.157-.093-.22L3.532 7.093C3.47 7.031 3.396 7 3.312 7s-.157.031-.22.093A.3.3 0 0 0 3 7.312V9H2V4h4v11h4V4h4l.007 5H13V7.312a.298.298 0 0 0-.093-.22.3.3 0 0 0-.219-.092.301.301 0 0 0-.22.093L10.093 9.28c-.062.062-.093.136-.093.22s.031.157.093.22l2.375 2.188c.062.061.136.092.22.092s.157-.031.22-.093a.3.3 0 0 0 .092-.219V10h1.009l.007 5H15V3h-1z",
    "clip-rule": "evenodd"
  }));
};

module.exports.HiddenRow = function HiddenRow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M15 6h-2V1H1v1h5v1H4.312a.298.298 0 0 0-.22.093.3.3 0 0 0-.092.219c0 .083.03.157.093.22L6.28 5.907c.062.062.136.093.22.093s.157-.031.22-.093l2.188-2.375c.061-.062.092-.136.092-.22s-.031-.157-.093-.22A.3.3 0 0 0 8.688 3H7V2h5v4H1v4h11v4l-5 .007V13h1.688c.084 0 .158-.03.22-.093.062-.062.092-.136.092-.219s-.03-.157-.093-.22L6.72 10.093C6.658 10.031 6.584 10 6.5 10s-.157.031-.22.093l-2.188 2.375c-.061.062-.092.136-.092.22s.031.157.093.22a.3.3 0 0 0 .219.092H6v1.009l-5 .007V15h12v-5h2V6z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Hierarchy = function Hierarchy(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12 9.268v-.444c0-2.23-1.229-3.796-3-3.895v-.018H8V1.896c0-.237-.264-.429-.5-.429s-.5.192-.5.429v3.015h-.5v.019c-1.771.099-3 1.664-3 3.895v.444A2.635 2.635 0 0 0 1 11.893a2.645 2.645 0 0 0 2.64 2.641 2.645 2.645 0 0 0 2.641-2.641 2.632 2.632 0 0 0-1.78-2.482v-.587c0-1.45.672-2.913 2.172-2.913h2.156c1.5 0 2.172 1.463 2.172 2.913v.586a2.632 2.632 0 0 0-1.78 2.482 2.645 2.645 0 0 0 2.641 2.641 2.645 2.645 0 0 0 2.64-2.641A2.64 2.64 0 0 0 12 9.268zm-6.72 2.625c0 .904-.736 1.641-1.641 1.641S2 12.797 2 11.893a1.64 1.64 0 0 1 3.28 0zm6.58 1.64a1.641 1.641 0 1 1 0-3.278 1.641 1.641 0 0 1 0 3.278z"
  }));
};

module.exports.Host = function Host(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M13.5 5h-11C1.673 5 1 4.327 1 3.5v-1C1 1.673 1.673 1 2.5 1h11c.827 0 1.5.673 1.5 1.5v1c0 .827-.673 1.5-1.5 1.5zm-11-3c-.275 0-.5.225-.5.5v1c0 .275.225.5.5.5h11c.275 0 .5-.225.5-.5v-1c0-.275-.225-.5-.5-.5h-11zm1 .5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM13 3a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1h2A.5.5 0 0 0 13 3zm.5 7h-11C1.673 10 1 9.327 1 8.5v-1C1 6.673 1.673 6 2.5 6h11c.827 0 1.5.673 1.5 1.5v1c0 .827-.673 1.5-1.5 1.5zm-11-3c-.275 0-.5.225-.5.5v1c0 .275.225.5.5.5h11c.275 0 .5-.225.5-.5v-1c0-.275-.225-.5-.5-.5h-11zm1 .5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM13 8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1h2A.5.5 0 0 0 13 8zm.5 7h-11c-.827 0-1.5-.673-1.5-1.5v-1c0-.827.673-1.5 1.5-1.5h11c.827 0 1.5.673 1.5 1.5v1c0 .827-.673 1.5-1.5 1.5zm-11-3c-.275 0-.5.225-.5.5v1c0 .275.225.5.5.5h11c.275 0 .5-.225.5-.5v-1c0-.275-.225-.5-.5-.5h-11zm1 .5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm7.5.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5z"
  }));
};

module.exports.If = function If(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M11.159 1.702c-.047.462-.723.414-.902.414-1.091 0-2.276-.566-2.912 1.765l-.297 1.462H8.55a.5.5 0 0 1 0 1H6.835l-1.35 6.631s-.13 1.066-.785 1.025c-.75-.047-.406-1.114-.406-1.114l1.338-6.542H4.6a.494.494 0 0 1-.491-.457c.022-.468.23-.543.491-.543h1.247l.313-1.492c.222-1.057.68-1.945 1.478-2.461.797-.516 2.109-.422 2.736-.351.264.03.844.084.785.663zM3.098 5.884a.5.5 0 1 0-.977-.215L.419 13.323c-.057.255-.026.475.425.597a.494.494 0 0 0 .552-.381l1.702-7.655zm1.002.074c0-.03.007-.045.009-.072-.003-.015-.009-.028-.009-.043v.115zm-.963-3.276a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm7.499 11.132c.256-.214.324-.634.154-.938-.006-.013-.682-1.238-.574-2.994.107-1.714 1.115-2.885 1.139-2.912a.774.774 0 0 0 .037-.949.498.498 0 0 0-.793-.025c-.055.063-1.359 1.543-1.497 3.817-.139 2.239.724 3.775.759 3.841a.53.53 0 0 0 .422.281.5.5 0 0 0 .353-.121zm2.951.071a.511.511 0 0 0 .467-.18c.049-.056 1.189-1.362 1.49-3.583.305-2.254-.684-4-.725-4.07-.174-.303-.523-.372-.779-.157-.256.216-.32.637-.146.938.016.032.775 1.405.545 3.105-.234 1.74-1.133 2.787-1.143 2.797a.777.777 0 0 0-.031.951.53.53 0 0 0 .322.199z"
  }));
};

module.exports.Iframe = function Iframe(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M1 2v12h15V2H1zm7 1v2H2V3h6zM2 9V6h6v3H2zm0 1h4v3H2v-3zm13 3H7v-3h8v3zm0-4H9V3h6v6z"
  }));
};

module.exports.Import = function Import(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M14 4v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4h2.552c1.138 0 1.138 1 0 1H4v8h9V5h-1.484c-1.138 0-1.138-1 0-1H14zm-3 3.409c0-.132.041-.263-.059-.362a.514.514 0 0 0-.727 0L8.972 8.248V1.535c0-.294-.181-.532-.464-.531-.283-.001-.483.237-.483.53l-.002 6.714-1.109-1.201a.512.512 0 0 0-.726 0c-.201.199-.292.524-.091.724L8.174 9.85c.009.01.022.014.032.021a.54.54 0 0 0 .135.09.421.421 0 0 0 .146.035c.008 0 .014.004.022.004.011 0 .021-.006.032-.006.055-.004.011-.012.064-.033.059-.025.163-.062.208-.106l.008-.005 2.028-2.078c.1-.1.151-.231.151-.363z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Indent = function Indent(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M1 1.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zm0 12a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5zm4-9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0-.5.5zm-3.432-.542L3.9 7.625a.323.323 0 0 0 0-.469L1.568 4.822a.32.32 0 0 0-.236-.097.32.32 0 0 0-.234.098.319.319 0 0 0-.098.234v4.668c0 .09.032.168.098.233a.324.324 0 0 0 .47 0z",
    "clip-rule": "evenodd"
  }));
};

module.exports.InfoO = function InfoO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8.75 11.25a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 7c.416 0 .75.335.75.75v3.5zM8 4a.75.75 0 1 0 0 1.5A.75.75 0 0 0 8 4zm0-3a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1zm0 13.012A6.012 6.012 0 0 1 8 1.988c3.32 0 6.009 2.691 6.009 6.012S11.32 14.012 8 14.012z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Info = function Info(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8.703 11.25a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75c.416 0 .75.335.75.75v3.5zM7.953 4a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm7 4a7 7 0 1 1-14 0 7 7 0 0 1 14 0z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Initial = function Initial(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M15.075 4.544a6.916 6.916 0 0 0-9.439-2.528 6.85 6.85 0 0 0-3.161 4.015H.577a.577.577 0 0 0 0 1.155H6.04a.577.577 0 1 0 0-1.155H3.846c.457-1.219 1.29-2.245 2.432-2.904a5.633 5.633 0 0 1 7.688 2.059 5.634 5.634 0 0 1-2.061 7.689 5.634 5.634 0 0 1-7.687-2.061l-.003-.006 1.706.459a.642.642 0 0 0 .332-1.24L3.051 9.17a.65.65 0 0 0-.487.063.648.648 0 0 0-.299.39l-.857 3.201a.642.642 0 1 0 1.239.332l.457-1.707.003.006a6.916 6.916 0 0 0 9.439 2.529 6.919 6.919 0 0 0 2.529-9.44z"
  }));
};

module.exports.InnerJoin = function InnerJoin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#289DE9",
    fillRule: "evenodd",
    d: "M8.5 19.5c-3.859 0-7-3.141-7-7 0-3.86 3.141-7 7-7s7 3.14 7 7c0 3.859-3.141 7-7 7z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#666666",
    d: "M8.5 6a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m0-1C4.364 5 1 8.364 1 12.5S4.364 20 8.5 20s7.5-3.364 7.5-7.5S12.636 5 8.5 5z"
  }), React.createElement("path", {
    fill: "#666666",
    d: "M15.5 6a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m0-1C11.364 5 8 8.364 8 12.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5S19.636 5 15.5 5z"
  }));
};

module.exports.InsertColumn = function InsertColumn(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M10.206 11.15a.514.514 0 0 1 .727 0c.1.1.059.23.059.363a.51.51 0 0 1-.15.361L8.905 13.85l-.008.005c-.045.045-.149.081-.208.106-.054.021-.01.029-.064.033-.012 0-.021.006-.032.006-.008 0-.014-.004-.021-.004a.411.411 0 0 1-.146-.035.514.514 0 0 1-.135-.09c-.01-.008-.023-.012-.032-.021l-2.146-1.975c-.201-.199-.109-.525.092-.725a.512.512 0 0 1 .726 0l1.648 1.568 1.627-1.568zM6 1v9h5V1H6zM2 11v4H1v-5h4v5h-.984L4 11H2m11 0v4h-1v-5h4v5h-.984L15 11h-2",
    "clip-rule": "evenodd"
  }));
};

module.exports.InsertRow = function InsertRow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M4.849 10.206a.514.514 0 0 1 0 .727c-.1.1-.23.059-.362.059s-.263-.051-.362-.15L2.15 8.905a.02.02 0 0 1-.004-.008c-.045-.044-.082-.149-.107-.208-.021-.053-.029-.009-.033-.064 0-.012-.006-.021-.006-.032 0-.008.004-.014.004-.021a.411.411 0 0 1 .035-.146.514.514 0 0 1 .09-.135c.008-.011.012-.024.021-.033l1.974-2.146c.2-.201.525-.109.725.092.201.2.201.525 0 .726L3.282 8.578l1.567 1.628zM15 6H6v5h9V6zM5 2H1V1h5v4H1v-.984L5 4V2m0 11H1v-1h5v4H1v-.984L5 15v-2",
    "clip-rule": "evenodd"
  }));
};

module.exports.Invisible = function Invisible(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M6.663 4.021c.4-.085.817-.143 1.265-.143 3.188 0 5.503 2.672 6.344 3.565.246.261.323.986-.039 1.412-.289.34-.721.867-1.321 1.399l-1.974-1.969c.007-.085.025-.167.025-.254a2.952 2.952 0 0 0-2.952-2.952c-.089 0-.174.019-.261.026L6.663 4.021zm1.694 6.927c-.115.014-.228.035-.346.035A2.953 2.953 0 0 1 5.058 8.03c0-.116.021-.226.034-.339L3.244 5.849c-.596.526-1.083 1.057-1.458 1.451-.338.355-.344 1.076-.074 1.369 1.237 1.341 3.168 3.468 6.216 3.468a7.8 7.8 0 0 0 1.475-.147l-1.046-1.042zm4.519 1.902a.5.5 0 0 0 0-.707L3.684 2.951a.5.5 0 0 0-.707.707l9.192 9.192a.5.5 0 0 0 .707 0z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Ipad24 = function Ipad24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    d: "M17.5 2h-11C5.1 2 4 3.1 4 4.5v15C4 20.9 5.1 22 6.5 22h11c1.4 0 2.5-1.1 2.5-2.5v-15C20 3.1 18.9 2 17.5 2zm-11 1h11c.8 0 1.5.7 1.5 1.5V17H5V4.5C5 3.7 5.7 3 6.5 3zM19 19.5c0 .8-.7 1.5-1.5 1.5h-11c-.8 0-1.5-.7-1.5-1.5V18h14v1.5zm-6 .5h-2v-1h2v1z"
  }));
};

module.exports.Ipad = function Ipad(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    id: "XMLID_9_",
    d: "M13 1H4c-.6 0-1 .5-1 1v12c0 .5.5 1 1 1h9c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1zm0 13H4v-1h9v1zm-9-2V2h9v10H4z",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }));
};

module.exports.LabShutDown = function LabShutDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8.01 15.356c-.877.001-1.889-.594-2.001-.662l-.432-.25-.028-.015-1.261-.727c-.021-.013-.042-.026-.061-.042l-1.051-.605c-.03-.017-.776-.448-1.192-1.156-.448-.76-.438-1.947-.436-2.08V6.956c-.002-.124-.012-1.31.437-2.071.416-.706 1.162-1.138 1.193-1.156l1.738-1.003a.45.45 0 0 1 .271-.089h.006a.463.463 0 0 1 .232.866L3.639 4.535c-.006.003-.567.332-.856.821-.269.457-.313 1.304-.307 1.591v2.881c-.005.298.041 1.147.308 1.6.288.49.849.819.854.822l1.111.64c.021.013.042.026.061.042l1.177.678.03.017.465.27c.254.152.981.53 1.538.533.568-.005 1.134-.328 1.14-.331l.439-.254c.014-.008.026-.015.04-.021l2.717-1.567c.007-.003.568-.332.857-.824.268-.451.312-1.301.307-1.59V8.286c0-.025.002-.05.006-.074V6.548c0-.008-.004-.657-.284-1.153-.26-.46-.972-.922-1.224-1.062l-1.006-.579a.383.383 0 0 1-.061-.03l-.283-.165a.462.462 0 0 1-.215-.522c.078-.29.46-.42.695-.273l.205.12c.02.008.039.017.058.028l1.062.612c.109.06 1.142.646 1.576 1.413.403.714.404 1.576.403 1.612v1.744c0 .025-.002.05-.006.074v1.464c.003.123.015 1.312-.435 2.071-.417.707-1.163 1.139-1.194 1.157l-2.751 1.587a.398.398 0 0 1-.041.021l-.402.232c-.028.017-.776.448-1.597.455-.005.002-.01.002-.016.002zM8 .644a.582.582 0 0 1 .571.593v6.148a.583.583 0 0 1-.572.592.58.58 0 0 1-.57-.592V1.236c0-.328.257-.591.571-.592z"
  }));
};

module.exports.Label0401 = function Label0401(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 66 66"
  }), React.createElement("path", {
    fill: "#676767",
    d: "M50.512.871h-34.25L5.677 33.444l27.71 31.429 27.71-31.429L50.512.871zM33.369 48.335c-12.423 0-22.484-10.073-22.484-22.503 0-12.423 10.061-22.5 22.484-22.5 12.441 0 22.516 10.077 22.516 22.5 0 12.43-10.074 22.503-22.516 22.503z"
  }));
};

module.exports.Label1 = function Label1(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 18 18"
  }), React.createElement("path", {
    fill: "#666666",
    d: "M13.723 2.85C11.133.258 6.941.278 4.348 2.872c-2.593 2.593-2.61 6.793-.018 9.386l4.684 4.658 4.698-4.696c2.59-2.593 2.604-6.776.011-9.37zm-1.14 4.978a3.555 3.555 0 1 1-7.111 0c0-.012.003-.022.003-.034s-.003-.023-.003-.034a3.555 3.555 0 0 1 7.111 0c0 .012-.003.022-.003.034s.003.022.003.034z"
  }));
};

module.exports.Label2 = function Label2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 18 18"
  }), React.createElement("path", {
    fill: "#666666",
    d: "m16.242 6.643-4.885-4.885a2.59 2.59 0 0 0-3.662 0L2.811 6.643a2.59 2.59 0 0 0 0 3.662l.352.351-.003.004L9.501 17l1.595-1.595c.089-.069.181-.133.263-.215l4.885-4.885a2.592 2.592 0 0 0-.002-3.662zm-6.718 4.85a3.471 3.471 0 1 1 .006-6.942 3.471 3.471 0 0 1-.006 6.942z"
  }));
};

module.exports.Label3 = function Label3(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 18 18"
  }), React.createElement("path", {
    fill: "#666666",
    d: "m9.076 1.089-6.01 3.47V11.5l6.01 5.589 6.01-5.59V4.56l-6.01-3.471zM9.074 11.67a3.554 3.554 0 0 1-3.553-3.556 3.556 3.556 0 1 1 3.553 3.556z"
  }));
};

module.exports.Label4 = function Label4(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 18 18"
  }), React.createElement("path", {
    fill: "#666666",
    d: "M14.022 1.018H5.46L2.813 9.16l6.928 7.857 6.928-7.857-2.647-8.142zm-4.283 9.177a3.498 3.498 0 0 1-3.498-3.5 3.5 3.5 0 1 1 3.498 3.5z"
  }));
};

module.exports.LbsLocation = function LbsLocation(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 38 38"
  }), React.createElement("path", {
    fill: "#666666",
    d: "M37 19h-7.025c-.256-5.39-4.584-9.719-9.975-9.975V2a.5.5 0 0 0-1 0v7.025C13.609 9.281 9.281 13.61 9.025 19H2a.5.5 0 0 0 0 1h7.025c.256 5.39 4.584 9.719 9.975 9.975V37a.5.5 0 0 0 1 0v-7.025c5.391-.256 9.719-4.585 9.975-9.975H37a.5.5 0 0 0 0-1zm-8.025 0H23.95a4.475 4.475 0 0 0-3.949-3.949v-5.025c4.838.253 8.72 4.135 8.974 8.974zM19 19h-2.949A3.485 3.485 0 0 1 19 16.051V19zm0 1v2.949A3.484 3.484 0 0 1 16.051 20H19zm1 0h2.949A3.485 3.485 0 0 1 20 22.949V20zm0-1v-2.949A3.484 3.484 0 0 1 22.949 19H20zm-1-8.975v5.025a4.476 4.476 0 0 0-3.949 3.949h-5.025c.253-4.838 4.135-8.72 8.974-8.974zM10.025 20h5.025a4.475 4.475 0 0 0 3.949 3.949v5.025c-4.838-.253-8.72-4.135-8.974-8.974zM20 28.975V23.95a4.476 4.476 0 0 0 3.949-3.949h5.025c-.253 4.838-4.135 8.72-8.974 8.974z"
  }));
};

module.exports.LeftJoin = function LeftJoin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#666666",
    d: "M8.5 6a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m0-1C4.364 5 1 8.364 1 12.5S4.364 20 8.5 20s7.5-3.364 7.5-7.5S12.636 5 8.5 5z"
  }), React.createElement("path", {
    fill: "#666666",
    d: "M15.5 6a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m0-1C11.364 5 8 8.364 8 12.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5S19.636 5 15.5 5z"
  }), React.createElement("path", {
    fill: "#289DE9",
    fillRule: "evenodd",
    d: "M9 12.5a6.49 6.49 0 0 0 3 5.471 6.488 6.488 0 0 0 0-10.943A6.49 6.49 0 0 0 9 12.5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.LeftJustified = function LeftJustified(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M2 3.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Legend1 = function Legend1(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M14 6.837h-2c-.079 0-.149.028-.224.045C11.288 5.224 9.77 4 7.954 4 6.14 4 4.622 5.223 4.134 6.88c-.072-.016-.14-.043-.216-.043H2a1 1 0 1 0 0 2h1.918c.043 0 .08-.019.121-.024A4.006 4.006 0 0 0 7.954 12a4.01 4.01 0 0 0 3.918-3.189c.044.006.082.026.128.026h2a1 1 0 1 0 0-2zM7.954 11C6.3 11 4.955 9.654 4.955 8S6.3 5 7.954 5c1.654 0 3.001 1.346 3.001 3s-1.347 3-3.001 3z"
  }));
};

module.exports.Lib24 = function Lib24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M10.425 13.595a.805.805 0 1 0 0-1.61.805.805 0 0 0 0 1.61zM3.53 21.947C4.331 22.896 5.646 23 6.178 23c.132 0 .216-.006.231-.008l4.6.002h6.618c.007.001.082.007.205.007.505 0 1.828-.1 2.634-1.055 1.206-1.429.522-3.06.493-3.128l-4.255-7.339a.5.5 0 1 0-.865.503l2.135 3.685c-.883.38-2.658.833-5.244.024-2.836-.889-5.035-.872-6.307-.729l4.066-6.999.008-2.489-.297-.294-.272.004c-.22.003-.966.013-1.109.002-.729-.043-1.241-.498-1.241-1.082 0-1.027 1.16-1.102 1.209-1.105L11.502 3h3.734c.196.002 1.182.063 1.182 1.104 0 .991-.979 1.077-1.188 1.083L14 5.183h-.002a.5.5 0 0 0-.5.5v2.146c0 .088.023.175.067.251l1.008 1.704a.5.5 0 1 0 .865-.503l-.939-1.587V6.185l.736.002V6.18c.369.025.822-.149.938-.197.804-.333 1.246-1 1.246-1.879 0-.601-.189-1.094-.562-1.465-.627-.623-1.536-.633-1.623-.639H8.759c-.772.042-2.181.533-2.181 2.104 0 1.131.909 2.005 2.16 2.078.018.003.08.01.759.006l-.006 1.505-6.428 11.073c-.056.121-.74 1.752.467 3.181zm.426-2.734 1.82-3.133c.792-.165 3.234-.506 6.656.565 1.155.362 2.176.495 3.051.495 1.369 0 2.37-.325 2.994-.609l1.591 2.737-.001-.001c-.004 0 .432 1.09-.365 2.033-.662.785-2.018.694-2.033.695l-4.685-.002H6.368c-.055.003-1.408.098-2.074-.692-.8-.947-.357-2.042-.338-2.088zm2.76 1.349a.5.5 0 0 1-.432-.752l1.328-2.281a.5.5 0 0 1 .865.504l-1.328 2.281a.5.5 0 0 1-.433.248z"
  }));
};

module.exports.Lib = function Lib(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M8.477 7.491c0-.275.224-.501.5-.501s.5.226.5.501a.5.5 0 0 1-1 0zm4.926 6.81c-.549.65-1.439.72-1.796.72-.087 0-.143-.004-.152-.005l-2.844.001v.001H4.503c-.002 0-.048.004-.126.004-.33 0-1.229-.066-1.782-.722-.824-.977-.355-2.094-.335-2.141l3.267-6.863V3.891a1.529 1.529 0 0 1-.676-.373c-.186-.183-.407-.512-.407-1.043 0-.419.14-.78.405-1.044.439-.438 1.059-.452 1.14-.452h4.023c.637.034 1.544.46 1.544 1.496 0 .798-.522 1.226-1.043 1.395l.003 1.428 3.217 6.848c.027.06.496 1.178-.33 2.155zm-9.052-4.207c.506.223 1.561.51 3.137.018 1.721-.538 3.126-.536 3.997-.445L9.516 5.41l-.005-2.441.487-.013c.165-.007.558-.07.558-.481 0-.422-.44-.487-.576-.497l-1.673.001H5.988c-.201.003-.544.073-.544.496 0 .223.081.303.108.329.132.13.379.157.428.152l.509-.009.039.509-.049 2.168-2.128 4.47zm8.47 2.462-.834-1.803c-.481-.104-2.074-.353-4.201.313a6.52 6.52 0 0 1-1.945.314c-.867 0-1.508-.202-1.919-.386l-.75 1.577c0 .003-.23.586.189 1.083.29.343.896.373 1.104.364l2.923-.001v-.001h4.108c.25.02.854-.02 1.144-.362.422-.5.184-1.092.181-1.098z"
  }));
};

module.exports.Lighting = function Lighting(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M8.052 6.005 9.99 2H6.052L3.948 8h3.86l-1.422 5 5.667-6.995H8.052z"
  }));
};

module.exports.Like24 = function Like24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    d: "M5.9 7h-3c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h5V9c0-1.1-.9-2-2-2zM4.4 19.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM21.9 9.1 20 21.2c-.1.4-.5.8-.9.8H8.9V8l3-5.6c.2-.2.5-.4.8-.4h3.1c.3 0 .5.1.7.3s.2.5.2.8L15.4 8H21c.3 0 .5.1.7.3.2.2.3.5.2.8z"
  }));
};

module.exports.LikeFill = function LikeFill(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M5 15H2c-.5 0-1-.4-1-1V5c0-.6.5-1 1-1h2c.6 0 1 .4 1 1v10zM6 5l2-3.7c.1-.2.3-.3.5-.3h2.1c.2 0 .4.1.5.2.1.1.2.3.1.5L10.7 5h3.7c.2 0 .4.1.5.2.1.2.1.3.1.5l-1.3 8.8c0 .3-.3.5-.6.5H6V5z"
  }));
};

module.exports.LikeL24 = function LikeL24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    d: "M21.8 8.3c-.2-.2-.5-.3-.7-.3h-5.6l1.3-4.9c.1-.3 0-.6-.2-.8-.1-.2-.4-.3-.7-.3h-3.1c-.3 0-.7.2-.8.5L9 8H7.7c-.3-.6-.9-1-1.7-1H3c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h5V9h1.6l3.3-6h2.9l-1.6 6H21l-1.9 12h-8.6c-.3 0-.5.2-.5.5s.2.5.5.5h8.6c.5 0 .8-.3.9-.8l2-12.1c0-.3 0-.6-.2-.8zM7 21H3c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h3c.6 0 1 .4 1 1v12zm-1.5-2.5c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1z"
  }));
};

module.exports.Like = function Like(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M14.9 5.2c-.2-.1-.3-.2-.5-.2h-3.7l.5-3.3c0-.2 0-.4-.1-.5-.1-.1-.3-.2-.5-.2H8.5c-.2 0-.4.1-.5.3L6.2 5H6c0-.5-.5-1-1-1H2c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h11.1c.3 0 .6-.2.6-.5L15 5.7c0-.2 0-.3-.1-.5zM2 14V5h3v9H2zm10.8 0H6V6h.8l.3-.6L8.8 2h1.4l-.5 2.8L9.5 6H14l-1.2 8z"
  }));
};

module.exports.LineChart = function LineChart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M1.5 7.5a.5.5 0 0 1-.337-.869l3.875-3.999a.518.518 0 0 1 .441-.12c.158.033.29.141.354.289l.505 1.154 2.119-2.729A.504.504 0 0 1 8.888 1a.503.503 0 0 1 .419.248l1.318 2.26 1.318-2.26A.502.502 0 0 1 12.361 1a.508.508 0 0 1 .432.226l2.125 4a.5.5 0 1 1-.836.548L12.4 2.449l-1.344 2.303c-.18.307-.684.307-.863 0L8.85 2.449 6.668 5.275a.5.5 0 0 1-.876-.074l-.595-1.36-3.36 3.528A.494.494 0 0 1 1.5 7.5zm10.377 6.329 3-4c.182-.208.16-.523-.048-.705s-.524-.163-.706.047l-2.566 3.505-2.264-3.45A.529.529 0 0 0 8.862 9a.503.503 0 0 0-.419.248l-1.295 2.22L4.943 7.77a.5.5 0 0 0-.384-.264.475.475 0 0 0-.435.167l-3 3.498a.499.499 0 1 0 .753.658l2.52-2.949 2.286 3.853a.5.5 0 0 0 .432.268c.2.016.352-.091.443-.248L8.9 10.449l2.182 3.325a.501.501 0 0 0 .383.225L11.5 14a.502.502 0 0 0 .377-.171z"
  }));
};

module.exports.Link = function Link(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M5.002 14a2.994 2.994 0 0 1-2.121-.877 3.004 3.004 0 0 1 0-4.242l1.371-1.372c.093-.082 1.656-1.402 3.299-.477a.5.5 0 0 1-.492.872c-1.023-.579-2.084.301-2.129.339L3.588 9.588a2.001 2.001 0 0 0 0 2.828 2.003 2.003 0 0 0 2.828 0l1.371-1.371a.5.5 0 0 1 .707.707l-1.371 1.371A2.994 2.994 0 0 1 5.002 14zm6.75-4.801 1.371-1.371a3.002 3.002 0 0 0 0-4.242 3.002 3.002 0 0 0-4.242 0L7.51 4.958a.5.5 0 0 0 .707.707l1.371-1.371a2.003 2.003 0 0 1 2.828 0c.779.78.779 2.049 0 2.828l-1.342 1.345c-.045.038-1.105.918-2.129.338a.5.5 0 1 0-.492.871c.423.238.84.328 1.229.328 1.121 0 2.002-.744 2.07-.805z"
  }));
};

module.exports.ListAlt = function ListAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M14 4.521c0 .276-.224.45-.5.45h-9c-.276 0-.5-.174-.5-.45a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5zm0 4a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5c0 .276.224.45.5.45h9c.276 0 .5-.174.5-.45zm0 4a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5c0 .276.224.45.5.45h9c.276 0 .5-.174.5-.45zM3.009 4.479a.5.5 0 0 0-1 0 .5.5 0 1 0 1 0zm0 4a.5.5 0 0 0-1 0 .5.5 0 1 0 1 0zm0 4a.5.5 0 0 0-1 0 .5.5 0 1 0 1 0z",
    "clip-rule": "evenodd"
  }));
};

module.exports.ListOl = function ListOl(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M14 4.521c0 .276-.224.45-.5.45h-9c-.276 0-.5-.174-.5-.45a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5zm0 4a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5c0 .276.224.45.5.45h9c.276 0 .5-.174.5-.45zm0 4a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5c0 .276.224.45.5.45h9c.276 0 .5-.174.5-.45zM2.483 2.83h-.226c-.062.124-.165.251-.313.383s-.319.243-.515.336v.34c.109-.04.232-.101.37-.182s.248-.161.333-.242v2.24h.352V2.83zm-.985 6.632c.039-.063.089-.127.148-.19s.195-.184.406-.36c.253-.214.434-.382.542-.504s.187-.239.233-.35.07-.224.07-.338c0-.226-.08-.414-.24-.566s-.377-.229-.651-.229c-.272 0-.489.07-.65.212s-.255.346-.28.616l.362.037c0-.18.052-.32.154-.422s.237-.152.406-.152c.16 0 .29.048.39.144s.149.213.149.353c0 .133-.055.273-.164.423s-.319.35-.631.605c-.2.164-.354.309-.46.434s-.183.252-.231.381a.612.612 0 0 0-.041.244h1.893v-.338H1.498zm-.195 4.233a.904.904 0 0 0 .626.225c.278 0 .509-.087.691-.261s.273-.386.273-.636c0-.185-.047-.339-.141-.462s-.226-.204-.395-.243c.13-.06.229-.141.295-.242s.1-.214.1-.338a.71.71 0 0 0-.406-.643.938.938 0 0 0-.432-.101c-.227 0-.416.064-.568.194s-.25.312-.293.548l.352.062c.026-.172.085-.301.176-.387s.205-.129.342-.129c.138 0 .251.042.338.127s.131.191.131.32c0 .163-.06.283-.18.361a.726.726 0 0 1-.461.113l-.039.309c.099-.026.182-.039.248-.039a.54.54 0 0 1 .56.556c0 .169-.057.312-.171.426s-.254.172-.419.172c-.14 0-.258-.044-.354-.132s-.166-.229-.206-.429l-.352.047a.869.869 0 0 0 .285.582z",
    "clip-rule": "evenodd"
  }));
};

module.exports.List = function List(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M2 4H1V3h1v1zm3 2H4v1h1V6zm0 3H4v1h1V9zm0 3H4v1h1v-1zm9-8.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5z"
  }));
};

module.exports.LoadingSpinner = function LoadingSpinner(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#666666",
    d: "M8.005 4.421a.9.9 0 0 1-.901-.901V.906a.9.9 0 0 1 1.802 0v2.616a.9.9 0 0 1-.901.899zm0 11.573a.583.583 0 0 1-.583-.582v-3.274a.583.583 0 0 1 1.166 0v3.274a.583.583 0 0 1-.583.582zM5.787 5.051a.872.872 0 0 1-.757-.438L3.659 2.278a.875.875 0 0 1 1.514-.875l1.37 2.337a.874.874 0 0 1-.756 1.311zm5.932 9.948a.523.523 0 0 1-.455-.262l-1.659-2.909a.525.525 0 0 1 .907-.527l1.658 2.908a.526.526 0 0 1-.451.79zm-7.506-8.36a.806.806 0 0 1-.407-.108l-2.423-1.4a.815.815 0 0 1-.299-1.114.814.814 0 0 1 1.114-.3l2.423 1.399a.815.815 0 0 1-.408 1.523zm10.299 5.598a.479.479 0 0 1-.23-.062l-3.021-1.752a.468.468 0 0 1 .467-.809l3.02 1.751a.47.47 0 0 1 .172.64.478.478 0 0 1-.408.232zM3.676 8.78H.762a.759.759 0 0 1 0-1.517h2.914a.758.758 0 0 1 0 1.517zm11.853-.303h-3.496a.467.467 0 1 1 0-.932h3.496a.467.467 0 1 1 0 .932zM1.694 12.335a.7.7 0 0 1-.35-1.306l2.642-1.5a.7.7 0 0 1 .697 1.211l-2.641 1.5a.686.686 0 0 1-.348.095zm9.815-5.862a.466.466 0 0 1-.231-.87l3.019-1.751a.467.467 0 1 1 .467.808L11.74 6.412a.457.457 0 0 1-.231.061zM4.346 15a.641.641 0 0 1-.553-.963l1.559-2.711a.64.64 0 1 1 1.111.642l-1.56 2.71a.641.641 0 0 1-.557.322zm5.681-10.025a.469.469 0 0 1-.403-.701l1.734-3a.47.47 0 0 1 .64-.171.466.466 0 0 1 .17.637l-1.734 3a.474.474 0 0 1-.407.235z"
  }));
};

module.exports.Loading = function Loading(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#231F20",
    d: "M14.423 9.014a.5.5 0 0 0-.602.371A5.972 5.972 0 0 1 7.989 14c-1.685 0-3.219-.7-4.317-1.847-.137-.141-.255-.292-.375-.443-.096-.121-.194-.238-.28-.367-.079-.116-.143-.239-.212-.359a6.087 6.087 0 0 1-.293-.554c-.036-.082-.062-.166-.094-.249a6.123 6.123 0 0 1-.242-.734 5.953 5.953 0 0 1 .062-3.086c.064-.221.129-.441.215-.65.095-.229.213-.449.338-.669A5.954 5.954 0 0 1 7.989 2a5.973 5.973 0 0 1 5.833 4.615.498.498 0 0 0 .601.371.498.498 0 0 0 .371-.602A6.97 6.97 0 0 0 7.989 1a6.961 6.961 0 0 0-5.943 3.317l-.011.013c-.048.077-.077.161-.121.239a6.641 6.641 0 0 0-.383.758c-.105.252-.179.51-.253.769-.028.097-.071.188-.095.289-.002.007.001.013-.001.02a6.942 6.942 0 0 0-.001 3.154c.002.02-.002.037.002.057.006.025.018.049.024.074.072.291.17.573.28.854.037.097.068.196.111.291.098.223.219.436.342.647.08.142.156.284.245.418.102.149.218.29.331.434.139.176.277.35.432.511.032.034.057.073.09.106l.012-.012A6.956 6.956 0 0 0 7.989 15a6.97 6.97 0 0 0 6.805-5.385.499.499 0 0 0-.371-.601z"
  }));
};

module.exports.LocateO = function LocateO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    id: "XMLID_11_",
    d: "M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm.5 13v-3h-1v3c-2.9-.3-5.2-2.6-5.5-5.5h3v-1H2C2.3 4.6 4.6 2.3 7.5 2v3h1V2c2.9.2 5.2 2.6 5.5 5.5h-3v1h3c-.3 2.9-2.6 5.2-5.5 5.5z",
    fillRule: "evenodd",
    "clip-rule": "evenodd",
    fill: "#020202"
  }));
};

module.exports.Location = function Location(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M7.799 1a5.777 5.777 0 0 0-4.1 1.699 5.794 5.794 0 0 0 0 8.199L7.799 15l4.1-4.102a5.792 5.792 0 0 0 0-8.199A5.775 5.775 0 0 0 7.799 1zm0 8a1.998 1.998 0 0 1-2-2 2 2 0 1 1 2 2z"
  }));
};

module.exports.LocationDelete = function LocationDelete(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M1.879 12.893c-.021-.021-.027-.037-.046-.059-.011-.009-.025-.013-.036-.023l.082.082z"
  }), React.createElement("path", {
    d: "M13.437 1.854a.5.5 0 0 0-.707-.707l-1.233 1.236C10.422 1.478 9.11 1 7.785 1a5.779 5.779 0 0 0-4.1 1.699c-2.148 2.146-2.234 5.543-.309 7.822l-1.579 1.582c-.184.185-.278.385.036.73a.496.496 0 0 0 .671-.023l1.544-1.548L7.784 15l4.1-4.102c2.144-2.143 2.233-5.531.319-7.809l1.234-1.235zM2.985 6.798c0-1.281.5-2.486 1.406-3.392A4.77 4.77 0 0 1 7.785 2a4.74 4.74 0 0 1 3.006 1.089L9.402 4.481A2.977 2.977 0 0 0 7.784 4c-1.654 0-3 1.346-3 3 0 .586.17 1.145.482 1.626L4.082 9.814a4.74 4.74 0 0 1-1.097-3.016zM9.784 7a1.998 1.998 0 0 1-3.128 1.649l2.776-2.782c.221.323.352.712.352 1.133zm-4 0a2 2 0 0 1 2-2c.32 0 .618.082.886.215L6.001 7.89A1.99 1.99 0 0 1 5.784 7zm6.799-.202a4.76 4.76 0 0 1-1.406 3.393l-3.393 3.395-3.029-3.031L5.95 9.357a2.968 2.968 0 0 0 3.956-.236 2.97 2.97 0 0 0 .231-3.96l1.361-1.365a4.741 4.741 0 0 1 1.085 3.002z"
  }));
};

module.exports.LockRow = function LockRow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M15 9.5v4c0 .827-.673 1.5-1.5 1.5h-11c-.827 0-1.5-.673-1.5-1.5v-4C1 8.673 1.673 8 2.5 8H4v1H2.5c-.275 0-.5.225-.5.5v4c0 .275.225.5.5.5h11c.275 0 .5-.225.5-.5v-4c0-.275-.225-.5-.5-.5H12V8h1.5c.827 0 1.5.673 1.5 1.5zm-4-4.047v4.143c0 .23-.193.404-.439.404H5.456c-.247 0-.435-.174-.435-.404V5.453c0-.229.188-.404.435-.404h.595v-.832c0-.039-.123-2.322 1.963-2.322l.006.001c.021 0 2.002-.302 1.991 2.321v.832h.55c.246 0 .439.176.439.404zm-4.23-.404H9.2v-.832c0-1.639-1.106-1.571-1.221-1.575-1.285 0-1.209 1.568-1.209 1.575v.832z"
  }));
};

module.exports.Lock = function Lock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.03 7.76V5.579C13.03 3.051 11.039 1 8.51 1S3.931 3.051 3.931 5.579V7.76H3V15h10.961V7.76h-.931zm-3.886 3.928v2.021H7.817v-2.021a1.426 1.426 0 1 1 1.327 0zm2.579-3.928H5.238V5.579c0-1.806 1.465-3.271 3.271-3.271s3.213 1.465 3.213 3.271V7.76z",
    "clip-rule": "evenodd"
  }));
};

module.exports.LogoBg = function LogoBg(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "-283 375 44 44",
    "enable-background": "new -283 375 44 44"
  }), React.createElement("path", {
    d: "m-246.1 411.5-9.9 5.7c-3.1 1.8-6.9 1.8-10 0l-9.9-5.7c-3.1-1.8-5-5.1-5-8.7v-11.5c0-3.6 1.9-6.9 5-8.7l9.9-5.7c3.1-1.8 6.9-1.8 10 0l9.9 5.7c3.1 1.8 5 5.1 5 8.7v11.5c.1 3.6-1.8 6.9-5 8.7z",
    fill: "#0B0B0A"
  }));
};

module.exports.Mail = function Mail(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-.678 1L8 8 2.602 4h10.72zM14 12H2V4.655L8 9l6-4.444V12z",
    "clip-rule": "evenodd"
  }));
};

module.exports.MapBubbleHover = function MapBubbleHover(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#CCCCCC",
    d: "M13.816 7.283s.041-.225.086-.225c.043 0-.24.072-.24.072l-.318-.098-.282.288s-.207.186-.254-.197l-.288-.059s-.406-.359.053-.379l.178-.133.033-.176.279-.24.23-.244.205.039s-.201.875.023.621.404-.402.484-.402.699-.911.699-.911l.068.081s.357.023.221-.168c-.135-.192-.008-.11.045-.11s.426-.327.336-.484c-.088-.156.145.086.145.086l.137-.139s-.213-.598-.189-.667c.023-.071.139-.167.139-.178 0-.013.303.273.299-.219-.004-.494.15-1.069.074-1.141-.079-.071-.309.202-.309.202l-.135.018-.07.137-.315.144L15 2.68l-.109-.255-.338-.088s-.182.002-.182-.009c0-.013-.133.059-.133.059l-.152-.195s-.631-.927-.703-.933c-.074-.006-.316.023-.418-.068-.1-.091-.34.06-.365.092-.027.032-.252.15-.316.136-.064-.014-.289.381-.029.292.26-.087.033.299-.031.341-.062.041-.154.418-.144.45.008.032.084.13-.09.257s-.375.129-.467.089c-.092-.041-.223.63-.197.671s.088.101.088.101.09-.089.145-.054c.057.036.172-.038.207.021.035.058.016-.32.385-.062.369.257.375.331.053.334-.32.003-.012.037-.336.133l-.062.13-.053-.065s-.115.14-.143.14-.006.138-.006.138-.197.178-.396.169c-.198-.011-.077.364-.608.195l-.113.092s-.072.304.023.343c.098.038.01.178-.076.178s-.168.365-.305.36c-.135-.007-.641.133-.641.133l-.719.3s-.1-.006-.113-.064c-.016-.059-.473-.068-.52-.068-.049 0-.246-.33-.831-.183-.585.147-.824-.137-.837-.133-.011.002-.247-.525-.247-.525l-.511-.343s-.709-.023-.672-.234l.099-.177s-.009-.143 0-.168l.041-.113s-.384-.32-.668-.946l-.085-.05s-.129.03-.175.016c-.045-.013.02.116-.323.197-.344.082-.093.432-.093.432s.159.399-.658-.16c0 0-.146.453-.286.515-.14.062.052.168.052.168l-.636-.017s.145.131-.012.212l.009-.004v.199l.04.114s-.025.254-.219.371v.145l-.146.059-.031.07-.154-.03s-.342.163-.342.175-.33-.015-.33-.039c0-.023-.162.144-.162.144l-.2-.015L.72 5.56s-.166.013-.199-.024c-.034-.035-.047.093-.238.093h.01l-.094.083v.079l-.129.142.014.248.115-.025.148.144s.084.492-.255.404c-.339-.083.363.356.363.356s.056.098-.079.19c-.135.09.328.271.328.271s.182.076.346.014.706.104.363.466l-.181.178h-.19l.022.098-.057.058.076.131.064.045.003.199h-.105l-.073.08-.126-.133s-.069.139.011.186c.08.043.006.236-.033.281s.615.655.615.655l.125-.064s.341.242.341.281.229.268.229.268l.127-.029s.107-.004.027.152c-.08.158.176.156.176.156l.366.305h.195s.306.203.514.088.253.023.146.17.247-.094.255-.154c.006-.061.232-.131.344.029.11.158.152.068.191.061.041-.006.143.008.187.09.045.082.335-.018.313-.094-.023-.074.207-.154.207-.154l.178.004s.193-.244.47-.117l.239-.117.094.078-.059.062.131.094s-.408.246.244.205c.651-.039.266.877.177 1.098s-.185.275-.185.275l.021.213.368-.033-.018.1s.026.275.173.275c.146 0 .086.209-.017.352 0 0 .227.043.24.109s.217.207.321.102c.104-.104.133.039.129.15-.005.113.17 0 .17 0l-.04-.293s-.078-.141.127-.121c.203.02.248-.121.248-.121l.108.061.11-.066.049.016.061-.025.074.066.055-.07.107.027.119-.047.044-.141s.156-.141.234.031c.076.174.414.078.414.078l-.072.117.277.316s.098-.113.262.01c.164.121.191-.016.191-.016v-.105l.266.143.201.002s-.131.35.113.387c.244.035.119-.109.119-.109s-.207-.156.014-.252c.223-.1.791-.338.791-.338l.193-.164-.045-.199.154.115s.787-.014.986-.516l.164-.162.143-.176-.041-.061.377-.436s.646-1.518.586-1.602c-.062-.082.199-.277-.529-.246-.729.027.336-.35.408-.35.07 0-.062-.323-.062-.323l-.426-.32-.265-.474s-.408-.176-.266-.369c.143-.193.439-.724.721-.72"
  }), React.createElement("path", {
    fill: "#999999",
    d: "M10.393 14.811v.055s.121.047.133.09c.012.047.107-.047.184.016s.053-.102.123-.1c.072.002.066-.121.133-.121.07 0 .057-.344.197-.418.139-.072-.209-.195-.182-.111l-.162.039h-.178l-.059.076h-.064v.084s-.262.225-.119.4l-.006-.01z"
  }), React.createElement("path", {
    fill: "#999999",
    d: "M14.633 11.248a.804.804 0 0 0-.275.342c-.051.117-.09.176-.117.191l.027.217v.004l-.02.148c-.008.049 0 .08.012.088l.162.105h.004l.004.012a.28.28 0 0 0 .062.105.13.13 0 0 0 .051.043l.023-.258v-.008l.113-.275.041-.326v-.004l.004-.004.035-.086-.027-.076v-.004h-.004l-.008-.102.004-.004.004-.004.02-.023.012-.027-.127-.054z"
  }), React.createElement("circle", {
    cx: "10",
    cy: "5.162",
    r: "2",
    fill: "#00AFEA",
    opacity: ".8"
  }), React.createElement("circle", {
    cx: "6.5",
    cy: "10.664",
    r: "1.5",
    fill: "#59C034",
    opacity: ".8"
  }), React.createElement("circle", {
    cx: "9.5",
    cy: "10.662",
    r: ".5",
    fill: "#262626",
    opacity: ".8"
  }), React.createElement("circle", {
    cx: "13.5",
    cy: "11.662",
    r: ".5",
    fill: "#262626",
    opacity: ".8"
  }), React.createElement("circle", {
    cx: "12",
    cy: "9.161",
    r: "1",
    fill: "#FF0000",
    opacity: ".8"
  }), React.createElement("circle", {
    cx: "6",
    cy: "7.162",
    r: "1",
    fill: "#87318C",
    opacity: ".8"
  }));
};

module.exports.MapBubble = function MapBubble(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#989898",
    d: "M13.816 7.282s.041-.224.086-.224c.044 0-.24.071-.24.071l-.318-.098-.282.289s-.207.185-.254-.198l-.288-.059s-.405-.358.053-.379l.178-.133.033-.175.279-.241.23-.243.205.039s-.201.874.023.62.404-.402.484-.402.699-.91.699-.91l.068.081s.357.023.222-.168c-.136-.192-.009-.11.044-.11s.426-.327.337-.484c-.089-.156.145.086.145.086l.136-.139s-.213-.598-.188-.667c.023-.071.139-.167.139-.178 0-.013.302.273.298-.219-.003-.494.151-1.069.074-1.141s-.308.201-.308.201l-.136.018-.07.137-.314.144-.15-.121-.109-.255-.339-.088s-.181.002-.181-.009c0-.013-.134.059-.134.059l-.152-.195s-.631-.927-.703-.933c-.074-.006-.316.023-.417-.068-.101-.091-.34.06-.366.092-.027.032-.252.15-.316.136-.064-.014-.289.381-.029.292.26-.087.033.299-.03.341-.062.042-.153.419-.144.451.008.032.085.13-.09.257-.174.127-.375.129-.467.089-.091-.041-.223.63-.197.671.026.041.089.101.089.101s.089-.089.145-.054c.056.036.171-.038.206.021.036.058.016-.32.385-.062.369.257.375.331.053.334-.32.003-.012.037-.336.133l-.062.13-.053-.065s-.115.14-.143.14c-.026 0-.006.138-.006.138s-.197.178-.396.169-.078.364-.609.195l-.112.092s-.073.304.023.343c.098.038.009.178-.077.178s-.168.365-.305.36c-.135-.007-.641.132-.641.132l-.717.301s-.1-.007-.115-.064c-.015-.06-.472-.069-.52-.069-.048 0-.246-.329-.831-.183-.584.148-.824-.136-.836-.132-.011.002-.247-.526-.247-.526l-.512-.342s-.708-.023-.671-.234l.098-.177s-.009-.143 0-.168l.041-.113s-.383-.32-.667-.946l-.085-.05s-.128.03-.175.016c-.046-.013.02.116-.323.197-.344.081-.093.432-.093.432s.159.399-.658-.16c0 0-.146.453-.286.515-.14.062.051.168.051.168l-.635-.018s.144.131-.011.212l.008-.004v.199l.041.114s-.026.254-.22.371v.145l-.146.059-.031.07-.155-.03s-.341.163-.341.175-.331-.015-.331-.039c0-.023-.162.144-.162.144L.76 5.653l-.04-.094s-.166.013-.199-.024c-.034-.035-.046.093-.237.093h.009L.2 5.711v.079l-.129.142.014.249.115-.025.148.144s.084.492-.255.405c-.339-.085.362.354.362.354s.057.099-.078.19c-.135.089.328.271.328.271s.181.076.345.014.707.104.364.468l-.182.178h-.189l.022.097-.057.059.076.131.064.046.002.2h-.104l-.073.081-.126-.133s-.069.14.011.186c.079.043.006.237-.034.282-.039.043.616.65.616.65l.125-.064s.341.242.341.281.229.266.229.266l.128-.029s.106-.004.026.152c-.08.158.177.156.177.156l.366.305h.195s.306.203.514.088c.208-.115.252.023.146.17-.107.146.247-.094.254-.155.006-.061.232-.131.343.029.111.158.153.068.192.061.041-.006.143.008.186.09.045.082.335-.018.313-.094-.022-.074.208-.154.208-.154l.177.004s.193-.244.47-.117l.24-.118.093.078-.058.062.131.094s-.408.246.243.205c.652-.039.266.877.177 1.098-.088.221-.184.275-.184.275l.02.213.368-.033-.017.1s.026.275.173.275c.146 0 .086.209-.016.352 0 0 .227.043.239.109.014.066.218.207.322.102.104-.104.133.039.129.15-.004.113.17 0 .17 0l-.04-.293s-.078-.141.126-.121c.203.02.249-.121.249-.121l.108.061.11-.066.048.016.061-.025.075.066.055-.07.107.027.119-.047.041-.139s.157-.141.235.031c.077.174.414.078.414.078l-.072.117.278.316s.098-.113.262.01c.164.121.19-.016.19-.016v-.105l.266.143.202.002s-.131.35.113.387c.243.035.118-.109.118-.109s-.207-.156.014-.252c.223-.1.791-.338.791-.338l.193-.164-.045-.199.154.115s.788-.014.986-.516l.164-.162.143-.176-.041-.061.377-.436s.647-1.518.586-1.602c-.062-.08.2-.275-.529-.244-.728.028.338-.347.409-.347.07 0-.062-.32-.062-.32l-.426-.321-.266-.477s-.407-.177-.266-.371c.143-.193.44-.725.721-.721"
  }), React.createElement("path", {
    fill: "#989898",
    d: "M10.393 14.809v.055s.121.047.133.09c.013.047.107-.047.184.016s.053-.102.124-.1.065-.121.133-.121c.069 0 .057-.344.196-.418.139-.072-.208-.195-.182-.111l-.162.039h-.178l-.059.076h-.064v.084s-.261.225-.118.4l-.007-.01z"
  }), React.createElement("path", {
    fill: "#989898",
    d: "M14.634 11.246a.79.79 0 0 0-.275.342c-.051.117-.09.176-.118.191l.028.217V12l-.021.148c-.008.049 0 .08.012.088l.162.105h.004l.004.012a.28.28 0 0 0 .062.105.13.13 0 0 0 .051.043l.023-.258v-.008l.114-.275.04-.326v-.004l.004-.004.035-.086-.027-.076v-.004h-.004l-.008-.102.004-.004.004-.004.02-.023.012-.027-.126-.054z"
  }), React.createElement("circle", {
    cx: "10",
    cy: "5.162",
    r: "2",
    fill: "#262626",
    opacity: ".5"
  }), React.createElement("circle", {
    cx: "6.5",
    cy: "10.662",
    r: "1.5",
    fill: "#020202"
  }), React.createElement("circle", {
    cx: "9.5",
    cy: "10.66",
    r: ".5",
    fill: "#262626",
    opacity: ".8"
  }), React.createElement("circle", {
    cx: "13.5",
    cy: "11.66",
    r: ".5",
    fill: "#262626",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#262626",
    d: "M13 9.166c0 .549-.447.994-1 .994s-1-.445-1-.994c0-.553.447-1.004 1-1.004s1 .451 1 1.004z",
    opacity: ".8"
  }), React.createElement("circle", {
    cx: "6",
    cy: "7.162",
    r: "1",
    fill: "#262626",
    opacity: ".8"
  }));
};

module.exports.MapColorHover = function MapColorHover(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#215F8B",
    d: "m13.585 2.173-.026-.086-.071-.122-.06-.032-.059.032-.035.07-.004.008h-.012l-.11.021c-.013.008-.024.012-.032.023l-.022.027-.06.047-.016.008-.051.008a.28.28 0 0 1-.105-.059l-.005-.004c-.079-.079-.118-.134-.118-.166V1.839l.012-.02-.113-.039-.005.039c0 .012-.012.027-.031.039l-.039.016-.016-.004v-.004l-.061-.012.012.043-.103-.066h-.003l-.004-.004a.374.374 0 0 1-.023-.134c0-.039.004-.062.021-.079l.022-.043-.008-.035-.102.016c-.051.004-.086.035-.105.095v.004l-.06.091.06-.004h.004l.004-.004.004.008.047.02h.009l.008.004v.012l.009.082.022.078v.012l-.13.256c-.023.035-.035.13-.043.271v.012l-.053.098.035.039v.008c.006.06 0 .095-.016.103l-.012.004c-.027.017-.117.11-.264.287l-.01.012-.007-.007-.013-.008c-.051-.036-.099-.067-.125-.099-.023-.016-.082-.027-.182-.027l-.003.181-.004.004-.07.342a.831.831 0 0 0-.02.239l.027.036.023-.048h.004l.004-.008.092-.047.25.039.027-.031.035-.062.008-.004.005-.004.099-.02.129-.008c.039.008.087.059.146.137.156.079.243.15.263.213a.091.091 0 0 1 0 .082c-.012.027-.039.043-.078.047h-.004c-.191-.008-.304-.008-.342.004l-.095.063c-.117.087-.196.13-.239.13l-.078.012-.047.197c-.012.059-.031.099-.065.126a.26.26 0 0 1-.144.062.538.538 0 0 0-.195.074l-.066.142-.004.004h-.008l-.182.075h-.012l-.09-.02a.405.405 0 0 1-.162-.056.209.209 0 0 0-.152-.012.38.38 0 0 0-.066.239c.004.048.017.079.027.087l.027-.004.031-.02.008.126a.116.116 0 0 1-.047.098.377.377 0 0 1-.105.047l-.033.009c-.039.016-.121.122-.243.314v.004h-.005l-.117.071c.02 0 .031.008.027.023-.004.016-.017.02-.047.023l-.334-.006c-.373-.012-.664.091-.871.303l-.004.004-.008.003h-.004l-.139.016-.007.004h-.008l-.039-.095-.141.035a.578.578 0 0 1-.283-.07 1.15 1.15 0 0 1-.283-.173.49.49 0 0 0-.22-.095l-.126-.011-.141.02a1.207 1.207 0 0 1-.299.007 1.925 1.925 0 0 1-.417-.09l-.011.024h.008l.004.004v.004l.004.039.035.075.082.103.004.012-.015.073v.004h-.004l-.047.063.051.052c.02.02.031.035.031.051l.012.075.059.059v.008l.007.05v.039l.035.027.024-.008.004-.012c.012-.031.032-.046.059-.05l.032-.012.207-.02.083-.031.008-.004.012-.008.044.094h.004a.084.084 0 0 1-.012.062l-.115.163.008.027.052.051.052.031h.004c.023.032.042.051.066.059a.172.172 0 0 1 .078.063l.004.012.039.016.012.004h.004l.012.044.004.043.016.062.099.016h.009l.004.004v.004l.004.008.027.055.078.027.055-.027-.01-.032-.051-.047.008-.008v-.008l.043-.082h.095l.004.004.134.047.074-.012.059-.055c.067-.083.11-.119.138-.099l.032-.004c.034 0 .055.004.065.008.005.009.009.016.009.024 0 .016.016.047.039.091v.008l.012.055v.011l-.016.063v.004l-.004.004-.067.079-.003.004-.143.062-.02.04-.02.113.012.055.036.059.016.013.047.031h.165l.138-.02.021-.02c.02-.024.039-.032.052-.032l.094.016.009-.016c-.01-.027-.01-.05.006-.074l.039-.066v-.13l.069-.204.004-.004v-.004h.004v-.004l.123-.099.008-.008.105.048c.055.039.082.07.082.09l-.008.086-.035.056-.027.078V7.3l.027.039.035-.004.008-.004.061.004a.14.14 0 0 1 .065.082l.036.012h.008l.133.063.059.02.084-.012.035-.048.047-.191.005-.106v-.008l.007-.004.004-.004.074-.063.043-.055.004-.004.079-.035.047-.027.06-.023-.033-.119.135.016v.004l.07.027v-.004l.02-.075v-.012l.012.004h.008l.063.017h.03l.061-.067h.004l.004-.004h.004l.078-.016.066-.062.035-.051v-.065c0-.023.012-.039.035-.051h.013l.075.008.031-.02.012-.056.078-.023h.008l.098.012.079-.02.048-.047.031-.062-.061-.062V6.2l-.012-.048-.016-.071v-.004l.035-.062c0-.02.013-.047.043-.078l.043-.086v-.004h.005l.039-.063.059-.118.056.078.004.004v.004l.021.079v.004l.013.078.055.023h.004l.017.008.005-.004.045-.081.024-.079.012.004.012.004.113.039.057-.043.004-.004h.008l.057-.004.038-.067v-.083l.027-.125.008.004h.013l.086.02.039-.071h.012l.078-.008h.011v.004l.008.004.04.056v.003l.004.004v.008l.008.078.039.035.055-.051.013.016a.08.08 0 0 1 .026.062v.07l-.026.071.02.031.039.044.166.023.005.004.006.005.013.012.047-.066h.004l.039-.04-.02-.059-.043-.251.113.055h.008l.051.062.033.031.047-.031.164-.181h.004l.06-.044.067-.094.004-.008.091.023h.043c0-.035.008-.059.012-.074l.065-.078.02-.012.078.027.095-.012.063-.067.03-.06-.02-.031-.055.027-.004-.004-.004-.004-.071-.06-.003-.004.026-.105.008-.079-.02-.066-.056-.021v-.005l-.003-.004-.004-.004-.045-.093-.008-.012-.067.078-.066.043-.016.008-.004-.004-.004-.008-.071-.066v-.004l-.052-.109v-.004l-.023-.079v-.122l-.008-.07-.055-.021h-.004V4.22l-.125-.099.008-.012.059-.062v-.008h.008l.066-.008h.004c.02 0 .039.012.055.031l.057.043.059-.047.044-.06v-.05l-.017-.125-.012-.051-.086-.016v-.051l-.08-.099-.004-.003-.039-.07-.008-.008v-.008l.086-.114v-.004l.004-.004v-.004h.008l.037-.004.043-.035.052-.157h.004v-.004l.062-.07v-.005h.008l.07-.02v.008l.047.039.017.004.028-.122-.028-.087-.005-.004v-.007l.013-.098v-.008l.048-.051.031-.056.004-.047a.41.41 0 0 0-.035-.122v-.097l.02-.083a.23.23 0 0 1-.026-.083l.011-.109z"
  }), React.createElement("path", {
    fill: "#215F8B",
    d: "M8.034 6.958h-.063l-.02.043.035.035v.008l.016.051.004.004v.012l-.008.003-.086.044-.004.004H7.9c-.066-.008-.101-.027-.113-.055l-.025-.047-.118-.024-.031-.148a.092.092 0 0 1-.055-.032l-.004-.008c-.02-.027-.035-.043-.059-.047a.182.182 0 0 1-.082-.071l-.047-.028h-.004l-.063-.062-.016-.055v-.004l.126-.174c.004-.011.008-.019.004-.023l-.024-.055-.067.028h-.004v.004h-.004l-.172.011-.067.016-.023.023-.012.024c-.016.02-.039.032-.075.024l-.004-.004-.059-.044-.004-.097a.167.167 0 0 1-.058-.067l-.016-.087-.039-.047-.044-.036-.02-.012.071-.09.016-.051-.079-.098h-.004v-.004l-.035-.079v-.004L6.682 5.7l-.051-.039v-.004l-.055-.058-.07-.012-.078.023-.012.016-.012.109v.123l-.013.004-.074.028v.004l-.071.004a.794.794 0 0 1-.117.055l-.008.003h-.004l-.134-.031-.055.059a.142.142 0 0 1-.075.039l-.082.066-.043.067v.004l-.004.004a.341.341 0 0 1-.06.075l-.047.059v.004l-.004.004-.027.02a.173.173 0 0 1-.055.011l-.098-.008-.023.035-.035.063.016.063-.008.154.027.047v.004l.012.035h.055l.094.02.122.008.056-.008h.012l.105.04h.004l.055.043.118.043h.004l.078.047.192.176.087.04.035-.017.035-.066-.02-.105c0-.031.023-.051.07-.07l.009-.006.24.142.027-.008.055-.031h.008l.031.004.047-.039.008-.004.012.008.142.097.004.004.09.074a.357.357 0 0 1 .082.083l.043.048.036-.004.039-.075.083.06h.008l.066.082.177.133.052.06.152-.044.008.114.066.066v.004l.056.082v.012l.059.271.06.109-.08.202v.012l-.066.016v.059l-.004.003-.067.11h-.008l-.094.008-.095.079c.013.012.028.02.056.031.039.012.043.044.023.097v.005l-.066.067h-.005l-.004.006h-.008l-.188-.026-.004.067.02.142.157.065v.008l.06-.02.004-.004.008-.004.004.008h.004l.042.024h.066l.024-.005-.024-.072-.015-.079V8.91l.004-.004v-.004l.023-.027.008-.008.004-.004.043-.061.004-.003.071-.055h.004V8.74h.004l.087-.012v.024c0 .026.004.047.008.06l.016.035.023.052.078.043.216.021H8.538v.02l-.008.07.062.066.047.02.009.004v.004l.002.005v.068l-.02.079.026.02c.03-.004.06-.004.087.017l.091.043.056-.043.059-.063.004-.027.004-.008.008-.004.008-.008v-.009l-.02-.083-.004-.043-.004-.004v-.004l.004-.004v-.005l.031-.051.004-.003.062-.043h.135l.02-.008-.004-.067-.02-.061-.042-.068-.004-.003V8.663l.022-.058.004-.005.106-.155.004-.004h.004l.008-.004h.023l.039.004.09.051.06.017.008-.028-.012-.007v-.012c0-.023.012-.043.036-.062l.07-.051.004-.004v-.004c.039-.012.062-.02.078-.02l.062-.008h.008l.04.008.027-.098v-.068c0-.043 0-.07.013-.078l.028-.051-.036-.046-.047-.032-.098-.027c-.02 0-.055-.021-.113-.071l-.06-.027h-.004l-.004-.006-.069-.086h-.068l-.004-.003h-.004l-.059-.032-.035.047-.008.186.012.07h.027l.004.004.055.016v.008l.027.066h.004v.008l-.016.122v.012l-.003.003-.055.032-.008.005-.004-.004h-.004l-.027-.008-.063.023h-.004l.004.012.004.004.012.105c0 .016-.008.023-.023.027h-.049a.063.063 0 0 1-.045-.023l-.049-.035-.004-.004h-.004v-.004l-.027-.066a.156.156 0 0 0-.066-.031h-.008l-.055-.04h-.008v-.008l-.016-.068.008-.05h.004v-.004l.023-.028v-.02l-.023-.07-.057-.05v-.008l-.013-.162-.039-.039h-.004l-.005-.004-.032-.074-.141-.016a.126.126 0 0 1-.074-.067h-.064a.212.212 0 0 1-.075-.051l-.008-.008a.322.322 0 0 1-.047-.071l-.004-.004-.011-.063v-.007l.023-.121v-.004l.023-.052v-.008h.004l.15-.063.06-.07.012-.059-.008-.043a.332.332 0 0 1-.039-.103l-.032.004-.056-.004a.478.478 0 0 0-.086.091l-.067.062h-.004l-.004.004c-.05.012-.086.02-.105.012l-.13-.047z"
  }), React.createElement("path", {
    fill: "#509BC2",
    d: "m9.079 6.993-.071.197v.133l-.039.067-.008.047c.008.027-.004.052-.031.067l-.008.004h-.004l-.004-.004-.098-.012-.052.047-.149.024h-.062l.039.028.142.016h.016l.004.003v.004l.034.086.04.027c.012.016.02.039.02.082l.004.107.048.043h.004v.004h.004l.022.078v.043l-.027.04-.008.035.012.04.047.032c.051.02.078.032.09.052l.028.059c.03.016.047.031.055.047l.036.012h.004l-.018-.087c-.005-.02-.005-.039.004-.047.009-.013.017-.021.033-.024l.059-.02.004-.004h.004l.004.004.027.008.035-.02v-.008l.011-.099-.023-.046-.032-.016-.039-.004h-.007l-.008-.004-.016-.101.004-.201.008-.008.06-.082.086.047h.051l.039-.256c-.013-.028-.023-.047-.049-.059l-.023-.004v.004h-.012l-.062.012-.004-.008-.004-.004-.043-.055v-.003l-.004-.004v-.099l.016-.055.016-.023c0-.017.004-.032.02-.052l.017-.02.004-.066-.06-.055-.079-.039-.107.09z"
  }), React.createElement("path", {
    fill: "#023057",
    d: "m6.395 5.579.004-.004h.005v-.004l-.127-.357-.078-.063v-.008l-.02-.146-.165-.023h-.011V4.97l-.004-.008v-.004a.456.456 0 0 0-.15-.177.338.338 0 0 0-.121-.067c-.028-.016-.055-.027-.075-.043-.052-.035-.228-.062-.538-.07h-.012l-.035-.055a.35.35 0 0 1-.031-.103c0-.043.051-.185.16-.417l-.055-.171-.058-.276c-.008-.039-.075-.074-.194-.109-.023-.008-.047-.016-.07-.031a.177.177 0 0 1-.09-.1.225.225 0 0 0-.118-.117l-.004-.004-.004-.004-.048-.244-.188.02-.02.052c-.023.082-.046.121-.074.121l-.122.039c-.074.028-.121.059-.144.094a.338.338 0 0 0-.033.126.55.55 0 0 1-.039.153.194.194 0 0 1-.114.109c-.102.04-.275-.027-.514-.195l-.322.412.039.169h.004l.004.008-.008.004v.004a.1.1 0 0 1-.066.044c-.032.008-.063-.004-.1-.028-.031-.024-.121-.043-.266-.051l-.067-.004-.098-.008-.105.02.047.067c.039.051.055.082.051.102l-.044.256.021.137h.004v.004l-.006.003-.078.256c-.004.023-.012.035-.02.031h-.007v-.004l-.012-.023c-.017-.031-.024-.043-.036-.039-.008.004-.02.019-.023.054a.392.392 0 0 1-.126.192l-.071.056-.035.02h-.004l-.256.004-.097.094h-.016l-.271-.039c-.043.047-.086.062-.13.055-.039-.012-.107.003-.201.038l-.109.13-.004.008-.174.004v-.146H.617l-.02.062-.083.02H.507l-.004-.003H.499a.452.452 0 0 0-.177-.063c-.035-.004-.078.02-.142.074a.54.54 0 0 0-.137.155c.012.008.02.023.02.047a.27.27 0 0 1 .012.082.124.124 0 0 1-.032.067c-.02.012-.031.047-.043.11l.062.043.087-.091.11.122v.008l.024.216v.004H.279l-.062.299H.201c-.091 0-.15.004-.174.02.004.02.043.052.11.095l.055-.008h.013l.004.004.129.125c.051.043.047.118-.02.229l.02.121.051.012H.59l-.103.093.06.031.078.044.212.09.004.004h.008l.02.322c.003.063.051.11.144.141l.016-.008h.008l.221.031h.015v-.003l.004-.008a.366.366 0 0 0 .039-.082v-.008c-.004-.035.012-.066.043-.09a.178.178 0 0 0 .062-.075l.004-.004c.012-.031.051-.039.118-.02h.004l.076.044.247.047.153-.011.11-.048a.168.168 0 0 1 .048-.047c.02-.004.047.004.078.031l.017.008c.015.012.027.036.042.079l.078.059H2.471l.083.035.153-.012.086-.027.225.02.098-.027.114-.047a.281.281 0 0 1 .09-.04h.215l.079-.028a.165.165 0 0 1 .083-.031h.125l.059.044.17.035c.023 0 .047.02.086.055l.07.047.008.008.162.004h.004l.074.038.098.02h.004l.083.012.023-.048-.035-.078-.016-.078v-.004h-.004l.012-.012.055-.075v-.004h.005v-.004l.055-.04-.013-.023-.023-.078c0-.012-.012-.02-.036-.035l-.059-.063-.075-.063-.004-.008-.008-.004.004-.004v-.008l.012-.075v-.055l-.035-.094.091-.02.043-.043h.11l.109-.016h.004l.074.008.087-.031.099-.012.062-.027h.004l.169-.032.028-.027-.007-.032-.032-.055v-.004l-.004-.003v-.004l.008-.059.004-.004v-.083l-.016-.071v-.004l.04-.078c.016-.035.035-.055.059-.055l.102.008a.097.097 0 0 0 .055-.023l.154-.209v-.004l.004-.004.082-.066.008-.008a.208.208 0 0 0 .062-.027l.02-.02c.026-.036.051-.051.066-.051l.134.027.113-.055h.008l.066-.008.056-.024v-.091l.016-.113v-.008l.02-.031-.001-.004z"
  }), React.createElement("path", {
    fill: "#215F8B",
    d: "m6.529 6.923-.035.027c0 .016.008.051.02.102v.004l.004.004h-.005l-.042.098-.059.024-.013.004h-.004l-.102-.047h-.004v-.004l-.192-.177-.075-.043-.118-.044v-.004H5.9l-.055-.039-.097-.031-.056.004h-.004l-.126-.008h-.004l-.089-.02h-.055l-.043.032c-.025.012-.056.015-.096.023l-.082.016-.07.023-.004.004v.004-.004l-.086.009-.091.035h-.013l-.074-.008-.113.016h-.095l-.039.039h-.004l-.048.012.02.047v.074l-.012.067.067.055h.004l.056.063c.035.027.051.047.051.07l.02.059.027.059c-.004 0-.004.004-.004.004l-.078.055-.052.068.012.058.036.082.004.008v.004l-.008.031c-.008.02-.016.036-.028.044-.023.02-.062.02-.126 0l-.098-.02h-.008l-.07-.035-.114-.004.004.004-.012.197c-.004.027-.025.039-.052.043-.012.004-.02.02-.016.051v.004h-.003l-.008.05a.218.218 0 0 1 .055.06l.02.095v.035c-.005.019-.009.035-.017.051l-.027.078-.051.098v.02l.008.047.051.067a.154.154 0 0 1 .027.043l.048.067.071.078c.027.028.047.04.055.04l.074-.048c.016-.012.027-.021.047-.021.016 0 .039.013.075.037h.004v.004l.039.047.02.048.017.021.012.008.051.035.026.004a.09.09 0 0 1 .043.03c.008.011.051.027.126.048h.004l.118.043h.008l.082.039.142.035.004.004.184.008.082-.03h.075v.004l.004.003.062.078v.004l.04.063.031.035.043.02.005.003.004.004.035.078v.004h.004v.004l.02.087.055.02h.008l.044.028.059-.013.017-.059v-.004l.004-.004.066-.066.074.02v.008l.035.079.075-.026.007-.077v-.01l.004-.004.051-.026-.012-.109v-.012l.059-.122.059-.023-.023-.11h.059l-.005-.053-.031-.105v-.008l.008-.075v-.012l.008-.005.039-.049.008-.009h.012l.106.021h.004l.087.023.074-.023.043.086.004.004v.062l.012.06c.008.023.023.039.039.043h.008c.035.008.056.022.06.047.004.021.02.047.047.078l.035.052v.004l.024.043.035-.004.066-.059.043.09.086.027h.005l.003.004.043.078.02.013.004-.074v-.017l.173-.004.004-.016c.004-.007.004-.023-.004-.034a.213.213 0 0 1-.02-.073c-.004-.03 0-.055.008-.062.012-.017.02-.017.039-.012l.071.022.008-.051-.13-.059h-.008l-.004-.006v-.006l-.019-.158.004-.1V8.745l.216.028.056-.052c.012-.02.008-.034 0-.038-.056-.02-.084-.043-.084-.067 0-.012.004-.028.023-.036l.091-.091.098-.004.051-.086v-.082l.075-.016a.623.623 0 0 1 .039-.103l.032-.067-.055-.097v-.008l-.035-.133v-.004l-.025-.138-.047-.078-.07-.07v-.008L7.9 7.591l-.004-.075-.13.039-.004-.004-.058-.067-.177-.133h-.004l-.066-.086-.044-.028-.027.043v.008l-.004.004H7.37l-.056.004-.008.004h-.003l-.129-.142c-.027-.012-.055-.04-.095-.079l-.059-.043-.004-.004-.067-.039-.039.032-.004.007-.004-.004h-.004l-.035-.007-.039.02-.004.003-.004.004h-.004l-.054.008a9.523 9.523 0 0 1-.229-.133z"
  }), React.createElement("path", {
    fill: "#215F8B",
    d: "m6.762 8.852-.091-.03-.095-.01-.031.035-.008.067.004.004.027.104.004.077v.023h-.047l.02.095-.074.027-.031.06.039.031.008.004.136.108.004.005h.004v.008l.02.099.063.091a.49.49 0 0 0 .071.079h.004l.004.004v.004l-.004.005v.087a.419.419 0 0 1 .015.149c.035.053.051.088.051.11 0 .017.012.047.031.09v.005a.33.33 0 0 1-.008.143c-.011.027.005.076.048.147l.004.005.003.006-.004.008-.062.139a.214.214 0 0 1 .016.071l-.016.129c-.008.043-.008.065.012.073l.023.017c.035.017.047.036.047.056l-.004.067.02.008.004.004.012-.012c.012-.013.024-.026.028-.048l.008-.012.004-.008c.016-.009.023-.021.035-.035a.165.165 0 0 0-.004-.076l-.008-.02.021-.004c.062-.016.099-.012.11.016l.031.08v.008l.016.129.051.027h.007l.031.027.031-.035.036-.027h.012c.027.008.043.027.052.056l.016.102.004.017.105.229.043.043.004.004v.004l.019.094.008.09.004.009c.027-.04.052-.06.067-.052.016.004.02.012.02.027v.113c.02.004.035 0 .039-.012l.04-.055.043-.045a.147.147 0 0 1 .086-.035h.003l.082.021.024-.012.043-.056-.007-.084c-.027-.047-.039-.086-.031-.113l.012-.071v-.008l.004-.009.075-.043h.004l.054-.037.062-.09.008-.065-.07-.166.156.071V10.922l.06-.051.114-.031h.008l.066.146v.008l-.007.055.007.051c.008.023.023.035.035.035.016 0 .031-.012.047-.031l.004-.008h.004l.095-.031h.005c.051 0 .074.013.086.035l.008.105v.004l.021.004.039.012.06-.004.099-.027.06-.051.002-.043-.027-.031-.104-.035-.008-.004v-.004l-.117-.119.012-.008.06-.051.004-.004.06-.023h.012l.078.017h.004l.005.004v-.03l-.035-.06-.056-.027-.074-.11-.006-.006v-.004l-.035-.129v-.099l.062-.06h.094l.221.021.104-.146v-.01h.008l.082-.044.043-.086.004-.004.099-.083.041-.085v-.004h.004v-.004l.039-.039.048-.078.015-.122v-.012l.004-.004.063-.043.017-.016-.094-.016-.158.009-.004-.005-.059-.047H9.57v-.004l-.031-.048-.008.005-.004.008c-.007.012-.028.017-.052.017l-.022.01c-.009.003-.013.008-.023.003-.008 0-.013-.012-.021-.03a.114.114 0 0 0-.036-.06l-.004-.002v-.003h-.004l-.02-.052H9.33l-.059.039-.003.004h-.004l-.138.027h-.008l-.008-.005-.09-.061-.004-.004v-.004h-.004l-.024-.048-.066.07c-.047.056-.082.073-.106.056l-.091-.047-.063-.009-.008.004-.058-.043-.004-.004-.012-.002.027-.106v-.037l-.035-.017h-.004l-.082-.09.004-.065-.205-.021-.078-.042c-.02-.012-.035-.036-.047-.075l-.012-.028-.015-.06-.029.004-.062.052-.075.091.016.066.023.086v.005h.004l-.004.004v.004c-.008.022-.032.035-.067.035h-.078l-.047-.023-.06.023-.011.004-.008-.004-.008.055-.004.009v.012h-.011l-.099-.033c0 .03.004.056.02.083.012.027.016.048.004.07l-.012.034c-.012.01-.047.014-.098.01h-.066l-.004.11-.087-.031h-.004l-.004-.003-.044-.083-.094-.033-.023-.051-.035.029h-.004l-.059.012h-.016l-.032-.072-.031-.045-.004-.004a.344.344 0 0 1-.055-.092c0-.004-.008-.012-.027-.016l-.016-.004a.11.11 0 0 1-.059-.07l-.016-.068v-.054l-.027-.052-.047.017h-.011z"
  }), React.createElement("path", {
    fill: "#043960",
    d: "M1.465 7.567v.005a.25.25 0 0 1-.075.085c-.023.012-.031.032-.031.055v.012c0 .021-.012.051-.043.099l-.004.02c-.008.012-.023.02-.051.02l-.224-.029v.004l-.016.051v.004l-.004.004c-.058.083-.097.141-.101.18-.004.02.02.091.07.213l.035.082c.016.039.004.086-.031.138l-.07.07H.802l-.024-.13-.032.162.052.078c.004.012.004.02 0 .022l-.009.01c-.016.012-.039.051-.063.117-.023.06-.011.119.036.183h.095c.032.007.079.058.146.147l.004.008c0 .028.012.048.031.063l.208.193v.004l.094.118h.055l.058-.107.008-.008.004-.004.146.035v.012l.02.1.172.199.06.023.004.004.026.016.004.005.13.192.106-.015h.012l.008.008.003.009.091.188.11.066.09.023.043.122h.067l.004.004.142.078v.004l.004.004.102.126.15-.027h.008l.055.023h.004l.094.083.169.013.103-.017c.137-.022.224-.012.255.022.021.031.009.062-.039.103l-.039.039c-.012.021.004.052.055.099l.004.008h-.006l.032.023.012-.012c.098-.186.176-.286.231-.307.059-.02.181.031.373.148l.235.043-.004.008v.008l-.012.11.118.017-.003.149a.428.428 0 0 0 .079.118c.023.016.141.016.35 0l.121-.062.117-.164.139-.004.066-.021.26-.15h.004l.004-.004c.148-.016.235-.021.259 0l.169.144.051.02.008.008.066.027.004.004v-.024l.028-.119c-.012-.035-.012-.062 0-.086.008-.021.027-.031.059-.039.06-.012.114.039.169.148l.008.004h.004l.099-.043c.02-.004.027-.023.027-.044l-.02-.069v-.004c-.008-.031 0-.06.031-.07l.035-.027.087-.095.059-.13c-.051-.082-.066-.141-.051-.182l.012-.109a.26.26 0 0 1-.036-.106.276.276 0 0 0-.047-.094h-.003v-.013l-.012-.141a.225.225 0 0 1 0-.094.278.278 0 0 1-.075-.082l-.06-.079-.004-.004v-.012l-.02-.1-.058-.045v.005l-.113-.091v.009l.016.12v.017l-.06.026-.008.075v.012l-.138.054-.047-.11-.027-.008-.043.044-.027.079-.099.028-.056-.039-.078-.025-.023-.11-.031-.068-.047-.02-.004-.006-.036-.043-.035-.062-.055-.072h-.048l-.078.027-.004.004-.2-.013-.154-.03c-.011-.008-.039-.02-.082-.047l-.118-.039c-.091-.024-.141-.042-.153-.067l-.02-.013-.027-.005-.071-.04-.008-.003c-.012-.017-.023-.03-.031-.044l-.016-.036-.032-.047-.051-.024-.02.012-.02.016-.011.007a.135.135 0 0 1-.055.026c-.031.01-.062-.006-.098-.045l-.074-.079a.383.383 0 0 1-.056-.082l-.02-.03a.352.352 0 0 1-.058-.08c-.012-.036-.016-.067-.004-.098V8.51l.051-.087.027-.09.012-.058-.02-.091-.058-.052.012-.074c0-.055.02-.082.059-.09.012-.004.02-.012.016-.027v-.004l.004-.079v-.095h-.009l-.004-.004-.016-.008v-.004h-.004l-.07-.047h-.004l-.055-.047-.185-.035-.059-.043h-.109c-.016 0-.035.012-.063.027h-.004l-.087.032h-.215c-.032.008-.06.016-.075.031-.024.02-.068.035-.126.055l-.102.023v.004h-.008l-.145-.015-.013-.004.005.004-.005-.004-.051-.004-.086.027-.172.016H2.55l-.004-.004-.087-.031h-.07c-.032-.008-.067-.032-.106-.079l-.004-.007c-.008-.036-.02-.051-.024-.059l-.02-.012-.035-.02-.032.032-.004.008-.125.051h-.012l-.153.015c-.023 0-.067-.012-.126-.027l-.133-.024h-.004l-.079-.043h-.067z"
  }), React.createElement("path", {
    fill: "#509BC2",
    d: "m6.352 12.458-.016.051c.023 0 .055-.017.087-.039l.004-.004h.008l.156-.021.103-.051.039.055.008.005-.047.073.056.056v.016l-.04.166.103.074.184.008-.027.035c-.117.146-.172.231-.168.261l.07.016c.094.008.149.035.169.07.023.047.047.094.067.148l.105.061.066.012.138-.119.071.107v.004l.004.004.023.098.059.012.09.031.024-.008v-.006l-.017-.102-.004-.004-.051-.232v-.008l.031-.16.008.004h.012l.106.008.134-.1.012.008c.07.057.118.101.142.131A.541.541 0 0 0 8.187 13l.004-.004.008-.01.196.053.087-.071.004-.004.004-.004h.004l.004.004.082.016.268-.234.082.024.004.004.004.004.004.004.02.035.021-.023h.004v-.004h.004l.079-.043.059-.057-.016-.121-.013-.017-.076.031c-.024.008-.044.016-.071.016h-.086a.092.092 0 0 1-.057-.026l-.008-.125c-.026-.017-.039-.024-.049-.024l-.021.008-.028.017-.054.01h-.015l-.004-.008-.031-.056-.004-.051.031-.148h.004v-.004l.035-.074-.109-.1-.004-.004-.004-.004v-.113l.004-.004.062-.181-.039-.099-.035-.01-.043.004-.044.067-.055-.039-.056-.032-.043-.108-.016-.078v-.009l-.004-.004.012-.008.051-.07.012-.008h.004l.04-.008.043-.013.204-.008h.004l.027.012.008.004.031.013.056-.023.048-.036.023-.039.004-.021-.004-.086-.045-.008-.082.027c-.023.028-.051.048-.077.048-.027 0-.051-.023-.074-.066h-.004v-.004l-.004-.055v-.008l.004-.052-.043-.106-.083.024-.035.032.012.117-.13-.06.031.071.004.004v.008l-.012.078v.008h-.004l-.074.105-.122.074-.012.073c-.004.013.012.043.031.082l.005.004v.004l.008.103v.013l-.004.003-.048.062-.004.004h-.004l-.035.023h-.017l-.09-.021c-.016 0-.035.009-.055.024l-.039.046-.031.039c-.02.034-.048.043-.091.034-.027-.004-.036-.03-.027-.065v-.028l-.004-.027-.017.02c-.012.017-.023.021-.039.021-.016-.004-.027-.021-.035-.047v-.004l-.008-.091-.02-.088-.039-.039-.004-.005-.081-.188-.004-.004-.024-.057v-.004h-.004v-.004l-.016-.102-.012-.016-.016.012c-.028.033-.048.053-.056.053-.012 0-.031-.016-.062-.039l-.058-.027-.008-.004-.004-.004v-.002l-.004-.009-.004-.077-.012-.061-.031-.079h-.031a.15.15 0 0 1-.009.079.15.15 0 0 1-.047.061.148.148 0 0 1-.035.062c-.024.022-.044.022-.067.008l-.012-.004c-.023-.009-.027-.035-.023-.087v-.02l-.051-.031c-.02-.008-.031-.032-.035-.067l.02-.176-.008-.027-.062.07-.044.03-.012.027a.21.21 0 0 1 .023.082c0 .04-.02.071-.055.083l-.071.027-.02.012-.004.028v.109c.004.034.008.055.02.055a.066.066 0 0 0 .075-.008l.023-.013.075.173v.014c-.027.31-.056.486-.091.533a.079.079 0 0 1-.052.026.123.123 0 0 1-.074-.021c-.102.205-.169.312-.2.326h.004c-.016.004-.023.056-.02.146l.023.021.008.008.008.008-.034.046z"
  }), React.createElement("path", {
    fill: "#215F8B",
    d: "m9.812 10.662-.026-.012-.03.021-.021.035c-.016.034-.031.055-.059.055-.017 0-.035-.012-.047-.022l-.005-.004-.004-.005-.012-.039v-.004l-.005-.053-.022-.004-.004.004-.012.04v.056l-.005.004-.004.004-.046.062-.006.009h-.009L9.4 10.8h-.007V10.809l-.031.043.012.026h.004l-.028.043h-.086v-.017l-.008-.008-.013-.008-.017.027-.004.013h-.056l-.004-.004-.036-.028-.004-.008v-.004h-.004v-.008l-.063-.012-.047.02-.026.02.077.092.104.031.004.004.005.005.051.047-.021.078v.012h-.005l-.066.056v.004h-.005l-.11.03h-.004l-.062.008H8.941l-.043-.017-.023-.004-.023.04h-.004v.004l-.053.036h-.003l-.071.031h-.004l-.082-.027-.181.008-.039.012-.004.004h-.036l-.043.061.008.066.04.09.043.022h.004v.005l.015.012.028-.041.004-.004.004-.004h.004l.059-.008h.008v.004l.06.017.059.135h-.006v.004l-.023.073-.02.047v.004l-.027.065v.084l.047.047h.004l.062.056.008.004.004.005-.047.108-.012.051.016-.008h.004l.039-.017.071-.039h.004l.079.013h.004l.117.047h.13l.035-.047.005-.004.004-.004.066-.031.062-.056.009-.004.047-.016.05-.038.06-.078.083.03.012.004v.005l.004.004c.013.031.023.047.035.051l.051-.008h.013l.026.008h.004v.005l.066.022h.021l.004-.016.008-.023v-.004l.004-.004.004-.005v-.004l.023-.017.004-.004.044-.035h.004l.004-.004h.008l.039.004c0-.022.012-.047.035-.07.027-.02.047-.031.059-.027l.023-.016h.004v-.004l.02-.02v-.005h.005l.004-.004h.004l.063-.016h.035l.016-.013.013-.022.021-.039-.008-.004a.199.199 0 0 1-.049-.103l-.004-.004h.004v-.005l.016-.087c0-.027.008-.047.028-.066l-.01-.068c-.005-.009-.013-.017-.032-.021l-.126.051.009-.129c.004-.021.043-.057.117-.1l-.035-.137a.12.12 0 0 1 .035-.114l-.008-.022h-.039l-.012.004-.021.055c-.016.021-.031.031-.047.031h-.008l-.039-.027h-.008v-.012l-.012-.027-.004-.039v-.004l-.004.008-.004.014h-.07l-.008-.017-.012-.043v-.059l-.044-.074v-.062l-.016-.029z"
  }), React.createElement("path", {
    fill: "#80C3E2",
    d: "m10.611 11.68.004.004.008.008-.051.08a.11.11 0 0 1-.079.039h-.008l-.04-.023-.039.004-.078.059c-.02.008-.043-.012-.078-.059l-.023.051h-.004l-.004.004-.027.027h-.051l-.053.016-.062.047h-.021l-.022.017c-.021.021-.027.036-.017.052l.027.039-.109-.012-.06.048-.008.02v.005l-.013.03-.004.004-.004.005h-.053l-.07-.027-.022-.004-.056.008c-.022 0-.051-.027-.074-.071l-.047-.021-.039.061H9.43l-.057.044h-.004v.004h-.008l-.043.013-.062.055-.066.027-.048.062h-.158l-.121-.047-.066-.009-.06.033h-.004l-.04.016c-.02.008-.035.021-.047.023l-.008.021v.047l.02.032.096-.032c.02 0 .047.013.082.032l.008.004.004.004.004.133.021.004h.081l.051-.012.008-.008a.27.27 0 0 1 .096-.031l.016-.004.008.011.022.048v.004l.013.129v.013l-.07.075h-.006v.004l-.084.037-.026.031.012.023.17.016.004.004.004.003.065.039.147-.004v.021l.008.075v.008h.005l-.066.066c-.008.086.009.137.043.148l.126.067.1.066.082-.039.008-.004.008-.004.004.004.126.096.021.008.031-.041.008-.008.004-.004H9.901l.073.012.017-.129.094.17.079.004.012.004h.008v.059l.033-.008.129-.174.055.083v-.035l.039-.079.035-.059h.1l.016-.109h.009l.009.004.073.012.009-.039-.027-.062v-.008l.017-.043v-.01l.004-.004h.004v-.004l.205-.108-.01-.105v-.004l.041-.079.008-.016.062-.146.004-.004.052-.051.03-.059v-.008l.027-.049-.023-.06v-.004h-.004v-.062h-.036l-.059.027c-.027.021-.066.012-.118-.021-.021-.016-.021-.055-.008-.113l-.031-.004-.017.021c-.035.039-.062.062-.07.062s-.012 0-.02-.004c-.004-.012-.013-.03-.013-.062 0-.035 0-.06.013-.065.008-.013.016-.018.022-.009l.075-.139.02-.052.012-.059-.043-.035c-.012-.012-.016-.039-.008-.078v-.023c0-.012-.008-.027-.023-.039h-.008l-.004.012c-.013.031-.039.047-.082.035a.127.127 0 0 0-.072.002z"
  }), React.createElement("path", {
    fill: "#043960",
    d: "m10.375 9.857-.027-.062-.043-.062-.047-.012h-.004v-.005h-.004l-.039-.021h-.008l-.018.004-.051.009h-.004l-.008-.004-.052-.021v-.002h-.004v-.004l-.038-.039-.042-.044-.039-.024-.043.039-.054.039-.017.12v.004l-.051.085v.008h-.004l-.04.039-.047.091-.004.008c-.035.026-.066.056-.098.078l-.038.069c-.008.021-.039.043-.099.066l-.039.068-.067.091h-.004v.004h-.008l-.314-.02-.034.035v.066l.03.13.067.095.056.031v.004h.004c.031.039.048.066.048.086v.051l-.021.021.012.008h.017l.022-.047h.008l.062.021.004.02h.031l-.008-.023-.004-.008.043-.066c.008-.02.027-.026.056-.02l.07.004.04-.051v-.048l.016-.052v-.004l.004-.004.004-.004.027-.016v-.004h.004l.004.004.059.008v.008l.013.047v.024l.008.035.017.004.02-.026v-.004l.031-.045.004-.008.044-.02h.002l.004-.004.049.016h.005l.008.004.027.057v.055l.039.074v.063l.012.023h.012l.017-.021.004-.008.048.026h.008v.012l.016.068.02.012.004-.008.021-.052v-.004l.004-.009h.008l.028-.016h.004v-.004h.035l-.008-.021v-.009l-.021-.184-.075-.123-.141-.164-.004-.004-.008-.105-.049-.081V10.2l-.004-.005.004-.008.023-.102h.016l.248-.016.133-.07.004-.004c.048-.016.078-.036.087-.057a.16.16 0 0 0 .017-.081z"
  }), React.createElement("path", {
    fill: "#509BC2",
    d: "m9.516 7.468-.025-.004-.039.24.068.078.062.027h.004l.004.004.082.067.113.027h.004l.061.04h.004v.008l.043.062.008.008-.005.009-.039.063c-.007.008-.007.027-.007.058h.004v.075l-.004.004-.037.119-.005.019h-.007l-.011-.004-.052-.011-.066.003-.059.02-.066.055-.016.015.086.043-.008.017c-.004.02-.023.039-.054.052l-.055.003-.091-.036-.083-.047h-.035l-.098.142-.02.047v.082l.039.065v.004l.022.063v.009l.004.09v.013l.004.008-.06.013h-.119l-.055.034-.024.039.004.004.023.118h.005v.047l.027.057.082.055.123-.028.059-.039.008-.005h.054l.031.074a.148.148 0 0 1 .044.064l.026-.004h.017l.004-.009.056-.043.051.09.056.035h.078l.06-.008h.012l.141.021h.004v.004l.059.035v.004l.051.039v.004l.035.041.041.016.062-.008V9.57l-.032-.057h-.006v-.002l-.022-.103.055-.055.004-.003h.004l.047-.008h.052l.016-.02-.031-.045-.113-.073-.031-.043-.004-.005-.002-.004.004-.008.031-.059.008.008.078.02.209-.008.004.004h.004l.059.021.04-.035-.021-.121-.074-.048c-.063-.035-.084-.122-.071-.263l-.062-.031-.008-.004h-.009v-.012l-.012-.104.086-.401a1.125 1.125 0 0 1-.056-.235l-.008-.117.008-.129v-.008l.009-.008.077-.06v-.062a.154.154 0 0 0-.026-.071l-.051-.055h-.009v-.011l-.008-.094v-.004l-.004-.004.008-.004v-.004l.103-.131V7.06l-.031-.059v-.004l-.004-.008.052-.062v-.004h.004l.056-.043-.009-.052h-.026l-.046-.008-.023.095-.012-.004-.102-.04-.062-.012.023.099-.087.027-.127.067-.039.051v.004h-.004l-.067.059-.011.095v.008l-.036.132H9.9l-.015.063v.004l-.004.004-.043.06h-.005v.004l-.004.003h-.004l-.095.012v.004l-.003-.004-.141-.047-.004-.004-.066-.032z"
  }), React.createElement("path", {
    fill: "#80C3E2",
    d: "m11.35 6.411.016-.02-.027-.062-.027-.031-.03.051v.004l-.052.059-.004.004h-.008l-.096.027h-.008l-.09-.017-.051.017-.013.043-.004.008-.043.027-.008.004h-.008l-.079-.008-.004.008v.079l-.004.004-.043.055v.004h-.004l-.074.074h-.004l-.004.004-.078.016-.051.056.013.067V6.9l-.013.003-.06.055-.03.039.022.051v.087l-.044.062v.004l-.059.068.008.078.052.047v.004c.024.039.036.07.036.099v.086h-.006l-.004.004-.078.059-.008.117.008.118c0 .04.017.114.056.224v.012l-.085.402.008.077.06.028.095-.095h.004l.303-.118.079-.07.008-.008.004.004h.008l.171.016a.6.6 0 0 0 .15-.051v-.083l.004-.004h.004l.047-.043-.012-.052v-.015l.004-.004c.016-.016.016-.031.004-.043-.012-.023-.008-.055.012-.09l.021-.027-.004-.056-.06-.071c-.026-.02-.03-.047-.016-.074a.186.186 0 0 1 .039-.066l.016-.066.043-.095.013-.044.062-.117-.043-.074-.121-.075h-.008v-.01l-.024-.063v-.012l.009-.105v-.004l.027-.078c-.004-.027 0-.047.012-.063.008-.008.02-.016.031-.016l.074-.012.02-.043.02-.13-.016-.047-.066-.016h-.004l-.078-.039-.004-.004v-.007l-.004-.004-.004-.095v-.02l.102-.024z"
  }), React.createElement("path", {
    fill: "#80C3E2",
    d: "m11.557 10.596.004-.004h-.008v-.008l-.03-.061-.005-.004v-.007l.009-.094c0-.013-.013-.022-.035-.039h-.024l-.039.047h-.004l-.098.047-.016-.065V10.4l.008-.031-.008-.039-.012-.004-.017.031h-.004v.004l-.122.104-.004.008h-.02l-.035-.016-.004-.004-.039-.035-.062-.022-.004-.004-.039-.027-.13-.027h-.004l-.088-.044v.004l-.065-.03-.086-.009-.03.004.026.146h-.013l-.086.009H10.42l-.047-.031-.078.035-.07.094-.062.171.02.184.029.105c.004.012.004.016 0 .021l-.012.002c-.021.012-.028.04-.024.079l.041.16-.014.004c-.07.041-.107.072-.111.088l-.008.056.067-.028.004-.004h.004c.048 0 .075.018.079.057l.012.086-.004.012-.008.008c-.012.012-.02.023-.02.039l-.013.092c.004.03.017.055.031.066l.082.098.073-.059.061-.008h.004l.004.008.039.012c.012 0 .023-.004.036-.016l.035-.053-.009-.03a.077.077 0 0 1 .035-.027h.095c.016.009.026.005.026-.004.013-.028.023-.04.035-.048.012 0 .031.004.045.016.026.024.047.045.047.071l-.008.071.016.012c.022.02.039.039.039.055l-.017.07c-.012.039-.022.066-.038.075v-.005l-.061.127.021.008.094.004.021.008-.008.016a.177.177 0 0 0-.013.086c.031.021.052.031.062.021l.055-.022.027-.012h.051l.053-.056v-.065a.063.063 0 0 1 .008-.053c.018-.014.049-.014.097.013l.095.061c.03.023.055.031.069.031v-.004c.008-.017 0-.047-.021-.088l-.051-.078v-.008h.004l.004-.008c.051-.07.105-.095.17-.07l.146.065.06-.039h.004v-.008l-.008-.008.004-.004.004-.009c.047-.078.062-.137.047-.168-.012-.027-.031-.039-.047-.039h-.013l-.007-.041h.008c.027-.014.043-.024.047-.041l-.012-.02-.062-.059v-.002l-.03-.086c-.013-.067-.021-.127-.013-.183v-.038l-.039.034-.035.039-.012-.164v-.008h.004c.086-.126.146-.201.164-.222l-.039-.116c-.012-.06-.02-.095-.02-.11l-.07-.031-.037-.009z"
  }), React.createElement("path", {
    fill: "#509BC2",
    d: "m10.19 9.138-.005.015.021.023.102.071v.004h.004l.062.071-.007.008-.039.047-.004.004-.004.008h-.066l-.039.004-.027.027.012.035v.004l.004.039.035.052v.114l.03.012.056.016h.004l.004.004.005.004.051.07v.004l.026.07V9.897a.184.184 0 0 1-.021.065.251.251 0 0 1-.108.075l-.134.078h-.004l-.244.017-.016.06.043.078v.008l.012.104.133.156h.004v.004l.057.091.004-.012v-.005l.043-.121.004-.004.078-.103.004-.004.099-.047h.008l.062.039.084-.009-.027-.139.016-.004.075-.008.078.004h.009v.004l.156.071.135.028h.008l.043.031.062.022v.004l.039.035.022.008.045-.039v-.004l.066-.051.035-.067.062.035v.008l.016.053v.012l-.008.031.004.009.039-.021.055-.055h.053v.004h.004l.034.023c.023.022.032.043.023.062l-.005.088.024.043.009.005c.094-.103.155-.152.194-.152h.106l.023-.051.082-.04h.004l.103-.008.106-.055v-.003h.066l-.012-.032.004-.008.016-.017-.146-.311v-.006l-.004-.004.063-.086-.02-.02-.105-.02h-.012v-.008l-.066-.069.003-.017-.004.004-.004.005-.059-.04c-.028.035-.057.06-.088.066-.027.012-.07-.02-.129-.091l-.031-.038c-.004-.009-.031 0-.074.016-.067.022-.11.027-.13.016-.021-.02-.028-.061-.021-.11.005-.043 0-.066-.008-.078l-.51-.027a.342.342 0 0 1-.106-.059l-.078-.021a.559.559 0 0 1-.168-.162l-.052.043-.075-.024-.213.004-.06-.018z"
  }), React.createElement("path", {
    fill: "#EAECEA",
    d: "M12.756 12.566c.035-.004.055-.02.062-.039v-.004l.004-.012h.016l.071-.004v-.051a.1.1 0 0 1-.06-.023l-.117-.105v-.004l-.051-.149-.07-.069a1.647 1.647 0 0 0-.201 0l-.016.004.004.047v.02h-.012l-.062.027-.012-.008c-.051-.051-.084-.07-.104-.06-.138.066-.216.099-.238.082-.017.004-.035.021-.063.047l-.013.017-.016-.017c-.039-.034-.06-.065-.06-.09 0-.017.028-.047.075-.098a.484.484 0 0 0 .082-.106l-.012-.021c-.016-.008-.047.01-.086.041-.039.027-.063.039-.08.035-.008 0-.016-.013-.02-.031l-.004-.008-.035-.063-.074.048-.008.008-.004-.008h-.002a.962.962 0 0 0-.157-.07c-.036-.013-.071.004-.106.047l.035.06c.023.06.035.099.023.126a.034.034 0 0 1-.031.023c-.023.008-.059 0-.102-.035-.035-.023-.062-.043-.086-.055l-.049-.021v.004l.004.01v.086l-.062.069v.065l.027.072.005.004-.044.066-.027.062v.004l-.059.059-.098.225.004.121-.004.004-.213.122-.012.022.026.063v.008l-.02.082-.086-.012-.02.104h-.11l-.022.039-.033.067-.02.246.023.053.004.008v.051l.048.061.004.008v.047l.126-.008.008-.013v-.004h.004v-.004l.035-.047-.078-.071-.008-.008-.043-.036-.004-.004-.005-.004v-.076h.067l.008-.026-.027-.078h.152l.271-.131.035-.06.008-.021.056.023h.004l.004.012.023.028.027-.005-.008-.059h.091l.086.016.035-.059.004-.004v-.004l.008-.005.095-.026.017-.139.099.088.039.008.02-.023-.008-.298v-.025l.066.012h.004l.008.004.004.005.105.192.135-.017.023-.008.02-.048-.039-.031-.012-.013.09-.031.008-.004.004-.004.035.039.031-.017v-.06l.02-.004h.067a.151.151 0 0 1 .11.062l.008.016.027-.094c.016-.023.047-.027.094-.008l.008.004v.004l.004.004a.03.03 0 0 0 .016.008c.021-.008.092-.055.205-.146 0-.056.031-.086.082-.103z"
  }), React.createElement("path", {
    fill: "#80C3E2",
    d: "m12.771 10.266-.004-.004-.086-.074-.047.022c-.033.071-.076.114-.131.135-.017.009-.035.004-.048-.008-.016-.021-.008-.063.021-.131l-.129.083-.004.008H12.225l-.103.052v.009l-.108.004-.06.031-.026.055-.009.008h-.131c-.022 0-.073.039-.155.121.039.017.059.031.065.044l.004.022v-.004l.06.221.004.012v.016h-.004l-.008.004h-.005l-.155.217.008.056c.022-.021.043-.023.059-.017.02.008.027.039.02.086a.46.46 0 0 0 .039.236l.056.059c.02.021.026.039.022.06l-.027.04.035.047c.021.04.004.105-.043.2l.051.087.009.02.032-.02c.051-.048.095-.061.13-.048.022.008.034.026.039.048.004.027-.027.074-.099.146l-.056.069.026.043c.041-.034.072-.047.092-.039.023 0 .09-.022.204-.081.034-.021.083 0 .142.059l.023-.012-.004-.048-.012-.009c-.009-.012 0-.022.012-.035l-.021-.075a.065.065 0 0 1 0-.039.116.116 0 0 1 .043-.027l.035-.031-.021-.047v-.004h.004v-.004c.017-.023.017-.043.013-.055-.017-.027-.004-.047.026-.076l.043-.039-.008-.008-.012-.012.051-.023v-.062c0-.023.021-.055.075-.094l.024-.02-.061-.066c-.02-.028-.012-.062.023-.1v-.011l.122-.102.004-.027c-.022-.008-.031-.051-.021-.116.017-.107.062-.158.146-.171h.008l.052.027h.055l.053-.062.004-.004.062-.039-.009-.056v-.012l.009-.009.016-.008.02-.023.004-.004-.039-.066a.866.866 0 0 1-.098-.152c-.021-.035-.018-.074.012-.119l-.07-.043-.125-.011z"
  }), React.createElement("path", {
    fill: "#215F8B",
    d: "m13.094 10.792-.008.004-.066.047-.059.065h-.004v.009h-.087l-.048-.027c-.059.017-.09.056-.102.132l-.004.065.047-.043-.031.129v.008l-.131.114c-.02.023-.026.043-.02.055l.024.028c.026.022.043.043.038.06a.04.04 0 0 1-.012.03l-.082.07a.312.312 0 0 1 0 .087v.012l-.004.004-.031.012c0 .021-.01.031-.028.052l-.043.044v.004c.008.02.008.043-.009.078.021.039.021.066 0 .078l-.038.039-.009.004-.02.009v.008l.027.095h.008a.982.982 0 0 1 .217 0h.008v.004l.086.086v.004h.004l.051.146.106.1.043.016.005-.123.099.1.016-.017.07-.146.012-.082.013.004h.008l.074.004-.004-.06v-.02h.012l.1.004c.051-.052.074-.095.074-.132l-.016-.141.086.027.022-.039-.038-.039-.013-.016.078-.079.004.008h.009l.048.026v-.012l-.032-.07.013-.012.021-.013-.008-.026-.04-.074.008-.004.008-.008.107-.06.004-.043c-.091-.048-.139-.087-.131-.106.004-.017.012-.021.031-.021l.119.021.004-.07v-.008l.059-.06.016-.043a.142.142 0 0 1-.055-.039l-.004-.008v-.008l.004-.021-.004-.009-.008-.004-.004.004c-.008.017-.027.028-.057.028a.145.145 0 0 1-.105-.049v-.004h-.004l-.031-.055-.008.008a.111.111 0 0 1-.047.066c-.051.023-.099.031-.146.013a.106.106 0 0 1-.062-.071l-.012-.078c-.013-.074-.027-.117-.052-.129a.08.08 0 0 0-.065-.017l.004.066-.005.009z"
  }), React.createElement("path", {
    fill: "#215F8B",
    d: "M13.715 9.669a.398.398 0 0 1-.105.039.458.458 0 0 1-.118-.027l-.09-.012c-.027.012-.06.051-.103.117l.06.126-.099.055h-.004l-.08-.023c.032.06.041.095.028.109l-.009.031a.291.291 0 0 1-.051.09l-.137.122.034.021-.022.021c-.031.026-.039.06-.023.082l.094.146h.004v.004l.043.078v.004l.004.004-.004.009v.013l-.008.008c.021 0 .035.008.055.021.033.02.057.073.067.155l.017.08c.008.02.016.03.035.039.031.016.07.012.105-.013.02-.012.031-.022.027-.035l-.004-.004v-.009l.065-.047.009.008.051.087c.021.017.039.022.07.022l.021-.004-.018-.047.075.031h.025l.004.008.07.057.02-.032-.004-.134.004-.004.047-.06c.004-.008 0-.022-.02-.043l-.012-.012.008-.009.004-.008.012-.004.1-.162.008.004.021.004.008.006v.008l-.008.062h.008l.109-.1-.008-.051h-.02l-.039.004.066-.18-.059-.01h-.008v-.008l-.021-.023c-.012-.022-.012-.043.005-.062l.094-.004h.06c0-.02-.013-.055-.047-.113l-.082-.026.086-.082v-.021l-.043.01h-.017v-.006l-.004-.004-.004-.008c-.013-.039-.035-.07-.07-.083l-.157.004-.066.079v.004l-.02-.004-.248-.079.239-.062c.017 0 .056-.039.121-.117l-.082-.059-.069.019z"
  }), React.createElement("path", {
    fill: "#80C3E2",
    d: "M12.779 8.984h-.004v-.002c-.043-.15-.082-.232-.109-.244l-.138-.047c-.079-.023-.134-.039-.157-.056a.528.528 0 0 1-.148-.17H12.2l.004.004a.515.515 0 0 0 .105.166l.004.004.005.009-.063.112c-.023.043-.048.062-.07.056a.461.461 0 0 1-.1-.109l-.066-.02c0 .02.013.059.039.121v.014l-.012.045-.07.031-.022.008c-.012.012-.012.031-.008.056.008.06.004.094-.009.108-.008.009-.012.009-.021.009h-.003l-.079-.015c.005.016.017.03.035.043a.53.53 0 0 1 .103.146l.004.012.035-.008a.156.156 0 0 1 .121.026l.045.053.003.004v.003h-.004l-.006.102c.014.016.021.035.014.051-.008.02-.024.031-.053.035-.031 0-.047.021-.055.06v.004l-.031.067.047.047.104.02h.008l.051.055-.062.095.146.313.004.008-.022.027.008.024h.004l.267-.169-.043.078a.457.457 0 0 0-.062.146.187.187 0 0 0 .109-.118l.005-.008h.005l.074-.039.004-.008.104.094.118.004.004.004.057.037.145-.127a.246.246 0 0 0 .039-.074l.016-.03c.004-.017-.016-.056-.055-.122l-.035-.053.174.061.051-.027-.051-.109-.005-.004.087-.113-.039-.059c-.035-.039-.06-.06-.074-.06l-.008.005-.045.043-.008-.005h-.008l-.07-.022-.02-.063a.136.136 0 0 1-.078-.047l-.044-.026c-.035-.017-.056-.035-.056-.056-.008-.022 0-.051.023-.086.044-.063.066-.115.066-.153v-.054l.027.004.09.004a.358.358 0 0 0 .035-.116l-.027-.004a.655.655 0 0 1-.145.082c-.044.012-.099-.013-.178-.066v-.007l-.003-.004z"
  }), React.createElement("path", {
    fill: "#666766",
    d: "m12.352 6.353-.012-.008c-.021 0-.039.02-.06.062l-.013-.008-.002.004.004.004-.036.036-.017.008-.043.023-.005.027c.005.044-.008.075-.026.087l-.017.047c-.004.012-.008.043-.004.086l.022.118c.009.016.029.035.068.052l.09.023a.178.178 0 0 0 .09-.035l-.021-.044v-.011l.009-.035v-.005l.043-.078h.073l.021-.004a.483.483 0 0 0-.074-.121l-.027-.039a.3.3 0 0 1-.035-.115c-.009-.035-.021-.059-.028-.074z"
  }), React.createElement("path", {
    fill: "#023057",
    d: "m11.994 6.204-.008.012-.012-.004-.051-.008-.005.023v.012h-.013l-.082.031-.004.012c-.013.027 0 .051.028.082l.008.008-.008.012a.373.373 0 0 1-.1.106c-.016.012-.02.023-.02.035l.027.036.043.016.035.004c.047 0 .078.004.092.023l.039.027c.026.012.051.02.069.02.017 0 .035-.012.051-.043l.031-.035.022-.075-.02-.087.031.008.052.004.022-.016.009-.02-.039-.113.012-.039c.013-.023.027-.031.043-.035h.005l-.009-.028-.092.004v-.004l-.082-.059a.122.122 0 0 0-.102-.02l-.012.009c-.008.016 0 .031.023.039.021.015.029.035.017.063z"
  }), React.createElement("path", {
    fill: "#509BC2",
    d: "m13.459 5.206-.047.062c-.008.012-.012.035-.004.074v.023h-.098l-.067-.02-.052.079-.008.01-.062.039-.055.06-.008.012-.098.113v.004h-.004l-.075.039-.06-.039v-.005l-.056-.059-.034-.02.026.16.023.087-.059.056-.08.122v.051l-.004.004h-.004l-.021.031.017.028h.03l.113.031h.008v.004h.004l.022.023.031.017h.008v.004c.014.016.021.031.021.047l.012.035.123.035.034-.008.035-.047.094-.182h.005v-.003l.043-.059.004-.004.074-.035.053-.004c.02-.031.035-.047.055-.047.012 0 .031.008.062.023l.008.004v.004l.065.102v.004h.004v.008l.009.075-.005.083-.02.07v.008h-.001l-.051.062-.022.051.004.087h.008l.027-.012.03-.027.009-.008.004-.008.04.035v.067h-.004l-.036.016-.013.016v.035l-.002.005-.024.043h-.004l-.008.004-.031.004-.031.008-.023.043.005.008.129-.016.024-.02.043-.113.289-.299h.01l.062-.031.004-.004v.004h.052l.051-.012.056-.023.039-.044.062-.173v-.004l.244-.256v-.004l-.016-.136a.074.074 0 0 1-.035-.023l-.008-.008v.004l-.039.003a.107.107 0 0 1-.048-.035l-.013-.023v-.004l-.002-.004V5.3a.21.21 0 0 1-.076-.051l-.051-.055-.047-.067c-.008-.016-.008-.039-.004-.075l.004-.02-.028-.035-.004.031-.035.067h-.012a.19.19 0 0 1-.082-.016c-.023-.008-.035-.028-.035-.052v-.014h-.021l-.075.02-.055-.055-.02-.004-.021.021.022.039.009.012-.039.083h-.005v.004h-.004l-.069.079-.004.004h-.009l-.109.011-.073-.021z"
  }), React.createElement("path", {
    fill: "#043960",
    d: "m13.545 4.003-.016-.082-.039.023h-.004l-.094.035-.004-.008-.016-.003v.043l-.004.004-.047.071h-.004v.004h-.004l-.071.06h-.008v.008l-.011-.008c-.047-.02-.078-.044-.086-.063-.008-.008-.013-.008-.021-.012l-.051.008-.03.03.082.071.066.027.004.004h.004l.004.008v.004l.013.078h.005v.122l.016.071.047.109.056.051.043-.031.031-.039v-.003h.004l.056-.066.047.043v.008l.047.09.06.023.032.095v.008l-.004.087v.004h-.004l-.024.078.044.039.047-.023.047-.047.012.008.039.012.047.043.053-.012c.039-.012.059 0 .07.027v.035l.008.004.056.016.022-.051v-.02c0-.016.005-.031.017-.035l.031.004c.043.02.062.047.062.078l-.007.027v.048l.043.063.053.055c.016.02.035.027.055.035h.008c.014.008.021.027.021.07v.178c.008.016.02.027.031.031h.008c.022-.012.039-.008.059.012l.012.008c.02.004.035.02.039.051l.008.098.092-.184c.026-.099.059-.158.103-.166.035-.012.09.008.16.047l.256.021.008-.056-.118-.113c-.055-.031-.078-.055-.07-.07l.091.004c.083.027.161-.02.235-.154h.004l.086-.082.013-.181v-.02H15.386l.066-.016h.012l.008.004v.004l.138.146.04-.016.008-.023-.075-.071-.012-.008-.015-.013.114-.067-.008-.164-.048.008h-.004l-.062-.031a.367.367 0 0 1-.102-.048c-.023-.012-.039-.023-.039-.039v.004c0 .016-.004.023-.012.027-.012.008-.027.012-.057.012h-.003l-.006-.004h-.004l-.055-.039-.047.039c-.023.021-.039.036-.039.052l.022.051c.013.016.013.023.009.035-.009.012-.027.023-.056.027l-.022.012c-.027.008-.052.004-.066-.016l-.008-.012-.103-.106c-.048-.016-.075-.036-.087-.06-.008-.012-.012-.023-.008-.031a.168.168 0 0 0-.02-.071l-.021.012-.004.008c0 .012.004.024.017.04l.004.008.004.004-.004.008-.056.091-.09-.02-.019-.012v-.013a.066.066 0 0 0 0-.055l-.013-.031-.073-.056-.005-.004c-.009.012-.017.012-.024.016l-.069-.008c-.022-.004-.039-.008-.047-.023-.004-.008-.004-.023.004-.043l.004-.012-.03-.055-.139.008c.004.02 0 .031-.008.047-.004.012-.02.016-.031.016-.021.008-.044 0-.062-.02v-.004h-.004c-.031-.035-.043-.062-.043-.086l-.027-.04-.039.028c-.035.02-.059.02-.07.004l-.017-.004-.039.004-.106.035a.1.1 0 0 1-.059.02h-.012a.106.106 0 0 1-.078-.027l-.063-.051-.081-.123z"
  }), React.createElement("path", {
    fill: "#509BC2",
    d: "m15.989 3.265-.059-.385.004-.008h.004c.027-.043.044-.078.035-.105l-.016-.024c-.044-.027-.062-.09-.052-.196h-.035c-.026-.004-.06.008-.09.027-.031.023-.052.051-.056.07-.016.048-.066.079-.153.107l-.021.121v.004l-.003.004-.043.078-.004.008h-.008l-.389.071h-.015v-.008l-.115-.122.035-.035-.043-.059-.056-.039-.004-.004h-.004v-.007l-.021-.106-.098.007-.008-.008-.086-.052-.311-.055-.261-.012-.006.008c-.013 0-.021-.004-.022-.012l-.15-.338a2.669 2.669 0 0 0-.203-.262 3.181 3.181 0 0 0-.205-.239l-.219-.216-.036-.02L13 1.454h-.004l-.008-.008a.308.308 0 0 0-.126-.051c-.052-.02-.169.02-.354.117l-.008.004.008.055h.004v.004h-.004v.008l-.031.063v.004h-.004l-.004.043c0 .036.008.075.021.106l.028.02.059-.004.053.012.02-.016c0-.035.012-.062.027-.07h.039l.137.039.031.004-.044.074v.09c0 .021.035.067.105.135.044.031.07.047.095.051l.021-.004.02-.008.066-.067.051-.031V2.02l.107-.016.03-.067.095-.055.082.047v.004l.008.004.078.135.031.09v.011l-.016.109.031.075v.012l-.023.087v.078a.8.8 0 0 1 .036.13l-.008.066v.004l-.04.056v.004l-.039.047-.004.086.023.091.004.004-.003.004-.024.137-.021.02c-.016.012-.034.012-.059 0h-.009l-.033-.039-.039.012-.051.054-.055.161v.004l-.006.004-.055.047h-.008l-.032.004-.062.091.03.059.009.008.078.098v.036l.088.012.016.079v.004l.012.094.023.02.078-.023.073-.043.013-.008.027.133.035.052.008.004.028.055.06.048c.008.012.026.012.047.012l.02.004.035-.016a.306.306 0 0 1 .087-.028l.022-.012.056-.004c.021 0 .028.004.04.016l.079-.051h.008l.008.004.004-.004.008.008c.031.035.047.067.047.083l.035.059.028.008h.008l-.009-.008c-.005-.02-.005-.031 0-.039.008-.012.022-.02.047-.02l.146-.004.004-.007h.008v.008h.008l.043.082-.004.043h-.004l.055.012h.004c-.004-.012-.004-.02.004-.027l.021-.004.131.09a.072.072 0 0 1 .022.048l.004.055.043.008.027-.047c-.012-.023-.02-.048-.016-.063s.008-.027.023-.035l.012-.012c0-.008.004-.012.012-.016l.035.004c.02.012.035.051.043.118v.008l.008.004c.004.016.028.027.062.039h.004l.005.004.126.13.059-.02-.008-.02a.083.083 0 0 1-.02-.051c0-.027.02-.056.059-.083l.066-.06.078.056h.017l.017-.087v-.017l.016-.004.062.008c.012.012.02.023.02.043 0 .017-.012.036-.022.052l.013.008c.039.02.069.035.094.039h.004l.051.028.04-.004-.062-.287a.377.377 0 0 1-.109-.126c-.027-.048-.012-.114.051-.192.035-.039.078-.078.126-.118l.004-.008h.056l.004.008.048.021h.098c.039-.021.074-.079.114-.174.02-.055.02-.169.003-.346z"
  }), React.createElement("path", {
    fill: "#509BC2",
    d: "m13.723 7.174-.008.004c0 .02-.013.031-.031.031l-.154-.016a.853.853 0 0 1-.211-.055l-.217.205.008.086v.008l-.02.004c-.17.023-.261.008-.271-.047l-.02-.243-.197-.012-.082.173-.008-.074c-.004-.06-.017-.095-.027-.103l-.086.043-.04.052-.004.004h-.004l-.078.027c-.088.07-.162.145-.229.224l-.208.282.043.099v.016l-.004.004c-.016.023-.008.06.016.099a.343.343 0 0 1 .049.168v.01l-.17.1v.039l.078.035c.009.004.013.012.013.016v.008c-.004.02.026.047.087.074l.145.039.043-.027.049-.066.039-.113.113.043.016.012v.01c-.02.047-.008.078.027.098l.125.004a.227.227 0 0 0 .104-.043c.016-.02.039-.023.073-.02.043.008.082.023.109.059l.027-.066.008-.012h.004c.02-.012.032-.031.049-.059a.157.157 0 0 1 .062-.075l.056-.031.003-.004.004.004h.004l.031.008.008.004.043-.196v-.005l.062-.012c.062-.043.095-.079.091-.11l-.012-.06c-.017-.039-.017-.066-.009-.078.013-.012.021-.016.031-.016.027 0 .061.008.092.023l.008-.062v-.007l.004-.004.066-.031.008-.035h-.039l-.008-.004.004-.02v-.012l.004-.009H13.413c.027 0 .06-.016.095-.047l.248-.177h.008l.078.035.03-.004-.021-.082V7.28l.005-.004.004-.004.044-.071-.014-.008-.027.008v.004h-.004l-.078.012h-.024v-.004l-.004-.012-.017-.027h-.013z"
  }), React.createElement("path", {
    fill: "#215F8B",
    d: "m14.072 9.511.028-.031v-.003l-.099-.078c-.052-.035-.095-.047-.127-.043l-.043.016v.082a.172.172 0 0 1-.047.082l-.017.017.039.047h.004l.013.031.047.019c.028-.021.048-.027.067-.023l.082.018.006-.031c.004-.055.024-.089.047-.103z"
  }), React.createElement("path", {
    fill: "#80C3E2",
    d: "M13.502 8.648a.449.449 0 0 1-.113-.198c-.113 0-.181-.02-.213-.059-.022-.035-.069-.059-.137-.078l-.019-.003.02-.067-.012-.008-.02-.004c-.048.023-.08.048-.092.079a.226.226 0 0 1-.06.078c-.021.062-.039.094-.06.094-.012.004-.02-.004-.027-.016l-.03-.027a.16.16 0 0 0-.065-.023l-.039.007a.206.206 0 0 1-.127.055l-.148-.008c-.048-.023-.066-.07-.056-.129l-.056-.02-.026.078v.004l-.004.004-.013.016.035.008h.008l.005.004v.004a.758.758 0 0 0 .146.167c.016.008.062.022.146.047l.143.051c.043.02.086.105.133.26.062.043.104.062.13.059a1.16 1.16 0 0 0 .142-.082l.004-.004.003-.006.009.005.069.017h.008v.012l-.004.013a.433.433 0 0 1-.059.163l-.094.005v.004c0 .039-.027.099-.079.174a.093.093 0 0 0-.021.055l.092.062c.022.026.039.034.059.034h.02l.02.065.043.017.022-.023c.013-.012.029-.021.041-.016.039 0 .07.022.109.074l.035.048.002-.007c.023-.016.066-.012.129.01l.104.022.095-.032.039-.02.026-.021-.022-.026c-.008-.017 0-.037.021-.057.022-.02.039-.039.039-.062V9.4c-.009-.022-.004-.039.004-.047.008-.016.035-.022.065-.031.052-.008.114.017.188.078l-.027-.078-.043-.06-.009-.071-.066-.011h-.004v-.003l-.177-.103-.086-.016v-.02l-.004-.09c-.059-.165-.107-.264-.142-.3z"
  }), React.createElement("path", {
    fill: "#80C3E2",
    d: "m12.822 6.232-.031-.016h-.004l-.023-.024-.11-.032h-.027l-.02.008-.045-.083.005-.004.03-.039v-.047l.004-.008.021-.031-.016-.008-.061-.012-.101-.016h-.009l-.059-.059v-.002l-.02-.04-.004-.012.031-.083V5.65l-.031.031-.004.004-.008.012-.008-.012-.012-.004-.059-.047-.008-.008v-.008l-.013-.086-.026-.044-.061.004-.035.063-.004.008-.004.004-.094-.02-.017.086v.086l-.004.004-.05.08v.008l-.008.004h-.004l-.061.004-.06.048-.009.008h-.008l-.004-.004-.109-.036-.016.04v.004l-.047.078a.053.053 0 0 1-.031.027l-.048-.008-.061-.028-.008-.008-.004-.004v-.003l-.013-.095-.021-.07-.012-.021-.025.056-.046.063-.039.09v.008h-.004l-.035.051c0 .016-.012.039-.035.074l.023.091.116.13.039.082V6.4l-.004.008h-.004l-.031.04-.008.008-.078.016.009.062.059.032.086.02.023.078v.008l-.021.134v.004l-.031.059v.013h-.008l-.099.016v.039l-.025.084-.012.098.02.056.121.075.004.004.051.086v.003l.004.004-.004.004-.062.138-.017.039-.038.091-.016.07-.004.008v.004a.108.108 0 0 0-.039.055c-.004.008-.004.016.004.023l.004.004.039.044.021.031.008-.004.004.012v.02l.009.023.034.013.142.031a.36.36 0 0 0 .139-.031.236.236 0 0 1 .138-.017l.009-.027-.049-.106-.006-.009h.004l.225-.311.24-.231h.004l.074-.027.039-.043v-.004a.348.348 0 0 1 .09-.052l-.023-.02-.051-.051v-.003h-.004l-.039-.047-.006-.008v-.008l.021-.023-.052.012-.11-.027c-.044-.02-.07-.044-.079-.071a.514.514 0 0 1-.026-.188c-.017.02-.035.023-.056.023l-.082-.02-.056-.039-.067-.016h-.032a.09.09 0 0 1-.059-.023c-.023-.016-.035-.031-.039-.047-.008-.032 0-.052.027-.071s.059-.052.086-.091c-.027-.035-.039-.07-.027-.105l.004-.004c.004-.02.036-.035.096-.055.004-.02.012-.032.02-.036l.061.004-.01-.008c-.038-.023-.052-.051-.03-.083l.03-.023a.15.15 0 0 1 .121.016l.091.063h.082l.028.023.008.032c0 .02-.012.031-.026.031-.021 0-.028.02-.032.043l.04.094c.023-.035.047-.055.07-.059.012 0 .026.008.039.023a.35.35 0 0 1 .03.09.313.313 0 0 0 .026.099l.031.044a.374.374 0 0 1 .084.137l.152-.02.066-.035.062-.078.028-.075V6.486l.02-.079v-.004l.004-.008h.004l.06-.039.013-.008-.004-.004-.1-.031h-.007V6.31l-.021-.059-.007-.019z"
  }), React.createElement("path", {
    fill: "#80C3E2",
    d: "M10.846 8.446h-.002l-.299.123-.091.087c-.017.133 0 .212.047.234l.087.056h.004v.004l.023.146a.579.579 0 0 0 .152.161l.086.02.013.004v.004c.013.017.04.031.091.048l.235.012c.173 0 .271.013.291.031.021.016.022.055.021.112-.005.039 0 .063.004.067l.086-.021c.066-.023.105-.023.125-.004l.031.039c.047.06.079.084.088.08a.195.195 0 0 0 .077-.071l.009-.013.07.043.043-.035c.012-.055.039-.082.086-.086l.02-.008-.008-.017-.008-.008.004-.005.004-.098c-.031-.047-.069-.062-.112-.055-.044.012-.074.012-.087-.004-.008-.014-.008-.021-.008-.036a.728.728 0 0 0-.09-.119c-.049-.039-.061-.073-.049-.108l.008-.012.11.02-.008-.066c-.005-.04 0-.066.021-.087.008-.017.027-.022.047-.026l.047-.018v-.02c-.035-.074-.047-.129-.03-.152l.022-.02a.27.27 0 0 1 .105.022l.004.004v.009c.043.051.066.081.079.09l.075-.121a.99.99 0 0 1-.115-.167l-.059.041-.008-.008-.156-.041h-.004v-.003c-.067-.031-.107-.066-.111-.102l-.094-.043v-.091l.172-.103a.542.542 0 0 0-.038-.133l-.027-.055-.118.012a.395.395 0 0 1-.156.035l-.123-.027v-.042l-.02-.004-.035-.013-.008-.023v-.004l-.004-.012v-.015l-.008.004-.007.103-.004.035c-.008.02-.017.031-.008.039.02.027.016.059-.005.086l.017.067-.004.004-.008.004-.048.043v.091l-.011.003a.543.543 0 0 1-.182.059l-.171-.012-.076.066h-.004z"
  }), React.createElement("path", {
    fill: "#215F8B",
    d: "M14.258 11.695a.781.781 0 0 0-.275.342c-.051.117-.09.177-.118.191l.028.217v.004l-.021.148c-.008.049 0 .079.012.088l.162.105h.004l.004.012a.28.28 0 0 0 .062.105.14.14 0 0 0 .051.043l.023-.26v-.008l.113-.273.041-.326v-.003l.004-.004.035-.088-.027-.074v-.004h-.004l-.008-.102.004-.005.004-.004.02-.022.012-.027-.126-.055z"
  }), React.createElement("path", {
    fill: "#215F8B",
    d: "m10.387 13.992-.012.021v.005l-.004.008-.16.039.008.021.051.06a.04.04 0 0 0-.012.004l-.078.039-.119.09c-.038.047-.03.135.027.265l.119.012h.004v.005l.117.055.126-.021c.052-.012.11-.06.185-.149h.004l.009-.008.055-.016-.016-.165v-.008l.069-.103v-.004h.004l.057-.044a.189.189 0 0 0-.016-.126c-.018-.031-.037-.043-.057-.043l.008.059-.104-.02-.048.025h-.217z"
  }));
};

module.exports.MapColor = function MapColor(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#676767",
    d: "m13.585 2.172-.027-.086-.071-.122-.059-.032-.059.032-.035.07-.004.008h-.012l-.11.021c-.013.008-.024.012-.032.023l-.023.027-.059.047-.016.008-.051.008a.29.29 0 0 1-.106-.059l-.004-.004c-.079-.079-.118-.134-.118-.166V1.838l.012-.02-.114-.038-.004.039c0 .012-.012.027-.031.039l-.039.016-.016-.004v-.004l-.06-.012.012.043-.103-.066h-.004l-.004-.004a.374.374 0 0 1-.023-.134c0-.039.004-.062.02-.079l.023-.043-.008-.035-.102.016c-.051.004-.086.035-.106.095v.003l-.059.091.059-.004h.004l.005-.004.004.008.047.02h.008l.008.004v.012l.008.082.023.078v.011l-.13.256c-.023.035-.035.13-.043.271v.012l-.052.098.035.039v.008c.005.06 0 .095-.016.103l-.012.004c-.027.017-.117.11-.263.287l-.012.012-.006-.005-.012-.008c-.052-.036-.099-.067-.126-.099-.023-.016-.082-.027-.181-.027l-.003.181-.004.004-.071.342a.831.831 0 0 0-.02.239l.027.036.024-.048h.004l.004-.008.091-.047.251.039.027-.031.035-.062.008-.004.005-.004.098-.02.129-.008c.04.008.087.059.146.137.156.079.243.15.263.213.012.031.012.055 0 .082s-.039.043-.079.047h-.004c-.191-.008-.303-.008-.342.004l-.094.063c-.117.087-.196.13-.24.13l-.078.012-.047.196c-.012.059-.031.099-.066.126a.26.26 0 0 1-.143.062.538.538 0 0 0-.195.074l-.067.142-.004.004h-.008l-.181.075h-.012l-.09-.02a.405.405 0 0 1-.162-.056.209.209 0 0 0-.152-.012.381.381 0 0 0-.067.239c.004.048.017.079.028.087l.027-.004.031-.02.008.126a.116.116 0 0 1-.047.098.36.36 0 0 1-.106.047l-.031.01c-.039.016-.121.122-.243.314v.004h-.004l-.118.071c.02 0 .032.008.027.023-.004.016-.016.02-.047.023l-.334-.007c-.373-.011-.664.091-.872.303l-.004.004-.007.004h-.004l-.138.016-.008.003h-.008l-.04-.095-.14.036a.592.592 0 0 1-.283-.07 1.201 1.201 0 0 1-.283-.173.49.49 0 0 0-.22-.095l-.126-.012-.141.02a1.26 1.26 0 0 1-.299.008 1.937 1.937 0 0 1-.417-.09l-.011.023h.008l.004.004v.004l.004.039.036.075.083.103.004.012-.017.074v.004h-.004l-.047.062.051.052c.02.02.031.035.031.051l.012.075.059.059v.008l.008.051v.039l.035.027.024-.008.004-.012c.012-.031.031-.047.058-.051l.032-.012.208-.02.083-.03.008-.004.012-.008.043.094h.004a.084.084 0 0 1-.012.062l-.114.162.007.028.052.05.051.031h.004c.023.032.043.051.066.059a.166.166 0 0 1 .079.064l.004.012.04.016.012.004h.004l.012.044.004.043.014.061.098.016h.008l.004.004v.004l.004.008.028.054.078.028.056-.028-.009-.031-.051-.047.008-.008v-.007l.043-.082h.095l.004.004.133.047.075-.012.059-.055c.067-.083.11-.119.137-.099l.032-.004c.035 0 .055.004.066.008a.048.048 0 0 1 .009.024c0 .016.016.047.039.091v.008l.012.055v.012l-.016.061v.004l-.004.004-.067.079-.004.004-.142.062-.02.04-.02.113.012.055.036.059.016.013.047.031h.165l.138-.019.02-.02c.02-.024.039-.032.051-.032l.094.016.008-.016c-.008-.028-.008-.051.008-.074l.039-.066v-.131l.07-.204.004-.004v-.004h.004v-.004l.123-.098.008-.008.105.048c.055.039.082.07.082.09l-.008.086-.035.055-.027.078v.087l.027.039.035-.004.008-.004.06.004c.031.016.051.043.066.083l.036.012h.008l.133.063.059.02.083-.012.035-.048.048-.192.004-.106v-.008l.008-.004.004-.004.074-.063.043-.055.004-.004.079-.035.047-.027.06-.023-.032-.118.134.016v.004l.07.027v-.005l.02-.075v-.012l.012.004h.008l.063.017h.031l.06-.067h.004l.004-.004h.004l.078-.016.066-.062.035-.051v-.064c0-.023.012-.039.036-.051h.012l.075.008.031-.02.012-.056.078-.023h.008l.098.012.079-.02.048-.047.031-.062-.06-.062V6.2l-.012-.048-.016-.071v-.004l.036-.062c0-.02.012-.047.043-.078l.043-.086v-.005h.004l.039-.063.059-.118.055.078.004.004v.003l.021.079v.004l.012.079.055.023h.004l.017.008.004-.004.047-.082.027-.079.012.004.012.004.113.039.056-.043.004-.004h.008l.056-.004.039-.067v-.082l.023-.125.008.004h.012l.086.02.039-.071h.012l.079-.008h.012v.004l.008.004.04.056v.004l.004.004v.008l.008.078.039.035.055-.051.012.016c.02.02.027.039.027.062v.07l-.027.071.02.031.039.044.166.023.004.004.008.004.012.012.047-.066h.004l.039-.04-.016-.059-.043-.251.113.055h.008l.051.062.032.031.047-.031.165-.181h.004l.059-.044.067-.094.004-.008.091.023h.043c0-.035.008-.059.012-.074l.066-.078.02-.012.078.027.095-.012.063-.067.031-.06-.02-.031-.055.027-.006-.001-.004-.004-.071-.062-.004-.004.027-.105.008-.079-.02-.066-.056-.021v-.005l-.003-.004-.004-.004-.047-.094-.008-.012-.066.079-.066.043-.016.008-.004-.004-.004-.008-.071-.066v-.005l-.052-.109v-.004l-.023-.079v-.122l-.008-.07-.055-.02h-.004v-.004l-.125-.099.008-.012.059-.062v-.007h.008l.066-.008h.004c.02 0 .039.012.055.031l.056.043.059-.047.044-.06v-.05l-.016-.125-.012-.052-.087-.016v-.05l-.079-.099-.004-.004-.039-.07-.008-.008v-.008l.086-.114v-.004l.004-.004V3.39h.008l.036-.004.043-.035.052-.157h.004V3.19l.062-.07v-.004h.008l.07-.02v.008l.047.039.016.004.028-.122-.028-.087-.004-.004v-.008l.012-.098v-.007l.048-.051.031-.056.004-.047a.41.41 0 0 0-.035-.122v-.097l.02-.083a.236.236 0 0 1-.027-.083l.014-.11z"
  }), React.createElement("path", {
    fill: "#676767",
    d: "M8.034 6.958h-.063L7.951 7l.036.035V7.044l.016.051.004.004v.011l-.008.004-.087.044-.004.004H7.9c-.067-.008-.102-.028-.113-.056l-.024-.047-.118-.023-.031-.149a.083.083 0 0 1-.055-.032l-.004-.008c-.02-.027-.035-.043-.059-.047a.173.173 0 0 1-.083-.071l-.047-.027h-.004l-.063-.063-.015-.055v-.003l.125-.174c.004-.012.008-.02.004-.023l-.023-.055-.067.027h-.004v.004h-.004l-.173.012-.067.015-.023.024-.012.023c-.016.021-.039.032-.075.024l-.004-.003-.059-.044-.004-.098a.174.174 0 0 1-.058-.066l-.016-.087-.039-.047-.044-.036-.02-.012.071-.09.016-.051-.079-.098h-.003v-.004l-.036-.079v-.004L6.683 5.7l-.052-.039v-.004l-.054-.059-.071-.012-.079.024-.011.015-.012.11v.123l-.012.004-.075.027v.004l-.07.004a.859.859 0 0 1-.118.055l-.008.004h-.004l-.134-.032-.055.059c-.011.016-.039.031-.074.039l-.083.066-.043.068v.004l-.004.004a.344.344 0 0 1-.059.075l-.047.058v.004l-.004.004-.027.02a.152.152 0 0 1-.055.012l-.099-.008-.023.035-.035.062.015.064-.008.153.028.047v.004l.012.035h.055l.094.02.122.008.055-.008h.012l.106.04h.004l.055.043.118.043h.004l.079.048.193.176.086.04.035-.017.035-.066-.02-.106c0-.031.023-.051.071-.07l.008-.005.24.142.026-.009.055-.031h.008l.031.004.047-.039.009-.004.012.008.142.098.004.004.09.074a.356.356 0 0 1 .082.083l.043.048.036-.004.039-.075.083.06h.008l.067.082.177.133.051.06.153-.044.008.115.065.065v.004l.055.082v.012l.059.271.059.109-.079.202v.012l-.066.015v.059l-.004.004-.067.11h-.008l-.094.008-.094.079a.16.16 0 0 0 .055.031c.04.012.043.043.023.098v.004l-.066.066h-.005l-.004.008h-.007l-.189-.027-.004.067.02.141.157.066v.008l.059-.02.004-.004.008-.004.004.008h.004l.043.023h.066l.024-.004L7.939 9l-.015-.079V8.91l.004-.004v-.004l.023-.027.008-.008.004-.004.043-.06.004-.004.071-.055h.004v-.003h.004l.086-.012v.023c0 .027.004.047.008.059l.016.035.024.052.079.043.216.021h.02v.02l-.008.07.063.066.047.02.008.004v.004l.004.008v.066l-.02.079.028.02c.03-.005.057-.005.085.015l.09.043.055-.043.059-.063.004-.027.004-.008.008-.004.008-.008v-.008l-.02-.083-.004-.043-.004-.004v-.004l.004-.004v-.004l.031-.051.005-.003.062-.042h.135l.02-.008-.005-.068-.02-.06-.044-.07-.003-.004V8.663l.023-.059.004-.005.106-.153.004-.004h.004l.008-.004h.023l.039.004.091.051.059.017.008-.028-.012-.009v-.012c0-.023.012-.043.036-.062l.07-.051.004-.004V8.34c.039-.012.062-.02.078-.02l.062-.008h.008l.04.008.027-.099v-.066c0-.043 0-.07.012-.078l.028-.051-.035-.047-.046-.031-.099-.028c-.02 0-.055-.021-.113-.071l-.06-.027h-.004l-.004-.005-.07-.086h-.067l-.004-.004h-.004l-.059-.031-.035.047-.008.185.012.07h.027l.004.004.055.016v.008l.027.066h.004V8.1l-.016.122v.012l-.003.004c-.02.012-.036.019-.055.032l-.008.004-.004-.004h-.004l-.027-.008-.063.024h-.004l.004.012.004.004.012.105c0 .016-.008.023-.023.027h-.048a.08.08 0 0 1-.047-.023l-.048-.036-.004-.003h-.004v-.004l-.027-.067a.178.178 0 0 0-.067-.031h-.007l-.056-.04h-.007v-.008l-.016-.067.008-.051h.004V8.1l.023-.027v-.02l-.023-.07-.055-.051v-.008l-.016-.162-.039-.039h-.004l-.004-.004-.032-.074-.141-.016a.124.124 0 0 1-.075-.067h-.063a.197.197 0 0 1-.074-.051l-.008-.008a.272.272 0 0 1-.047-.071l-.004-.004-.012-.062v-.008l.024-.121v-.004l.023-.052v-.008h.004l.15-.063.059-.07.012-.059-.008-.043c-.024-.051-.04-.083-.04-.103l-.031.004-.055-.004c-.012.004-.043.04-.087.091l-.067.063h-.004l-.003.004c-.051.012-.086.02-.106.012l-.13-.047z"
  }), React.createElement("path", {
    fill: "#989898",
    d: "m9.079 6.993-.071.196v.134l-.039.066-.008.047c.008.027-.004.052-.031.067l-.008.004h-.004l-.004-.004-.098-.011-.051.047-.15.023h-.062l.039.028.142.016h.016l.003.004v.004l.035.086.04.027c.012.016.02.039.02.082l.004.107.047.043h.004v.004h.004l.023.079v.043l-.028.039-.008.035.012.04.047.031c.051.02.078.032.09.052l.028.058c.031.016.047.031.055.047l.036.012h.004l-.017-.086c-.004-.02-.004-.039.004-.047a.05.05 0 0 1 .033-.024l.059-.02.004-.004h.004l.004.004.026.008.035-.02v-.007l.012-.099-.023-.047-.032-.015-.039-.004h-.007l-.008-.004-.016-.102.004-.201.008-.008.059-.082.086.047h.052l.039-.256c-.013-.027-.024-.047-.049-.058l-.023-.004v.004h-.012l-.062.011-.004-.008-.004-.003-.043-.055v-.004l-.004-.004v-.099l.016-.055.016-.023c0-.017.004-.032.02-.052l.016-.02.004-.066-.06-.054-.078-.039-.107.09z"
  }), React.createElement("path", {
    fill: "#020202",
    d: "m6.396 5.579.004-.004h.004v-.004l-.126-.358-.079-.063v-.008l-.019-.145-.165-.024h-.012v-.004l-.004-.008v-.003a.454.454 0 0 0-.149-.177.345.345 0 0 0-.122-.068c-.028-.015-.055-.027-.075-.043-.051-.035-.228-.062-.538-.07h-.012l-.035-.055a.324.324 0 0 1-.031-.102c0-.043.051-.185.161-.417l-.055-.172-.06-.275c-.007-.039-.074-.075-.192-.11-.023-.008-.047-.015-.071-.031a.173.173 0 0 1-.09-.1.232.232 0 0 0-.118-.117l-.004-.004-.004-.004-.047-.244-.188.02-.02.052c-.024.083-.047.122-.075.122l-.122.039c-.074.027-.121.058-.145.093a.356.356 0 0 0-.031.126.642.642 0 0 1-.039.154.192.192 0 0 1-.114.109c-.103.04-.276-.027-.515-.195l-.322.412.039.169h.004l.004.008-.008.004v.004a.1.1 0 0 1-.066.044c-.032.007-.063-.005-.099-.029-.031-.023-.122-.043-.267-.051l-.067-.004-.098-.007-.106.02.047.067c.039.05.055.082.051.101l-.043.256.02.137H2.4v.004l-.004.003-.078.256c-.004.023-.012.035-.02.031h-.007v-.003l-.012-.024c-.016-.031-.024-.043-.036-.039-.008.004-.02.02-.023.055a.39.39 0 0 1-.125.192l-.072.055-.035.02h-.004l-.255.004-.099.094h-.015l-.271-.039c-.044.047-.087.063-.13.055-.039-.012-.106.004-.2.039l-.11.13L.9 5.46l-.173.004v-.145h-.11l-.02.062-.083.02H.507l-.004-.004H.499a.463.463 0 0 0-.177-.063c-.035-.004-.079.02-.142.074a.555.555 0 0 0-.137.155c.012.008.02.023.02.047a.27.27 0 0 1 .012.082.109.109 0 0 1-.032.067c-.02.012-.031.047-.043.111l.063.043.086-.091.11.122v.008l.024.216v.004H.279l-.063.298H.201c-.09 0-.149.004-.173.02.004.02.043.052.11.095l.055-.008h.012l.004.004.129.125c.051.043.047.118-.02.229l.02.121.051.012h.2l-.102.094.059.031.079.044.212.09.004.004h.008l.02.322c.004.062.051.109.146.141l.016-.008h.008l.22.031h.016v-.004l.004-.008c.023-.043.04-.074.04-.082v-.008c-.007-.035.009-.066.04-.09s.052-.046.063-.075l.004-.004c.012-.031.051-.039.118-.02h.004l.075.044.247.048.153-.012.11-.048a.182.182 0 0 1 .047-.047c.02-.004.048.004.079.031l.016.008c.016.012.027.036.043.079l.079.059H2.472l.083.035.153-.012.086-.027.224.02.098-.027.114-.047a.305.305 0 0 1 .09-.04h.216l.079-.028a.162.162 0 0 1 .083-.031h.126l.059.044.167.035c.024 0 .047.02.086.055l.071.047.008.008.161.004h.004l.075.039.098.02h.004l.083.01.023-.047-.035-.078-.016-.078v-.004h-.004l.012-.011.055-.075v-.004h.004v-.004l.055-.04-.012-.024-.023-.078c0-.012-.012-.02-.036-.035l-.059-.063-.074-.063-.004-.008-.008-.004.004-.004v-.007l.012-.076v-.054l-.036-.094.091-.02.043-.043h.11l.11-.017h.004l.074.009.086-.031.099-.012.063-.028h.004l.169-.032.028-.027-.008-.032-.032-.054v-.004l-.004-.004v-.004l.008-.059.004-.004v-.082l-.016-.072v-.004l.04-.078c.015-.035.035-.054.058-.054l.102.008a.095.095 0 0 0 .055-.023l.154-.21v-.004l.004-.004.083-.066.008-.008c.031-.008.051-.02.063-.027l.02-.02c.027-.035.051-.051.067-.051l.133.027.114-.055h.008l.065-.007.055-.024v-.091l.016-.113v-.008l.02-.031v-.004z"
  }), React.createElement("path", {
    fill: "#676767",
    d: "m6.529 6.922-.035.028c0 .016.008.051.02.102v.004l.004.004h-.004l-.044.098-.058.023-.013.004h-.003l-.103-.047H6.29v-.004l-.193-.176-.075-.043-.117-.044v-.004h-.004l-.055-.039-.098-.032-.056.004h-.004l-.125-.008h-.004l-.09-.021h-.055l-.043.033c-.024.012-.056.016-.095.024l-.083.015-.07.023-.004.005v.004-.004l-.086.008-.09.035H4.93l-.074-.007-.114.015h-.095l-.039.039h-.004l-.047.012.02.047v.074l-.012.068.067.055h.004l.055.063c.035.027.051.047.051.07l.02.059.027.059c-.004 0-.004.004-.008.004l-.074.055-.052.067.012.059.036.082.004.008v.004l-.008.031a.098.098 0 0 1-.028.044c-.023.02-.062.02-.125 0l-.099-.021h-.008l-.07-.035-.114-.004.004.004-.012.197c-.004.028-.024.039-.051.043-.012.004-.02.02-.016.051v.004h-.004l-.008.051a.218.218 0 0 1 .055.06l.02.095v.035a.19.19 0 0 1-.016.051L4.2 8.43l-.052.099v.02l.008.047.051.067c.016.02.023.031.027.043l.047.066.072.078c.027.028.047.04.055.04l.075-.048c.016-.012.028-.02.047-.02.016 0 .039.012.075.036h.004v.004l.038.048.02.048.016.02.012.008.051.034.028.004a.085.085 0 0 1 .043.031c.008.012.051.027.126.047h.004l.118.043h.008l.083.039.14.036.004.004.185.008.082-.032h.075v.004l.004.004.062.078v.004l.04.063.031.035.043.02.004.004.004.004.035.078v.004h.004v.004l.02.087.055.02h.008l.043.028.059-.013.016-.059v-.003l.004-.004.067-.068.074.02v.008l.035.079.075-.027.008-.075V9.486l.004-.004.051-.027-.012-.109v-.012l.059-.122.059-.024-.024-.11h.059l-.004-.051-.031-.106v-.007l.008-.075v-.012l.008-.004.039-.051.008-.008h.012l.106.02h.004l.086.023.075-.023.043.087.004.004v.062l.012.06c.008.023.024.039.04.042h.008c.035.008.055.023.059.047.004.02.02.047.047.078l.035.052v.004l.024.043.035-.004.066-.059.043.09.086.028h.004l.004.004.044.078.02.012.004-.074v-.016l.172-.004.004-.016c.004-.007.004-.024-.004-.035a.207.207 0 0 1-.02-.072c-.004-.031 0-.055.008-.062.012-.016.02-.016.04-.012l.071.023.008-.051-.13-.059h-.008l-.004-.007V9.02l-.02-.157.004-.099v-.019l.216.027.055-.051c.012-.02.008-.035 0-.039-.055-.02-.083-.043-.083-.066 0-.012.004-.028.023-.036l.09-.091.098-.004.051-.086v-.082l.075-.016a.623.623 0 0 1 .039-.103l.032-.067-.054-.097v-.008l-.035-.134v-.004l-.024-.138-.047-.078-.071-.07v-.008L7.9 7.59l-.004-.075-.13.039-.003-.004-.059-.066-.177-.134h-.004l-.066-.086-.044-.027-.027.043v.008l-.004.004H7.37l-.055.003-.008.004h-.004l-.129-.141c-.028-.012-.055-.04-.095-.079l-.058-.043-.004-.004-.067-.039-.04.031-.004.008-.004-.004h-.004l-.035-.008-.04.02-.003.003-.004.004h-.004l-.055.008-.228-.133z"
  }), React.createElement("path", {
    fill: "#4D4C4C",
    d: "m6.761 8.85-.09-.027-.094-.012-.032.035-.008.068.004.004.027.102.004.078v.023h-.047l.02.095-.075.027-.031.06.039.031.008.004.137.109.004.004h.004v.008l.02.099.063.091a.418.418 0 0 0 .071.078h.004l.003.003v.004l-.003.008v.086a.447.447 0 0 1 .015.15c.036.052.051.087.051.11a.31.31 0 0 0 .031.09v.004a.33.33 0 0 1-.008.143c-.012.027.004.078.047.148l.004.004.004.008-.003.007-.063.138a.21.21 0 0 1 .016.071l-.016.129c-.008.043-.008.066.012.074l.023.016c.036.017.047.036.047.056l-.004.067.02.008.004.004.012-.012a.092.092 0 0 0 .028-.048l.008-.012.004-.008c.016-.008.023-.02.035-.035a.161.161 0 0 0-.004-.075l-.008-.02.02-.004c.063-.016.098-.012.11.016l.031.079v.008l.016.13.051.027h.008l.031.027.031-.035.036-.027h.012c.027.008.043.027.051.055l.016.102.004.016.106.229.043.042.004.004v.004l.02.095.008.09.004.009c.027-.04.051-.06.067-.052.016.004.02.012.02.027v.114c.02.004.035 0 .039-.012l.04-.055.043-.044c.028-.02.055-.035.086-.035h.004l.083.02.024-.012.043-.056-.008-.086c-.027-.047-.039-.086-.031-.113l.012-.071v-.008l.004-.008.075-.043h.004l.055-.036.063-.09.008-.066-.074-.166.157.071V10.92l.059-.051.114-.031h.008l.067.146v.008l-.008.055.008.051c.008.023.023.035.035.035.016 0 .032-.012.047-.031l.004-.008h.004l.094-.031h.004c.051 0 .075.012.086.035l.008.105v.004l.02.004.039.012.059-.004.099-.027.06-.051.004-.043-.028-.031-.103-.035-.008-.004v-.004l-.117-.119.012-.008.059-.051.004-.004.058-.023h.012l.079.016h.004l.004.004v-.031l-.037-.06-.056-.027-.074-.111-.004-.004v-.004l-.035-.13v-.098l.062-.06h.095l.22.021.103-.146v-.008h.008l.083-.043.043-.086.004-.004.098-.083.047-.087v-.003h.004v-.004l.039-.039.048-.078.015-.122V9.62l.004-.004.063-.043.016-.016-.095-.016-.157.009-.004-.005-.059-.047H9.57v-.004l-.031-.047-.008.004-.004.008c-.007.012-.028.016-.051.016l-.024.011c-.008.004-.012.008-.023.004-.008 0-.012-.012-.021-.031a.098.098 0 0 0-.035-.059l-.004-.004v-.003h-.004l-.02-.051H9.33l-.059.039-.003.004h-.004l-.138.027h-.008l-.008-.004-.09-.062-.004-.004v-.004h-.004l-.023-.048-.067.071c-.047.055-.083.07-.106.055l-.09-.047-.063-.008-.008.004-.059-.043-.004-.004-.012-.004.027-.106v-.036l-.035-.016h-.004l-.083-.09L8.49 9l-.205-.019-.078-.044c-.02-.012-.036-.035-.047-.074l-.012-.029-.016-.058-.028.004-.062.051-.075.09.016.067.023.085v.004h.004l-.004.005v.004c-.007.023-.031.035-.067.035h-.078l-.047-.023-.059.023-.012.004-.008-.004-.007.055-.004.008v.012h-.012l-.098-.032a.15.15 0 0 0 .02.083c.012.027.016.048.004.071l-.013.032c-.011.011-.047.015-.098.011H7.46l-.003.11-.087-.032h-.004l-.004-.003-.043-.082-.094-.032-.024-.051-.035.028h-.004l-.059.012h-.016l-.031-.072-.032-.044-.003-.004a.37.37 0 0 1-.056-.093c0-.004-.008-.012-.027-.016l-.016-.004c-.028-.012-.047-.035-.059-.07l-.015-.067v-.055l-.028-.052-.047.016h-.012z"
  }), React.createElement("path", {
    fill: "#262626",
    d: "M1.465 7.566v.005c-.015.035-.043.058-.074.086-.024.011-.032.031-.032.054v.012c0 .02-.012.051-.043.099l-.004.02c-.008.012-.023.02-.051.02l-.224-.029v.004l-.016.051v.004l-.003.004c-.06.083-.099.142-.102.181-.004.02.02.091.071.213l.035.082c.015.039.003.086-.032.137l-.071.071H.802l-.024-.13-.031.162.051.078c.004.012.004.02 0 .023l-.008.008c-.016.012-.04.051-.063.117-.024.06-.012.12.035.182h.094c.032.008.079.059.146.148l.004.008c0 .028.012.048.031.063l.208.192v.004l.095.119h.055l.059-.106.008-.008.004-.004.146.035v.012l.02.099.173.2.059.023.004.004.027.016.004.004.13.193.106-.016h.012l.008.008.004.008.09.188.11.067.09.023.043.122h.067l.004.004.142.078v.004l.004.004.102.126.149-.027h.008l.055.023h.004l.094.083.169.012.103-.016c.137-.023.224-.012.255.023.02.031.008.062-.039.102l-.039.039c-.012.02.004.052.055.099l.004.008h-.007l.032.023.012-.012c.098-.185.177-.286.232-.306.059-.02.181.031.373.148l.236.043-.004.008v.008l-.012.11.118.017-.004.148a.412.412 0 0 0 .079.118c.023.016.141.016.35 0l.122-.063.118-.164.138-.004.067-.02.259-.15h.002l.004-.004c.149-.016.236-.02.259 0l.169.143.051.02.008.008.066.027.004.004v-.024l.028-.118c-.012-.036-.012-.063 0-.087.008-.02.027-.031.059-.039.059-.012.114.039.169.149l.008.004h.004l.099-.043c.02-.004.027-.024.027-.044l-.02-.07v-.004c-.008-.031 0-.059.031-.07l.035-.027.086-.095.059-.13c-.051-.082-.067-.141-.051-.181l.012-.11a.248.248 0 0 1-.036-.105.276.276 0 0 0-.047-.094h-.003v-.012l-.011-.142a.244.244 0 0 1 0-.094.266.266 0 0 1-.075-.082l-.059-.079-.004-.004v-.012l-.02-.099-.059-.046v.004l-.114-.09v.008l.016.121v.016l-.059.027-.008.075v.012l-.137.055-.047-.111-.028-.008-.043.044-.028.079-.098.028-.055-.04-.078-.024-.024-.11-.031-.067-.047-.02-.004-.007-.036-.043-.035-.063-.055-.071h-.047l-.079.028-.004.003-.2-.012-.153-.031c-.012-.008-.04-.02-.083-.048l-.118-.038c-.09-.024-.141-.043-.153-.067l-.02-.012-.027-.007-.071-.039-.008-.004c-.012-.016-.023-.027-.031-.043l-.016-.036-.031-.047-.051-.023-.02.011-.02.016-.011.008a.139.139 0 0 1-.055.027c-.032.008-.063-.008-.099-.047l-.074-.079a.383.383 0 0 1-.055-.082l-.02-.031a.307.307 0 0 1-.059-.078.148.148 0 0 1-.004-.099v-.004l.051-.087.027-.09.012-.059-.02-.091-.058-.051.012-.074c0-.055.02-.082.059-.09.012-.004.02-.012.016-.027v-.004l.004-.079v-.095h-.008l-.004-.004-.016-.008v-.003h-.004L4.113 7.7h-.004l-.055-.047-.184-.035-.059-.043h-.11c-.016 0-.035.012-.063.027h-.004l-.087.031h-.215c-.032.008-.06.016-.075.032a.443.443 0 0 1-.126.054l-.102.024v.004h-.008l-.145-.016-.012-.004.004.004-.004-.004-.051-.004-.086.027-.173.016H2.55l-.004-.004-.087-.031h-.07c-.032-.008-.067-.031-.106-.078l-.004-.008c-.008-.035-.02-.051-.024-.059l-.02-.012-.035-.02-.032.032-.003.008-.126.051h-.012l-.153.016c-.023 0-.067-.012-.126-.027l-.133-.024h-.004l-.079-.044h-.067z"
  }), React.createElement("path", {
    fill: "#989898",
    d: "m6.353 12.457-.016.051c.023 0 .055-.016.086-.039l.004-.004h.008l.157-.02.102-.052.039.056.008.004-.047.074.055.055v.016l-.04.166.102.074.185.008-.027.035c-.118.146-.173.232-.169.26l.071.016c.094.008.149.035.169.07.023.047.047.094.067.149l.106.06.067.012.137-.119.071.107v.004l.004.004.023.098.059.012.09.031.024-.008v-.004l-.016-.102-.004-.004-.051-.232v-.008l.031-.161.008.004h.012l.106.008.134-.099.012.008c.071.056.118.1.142.131A.503.503 0 0 0 8.187 13l.004-.004.008-.009.197.052.086-.071.004-.004.004-.004h.004l.004.004.083.016.267-.234.083.023.004.004.004.004.004.004.02.035.02-.023h.004v-.004h.004l.079-.043.059-.056-.019-.124-.012-.016-.075.031c-.023.009-.043.017-.07.017h-.086c-.027-.004-.043-.012-.055-.027l-.008-.125c-.027-.016-.039-.023-.051-.023l-.02.008-.028.016-.055.012h-.015l-.004-.008-.031-.057-.004-.051.031-.149h.004v-.004l.036-.074-.11-.099-.004-.004-.004-.004v-.114l.004-.004.062-.18-.039-.099-.036-.009-.043.004-.043.067-.055-.039-.055-.032-.043-.109-.016-.078v-.008l-.004-.004.012-.008.051-.071.012-.008h.004l.04-.008.043-.012.205-.008h.004l.027.012.008.004.031.012.055-.023.047-.036.023-.039.004-.02-.004-.086-.043-.008-.083.027c-.023.028-.05.048-.078.048-.027 0-.051-.023-.074-.066h-.004v-.004l-.004-.055v-.008l.004-.052-.043-.106-.083.023-.035.032.012.118-.13-.06.032.071.004.004v.008l-.012.078v.008h-.005l-.075.106-.122.074-.012.071c-.004.012.012.043.031.082l.004.004v.004l.008.103v.012l-.004.004-.047.062-.004.004h-.003l-.035.024h-.016l-.09-.021c-.016 0-.035.009-.055.024l-.04.043-.031.042c-.02.035-.047.043-.09.035-.027-.004-.036-.031-.027-.066v-.028l-.004-.027-.016.02c-.012.016-.023.02-.039.02-.016-.004-.028-.02-.036-.047v-.004l-.008-.092-.02-.087-.039-.039-.004-.004-.083-.188-.004-.004-.024-.056v-.004h-.003v-.004l-.016-.102-.012-.016-.015.013c-.028.031-.047.051-.055.051-.012 0-.031-.016-.063-.039l-.059-.027-.008-.004-.004-.004v-.004l-.004-.008-.004-.078-.012-.06-.031-.079h-.031a.16.16 0 0 1-.008.079.142.142 0 0 1-.047.06.142.142 0 0 1-.035.062c-.024.023-.043.023-.067.008l-.012-.004c-.024-.008-.028-.035-.024-.087v-.02l-.051-.031c-.02-.008-.032-.032-.036-.067l.02-.176-.008-.027-.063.07-.043.031-.012.027a.21.21 0 0 1 .023.082c0 .04-.02.071-.055.083l-.071.027-.02.012-.004.028v.109c.004.035.008.055.02.055a.066.066 0 0 0 .075-.008l.023-.012.075.173v.013c-.027.31-.055.486-.09.533a.08.08 0 0 1-.051.027.135.135 0 0 1-.075-.02c-.102.205-.169.311-.2.326h.004c-.016.004-.023.055-.02.146l.023.021.008.008.008.008-.033.044z"
  }), React.createElement("path", {
    fill: "#676767",
    d: "m9.813 10.661-.027-.012-.031.021-.021.035c-.015.035-.031.055-.058.055-.016 0-.035-.012-.047-.023l-.004-.004-.004-.004-.012-.039v-.004l-.004-.052-.023-.004-.004.004-.012.04v.055l-.004.004-.004.004-.047.062-.009.008h-.007l-.095-.008h-.007v.008l-.032.043.012.027h.004l-.027.043h-.086v-.016l-.008-.008-.012-.008-.016.027-.004.013h-.058l-.004-.004-.036-.028-.004-.008v-.004h-.004v-.008l-.063-.012-.047.02-.027.02.078.091.104.032.004.004.004.004.051.047-.02.078v.012h-.005l-.067.055v.004h-.004l-.11.031h-.004l-.062.009H8.941l-.043-.017-.023-.004-.023.04h-.005v.004l-.051.035h-.004l-.071.032h-.004l-.083-.028-.181.008-.039.012-.004.004h-.035l-.043.06.008.066.04.09.043.023h.004v.004l.016.013.028-.04.004-.004.004-.004h.004l.059-.008h.008v.004l.059.016.059.135h-.005v.004l-.024.074-.02.047v.004l-.027.066v.083l.047.047h.004l.063.056.008.004.003.003-.047.109-.011.051.016-.008h.004l.039-.016.071-.039h.004l.079.012h.004l.118.047h.129l.035-.047.005-.004.004-.004.066-.031.062-.055.008-.004.047-.016.05-.038.06-.079.083.031.012.004v.004l.004.004c.012.032.023.048.035.052l.051-.008h.012l.027.008h.004v.004l.067.023h.02l.004-.016.008-.023v-.004l.004-.004.004-.005v-.004l.023-.016.004-.004.044-.035h.004l.004-.004h.008l.039.004c0-.023.012-.048.035-.071.027-.02.047-.031.059-.027l.023-.016h.004v-.004l.02-.02v-.004h.004l.004-.004h.004l.063-.016h.035l.016-.012.013-.023.02-.039-.008-.004a.206.206 0 0 1-.048-.103l-.004-.004h.004v-.002l.016-.087c0-.027.008-.047.028-.066l-.008-.07c-.005-.008-.013-.016-.032-.02l-.126.051.008-.13c.004-.02.043-.056.118-.099l-.035-.137a.12.12 0 0 1 .035-.114l-.008-.023h-.041l-.012.004-.021.055c-.016.021-.031.032-.047.032h-.008l-.039-.028h-.007v-.012l-.012-.027-.004-.039v-.004l-.004.008-.004.012h-.07l-.008-.016-.012-.044v-.059l-.044-.074v-.062l-.015-.03z"
  }), React.createElement("path", {
    fill: "#CCCBCB",
    d: "m10.611 11.679.004.004.008.008-.051.079a.106.106 0 0 1-.079.039h-.008l-.04-.023-.039.004-.078.059c-.02.008-.043-.012-.078-.059l-.023.051h-.004l-.004.004-.028.027h-.051l-.052.016-.062.047h-.02l-.023.016c-.02.021-.027.036-.016.052l.027.039-.109-.012-.06.048-.008.02v.002l-.012.031-.004.004-.004.004h-.055l-.07-.027-.023-.004-.055.008c-.023 0-.051-.027-.074-.071l-.048-.02-.039.06h-.004l-.056.047h-.004v.004h-.008l-.043.012-.062.055-.066.031-.048.062h-.157l-.122-.047-.067-.009-.059.031h-.004l-.04.016c-.02.008-.035.021-.047.024l-.008.02v.047l.02.032.094-.032a.2.2 0 0 1 .083.032l.008.004.004.004.004.133.02.004h.083l.051-.012.008-.008a.266.266 0 0 1 .095-.031l.014-.004.008.012.023.047v.004l.013.13v.012l-.071.075h-.004v.004l-.083.039-.028.031.012.023.169.016.004.004.005.003.066.039.148-.004v.02l.008.075v.008h.004l-.066.067c-.008.086.008.137.043.148l.126.066.099.067.082-.039.008-.004.008-.004.004.004.126.095.02.008.032-.04.008-.008.004-.004h.008l.074.012.016-.13.094.17.079.004.012.004h.008v.059l.032-.008.129-.174.055.083v-.034l.039-.079.036-.059h.099l.016-.109h.012l.008.004.074.012.008-.039-.027-.063v-.008l.016-.043v-.009l.004-.004h.004v-.004l.205-.109-.009-.105v-.005l.04-.079.008-.016.062-.146.004-.004.051-.051.031-.059v-.008l.027-.048-.023-.06v-.004h-.004v-.062h-.031l-.059.027c-.027.02-.066.012-.118-.02-.02-.016-.02-.055-.008-.113l-.031-.004-.016.02c-.036.039-.063.062-.071.062s-.012 0-.02-.004c-.004-.012-.012-.031-.012-.062 0-.035 0-.059.012-.066.008-.012.016-.017.023-.008l.075-.139.02-.051.012-.059-.043-.035c-.012-.012-.016-.039-.008-.079v-.023c0-.012-.008-.027-.024-.039h-.008l-.004.012c-.012.031-.039.047-.082.035a.134.134 0 0 0-.074.002z"
  }), React.createElement("path", {
    fill: "#4D4C4C",
    d: "m10.375 9.855-.027-.062-.043-.063-.047-.012h-.004v-.003h-.004l-.039-.02h-.008l-.017.004-.051.008h-.004l-.008-.004-.052-.02V9.68h-.004v-.004l-.039-.039-.042-.044-.039-.024-.043.039-.054.04-.017.118v.004l-.051.085v.008h-.004l-.04.04-.047.091-.004.008c-.035.027-.066.055-.098.078l-.039.07c-.008.02-.039.043-.099.066l-.039.067-.067.091h-.003v.004h-.008l-.314-.02-.035.035v.066l.031.13.067.095.055.031v.004h.004c.032.039.048.066.048.086v.051l-.02.02.012.008h.016l.023-.047h.008l.062.02.004.02h.031l-.008-.023-.004-.008.043-.066c.008-.02.027-.027.056-.02l.07.004.04-.051v-.048l.016-.051v-.004l.004-.004.004-.004.027-.016v-.004h.004l.004.004.059.008v.008l.012.047v.024l.008.035.016.004.02-.027v-.004l.031-.044.002-.007.044-.02h.004l.004-.004.051.016h.004l.008.004.028.056v.055l.039.074v.063l.012.023h.012l.016-.02.004-.008.047.027h.008v.012l.016.067.02.012.004-.008.02-.051v-.004l.004-.009h.008l.028-.016h.004v-.004h.035l-.008-.02v-.008l-.02-.184-.075-.123-.141-.164-.006-.001-.008-.106-.048-.083v-.004l-.004-.004.004-.008.024-.102h.016l.247-.016.134-.07.004-.004c.047-.016.078-.036.086-.056a.16.16 0 0 0 .02-.087z"
  }), React.createElement("path", {
    fill: "#989898",
    d: "m9.516 7.467-.025-.004-.039.24.068.079.062.027h.004l.004.004.082.067.114.027h.004l.06.04h.004v.008l.043.062.008.008-.005.009-.039.062c-.007.008-.007.028-.007.059h.004v.075l-.004.004-.037.118-.004.02h-.007l-.012-.004-.052-.012-.066.004-.059.02-.066.054-.016.016.086.043-.008.016c-.004.02-.023.039-.054.051l-.056.004-.09-.035-.083-.048h-.035l-.098.143-.019.046v.082l.039.066v.004l.023.064v.008l.004.091v.012l.004.007-.062.012h-.119l-.055.035-.023.039.004.004.023.118h.004v.047l.027.056.083.054.122-.027.059-.039.008-.004h.055l.031.074c.021.02.036.039.044.062l.027-.004h.016l.004-.008.056-.043.051.09.055.035h.078l.06-.008h.012l.142.02h.004v.004l.059.036v.004l.051.039v.004l.035.04.04.016.063-.008v-.083l-.032-.056h-.004V9.51l-.026-.102.055-.055.005-.004h.004l.047-.008h.051l.016-.02-.031-.044-.114-.074-.029-.043-.004-.004-.004-.004.004-.008.031-.059.008.008.079.02.208-.008.004.004h.004l.059.02.04-.035-.02-.121-.075-.048c-.063-.035-.083-.122-.071-.263l-.062-.031-.008-.004h-.008v-.011l-.012-.103.086-.401a1.1 1.1 0 0 1-.055-.235l-.008-.119.008-.129v-.007l.008-.008.078-.06v-.062a.147.147 0 0 0-.027-.071l-.051-.055h-.008v-.012l-.008-.094v-.004l-.004-.004.008-.004v-.003l.102-.131v-.055L10.414 7v-.003l-.004-.008.052-.062v-.005h.004l.055-.043-.008-.052h-.027l-.045-.007-.023.095-.012-.004-.102-.04-.062-.012.023.099-.087.027-.126.066-.039.051v.004h-.003l-.066.06-.012.094v.008l-.036.133H9.9l-.015.062v.004l-.004.004-.044.06h-.004v.004l-.004.004h-.004l-.095.011v.004l-.003-.004-.141-.047-.004-.003-.066-.033z"
  }), React.createElement("path", {
    fill: "#CCCBCB",
    d: "m11.35 6.411.016-.02-.027-.062-.027-.031-.031.051v.004l-.051.059-.004.004h-.009l-.095.028h-.008l-.09-.017-.051.017-.012.043-.004.008-.043.027-.008.004h-.008l-.079-.008-.004.008v.079l-.004.004-.044.055v.004h-.004l-.074.074h-.004l-.004.004-.077.014-.051.056.012.067v.016l-.012.004-.06.055-.031.039.023.051v.087l-.044.062v.004l-.059.067.008.078.051.047v.004c.024.039.036.07.036.099v.087h-.004l-.003.003-.079.059-.008.117.008.118c0 .04.016.114.055.224v.012l-.086.401.008.078.059.028.095-.095h.004l.303-.118.079-.07.008-.008.004.004h.008l.172.016c.023 0 .075-.02.15-.051v-.083l.004-.004h.004l.047-.043-.014-.051v-.016l.004-.004c.016-.016.016-.031.004-.043-.012-.023-.008-.055.012-.09l.02-.027-.004-.056-.059-.071c-.027-.02-.031-.047-.016-.074a.172.172 0 0 1 .039-.066l.016-.066.043-.095.012-.044.062-.117-.043-.074-.121-.076h-.008v-.008l-.023-.063v-.012l.012-.105v-.005l.027-.078c-.004-.027 0-.047.012-.063.008-.008.02-.016.031-.016l.074-.012.02-.043.02-.13-.017-.046-.066-.016h-.004l-.078-.039-.004-.004v-.008l-.004-.004-.004-.095v-.02l.102-.023z"
  }), React.createElement("path", {
    fill: "#CCCBCB",
    d: "m11.558 10.595.004-.004h-.008v-.008l-.031-.06-.004-.004v-.008l.008-.094c0-.012-.012-.023-.035-.039h-.024l-.039.047h-.004l-.098.047-.016-.066v-.008l.008-.031-.008-.039-.012-.004-.016.031h-.004v.004l-.122.105-.004.008H11.132l-.035-.016-.004-.004-.039-.035-.062-.023-.004-.004-.039-.027-.13-.027h-.004l-.087-.044v.004l-.066-.031-.086-.008-.031.004.027.146h-.012l-.087.008H10.421l-.047-.031-.078.035-.07.094-.063.17.02.184.028.106c.004.012.004.016 0 .02l-.012.004c-.021.012-.028.04-.024.079l.04.16-.012.008c-.071.04-.107.071-.111.087l-.008.056.067-.028.004-.004h.004c.048 0 .075.017.079.056l.012.086-.004.012-.008.008c-.012.012-.02.023-.02.039l-.012.091c.004.031.016.055.031.067l.082.098.074-.059.06-.008h.004l.004.008.039.012c.012 0 .023-.004.036-.016l.035-.052-.008-.031a.08.08 0 0 1 .035-.027h.094c.016.008.027.004.027-.004.012-.028.023-.04.035-.048.012 0 .031.004.044.016.027.024.047.044.047.071l-.008.071.016.012c.023.02.04.039.04.055l-.017.07c-.012.039-.023.066-.039.075v-.005l-.06.127.021.008.095.004.02.008-.008.016c-.012.039-.016.066-.012.086.031.02.051.031.062.02l.055-.023.027-.012h.051l.052-.055v-.066a.064.064 0 0 1 .008-.052c.016-.012.047-.012.095.016l.094.06c.031.023.055.031.07.031v-.004c.008-.016 0-.047-.02-.087l-.051-.079v-.008h.004l.004-.008c.051-.07.105-.094.169-.07l.146.066.059-.039h.004v-.008l-.008-.008.004-.004.004-.008c.047-.078.062-.137.047-.169-.012-.027-.031-.039-.047-.039h-.012l-.008-.039h.008c.027-.013.043-.024.047-.04l-.012-.02-.062-.059v-.007l-.031-.086c-.012-.067-.02-.126-.012-.182v-.039l-.039.035-.036.039-.012-.164v-.008h.004c.087-.126.146-.201.165-.221l-.039-.117c-.012-.059-.02-.095-.02-.11l-.07-.031-.035-.011z"
  }), React.createElement("path", {
    fill: "#989898",
    d: "m10.19 9.137-.004.016.021.023.102.071v.004h.004l.062.071-.008.008-.039.047-.004.004-.004.008h-.066l-.039.004-.028.027.013.035v.004l.004.039.035.052v.114l.031.012.055.016h.004l.004.004.004.004.051.07v.004l.027.07V9.896a.216.216 0 0 1-.02.066.249.249 0 0 1-.109.075l-.134.078h-.004l-.243.016-.016.059.043.079v.008l.012.103.133.156h.004v.004l.056.091.004-.012v-.004l.043-.122.004-.004.079-.102.004-.004.098-.047h.008l.062.039.083-.008-.027-.139.016-.004.075-.008.078.004h.008v.004l.157.071.134.028h.008l.043.031.062.023v.004l.039.035.023.008.044-.039v-.004l.067-.051.035-.067.062.035v.008l.016.052v.012l-.008.031.004.008.039-.02.055-.055h.052v.004h.004l.035.023c.023.023.032.043.023.062l-.004.086.024.043.008.004c.094-.102.156-.152.195-.152h.106l.024-.051.082-.04h.004l.102-.008.106-.055v-.004h.067l-.012-.032.004-.008.016-.016-.146-.311v-.004l-.004-.004.063-.086-.02-.02-.106-.02h-.012v-.007l-.066-.07.004-.016-.004.004-.003.004-.059-.04c-.028.036-.056.06-.087.067-.028.012-.071-.02-.13-.091l-.031-.039c-.004-.008-.031 0-.074.016-.067.023-.11.027-.13.016-.021-.02-.028-.06-.021-.11.004-.043 0-.066-.008-.078l-.51-.027a.355.355 0 0 1-.106-.059l-.079-.02a.57.57 0 0 1-.168-.162l-.051.043-.079-.023-.211.003-.06-.019z"
  }), React.createElement("path", {
    fill: "#E9EBE9",
    d: "M12.756 12.566c.035-.004.055-.02.062-.039v-.004l.004-.012h.016l.071-.004v-.051a.103.103 0 0 1-.06-.023l-.117-.106v-.004l-.051-.149-.07-.07a1.647 1.647 0 0 0-.201 0l-.016.004.004.047v.02h-.012l-.062.027-.012-.008c-.051-.051-.083-.07-.103-.059-.138.066-.216.098-.239.082-.016.004-.035.02-.063.047l-.012.016-.016-.016c-.039-.035-.06-.066-.06-.09 0-.016.028-.047.075-.098a.513.513 0 0 0 .083-.106l-.012-.021c-.016-.008-.047.009-.087.04-.039.027-.063.039-.079.035-.008 0-.016-.012-.02-.031l-.004-.008-.035-.063-.074.048-.008.008-.004-.008h-.004a.971.971 0 0 0-.157-.071c-.036-.012-.071.004-.106.047l.035.06c.023.06.035.099.023.126a.034.034 0 0 1-.031.023c-.023.008-.059 0-.102-.035-.035-.023-.062-.043-.086-.055l-.048-.021v.004l.004.009v.086l-.063.07v.066l.028.071.004.004-.044.067-.027.062v.004l-.059.059-.098.225.004.121-.004.004-.213.122-.012.023.027.063v.008l-.02.082-.086-.012-.02.105h-.11l-.023.039-.032.067-.02.247.023.052.004.008v.051l.048.06.004.008v.047l.126-.008.008-.012v-.004h.004v-.002l.035-.047-.078-.071-.008-.008-.043-.036-.004-.004-.005-.004v-.078h.072l.008-.027-.027-.078h.152l.271-.13.035-.06.008-.02.055.023h.004l.004.012.023.028.028-.005-.008-.059h.091l.086.016.035-.059.004-.004v-.004l.008-.004.094-.027.017-.138.099.087.039.008.02-.023-.012-.299v-.024l.066.012h.004l.008.004.004.004.105.192.135-.016.023-.008.02-.048-.039-.031-.013-.014.09-.031.008-.004.004-.004.035.039.031-.016v-.059l.02-.004h.067a.151.151 0 0 1 .11.062l.008.017.027-.094c.016-.023.047-.027.094-.008l.008.004v.004l.004.004a.03.03 0 0 0 .016.008c.02-.008.091-.055.205-.146 0-.059.031-.09.082-.106z"
  }), React.createElement("path", {
    fill: "#CCCBCB",
    d: "m12.771 10.265-.004-.004-.086-.075-.047.023c-.032.071-.075.115-.131.135a.041.041 0 0 1-.047-.008c-.016-.021-.008-.063.02-.131l-.129.083-.004.008h-.117l-.103.052v.008l-.109.004-.059.031-.027.055-.008.008h-.131c-.023 0-.074.039-.156.121.039.017.059.032.066.044l.004.023v-.004l.059.22.004.012v.016h-.004l-.008.004h-.004l-.156.217.008.055c.023-.02.043-.023.059-.016.02.008.027.039.02.086a.462.462 0 0 0 .039.236l.055.059c.02.02.027.039.023.059l-.027.04.035.047c.02.04.004.106-.043.2l.051.087.008.02.032-.02c.051-.048.095-.06.13-.048a.06.06 0 0 1 .039.048c.004.027-.027.074-.098.146l-.056.07.027.043c.04-.035.071-.047.091-.039.023 0 .09-.023.204-.082.035-.02.083 0 .142.059l.023-.012-.004-.047-.012-.008c-.008-.012 0-.023.012-.035l-.02-.075a.068.068 0 0 1 0-.04.136.136 0 0 1 .043-.027l.035-.031-.02-.047v-.004h.004v-.004c.016-.023.016-.043.012-.055-.016-.027-.004-.047.027-.075l.043-.039-.008-.008-.012-.012.051-.023v-.063c0-.023.021-.055.075-.094l.024-.02-.06-.066c-.02-.028-.012-.063.023-.099v-.009l.122-.102.004-.027c-.023-.008-.031-.051-.02-.117.016-.107.062-.158.145-.17h.008l.052.027h.055l.052-.062.004-.004.062-.039-.008-.055v-.012l.008-.008.016-.008.02-.024.004-.004-.039-.066a.805.805 0 0 1-.098-.153c-.021-.035-.017-.074.012-.118l-.071-.043-.126-.014z"
  }), React.createElement("path", {
    fill: "#676767",
    d: "m13.094 10.791-.008.004-.066.047-.059.066h-.004v.008h-.087l-.048-.027c-.059.016-.09.056-.102.131l-.004.066.047-.043-.031.129v.008l-.13.114c-.02.023-.027.043-.02.055l.024.028c.027.023.043.043.039.059a.043.043 0 0 1-.012.031l-.083.07a.31.31 0 0 1 0 .087v.012l-.004.004-.031.012c0 .02-.009.031-.028.051l-.043.044v.004c.008.02.008.043-.008.078.02.039.02.066 0 .078l-.039.039-.008.004-.02.009v.008l.027.095h.008a.982.982 0 0 1 .217 0h.008v.004l.086.086v.004h.004l.051.146.106.099.043.016.004-.123.099.099.016-.016.07-.146.012-.082.012.004h.008l.075.004-.004-.059v-.02h.012l.099.004c.051-.052.074-.095.074-.131l-.016-.141.086.027.023-.039-.039-.039-.012-.016.078-.079.004.008h.008l.048.027v-.012l-.032-.07.013-.013.02-.012-.008-.027-.04-.074.008-.004.008-.008.107-.059.004-.043c-.091-.048-.139-.087-.131-.106.004-.017.012-.021.032-.021l.118.021.004-.071v-.008l.059-.059.016-.043a.145.145 0 0 1-.055-.039l-.004-.008v-.008l.004-.02-.004-.009-.008-.004-.004.004c-.008.017-.027.028-.056.028a.148.148 0 0 1-.106-.048v-.004h-.004l-.031-.055-.008.008a.107.107 0 0 1-.047.066c-.051.024-.098.032-.146.013a.106.106 0 0 1-.062-.071l-.012-.079c-.013-.074-.028-.117-.052-.129a.086.086 0 0 0-.066-.016l.004.066-.003.006z"
  }), React.createElement("path", {
    fill: "#676767",
    d: "M13.715 9.668a.442.442 0 0 1-.106.039.41.41 0 0 1-.118-.027l-.091-.012c-.027.012-.059.051-.102.117l.059.126-.099.055h-.004l-.079-.023c.032.06.04.095.028.11l-.009.031a.291.291 0 0 1-.051.09l-.137.122.035.02-.023.021c-.031.027-.039.059-.023.082l.094.145h.004v.004l.043.079v.004l.004.004-.004.008v.013l-.008.008c.02 0 .035.008.055.02.032.02.056.074.067.156l.016.079c.008.02.016.031.036.039.031.016.07.012.105-.012.02-.012.031-.023.027-.035l-.004-.004v-.009l.066-.047.008.008.052.087a.1.1 0 0 0 .07.023l.021-.004-.017-.047.075.031h.024l.004.008.07.056.02-.032-.004-.134.004-.004.047-.059c.004-.008 0-.023-.02-.043l-.012-.012.008-.008.004-.008.012-.004.099-.162.008.004.021.004.008.005v.008l-.008.062h.008l.109-.099-.007-.051h-.02l-.039.004.066-.18-.059-.009h-.008v-.008l-.02-.023c-.012-.023-.012-.043.004-.063l.094-.004h.059c0-.02-.012-.055-.047-.113l-.082-.027.086-.082v-.021l-.043.009h-.016v-.005l-.004-.004-.004-.008c-.012-.039-.035-.07-.07-.083l-.157.004-.066.079v.004l-.02-.004-.248-.079.24-.062c.016 0 .055-.039.121-.117l-.082-.059-.07.019z"
  }), React.createElement("path", {
    fill: "#CCCBCB",
    d: "M12.779 8.985h-.004v-.004c-.043-.15-.082-.232-.109-.244l-.138-.047c-.079-.023-.134-.039-.157-.055a.552.552 0 0 1-.149-.17h-.023l.004.004a.505.505 0 0 0 .106.166l.004.004.004.008-.064.113c-.023.043-.047.062-.07.055a.492.492 0 0 1-.099-.109l-.066-.02c0 .02.012.059.039.121v.016l-.012.044-.07.031-.023.008c-.012.012-.012.031-.008.056.008.058.004.093-.008.109-.008.008-.012.008-.021.008h-.003l-.079-.016a.075.075 0 0 0 .035.043.53.53 0 0 1 .103.146l.004.012.035-.008a.153.153 0 0 1 .121.027l.044.052.004.004v.004h-.004l-.005.1c.013.016.021.035.013.051-.008.02-.024.031-.052.035-.031 0-.047.021-.055.06v.004l-.031.067.047.047.103.02h.008l.051.055-.064.093.146.314.004.008-.023.027.008.024h.004l.267-.169-.043.078a.5.5 0 0 0-.063.146.19.19 0 0 0 .11-.118l.004-.008h.005l.074-.039.004-.008.105.094.118.004.004.004.056.036.145-.126a.246.246 0 0 0 .039-.074l.016-.031c.004-.016-.016-.055-.055-.122l-.035-.052.173.06.052-.027-.052-.11-.004-.004.087-.113-.035-.056c-.036-.039-.06-.059-.075-.059l-.008.004-.044.043-.008-.004h-.008l-.07-.023-.02-.063a.13.13 0 0 1-.078-.047l-.044-.027c-.037-.017-.056-.037-.056-.056-.008-.023 0-.051.023-.086.044-.063.067-.115.067-.154V9.09l.027.004.09.004a.388.388 0 0 0 .035-.117l-.027-.004a.678.678 0 0 1-.145.082c-.044.012-.099-.012-.178-.066v-.004l-.003-.004z"
  }), React.createElement("path", {
    fill: "#676767",
    d: "m12.352 6.352-.012-.008c-.02 0-.039.02-.059.062l-.011-.007-.004.004.004.004-.036.036-.016.008-.043.023-.005.027c.005.044-.008.075-.027.087l-.016.047c-.004.012-.008.043-.004.086l.023.118c.008.016.028.035.067.052l.091.023a.181.181 0 0 0 .09-.035l-.023-.044v-.011l.008-.035v-.005l.043-.078h.074l.021-.004a.532.532 0 0 0-.075-.121l-.027-.039a.3.3 0 0 1-.035-.115c-.009-.036-.021-.059-.028-.075z"
  }), React.createElement("path", {
    fill: "#262626",
    d: "m11.994 6.204-.008.012-.012-.004-.051-.008-.003.023v.012h-.013l-.083.031-.004.012c-.012.027 0 .051.028.082l.008.008-.008.012a.37.37 0 0 1-.099.106c-.016.012-.02.023-.02.035l.027.036.043.016.036.004c.047 0 .078.004.091.023l.039.027c.027.012.051.02.07.02.016 0 .035-.012.051-.043l.031-.035.023-.075-.02-.087.031.008.052.004.023-.016.008-.02-.039-.113.012-.039a.062.062 0 0 1 .043-.035h.004l-.008-.028-.095.004v-.005l-.086-.059a.127.127 0 0 0-.102-.021l-.012.009c-.008.016 0 .031.023.039.024.017.032.036.02.065z"
  }), React.createElement("path", {
    fill: "#989898",
    d: "m13.459 5.206-.047.062c-.008.012-.012.035-.004.074v.023h-.098l-.067-.02-.052.079-.008.008-.062.039-.055.06-.008.012-.098.113v.004h-.004l-.074.04-.06-.039v-.004l-.055-.059-.035-.02.027.16.023.087-.059.056-.082.121v.051l-.004.004h-.004l-.02.031.016.028h.031l.113.031h.008v.004h.004l.023.023.031.017h.008v.004c.013.016.021.031.021.047l.012.035.122.035.035-.008.035-.047.094-.182h.004v-.002l.044-.059.006-.004.074-.035.052-.004c.02-.031.035-.047.055-.047.012 0 .031.008.062.023l.008.004v.004l.066.102v.004h.004v.008l.009.075-.005.083-.02.07v.008h-.004l-.051.062-.023.051.004.087h.008l.027-.012.031-.027.008-.008.004-.008.04.035v.068h-.004l-.036.016-.012.016v.035l-.004.004-.023.043h-.004l-.007.003-.031.004-.031.008-.023.043.004.008.129-.016.024-.02.043-.113.29-.299h.009l.062-.031.004-.004v.004h.052l.051-.012.055-.023.039-.044.062-.173v-.003l.244-.256v-.004l-.016-.137a.074.074 0 0 1-.035-.023l-.008-.008v.004l-.039.004a.107.107 0 0 1-.048-.035l-.012-.024v-.004l-.004-.004v-.213a.2.2 0 0 1-.075-.051l-.051-.055-.047-.067c-.008-.016-.008-.039-.004-.075l.004-.02-.027-.034-.004.031-.035.067h-.012a.195.195 0 0 1-.083-.016c-.023-.008-.035-.028-.035-.052v-.015h-.02l-.075.02-.055-.055-.02-.004-.02.02.023.039.008.012-.039.083h-.003v.003h-.004l-.07.079-.004.004h-.008l-.111.012-.074-.019z"
  }), React.createElement("path", {
    fill: "#4D4C4C",
    d: "m13.545 4.002-.016-.082-.039.024h-.004l-.094.035-.004-.008-.016-.004v.043l-.004.004-.047.071h-.004v.004h-.004l-.071.06h-.008v.008l-.012-.008c-.048-.02-.079-.044-.087-.063-.008-.008-.012-.008-.02-.012l-.051.008-.031.031.082.071.066.027.004.004h.004l.004.008v.004l.013.078h.004v.122l.016.071.047.109.056.051.043-.031.031-.039v-.004h.004l.055-.066.047.043v.008l.048.09.059.023.032.095v.008l-.004.087v.004h-.004l-.024.078.044.039.047-.023.047-.047.012.008.039.012.047.043.052-.012c.039-.012.059 0 .07.027v.035l.008.004.056.016.023-.051v-.02c0-.016.004-.031.016-.035l.031.004c.042.019.062.046.062.078l-.004.027v.048l.043.063.052.055c.016.02.035.027.055.035h.008c.013.008.021.027.021.07v.178c.008.016.02.027.031.031h.008c.023-.012.039-.008.059.012l.012.008c.02.004.035.02.039.051l.006.098.091-.184c.027-.099.059-.158.103-.166.035-.012.09.008.16.047l.256.021.008-.056L15 5.257c-.055-.031-.079-.055-.071-.07l.091.004c.083.027.161-.02.235-.154h.004l.087-.082.012-.181v-.02H15.379l.066-.016h.012l.008.004v.004l.135.145.04-.016.008-.023-.075-.071-.012-.008-.008-.012.114-.067-.008-.164-.048.008h-.004l-.062-.031a.354.354 0 0 1-.102-.048c-.023-.012-.039-.023-.039-.039v.004c0 .016-.004.023-.012.027-.012.008-.027.012-.056.012h-.004l-.004-.004h-.004l-.055-.039-.048.039c-.023.021-.039.036-.039.052l.023.051c.012.016.012.023.008.035-.008.012-.027.023-.055.027l-.023.012c-.027.008-.051.004-.066-.016l-.008-.012-.101-.106c-.048-.016-.075-.036-.087-.06-.008-.012-.012-.023-.008-.031a.168.168 0 0 0-.02-.071l-.02.012-.003.008c0 .012.004.024.016.04l.004.008.004.004-.004.008-.055.09-.09-.02-.02-.012v-.012a.066.066 0 0 0 0-.055l-.012-.031-.074-.056-.004-.004c-.009.012-.017.012-.024.016l-.07-.008c-.023-.004-.039-.008-.047-.023-.004-.008-.004-.023.004-.043l.004-.012-.031-.055-.138.008c.004.02 0 .031-.008.047-.004.012-.02.016-.031.016-.021.008-.044 0-.063-.02v-.003h-.004c-.031-.035-.043-.062-.043-.086l-.027-.04-.039.028c-.035.02-.059.02-.07.004l-.017-.004-.039.004-.106.035a.1.1 0 0 1-.059.02h-.012a.106.106 0 0 1-.078-.027l-.063-.051-.081-.124z"
  }), React.createElement("path", {
    fill: "#989898",
    d: "m15.989 3.264-.06-.385.004-.008h.004c.028-.043.044-.078.036-.105l-.016-.024c-.044-.027-.063-.09-.052-.196h-.035c-.027-.004-.059.008-.09.027-.031.023-.051.051-.055.07-.016.048-.067.079-.154.107l-.02.121v.004l-.004.004-.043.078-.004.008h-.008l-.389.071h-.013v-.007l-.114-.122.035-.035-.043-.059-.056-.039-.004-.004h-.004v-.008l-.02-.106-.102.008-.008-.008-.086-.052-.311-.055-.26-.012-.008.008c-.012 0-.02-.004-.023-.012l-.149-.338a3.072 3.072 0 0 0-.204-.264 2.934 2.934 0 0 0-.205-.239l-.219-.216-.036-.02L13 1.454h-.004l-.008-.008a.314.314 0 0 0-.126-.051c-.052-.02-.169.02-.354.117l-.008.004.008.055h.004v.004h-.004v.008l-.031.063v.004h-.004l-.004.043c0 .036.008.075.02.106l.028.02.059-.004.052.012.02-.016c0-.035.012-.062.027-.07h.039l.136.039.032.004-.044.074v.09c0 .021.036.067.106.135a.261.261 0 0 0 .095.051l.02-.004.02-.008.066-.067.051-.031v-.005l.107-.016.031-.067.094-.055.082.047v.004l.008.004.079.135.031.09v.012l-.016.109.032.075v.012l-.024.087v.078a.7.7 0 0 1 .036.13l-.008.066v.004l-.04.056v.004l-.039.046-.004.086.023.091.004.004-.004.004-.023.138-.021.02c-.016.012-.035.012-.059 0h-.008l-.035-.039-.039.012-.051.055-.055.161v.004l-.005.004-.055.047h-.008l-.032.004-.06.089.031.059.008.008.079.098V3.72l.087.012.016.079v.004l.012.094.023.02.078-.023.074-.043.013-.008.027.133.035.052.008.004.028.055.059.048c.008.012.027.012.047.012l.02.004.035-.016a.306.306 0 0 1 .087-.028l.023-.012.055-.004c.021 0 .028.004.04.016l.078-.053h.008l.008.004.004-.004.008.008c.031.035.047.067.047.083l.035.059.028.008h.008l-.008-.008c-.005-.02-.005-.031 0-.039.008-.012.023-.02.047-.02l.146-.004.004-.004h.008v.008h.008l.043.082-.004.043h-.004l.055.012h.004c-.004-.012-.004-.02.004-.027l.02-.004.131.09c.012.012.02.028.023.048l.004.055.043.008.027-.047c-.012-.023-.02-.048-.016-.063s.008-.027.023-.035l.012-.012c0-.008.004-.012.012-.016l.035.004c.02.012.035.051.043.118v.008l.008.004c.004.016.028.027.063.039h.004l.004.004.126.13.059-.02-.008-.02a.083.083 0 0 1-.02-.051c0-.027.02-.056.059-.083l.066-.06.079.056h.016l.017-.087v-.016l.016-.004.062.008c.012.012.02.023.02.043 0 .017-.012.036-.023.052l.012.008c.039.02.07.035.094.039h.004l.051.028.04-.004-.063-.287a.377.377 0 0 1-.109-.126c-.027-.048-.012-.114.051-.192.035-.039.078-.078.126-.118l.004-.008h.056l.004.008.047.021h.098c.039-.021.074-.079.114-.174.022-.056.022-.169.006-.347z"
  }), React.createElement("path", {
    fill: "#989898",
    d: "m13.723 7.173-.008.004c0 .02-.012.031-.031.031l-.154-.016a.853.853 0 0 1-.211-.055l-.217.204.008.086v.008l-.02.005c-.169.023-.26.008-.271-.047l-.02-.243-.196-.012-.082.173-.009-.074c-.004-.06-.016-.095-.027-.103l-.086.043-.039.052-.004.004h-.004l-.079.027c-.087.07-.162.145-.229.224l-.208.282.043.099v.015l-.004.004c-.016.023-.008.06.016.099a.342.342 0 0 1 .048.168v.012l-.17.1v.039l.079.035c.008.004.012.012.012.016v.007c-.004.02.027.047.087.074l.145.039.043-.027.048-.066.039-.113.114.043.016.012v.012c-.02.047-.008.078.027.098l.125.004a.232.232 0 0 0 .104-.043c.016-.02.039-.023.074-.02.043.008.082.023.109.059l.027-.066.008-.012h.004c.02-.012.032-.031.048-.059a.163.163 0 0 1 .062-.075l.056-.031.004-.006.004.004h.004l.031.008.008.004.043-.196v-.004l.062-.012c.063-.043.095-.079.091-.11l-.012-.06c-.016-.039-.016-.066-.008-.078.012-.012.02-.016.031-.016.027 0 .06.008.091.023l.008-.062v-.008l.004-.004.066-.031.008-.035h-.039l-.008-.004.004-.02v-.011l.004-.009h.02c.027 0 .059-.016.094-.047l.248-.177h.008l.078.035.031-.004-.02-.082V7.28l.004-.004.004-.004.044-.071-.012-.008-.028.008v.004h-.004l-.078.012h-.024v-.005l-.004-.012-.016-.027h-.014z"
  }), React.createElement("path", {
    fill: "#676767",
    d: "m14.072 9.51.028-.031v-.004l-.098-.078c-.052-.035-.095-.047-.127-.043l-.043.016v.082a.164.164 0 0 1-.047.082l-.015.016.039.047h.004l.012.031.047.021c.028-.021.048-.028.067-.024l.083.017.004-.028c.003-.056.023-.089.046-.104z"
  }), React.createElement("path", {
    fill: "#CCCBCB",
    d: "M13.502 8.647a.444.444 0 0 1-.113-.197c-.114 0-.181-.02-.213-.059-.023-.035-.07-.059-.137-.078l-.02-.004.02-.067-.012-.008-.02-.004c-.047.023-.079.048-.091.079a.226.226 0 0 1-.06.078c-.02.062-.039.094-.059.094-.012.004-.02-.004-.027-.016l-.03-.027a.163.163 0 0 0-.066-.023l-.039.008a.212.212 0 0 1-.127.055l-.148-.008c-.047-.023-.066-.07-.055-.129l-.056-.02-.027.078v.004l-.004.004-.012.016.035.008h.008l.004.004v.004a.773.773 0 0 0 .146.166c.016.008.062.023.146.047l.142.051c.043.02.086.105.133.26.063.042.103.062.13.058.028-.012.075-.039.142-.083l.004-.004.004-.004.008.004.07.017h.008v.012l-.006.01a.47.47 0 0 1-.059.164l-.094.004v.004c0 .039-.027.099-.079.174a.1.1 0 0 0-.02.055l.091.062c.023.027.039.035.059.035h.02l.02.066.043.017.023-.024c.012-.012.028-.02.04-.016.039 0 .07.023.11.075l.035.048.004-.005c.023-.016.066-.012.129.009l.103.023.095-.032.039-.02.027-.02-.023-.027c-.008-.016 0-.036.02-.056.023-.02.039-.039.039-.062V9.4c-.008-.023-.004-.039.004-.047.008-.016.035-.023.066-.031.052-.008.114.016.189.078l-.027-.078-.043-.06-.009-.071-.067-.011h-.004v-.004l-.177-.102-.086-.016v-.02l-.003-.088c-.06-.166-.108-.268-.143-.303z"
  }), React.createElement("path", {
    fill: "#CCCBCB",
    d: "m12.822 6.231-.031-.016h-.004l-.023-.023-.11-.032h-.027l-.02.008-.044-.083.004-.004.031-.039v-.047l.004-.008.021-.031-.016-.008-.06-.012-.102-.016h-.008l-.059-.059v-.003l-.02-.04-.004-.012.031-.083v-.058l-.004-.016-.029.031-.004.004-.008.012-.008-.012-.012-.004-.059-.047-.009-.008v-.007l-.012-.086-.027-.044-.06.004-.035.063-.004.008-.004.004-.094-.02-.016.086v.086l-.004.004-.051.079v.008l-.008.004h-.004l-.06.004-.06.048-.008.008h-.008V5.87l-.109-.036-.016.04v.004l-.047.078a.053.053 0 0 1-.031.027l-.048-.008-.062-.027-.013-.008-.004-.004v-.004l-.012-.095-.02-.07-.012-.021-.027.056-.046.064-.039.09v.008h-.004l-.035.051c0 .016-.012.039-.035.074l.023.091.117.13.039.082V6.4l-.004.008h-.004l-.031.04-.008.008-.078.014.008.062.059.032.086.02.023.078v.008l-.02.134v.004l-.031.059v.013h-.008l-.098.016v.039l-.027.085-.012.098.02.056.121.075.004.004.051.086v.004l.004.004-.004.003-.062.138-.016.039-.039.091-.016.07-.004.008V7.7a.108.108 0 0 0-.039.055c-.004.008-.004.016.004.023l.004.004.039.044.02.031.008-.004.004.012v.019l.008.023.035.013.142.031a.359.359 0 0 0 .138-.031.236.236 0 0 1 .138-.017l.008-.027-.05-.106-.004-.008h.004l.225-.311.239-.231h.004l.075-.027.039-.043v-.004a.348.348 0 0 1 .09-.052l-.023-.02-.051-.051V7.02h-.004l-.039-.047-.004-.008v-.007l.02-.023-.051.012-.11-.027c-.044-.02-.071-.044-.079-.071a.496.496 0 0 1-.027-.188c-.016.02-.035.023-.055.023l-.082-.02-.056-.039-.066-.016h-.032a.09.09 0 0 1-.059-.023c-.023-.016-.035-.031-.039-.047-.008-.032 0-.052.027-.071s.059-.052.086-.091c-.027-.035-.039-.07-.027-.105l.004-.004c.004-.02.036-.035.095-.055.004-.02.012-.032.02-.036l.06.004-.008-.008c-.039-.023-.052-.051-.031-.083l.031-.023a.15.15 0 0 1 .121.016l.09.063h.083l.028.023.006.031c0 .02-.012.031-.027.031-.021 0-.028.02-.032.043l.04.094c.023-.035.047-.055.07-.059.012 0 .027.008.039.023.012.02.023.055.031.09a.265.265 0 0 0 .027.099l.031.044a.383.383 0 0 1 .083.137l.153-.02.066-.035.062-.078.028-.075v-.008l.02-.079v-.004l.004-.008h.004l.059-.039.013-.008-.004-.004-.1-.031h-.006v-.004l-.02-.059-.008-.019z"
  }), React.createElement("path", {
    fill: "#CCCBCB",
    d: "M10.847 8.446h-.004l-.298.122-.091.087c-.017.133 0 .212.047.235l.087.055h.004v.005l.023.144a.595.595 0 0 0 .152.161l.087.02.012.004v.004c.012.017.04.032.091.048l.235.012c.173 0 .271.012.291.031.02.016.023.055.02.113-.004.039 0 .063.004.067l.087-.021c.066-.023.105-.023.125-.004l.031.04c.047.059.079.083.087.079a.182.182 0 0 0 .078-.071l.009-.012.07.043.043-.035c.012-.056.039-.083.086-.087l.02-.008-.008-.016-.008-.008.004-.004.004-.098c-.031-.047-.07-.063-.113-.055-.043.012-.074.012-.086-.004-.008-.013-.008-.021-.008-.036a.606.606 0 0 0-.091-.122c-.048-.039-.06-.074-.048-.109l.008-.012.11.02-.008-.066c-.004-.04 0-.067.021-.087.008-.016.027-.023.047-.027l.047-.017v-.02c-.035-.074-.047-.129-.031-.152l.023-.02c.012-.004.051.004.105.023l.004.004v.008c.043.051.067.082.079.09l.075-.121a1.07 1.07 0 0 1-.115-.166l-.059.04-.008-.008-.156-.04h-.004v-.002c-.067-.031-.107-.066-.111-.102l-.094-.043v-.09l.173-.103a.502.502 0 0 0-.039-.133l-.027-.055-.118.012a.4.4 0 0 1-.157.035l-.122-.027v-.043l-.02-.004-.035-.013-.008-.023V7.88l-.004-.012v-.015l-.008.004-.007.102-.004.035c-.008.02-.016.031-.008.039.02.027.016.059-.004.086l.016.067-.004.004-.008.004-.047.043v.091l-.012.004a.543.543 0 0 1-.182.059l-.172-.012-.075.066h-.003z"
  }), React.createElement("path", {
    fill: "#676767",
    d: "M14.257 11.694a.801.801 0 0 0-.275.342c-.051.118-.09.177-.118.192l.028.217v.004l-.021.148c-.008.048 0 .079.012.087l.162.106h.004l.004.012a.28.28 0 0 0 .062.105.13.13 0 0 0 .051.043l.023-.259v-.008l.114-.274.04-.326v-.003l.004-.004.035-.087-.027-.075v-.004h-.004l-.008-.102.004-.004.004-.004.02-.023.012-.027-.126-.056z"
  }), React.createElement("path", {
    fill: "#676767",
    d: "m10.387 13.992-.012.02v.004l-.004.008-.16.04.008.02.051.06-.016.004-.075.039-.118.09c-.039.047-.031.134.027.264l.119.012h.004v.004l.117.055.126-.02c.051-.012.11-.059.185-.149h.004l.008-.008.055-.016-.016-.165v-.008l.07-.102v-.004h.004l.056-.044a.189.189 0 0 0-.016-.126c-.017-.031-.036-.043-.056-.043l.008.059-.105-.02-.047.027h-.217z"
  }));
};

module.exports.MapSankey = function MapSankey(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M10 7h4c.6 0 1-.6 1-1.2V3.2c0-.6-.4-1.2-1-1.2h-4c-.3 0-.6.2-.8.5-.8.2-1.2 1.1-2 3 0 .2-.2.7-.4 1.1-.2-.4-.5-.6-.8-.6H2c-.6 0-1 .6-1 1.2v2.5c0 .7.4 1.3 1 1.3h4c.6 0 1-.6 1-1.2v-.2c.3.3.6.7.8 1 .5.6.8 1 1.2 1.3v.8c0 .7.4 1.2 1 1.2h4c.6 0 1-.6 1-1.2v-2.5c0-.6-.4-1.2-1-1.2h-4c-.6 0-1 .6-1 1.2v.3c-.1-.2-.3-.3-.4-.5-.3-.3-.6-.7-.8-1 .5-.6.9-1.6 1.3-2.7.2.4.5.7.9.7zM6 9.8c0 .1 0 .2-.1.2H2.1C2 10 2 9.9 2 9.8V7.2c0-.1 0-.2.1-.2H6V9.8zm4 .4c0-.1 0-.2.1-.2H14s.1.1.1.2v2.5c0 .1 0 .2-.1.2h-3.9s-.1-.1-.1-.2v-2.5zm.1-7.2H14v2.7c0 .2 0 .3-.1.3H10V3.3c0-.2 0-.3.1-.3z"
  }));
};

module.exports.MergeCell = function MergeCell(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8 7.5a.302.302 0 0 1-.093.22L5.532 9.907c-.062.063-.136.093-.22.093s-.157-.03-.22-.093A.299.299 0 0 1 5 9.688V8H3.5a.5.5 0 0 1 0-1H5V5.312a.3.3 0 0 1 .093-.22.304.304 0 0 1 .439.001L7.907 7.28A.303.303 0 0 1 8 7.5zm1 0c0 .084.031.158.093.22l2.375 2.188c.062.062.136.092.22.092s.157-.03.22-.093A.299.299 0 0 0 12 9.688V8h1.5a.5.5 0 0 0 0-1H12V5.312a.3.3 0 0 0-.093-.22.304.304 0 0 0-.439.001L9.093 7.28A.303.303 0 0 0 9 7.5zM7 2v2h1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2H7v2H2V2h5m3 0h5v11h-5v-2H9v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v2h1V2",
    "clip-rule": "evenodd"
  }));
};

module.exports.MinusCycleO = function MinusCycleO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1zm-.001 13a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm4.098-5.962a.654.654 0 0 1-.665.642H4.485a.654.654 0 0 1-.667-.643c-.002-.354.299-.642.666-.642h6.946c.369 0 .668.288.667.643z",
    "clip-rule": "evenodd"
  }));
};

module.exports.More = function More(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M3.057 7a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm4.886 0a1 1 0 1 0 0 2 1 1 0 1 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"
  }));
};

module.exports.Movable = function Movable(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#231F20",
    d: "M6 2H5V1h1v1zm2-1H7v1h1V1zm2 0H9v1h1V1zM6 3H5v1h1V3zm2 0H7v1h1V3zm2 0H9v1h1V3zM6 5H5v1h1V5zm2 0H7v1h1V5zm2 0H9v1h1V5zM6 7H5v1h1V7zm2 0H7v1h1V7zm2 0H9v1h1V7zM6 9H5v1h1V9zm2 0H7v1h1V9zm2 0H9v1h1V9zm-4 2H5v1h1v-1zm2 0H7v1h1v-1zm2 0H9v1h1v-1zm-4 2H5v1h1v-1zm2 0H7v1h1v-1zm2 0H9v1h1v-1z"
  }));
};

module.exports.Moveto = function Moveto(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M13.136 4h-.578c-1.291 0-1.289-2-2.201-2H4.863A1.864 1.864 0 0 0 3 3.864V6h1V3.864C4 3.388 4.388 3 4.863 3h5.304c.062.096.141.24.198.347C10.7 3.965 11.261 5 12.558 5h.578c.444 0 .864.486.864 1v6.137a.865.865 0 0 1-.864.863H4.863A.865.865 0 0 1 4 12.137V11H3v1.137C3 13.166 3.835 14 4.863 14h8.272c1.03 0 1.865-.834 1.865-1.863V6c0-1.029-.835-2-1.864-2z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M7.771 10.841 9.85 8.812l.005-.008c.044-.044.081-.149.106-.207.021-.054.029-.01.033-.064 0-.012.006-.022.006-.033 0-.008-.004-.014-.004-.021a.411.411 0 0 0-.035-.146.514.514 0 0 0-.09-.135c-.008-.01-.012-.024-.021-.033L7.771 6.088c-.2-.201-.525-.109-.725.092a.512.512 0 0 0 0 .726l1.201 1.109-6.713.001c-.293 0-.531.2-.53.483-.001.283.237.464.531.464h6.713l-1.201 1.243a.514.514 0 0 0 0 .727c.1.1.23.059.362.059s.263-.052.362-.151z",
    "clip-rule": "evenodd"
  }));
};

module.exports.MultiLineText = function MultiLineText(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M14 2.5a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1 0-1h12a.5.5 0 0 1 .5.5zm0 3a.5.5 0 0 0-.5-.5h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 .5-.5zm-8 6a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5zM11.487 8H1.5a.5.5 0 0 0 0 1H11.487c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H8.89v-.033h-.006l1.002-1.002a.514.514 0 1 0-.727-.727l-1.878 1.878a.514.514 0 0 0 0 .727l1.878 1.877a.515.515 0 0 0 .727-.728L8.891 13h2.597c1.379 0 2.5-1.121 2.5-2.5S12.866 8 11.487 8z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Multidimensional24 = function Multidimensional24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M22.991 20.192v-.016l-1.168-4.152a.762.762 0 0 0-.355-.464c-.168-.099-.307-.248-.509-.194a.763.763 0 0 0-.54.937l.621 2.491-8.345-4.818V4.358l1.848 1.785a.761.761 0 0 0 1.079 0c.148-.148.088-.342.088-.539a.759.759 0 0 0-.224-.538l-3.015-3.089c-.002-.003-.006-.004-.012-.007-.066-.067-.223-.121-.31-.158-.08-.032-.014-.044-.096-.05-.017 0-.032-.008-.048-.008-.012 0-.02.006-.031.006a.61.61 0 0 0-.219.052.77.77 0 0 0-.199.133c-.016.012-.034.018-.048.032l-3.085 3.09c-.3.297-.162.781.136 1.077a.76.76 0 0 0 1.078 0l1.649-1.785.001 9.711-8.329 4.808.623-2.492a.763.763 0 0 0-.54-.936c-.203-.054-.34.095-.51.193a.762.762 0 0 0-.355.464l-1.167 4.154c-.002.004 0 .008 0 .014-.024.093.006.253.017.348.012.085-.031.035.006.106.008.017.008.033.016.047.006.011.016.016.021.024.048.074.085.104.153.163a.795.795 0 0 0 .217.106c.017.007.033.021.052.025l4.218 1.13c.407.11.757-.25.863-.658a.76.76 0 0 0-.538-.933l-2.373-.536 8.409-4.855 8.266 4.772-2.372.536a.76.76 0 0 0-.538.933c.106.408.457.769.863.658l4.219-1.13c.02-.005.035-.018.053-.025a.789.789 0 0 0 .216-.106c.069-.059.105-.089.153-.163.006-.01.016-.014.021-.024.008-.014.008-.029.017-.046.035-.072-.007-.022.005-.107.012-.096.042-.257.018-.348z",
    "clip-rule": "evenodd"
  }));
};

module.exports.NewDocument24 = function NewDocument24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M16.494 11.5a.5.5 0 0 1-.5.5h-3.499v3.499a.5.5 0 1 1-1 0V12H7.994a.5.5 0 0 1 0-1h3.501V7.499a.5.5 0 0 1 1 0V11h3.499c.277 0 .5.223.5.5zM21 4.5v15c0 1.379-1.122 2.5-2.5 2.5h-13A2.502 2.502 0 0 1 3 19.5v-15C3 3.122 4.121 2 5.5 2h13C19.878 2 21 3.122 21 4.5zm-1 0c0-.828-.674-1.5-1.5-1.5h-13A1.5 1.5 0 0 0 4 4.5v15c0 .826.672 1.5 1.5 1.5h13c.826 0 1.5-.674 1.5-1.5v-15z"
  }));
};

module.exports.NewDocumentDashboard = function NewDocumentDashboard(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M14.5 3H13V1.5a.5.5 0 0 0-1 0V3h-1.5a.5.5 0 0 0 0 1H12v1.5a.5.5 0 0 0 1 0V4h1.5a.5.5 0 0 0 0-1zM12 14H2V3h7V2H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7h-1v7zm-7-1V4H3v9h2zm3 0V7H6v6h2zm1 0h2v-3H9v3z"
  }));
};

module.exports.NewDocumentWorksheet = function NewDocumentWorksheet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M15 3.5a.5.5 0 0 1-.5.5H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 1 0V3h1.5a.5.5 0 0 1 .5.5zm-2 4V14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6.5a.5.5 0 0 1 0 1h-1v5H12v-.5a.5.5 0 0 1 1 0zM2 8h4.5V3H2v5zm0 6h4.5V9H2v5zm10-5H7.5v5H12V9z"
  }));
};

module.exports.NewDocument = function NewDocument(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M4.524 8c0 .016.007.028.009.043-.001.027-.009.042-.009.072V8zm6.451-.5h-2.5V5c0-.276-.174-.5-.45-.5s-.5.224-.5.5v2.5h-2.5c-.261 0-.469.075-.491.543a.493.493 0 0 0 .49.457h2.5V11c0 .276.224.5.5.5s.45-.224.45-.5V8.5h2.5a.5.5 0 0 0 .001-1zm2.525-6h-11v13h11v-13m.5-1a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V1A.5.5 0 0 1 2 .5h12z"
  }));
};

module.exports.NodeCollapse = function NodeCollapse(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("g", {
    id: "XMLID_1_"
  }, React.createElement("path", {
    id: "XMLID_6_",
    d: "M12 2H3c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm1 11c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v9z",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    id: "XMLID_10_",
    d: "M10.5 8H8V5.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V8H4.5c-.3 0-.5.2-.5.5s.2.5.5.5H7v2.5c0 .3.2.5.5.5s.5-.2.5-.5V9h2.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  })));
};

module.exports.NodeExpand = function NodeExpand(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("g", {
    id: "XMLID_1_"
  }, React.createElement("path", {
    id: "XMLID_6_",
    d: "M12 2H3c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm1 11c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v9z",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    id: "XMLID_3_",
    d: "M4.5 9c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5h-6z",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  })));
};

module.exports.Num = function Num(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "m4.404 4.565 2.509 4.561V4.532c0-.236.053-.414.16-.532s.251-.178.433-.178c.188 0 .335.06.444.178s.163.296.163.532v5.767c0 .537-.234.806-.703.806a.823.823 0 0 1-.58-.201 1.575 1.575 0 0 1-.229-.244c-.07-.094-.141-.188-.211-.286L3.942 5.855v4.539c0 .234-.057.411-.171.53a.58.58 0 0 1-.439.18c-.185 0-.333-.061-.444-.182s-.167-.297-.167-.528V4.72c0-.2.023-.357.07-.472.056-.125.148-.228.277-.307s.268-.119.417-.119c.117 0 .218.019.301.055a.722.722 0 0 1 .22.146c.063.062.128.141.193.238.067.097.134.199.205.304zm10.127 2.106c0 .357-.057.688-.17.989s-.276.561-.49.777a2.202 2.202 0 0 1-.768.5 2.77 2.77 0 0 1-1.005.173c-.369 0-.701-.059-.995-.176a2.186 2.186 0 0 1-1.257-1.276 2.786 2.786 0 0 1-.168-.987c0-.363.057-1.141.17-1.442s.275-.56.486-.773c.212-.214.468-.379.769-.495.3-.115.632-.173.995-.173.369 0 .704.059 1.005.176s.558.284.772.5c.215.218.377.475.488.773.113.298.168 1.074.168 1.434zm-1.222 0c0-.489-.109-1.315-.329-1.588-.218-.272-.513-.409-.882-.409a1.11 1.11 0 0 0-.629.183 1.162 1.162 0 0 0-.42.538c-.098.238-.147.96-.147 1.276 0 .313.048.588.146.821.097.235.234.414.415.539.181.124.392.187.636.187.369 0 .664-.137.882-.411.218-.274.328-.653.328-1.136zM13.482 10h-2.965a.51.51 0 0 0-.518.5c0 .275.23.5.52.5h2.963a.51.51 0 0 0 .518-.499.51.51 0 0 0-.518-.501z"
  }));
};

module.exports.OC = function OC(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8.035 3.964a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM8 1a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1zm-.001 13.012a6.012 6.012 0 1 1 .002-12.024A6.012 6.012 0 0 1 8 14.012z",
    "clip-rule": "evenodd"
  }));
};

module.exports.OilTableChart = function OilTableChart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "m9.21 7.248-.633 4.457c.25.182.423.462.423.795a1 1 0 1 1-2 0c0-.436.281-.796.668-.934l1.055-4.434.487.116zm5.308-.789-1.732 1.167c.125.439.214.895.214 1.374 0 .795-.203 1.537-.533 2.205l1.654 1.187a6.956 6.956 0 0 0 .397-5.933zM3.411 3.723A6.978 6.978 0 0 0 1 9c0 1.23.32 2.386.877 3.391l1.655-1.187A4.966 4.966 0 0 1 3 9c0-1.417.595-2.689 1.541-3.599l-1.13-1.678zM8 2a6.967 6.967 0 0 0-3.789 1.119l1.121 1.665A4.965 4.965 0 0 1 8 4c1.919 0 3.564 1.093 4.403 2.679l1.681-1.133A6.993 6.993 0 0 0 8 2z"
  }));
};

module.exports.OkC = function OkC(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm3.23 4.565-3.49 5.606a.701.701 0 0 1-.561.327c-.009.002-.02.002-.03.002a.703.703 0 0 1-.557-.276L4.339 8.398a.698.698 0 0 1 1.112-.842l1.642 2.018 2.957-4.746a.696.696 0 1 1 1.18.737z",
    "clip-rule": "evenodd"
  }));
};

module.exports.OkL = function OkL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M7.563 12a.703.703 0 0 1-.557-.276L4.142 8.155a.698.698 0 0 1 1.111-.842l2.254 2.761L11.4 3.763a.696.696 0 1 1 1.182.737l-4.426 7.171a.701.701 0 0 1-.593.329z"
  }));
};

module.exports.OkO = function OkO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 1.031a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1.031zm-.001 13a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm3.231-8.434-3.49 5.606a.698.698 0 0 1-.56.327l-.031.001a.703.703 0 0 1-.557-.276L4.34 8.43a.698.698 0 0 1 1.112-.843l1.641 2.018 2.957-4.746a.696.696 0 1 1 1.18.738z"
  }));
};

module.exports.OkS = function OkS(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "m11.463 5.565-3.49 5.606a.701.701 0 0 1-.561.327c-.009.002-.021.002-.031.002a.703.703 0 0 1-.557-.276L4.572 8.398a.697.697 0 0 1 1.111-.842l1.642 2.018 2.957-4.746a.696.696 0 1 1 1.181.737zM14 2v12H2V2h12m0-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
  }));
};

module.exports.Ok = function Ok(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-2.537 4.565-3.49 5.606a.701.701 0 0 1-.561.327c-.009.002-.021.002-.031.002a.703.703 0 0 1-.557-.276L4.572 8.398a.697.697 0 0 1 1.111-.842l1.642 2.018 2.957-4.746a.696.696 0 1 1 1.181.737z"
  }));
};

module.exports.OpenL = function OpenL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M13.5 2h-9c-.3 0-.5.2-.5.5s.2.5.5.5h7.8L1.6 13.6c-.2.2-.2.5 0 .7.1.1.2.1.4.1s.3 0 .4-.1L13 3.7v7.8c0 .3.2.5.5.5s.5-.2.5-.5v-9c0-.3-.2-.5-.5-.5z"
  }));
};

module.exports.Open = function Open(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.821 3.078h6.085s.992.031 1.01.902c.018.881-1.01.883-1.01.883H5.634s-.775-.118-1.085.695c-.12.315-1.148 3.184-1.548 4.442-.113.355.157.451.377.457.23.008.437.004.628 0 .256-.002.473-.1.592-.457.256-.777 1.089-2.85 1.197-3.123.279-.705.645-.633 1.049-.633h7.683c.955 0 1.313.516 1.036 1.312L14.4 13.271c-.297.917-1.19 1.729-2.145 1.729H2.854C1.858 15 1 14.15 1 13.195v-8.35c0-.954.867-1.767 1.821-1.767zm9.111 1.104c-.456-.036-.543-.061-.135-.468.285-.312.649-.603.649-.603.011-.028-.284-.748-1.487-1.273s-2.951-.011-3.422.232c-.223.191-.9.299-.285-.325C8.293.768 9.768.156 11.365.611c1.486.427 2.178 1.287 2.23 1.405-.007.009-.009.015.001.015 0 0 .003-.006-.001-.015.032-.044.254-.207.635-.558.326-.332.421-.25.459.154.047.76.021 2.929.021 2.929s-2.032-.252-2.778-.359z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Operation = function Operation(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M14 4.501a.51.51 0 0 1-.518.499H9.52A.51.51 0 0 1 9 4.5a.51.51 0 0 1 .518-.5h3.965a.51.51 0 0 1 .517.501zM13.482 9H9.518A.51.51 0 0 0 9 9.5c0 .275.23.5.52.5h3.963A.509.509 0 0 0 14 9.501.51.51 0 0 0 13.482 9zm0 2H9.518a.51.51 0 0 0-.518.5c0 .275.23.5.52.5h3.963a.509.509 0 0 0 .517-.499.51.51 0 0 0-.518-.501zM7.483 4H6V2.518A.508.508 0 0 0 5.5 2a.51.51 0 0 0-.5.52V4H3.518A.51.51 0 0 0 3 4.5c0 .275.231.5.52.5H5v1.482A.51.51 0 0 0 5.5 7a.51.51 0 0 0 .5-.518V5h1.482A.51.51 0 0 0 8 4.501.51.51 0 0 0 7.483 4zm-1.275 6.618 1.755-1.755a.51.51 0 0 0 .012-.72.51.51 0 0 0-.721.014L5.5 9.911 3.746 8.156a.509.509 0 0 0-.72-.013.508.508 0 0 0 .014.721l1.753 1.754-1.755 1.755a.512.512 0 0 0-.013.72.51.51 0 0 0 .72-.012L5.5 11.325l1.756 1.756c.201.201.523.208.719.013s.189-.519-.013-.721l-1.754-1.755z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Optimization = function Optimization(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M9.291 9.536c.13.222.209.477.209.752a1.5 1.5 0 1 1-1.5-1.5c.075 0 .146.011.218.022l4.03-5.033.33.207-3.287 5.552zM8 4c.644 0 1.262.107 1.844.297.044.014.5.094.672-.297.163-.371-.173-.595-.312-.642A7 7 0 0 0 1 10c0 .647.095 1.271.26 1.866 0 0 .288.441.725.215.361-.188.242-.451.211-.571A5.88 5.88 0 0 1 2 10c0-3.309 2.691-6 6-6zm4.938 1.828c-.297.297-.07.678-.043.718a5.955 5.955 0 0 1 .875 5.097c-.022.075.001.471.324.536.491.1.646-.312.646-.312a6.947 6.947 0 0 0-1.078-5.979c-.091-.125-.504-.281-.724-.06z"
  }));
};

module.exports.Page1 = function Page1(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M14.562 12H3.438A.44.44 0 0 1 3 11.562V1.438C3 1.197 3.197 1 3.487 1h8.537L15 4v7.562a.44.44 0 0 1-.438.438zM12 2v2h2l-2-2zm2 3h-2.976V2H4v9h10V5zm-.5 8H2V2.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 0-1z"
  }));
};

module.exports.Paragraph = function Paragraph(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4 3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm-3.432-.542L4.9 9.625a.323.323 0 0 0 0-.469L2.568 6.823a.319.319 0 0 0-.236-.099.32.32 0 0 0-.234.099.319.319 0 0 0-.098.234v4.667c0 .09.032.168.098.233.068.067.146.1.234.1a.315.315 0 0 0 .236-.099z",
    "clip-rule": "evenodd"
  }));
};

module.exports.PasteL = function PasteL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M12.125 3.875H11V3h1.562a.44.44 0 0 1 .438.438v1.545h-.875V3.875zm-8.139 10.25H2.875V3.875H4V3H2.438A.44.44 0 0 0 2 3.438v11.125c0 .24.197.437.438.437h1.549v-.875zM10 5H5V3h1V1.875C6 1.394 6.394 1 6.875 1h1.126c.481 0 .875.394.875.875V3H10v2zM8.002 1.877 8 1.875l-1.124.001-.001.001V3H8.002V1.877zm5.877 13.682V9.045l-2.85-3H5.492c-.291 0-.488.197-.488.438v9.076c0 .24.197.438.438.438h8a.44.44 0 0 0 .437-.438zm-1-6.389h-2.025V7.045l2.025 2.125zm.125 6H5.879V6.92h4.15v3.076h2.975v5.174z"
  }));
};

module.exports.PauseO = function PauseO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M6.356 10.597a.654.654 0 0 1-.642-.665V5.985c0-.37.288-.667.643-.667.355-.002.643.299.643.666V9.93a.655.655 0 0 1-.644.667zm3.929-.666V5.984c0-.367-.288-.668-.643-.666A.654.654 0 0 0 9 5.985v3.946c0 .367.287.666.642.665a.653.653 0 0 0 .643-.665zM8 15A7 7 0 1 1 8.001.999 7 7 0 0 1 8 15zm0-1.001a6 6 0 1 0 0-12 6 6 0 0 0 0 12z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Pause = function Pause(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 .001 13.999A7 7 0 0 0 8 1zM7 9.931a.654.654 0 0 1-.644.666.654.654 0 0 1-.642-.665V5.985c0-.37.288-.667.643-.667.355-.002.643.299.643.666v3.947zm3.285 0a.654.654 0 0 1-.644.666A.653.653 0 0 1 9 9.932V5.985c0-.37.288-.667.643-.667.354-.002.643.299.643.666v3.947z",
    "clip-rule": "evenodd"
  }));
};

module.exports.PencilL = function PencilL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m13.482 3.021-.567-.565a1.554 1.554 0 0 0-2.198-.001L3.545 9.626c-.214.215-1.013 3.231-1.065 3.302l-.198.793.792-.199c.069-.052 3.085-.853 3.3-1.066l7.172-7.173c.303-.303.455-.703.454-1.099.001-.395-.216-.862-.518-1.163zm-7.803 8.741c.013.063-2.348.907-2.354.901.006.006.852-2.354.915-2.344l5.454-5.454 1.441 1.44-5.456 5.457zm7.173-7.173L11.83 5.611l-1.439-1.44 1.021-1.022a.575.575 0 0 1 .81 0l.565.566c.112.114.232.321.231.469a.557.557 0 0 1-.166.405z"
  }));
};

module.exports.Percent = function Percent(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M11.66 3.125 5.152 13.617c-.167.286-.354.43-.562.43a.59.59 0 0 1-.359-.137.426.426 0 0 1-.18-.355c0-.109.052-.242.156-.398l6.547-10.578c.114-.192.215-.337.301-.434S11.264 2 11.426 2c.156 0 .282.046.379.137a.48.48 0 0 1 .144.363c0 .109-.096.317-.289.625zM5 3c.551 0 1 .449 1 1v2c0 .551-.449 1-1 1s-1-.449-1-1V4c0-.551.449-1 1-1m0-1a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0V4a2 2 0 0 0-2-2zm6 7a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m0-1a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2a2 2 0 0 0-2-2z"
  }));
};

module.exports.Permission = function Permission(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M6.539 11.025h-.55v-.832C6 7.57 4.02 7.872 3.998 7.872l-.006-.001c-2.086 0-1.963 2.283-1.963 2.322v.832h-.594c-.247 0-.435.176-.435.405v3.143c0 .23.188.404.435.404h5.104c.247 0 .439-.174.439-.404V11.43c0-.229-.193-.405-.439-.405zm-3.79-.832c0-.007-.077-1.575 1.209-1.575.114.004 1.221-.063 1.221 1.575v.832h-2.43v-.832zM15 13.891c0 .955-1.216 1.086-1.216 1.086h-5.11s-.642.015-.642-.612l-.021-3.077c.025-2.954-.761-4.026-2.561-4.612-.521-.39-.737-.489-.737-1.227 0-.738.607-.738.607-.738s0 .021.216-1.194c.21-1.179 1.363-2.437 3.255-2.51V1c.028 0 .054.003.082.003.031 0 .061-.003.093-.003v.008c1.645.083 2.829 1.335 3.038 2.509.217 1.215.217 1.194.217 1.194s.607 0 .607.738-.216.999-.737 1.389c-.521.391-.366 1.232-1.171 1.974-.43.396-.738.695-.738 1.26 0 .563.304.693.607.867s2.344.738 3.299 1.39.912.998.912 1.562z"
  }));
};

module.exports.Phone24 = function Phone24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    d: "M16.4 2h-7C8.1 2 6.9 3.1 6.9 4.5v15C6.9 20.9 8 22 9.4 22h7c1.4 0 2.5-1.1 2.5-2.5v-15c0-1.4-1.1-2.5-2.5-2.5zM7.9 6h10v11h-10V6zm1.5-3h7c.8 0 1.5.7 1.5 1.5V5h-10v-.5c0-.8.7-1.5 1.5-1.5zm8.5 16.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5V18h10v1.5zm-4 .5h-2v-1h2v1z"
  }));
};

module.exports.Phone = function Phone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    id: "XMLID_11_",
    d: "M11 1H5c-.5 0-1 .5-1 1v12c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V2c0-.5-.5-1-1-1zm0 13H5v-1h6v1zm0-2H5V4h6v8zM5 3V2h6v1H5z",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }));
};

module.exports.Picture = function Picture(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M6.608 6.323a1.323 1.323 0 1 1-2.646 0 1.323 1.323 0 0 1 2.646 0zM12.821 12s-.546-4.288-2.182-4.288c-1.637 0-2.183 2.108-3.272 2.108-1.093 0-1.093-.527-2.184-.527C4.092 9.293 3 12 3 12h9.821zM14 2H2v11h12V2m0-1a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"
  }));
};

module.exports.Pie3DChart = function Pie3DChart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "m6.998 8.355 5.186 5.201a7.164 7.164 0 0 1-3.027 1.34l-.016.002A6.428 6.428 0 0 1 7.998 15C4.142 15 1.016 11.831 1 7.97c.015-3.512 2.617-6.405 5.998-6.891v7.276zm1.563-.073 4.515 4.528a6.975 6.975 0 0 0 1.923-4.811H8.842l-.281.283zM8 3h2v1H8v1h2v1H8v1h3V2H8v1zm5 0h1V2h-2v5h2V6h-1V3zm1 0v3h1V3h-1z"
  }));
};

module.exports.PieChart = function PieChart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "m8.561 8.282 4.783-4.797A6.971 6.971 0 0 1 14.998 8a6.973 6.973 0 0 1-1.923 4.811L8.561 8.282zm.595 6.614a7.164 7.164 0 0 0 3.027-1.34L6.998 8.355V1.079A6.995 6.995 0 0 0 1 7.97C1.016 11.831 4.142 15 7.998 15c.39 0 .771-.035 1.143-.102l.015-.002zm3.439-12.167A6.966 6.966 0 0 0 7.998 1v6.341l4.597-4.612z"
  }));
};

module.exports.Pin = function Pin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#999999",
    d: "M11 2v1h-1v4s2 1.224 2 2v1H3V9c0-1.125 2-2 2-2V3H4V2h7m0-1H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1v2.387C3.208 6.839 2 7.735 2 9v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V9c0-.952-1-1.868-2-2.545V4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
  }), React.createElement("path", {
    fill: "#999999",
    d: "M7.5 14.5A.5.5 0 0 1 7 14v-3.5a.5.5 0 0 1 1 0V14a.5.5 0 0 1-.5.5z"
  }));
};

module.exports.Plus24 = function Plus24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#231F20",
    d: "M11.5 16v-3.5H8a.5.5 0 0 1 0-1h3.5V8a.5.5 0 0 1 1 0v3.5H16a.5.5 0 0 1 0 1h-3.5V16a.5.5 0 0 1-1 0z"
  }));
};

module.exports.PlusDotO = function PlusDotO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M8 1H7.434l-.007.001h-.008l-.014.001h-.007l-.009.001h-.007l-.01.001h-.006l-.015.001h-.007l-.01.001h-.006l-.015.001h-.007l-.01.001h-.005l-.016.001h-.001a.088.088 0 0 0-.016.002.164.164 0 0 0-.022.002l-.016.001c-.426.078-.817.157-1.195.269a.498.498 0 0 0 .143.978.495.495 0 0 0 .141-.02A6.01 6.01 0 0 1 8 2a.5.5 0 0 0 0-1zM4.484 2.031a.5.5 0 0 0-.269.079l-.128.085c-.058.04-.116.08-.172.121-.027.018-.052.037-.078.056a.488.488 0 0 0-.013.01l-.012.008-.067.051-.008.007-.029.022-.013.01-.012.009-.001.001-.011.009-.001.001-.012.009-.012.01-.001.001-.011.008-.001.001-.011.009-.001.001-.012.009h-.001l-.011.01-.001.001-.011.009-.001.001-.004.003h-.001l-.006.006-.002.001-.003.003-.001.001-.006.004-.002.001-.003.003-.002.002-.005.004-.002.002-.003.003-.002.002c-.002 0-.003.002-.005.003l-.002.002-.003.002-.002.002-.005.004-.002.002-.003.002-.002.002a.018.018 0 0 1-.005.004l-.002.002-.003.002-.002.002-.005.004-.002.002-.003.003-.003.002-.003.003-.003.002-.003.002-.003.003-.003.003-.003.003a.002.002 0 0 0-.002.002l-.004.002-.003.003-.003.002-.003.003-.002.002-.004.003-.003.003-.003.002-.003.002-.002.002-.004.004-.002.002-.003.003-.002.001-.005.004-.002.002-.004.003-.002.001a.008.008 0 0 1-.004.004l-.002.002-.003.003-.002.002-.005.004-.002.001-.003.004-.002.001-.005.004-.001.001-.004.004-.001.002a.02.02 0 0 0-.006.004l-.001.001a.008.008 0 0 0-.004.004l-.001.001-.005.004-.001.001-.005.004-.001.001-.005.005h-.001l-.004.005-.001.001-.006.004-.001.001-.004.004-.001.001a.012.012 0 0 0-.005.005h-.001l-.005.004-.001.001-.005.005-.006.005-.001.001-.01.01h-.001l-.011.01-.012.011-.011.01-.011.01-.012.011c-.189.175-.368.36-.537.555a.5.5 0 1 0 .755.655c.375-.433.81-.811 1.292-1.121a.5.5 0 0 0-.272-.92zm-2.399 2.77a.5.5 0 0 0-.455.292 6.961 6.961 0 0 0-.56 1.913.5.5 0 1 0 .991.141 5.93 5.93 0 0 1 .479-1.638.5.5 0 0 0-.455-.708zm-.519 3.628A.5.5 0 0 0 1.071 9c.013.092.028.184.045.274l.003.016.003.015v.001l.001.007v.001l.001.007v.001l.001.007v.001l.001.007v.001l.001.007v.001a.03.03 0 0 1 .005.013v.001l.001.007.001.007v.002l.001.006v.002l.001.006v.002l.001.006V9.4l.001.006v.002l.001.006v.002l.001.006v.002l.001.005v.003l.001.005v.003l.001.005.001.003v.007l.001.006v.003l.001.004v.003l.001.006v.003l.001.004v.003l.001.005.001.004.001.004v.003l.001.004.001.005.001.004v.003l.001.004.001.005.001.004v.003l.001.003v.004l.001.006.001.003v.003l.001.004v.003l.001.007v.002l.001.004v.003l.001.006.001.003v.004l.001.003.001.007v.002l.001.004v.003a.03.03 0 0 0 .002.009l.001.004v.002l.003.014v.003l.001.004v.002l.002.007v.003l.001.004v.002l.001.007v.003c.021-.006.021-.005.021-.003l.001.002.003.014v.002a.325.325 0 0 1 .003.014v.002l.001.004v.001a.03.03 0 0 0 .002.009v.001l.001.005v.001l.002.009v.001l.001.005v.001c.005.001.006.005.006.008l.001.005v.001l.005.015v.001l.004.014v.001l.001.005v.001a.03.03 0 0 1 .002.009v.001l.001.005v.001l.004.015v.001l.004.014v.002l.004.015v.001l.004.015.001.005v.001a.02.02 0 0 1 .007.013v.001l.005.014v.001l.004.015v.001l.004.015.006.02v.001l.004.015v.001l.004.015v.001l.004.015.004.016.001.005c.005.004.006.009.008.014v.001l.004.015.004.015v.001l.005.015v.001l.001.005.005.016.005.015v.001l.005.015.005.016a.352.352 0 0 0 .017.051l.017.051.005.016.005.015c.074.215.158.424.252.629a.498.498 0 0 0 .662.244.499.499 0 0 0 .246-.662 5.969 5.969 0 0 1-.481-1.638.497.497 0 0 0-.493-.433zM3.09 11.76a.5.5 0 0 0-.378.827v.001a.012.012 0 0 0 .005.005v.001a.018.018 0 0 0 .004.005v.001l.005.006.005.005v.001l.005.006.005.005v.001a.1.1 0 0 0 .01.011v.001l.01.011v.001l.01.011.001.001a.1.1 0 0 0 .01.011v.001a.1.1 0 0 0 .01.011l.001.001a.1.1 0 0 0 .01.011v.001l.01.011.01.012a.052.052 0 0 0 .01.011v.001l.01.011v.001l.01.011.01.012.01.012.01.011c.395.422.841.794 1.33 1.108a.499.499 0 1 0 .541-.841 6.028 6.028 0 0 1-1.292-1.119.464.464 0 0 0-.372-.177zm3.083 1.979a.5.5 0 0 0-.141.98l.021.006.005.001.001.001a.074.074 0 0 1 .014.004h.001l.004.002.009.002.002.001.004.001.002.001.006.001.003.001.003.001.003.001.003.001.006.002h.003l.003.001.003.001.004.001.003.001.004.002h.003l.004.002h.002l.006.002.002.001.005.001h.002a.014.014 0 0 0 .006.002h.001l.006.002h.002a.014.014 0 0 0 .006.002l.007.002.001.001.006.001h.001l.007.002a.014.014 0 0 0 .006.002h.001l.014.004h.001l.007.002.015.004.014.004c.396.101.804.168 1.223.197l.015.002.023.001a.08.08 0 0 0 .016.001l.023.002.015.001.016.001h.007l.016.001.016.001h.007l.008.001h.008l.015.001h.017l.007.001h.016l.015.001h.008l.007.001h.025l.006.001h.023l.007.001h.037l.002.001H8a.5.5 0 0 0 0-1 6.016 6.016 0 0 1-1.686-.24.492.492 0 0 0-.141-.021zm5.347-.774a.5.5 0 0 0-.271.08 5.915 5.915 0 0 1-1.552.712.5.5 0 0 0 .28.959 6.963 6.963 0 0 0 1.815-.833.498.498 0 0 0-.272-.918zm2.398-2.773a.501.501 0 0 0-.455.293 5.997 5.997 0 0 1-.923 1.438.5.5 0 1 0 .756.654l.005-.006.005-.006.005-.006h.001l.004-.005.001-.001.005-.006.005-.005v-.001l.005-.006h.001l.004-.005.001-.002a.022.022 0 0 0 .004-.005l.001-.001.004-.004.001-.002.005-.005v-.001l.004-.004.002-.002.004-.005.001-.001.003-.004.002-.003.003-.003.002-.003.003-.004a.002.002 0 0 0 .002-.002l.003-.003.003-.003.003-.004.002-.002.002-.003.003-.004.003-.003.002-.003.002-.002.003-.004.003-.003.002-.003.002-.002.005-.006.001-.002.003-.003.001-.001a.106.106 0 0 1 .009-.011l.001-.002.009-.011.001-.001.01-.012.02-.024a7.28 7.28 0 0 0 .452-.634l.009-.014.008-.013.001-.001.007-.013.001-.001.003-.004v-.001l.005-.007.001-.002.002-.004.001-.001.004-.007.001-.001.002-.004.002-.002.003-.006.002-.002.002-.004.001-.002.004-.006.001-.002.002-.003.002-.003.003-.005.002-.003.001-.003.002-.003.003-.004.002-.004.002-.003.002-.003.001-.003.003-.005.002-.002.002-.004.002-.002.003-.006.001-.002.003-.004.001-.002.003-.006.001-.002.003-.004.001-.002.003-.006.001-.001.003-.005.001-.002.004-.006v-.001l.003-.005.001-.001.004-.006v-.001l.004-.006v-.001l.008-.013v-.001l.008-.013v-.001l.008-.013.008-.014.008-.014c.104-.182.198-.368.286-.559a.5.5 0 0 0-.248-.662.845.845 0 0 0-.215-.035zm.516-3.628a.5.5 0 0 0-.495.571 5.968 5.968 0 0 1 .001 1.712.501.501 0 0 0 .99.142c.008-.052.015-.104.021-.157v-.001l.001-.005.001-.009v-.001l.001-.004v-.006l.001-.006v-.003l.001-.003v-.003l.001-.004v-.002l.001-.006v-.007l.001-.002v-.012l.001-.006V8.75l.001-.006.001-.007v-.001l.001-.006v-.001l.001-.015c.016-.153.026-.307.031-.462h.001v-.015l.001-.023v-.023l.001-.015v-.024l.001-.015v-.046L15 8.079V7.922l-.001-.007v-.054l-.001-.001v-.044l-.001-.015v-.016l-.001-.007v-.017l-.001-.015v-.008l-.001-.016v-.016l-.001-.008v-.016a7.699 7.699 0 0 0-.033-.432l-.002-.023-.002-.015v-.001l-.002-.015v-.001l-.001-.006v-.002l-.001-.007v-.001l-.001-.006v-.002l-.001-.006v-.007l-.001-.002v-.005l-.001-.002v-.007l-.001-.002v-.004l-.001-.003v-.005l-.001-.004V7.12l-.001-.003v-.003l-.001-.003v-.005l-.001-.007v-.002l-.001-.004v-.001l-.001-.009v-.001l-.001-.005v-.001l-.002-.016-.01-.067a.499.499 0 0 0-.493-.429zm-1.529-3.329a.502.502 0 0 0-.377.828c.377.433.689.916.928 1.436a.5.5 0 0 0 .909-.416 6.223 6.223 0 0 0-.126-.26l-.007-.013-.001-.001-.002-.004-.005-.009v-.001l-.002-.004-.001-.001-.004-.008-.001-.001-.002-.004-.001-.001-.003-.007v-.003l-.002-.003-.001-.002-.004-.006-.001-.002-.002-.004-.001-.002-.003-.006-.001-.002-.002-.003-.002-.003-.002-.003a.008.008 0 0 0-.002-.004l-.002-.003-.001-.003-.002-.003-.003-.005-.001-.002-.002-.003-.001-.002-.003-.005-.002-.003-.002-.003-.001-.002-.003-.005-.001-.002a.008.008 0 0 1-.002-.004l-.002-.002-.003-.005-.001-.002a.008.008 0 0 0-.002-.004l-.001-.002-.003-.006-.001-.001-.003-.005-.001-.002-.003-.005-.001-.001-.003-.005-.001-.002-.003-.006-.003-.006-.001-.002-.004-.006-.003-.006-.001-.001-.007-.012-.001-.001-.007-.013-.001-.001-.007-.013-.008-.013-.008-.014-.008-.014a7.008 7.008 0 0 0-.663-.961h-.001a.106.106 0 0 0-.01-.012l-.01-.011-.005-.006-.005-.006-.005-.005-.005-.005-.001-.001-.004-.004-.001-.001a.022.022 0 0 1-.004-.005l-.001-.001c.003-.013.001-.014 0-.016l-.001-.002-.004-.004-.002-.002-.003-.003-.001-.002-.004-.005a.002.002 0 0 1-.002-.002l-.003-.003-.002-.002-.003-.004-.003-.003-.002-.002-.002-.003a.002.002 0 0 1-.002-.002l-.005-.005-.001-.002-.003-.003-.001-.001-.006-.006-.001-.001-.003-.003v-.001l-.006-.007h-.001l-.003-.004h-.001a.483.483 0 0 0-.389-.19zM9.82 1.258a.5.5 0 0 0-.138.98c.548.16 1.07.398 1.554.708a.501.501 0 0 0 .542-.841l-.057-.036-.014-.008a.091.091 0 0 1-.013-.008h-.001l-.013-.008h-.001l-.004-.002-.008-.004-.002-.001-.003-.002-.002-.001-.006-.003-.003-.001-.003-.002-.002-.001-.006-.003-.002-.001-.003-.002-.004-.002-.002-.001-.005-.003-.003-.001-.003-.002-.003-.001-.005-.003-.002-.001c-.001-.008-.002-.008-.003-.009l-.002-.001-.006-.003-.002-.001a.008.008 0 0 1-.004-.002l-.002-.001-.006-.003h-.001l-.005-.003-.002-.001-.005-.003-.002-.001a.008.008 0 0 0-.005-.002l-.001-.001-.013-.007-.001-.001-.012-.007-.002-.001-.006-.003-.006-.004h-.001l-.006-.003h-.001l-.006-.004h-.001l-.006-.003a.016.016 0 0 1-.007-.004l-.021-.012-.013-.007h-.001a6.935 6.935 0 0 0-1.502-.637.338.338 0 0 0-.137-.026zm2.321 6.743a.655.655 0 0 1-.668.643h-2.83v2.831a.655.655 0 0 1-.643.666.654.654 0 0 1-.643-.665V8.643h-2.83a.657.657 0 0 1-.668-.642.658.658 0 0 1 .67-.642h2.828V4.528c0-.37.289-.667.643-.668a.655.655 0 0 1 .643.667v2.832h2.83a.653.653 0 0 1 .668.642z"
  }));
};

module.exports.PlusLThin = function PlusLThin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M13.5 7H8V1.5a.5.5 0 0 0-1 0V7H1.5a.5.5 0 0 0 0 1H7v5.5a.5.5 0 0 0 1 0V8h5.5a.5.5 0 1 0 0-1z",
    "clip-rule": "evenodd"
  }));
};

module.exports.PlusL = function PlusL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M13 7H9V3a1 1 0 1 0-2 0v4H3a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0V9h4a1 1 0 1 0 0-2z"
  }));
};

module.exports.PlusO24 = function PlusO24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#231F20",
    d: "M11.93 22.742c-5.789 0-10.5-4.711-10.5-10.5 0-5.79 4.711-10.5 10.5-10.5s10.5 4.71 10.5 10.5a.5.5 0 0 1-1 0c0-5.238-4.262-9.5-9.5-9.5s-9.5 4.262-9.5 9.5 4.262 9.5 9.5 9.5c3.902 0 7.467-2.447 8.868-6.088a.5.5 0 0 1 .933.359c-1.548 4.025-5.487 6.729-9.801 6.729zm-.5-6.5v-3.5h-3.5a.5.5 0 0 1 0-1h3.5v-3.5a.5.5 0 1 1 1 0v3.5h3.5a.5.5 0 1 1 0 1h-3.5v3.5a.5.5 0 0 1-1 0z"
  }));
};

module.exports.PlusO = function PlusO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1zm-.001 13.012a6.012 6.012 0 1 1 .002-12.024A6.012 6.012 0 0 1 8 14.012zm4.142-6.011a.655.655 0 0 1-.668.643h-2.83v2.831a.655.655 0 0 1-.643.666.654.654 0 0 1-.643-.665V8.643h-2.83a.657.657 0 0 1-.668-.642.658.658 0 0 1 .67-.642h2.828V4.528c0-.37.289-.667.643-.668a.655.655 0 0 1 .643.667v2.832h2.83a.653.653 0 0 1 .668.642z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Plus = function Plus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1zm3.473 7.644-2.83-.001v2.831A.655.655 0 0 1 8 12.14a.654.654 0 0 1-.643-.665V8.643h-2.83a.657.657 0 0 1-.668-.642.658.658 0 0 1 .67-.642h2.828V4.528c0-.37.289-.667.643-.668a.655.655 0 0 1 .643.667v2.832h2.83a.655.655 0 0 1 .668.643.656.656 0 0 1-.668.642z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Pointer = function Pointer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14.574 5.703a1.097 1.097 0 0 0-.773-.314h-1.066c-.227-.587-.696-.784-.979-.798h-1.197c-.229-.662-.774-.914-1.098-.953l-.026-.004H8.21V1.336a1.212 1.212 0 0 0-.302-.857C7.623.161 7.184 0 6.602 0c-.568 0-1.009.157-1.309.469-.348.36-.364.792-.363.887V6.89c-.588-.594-1.142-.898-1.643-.898-1.289 0-1.48.749-1.48 1.195 0 .378.161.907.18.967l.017.056 3.69 5.899V16h7.536L15 11.384V6.9c0-.524-.143-.926-.426-1.197zm-.496 5.511-1.481 3.864h-5.98v-1.233L2.85 7.823c-.048-.166-.123-.47-.123-.636 0-.132.026-.156.034-.165.048-.049.214-.107.526-.107.462 0 1.243.83 1.627 1.392l.016-.01v1.537h.922v-8.48l-.001-.017c0-.001.009-.128.106-.229.118-.122.34-.187.645-.187.293 0 .512.058.613.165.068.07.074.16.076.188l-.003.008v5.49h.922V4.556h1.157c.074.02.377.13.377.719v1.498h.92v-1.26h1.069l-.031.001c.095.026.241.191.241.652v1.499h.921V6.31h.942l.02-.002s.062.015.11.061c.092.087.142.277.142.532v4.313z"
  }));
};

module.exports.PolarChart = function PolarChart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M8 1a7 7 0 1 0 .001 13.999A7 7 0 0 0 8 1zm5.984 6.5h-2.138a.972.972 0 0 0-.685-.467l-2.35-3.581A.968.968 0 0 0 9 2.9a.992.992 0 0 0-.564-.89 6.004 6.004 0 0 1 5.548 5.49zm-5.52 1.629A.975.975 0 0 0 8 9a.983.983 0 0 0-.435.109L5.988 8.058C5.989 8.038 6 8.021 6 8a.977.977 0 0 0-.134-.472L8.049 3.89c.006 0 .011-.003.018-.003L10.16 7.49A.97.97 0 0 0 10 8c0 .023.012.042.013.065L8.464 9.129zm-.9-7.119A.993.993 0 0 0 7 2.9c0 .194.07.365.166.519l-2.15 3.584C5.01 7.003 5.005 7 5 7a.986.986 0 0 0-.847.5H2.014a6.006 6.006 0 0 1 5.55-5.49zM2.014 8.5h2.14c.173.293.48.5.846.5a.983.983 0 0 0 .435-.109l1.577 1.052C7.01 9.963 7 9.979 7 10c0 .366.207.673.5.847v3.14A6.007 6.007 0 0 1 2.014 8.5zM8.5 13.986v-3.14c.293-.173.5-.48.5-.846 0-.018-.009-.031-.01-.049l1.672-1.02c.107.04.218.069.338.069a.987.987 0 0 0 .847-.5h2.138A6.004 6.004 0 0 1 8.5 13.986z"
  }));
};

module.exports.PositionBottom = function PositionBottom(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M2 9H1v1h1V9zm0-1H1V7h1v1zm0-2H1V5h1v1zm0-2H1V3h1v1zm12 6h-1V9h1v1zm0-2h-1V7h1v1zm0-2h-1V5h1v1zm0-2h-1V3h1v1zM8 2H7V1h1v1zM2 2H1V1h1v1zm12 0h-1V1h1v1zM4 2H3V1h1v1zm2 0H5V1h1v1zm4 0H9V1h1v1zm2 0h-1V1h1v1zm2 11.906H1v-2.812h13v2.812z"
  }));
};

module.exports.PositionLeft = function PositionLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M6 13v1H5v-1h1zm1 0v1h1v-1H7zm2 0v1h1v-1H9zm2 0v1h1v-1h-1zM5 1v1h1V1H5zm2 0v1h1V1H7zm2 0v1h1V1H9zm2 0v1h1V1h-1zm2 6v1h1V7h-1zm0 6v1h1v-1h-1zm0-12v1h1V1h-1zm0 10v1h1v-1h-1zm0-2v1h1V9h-1zm0-4v1h1V5h-1zm0-2v1h1V3h-1zM1.094 1v13h2.812V1H1.094z"
  }));
};

module.exports.PositionRight = function PositionRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M9 13v1h1v-1H9zm-1 0v1H7v-1h1zm-2 0v1H5v-1h1zm-2 0v1H3v-1h1zm6-12v1H9V1h1zM8 1v1H7V1h1zM6 1v1H5V1h1zM4 1v1H3V1h1zM2 7v1H1V7h1zm0 6v1H1v-1h1zM2 1v1H1V1h1zm0 10v1H1v-1h1zm0-2v1H1V9h1zm0-4v1H1V5h1zm0-2v1H1V3h1zm11.906-2v13h-2.812V1h2.812z"
  }));
};

module.exports.PositionTop = function PositionTop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M2 6H1V5h1v1zm0 1H1v1h1V7zm0 2H1v1h1V9zm0 2H1v1h1v-1zm12-6h-1v1h1V5zm0 2h-1v1h1V7zm0 2h-1v1h1V9zm0 2h-1v1h1v-1zm-6 2H7v1h1v-1zm-6 0H1v1h1v-1zm12 0h-1v1h1v-1zM4 13H3v1h1v-1zm2 0H5v1h1v-1zm4 0H9v1h1v-1zm2 0h-1v1h1v-1zm2-11.906H1v2.812h13V1.094z"
  }));
};

module.exports.Preview24 = function Preview24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M22.93 3.5a.5.5 0 0 1-.5.5H3.93v10.5c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1V6.514a.5.5 0 0 1 1 0V15c0 .879-1.121 2-2.5 2h-4.818l3.974 3.973a.5.5 0 0 1-.708.707L12.197 17h-.394l-4.681 4.68a.5.5 0 0 1-.707-.707L10.39 17H5.43a2.502 2.502 0 0 1-2.5-2.5V4h-1.5a.5.5 0 0 1 0-1h9.5V2h2v1h9.5a.5.5 0 0 1 .5.5zm-8.43 6-4.57-3v6l4.57-3z"
  }));
};

module.exports.Project24 = function Project24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M17.43 7h-11V6h11v1zm0 1.104h-11v1h11v-1zm3.5-2.535c0-1.378-1.121-2.5-2.5-2.5h-13a2.503 2.503 0 0 0-2.5 2.5v10.996h6.5v-.5c0-1.391 1.145-2.564 2.5-2.564 1.363 0 2.516 1.174 2.516 2.564v.5h6.484V5.569zm-9 6.931c-1.763 0-3.226 1.335-3.466 3.064H3.93V5.569c0-.827.673-1.5 1.5-1.5h13c.827 0 1.5.673 1.5 1.5v9.996h-4.521c-.248-1.706-1.741-3.065-3.479-3.065zm9 7v-1.125h-1V19.5c0 .827-.673 1.5-1.5 1.5h-13c-.827 0-1.5-.673-1.5-1.5v-1.375h-1V19.5c0 1.379 1.122 2.5 2.5 2.5h13c1.379 0 2.5-1.121 2.5-2.5zm-3.5-9.396h-11v1h11v-1z"
  }));
};

module.exports.PublishFail24 = function PublishFail24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    id: "XMLID_1_",
    d: "M11.9 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 9c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm1.8-5.1L12.6 12l1.1 1.1c.2.2.2.5 0 .7-.2.2-.5.2-.7 0l-1.1-1.1-1.1 1.1c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7l1.1-1.1-1.1-1.1c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l1.1 1.1 1.1-1.1c.2-.2.5-.2.7 0 .2.2.2.5 0 .7z",
    fillRule: "evenodd",
    "clip-rule": "evenodd",
    fill: "#020202"
  }));
};

module.exports.PublishL24 = function PublishL24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    d: "M12 18.9H4.8C2.4 18.9.5 17 .5 14.6c0-2.1 1.4-3.8 3.4-4.2.4-3.9 3.7-6.8 7.6-6.8 3 0 5.8 1.8 7 4.5 2.8.2 5 2.6 5 5.4 0 3-2.4 5.4-5.4 5.4H16c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2.1c2.4 0 4.4-2 4.4-4.4 0-2.4-1.9-4.4-4.3-4.4-.2 0-.4-.1-.4-.3-1-2.5-3.5-4.2-6.2-4.2-3.5 0-6.5 2.8-6.7 6.3 0 .2-.2.4-.4.5-1.7.2-2.9 1.6-2.9 3.3 0 1.8 1.5 3.3 3.3 3.3h7.2c.3 0 .5.2.5.5s-.3.4-.6.4z"
  }));
};

module.exports.PublishRun24 = function PublishRun24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    id: "XMLID_2_",
    d: "M12 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5c0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-2.2-1.8-4-4-4s-4 1.8-4 4 1.8 4 4 4c1.4 0 2.7-.7 3.4-1.9.1-.2.5-.3.7-.2.2.1.3.5.2.7-.9 1.5-2.5 2.4-4.3 2.4z",
    fill: "#231F20"
  }));
};

module.exports.PublishStop24 = function PublishStop24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    id: "XMLID_1_",
    d: "M13.2 10.7h-2.6v2.6h2.6v-2.6zm-1.3 8.2H4.7C2.3 18.9.4 17 .4 14.6c0-2.1 1.4-3.8 3.4-4.2.4-3.9 3.7-6.8 7.6-6.8 3 0 5.8 1.8 7 4.5 2.8.2 5 2.6 5 5.4 0 3-2.4 5.4-5.4 5.4h-2.1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5H18c2.4 0 4.4-2 4.4-4.4 0-2.4-1.9-4.4-4.3-4.4h-.3l-.1-.3c-1-2.5-3.5-4.2-6.2-4.2C8 4.6 5 7.4 4.8 10.9v.4h-.4c-1.7.2-2.9 1.6-2.9 3.3 0 1.8 1.5 3.3 3.3 3.3H12c.3 0 .5.2.5.5s-.3.5-.6.5zm0-1.9c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-9c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z",
    fill: "#231F20"
  }));
};

module.exports.PublishSuccess24 = function PublishSuccess24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    id: "XMLID_1_",
    d: "M12 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-9c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-.2 6.2c.2 0 .3-.1.4-.2l2.3-3.5c.2-.2.1-.5-.1-.7-.2-.2-.5-.1-.7.1l-1.9 2.9-1.1-1.3c-.2-.2-.5-.2-.7-.1-.2.2-.2.5-.1.7l1.6 1.8c0 .2.1.3.3.3z",
    fill: "#231F20"
  }));
};

module.exports.PublishWait24 = function PublishWait24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    id: "XMLID_1_",
    d: "M14.5 12.1c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5s.5.2.5.5v1.5H14c.2 0 .5.3.5.5zM17 12c0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5 5-2.2 5-5zm-1 0c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z",
    fillRule: "evenodd",
    "clip-rule": "evenodd",
    fill: "#020202"
  }));
};

module.exports.Publish = function Publish(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.953 1.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5zm6.028 11.986V5.752l2.4 2.401a.513.513 0 1 0 .726-.726L8.831 4.15c-.01-.01-.022-.013-.032-.021a.51.51 0 0 0-.135-.089.53.53 0 0 0-.175-.035c-.008 0-.013-.005-.021-.005-.012 0-.021.007-.032.007a.555.555 0 0 0-.165.032.52.52 0 0 0-.159.106l-.008.005-3.276 3.278a.51.51 0 0 0 0 .725c.201.2.525.2.726 0l2.401-2.401v7.734c0 .284.225.514.508.514s.518-.23.518-.514z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Query = function Query(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M2.691 12a.64.64 0 0 1-.488-.233.892.892 0 0 1 0-1.134L6.327 8 2.203 5.367a.892.892 0 0 1 0-1.134.629.629 0 0 1 .979 0l4.615 3.2a.891.891 0 0 1 0 1.133l-4.615 3.2a.648.648 0 0 1-.491.234zm10.791-6H9.518A.509.509 0 0 0 9 6.5c0 .275.23.5.52.5h3.963A.509.509 0 0 0 14 6.501.51.51 0 0 0 13.482 6zm0 3H9.518A.509.509 0 0 0 9 9.5c0 .275.23.5.52.5h3.963A.509.509 0 0 0 14 9.501.51.51 0 0 0 13.482 9z"
  }));
};

module.exports.RadarChart = function RadarChart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 .001 13.999A7 7 0 0 0 8 1zM4.293 6.513l1.404.514A2.483 2.483 0 0 0 5.5 8c0 1.127.754 2.07 1.78 2.382l-.409 1.437C5.216 11.329 4 9.814 4 8c0-.527.108-1.027.293-1.487zm3.719 1.431c.198.173.849.741 1.509 1.341a1.988 1.988 0 0 1-1.163.679l-.346-2.02zm-.01-.054L8 7.875l-.004.014-.051-.002.041.036-.569 1.98A1.993 1.993 0 0 1 6 8c0-.285.062-.555.169-.801l1.827.669s-.423-.703-.97-1.604C7.315 6.101 7.645 6 8 6c1.099 0 1.988.886 1.998 1.982L8.002 7.89zm.44 2.565a2.482 2.482 0 0 0 1.445-.833c.449.415.854.808 1.067 1.054a3.964 3.964 0 0 1-2.259 1.254l-.253-1.475zm3.55-2.379-1.493-.07L10.5 8c0-1.378-1.121-2.5-2.5-2.5-.45 0-.867.129-1.232.338l-.779-1.277A3.952 3.952 0 0 1 8 4a4 4 0 0 1 4 4c0 .026-.007.05-.008.076zM1.988 8c0-.77.15-1.503.414-2.18l1.143.418A4.764 4.764 0 0 0 3.2 8c0 2.177 1.465 3.998 3.454 4.584-.143.507-.259.926-.329 1.187A6.012 6.012 0 0 1 1.988 8zm7.047 5.916-.206-1.2C11.08 12.32 12.8 10.362 12.8 8c0-2.647-2.153-4.8-4.8-4.8-.89 0-1.714.26-2.429.684a91.871 91.871 0 0 0-.651-1.04A5.975 5.975 0 0 1 8 1.988a6.01 6.01 0 0 1 1.035 11.928z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Radius = function Radius(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("g", {
    fill: "#666666"
  }, React.createElement("path", {
    d: "M7.5 15.5c-.257 0-.51-.013-.76-.038l.1-.995A6.508 6.508 0 0 0 14 8l1-.091V8c0 4.136-3.364 7.5-7.5 7.5zm-3.726-.99A7.523 7.523 0 0 1 0 8c0-1.579.484-3.089 1.401-4.367l.812.583A6.459 6.459 0 0 0 1 8a6.52 6.52 0 0 0 3.271 5.643l-.497.867zm9.637-9.219A6.522 6.522 0 0 0 7.5 1.5c-1.161 0-2.3.31-3.293.895l-.508-.861A7.482 7.482 0 0 1 7.5.5c2.923 0 5.6 1.717 6.82 4.374l-.909.417z"
  }), React.createElement("circle", {
    cx: "7.5",
    cy: "8",
    r: "3",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  })));
};

module.exports.RealSize24 = function RealSize24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M19.43 19h-15a2.503 2.503 0 0 1-2.5-2.5v-11c0-1.378 1.122-2.5 2.5-2.5h15c1.379 0 2.5 1.122 2.5 2.5v11c0 1.379-1.121 2.5-2.5 2.5zm-15-15c-.827 0-1.5.673-1.5 1.5v11c0 .827.673 1.5 1.5 1.5h15c.827 0 1.5-.673 1.5-1.5v-11c0-.827-.673-1.5-1.5-1.5h-15zm3.5 11.006a.5.5 0 0 1-1 0v-8a.5.5 0 1 1 1 0v8zm9 0a.5.5 0 0 1-1 0v-8a.5.5 0 1 1 1 0v8zM11.93 8a1 1 0 1 0 0 2 1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2 1 1 0 1 0 0-2z"
  }));
};

module.exports.Redo1 = function Redo1(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M5.084 5.788a.474.474 0 0 1 .107-.012h7.057l-2.901-2.9a.514.514 0 0 1 .726-.726l3.777 3.776c.01.01.013.022.021.032a.532.532 0 0 1 .089.136.524.524 0 0 1 .035.174c0 .008.005.014.005.022 0 .012-.007.021-.007.032a.548.548 0 0 1-.032.164.52.52 0 0 1-.106.159l-.005.008-3.777 3.777a.51.51 0 0 1-.725 0 .515.515 0 0 1 0-.727l2.901-2.9H5.25c-.332.086-2.223.687-2.223 3.207 0 2.518 1.944 2.922 2.201 2.963H6.73a.514.514 0 0 1 0 1.027H5.191a.625.625 0 0 1-.062-.004C4.047 13.863 2 12.861 2 10.01c0-2.822 2.018-3.996 3.084-4.222z"
  }));
};

module.exports.Redo = function Redo(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M11.065 9.936c-.615.562-.755.646-.789-.404-.062-.768 0-1.618 0-1.618-.022-.048-1.351-.547-3.548.404-2.196.952-3.678 3.922-3.94 4.852-.021.537-.721 1.574-.788-.022-.009-2.604 1.008-5.33 3.599-6.893 2.416-1.457 4.426-1.309 4.647-1.232.004.021.01.029.021.016.003-.004-.006-.01-.021-.016-.019-.097.039-.598.045-1.54-.037-.846.189-.872.774-.421 1.071.88 3.934 3.615 3.934 3.615s-2.862 2.395-3.934 3.259z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Refresh = function Refresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "m15.814 7.667-2.32 2.32c-.119.118-.281.186-.449.186s-.328-.067-.449-.186l-2.318-2.32a.635.635 0 1 1 .898-.898l1.234 1.237V8a5.575 5.575 0 0 0-5.57-5.57C3.769 2.43 1.269 4.928 1.269 8s2.5 5.57 5.571 5.57a5.542 5.542 0 0 0 3.941-1.631.633.633 0 1 1 .896.896 6.789 6.789 0 0 1-4.837 2.004C3.068 14.838 0 11.771 0 8s3.068-6.84 6.84-6.84A6.847 6.847 0 0 1 13.68 8v.006l1.236-1.237a.635.635 0 1 1 .898.898z"
  }));
};

module.exports.Rename = function Rename(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8.5 12h-6a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3v5h5.5a.5.5 0 0 1 0 1zm-4-4a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm8 6H11V3h1.5a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1H10v11H8.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm1-9h-1a.5.5 0 0 0 0 1h.5v5h-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Report24 = function Report24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    id: "XMLID_1_",
    d: "M22.9 3.5c0 .3-.2.5-.5.5H3.9v10.5c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1V6.5c0-.3.2-.5.5-.5s.5.2.5.5V15c0 .9-1.1 2-2.5 2h-4.8l4 4c.2.2.2.5 0 .7-.2.2-.5.2-.7 0L12.2 17h-.4l-4.7 4.7c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7l4-4h-5c-1.4 0-2.5-1.1-2.5-2.5V4H1.4c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h9.5V2h2v1h9.5c.3 0 .5.2.5.5zm-6.1 3-2.8.6c-.2 0-.3.2-.4.3l-1.1 3.4-1.4-2.1c-.1-.2-.3-.2-.5-.2s-.3.2-.4.3l-.9 2.7-1-.9c-.1-.1-.3-.2-.5-.1-.2 0-.3.2-.4.3l-1.2 3.1c-.1.3 0 .5.3.6h.2c.2 0 .4-.1.5-.3l1-2.4 1 .9c.1.1.3.2.5.1.2 0 .3-.2.3-.3l.8-2.4 1.4 2.1c.1.2.3.2.5.2s.3-.2.4-.3L14.5 8l2.5-.5c.3-.1.4-.3.4-.6-.1-.3-.3-.4-.6-.4z",
    fill: "#020202"
  }));
};

module.exports.Report = function Report(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M3.233 15h-2v-2.334l2-1.609V15zm3.917-4.75L6.136 9.068l-.986.801V15h2v-4.75zm3.916-.787-2 1.865V15h2V9.463zm3.917-3.526-2 1.891V15h2V5.937zM14.733 4a.5.5 0 0 0-.767-.641l-5.25 4.987-2.597-2.551L1.2 9.84a.5.5 0 0 0 .599.801l4.286-3.51 2.647 2.62L14.733 4zm1.038 1.052.001-2.766a.507.507 0 0 0-.511-.512l-2.768.001a.497.497 0 0 0-.364.146.5.5 0 0 0-.15.366.5.5 0 0 0 .148.363l2.767 2.766c.1.1.22.149.363.149a.493.493 0 0 0 .365-.149.494.494 0 0 0 .149-.364z"
  }));
};

module.exports.Rerun24 = function Rerun24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "m7.916 8 6.668 4-6.668 4V8zm15.576 1.646a.5.5 0 0 0-.707 0l-1.812 1.812C20.688 5.92 16.105 1.5 10.5 1.5 4.711 1.5 0 6.209 0 12c0 5.79 4.711 10.5 10.5 10.5 4.314 0 8.253-2.705 9.802-6.729a.499.499 0 1 0-.932-.359c-1.401 3.641-4.967 6.088-8.868 6.088-5.238 0-9.5-4.262-9.5-9.5s4.262-9.5 9.5-9.5c5.065 0 9.205 3.988 9.476 8.987L18.121 9.63a.5.5 0 0 0-.707.707l2.695 2.695a.504.504 0 0 0 .708 0l2.681-2.68a.503.503 0 0 0-.006-.706z"
  }));
};

module.exports.Rerun = function Rerun(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "m15.814 7.667-2.32 2.32c-.119.118-.281.186-.449.186s-.328-.067-.449-.186l-2.318-2.32a.636.636 0 0 1 .898-.897l1.234 1.236V8a5.575 5.575 0 0 0-5.57-5.57C3.769 2.43 1.27 4.928 1.27 8s2.499 5.57 5.57 5.57a5.542 5.542 0 0 0 3.941-1.631.633.633 0 1 1 .896.896 6.789 6.789 0 0 1-4.837 2.004C3.068 14.838 0 11.771 0 8s3.068-6.84 6.84-6.84A6.847 6.847 0 0 1 13.68 8v.006l1.236-1.236a.635.635 0 0 1 .898.897zm-6.07.235-5-3v6l5-3z"
  }));
};

module.exports.RightJustified = function RightJustified(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M14 3.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .5.5zm0 3a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0 0 1h8a.5.5 0 0 0 .5-.5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Rmb = function Rmb(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M12.482 8A.507.507 0 0 0 13 7.5a.508.508 0 0 0-.518-.5H9v-.293l3.844-3.844a.51.51 0 0 0 .014-.72.51.51 0 0 0-.721.013L8.5 5.792 4.863 2.156a.509.509 0 0 0-.72-.013.508.508 0 0 0 .014.72L8 6.707V7H4.518A.509.509 0 0 0 4 7.5c0 .275.231.5.519.5H8v2H4.518a.51.51 0 0 0-.518.5c0 .275.231.5.519.5H8v2.482c0 .286.223.518.5.518a.51.51 0 0 0 .5-.518V11h3.482a.508.508 0 0 0 .518-.5.509.509 0 0 0-.518-.5H9V8h3.482z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Rocket = function Rocket(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M13.104 11.994v.271l-3.146-.634c-.203.679-1.018 1.199-1.968 1.199-.951 0-1.766-.521-1.969-1.222l-3.123.611v-.271c0-1.539.43-2.648 1.402-3.576-.34-4.39 1.629-7.173 3.575-8.305L7.989 0l.113.067c1.947 1.132 3.892 3.915 3.576 8.306.996.928 1.426 2.037 1.426 3.621zm-4.12-5.476a1.464 1.464 0 0 0 .09-2.06 1.463 1.463 0 0 0-2.059-.091 1.464 1.464 0 0 0-.09 2.06 1.462 1.462 0 0 0 2.059.091zm-.259 7.807C8.725 14.981 8 16 8 16s-.724-1.087-.724-1.675c0-.498.316-.905.724-.905s.725.407.725.905z"
  }));
};

module.exports.RunFrom = function RunFrom(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    id: "XMLID_1_",
    d: "M2.5 14c-.3 0-.5-.2-.5-.5v-11c0-.3.2-.5.5-.5s.5.2.5.5v11c0 .3-.2.5-.5.5zm10.2-6L6 4v8l6.7-4z",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }));
};

module.exports.RunNode = function RunNode(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    id: "XMLID_1_",
    d: "M5 11.1v-6l5 3-5 3zM10 4c2.2 0 4 1.8 4 4s-1.8 4-4 4H6c-2.2 0-4-1.8-4-4s1.8-4 4-4h4m0-1H6C3.2 3 1 5.2 1 8s2.2 5 5 5h4c2.8 0 5-2.2 5-5s-2.2-5-5-5z",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }));
};

module.exports.RunO24 = function RunO24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#231F20",
    d: "M11.93 22c-5.789 0-10.5-4.711-10.5-10.5C1.43 5.71 6.141 1 11.93 1s10.5 4.71 10.5 10.5a.5.5 0 0 1-1 0c0-5.238-4.262-9.5-9.5-9.5s-9.5 4.262-9.5 9.5 4.262 9.5 9.5 9.5c3.902 0 7.467-2.446 8.868-6.087a.5.5 0 0 1 .933.359C20.183 19.297 16.244 22 11.93 22zm-2.584-6.5v-8l6.668 4-6.668 4z"
  }));
};

module.exports.RunStop = function RunStop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    id: "XMLID_1_",
    d: "M9.7 8 3 4v8l6.7-4zm3.5 6c-.3 0-.5-.2-.5-.5v-11c0-.3.2-.5.5-.5s.5.2.5.5v11c0 .3-.3.5-.5.5z",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }));
};

module.exports.Run = function Run(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1zM6 11V5l5 3-5 3z",
    "clip-rule": "evenodd"
  }));
};

module.exports.S = function S(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M14 2v12H2V2h12m0-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
  }));
};

module.exports.Save24 = function Save24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M19 12.5a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1 0-1h12a.5.5 0 0 1 .5.5zm-.5 2.5h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm0 3h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zM23 5v3.199a.5.5 0 0 1-1 0V5.414L19.586 3H19v4c0 .878-1.121 2-2.5 2h-8A2.503 2.503 0 0 1 6 6.5V3H4.5C3.673 3 3 3.673 3 4.5v15c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1v-6.837a.5.5 0 0 1 1 0v6.865h-.004C22.973 20.902 21.864 22 20.5 22h-16A2.503 2.503 0 0 1 2 19.5v-15C2 3.122 3.122 2 4.5 2H20l3 3zm-5-2h-3v3h-3V3H7v3.5C7 7.327 7.673 8 8.5 8h8c.827 0 1.5-.673 1.5-1V3z"
  }));
};

module.exports.SaveAs24 = function SaveAs24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M5.93 12.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm12.5 2.5h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm0 3h-12a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm4-5.337a.5.5 0 0 0-.5.5V20c0 .327-.673 1-1.5 1h-16c-.827 0-1.5-.673-1.5-1.5v-15c0-.827.673-1.5 1.5-1.5h1.5v3.5c0 1.378 1.121 2.5 2.5 2.5h12.748v.016l-1.854 1.854a.512.512 0 1 0 .724.726l2.73-2.729.004-.008a.518.518 0 0 0 .107-.159.55.55 0 0 0 .033-.164c0-.012.006-.021.006-.032 0-.008-.004-.014-.004-.021a.612.612 0 0 0-.035-.174.536.536 0 0 0-.09-.136c-.008-.01-.012-.022-.021-.032l-2.75-2.748a.511.511 0 0 0-.725 0 .511.511 0 0 0 0 .725l1.873 1.873V8H8.43c-.827 0-1.5-.673-1.5-1.5V3h6v3h3a.5.5 0 0 0 .5-.5V4c0-.818-.977-1.835-2.223-1.973V2H4.43a2.503 2.503 0 0 0-2.5 2.5v15c0 1.379 1.122 2.5 2.5 2.5h16c1.364 0 2.473-1.098 2.496-1.972h.004v-6.865a.5.5 0 0 0-.5-.5z"
  }));
};

module.exports.SaveAs = function SaveAs(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M11 8.5c0 .3-.2.5-.5.5h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5zm1 2c0-.3-.2-.5-.5-.5h-7c-.3 0-.5.2-.5.5s.2.5.5.5h7c.3 0 .5-.2.5-.5zm0 2c0-.3-.2-.5-.5-.5h-7c-.3 0-.5.2-.5.5s.2.5.5.5h7c.3 0 .5-.2.5-.5zm2.5-2.5c-.3 0-.5.2-.5.5v3c0 .3-.2.5-.5.5h-11c-.3 0-.5-.2-.5-.5v-11c0-.3.2-.5.5-.5H4v3.5C4 6.3 4.7 7 5.5 7h7.8l-1.1 1.1c-.2.2-.2.5 0 .7.2.2.5.2.7 0l2-2c.1 0 .1-.1.1-.3 0-.1-.1-.3-.2-.4l-2-2c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7L13.2 6H5.5c-.3 0-.5-.2-.5-.5V2h2v2h3V1.5c0-.3-.2-.5-.5-.5h-7C1.7 1 1 1.7 1 2.5v11c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-3c0-.3-.2-.5-.5-.5z",
    fillRule: "evenodd",
    "clip-rule": "evenodd",
    fill: "#020202"
  }));
};

module.exports.Save = function Save(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M12.2 1H2.5C1.6 1 1 1.7 1 2.5v11c0 .8.6 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5V3.3L12.2 1zM5 2h1.5v2h3V2H11v3.5c0 .3-.3.5-.5.5h-5c-.3 0-.5-.2-.5-.5V2zm9 11.5c0 .3-.2.5-.5.5h-11c-.3 0-.5-.2-.5-.5v-11c0-.3.2-.5.5-.5H4v3.5C4 6.3 4.6 7 5.5 7h5c.8 0 1.5-.7 1.5-1.5V2l2 1.7v9.8zm-2-5c0 .3-.3.5-.5.5h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.2 0 .5.2.5.5zm0 2c0 .3-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.2 0 .5.2.5.5zm0 2c0 .3-.2.5-.5.5h-7c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h7c.2 0 .5.2.5.5z"
  }));
};

module.exports.Schema = function Schema(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M13.808 3.213a.416.416 0 0 0-.244-.093L7.603 1.017a.395.395 0 0 0-.226 0L1.416 3.12a.398.398 0 0 0-.231.093.54.54 0 0 0-.185.395v8.109c0 .229.149.428.344.484l5.975 2.031a.386.386 0 0 0 .054.019l.018.006a.416.416 0 0 0 .225 0l.024-.008.029-.011 5.986-2.037a.5.5 0 0 0 .345-.483v-8.11a.55.55 0 0 0-.192-.395zM7.489 2.018l4.444 1.622-4.435 1.546-2.864-.996-1.509-.534 4.364-1.638zM2 4.305l2.893 1.021L7 6.103v7.026L2 11.33V4.305zm6 8.824V6.103l2.562-.945L13 4.297v7.033l-5 1.799z"
  }));
};

module.exports.Script = function Script(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m10.372 3.315.065.018a.498.498 0 0 1 .3.727c-.299.522-.601 1.042-.902 1.562l-3.648 6.321a.56.56 0 0 1-.191.21.612.612 0 0 1-.175.068.094.094 0 0 0-.023.01h-.129a.45.45 0 0 0-.048-.016.5.5 0 0 1-.325-.735l2.698-4.673c.619-1.073 1.239-2.145 1.857-3.218a.515.515 0 0 1 .249-.232c.037-.015.076-.023.115-.034l.019-.008h.138z"
  }), React.createElement("path", {
    d: "M1.001 7.76c.006-.013.014-.025.017-.038a.506.506 0 0 1 .14-.251c.869-.869 1.738-1.739 2.608-2.607a.475.475 0 0 1 .51-.122c.193.062.308.2.34.4a.48.48 0 0 1-.142.432l-1.811 1.81-.504.505-.025.026a.555.555 0 0 0 .032.035l2.307 2.307a.5.5 0 0 1-.219.84.479.479 0 0 1-.487-.128c-.163-.161-.324-.324-.486-.486a2090.79 2090.79 0 0 0-2.106-2.106.529.529 0 0 1-.159-.278c-.002-.01-.01-.02-.015-.029v-.31z"
  }), React.createElement("path", {
    d: "m14.98 8.095-.015.052a.495.495 0 0 1-.125.208l-.88.883-.297.299-1.044 1.047c-.128.129-.254.26-.385.387a.48.48 0 0 1-.512.118.475.475 0 0 1-.337-.407.48.48 0 0 1 .146-.426l1.14-1.145.98-.984.212-.208-.032-.034-.509-.512-1.317-1.321c-.161-.161-.324-.321-.482-.485a.477.477 0 0 1-.121-.496.478.478 0 0 1 .376-.345.483.483 0 0 1 .464.141l1.05 1.054 1.168 1.172.385.387a.435.435 0 0 1 .127.243c.001.004.005.007.007.01l.001.362z"
  }));
};

module.exports.Search24 = function Search24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "m21.176 21.217-4.933-5.798-.001-.001c-.016-.025-.025-.053-.045-.074a.5.5 0 0 0-.707-.031 7.185 7.185 0 0 1-4.86 1.888c-3.97 0-7.2-3.229-7.2-7.2 0-3.97 3.23-7.2 7.2-7.2s7.2 3.23 7.2 7.2c0 .923-.172 1.823-.512 2.673a.497.497 0 0 0 .278.649.498.498 0 0 0 .649-.278 8.15 8.15 0 0 0 .584-3.044c0-4.521-3.679-8.2-8.2-8.2s-8.2 3.679-8.2 8.2 3.679 8.2 8.2 8.2a8.175 8.175 0 0 0 5.126-1.81l4.658 5.475a.502.502 0 0 0 .763-.649z"
  }));
};

module.exports.Search = function Search(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "m13.676 13.373-2.938-3.368a5.5 5.5 0 1 0-1.185 1.069l2.92 3.348a.798.798 0 0 0 1.203-1.049zM2.5 6.5c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Selected = function Selected(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M7.563 12a.703.703 0 0 1-.557-.276L4.142 8.155a.698.698 0 0 1 1.111-.842l2.254 2.761L11.4 3.763a.696.696 0 1 1 1.182.737l-4.426 7.171a.701.701 0 0 1-.593.329z"
  }));
};

module.exports.SeparateCell = function SeparateCell(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "m3.093 7.28 2.375-2.188c.062-.061.136-.092.22-.092s.157.031.22.093A.3.3 0 0 1 6 5.312V7h1.5a.5.5 0 0 1 0 1H6v1.688c0 .084-.03.158-.093.22-.062.062-.136.092-.219.092s-.158-.03-.22-.093L3.093 7.72C3.031 7.658 3 7.584 3 7.5s.031-.157.093-.22zm10.814 0-2.375-2.188c-.062-.061-.136-.092-.22-.092s-.157.031-.22.093a.3.3 0 0 0-.092.219V7H9.5a.5.5 0 0 0 0 1H11v1.688c0 .084.03.158.093.22.062.062.136.092.219.092s.157-.03.22-.093l2.375-2.188a.303.303 0 0 0 0-.439zM7 2v2h1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2H7v2H2V2h5m3 0h5v11h-5v-2H9v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v2h1V2",
    "clip-rule": "evenodd"
  }));
};

module.exports.Separators = function Separators(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.958 6.501a2.5 2.5 0 1 0-5 0 2.501 2.501 0 0 0 2.5 2.501c.162 0 .318-.019.471-.048-.424 1.228-1.38 1.553-2.6 1.88l.463.666c3.567-.634 4.206-4.195 4.167-4.164.093-.263-.001-.541-.001-.835z",
    "clip-rule": "evenodd"
  }));
};

module.exports.SequenceHAZ = function SequenceHAZ(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M7.001 2h1v1h1v1h1v1h-1v1h-1v1h-1V5h-4V4h4V2zm4 0v11h3V2h-3zm-1 6v5h-3V8h3zm-4 2v3h-3v-3h3z"
  }));
};

module.exports.SequenceHZA = function SequenceHZA(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M10.001 2h-1v1h-1v1h-1v1h1v1h1v1h1V5h4V4h-4V2zm-4 0v11h-3V2h3zm1 6v5h3V8h-3zm4 2v3h3v-3h-3z"
  }));
};

module.exports.SequenceH = function SequenceH(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14 2v11h-3V2h3zM7 8v5h3V8H7zm-4 2v3h3v-3H3z"
  }));
};

module.exports.SequenceVAZ = function SequenceVAZ(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14 6v1h-1v1h-1v1h-1V8h-1V7H9V6h2V2h1v4h2zm0 4H3v3h11v-3zM8 9H3V6h5v3zM6 5H3V2h3v3z"
  }));
};

module.exports.SequenceVZA = function SequenceVZA(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14 9V8h-1V7h-1V6h-1v1h-1v1H9v1h2v4h1V9h2zm0-4H3V2h11v3zM8 6H3v3h5V6zm-2 4H3v3h3v-3z"
  }));
};

module.exports.SequenceV = function SequenceV(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14 13H3v-3h11v3zM8 6H3v3h5V6zM6 2H3v3h3V2z"
  }));
};

module.exports.Setting24 = function Setting24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    id: "图层_1",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24",
    "enable-background": "new 0 0 24 24"
  }), React.createElement("path", {
    id: "XMLID_1_",
    d: "M13.4 2c.1 0 .2.1.2.3 0 0 .1.8.5 1.5.7 1.2 2 1.9 3.4 1.9.7 0 1.4-.2 1.9-.5l.2.2s.8.9 1.2 1.6c.3.6.7 1.4.8 1.8V9c-1.9 1.1-2.5 3.5-1.4 5.3.3.6.9 1 1 1.1.1.1.1.2.1.4l-1.6 2.7-.1.1c-.1 0-.2.1-.2.1h-.1c-.4-.1-1.2-.3-1.9-.3-.6 0-1.2.1-1.6.4-1.3.8-1.8 2.9-1.8 3 0 .1-.1.2-.2.3h-3.1c-.1 0-.2-.1-.3-.3 0-.1-.1-.9-.5-1.5-.7-1.2-2-1.9-3.4-1.9-.7 0-1.4.2-1.9.5l-.2-.2s-.8-.9-1.2-1.6c-.4-.7-.8-1.8-.8-1.8v-.2c1.9-1.1 2.5-3.5 1.4-5.3-.4-.6-1-1.1-1-1.1-.1-.2-.2-.4-.1-.5l1.6-2.7.1-.1c.1 0 .2-.1.3-.1h.1c.4.1 1.1.2 1.8.2s1.2-.1 1.6-.4c1.2-.6 1.7-2.5 1.8-2.7 0-.1.1-.2.2-.3h.1l3.1-.1m0-1-3.2.1c-.2 0-.4.1-.5.2-.4.1-.6.5-.7.8-.1.5-.6 1.8-1.3 2.3-.4.1-.8.2-1.2.2-.6 0-1.2-.1-1.5-.2-.1 0-.2-.1-.4-.1-.3 0-.5.1-.8.2-.1.1-.2.3-.3.4L1.8 7.7c-.3.6-.1 1.3.4 1.6 0 0 .5.4.8.8.8 1.4.3 3.2-1.1 3.9h-.1c-.4.2-.5.8-.3 1.4 0 0 .4 1.2.9 2s1.3 1.7 1.3 1.8c.3.3.6.5 1 .5.1 0 .3 0 .4-.1h.1c.5-.3 1-.4 1.4-.4 1 0 2 .5 2.5 1.4.3.5.3 1.1.3 1.1.1.6.6 1.1 1.2 1.1h3.1c.2 0 .4-.1.5-.2.3-.2.6-.5.7-.9.1-.5.6-1.9 1.3-2.3.3-.2.7-.2 1.1-.2.6 0 1.3.2 1.6.2.1 0 .3.1.4.1.3 0 .5-.1.7-.2.2-.1.3-.2.4-.4l1.7-2.8c.3-.5.1-1.2-.4-1.6 0 0-.5-.4-.8-.8-.8-1.4-.3-3.2 1.1-3.9h.1c.4-.2.5-.8.3-1.4 0 0-.4-1.2-.9-2s-1.3-1.7-1.3-1.8c-.3-.3-.6-.5-1-.5-.1 0-.3 0-.4.1h-.1c-.5.3-1 .4-1.4.4-1 0-2-.5-2.5-1.4-.3-.5-.3-1.1-.3-1.1.1-.5-.5-1-1.1-1.1zm1.8 13.9c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0-.6.7-1.6 1.2-2.5 1.2-1.8 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4c0 .3.2.5.5.5s.5-.2.5-.5c0-2.4-2-4.4-4.4-4.4-2.4 0-4.4 2-4.4 4.4 0 2.4 2 4.4 4.4 4.4 1.2 0 2.4-.6 3.2-1.5z",
    fill: "#272636"
  }));
};

module.exports.Setting = function Setting(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M14.7 6.6c.3-.2.4-.5.3-1 0 0-.3-.8-.6-1.3s-.8-1.2-.9-1.2c-.3-.3-.6-.4-.9-.3h-.1c-.9.5-2.1.2-2.6-.7-.1-.2-.2-.7-.2-.7 0-.4-.3-.7-.7-.7H6.9c-.1 0-.2.1-.3.1-.4.2-.5.4-.6.6-.1.3-.4 1.2-.9 1.5-.5.3-1.4.1-1.7 0-.3 0-.6 0-.8.1l-.3.3-1.1 1.9c-.2.3-.1.8.2 1 0 0 .3.3.5.6.5.9.2 2.1-.7 2.6h-.1c-.2.2-.3.6-.1 1 0 0 .3.8.6 1.3s.8 1.2.9 1.2c.3.3.6.4.9.3h.1c.9-.5 2.1-.2 2.6.7.2.3.2.7.2.7 0 .4.4.7.8.8h2.1c.1 0 .2-.1.3-.1.2-.1.4-.4.5-.6.1-.3.4-1.3.9-1.5.5-.3 1.5-.1 1.8 0 .2.1.5 0 .8-.1.1-.1.2-.1.3-.2l1.1-1.8c.2-.4.1-.8-.3-1.1 0 0-.3-.3-.5-.6-.6-1.1-.3-2.3.6-2.8zm-5.2 4c-1.4.8-3.3.3-4.1-1.1-.8-1.4-.3-3.3 1.1-4.1s3.3-.3 4.1 1.1c.8 1.4.3 3.3-1.1 4.1z"
  }));
};

module.exports.Shape = function Shape(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M13 5.275V1.667A.667.667 0 0 0 12.334 1H1.667A.666.666 0 0 0 1 1.667v10.667c0 .368.298.666.667.666h3.929a5.496 5.496 0 0 0 4.603 2.5c3.033 0 5.5-2.468 5.5-5.5A5.497 5.497 0 0 0 13 5.275zM2 12V2h10v2.809a5.463 5.463 0 0 0-1.801-.309A5.506 5.506 0 0 0 4.7 10c0 .706.139 1.379.382 2H2zm8.199 2.5C7.719 14.5 5.7 12.481 5.7 10s2.019-4.5 4.499-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5z"
  }));
};

module.exports.ShareFrom = function ShareFrom(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#231F20",
    d: "M11.5 9c-.798 0-1.5.381-1.957.962L6.906 8.644C6.961 8.437 7 8.224 7 8s-.039-.437-.094-.644l2.637-1.318A2.482 2.482 0 0 0 11.5 7 2.5 2.5 0 1 0 9 4.5c0 .224.039.437.094.644L6.458 6.462A2.485 2.485 0 0 0 4.5 5.5a2.5 2.5 0 1 0 0 5c.798 0 1.5-.381 1.958-.962l2.636 1.318c-.055.206-.094.42-.094.644A2.5 2.5 0 1 0 11.5 9zm0-6c.827 0 1.5.673 1.5 1.5S12.327 6 11.5 6 10 5.327 10 4.5 10.673 3 11.5 3zm-7 6.5C3.673 9.5 3 8.827 3 8s.673-1.5 1.5-1.5S6 7.173 6 8s-.673 1.5-1.5 1.5zm7 3.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"
  }));
};

module.exports.Share = function Share(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14 5v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5h2.552c1.138 0 1.138 1 0 1H4v8h9V6h-1.484c-1.138 0-1.138-1 0-1H14zm-3.15-1.771L8.821 1.15l-.008-.004c-.044-.045-.149-.082-.208-.107-.053-.021-.009-.029-.064-.033-.012 0-.021-.006-.032-.006-.008 0-.014.004-.022.004a.411.411 0 0 0-.146.035.54.54 0 0 0-.135.09c-.01.008-.023.012-.032.021L6.097 3.229c-.201.2-.109.525.092.725.2.201.525.201.726 0l1.109-1.201.001 6.714c0 .293.2.531.483.53.283.001.464-.237.464-.531V2.752l1.243 1.201a.514.514 0 0 0 .727 0c.1-.1.059-.23.059-.362s-.052-.263-.151-.362z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Sheet1 = function Sheet1(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M13.562 14H1.438A.44.44 0 0 1 1 13.562V1.438C1 1.197 1.197 1 1.487 1h9.537L14 4v9.562a.44.44 0 0 1-.438.438zM11 2v2h2l-2-2zm2 3h-2.976V2H2v11h11V5zM4 4H3v1h1V4zm4 .5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5zM4 7H3v1h1V7zm7 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zM4 10H3v1h1v-1zm7 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
  }));
};

module.exports.Sheet4 = function Sheet4(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M11.024 1H1.487C1.197 1 1 1.197 1 1.438v12.125c0 .24.197.437.438.437h12.125c.24 0 .437-.197.437-.438V4l-2.976-3zM7 8v2H5V8h2zM5 7V5h2v2H5zm3 1h2v2H8V8zm0-1V5h2v2H8zm2-5v2H8V2h2zM7 2v2H5V2h2zM2 2h2v2H2V2zm0 3h2v2H2V5zm0 3h2v2H2V8zm0 5v-2h2v2H2zm3 0v-2h2v2H5zm3 0v-2h2v2H8zm5 0h-2v-2h2v2zm0-3h-2V8h2v2zm0-3h-2V5h2v2zm-2-3V2l2 2h-2z"
  }));
};

module.exports.Slash = function Slash(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5 1h10c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5h-10c-.827 0-1.5-.673-1.5-1.5v-10C1 1.673 1.673 1 2.5 1zm10 1H2.707L13 12.293V2.5c0-.275-.225-.5-.5-.5zm-10 11h9.793L2 2.707V12.5c0 .275.225.5.5.5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.SliderPlay = function SliderPlay(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "m8.209 12.533 3.5 2.338a.568.568 0 1 0 .642-.938l-3.114-1.991h4.17a.568.568 0 0 0 .568-.568v-8.42h.41c.314 0 .568-.154.568-.469 0-.313-.254-.469-.568-.469H8.971v-.421c-.002-.331-.034-.469-.32-.568-.261-.061-1.026 0-1.198 0-.313 0-.419.254-.419.567v.421H1.568c-.312.001-.568.156-.568.469 0 .314.256.469.568.469h.46v8.42c0 .314.254.568.568.568h4.476l-3.163 1.991a.57.57 0 0 0 .322 1.038c.11 0 .222-.032.319-.1l3.659-2.337zm4.795-1.379H2.966V2.953h10.038v8.201z"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M7 8.77 9.875 7 7 5.23z"
  }));
};

module.exports.Slider = function Slider(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "m8.256 12.562 3.5 2.338a.568.568 0 1 0 .642-.938l-3.114-1.991h4.17a.55.55 0 0 0 .547-.568v-8.42h.41c.314 0 .568-.154.568-.469 0-.313-.254-.468-.568-.468H9v-.422c-.002-.331-.034-.469-.319-.568-.261-.06-1.026 0-1.198 0-.313 0-.419.254-.419.568v.421H1.568c-.312 0-.568.155-.568.469 0 .314.256.469.568.469h.46v8.42c0 .314.254.568.568.568h4.522l-3.163 1.991A.57.57 0 0 0 4.277 15c.11 0 .222-.032.319-.1l3.66-2.338zM13.038 11H3V2.982h10.038V11zM11 8.676c0 .179.146.324.324.324h.352A.324.324 0 0 0 12 8.676V5.434a.324.324 0 0 0-.324-.325h-.352a.325.325 0 0 0-.324.325v3.242zM9 7.361v1.314c0 .18.146.325.326.325h.349A.325.325 0 0 0 10 8.676V7.361a.325.325 0 0 0-.325-.325h-.349A.326.326 0 0 0 9 7.361zM5.857 9C4.868 9 4 8.115 4 7.108c0-.988.757-1.823 1.708-1.823a.14.14 0 0 1 .14.144v1.529c0 .14.152.151.152.151h1.571c.08 0 .145.061.145.141 0 .951-.852 1.75-1.859 1.75zm2.257-2.407H6.537a.131.131 0 0 1-.132-.132V4.885c0-.074.06-.134.134-.134 1.007 0 1.71.702 1.71 1.709a.134.134 0 0 1-.135.133z"
  }));
};

module.exports.SortAZ = function SortAZ(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "m14.564 12-2.797 2.85-.008.005c-.045.045-.15.081-.209.106-.053.021-.01.029-.064.033-.012 0-.021.006-.031.006-.008 0-.014-.004-.021-.004-.061-.003-.09-.014-.146-.035a.514.514 0 0 1-.135-.09c-.01-.008-.023-.012-.033-.021L8.112 12c-.201-.2-.109-.525.093-.725a.511.511 0 0 1 .725 0L11 13.248l.002-10.718c0-.293.199-.531.482-.53.283-.001.434.237.434.531v10.717l2.012-1.973a.514.514 0 0 1 .727 0c.1.1.059.23.059.362s-.052.263-.152.363zM5.791 7.018l.479 1.003a.9.9 0 0 0 .23.311c.1.086.253.127.46.121.1 0 .193-.014.28-.041a.544.544 0 0 0 .215-.121.348.348 0 0 0 .105-.203.595.595 0 0 0-.04-.292L5.44 2.369a.531.531 0 0 0-.215-.257A.782.782 0 0 0 4.781 2a.79.79 0 0 0-.446.112.527.527 0 0 0-.215.257L2.06 7.777c-.093.246-.078.42.045.523.124.102.289.153.495.153.207 0 .363-.044.471-.131a.885.885 0 0 0 .25-.345l.439-.959h2.031zM4.01 6l.771-2 .77 2H4.01zm-1.059 4a.635.635 0 0 0-.36.107c-.106.072-.159.191-.159.356 0 .171.057.291.17.36s.229.104.35.104h2.62l-3.38 3.504c-.073.091-.11.174-.11.248 0 .08.047.154.141.221.091.067.201.1.327.1h4.211a.67.67 0 0 0 .35-.104c.113-.07.17-.189.17-.36 0-.165-.054-.284-.16-.356s-.227-.107-.359-.107h-2.86l3.39-3.504c.094-.117.141-.217.141-.297 0-.063-.044-.125-.131-.184A.509.509 0 0 0 7.011 10h-4.06z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Sort = function Sort(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M13 9.25a.603.603 0 0 1-.186.439l-4.375 4.375A.6.6 0 0 1 8 14.25a.596.596 0 0 1-.439-.186L3.186 9.689A.6.6 0 0 1 3 9.25a.6.6 0 0 1 .186-.439.596.596 0 0 1 .439-.186h8.75a.6.6 0 0 1 .439.186.603.603 0 0 1 .186.439zM13 6a.603.603 0 0 1-.186.439.6.6 0 0 1-.439.186h-8.75a.596.596 0 0 1-.439-.186A.6.6 0 0 1 3 6a.6.6 0 0 1 .186-.439l4.375-4.375A.6.6 0 0 1 8 1c.168 0 .314.062.439.186l4.375 4.375A.603.603 0 0 1 13 6z"
  }));
};

module.exports.Sql = function Sql(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M3.5 5.7c-.3-.2-.6-.3-1-.3H2c-.2 0-.2.2-.4.3-.1.1-.2.2-.2.3-.1.1-.2.3-.2.4 0 .2.1.3.2.4s.2.2.4.3c.2.1.4.2.6.2.2 0 .4.1.7.1.2.1.4.1.7.2.2.1.4.2.5.3.2.1.3.3.4.5.1.2.2.4.2.7 0 .3-.1.6-.2.8-.1.2-.3.4-.5.5-.2.1-.5.2-.7.3-.3.1-.5.1-.8.1-.3 0-.6 0-.9-.1-.3-.1-.5-.2-.8-.4-.2-.1-.4-.3-.5-.6-.1-.3-.2-.6-.2-.9H1c0 .2 0 .4.1.6.1.2.2.3.4.4s.3.2.5.2c.2.1.4.1.6.1h.5c.2 0 .4-.1.6-.1s.2-.2.3-.4c.1-.1.1-.3.1-.5s-.1-.4-.2-.5c0-.1-.2-.2-.3-.2s-.4-.2-.6-.2-.5-.1-.7-.2c-.2 0-.4-.1-.7-.2s-.4-.1-.5-.2-.4-.3-.5-.4C.5 7 .5 6.8.5 6.5c0-.3.1-.5.2-.7s.3-.4.5-.5c.1-.2.3-.3.6-.4.2 0 .5-.1.8-.1.3 0 .6 0 .8.1.2.1.4.2.6.4s.3.3.4.6c.1.2.2.5.2.8h-.7c0-.5-.1-.8-.4-1z"
  }), React.createElement("path", {
    d: "M9.6 10.5c-.4.2-.8.3-1.4.3-.5 0-.9-.1-1.2-.2-.3-.2-.6-.4-.9-.7-.1-.3-.3-.6-.4-1-.1-.3-.2-.7-.2-1.1 0-.4.1-.8.2-1.1.1-.4.3-.7.5-1 .2-.2.5-.5.8-.6.3-.2.7-.2 1.2-.2s.9.1 1.2.2c.3.2.6.4.9.7s.4.6.5 1c.1.3.2.6.2 1s-.1.9-.2 1.2c-.1.4-.4.7-.6 1l.8.6-.4.5-1-.6zm0-.8c.2-.2.4-.5.5-.8.1-.3.2-.7.2-1 0-.3 0-.6-.1-.9s-.3-.6-.4-.8c-.2-.2-.4-.4-.7-.5-.2-.2-.5-.2-.9-.2s-.6 0-.9.2c-.2.1-.4.3-.6.5-.1.2-.2.5-.3.8s-.1.5-.1.8c0 .3 0 .6.1.9s.2.5.4.8c.1.2.3.3.5.5.3.1.5.2.9.2.3 0 .5-.1.8-.2l-.6-.5.4-.5.8.7z"
  }), React.createElement("path", {
    d: "M12.7 5v5h3v.6h-3.8V5h.8z"
  }));
};

module.exports.Stack = function Stack(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M1 6v9h3V1H1v5zm2 1v4H2V7h1zm2 2v6h3V4H5v5zm2 1v3H6v-3h1zm2-5v10h3V2H9v3zm2 1v4h-1V6h1zm2 0v9h3V6h-3zm2 4v3h-1v-3h1z"
  }));
};

module.exports.StarL = function StarL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "m8 2.575 1.545 3.131.232.473.521.075 3.455.502-2.5 2.438-.376.365.089.519.589 3.44-3.089-1.625L8 11.648l-.466.244-3.089 1.625.591-3.441.089-.518-.377-.367-2.501-2.435 3.455-.502.521-.075.232-.473L8 2.575m0-1.27a.782.782 0 0 0-.703.437L5.559 5.265l-3.887.564a.786.786 0 0 0-.436 1.338L4.05 9.908l-.665 3.871a.785.785 0 0 0 1.138.826L8 12.777l3.477 1.828c.115.061.24.09.365.09a.8.8 0 0 0 .461-.148.79.79 0 0 0 .312-.768l-.663-3.871 2.812-2.741a.785.785 0 0 0-.435-1.338l-3.888-.564-1.737-3.524A.787.787 0 0 0 8 1.305z"
  }));
};

module.exports.StarRemoveL = function StarRemoveL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "-3 5 16 16",
    "enable-background": "new -3 5 16 16"
  }), React.createElement("path", {
    d: "M12 11.4c-.1-.3-.3-.5-.6-.5l-3.9-.6 2.4-2.4c.2-.2.2-.5 0-.7s-.6-.2-.8 0L7 9.3 5.7 6.7c-.1-.2-.4-.4-.7-.4-.3 0-.6.2-.7.4l-1.7 3.5-3.9.6c-.3 0-.5.2-.6.5-.1.3 0 .6.2.8l2.8 2.7-.1.5-2.3 2.3c-.2.2-.2.5 0 .7.1.1.2.1.4.1s.3 0 .4-.1L.7 17l-.3 1.8c0 .3.1.6.3.8.1.1.3.1.5.1.1 0 .2 0 .4-.1L5 17.8l3.5 1.8c.1.1.2.1.4.1s.3-.1.5-.1c.2-.2.4-.5.3-.8L9 14.9l2.8-2.7c.2-.2.3-.6.2-.8zM1.7 14.2l-2.5-2.4 3.5-.5.5-.1.2-.5L5 7.6l1.2 2.5-4.3 4.3-.2-.2zm6.6 0-.4.4.1.5.6 3.4-3.1-1.6-.5-.3-.5.2-3.1 1.6.5-2.7L6.7 11l.1.2.5.1 3.5.5-2.5 2.4z"
  }));
};

module.exports.Star = function Star(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M14.962 6.362a.785.785 0 0 0-.633-.534l-3.888-.564-1.737-3.523a.783.783 0 0 0-1.407.001L5.559 5.264l-3.887.564a.786.786 0 0 0-.436 1.338L4.05 9.908l-.665 3.871a.784.784 0 0 0 1.138.826L8 12.777l3.477 1.828c.115.061.24.09.365.09a.8.8 0 0 0 .461-.148.788.788 0 0 0 .312-.768l-.663-3.871 2.812-2.742a.78.78 0 0 0 .198-.804z"
  }));
};

module.exports.StopO24 = function StopO24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#231F20",
    d: "M12 22.5C6.21 22.5 1.5 17.789 1.5 12 1.5 6.21 6.21 1.5 12 1.5c5.789 0 10.5 4.71 10.5 10.5a.5.5 0 1 1-1 0c0-5.238-4.262-9.5-9.5-9.5S2.5 6.762 2.5 12c0 5.239 4.262 9.5 9.5 9.5 3.902 0 7.467-2.445 8.868-6.086a.5.5 0 1 1 .933.359C20.253 19.797 16.314 22.5 12 22.5zM15 9H9v6h6V9z"
  }));
};

module.exports.StopO = function StopO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 .001 14.001A7 7 0 0 0 8 1zm-.001 13.012a6.012 6.012 0 1 1 .002-12.024A6.012 6.012 0 0 1 8 14.012zM10 10H6V6h4v4z",
    "clip-rule": "evenodd"
  }));
};

module.exports.String = function String(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M6.12 8.778c0 .39-.101.74-.301 1.051-.201.311-.495.553-.881.729s-.845.264-1.375.264c-.636 0-1.16-.119-1.573-.359a2.1 2.1 0 0 1-.714-.692C1.091 9.48 1 9.2 1 8.928c0-.158.055-.294.165-.407a.56.56 0 0 1 .42-.169c.138 0 .254.043.35.131.094.088.175.219.243.392.082.205.17.377.266.515.095.138.229.251.402.34.173.09.4.135.681.135.387 0 .701-.091.942-.271.242-.181.363-.405.363-.675a.71.71 0 0 0-.196-.521 1.262 1.262 0 0 0-.505-.306 9.066 9.066 0 0 0-.829-.225 5.89 5.89 0 0 1-1.162-.379 1.872 1.872 0 0 1-.742-.593c-.184-.25-.275-.561-.275-.933 0-.354.097-.67.29-.945s.473-.487.839-.635c.366-.148.797-.223 1.292-.223.396 0 .737.05 1.026.147.288.099.528.229.718.392.19.162.33.333.417.512s.132.354.132.523a.616.616 0 0 1-.165.419.518.518 0 0 1-.409.187c-.149 0-.263-.037-.34-.111a1.51 1.51 0 0 1-.254-.368 1.67 1.67 0 0 0-.421-.569c-.165-.136-.428-.204-.791-.204-.337 0-.608.074-.815.222-.206.148-.31.326-.31.534 0 .129.035.24.105.334s.167.175.29.242.248.12.374.158.334.094.624.166c.363.086.692.18.987.281.294.104.545.228.751.374.206.147.367.332.483.556.116.225.174.499.174.824zm.909-2.728h.132v-.721c0-.193.005-.346.016-.455a.673.673 0 0 1 .085-.283.568.568 0 0 1 .497-.278.59.59 0 0 1 .413.172.501.501 0 0 1 .156.278c.022.111.033.267.033.468v.819H8.8c.17 0 .299.04.389.12a.4.4 0 0 1 .135.31c0 .162-.064.274-.191.339s-.311.096-.547.096h-.225v2.206c0 .188.006.332.02.433a.454.454 0 0 0 .105.246c.057.063.15.095.279.095.07 0 .166-.013.285-.037.121-.025.215-.038.281-.038a.36.36 0 0 1 .262.117.39.39 0 0 1 .117.287c0 .193-.105.342-.316.444s-.516.153-.91.153c-.375 0-.66-.062-.853-.188s-.32-.3-.38-.522-.09-.521-.09-.893V6.915h-.158c-.173 0-.305-.041-.396-.123s-.136-.186-.136-.313c0-.125.047-.229.143-.31.095-.079.234-.119.415-.119zm4.311 3.041v1.002c0 .243-.057.425-.17.547a.576.576 0 0 1-.436.182c-.174 0-.314-.061-.426-.184s-.168-.305-.168-.545v-3.34c0-.539.195-.809.584-.809.199 0 .344.062.432.188s.076.253.086.499c.143-.246.35-.373.5-.499s.354-.188.605-.188.496.062.732.188c.238.126.357.293.357.501a.475.475 0 0 1-.152.362.472.472 0 0 1-.328.144c-.043 0-.15-.027-.318-.082a1.477 1.477 0 0 0-.445-.081.653.653 0 0 0-.432.139.882.882 0 0 0-.258.411 2.866 2.866 0 0 0-.129.647c-.022.252-.034.556-.034.918zm2.431.408a.75.75 0 1 0 .002 1.502.75.75 0 0 0-.002-1.502z"
  }));
};

module.exports.StrokeBottom = function StrokeBottom(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M8 11H7v1h1v-1zm0-1H7V9h1v1zm0-2H7V7h1v1zm0-2H7V5h1v1zm0-2H7V3h1v1zm-6 8H1v-1h1v1zm0-2H1V9h1v1zm0-2H1V7h1v1zm0-2H1V5h1v1zm0-2H1V3h1v1zm12 8h-1v-1h1v1zm0-2h-1V9h1v1zm0-2h-1V7h1v1zm0-2h-1V5h1v1zm0-2h-1V3h1v1zM4 8H3V7h1v1zm2 0H5V7h1v1zm4 0H9V7h1v1zm2 0h-1V7h1v1zM8 2H7V1h1v1zM2 2H1V1h1v1zm12 0h-1V1h1v1zM4 2H3V1h1v1zm2 0H5V1h1v1zm4 0H9V1h1v1zm2 0h-1V1h1v1zm2 12H1v-1h13v1z"
  }));
};

module.exports.StrokeLeft = function StrokeLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M4 8V7H3v1h1zm1 0V7h1v1H5zm2 0V7h1v1H7zm2 0V7h1v1H9zm2 0V7h1v1h-1zM3 2V1h1v1H3zm2 0V1h1v1H5zm2 0V1h1v1H7zm2 0V1h1v1H9zm2 0V1h1v1h-1zM3 14v-1h1v1H3zm2 0v-1h1v1H5zm2 0v-1h1v1H7zm2 0v-1h1v1H9zm2 0v-1h1v1h-1zM7 4V3h1v1H7zm0 2V5h1v1H7zm0 4V9h1v1H7zm0 2v-1h1v1H7zm6-4V7h1v1h-1zm0-6V1h1v1h-1zm0 12v-1h1v1h-1zm0-10V3h1v1h-1zm0 2V5h1v1h-1zm0 4V9h1v1h-1zm0 2v-1h1v1h-1zM1 14V1h1v13H1z"
  }));
};

module.exports.StrokeRight = function StrokeRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M11 8V7h1v1h-1zm-1 0V7H9v1h1zM8 8V7H7v1h1zM6 8V7H5v1h1zM4 8V7H3v1h1zm8-6V1h-1v1h1zm-2 0V1H9v1h1zM8 2V1H7v1h1zM6 2V1H5v1h1zM4 2V1H3v1h1zm8 12v-1h-1v1h1zm-2 0v-1H9v1h1zm-2 0v-1H7v1h1zm-2 0v-1H5v1h1zm-2 0v-1H3v1h1zM8 4V3H7v1h1zm0 2V5H7v1h1zm0 4V9H7v1h1zm0 2v-1H7v1h1zM2 8V7H1v1h1zm0-6V1H1v1h1zm0 12v-1H1v1h1zM2 4V3H1v1h1zm0 2V5H1v1h1zm0 4V9H1v1h1zm0 2v-1H1v1h1zm12 2V1h-1v13h1z"
  }));
};

module.exports.StrokeTop = function StrokeTop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M8 4H7V3h1v1zm0 1H7v1h1V5zm0 2H7v1h1V7zm0 2H7v1h1V9zm0 2H7v1h1v-1zM2 3H1v1h1V3zm0 2H1v1h1V5zm0 2H1v1h1V7zm0 2H1v1h1V9zm0 2H1v1h1v-1zm12-8h-1v1h1V3zm0 2h-1v1h1V5zm0 2h-1v1h1V7zm0 2h-1v1h1V9zm0 2h-1v1h1v-1zM4 7H3v1h1V7zm2 0H5v1h1V7zm4 0H9v1h1V7zm2 0h-1v1h1V7zm-4 6H7v1h1v-1zm-6 0H1v1h1v-1zm12 0h-1v1h1v-1zM4 13H3v1h1v-1zm2 0H5v1h1v-1zm4 0H9v1h1v-1zm2 0h-1v1h1v-1zm2-12H1v1h13V1z"
  }));
};

module.exports.Stroke = function Stroke(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M8 4H7V3h1v1zm0 1H7v1h1V5zm0 2H7v1h1V7zm0 2H7v1h1V9zm0 2H7v1h1v-1zM4 7H3v1h1V7zm2 0H5v1h1V7zm4 0H9v1h1V7zm2 0h-1v1h1V7zm1-5H2v11h11V2m0-1a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11z"
  }));
};

module.exports.Subscribe24 = function Subscribe24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M6.26 18.531a2.46 2.46 0 1 1-4.917-.001 2.46 2.46 0 0 1 4.917.001zm8.62 2.414C14.41 14.168 8 8.859 2 8.859v1.25c6 0 11.196 4.798 11.621 10.923l1.259-.087zm6.462.006C20.713 10.758 12.547 2.598 2.348 1.968L2.27 3.215c9.572.592 17.234 8.249 17.824 17.813l1.248-.077z"
  }));
};

module.exports.Subtotals = function Subtotals(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M13.4 13.643h-11a.6.6 0 0 1-.468-.976l3.74-4.653-3.74-4.692a.599.599 0 0 1 .469-.974h11a.6.6 0 1 1 0 1.2H3.647l3.264 4.093a.601.601 0 0 1-.001.75l-3.257 4.052H13.4a.6.6 0 1 1 0 1.2zM9.4 5.5a.5.5 0 0 0-1 0 .499.499 0 1 0 1 0zm2 0a.5.5 0 0 0-1 0 .499.499 0 1 0 1 0zm2 0a.5.5 0 0 0-1 0 .499.499 0 1 0 1 0zm-4 2a.5.5 0 0 0-1 0 .499.499 0 1 0 1 0zm2 0a.5.5 0 0 0-1 0 .499.499 0 1 0 1 0zm2 0a.5.5 0 0 0-1 0 .499.499 0 1 0 1 0zM8.401 10a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-3a1 1 0 0 0-1 1z"
  }));
};

module.exports.Sum = function Sum(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M13.4 13.643h-11a.6.6 0 0 1-.468-.976l3.74-4.653-3.74-4.692a.599.599 0 0 1 .469-.974h11a.6.6 0 1 1 0 1.2H3.647l3.264 4.093a.601.601 0 0 1-.001.75l-3.257 4.052H13.4a.6.6 0 1 1 0 1.2z"
  }));
};

module.exports.SuspendCycleO = function SuspendCycleO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M6.356 10.597a.654.654 0 0 1-.642-.665V5.985c0-.37.288-.667.643-.667.355-.002.643.299.643.666V9.93a.655.655 0 0 1-.644.667zm3.929-.666V5.984c0-.367-.288-.668-.643-.666A.654.654 0 0 0 9 5.985v3.946c0 .367.287.666.642.665a.653.653 0 0 0 .643-.665zM8 15A7 7 0 1 1 8.001.999 7 7 0 0 1 8 15zm0-1.001a6 6 0 1 0 0-12 6 6 0 0 0 0 12z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Suspend = function Suspend(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M.186 6.769a.637.637 0 0 1 .898 0L2.32 8.006V8a6.847 6.847 0 0 1 6.84-6.84A6.847 6.847 0 0 1 16 8c0 3.771-3.068 6.838-6.84 6.84a6.789 6.789 0 0 1-4.837-2.004.634.634 0 0 1 .896-.896 5.55 5.55 0 0 0 3.941 1.63A5.576 5.576 0 0 0 14.73 8a5.576 5.576 0 0 0-5.57-5.571A5.576 5.576 0 0 0 3.589 8v.006l1.235-1.237a.635.635 0 1 1 .898.898l-2.318 2.32a.632.632 0 0 1-.898 0l-2.32-2.32a.635.635 0 0 1 0-.898zm10.849 2.833L9.541 8.109V5.164a.582.582 0 0 0-.571-.593.583.583 0 0 0-.571.593v3.148a.59.59 0 0 0 .059.252c.03.076.073.148.136.21l1.634 1.636c.23.232.602.238.824.016a.584.584 0 0 0-.017-.824z"
  }));
};

module.exports.SyncO = function SyncO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M1 8a7 7 0 1 0 14.001-.001A7 7 0 0 0 1 8zm13.012.001A6.012 6.012 0 1 1 1.989 8 6.012 6.012 0 0 1 14.012 8zm-5.447-.315a.504.504 0 0 1 .71 0l1.936 1.936a.507.507 0 0 1 0 .709l-1.936 1.937a.502.502 0 0 1-.71-.709L9.624 10.5H5.143a.5.5 0 0 1 0-1h4.5l-.02-.048-1.058-1.057a.503.503 0 0 1 0-.709zm-1.13-3.874a.503.503 0 0 1 0 .709L6.376 5.578h4.481a.5.5 0 0 1 0 1h-4.5l.02.048 1.058 1.058a.503.503 0 0 1-.71.709L4.789 6.457a.507.507 0 0 1 0-.709l1.936-1.937a.501.501 0 0 1 .71.001z"
  }));
};

module.exports.Sync = function Sync(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M12.697 5.246a.553.553 0 0 1-.773-.12 4.842 4.842 0 0 0-3.185-1.94 4.872 4.872 0 0 0-.891-.049c-.124.005-.245.022-.368.035a5.07 5.07 0 0 0-.537.079 4.89 4.89 0 0 0-.452.132c-.132.043-.262.085-.388.138a4.858 4.858 0 0 0-.524.266c-.078.045-.156.088-.232.137a4.827 4.827 0 0 0-.66.514 4.94 4.94 0 0 0-.562.618 4.854 4.854 0 0 0-.987 2.937v.005l1.08-1.082a.555.555 0 1 1 .785.785L2.977 9.729a.553.553 0 0 1-.785 0L.162 7.7a.556.556 0 0 1 0-.785.556.556 0 0 1 .785 0l1.082 1.082v-.005c0-.255.016-.507.047-.754.029-.233.095-.455.15-.68.009-.034.015-.069.024-.102.048-.181.103-.358.167-.532.071-.197.152-.39.243-.576.064-.126.133-.248.204-.369.123-.212.253-.417.4-.609.056-.072.115-.139.174-.208a6.051 6.051 0 0 1 .666-.686c.225-.196.465-.372.717-.533.036-.022.069-.048.105-.07.267-.162.549-.298.84-.416.046-.019.092-.04.139-.057.287-.109.587-.193.893-.255.06-.012.118-.025.179-.035.298-.052.601-.08.91-.085.041 0 .08-.011.122-.011v.012c.298.001.6.018.902.065a5.93 5.93 0 0 1 3.907 2.383.551.551 0 0 1-.121.772zm-9.514 6.281a5.918 5.918 0 0 0 4.808 2.448v.012c.042 0 .081-.011.122-.011.31-.006.612-.034.91-.086.061-.01.119-.023.179-.035.306-.062.605-.146.893-.256.047-.018.093-.038.139-.057.291-.119.573-.255.84-.416.036-.022.069-.048.105-.07a6.113 6.113 0 0 0 .84-.642c.194-.178.374-.372.544-.576.059-.068.118-.135.174-.207.146-.193.276-.398.399-.609.071-.121.141-.243.204-.369a6.077 6.077 0 0 0 .41-1.108c.009-.033.015-.067.023-.103.056-.225.121-.446.15-.68.031-.247.047-.499.047-.754v-.006l1.081 1.082a.556.556 0 0 0 .786-.785l-2.03-2.029a.555.555 0 0 0-.785 0l-2.027 2.029a.555.555 0 1 0 .785.785l1.08-1.082v.005a4.851 4.851 0 0 1-.99 2.94 4.73 4.73 0 0 1-.651.694 4.798 4.798 0 0 1-.568.435c-.076.049-.154.092-.232.137a4.937 4.937 0 0 1-.523.266c-.126.054-.257.096-.389.139a4.517 4.517 0 0 1-.452.131 4.792 4.792 0 0 1-.537.08c-.122.013-.243.03-.368.035a4.872 4.872 0 0 1-.891-.049 4.848 4.848 0 0 1-3.185-1.94.552.552 0 1 0-.891.652z"
  }));
};

module.exports.Tab = function Tab(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#231F20",
    d: "M12 3v2a1 1 0 0 0 1 1h2v7H2V3h10m1-1H1v12h15V5h-3V2zm3 0h-2v2h2V2zM3 8h1v4h1V8h1V7H3v1zm4 0h2v1H7v3h3V7H7v1zm2 3H8v-1h1v1zm3-2V7h-1v5h3V9h-2zm1 2h-1v-1h1v1z"
  }));
};

module.exports.Table = function Table(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 1h-13a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5zM7 6h7v3H7V6zM6 9H2V6h4v3zm1-4V2h7v3H7zM6 5H2V2h4v3zm-4 5h4v3H2v-3zm5 0h7v3H7v-3z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Target = function Target(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#666666",
    d: "M14.5 7h-1.551A4.973 4.973 0 0 0 8.5 2.551V1.5a.5.5 0 0 0-1 0v1.051A4.973 4.973 0 0 0 3.051 7H1.5a.5.5 0 0 0 0 1h1.551A4.973 4.973 0 0 0 7.5 12.449V14.5a.5.5 0 0 0 1 0v-2.051A4.973 4.973 0 0 0 12.949 8H14.5a.5.5 0 0 0 0-1zm-2.551 0H8.5V3.55A3.975 3.975 0 0 1 11.949 7zM7.5 3.55V7H4.05A3.978 3.978 0 0 1 7.5 3.55zM4.05 8H7.5v3.45A3.978 3.978 0 0 1 4.05 8zm4.45 3.45V8h3.449A3.975 3.975 0 0 1 8.5 11.45z"
  }));
};

module.exports.Text = function Text(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M15 4V1h-3v1H3V1H0v3h1v8H0v3h3v-1h9v1h3v-3h-1V4h1zm-2-2h1v1h-1V2zM1 2h1v1H1V2zm0 12v-1h1v1H1zm13 0h-1v-1h1v1zm-1-2h-1v1H3v-1H2V4h1V3h9v1h1v8zm-2-6.5a.5.5 0 0 1-.5.5H8v4.5a.5.5 0 0 1-1 0V6H4.5a.5.5 0 0 1 0-1h6a.5.5 0 0 1 .5.5z"
  }));
};

module.exports.Thumnail = function Thumnail(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M13 3v3h-3V3h3M6 3v3H3V3h3m7 7v3h-3v-3h3m-7 0v3H3v-3h3m8-8H9v5h5V2zM7 2H2v5h5V2zm7 7H9v5h5V9zM7 9H2v5h5V9z"
  }));
};

module.exports.TimeO = function TimeO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8.016 1a7 7 0 1 0 .001 14.001A7 7 0 0 0 8.016 1zm-.001 13a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm3.597-5.962a.653.653 0 0 1-.665.642H8.001l-.012-.002-.011.002a.612.612 0 0 1-.414-.166c-.012-.01-.027-.016-.038-.026-.013-.013-.02-.031-.031-.044a.623.623 0 0 1-.161-.406l.002-.011-.002-.012V4.068c0-.368.288-.667.644-.666a.652.652 0 0 1 .641.665l.001 3.328h2.326c.368 0 .667.288.666.643z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Transfer = function Transfer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M.448 13.126c.085.273 1.547.724 3.537.747 1.426.017 3.091-.215 3.569-.708 0 0 .055-.179-.239-.329a27.231 27.231 0 0 0-2.081-.721c-.055-.017-.062-.021-.062-.243 0-.185.075-.372.149-.529.081-.171.176-.459.21-.717.097-.111.227-.331.311-.748.073-.367.039-.502-.01-.628a.37.37 0 0 1-.014-.039c-.02-.087.006-.535.068-.883.045-.238-.01-.746-.339-1.166-.207-.265-.604-.591-1.33-.637l-.397.001c-.713.045-1.11.371-1.318.636-.328.42-.383.928-.339 1.166.063.348.088.796.069.88a.188.188 0 0 1-.014.042c-.048.126-.082.261-.01.628.084.417.214.637.311.748.034.258.13.546.21.717.059.125.086.296.086.537 0 .225-.009.227-.059.242a23.98 23.98 0 0 0-2.077.738s-.288.079-.231.266zm8 0c.085.273 1.547.724 3.537.747 1.426.017 3.091-.215 3.569-.708 0 0 .055-.179-.239-.329a27.231 27.231 0 0 0-2.081-.721c-.055-.017-.062-.021-.062-.243 0-.185.075-.372.149-.529.081-.171.176-.459.21-.717.097-.111.227-.331.311-.748.073-.367.039-.502-.01-.628a.37.37 0 0 1-.014-.039c-.02-.087.006-.535.068-.883.045-.238-.01-.746-.339-1.166-.207-.265-.604-.591-1.33-.637l-.397.001c-.713.045-1.11.371-1.318.636-.328.42-.383.928-.339 1.166.063.348.088.796.069.88a.26.26 0 0 1-.015.042c-.048.126-.082.261-.01.628.084.417.214.637.311.748.034.258.13.546.21.717.059.125.086.296.086.537 0 .225-.009.227-.059.242a23.98 23.98 0 0 0-2.077.738c.001 0-.287.079-.23.266zm3.397-9.131a.361.361 0 0 1-.229.456l-2.75.916a.367.367 0 0 1-.453-.227.36.36 0 0 1 .227-.454l1.93-.644-.437-.218c-3.067-1.807-5.574-.947-6.57.236.11-.205.286-.405.663-.784.617-.62 2.752-1.947 6.223-.095l.435.213-.637-1.922a.36.36 0 0 1 .225-.455.366.366 0 0 1 .454.227l.919 2.751z"
  }));
};

module.exports.Transform1 = function Transform1(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M7 13H6v-1h1v1zm2-1H8v1h1v-1zm2 0h-1v1h1v-1zm2 0h-1v1h1v-1zm2-2v4.982L4 15v-.014L1 15V1.017L5 1v9.016L15 10zm-1 1-9-.002v3.016L14 14v-3zM6.045 3.691c.025.059.061.162.106.207a.028.028 0 0 0 .005.008l1.975 1.936c.1.1.23.15.361.15.133 0 .264.041.363-.059a.514.514 0 0 0 0-.727L7.661 3.967H12V7.305l-1.227-1.167a.514.514 0 0 0-.727 0c-.2.199-.292.526-.091.725l2.146 1.975c.008.01.021.014.031.021a.451.451 0 0 0 .281.125c.008 0 .014.004.021.004.012 0 .021-.006.033-.006.055-.004.01-.012.064-.033.059-.025.162-.062.207-.107l.008-.004 1.936-1.975c.1-.1.15-.23.15-.361 0-.133.041-.264-.059-.363a.514.514 0 0 0-.727 0l-1.082 1.043c.013-.057.036-.107.036-.165v-3.05c0-.553-.447-.95-1-.95H8c-.076 0-.144.024-.215.039l1.07-1.125a.514.514 0 0 0 0-.727c-.199-.201-.525-.292-.724-.091L6.156 3.259c-.01.008-.014.021-.021.031a.548.548 0 0 0-.09.135.405.405 0 0 0-.035.147c0 .008-.004.014-.004.021 0 .012.006.021.006.033.004.055.011.01.033.065z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Transform2 = function Transform2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M3 7V6h1v1H3zm1 2V8H3v1h1zm0 2v-1H3v1h1zm0 2v-1H3v1h1zm2 2H1.018L1 4h.014L1 1h13.982L15 5H5.984L6 15zm-1-1 .002-9H1.986L2 14h3zm7.309-7.955c-.059.025-.162.062-.207.106a.028.028 0 0 0-.008.005l-1.936 1.975c-.1.1-.15.23-.15.361 0 .133-.041.264.059.363a.514.514 0 0 0 .727 0l1.24-1.195V12H8.695l1.167-1.227a.514.514 0 0 0 0-.727c-.2-.2-.526-.292-.725-.091l-1.975 2.146c-.01.008-.014.021-.021.031a.451.451 0 0 0-.125.281c0 .008-.004.014-.004.021 0 .012.006.021.006.033.004.055.012.01.033.064.025.059.062.162.107.207l.004.008 1.975 1.936c.1.1.23.15.361.15.133 0 .264.041.363-.059a.514.514 0 0 0 0-.727L8.819 13c.056.01.106.033.164.033h3.05c.553 0 .949-.48.949-1.033V8c0-.076-.023-.144-.039-.215l1.125 1.07a.514.514 0 0 0 .727 0c.201-.199.293-.525.092-.725L12.74 6.156c-.008-.01-.021-.014-.031-.021a.54.54 0 0 0-.135-.09.427.427 0 0 0-.146-.035c-.008 0-.014-.004-.021-.004-.012 0-.021.006-.033.006-.056.004-.011.011-.065.033z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Triangle24 = function Triangle24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#231F20",
    d: "M9.417 16V8l6.667 4-6.667 4z"
  }));
};

module.exports.Undo1 = function Undo1(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M10.916 5.788a.474.474 0 0 0-.107-.012H3.751l2.901-2.9a.512.512 0 1 0-.726-.726L2.15 5.926c-.01.01-.013.022-.021.032a.532.532 0 0 0-.089.136.525.525 0 0 0-.036.174c0 .008-.004.014-.004.022 0 .011.006.02.006.032a.52.52 0 0 0 .033.164.52.52 0 0 0 .106.159l.005.008 3.777 3.777a.51.51 0 0 0 .726 0 .514.514 0 0 0 0-.727l-2.901-2.9h6.998c.332.086 2.223.687 2.223 3.207 0 2.518-1.944 2.922-2.201 2.963H9.27a.514.514 0 0 0 0 1.027h1.539a.625.625 0 0 0 .062-.004C11.953 13.863 14 12.861 14 10.01c0-2.822-2.018-3.996-3.084-4.222z"
  }));
};

module.exports.Undo = function Undo(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M5.934 9.936c.615.562.755.646.789-.404.062-.768 0-1.618 0-1.618.022-.048 1.351-.547 3.548.404 2.196.952 3.679 3.922 3.94 4.852.021.537.721 1.574.788-.021.009-2.604-1.008-5.33-3.599-6.893-2.416-1.458-4.425-1.309-4.647-1.233-.004.021-.01.029-.021.016-.003-.004.006-.01.021-.016.019-.097-.039-.598-.045-1.54.037-.846-.189-.872-.774-.421C4.862 3.942 2 6.676 2 6.676s2.862 2.396 3.934 3.26z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Ungroup24 = function Ungroup24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M4 3v1H3V3h1m1-1H2v3h3V2zM4 15v1H3v-1h1m1-1H2v3h3v-3zm12 1v1h-1v-1h1m1-1h-3v3h3v-3zM17 3v1h-1V3h1m1-1h-3v3h3V2zm-3 1H4v1h11V3zm0 12H4v1h11v-1zM4 15V5H3v10h1zm13 0V5h-1v10h1zm-9 5v1H7v-1h1m1-1H6v3h3v-3zm12 1v1h-1v-1h1m1-1h-3v3h3v-3zM21 8v1h-1V8h1m1-1h-3v3h3V7zm-3 1h-2v1h2V8zm0 12H8v1h11v-1zM8 20v-4H7v4h1zm13 0V10h-1v10h1zM13 8v2H7V8h6m0-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
  }));
};

module.exports.Unindent = function Unindent(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M1 1.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zm0 12a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5zm4-9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0-.5.5zm0 3a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0-.5.5zm-1.568-.542L1.1 7.625c-.067-.066-.1-.145-.1-.234s.033-.168.1-.234l2.332-2.334a.323.323 0 0 1 .236-.098.32.32 0 0 1 .234.098.319.319 0 0 1 .098.234v4.668c0 .09-.032.168-.098.233a.324.324 0 0 1-.47 0z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Unlink = function Unlink(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#010101",
    d: "M2.349 2.005a.5.5 0 0 0-.188.844l1.916 1.913a.501.501 0 1 0 .688-.688L2.849 2.161a.499.499 0 0 0-.438-.156.32.32 0 0 0-.062 0zm3.996-.996a.5.5 0 0 0-.344.5V3.5a.5.5 0 0 0 .998 0V1.509a.499.499 0 0 0-.592-.5.32.32 0 0 0-.062 0zM1.428 6.002A.506.506 0 0 0 1.584 7H3.5a.498.498 0 1 0 0-.998H1.584a.492.492 0 0 0-.094 0 .32.32 0 0 0-.062 0zM12.429 9c-.277.043-.466.22-.423.496.043.275.302.547.578.504H14.5c.276 0 .5-.306.5-.582S14.776 9 14.5 9h-1.916a.492.492 0 0 0-.094 0 .331.331 0 0 0-.063 0h.002zm-3.081 3.009a.501.501 0 0 0-.345.5V14.5a.498.498 0 1 0 .997 0v-1.991a.498.498 0 0 0-.591-.5.331.331 0 0 0-.063 0h.002zm2-1.004a.5.5 0 0 0-.188.844l1.915 1.913a.5.5 0 1 0 .688-.687l-1.915-1.913a.498.498 0 0 0-.438-.156.331.331 0 0 0-.063 0h.001zm-6.036 2.557a2.99 2.99 0 0 1-2.121-.877 3.004 3.004 0 0 1 0-4.242l1.371-1.371a.5.5 0 0 1 .707.707l-1.372 1.37a2.001 2.001 0 0 0 0 2.828 2.003 2.003 0 0 0 2.828 0l1.371-1.371a.5.5 0 0 1 .707.707l-1.371 1.371a2.983 2.983 0 0 1-2.12.878zm5.659-4.62a.5.5 0 0 1-.354-.853l1.371-1.371a2.003 2.003 0 0 0 0-2.828 2.003 2.003 0 0 0-2.828 0L7.789 5.261a.5.5 0 0 1-.707-.707l1.371-1.371a3.002 3.002 0 0 1 4.242 0 3.002 3.002 0 0 1 0 4.242l-1.371 1.371a.494.494 0 0 1-.353.146z"
  }));
};

module.exports.Unstack = function Unstack(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M4 15H1V1h3v14zM8 4H5v11h3V4zm4-2H9v13h3V2zm4 4h-3v9h3V6z"
  }));
};

module.exports.Unstroke = function Unstroke(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M11 8V7h1v1h-1zm-1 0V7H9v1h1zM8 8V7H7v1h1zM6 8V7H5v1h1zM4 8V7H3v1h1zm8-6V1h-1v1h1zm-2 0V1H9v1h1zM8 2V1H7v1h1zM6 2V1H5v1h1zM4 2V1H3v1h1zm8 12v-1h-1v1h1zm-2 0v-1H9v1h1zm-2 0v-1H7v1h1zm-2 0v-1H5v1h1zm-2 0v-1H3v1h1zM8 4V3H7v1h1zm0 2V5H7v1h1zm0 4V9H7v1h1zm0 2v-1H7v1h1zM2 8V7H1v1h1zm0-6V1H1v1h1zm0 12v-1H1v1h1zM2 4V3H1v1h1zm0 2V5H1v1h1zm0 4V9H1v1h1zm0 2v-1H1v1h1zm12-4V7h-1v1h1zm0-6V1h-1v1h1zm0 12v-1h-1v1h1zm0-10V3h-1v1h1zm0 2V5h-1v1h1zm0 4V9h-1v1h1zm0 2v-1h-1v1h1z"
  }));
};

module.exports.UploadL24 = function UploadL24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M18.55 8.014A7.648 7.648 0 0 0 11.552 3.5a7.687 7.687 0 0 0-7.636 6.832A4.308 4.308 0 0 0 .5 14.551a4.32 4.32 0 0 0 4.309 4.316c-.001 0 2.789.043 5.533.046.021.001.075.005.154.005.311 0 .986-.088 1.473-.559.484-.469.532-1.386.507-1.445v-6.158l2.243 2.201a.514.514 0 0 0 .727 0c.1-.1.059-.23.059-.362s-.051-.263-.15-.362l-3.028-3.078-.008-.005c-.045-.045-.149-.081-.208-.106-.054-.021-.01-.029-.064-.033-.012 0-.021-.006-.032-.006-.008 0-.014.004-.021.004a.411.411 0 0 0-.146.035.514.514 0 0 0-.135.09c-.01.008-.023.012-.032.021l-3.077 3.078c-.201.2-.109.525.092.725.2.201.525.201.726 0l2.109-2.201.001 6.291c-.003.021-.013.04-.013.062 0 .248-.065.43-.199.556-.258.239-.738.262-.935.249-2.755 0-5.556-.047-5.565-.047a3.32 3.32 0 0 1-3.316-3.316 3.307 3.307 0 0 1 2.938-3.291.5.5 0 0 0 .442-.469A6.681 6.681 0 0 1 11.552 4.5a6.654 6.654 0 0 1 6.196 4.182c.074.184.25.307.449.312a4.416 4.416 0 0 1 4.303 4.435 4.443 4.443 0 0 1-4.438 4.438h-2.116a.5.5 0 0 0 0 1h2.116a5.444 5.444 0 0 0 5.438-5.438 5.406 5.406 0 0 0-4.95-5.415z",
    "clip-rule": "evenodd"
  }));
};

module.exports.UploadL = function UploadL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M12.518 5.818a5.225 5.225 0 0 0-10.059 1.65C1.076 7.624 0 9.047 0 10.473 0 12.006 1.243 13.5 2.775 13.5h9.633C14.393 13.5 16 11.641 16 9.658c0-1.948-1.549-3.782-3.482-3.84zm-.11 6.682H8.5V8.157l1.231 1.201a.505.505 0 0 0 .72 0c.1-.1.019-.23.019-.362s-.034-.263-.134-.362l-2.02-2.078c-.002-.002 0-.003-.003-.005-.045-.045-.147-.081-.206-.107-.053-.021-.008-.029-.063-.033-.012 0-.021-.006-.032-.006-.008 0-.014.004-.021.004-.06.003-.089.014-.146.035a.54.54 0 0 0-.135.09c-.01.008-.023.012-.032.022L5.601 8.634c-.201.2-.109.525.092.725.2.201.512.201.712 0L7.5 8.157V12.5H2.775C1.796 12.5 1 11.453 1 10.473c0-.903.675-1.785 1.571-1.886l.837-.158.049-.872c.129-2.229 1.981-3.992 4.216-3.992a4.197 4.197 0 0 1 3.916 2.636l.245.602.653.016C13.896 6.862 15 8.248 15 9.658c0 1.429-1.162 2.842-2.592 2.842z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Upload = function Upload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M12.518 5.819A5.223 5.223 0 0 0 2.459 7.468 2.775 2.775 0 0 0 2.776 13h4.081v-2.286H4.571L8 6.143l3.429 4.571H9.143V13h3.266a3.592 3.592 0 0 0 .109-7.181z"
  }));
};

module.exports.UserO24 = function UserO24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M12 1.5C6.211 1.5 1.5 6.21 1.5 12c0 5.789 4.711 10.5 10.5 10.5 4.314 0 8.253-2.703 9.802-6.728a.5.5 0 1 0-.933-.359 9.406 9.406 0 0 1-2.06 3.192 61.682 61.682 0 0 0-4.277-1.492c-.111-.035-.128-.039-.128-.499 0-.378.155-.761.306-1.084.166-.351.362-.942.433-1.47.196-.229.463-.678.634-1.533.151-.756.081-1.029-.019-1.287a1.128 1.128 0 0 1-.029-.08c-.038-.178.013-1.098.144-1.811.088-.488-.021-1.531-.695-2.392-.427-.543-1.241-1.211-2.729-1.305l-.815.001c-1.463.092-2.275.76-2.703 1.304-.675.861-.786 1.904-.698 2.393.129.713.181 1.633.144 1.805-.008.031-.021.059-.031.086-.098.258-.168.531-.019 1.287.171.855.439 1.305.636 1.533.07.527.267 1.119.431 1.47.12.257.177.606.177 1.102 0 .46-.018.463-.119.497-1.247.368-3.311 1.129-4.23 1.514A9.467 9.467 0 0 1 2.5 12c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5a.5.5 0 0 0 1 0c0-5.79-4.711-10.5-10.5-10.5zM9.765 18.078c.806-.266.806-1.004.806-1.446 0-.646-.086-1.13-.271-1.526a4.566 4.566 0 0 1-.345-1.177l-.039-.294-.194-.225c-.061-.071-.27-.357-.413-1.076-.105-.533-.062-.646-.029-.734a1.46 1.46 0 0 0 .076-.238c.093-.438-.039-1.64-.139-2.191-.044-.243.02-.983.496-1.594.436-.552 1.092-.861 1.951-.922l.75-.002c.879.062 1.543.372 1.975.922.479.611.542 1.354.499 1.596-.114.626-.229 1.77-.138 2.199l.014.063.021.062.039.105c.034.09.077.201-.029.731-.145.724-.352 1.009-.412 1.079l-.193.225-.039.294a4.564 4.564 0 0 1-.348 1.179c-.197.424-.399.936-.399 1.507 0 .446 0 1.192.844 1.458 1.022.303 2.675.879 3.722 1.277h.029A9.524 9.524 0 0 1 12 21.5a9.45 9.45 0 0 1-5.959-2.111c1.01-.4 2.656-.994 3.724-1.311z"
  }));
};

module.exports.UserO = function UserO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M8 1.002A7 7 0 1 0 8 15 7 7 0 1 0 8 1.002zm4.934 11.097c-.64-.268-2.15-.791-3.085-1.067-.08-.025-.092-.029-.092-.361 0-.273.112-.55.222-.783.119-.254.261-.681.312-1.062.143-.165.335-.49.459-1.108.109-.546.058-.744-.014-.931-.008-.02-.016-.039-.021-.058-.027-.129.01-.793.104-1.309.064-.354-.016-1.106-.503-1.729-.308-.393-.896-.876-1.972-.943l-.59.001c-1.058.065-1.646.549-1.954.941-.487.622-.568 1.375-.503 1.729.094.516.131 1.18.103 1.305-.004.022-.013.042-.021.061-.071.187-.122.385-.014.931.124.618.317.943.459 1.108.051.382.192.809.312 1.062.087.186.128.438.128.796 0 .332-.013.335-.087.359-.967.285-2.506.841-3.079 1.093A6.395 6.395 0 0 1 1.583 8c0-3.538 2.879-6.417 6.417-6.417S14.417 4.462 14.417 8a6.397 6.397 0 0 1-1.483 4.099z"
  }));
};

module.exports.User = function User(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M13.552 12.353c-.955-.651-2.995-1.216-3.299-1.39s-.607-.304-.607-.867c0-.564.309-.863.738-1.26.805-.742.65-1.584 1.171-1.975.427-.319.64-.565.707-1.043.011-.071.018-.152.021-.242.001-.037.009-.062.009-.104 0-.738-.607-.738-.607-.738s0 .021-.217-1.193c-.209-1.174-1.393-2.426-3.037-2.51v-.008c-.033 0-.062.003-.094.004-.027-.001-.054-.004-.082-.004v.007c-.008 0-.015.002-.023.003-.008-.001-.015-.003-.023-.003v-.007c-.028 0-.055.003-.082.004-.031-.001-.061-.004-.094-.004v.008c-1.645.084-2.828 1.336-3.037 2.51-.217 1.215-.217 1.193-.217 1.193s-.607 0-.607.738c0 .041.008.066.009.104.004.09.011.171.021.242.067.478.28.724.707 1.043.521.391.366 1.233 1.171 1.975.43.396.738.695.738 1.26 0 .563-.304.693-.607.867s-2.344.738-3.299 1.39S2 13.351 2 13.914C2 14.869 3.216 15 3.216 15h10.032s1.216-.131 1.216-1.086c0-.563.043-.91-.912-1.561z"
  }));
};

module.exports.VisibleL = function VisibleL(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }), React.createElement("path", {
    d: "M7.9 4.5c2.8 0 5 2.4 6 3.4l.1.1v.3l-.1.1c-.8 1-2.6 3.1-5.9 3.1-2.8 0-4.6-1.9-5.9-3.4C2 8 2 7.9 2 7.9l.2-.2c1.2-1.3 3-3.2 5.7-3.2m0-1C4.6 3.5 2.5 6 1.3 7.2c-.4.4-.4 1.2-.1 1.5 1.3 1.4 3.4 3.7 6.7 3.7 4 0 5.9-2.5 6.8-3.5.4-.5.3-1.2 0-1.5-.8-1-3.3-3.9-6.8-3.9zm.1 3c.8 0 1.5.7 1.5 1.5S8.8 9.5 8 9.5 6.5 8.8 6.5 8 7.2 6.5 8 6.5m0-1C6.6 5.5 5.5 6.6 5.5 8s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5S9.4 5.5 8 5.5z"
  }));
};

module.exports.Visible = function Visible(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M14.271 7.435c-.84-.892-3.156-3.565-6.343-3.565-3.104 0-5.058 2.283-6.143 3.422-.337.354-.344 1.076-.073 1.369 1.237 1.342 3.168 3.469 6.216 3.469 3.676 0 5.508-2.347 6.305-3.284.361-.426.285-1.151.038-1.411zM8.01 10.976a2.953 2.953 0 1 1 .001-5.905 2.953 2.953 0 0 1-.001 5.905zm0-4.453a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z",
    "clip-rule": "evenodd"
  }));
};

module.exports.WarningO = function WarningO(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8.75 8.25a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4c.416 0 .75.335.75.75v3.5zm0 3a.749.749 0 1 0-1.498-.002.749.749 0 0 0 1.498.002zM8 1a7 7 0 1 0 .001 13.999A7 7 0 0 0 8 1zm0 13.012A6.012 6.012 0 1 1 8 1.988a6.012 6.012 0 0 1 0 12.024z",
    "clip-rule": "evenodd"
  }));
};

module.exports.Warning = function Warning(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    fillRule: "evenodd",
    d: "M8 1a7 7 0 1 0 .001 13.999A7 7 0 0 0 8 1zm0 11a.75.75 0 1 1 .002-1.502A.75.75 0 0 1 8 12zm.75-3.75a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 1.5 0v3.5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.YAxis = function YAxis(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M9.403 7.95v7h-3v-7h3zm-.802-2.982 1.702-3.117a.728.728 0 0 0 .101-.366c-.002-.115-.08-.228-.235-.337A.749.749 0 0 0 10 1.075a.683.683 0 0 0-.466.039.396.396 0 0 0-.183.168L7.994 3.899 6.589 1.243a.352.352 0 0 0-.331-.191.8.8 0 0 0-.419.115.467.467 0 0 0-.232.332.578.578 0 0 0 .058.39l1.703 3.079V6.45c0 .115.048.229.14.337s.252.163.475.163c.225 0 .385-.051.477-.154a.501.501 0 0 0 .141-.346V4.968z"
  }));
};

module.exports.YyAxis = function YyAxis(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#020202",
    d: "M6 8v7H3V8h3zm-.803-2.982 1.702-3.117A.718.718 0 0 0 7 1.535c-.002-.116-.08-.228-.235-.337a.719.719 0 0 0-.168-.073.663.663 0 0 0-.467.04.396.396 0 0 0-.183.168L4.591 3.95 3.186 1.293a.352.352 0 0 0-.331-.191.8.8 0 0 0-.419.115.466.466 0 0 0-.232.332.578.578 0 0 0 .058.39l1.703 3.079V6.5c0 .115.048.229.14.337S4.356 7 4.58 7c.225 0 .385-.05.477-.154a.503.503 0 0 0 .14-.346V5.018zM10 8v7h3V8h-3zm2.197-2.982 1.702-3.117A.728.728 0 0 0 14 1.535c-.002-.115-.08-.228-.235-.337a.723.723 0 0 0-.168-.072.683.683 0 0 0-.466.039.401.401 0 0 0-.183.168L11.591 3.95l-1.405-2.656a.352.352 0 0 0-.331-.191.8.8 0 0 0-.419.115.463.463 0 0 0-.232.331.578.578 0 0 0 .058.39l1.703 3.079V6.5c0 .115.048.229.14.337s.251.163.475.163c.225 0 .385-.051.477-.154a.501.501 0 0 0 .141-.346V5.018z"
  }));
};

module.exports.ZoomIn24 = function ZoomIn24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M10.2 14v-3.5H6.7a.5.5 0 0 1 0-1h3.5V6a.5.5 0 0 1 1 0v3.5h3.5a.5.5 0 0 1 0 1h-3.5V14a.5.5 0 0 1-1 0zm11.046 7.217-4.933-5.798-.001-.001c-.016-.025-.025-.053-.045-.074a.5.5 0 0 0-.707-.031 7.185 7.185 0 0 1-4.86 1.888c-3.97 0-7.2-3.229-7.2-7.2s3.23-7.2 7.2-7.2a7.208 7.208 0 0 1 6.688 9.873.496.496 0 0 0 .278.649.497.497 0 0 0 .649-.278A8.14 8.14 0 0 0 18.9 10c0-4.521-3.679-8.2-8.2-8.2S2.5 5.479 2.5 10s3.679 8.2 8.2 8.2a8.175 8.175 0 0 0 5.126-1.81l4.658 5.475a.502.502 0 0 0 .705.057.5.5 0 0 0 .057-.705z"
  }));
};

module.exports.ZoomIn = function ZoomIn(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M10.251 6.989a.5.5 0 0 1-.5.5h-1.5v1.5a.5.5 0 0 1-1 0v-1.5h-1.5a.5.5 0 0 1 0-1h1.5v-1.5a.5.5 0 0 1 1 0v1.5h1.5a.5.5 0 0 1 .5.5zm4.52 7.868a.653.653 0 0 1-.918-.104l-2.854-3.332a5.465 5.465 0 0 1-3.247 1.068 5.5 5.5 0 1 1 5.5-5.5 5.475 5.475 0 0 1-1.31 3.558l2.901 3.387a.654.654 0 0 1-.072.923zm-7.02-3.368c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5 2.019 4.5 4.5 4.5z"
  }));
};

module.exports.ZoomOut24 = function ZoomOut24(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 24 24"
  }), React.createElement("path", {
    d: "M6.7 10.5a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1h-8zm14.546 10.717-4.933-5.798-.001-.001c-.016-.025-.025-.053-.045-.074a.5.5 0 0 0-.707-.031 7.185 7.185 0 0 1-4.86 1.888c-3.97 0-7.2-3.229-7.2-7.2s3.23-7.2 7.2-7.2a7.208 7.208 0 0 1 6.688 9.873.496.496 0 0 0 .278.649.497.497 0 0 0 .649-.278A8.14 8.14 0 0 0 18.9 10c0-4.521-3.679-8.2-8.2-8.2S2.5 5.479 2.5 10s3.679 8.2 8.2 8.2a8.175 8.175 0 0 0 5.126-1.81l4.658 5.475a.502.502 0 0 0 .705.057.5.5 0 0 0 .057-.705z"
  }));
};

module.exports.ZoomOut = function ZoomOut(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    d: "M10.251 6.989a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5zm4.52 7.868a.653.653 0 0 1-.918-.104l-2.854-3.332a5.465 5.465 0 0 1-3.247 1.068 5.5 5.5 0 1 1 5.5-5.5 5.475 5.475 0 0 1-1.31 3.558l2.901 3.387a.654.654 0 0 1-.072.923zm-7.02-3.368c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5 2.019 4.5 4.5 4.5z"
  }));
};

module.exports.ZoomPart = function ZoomPart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 16 16"
  }), React.createElement("path", {
    fill: "#666666",
    d: "M10.494 7.898c0 .221-.178.4-.398.4H8.494v1.6a.4.4 0 1 1-.798 0v-1.6H6.094a.4.4 0 0 1 0-.8h1.602v-1.6a.399.399 0 1 1 .798 0v1.6h1.602a.4.4 0 0 1 .398.4zm3.349 6.077-2.535-2.932a4.483 4.483 0 0 0 1.287-3.145 4.5 4.5 0 1 0-4.5 4.5c.901 0 1.737-.271 2.44-.728h.001c.002.003 0 .009.003.012l2.548 2.946a.5.5 0 0 0 .756-.653zm-5.748-2.577c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.571 3.5-3.5 3.5zM15 10v-.5a.5.5 0 0 0-1 0v.5a.5.5 0 0 0 1 0zm0-3.699V5.234a.5.5 0 0 0-1 0V6.3a.5.5 0 0 0 1 .001zm0-4.265v-.5a.5.5 0 0 0-.5-.5H14a.5.5 0 0 0 0 1 .5.5 0 0 0 1 0zm-3.772-.5a.5.5 0 0 0-.5-.5H9.637a.5.5 0 0 0 0 1h1.091a.5.5 0 0 0 .5-.5zm-4.364 0a.5.5 0 0 0-.5-.5H5.273a.5.5 0 0 0 0 1h1.091a.5.5 0 0 0 .5-.5zM2 2.036a.5.5 0 0 0 0-1h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 1 0zm0 8.701V9.649a.5.5 0 0 0-1 0v1.088a.5.5 0 0 0 1 0zm0-4.35V5.299a.5.5 0 0 0-1 0v1.088a.5.5 0 0 0 1 0zm.5 8.113A.5.5 0 0 0 2 14a.5.5 0 0 0-1 0v.5a.5.5 0 0 0 .5.5H2a.5.5 0 0 0 .5-.5zm3.161 0a.5.5 0 0 0-.5-.5h-.79a.5.5 0 0 0 0 1h.79a.5.5 0 0 0 .5-.5zm2.87 0a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 .5-.5z"
  }));
};