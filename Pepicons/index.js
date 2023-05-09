function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require("react");

module.exports.AirplanePrint = function AirplanePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M11.224 13.805c.255 1.835.368 2.978.338 3.48-.046.78-.569 1.602-1.534 2.497a.5.5 0 0 1-.822-.232l-1.335-4.78-.6-.6-4.78-1.335a.5.5 0 0 1-.232-.821c.896-.965 1.717-1.488 2.497-1.535.503-.03 1.647.083 3.482.34l2.431-2.653-6.053-1.692a.5.5 0 0 1-.232-.821c1.385-1.494 2.638-2.291 3.793-2.36.885-.053 2.748.412 5.68 1.396l.445-.484c2.047-2.047 3.733-2.605 4.937-1.401 1.204 1.204.645 2.89-1.418 4.951l-.469.43c.985 2.931 1.45 4.794 1.397 5.68-.069 1.155-.867 2.408-2.36 3.793a.5.5 0 0 1-.822-.232l-1.69-6.053-2.653 2.432z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10.562 16.285c.03-.502-.083-1.645-.338-3.48l2.652-2.432 1.691 6.053a.5.5 0 0 0 .822.232c1.493-1.386 2.291-2.639 2.36-3.793.052-.886-.412-2.749-1.397-5.68l.47-.43c2.062-2.062 2.62-3.747 1.417-4.951-1.204-1.204-2.89-.646-4.937 1.4l-.445.485c-2.932-.984-4.795-1.449-5.68-1.396-1.155.069-2.408.866-3.793 2.36a.5.5 0 0 0 .232.821l6.053 1.692-2.431 2.652c-1.835-.256-2.979-.369-3.482-.339-.78.047-1.6.57-2.497 1.535a.5.5 0 0 0 .232.822l4.78 1.335.6.6 1.335 4.78a.5.5 0 0 0 .822.231c.965-.895 1.488-1.716 1.534-2.497zm-1.365-3.6c.27 1.91.393 3.11.367 3.541-.02.332-.225.742-.629 1.217L7.8 13.375a.5.5 0 0 0-.128-.219l-.786-.785a.5.5 0 0 0-.219-.128L2.6 11.107c.475-.404.884-.61 1.217-.63.431-.025 1.631.097 3.543.368a.5.5 0 0 0 .438-.157l3.16-3.447a.5.5 0 0 0-.234-.82L4.7 4.74c.979-.93 1.83-1.406 2.535-1.448.734-.043 2.637.44 5.608 1.45a.5.5 0 0 0 .53-.136l.65-.709c1.692-1.69 2.827-2.066 3.508-1.385.68.681.305 1.815-1.402 3.522l-.693.635a.5.5 0 0 0-.136.53c1.009 2.97 1.493 4.874 1.45 5.608-.042.704-.518 1.556-1.449 2.535L13.62 9.319a.5.5 0 0 0-.82-.234l-3.446 3.16a.5.5 0 0 0-.157.44z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Airplane = function Airplane(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m10.755 12.996 1.859-1.704 1.472 5.269a1 1 0 0 0 1.643.464c1.579-1.465 2.44-2.82 2.519-4.13.056-.941-.382-2.74-1.319-5.56l.23-.211c2.249-2.248 2.899-4.208 1.433-5.674-1.465-1.465-3.426-.816-5.644 1.4l-.24.262c-2.821-.936-4.62-1.374-5.561-1.318-1.311.078-2.665.94-4.13 2.519a1 1 0 0 0 .464 1.643l5.27 1.472-1.704 1.859c-1.72-.236-2.798-.338-3.32-.307-.937.056-1.859.643-2.834 1.694a1 1 0 0 0 .464 1.643l4.653 1.3.415.414 1.3 4.654a1 1 0 0 0 1.643.464c1.05-.975 1.638-1.897 1.694-2.834.03-.522-.072-1.6-.307-3.319zm-1.739-1.119a1 1 0 0 0-.314.877c.239 1.687.36 2.816.366 3.304l-.788-2.817a1 1 0 0 0-.256-.438l-.785-.786a1 1 0 0 0-.438-.256l-2.818-.787c.488.005 1.619.127 3.305.366a1 1 0 0 0 .878-.314l3.16-3.447a1 1 0 0 0-.469-1.639L5.734 4.51c.599-.46 1.114-.694 1.532-.719.642-.038 2.515.439 5.418 1.424a1 1 0 0 0 1.058-.271l.65-.709c1.507-1.505 2.366-1.79 2.786-1.37.42.42.135 1.279-1.402 2.816l-.677.62a1 1 0 0 0-.271 1.058c.985 2.902 1.462 4.776 1.423 5.418-.024.417-.259.933-.718 1.532l-1.431-5.123a1 1 0 0 0-1.64-.468l-3.446 3.16z",
    "clip-rule": "evenodd"
  }));
};

module.exports.AngleDownPrint = function AngleDownPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m12 11.547-5.04-4.2c-1.536-1.28-3.457 1.025-1.92 2.305l5.948 4.957c.272.256.63.42 1.012.418.382.002.74-.162 1.012-.418l5.948-4.957c1.537-1.28-.384-3.585-1.92-2.304l-5.04 4.2z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "m15.68 7.116-6 5 .64.768 6-5-.64-.768z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m16.32 7.884-6 5c-.512.427-1.152-.341-.64-.768l6-5c.512-.427 1.152.341.64.768z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m3.68 7.884 6 5 .64-.768-6-5-.64.768z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m4.32 7.116 6 5c.512.427-.128 1.195-.64.768l-6-5c-.512-.427.128-1.195.64-.768z"
  })));
};

module.exports.AngleDown = function AngleDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "m16.64 8.268-6 5c-1.024.854-2.304-.683-1.28-1.536l6-5c1.024-.854 2.305.683 1.28 1.536z"
  }), React.createElement("path", {
    d: "m4.64 6.732 6 5c1.024.853-.256 2.39-1.28 1.536l-6-5c-1.024-.853.256-2.39 1.28-1.536z"
  })));
};

module.exports.AngleLeftPrint = function AngleLeftPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m11.453 11 4.2-5.04c1.28-1.536-1.025-3.457-2.305-1.92L8.39 9.988c-.256.272-.42.63-.418 1.012-.002.382.162.74.418 1.012l4.957 5.948c1.28 1.537 3.585-.384 2.304-1.92l-4.2-5.04z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "m12.384 15.68-5-6-.768.64 5 6 .768-.64z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m11.616 16.32-5-6c-.427-.512.341-1.152.768-.64l5 6c.427.512-.341 1.152-.768.64z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m11.616 3.68-5 6 .768.64 5-6-.768-.64z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m12.384 4.32-5 6c-.427.512-1.195-.128-.768-.64l5-6c.427-.512 1.195.128.768.64z"
  })));
};

module.exports.AngleLeft = function AngleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M6.732 10.64a1 1 0 1 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28l-5-6z"
  }), React.createElement("path", {
    d: "M8.268 10.64a1 1 0 1 1-1.536-1.28l5-6a1 1 0 1 1 1.536 1.28l-5 6z"
  })));
};

module.exports.AngleRightPrint = function AngleRightPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M15.812 11.729a1.49 1.49 0 0 1-.176.252l-4.984 5.98a1.5 1.5 0 0 1-2.304-1.921l4.2-5.04-4.2-5.04a1.5 1.5 0 1 1 2.304-1.92l5 6a1.5 1.5 0 0 1 .16 1.689z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M7.116 4.32a.5.5 0 1 1 .768-.64l5 6a.5.5 0 0 1-.768.64l-5-6z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M7.884 16.32a.5.5 0 0 1-.768-.64l5-6a.5.5 0 1 1 .768.64l-5 6z"
  })));
};

module.exports.AngleRight = function AngleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M11.732 9.36a1 1 0 1 1 1.536 1.28l-5 6a1 1 0 1 1-1.536-1.28l5-6z"
  }), React.createElement("path", {
    d: "M6.732 4.64a1 1 0 0 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28l-5-6z"
  })));
};

module.exports.AngleUpPrint = function AngleUpPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10.988 7.391 5.04 12.348c-1.537 1.28.384 3.585 1.92 2.304l5.04-4.2 5.04 4.2c1.536 1.28 3.457-1.024 1.92-2.304L13.012 7.39A1.482 1.482 0 0 0 12 6.973a1.482 1.482 0 0 0-1.012.418z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "m16.32 12.116-6-5-.64.768 6 5 .64-.768z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m15.68 12.884-6-5c-.512-.427.128-1.195.64-.768l6 5c.512.427-.128 1.195-.64.768z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m4.32 12.884 6-5-.64-.768-6 5 .64.768z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m3.68 12.116 6-5c.512-.427 1.152.341.64.768l-6 5c-.512.427-1.152-.341-.64-.768z"
  })));
};

module.exports.AngleUp = function AngleUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "m15.36 13.268-6-5c-1.025-.853.256-2.39 1.28-1.536l6 5c1.024.853-.256 2.39-1.28 1.536z"
  }), React.createElement("path", {
    d: "m3.36 11.732 6-5c1.024-.854 2.305.683 1.28 1.536l-6 5c-1.024.854-2.305-.683-1.28-1.536z"
  })));
};

module.exports.ArrowDownLeftPrint = function ArrowDownLeftPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M15.144 14.143a1.5 1.5 0 0 1-1.63 1.358l-5.185-.472a1.5 1.5 0 0 1 .271-2.987l5.186.471a1.5 1.5 0 0 1 1.358 1.63z"
  }), React.createElement("path", {
    d: "M7.857 6.856a1.5 1.5 0 0 1 1.63 1.358l.471 5.186a1.5 1.5 0 1 1-2.987.271l-.472-5.185a1.5 1.5 0 0 1 1.358-1.63z"
  }), React.createElement("path", {
    d: "M8.818 13.182a1.5 1.5 0 0 1 0-2.121l5.657-5.657a1.5 1.5 0 0 1 2.121 2.121l-5.657 5.657a1.5 1.5 0 0 1-2.12 0z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M12.148 14.052a.5.5 0 0 1-.543.453l-5.186-.472a.5.5 0 1 1 .09-.995l5.186.471a.5.5 0 0 1 .453.543z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.948 7.852a.5.5 0 0 1 .543.453l.471 5.185a.5.5 0 1 1-.995.09l-.472-5.185a.5.5 0 0 1 .453-.543z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.646 13.354a.5.5 0 0 1 0-.708l6.536-6.535a.5.5 0 0 1 .707.707l-6.535 6.536a.5.5 0 0 1-.708 0z"
  })));
};

module.exports.ArrowDownLeft = function ArrowDownLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M12.646 14.098a1 1 0 0 1-1.087.905l-5.185-.472a1 1 0 1 1 .181-1.991l5.186.471a1 1 0 0 1 .905 1.087z"
  }), React.createElement("path", {
    d: "M5.903 7.354a1 1 0 0 1 1.086.906l.471 5.185a1 1 0 1 1-1.991.181l-.472-5.185a1 1 0 0 1 .906-1.087z"
  }), React.createElement("path", {
    d: "M7.172 12.829a1 1 0 0 1 0-1.415l5.656-5.656a1 1 0 1 1 1.415 1.414l-5.657 5.657a1 1 0 0 1-1.414 0z"
  })));
};

module.exports.ArrowDownPrint = function ArrowDownPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M17.152 11.206a1.5 1.5 0 0 1-.192 2.113l-4 3.333a1.5 1.5 0 1 1-1.92-2.304l4-3.334a1.5 1.5 0 0 1 2.112.192z"
  }), React.createElement("path", {
    d: "M6.848 11.206a1.5 1.5 0 0 1 2.112-.192l4 3.334a1.5 1.5 0 1 1-1.92 2.304l-4-3.333a1.5 1.5 0 0 1-.192-2.113z"
  }), React.createElement("path", {
    d: "M12 15a1.5 1.5 0 0 1-1.5-1.5v-8a1.5 1.5 0 0 1 3 0v8A1.5 1.5 0 0 1 12 15z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M14.384 11.347a.5.5 0 0 1-.064.704l-4 3.333a.5.5 0 0 1-.64-.768l4-3.333a.5.5 0 0 1 .704.064z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.616 11.347a.5.5 0 0 1 .704-.064l4 3.333a.5.5 0 0 1-.64.768l-4-3.333a.5.5 0 0 1-.064-.704z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10 15a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 1 0v9.5a.5.5 0 0 1-.5.5z"
  })));
};

module.exports.ArrowDownRightPrint = function ArrowDownRightPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M16.143 6.856a1.5 1.5 0 0 1 1.358 1.63l-.472 5.185a1.5 1.5 0 0 1-2.987-.271l.471-5.186a1.5 1.5 0 0 1 1.63-1.358z"
  }), React.createElement("path", {
    d: "M8.856 14.143a1.5 1.5 0 0 1 1.358-1.63l5.186-.471a1.5 1.5 0 1 1 .271 2.987l-5.185.472a1.5 1.5 0 0 1-1.63-1.358z"
  }), React.createElement("path", {
    d: "M15.182 13.182a1.5 1.5 0 0 1-2.121 0L7.404 7.525a1.5 1.5 0 0 1 2.121-2.121l5.657 5.657a1.5 1.5 0 0 1 0 2.121z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M14.052 7.852a.5.5 0 0 1 .453.543l-.472 5.186a.5.5 0 1 1-.995-.09l.47-5.186a.5.5 0 0 1 .544-.453z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M7.852 14.052a.5.5 0 0 1 .453-.543l5.185-.471a.5.5 0 0 1 .09.995l-5.185.472a.5.5 0 0 1-.543-.453z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.354 13.354a.5.5 0 0 1-.708 0L6.111 6.818a.5.5 0 1 1 .707-.707l6.536 6.535a.5.5 0 0 1 0 .708z"
  })));
};

module.exports.ArrowDownRight = function ArrowDownRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M14.098 7.354a1 1 0 0 1 .905 1.087l-.472 5.185a1 1 0 1 1-1.991-.18l.471-5.186a1 1 0 0 1 1.087-.906z"
  }), React.createElement("path", {
    d: "M7.354 14.098a1 1 0 0 1 .906-1.087l5.185-.471a1 1 0 1 1 .181 1.991l-5.185.472a1 1 0 0 1-1.087-.905z"
  }), React.createElement("path", {
    d: "M12.828 12.829a1 1 0 0 1-1.414 0L5.757 7.171a1 1 0 1 1 1.415-1.415l5.656 5.657a1 1 0 0 1 0 1.415z"
  })));
};

module.exports.ArrowDown = function ArrowDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M14.768 11.027a1 1 0 0 1-.128 1.408l-4 3.333a1 1 0 0 1-1.28-1.536l4-3.334a1 1 0 0 1 1.408.129z"
  }), React.createElement("path", {
    d: "M5.232 11.027a1 1 0 0 1 1.408-.129l4 3.334a1 1 0 1 1-1.28 1.536l-4-3.333a1 1 0 0 1-.128-1.409z"
  }), React.createElement("path", {
    d: "M10 14a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1z"
  })));
};

module.exports.ArrowLeftPrint = function ArrowLeftPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M11.294 15.652a1.5 1.5 0 0 1-2.113-.192l-3.333-4a1.5 1.5 0 1 1 2.304-1.92l3.334 4a1.5 1.5 0 0 1-.192 2.112z"
  }), React.createElement("path", {
    d: "M11.294 5.348a1.5 1.5 0 0 1 .192 2.112l-3.334 4a1.5 1.5 0 0 1-2.304-1.92l3.333-4a1.5 1.5 0 0 1 2.113-.192z"
  }), React.createElement("path", {
    d: "M7.5 10.5A1.5 1.5 0 0 1 9 9h8a1.5 1.5 0 0 1 0 3H9a1.5 1.5 0 0 1-1.5-1.5z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M8.653 14.384a.5.5 0 0 1-.704-.064l-3.333-4a.5.5 0 0 1 .768-.64l3.333 4a.5.5 0 0 1-.064.704z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8.653 5.616a.5.5 0 0 1 .064.704l-3.333 4a.5.5 0 0 1-.768-.64l3.333-4a.5.5 0 0 1 .704-.064z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5 10a.5.5 0 0 1 .5-.5H15a.5.5 0 0 1 0 1H5.5A.5.5 0 0 1 5 10z"
  })));
};

module.exports.ArrowLeft = function ArrowLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M8.974 14.768a1 1 0 0 1-1.409-.128l-3.333-4a1 1 0 1 1 1.536-1.28l3.334 4a1 1 0 0 1-.128 1.408z"
  }), React.createElement("path", {
    d: "M8.974 5.232a1 1 0 0 1 .128 1.408l-3.334 4a1 1 0 1 1-1.536-1.28l3.333-4a1 1 0 0 1 1.409-.128z"
  }), React.createElement("path", {
    d: "M6 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1z"
  })));
};

module.exports.ArrowRightPrint = function ArrowRightPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M12.206 5.848a1.5 1.5 0 0 1 2.113.192l3.333 4a1.5 1.5 0 1 1-2.304 1.92l-3.334-4a1.5 1.5 0 0 1 .192-2.112z"
  }), React.createElement("path", {
    d: "M12.206 16.152a1.5 1.5 0 0 1-.192-2.112l3.334-4a1.5 1.5 0 0 1 2.304 1.92l-3.333 4a1.5 1.5 0 0 1-2.113.192z"
  }), React.createElement("path", {
    d: "M16 11a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1 0-3h8A1.5 1.5 0 0 1 16 11z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M11.347 5.616a.5.5 0 0 1 .704.064l3.333 4a.5.5 0 0 1-.768.64l-3.333-4a.5.5 0 0 1 .064-.704z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.347 14.384a.5.5 0 0 1-.064-.704l3.333-4a.5.5 0 0 1 .768.64l-3.333 4a.5.5 0 0 1-.704.064z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M15.5 10a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 .5.5z"
  })));
};

module.exports.ArrowRight = function ArrowRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M11.026 5.232a1 1 0 0 1 1.409.128l3.333 4a1 1 0 0 1-1.536 1.28l-3.334-4a1 1 0 0 1 .128-1.408z"
  }), React.createElement("path", {
    d: "M11.026 14.768a1 1 0 0 1-.128-1.408l3.334-4a1 1 0 0 1 1.536 1.28l-3.333 4a1 1 0 0 1-1.409.128z"
  }), React.createElement("path", {
    d: "M14 10a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1z"
  })));
};

module.exports.ArrowUpLeftPrint = function ArrowUpLeftPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M7.857 13.64A1.5 1.5 0 0 1 6.5 12.012l.472-5.185a1.5 1.5 0 0 1 2.987.271l-.471 5.186a1.5 1.5 0 0 1-1.63 1.358z"
  }), React.createElement("path", {
    d: "M15.144 6.354a1.5 1.5 0 0 1-1.358 1.63L8.6 8.455a1.5 1.5 0 0 1-.271-2.987l5.185-.472a1.5 1.5 0 0 1 1.63 1.358z"
  }), React.createElement("path", {
    d: "M8.818 7.315a1.5 1.5 0 0 1 2.121 0l5.657 5.657a1.5 1.5 0 0 1-2.121 2.121L8.818 9.437a1.5 1.5 0 0 1 0-2.122z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M5.948 12.145a.5.5 0 0 1-.453-.543l.471-5.186a.5.5 0 0 1 .996.09l-.471 5.186a.5.5 0 0 1-.543.453z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.148 5.945a.5.5 0 0 1-.453.543L6.51 6.96a.5.5 0 0 1-.09-.996l5.185-.472a.5.5 0 0 1 .543.453z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.647 6.643a.5.5 0 0 1 .707 0l6.535 6.536a.5.5 0 1 1-.707.707L6.646 7.351a.5.5 0 0 1 0-.708z"
  })));
};

module.exports.ArrowUpLeft = function ArrowUpLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M5.903 12.646a1 1 0 0 1-.906-1.087l.472-5.185a1 1 0 0 1 1.991.181l-.471 5.186a1 1 0 0 1-1.086.905z"
  }), React.createElement("path", {
    d: "M12.646 5.903a1 1 0 0 1-.905 1.086l-5.186.471a1 1 0 0 1-.181-1.991l5.185-.472a1 1 0 0 1 1.087.906z"
  }), React.createElement("path", {
    d: "M7.172 7.172a1 1 0 0 1 1.414 0l5.657 5.656a1 1 0 0 1-1.415 1.415L7.172 8.586a1 1 0 0 1 0-1.414z"
  })));
};

module.exports.ArrowUpPrint = function ArrowUpPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M6.848 9.794A1.5 1.5 0 0 1 7.04 7.68l4-3.333a1.5 1.5 0 0 1 1.92 2.304l-4 3.334a1.5 1.5 0 0 1-2.112-.192z"
  }), React.createElement("path", {
    d: "M17.152 9.794a1.5 1.5 0 0 1-2.112.192l-4-3.334a1.5 1.5 0 1 1 1.92-2.304l4 3.333a1.5 1.5 0 0 1 .192 2.113z"
  }), React.createElement("path", {
    d: "M12 6a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-3 0v-8A1.5 1.5 0 0 1 12 6z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M5.616 8.653a.5.5 0 0 1 .064-.704l4-3.333a.5.5 0 1 1 .64.768l-4 3.333a.5.5 0 0 1-.704-.064z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14.384 8.653a.5.5 0 0 1-.704.064l-4-3.333a.5.5 0 1 1 .64-.768l4 3.333a.5.5 0 0 1 .064.704z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10 5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-1 0V5.5A.5.5 0 0 1 10 5z"
  })));
};

module.exports.ArrowUpRightPrint = function ArrowUpRightPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M8.856 6.357A1.5 1.5 0 0 1 10.486 5l5.185.472a1.5 1.5 0 0 1-.271 2.987l-5.186-.471a1.5 1.5 0 0 1-1.358-1.63z"
  }), React.createElement("path", {
    d: "M16.143 13.644a1.5 1.5 0 0 1-1.63-1.358L14.042 7.1a1.5 1.5 0 0 1 2.987-.271l.472 5.185a1.5 1.5 0 0 1-1.358 1.63z"
  }), React.createElement("path", {
    d: "M15.182 7.318a1.5 1.5 0 0 1 0 2.121l-5.657 5.657a1.5 1.5 0 1 1-2.121-2.121l5.657-5.657a1.5 1.5 0 0 1 2.12 0z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M7.852 5.952a.5.5 0 0 1 .543-.453l5.186.472a.5.5 0 0 1-.09.996l-5.186-.472a.5.5 0 0 1-.453-.543z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14.052 12.152a.5.5 0 0 1-.543-.453l-.472-5.185a.5.5 0 0 1 .996-.09l.472 5.185a.5.5 0 0 1-.453.543z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.354 6.65a.5.5 0 0 1 0 .708l-6.536 6.535a.5.5 0 0 1-.707-.707l6.535-6.536a.5.5 0 0 1 .707 0z"
  })));
};

module.exports.ArrowUpRight = function ArrowUpRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M7.354 5.903a1 1 0 0 1 1.087-.906l5.185.472a1 1 0 1 1-.181 1.991l-5.186-.47a1 1 0 0 1-.905-1.087z"
  }), React.createElement("path", {
    d: "M14.097 12.646a1 1 0 0 1-1.086-.905l-.471-5.186a1 1 0 1 1 1.991-.181l.472 5.185a1 1 0 0 1-.906 1.087z"
  }), React.createElement("path", {
    d: "M12.828 7.172a1 1 0 0 1 0 1.414l-5.656 5.657a1 1 0 0 1-1.415-1.415l5.657-5.656a1 1 0 0 1 1.414 0z"
  })));
};

module.exports.ArrowUp = function ArrowUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M5.232 8.974a1 1 0 0 1 .128-1.409l4-3.333a1 1 0 1 1 1.28 1.536l-4 3.334a1 1 0 0 1-1.408-.128z"
  }), React.createElement("path", {
    d: "M14.768 8.974a1 1 0 0 1-1.408.128l-4-3.334a1 1 0 1 1 1.28-1.536l4 3.333a1 1 0 0 1 .128 1.409z"
  }), React.createElement("path", {
    d: "M10 6a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"
  })));
};

module.exports.BatteryPrint = function BatteryPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("rect", {
    width: "13",
    height: "8",
    x: "3",
    y: "7",
    rx: "1"
  }), React.createElement("rect", {
    width: "2",
    height: "5",
    x: "16.5",
    y: "8.5",
    rx: ".5"
  })), React.createElement("rect", {
    width: "2",
    height: "5",
    x: "16",
    y: "7.5",
    fill: "#000",
    rx: ".5"
  }), React.createElement("path", {
    fill: "#000",
    d: "M4 7.5h2.5v5H4v-5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M7.25 7.5h2.5v5h-2.5v-5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10.5 7.5H13v5h-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14 5.5H3A1.5 1.5 0 0 0 1.5 7v6A1.5 1.5 0 0 0 3 14.5h11a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 14 5.5zM2.5 7a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V7z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Battery = function Battery(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("rect", {
    width: "2",
    height: "5",
    x: "17",
    y: "7.5",
    rx: ".5"
  }), React.createElement("path", {
    d: "M4 7.5h3v5H4v-5z"
  }), React.createElement("path", {
    d: "M7.5 7.5h3v5h-3v-5z"
  }), React.createElement("path", {
    d: "M11 7.5h3v5h-3v-5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14 4.5H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3zm-11 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5z",
    "clip-rule": "evenodd"
  })));
};

module.exports.BellOffPrint = function BellOffPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.5 5.022a5.5 5.5 0 0 1 5 5.478v2.925A2.96 2.96 0 0 1 19 16a2 2 0 0 1-2 2h-3.5a2 2 0 1 1-4 0H6a2 2 0 0 1-2-2 2.96 2.96 0 0 1 1.5-2.575V10.5a5.5 5.5 0 0 1 5-5.478V3a1 1 0 1 1 2 0v2.022z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8 17a.5.5 0 0 1 1 0 1 1 0 1 0 2 0 .5.5 0 0 1 1 0 2 2 0 1 1-4 0z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M17.5 14.5a2.96 2.96 0 0 0-1.5-2.575V9a5.5 5.5 0 0 0-5.5-5.5h-1A5.5 5.5 0 0 0 4 9v2.925A2.96 2.96 0 0 0 2.5 14.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2zM15 12.558l.295.133.055.024A1.96 1.96 0 0 1 16.5 14.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1c0-.769.45-1.467 1.15-1.784l.055-.025.295-.133V9a4.5 4.5 0 0 1 4.5-4.5h1A4.5 4.5 0 0 1 15 9v3.558z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 1.5a.5.5 0 0 1 1 0V4a.5.5 0 0 1-1 0V1.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M2.648 2.89a.5.5 0 0 1 .707-.708l16 16a.5.5 0 1 1-.707.707l-16-16z"
  })));
};

module.exports.BellOff = function BellOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M7.5 17a1 1 0 1 1 2 0 .5.5 0 0 0 1 0 1 1 0 1 1 2 0 2.5 2.5 0 0 1-5 0z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M18 14.5a3.46 3.46 0 0 0-1.5-2.851V9a6 6 0 0 0-6-6h-1a6 6 0 0 0-6 6v2.649A3.46 3.46 0 0 0 2 14.5 2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5zm-3.5-1.618.59.265.053.024c.522.237.857.756.857 1.329a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5c0-.573.335-1.092.857-1.33l.053-.023.59-.265V9a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v3.882z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M9 1.5a1 1 0 0 1 2 0V4a1 1 0 1 1-2 0V1.5z"
  }), React.createElement("path", {
    d: "M.82 4.525a1 1 0 1 1 1.363-1.462l16.04 14.957a1 1 0 0 1-1.364 1.463L.82 4.525z"
  })));
};

module.exports.BellPrint = function BellPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.5 5.022a5.5 5.5 0 0 1 5 5.478v2.925A2.96 2.96 0 0 1 19 16a2 2 0 0 1-2 2h-3.5a2 2 0 1 1-4 0H6a2 2 0 0 1-2-2 2.96 2.96 0 0 1 1.5-2.575V10.5a5.5 5.5 0 0 1 5-5.478V3a1 1 0 1 1 2 0v2.022z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8 17a.5.5 0 0 1 1 0 1 1 0 1 0 2 0 .5.5 0 0 1 1 0 2 2 0 1 1-4 0z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M17.5 14.5a2.96 2.96 0 0 0-1.5-2.575V9a5.5 5.5 0 0 0-5.5-5.5h-1A5.5 5.5 0 0 0 4 9v2.925A2.96 2.96 0 0 0 2.5 14.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2zM15 12.558l.295.133.055.024A1.96 1.96 0 0 1 16.5 14.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1c0-.769.45-1.467 1.15-1.784l.055-.025.295-.133V9a4.5 4.5 0 0 1 4.5-4.5h1A4.5 4.5 0 0 1 15 9v3.558z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 1.5a.5.5 0 0 1 1 0V4a.5.5 0 0 1-1 0V1.5z"
  })));
};

module.exports.Bell = function Bell(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M7.5 17a1 1 0 1 1 2 0 .5.5 0 0 0 1 0 1 1 0 1 1 2 0 2.5 2.5 0 0 1-5 0z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M18 14.5a3.46 3.46 0 0 0-1.5-2.851V9a6 6 0 0 0-6-6h-1a6 6 0 0 0-6 6v2.649A3.46 3.46 0 0 0 2 14.5 2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5zm-3.5-1.618.59.265.053.024c.522.237.857.756.857 1.329a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5c0-.573.335-1.092.857-1.33l.053-.023.59-.265V9a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v3.882z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M9 1.5a1 1 0 0 1 2 0V4a1 1 0 1 1-2 0V1.5z"
  })));
};

module.exports.BicyclePrint = function BicyclePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5 20a4 4 0 0 0 3.969-3.5h1.742a.5.5 0 0 0 .477-.65l-.036-.114 3.214-5.413.446 1.856A4.002 4.002 0 0 0 16 20a4 4 0 0 0 .314-7.988L14.44 4.201c1.155-.043 2.038.01 2.638.151.534.126.672.243.672.326 0 .511-.24.67-1.175.576a.75.75 0 0 0-.15 1.492c1.732.174 2.825-.549 2.825-2.068 0-1.704-1.99-2.182-5.74-1.93a.831.831 0 0 0-.231.035c-.338.102-.61.416-.514.869a.89.89 0 0 0 .009.037l1.183 4.93H8.925L8.341 6.75H9.5a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5h1.793l.83 2.654-1.431 2.97A4 4 0 1 0 5 20z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M15.5 18.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-7a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M4.5 18.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-7a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5 5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1H5z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m10.475 14.343-.035-.104 3.984-6.355A.5.5 0 0 0 14 7.12H8.09l-.917-2.776a.5.5 0 1 0-.95.314l1.072 3.245-3.24 6.372A.5.5 0 0 0 4.5 15H10a.5.5 0 0 0 .475-.657zM5.315 14h3.993L7.736 9.24 5.316 14zM8.42 8.12l1.614 4.887 3.064-4.887H8.419z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.544 2.999a.5.5 0 1 1-.086-.996C17.113 1.687 19 2.064 19 3.5c0 1.265-.908 1.946-2.483 2a.5.5 0 1 1-.034-1C17.575 4.463 18 4.144 18 3.5c0-.474-1.445-.763-4.457-.502z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m13.993 2.418 2 12c.11.657-.877.822-.986.164l-2-12c-.11-.657.877-.822.986-.164z"
  })));
};

module.exports.Bicycle = function Bicycle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M13.062 3.936a1 1 0 1 1-.124-1.996C16.828 1.7 19 2.46 19 4.44c0 1.574-.978 2.274-2.855 2.55a1 1 0 1 1-.29-1.98C16.87 4.862 17 4.77 17 4.44c0-.296-1.094-.68-3.938-.504z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.5 20a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.5 20a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M5 6.5a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2H5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.5 16.5H10a1 1 0 0 0 .983-1.185l3.864-6.165A1 1 0 0 0 14 7.619H8.45l-.802-2.432a1 1 0 0 0-1.9.627L6.755 8.86l-3.146 6.186A1 1 0 0 0 4.5 16.5zm3.138-4.964L6.13 14.5h2.487l-.979-2.964zm2.536 1.303 2.019-3.22H9.111l1.063 3.22z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "m13.98 2.743 2.5 12.562c.261 1.308-1.7 1.698-1.96.39l-2.5-12.562c-.261-1.307 1.7-1.698 1.96-.39z"
  })));
};

module.exports.BluetoothPrint = function BluetoothPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m12 11.797-6.556 4.808a.75.75 0 0 1-.888-1.21l6.676-4.895-6.676-4.895a.75.75 0 0 1 .888-1.21L12 9.203V1.5a.5.5 0 0 1 .8-.4l6 4.5a.5.5 0 0 1 0 .8l-5.467 4.1 5.467 4.1a.5.5 0 0 1 0 .8l-6 4.5a.5.5 0 0 1-.8-.4v-7.703z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m11.232 10.398 5.571-4.25a.5.5 0 0 0 0-.796l-5.571-4.25a.5.5 0 0 0-.803.398V10a.5.5 0 0 0 .803.398zm.197-1.408V2.51l4.247 3.24-4.247 3.24z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m11.232 18.898 5.571-4.25a.5.5 0 0 0 0-.796l-5.571-4.25a.5.5 0 0 0-.803.398v8.5a.5.5 0 0 0 .803.398zm.197-7.888 4.247 3.24-4.247 3.24v-6.48z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.227 9.6a.5.5 0 1 1-.597.8L3.665 5.207a.5.5 0 1 1 .598-.801L11.227 9.6z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.227 10.4a.5.5 0 1 0-.597-.8l-6.965 5.194a.5.5 0 0 0 .598.801l6.964-5.194z"
  })));
};

module.exports.Bluetooth = function Bluetooth(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "m11.535 10.795 5.572-4.25a1 1 0 0 0 0-1.59L11.535.705A1 1 0 0 0 9.93 1.5V10a1 1 0 0 0 1.606.795zm.394-7.274L14.85 5.75l-2.92 2.23V3.52z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "m11.535 19.295 5.572-4.25a1 1 0 0 0 0-1.59l-5.572-4.25A1 1 0 0 0 9.93 10v8.5a1 1 0 0 0 1.606.795zm.394-7.274 2.922 2.229-2.922 2.23v-4.46z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M11.526 9.198a1 1 0 1 1-1.195 1.604L3.366 5.607a1 1 0 1 1 1.196-1.603l6.964 5.194z"
  }), React.createElement("path", {
    d: "M11.526 10.802a1 1 0 1 0-1.195-1.604l-6.965 5.195a1 1 0 0 0 1.196 1.603l6.964-5.194z"
  })));
};

module.exports.BookPrint = function BookPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "m11 5.79 7.314-1.27a1.5 1.5 0 0 1 .242-.02c.801 0 1.444.664 1.444 1.475v9.786c0 .72-.511 1.34-1.213 1.456l-7.705 1.276a.499.499 0 0 1-.18-.002l-7.647-1.267A1.5 1.5 0 0 1 2 15.744V6.011a1.5 1.5 0 0 1 1.756-1.478L11 5.79z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10.08 4.304 2.244 3.019A1.5 1.5 0 0 0 .5 4.5v9.738a1.5 1.5 0 0 0 1.268 1.482l8.155 1.275a.5.5 0 0 0 .577-.494V4.797a.5.5 0 0 0-.42-.493zm-8-.298L9.5 5.222v10.694L1.923 14.73a.5.5 0 0 1-.423-.493V4.5a.5.5 0 0 1 .58-.494z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M18 3a1.5 1.5 0 0 0-.243.02L9.92 4.303a.5.5 0 0 0-.419.493V16.5a.5.5 0 0 0 .577.494l8.155-1.275a1.5 1.5 0 0 0 1.268-1.482V4.5A1.5 1.5 0 0 0 18 3zm.077 11.73L10.5 15.916V5.222l7.42-1.216a.501.501 0 0 1 .58.494v9.737a.5.5 0 0 1-.423.493z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Book = function Book(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M11 5.297a1 1 0 0 0-.838-.987L2.323 3.026A2 2 0 0 0 0 5v9.737a2 2 0 0 0 1.69 1.975l8.155 1.276A1 1 0 0 0 11 17V5.297zm-9 9.44V5l7 1.147v9.684l-7-1.094z"
  }), React.createElement("path", {
    d: "M20 5a2 2 0 0 0-2.323-1.974L9.838 4.31A1 1 0 0 0 9 5.297V17a1 1 0 0 0 1.155.988l8.154-1.276A2 2 0 0 0 20 14.737V5zm-2 9.737-7 1.094V6.147L18 5v9.737z"
  })));
};

module.exports.BookmarkFilled = function BookmarkFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m10 13.467-3.755 4.2C5.634 18.35 4.5 17.918 4.5 17V3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v14c0 .918-1.133 1.35-1.745.666L10 13.467z"
  }));
};

module.exports.BookmarkPrint = function BookmarkPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "m12 14.676-4.645 4.676A.5.5 0 0 1 6.5 19V5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.855.352L12 14.676z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5.355 17.352 10 12.676l4.645 4.676A.5.5 0 0 0 15.5 17V3a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .855.352zm.145-1.565V3.5h9v12.287l-4.145-4.172a.5.5 0 0 0-.71 0L5.5 15.787z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Bookmark = function Bookmark(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.245 17.666 10 13.467l3.755 4.2c.611.684 1.745.251 1.745-.667V3a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v14c0 .918 1.134 1.35 1.745.666zm.255-3.285V4h7v10.381l-2.755-3.08a1 1 0 0 0-1.49 0L6.5 14.38z",
    "clip-rule": "evenodd"
  }));
};

module.exports.BuildingPrint = function BuildingPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M17 18.25h2a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h2V6.308C7 4.772 8.102 3.5 9.5 3.5h5c1.398 0 2.5 1.272 2.5 2.808V18.25z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M2.5 18.5a.5.5 0 0 1 0-1h16a.5.5 0 0 1 0 1h-16z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.5 17.5a.5.5 0 0 1-1 0V4.808C5.5 3.272 6.602 2 8 2h5c1.398 0 2.5 1.272 2.5 2.808V17.5a.5.5 0 0 1-1 0V4.808C14.5 3.795 13.811 3 13 3H8c-.811 0-1.5.795-1.5 1.808V17.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8.5 4.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 8 6V5a.5.5 0 0 1 .5-.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.5 4.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 11 6V5a.5.5 0 0 1 .5-.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.5 7.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 11 9V8a.5.5 0 0 1 .5-.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.5 10.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.5 13.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8.5 7.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 8 9V8a.5.5 0 0 1 .5-.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8.5 13.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 8 15v-1a.5.5 0 0 1 .5-.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8.5 10.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 8 12v-1a.5.5 0 0 1 .5-.5z"
  })));
};

module.exports.Building = function Building(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M2 18.5a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2H2z"
  }), React.createElement("path", {
    d: "M6.5 17a1 1 0 1 1-2 0V4.308C4.5 2.51 5.809 1 7.5 1h5c1.691 0 3 1.51 3 3.308V17a1 1 0 1 1-2 0V4.308c0-.752-.482-1.308-1-1.308h-5c-.518 0-1 .556-1 1.308V17z"
  }), React.createElement("path", {
    d: "M8 4h1a.5.5 0 0 1 .5.5v1A.5.5 0 0 1 9 6H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 4z"
  }), React.createElement("path", {
    d: "M11 4h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 11 4z"
  }), React.createElement("path", {
    d: "M11 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 11 7z"
  }), React.createElement("path", {
    d: "M11 10h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
  }), React.createElement("path", {
    d: "M11 13h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"
  }), React.createElement("path", {
    d: "M8 7h1a.5.5 0 0 1 .5.5v1A.5.5 0 0 1 9 9H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 7z"
  }), React.createElement("path", {
    d: "M8 13h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 13z"
  }), React.createElement("path", {
    d: "M8 10h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 8 10z"
  })));
};

module.exports.CalculatorPrint = function CalculatorPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 18.105V3.895C4 2.848 4.866 2 5.933 2h10.634c1.067 0 1.933.848 1.933 1.895v14.21c0 1.047-.866 1.895-1.933 1.895H5.933C4.866 20 4 19.152 4 18.105z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M2.5 3v14A2.5 2.5 0 0 0 5 19.5h10a2.5 2.5 0 0 0 2.5-2.5V3A2.5 2.5 0 0 0 15 .5H5A2.5 2.5 0 0 0 2.5 3zM5 18.5A1.5 1.5 0 0 1 3.5 17V3A1.5 1.5 0 0 1 5 1.5h10A1.5 1.5 0 0 1 16.5 3v14a1.5 1.5 0 0 1-1.5 1.5H5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5 7.5v-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12 15.7v-4.9a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8v4.9a.8.8 0 0 1-.8.8h-1.4a.8.8 0 0 1-.8-.8z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5 12v-1.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H5.5A.5.5 0 0 1 5 12z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8.5 12v-1.5A.5.5 0 0 1 9 10h1.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5 16v-1.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V16a.5.5 0 0 1-.5.5H5.5A.5.5 0 0 1 5 16z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8.5 16v-1.5A.5.5 0 0 1 9 14h1.5a.5.5 0 0 1 .5.5V16a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5z"
  })));
};

module.exports.Calculator = function Calculator(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3zm3 15a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M5 7.5v-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"
  }), React.createElement("path", {
    d: "M12 15.7v-4.9a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8v4.9a.8.8 0 0 1-.8.8h-1.4a.8.8 0 0 1-.8-.8z"
  }), React.createElement("path", {
    d: "M5 12v-1.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H5.5A.5.5 0 0 1 5 12z"
  }), React.createElement("path", {
    d: "M8.5 12v-1.5A.5.5 0 0 1 9 10h1.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5z"
  }), React.createElement("path", {
    d: "M5 16v-1.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V16a.5.5 0 0 1-.5.5H5.5A.5.5 0 0 1 5 16z"
  }), React.createElement("path", {
    d: "M8.5 16v-1.5A.5.5 0 0 1 9 14h1.5a.5.5 0 0 1 .5.5V16a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5z"
  })));
};

module.exports.CalendarPrint = function CalendarPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("rect", {
    width: "14",
    height: "12",
    x: "5",
    y: "6",
    fill: "currentColor",
    opacity: ".8",
    rx: "1"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M16.5 4.5h-13A.5.5 0 0 0 3 5v11a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5zM4 15.5v-10h12v10H4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M16.5 4.5h-13A.5.5 0 0 0 3 5v3a.5.5 0 0 0 .5.5h13A.5.5 0 0 0 17 8V5a.5.5 0 0 0-.5-.5zM4 7.5v-2h12v2H4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.5 5.5h1A.5.5 0 0 0 7 5V4a.5.5 0 0 0-.5-.5h-1A.5.5 0 0 0 5 4v1a.5.5 0 0 0 .5.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.5 5.5h1A.5.5 0 0 0 15 5V4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6 11.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  })));
};

module.exports.Calendar = function Calendar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M3 4h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1 4v8h12V8H4z",
    "clip-rule": "evenodd"
  }), React.createElement("circle", {
    cx: "6.5",
    cy: "10.5",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "5.5",
    cy: "4.5",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "14.5",
    cy: "4.5",
    r: "1.5"
  })));
};

module.exports.CameraPrint = function CameraPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M13 6.5H7A2.5 2.5 0 0 0 4.5 9v5A2.5 2.5 0 0 0 7 16.5h6a2.5 2.5 0 0 0 2.5-2.5v-.024l2.348 1.565a.5.5 0 0 0 .777-.416v-7a.5.5 0 0 0-.777-.416L15.5 9.274V9A2.5 2.5 0 0 0 13 6.5z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11 4.5H5A2.5 2.5 0 0 0 2.5 7v5A2.5 2.5 0 0 0 5 14.5h6a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 11 4.5zM3.5 7A1.5 1.5 0 0 1 5 5.5h6A1.5 1.5 0 0 1 12.5 7v5a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V7z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m15.727 5.58-2.976 1.936a.5.5 0 0 0-.228.414l-.027 2.612a.5.5 0 0 0 .227.425l3.004 1.952a.5.5 0 0 0 .773-.419V6a.5.5 0 0 0-.773-.42zm-.227 6-2.001-1.301.021-2.07 1.98-1.287v4.658z"
  })));
};

module.exports.Camera = function Camera(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M11.5 4h-7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-8 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7z"
  }), React.createElement("path", {
    d: "m16.934 5.176-3.468 2.381a1 1 0 0 0-.434.815L13 11.587a1 1 0 0 0 .434.834l3.5 2.403A1 1 0 0 0 18.5 14V6a1 1 0 0 0-1.566-.824zM16.5 12.1l-1.495-1.026.022-2.163L16.5 7.9v4.2z"
  })));
};

module.exports.CanPrint = function CanPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M9 3h5c1.667.667 2.667 1.667 3 3v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6c.333-1.333 1.333-2.333 3-3z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M12.5 2h-5c-1.667.667-2.667 1.667-3 3v10a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V5c-.333-1.333-1.333-2.333-3-3zm-7 13V5.133c.264-.9.969-1.605 2.199-2.133H12.3c1.23.528 1.935 1.233 2.199 2.133V15a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M7 9.5a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm7 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "m12.074 6.505.986.164c-.167 1.006-.673 1.938-1.505 2.79-.83.851-1.964 1.46-3.389 1.834l-.253-.968c1.259-.33 2.231-.853 2.927-1.565.695-.711 1.102-1.46 1.234-2.255z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.342 7.612a.5.5 0 1 1 .989-.149c.161 1.07.03 1.946-.416 2.608-.52.769-1.313 1.207-2.081 1.409-.09.023-.23.055-.445.101l-.613.131-.11.024a23.86 23.86 0 0 0-.623.14c-.228.057-.645.185-1.24.383a.5.5 0 0 1-.316-.949c.62-.206 1.056-.34 1.318-.405.166-.04.375-.087.65-.147l.111-.024.612-.13c.201-.044.33-.073.402-.092.555-.145 1.15-.474 1.505-1 .29-.43.384-1.057.257-1.9z"
  })));
};

module.exports.Can = function Can(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M12.5 2h-5c-1.667.667-2.667 1.667-3 3v10a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V5c-.333-1.333-1.333-2.333-3-3zm-6 13V5.294c.19-.502.624-.926 1.411-1.294h4.178c.787.368 1.221.792 1.411 1.294V15a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z"
  }), React.createElement("path", {
    d: "M7 9.5a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm2.805 1.405c-.248.061-.653.185-1.221.373a3.081 3.081 0 0 1-.061-.085c1.258-.378 2.272-.955 3.032-1.734.682-.697 1.145-1.449 1.382-2.25.149.126.285.266.407.419.124.835.03 1.457-.258 1.884-.356.526-.95.855-1.505 1-.072.019-.202.048-.403.092l-.398.085-.213.045-.113.024c-.274.06-.483.107-.65.148z"
  })));
};

module.exports.CarPrint = function CarPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M7.273 4.002a2 2 0 0 0-1.475 1.452L4.6 10.151a2 2 0 0 0-1.6 1.96V15a2 2 0 0 0 1.164 1.817A1.494 1.494 0 0 0 4 17.5v1a1.5 1.5 0 0 0 3 0v-1c0-.175-.03-.344-.085-.5h9.17a1.497 1.497 0 0 0-.085.5v1a1.5 1.5 0 0 0 3 0v-1c0-.246-.06-.478-.164-.683A2 2 0 0 0 20 15v-2.889a2 2 0 0 0-1.601-1.96l-1.197-4.697a2 2 0 0 0-1.475-1.452A18.211 18.211 0 0 0 11.5 3.5c-1.41 0-2.82.168-4.228.502z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M4.298 3.954 3.1 8.651a2 2 0 0 0-1.601 1.96V13.5a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-2.889a2 2 0 0 0-1.601-1.96l-1.197-4.697a2 2 0 0 0-1.475-1.452A18.211 18.211 0 0 0 10 2c-1.41 0-2.82.168-4.228.502a2 2 0 0 0-1.475 1.452zM3.5 9.611a.5.5 0 0 0 .485-.376L5.267 4.2a1 1 0 0 1 .738-.726A17.224 17.224 0 0 1 10 3c1.33 0 2.662.158 3.995.475a1 1 0 0 1 .737.726l1.282 5.034a.5.5 0 0 0 .485.376 1 1 0 0 1 1 1V13.5a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-2.889a1 1 0 0 1 1-1z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.5 16a1.5 1.5 0 0 0-3 0v1a1.5 1.5 0 0 0 3 0v-1zm-2 0a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M17.5 16a1.5 1.5 0 0 0-3 0v1a1.5 1.5 0 0 0 3 0v-1zm-2 0a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M15 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.648 4.5H7.352a1.5 1.5 0 0 0-1.457 1.143l-.49 2A1.5 1.5 0 0 0 6.862 9.5h6.276a1.5 1.5 0 0 0 1.457-1.857l-.49-2A1.5 1.5 0 0 0 12.647 4.5zM6.866 5.881a.5.5 0 0 1 .486-.381h5.296a.5.5 0 0 1 .485.381l.49 2a.5.5 0 0 1-.485.619H6.862a.5.5 0 0 1-.486-.619l.49-2z"
  })));
};

module.exports.Car = function Car(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.653 2.79a2.5 2.5 0 0 0-1.837 1.823l-1.13 4.523A2.501 2.501 0 0 0 1 11.5v3A2.5 2.5 0 0 0 3.5 17h13a2.5 2.5 0 0 0 2.5-2.5v-3a2.501 2.501 0 0 0-1.685-2.364l-1.131-4.523a2.5 2.5 0 0 0-1.836-1.823A18.399 18.399 0 0 0 10 2.263c-1.45 0-2.9.176-4.348.527zM3.5 11a1 1 0 0 0 .97-.758l1.286-5.144a.5.5 0 0 1 .368-.365A16.411 16.411 0 0 1 10 4.263a16.4 16.4 0 0 1 3.876.47.5.5 0 0 1 .367.365l1.286 5.144a1 1 0 0 0 .97.758.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M16.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
  }), React.createElement("path", {
    d: "M6.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
  }), React.createElement("path", {
    d: "M4 15.5A1.5 1.5 0 0 1 5.5 17v1a1.5 1.5 0 0 1-3 0v-1A1.5 1.5 0 0 1 4 15.5z"
  }), React.createElement("path", {
    d: "M16 15.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-3 0v-1a1.5 1.5 0 0 1 1.5-1.5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.195 5h-4.39a2 2 0 0 0-1.956 1.58l-.429 2A2 2 0 0 0 7.376 11h5.248a1.999 1.999 0 0 0 1.955-2.42l-.429-2A2 2 0 0 0 12.195 5zm-4.82 4 .43-2h4.39l.429 2H7.376z",
    "clip-rule": "evenodd"
  })));
};

module.exports.CartPrint = function CartPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.219 2.75H4.2a.75.75 0 0 1 0-1.5h1.603a.75.75 0 0 1 .727.566l1.502 5.937a1.998 1.998 0 0 1 .974-.253h7.989a2.012 2.012 0 0 1 1.955 2.468l-.783 3.461A2.009 2.009 0 0 1 16.21 15H9.79a2.008 2.008 0 0 1-1.956-1.57L7.05 9.967a2.058 2.058 0 0 1-.027-.145.754.754 0 0 1-.05-.14L5.219 2.75zM9.25 18.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zm7 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M3.712 2.5H2.5a.5.5 0 0 1 0-1h1.603a.5.5 0 0 1 .485.379l1.897 7.6a.5.5 0 0 1-.97.242L3.712 2.5z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M15.495 7.5h-7.99c-.15 0-.3.017-.447.05A2.02 2.02 0 0 0 5.55 9.969l.783 3.461A2.008 2.008 0 0 0 8.29 15h6.422a2.01 2.01 0 0 0 1.956-1.57l.783-3.462A2.012 2.012 0 0 0 15.495 7.5zM7.283 8.525a.992.992 0 0 1 .223-.025h7.989a1.013 1.013 0 0 1 .98 1.247l-.784 3.462a1.009 1.009 0 0 1-.98.791H8.29c-.468 0-.875-.328-.98-.791l-.783-3.462a1.02 1.02 0 0 1 .757-1.222z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M17 16.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10 16.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z"
  })));
};

module.exports.Cart = function Cart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.513 6H7.487A2.5 2.5 0 0 0 5.05 9.057l.913 4A2.5 2.5 0 0 0 8.401 15H15.6a2.5 2.5 0 0 0 2.437-1.943l.913-4A2.5 2.5 0 0 0 16.513 6zM7.376 8.013A.5.5 0 0 1 7.487 8h9.026a.5.5 0 0 1 .487.611l-.913 4A.5.5 0 0 1 15.6 13H8.4a.5.5 0 0 1-.487-.389l-.913-4a.5.5 0 0 1 .376-.598z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M3.49 2H2a1 1 0 0 1 0-2h2.29a1 1 0 0 1 .975.78l2.71 12a1 1 0 1 1-1.95.44L3.49 2z"
  }), React.createElement("path", {
    d: "M10 17.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z"
  }), React.createElement("path", {
    d: "M17 17.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z"
  })));
};

module.exports.ChainPrint = function ChainPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    strokeLinecap: "round"
  }, React.createElement("g", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: "2",
    opacity: ".8"
  }, React.createElement("rect", {
    width: "6",
    height: "10",
    x: "14.784",
    y: "3.384",
    rx: "3",
    transform: "rotate(33.038 14.784 3.384)"
  }), React.createElement("rect", {
    width: "6",
    height: "10",
    x: "9.836",
    y: "7.323",
    rx: "3",
    transform: "rotate(33.038 9.836 7.323)"
  })), React.createElement("rect", {
    width: "7",
    height: "11",
    x: "13.137",
    y: "1.192",
    stroke: "#000",
    rx: "3.5",
    transform: "rotate(33.038 13.137 1.192)"
  }), React.createElement("rect", {
    width: "7",
    height: "11",
    x: "8.189",
    y: "5.131",
    stroke: "#000",
    rx: "3.5",
    transform: "rotate(33.038 8.189 5.131)"
  })));
};

module.exports.Chain = function Chain(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, React.createElement("rect", {
    width: "6",
    height: "10",
    x: "12.784",
    y: "2.384",
    rx: "3",
    transform: "rotate(33.038 12.784 2.384)"
  }), React.createElement("rect", {
    width: "6",
    height: "10",
    x: "7.836",
    y: "6.323",
    rx: "3",
    transform: "rotate(33.038 7.836 6.323)"
  })));
};

module.exports.CheckmarkPrint = function CheckmarkPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m12.87 17.123 4.941-8.895c.971-1.748-1.65-3.205-2.622-1.456L11.05 14.22l-3.614-2.891C5.874 10.079 4 12.422 5.562 13.671l4.906 3.925c.055.05.114.095.176.137.387.277.789.342 1.15.263.364-.064.711-.276.964-.68.041-.061.079-.126.11-.193z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "m14.937 5.743-5 9c-.324.583-1.198.097-.874-.486l5-9c.324-.583 1.198-.097.874.486z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m4.812 10.11 5 4c.52.416-.104 1.197-.624.78l-5-4c-.52-.416.104-1.197.624-.78z"
  })));
};

module.exports.Checkmark = function Checkmark(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "m15.374 5.986-5 9c-.647 1.165-2.396.194-1.748-.972l5-9c.647-1.165 2.396-.194 1.748.972z"
  }), React.createElement("path", {
    d: "m5.125 9.72 5 4c1.04.832-.209 2.394-1.25 1.56l-5-4c-1.04-.832.209-2.394 1.25-1.56z"
  })));
};

module.exports.CircleFilled = function CircleFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "6",
    fill: "currentColor"
  }));
};

module.exports.CirclePrint = function CirclePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("circle", {
    cx: "12",
    cy: "11",
    r: "6",
    fill: "currentColor",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M4 10a6 6 0 1 0 12 0 6 6 0 0 0-12 0zm11 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Circle = function Circle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.5 10a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0zm9 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z",
    "clip-rule": "evenodd"
  }));
};

module.exports.ClipboardPrint = function ClipboardPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M14.75 5.233H17a.5.5 0 0 1 .5.5V17a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V5.733a.5.5 0 0 1 .5-.5h2.25V4a.5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .5.5v1.233z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M13 2.25H6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm-6.5 3v-2h6v2h-6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14.5 4.5h-1.507v-1H15a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h2.01v1H4.5v11h10v-11z"
  })));
};

module.exports.Clipboard = function Clipboard(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M13 2.5H7a1 1 0 0 0-1 1V7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1zM8 6V4.5h4V6H8z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M15.5 17.5h-11a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h3v2h-2v10h9v-10h-2v-2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z"
  })));
};

module.exports.ClockPrint = function ClockPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("circle", {
    cx: "12",
    cy: "11",
    r: "7",
    fill: "currentColor",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10.135 12.38a.5.5 0 1 1-.65-.76l3.5-3a.5.5 0 1 1 .65.76l-3.5 3z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.31 6a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0V6z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M3 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0zm13 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Clock = function Clock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M10.46 12.76a1 1 0 0 1-1.3-1.52l3.5-3a1 1 0 0 1 1.3 1.52l-3.5 3z"
  }), React.createElement("path", {
    d: "M8.81 6a1 1 0 0 1 2 0v6a1 1 0 1 1-2 0V6z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm14 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0z",
    "clip-rule": "evenodd"
  })));
};

module.exports.CloudDownFilled = function CloudDownFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M12 14V9.25a1.5 1.5 0 0 0-3 0V14H6a4 4 0 0 1 0-8h.126C6.57 4.275 8.136 3 10 3h1c1.9 0 3.49 1.325 3.899 3.101A4.002 4.002 0 0 1 14 14h-2z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M9.5 9.5a1 1 0 1 1 2 0V17a1 1 0 1 1-2 0V9.5z"
  }), React.createElement("path", {
    d: "M12.375 14.72a1 1 0 0 1 1.25 1.56l-2.5 2a1 1 0 0 1-1.25-1.56l2.5-2z"
  }), React.createElement("path", {
    d: "M7.375 16.28a1 1 0 1 1 1.25-1.56l2.5 2a1 1 0 1 1-1.25 1.56l-2.5-2z"
  })));
};

module.exports.CloudDownPrint = function CloudDownPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13 4h-1a4.002 4.002 0 0 0-3.874 3H8a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4.002 4.002 0 0 0 13 4z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10 3H9a4.002 4.002 0 0 0-3.874 3H5a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4.002 4.002 0 0 0 10 3zM5.901 7l.193-.75A3.002 3.002 0 0 1 9 4h1c1.405 0 2.614.975 2.924 2.325l.14.61.61.141A3.001 3.001 0 0 1 13 13H5a3 3 0 1 1 0-6h.901z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9 10a.5.5 0 0 1 1 0v7.5a.5.5 0 0 1-1 0V10z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.688 15.11a.5.5 0 0 1 .624.78l-2.5 2a.5.5 0 1 1-.624-.78l2.5-2z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.688 15.89a.5.5 0 0 1 .624-.78l2.5 2a.5.5 0 0 1-.624.78l-2.5-2z"
  })));
};

module.exports.CloudDown = function CloudDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M11 3h-1a4.002 4.002 0 0 0-3.874 3H6a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4.002 4.002 0 0 0 11 3zM7.676 8l.387-1.501A2.002 2.002 0 0 1 10 5h1c.937 0 1.743.65 1.95 1.549l.28 1.221 1.221.28A2.002 2.002 0 0 1 14 12H6a2 2 0 1 1 0-4h1.676z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M9.5 10a1 1 0 1 1 2 0v7.5a1 1 0 1 1-2 0V10z"
  }), React.createElement("path", {
    d: "M12.375 14.72a1 1 0 0 1 1.25 1.56l-2.5 2a1 1 0 0 1-1.25-1.56l2.5-2z"
  }), React.createElement("path", {
    d: "M7.375 16.28a1 1 0 1 1 1.25-1.56l2.5 2a1 1 0 1 1-1.25 1.56l-2.5-2z"
  })));
};

module.exports.CloudFilled = function CloudFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("rect", {
    width: "16",
    height: "8",
    x: "2",
    y: "6",
    rx: "4"
  }), React.createElement("rect", {
    width: "9",
    height: "8",
    x: "6",
    y: "3",
    rx: "4"
  })));
};

module.exports.CloudPrint = function CloudPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M13 4h-1a4.002 4.002 0 0 0-3.874 3H8a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4.002 4.002 0 0 0 13 4z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10 3H9a4.002 4.002 0 0 0-3.874 3H5a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4.002 4.002 0 0 0 10 3zM5.901 7l.193-.75A3.002 3.002 0 0 1 9 4h1c1.405 0 2.614.975 2.924 2.325l.14.61.61.141A3.001 3.001 0 0 1 13 13H5a3 3 0 1 1 0-6h.901z"
  })));
};

module.exports.CloudUpFilled = function CloudUpFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.5 14v-3.322l.752.587a1 1 0 0 0 1.231-1.576l-2.304-1.8a1 1 0 0 0-.673-.259 1 1 0 0 0-.674.259l-2.304 1.8a1 1 0 0 0 1.231 1.576l.741-.578V14H6a4 4 0 0 1 0-8h.126C6.57 4.275 8.136 3 10 3h1c1.9 0 3.49 1.325 3.899 3.101A4.002 4.002 0 0 1 14 14h-2.5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.CloudUpPrint = function CloudUpPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13 4h-1a4.002 4.002 0 0 0-3.874 3H8a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4.002 4.002 0 0 0 13 4z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10 3H9a4.002 4.002 0 0 0-3.874 3H5a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4.002 4.002 0 0 0 10 3zM5.901 7l.193-.75A3.002 3.002 0 0 1 9 4h1c1.405 0 2.614.975 2.924 2.325l.14.61.61.141A3.001 3.001 0 0 1 13 13H5a3 3 0 1 1 0-6h.901z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10 16.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 1 0v7.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M7.312 11.39a.5.5 0 0 1-.624-.78l2.5-2a.5.5 0 0 1 .624.78l-2.5 2z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.312 10.61a.5.5 0 0 1-.624.78l-2.5-2a.5.5 0 1 1 .624-.78l2.5 2z"
  })));
};

module.exports.CloudUp = function CloudUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M11 3h-1a4.002 4.002 0 0 0-3.874 3H6a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4.002 4.002 0 0 0 11 3zM7.676 8l.387-1.501A2.002 2.002 0 0 1 10 5h1c.937 0 1.743.65 1.95 1.549l.28 1.221 1.221.28A2.002 2.002 0 0 1 14 12H6a2 2 0 1 1 0-4h1.676z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M11.5 16a1 1 0 1 1-2 0V8.5a1 1 0 0 1 2 0V16z"
  }), React.createElement("path", {
    d: "M8.625 11.28a1 1 0 1 1-1.25-1.56l2.5-2a1 1 0 0 1 1.25 1.56l-2.5 2z"
  }), React.createElement("path", {
    d: "M13.625 9.72a1 1 0 1 1-1.25 1.56l-2.5-2a1 1 0 0 1 1.25-1.56l2.5 2z"
  })));
};

module.exports.Cloud = function Cloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11 3h-1a4.002 4.002 0 0 0-3.874 3H6a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4.002 4.002 0 0 0 11 3zM7.676 8l.387-1.501A2.002 2.002 0 0 1 10 5h1c.937 0 1.743.65 1.95 1.549l.28 1.221 1.221.28A2.002 2.002 0 0 1 14 12H6a2 2 0 1 1 0-4h1.676z",
    "clip-rule": "evenodd"
  }));
};

module.exports.CoctailPrint = function CoctailPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.75 18.024v-5.097l6.116-6.587a.5.5 0 0 0-.366-.84h-13a.5.5 0 0 0-.366.84l6.116 6.587v5.097C9.133 18.163 7.5 18.89 7.5 20h9c0-1.11-1.633-1.837-3.75-1.976z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6 8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1H6z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m3.134 5.34 6.5 7a.5.5 0 0 0 .732 0l6.5-7a.5.5 0 0 0-.366-.84h-13a.5.5 0 0 0-.366.84zm1.513.16h10.706L10 11.265 4.647 5.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 11.875h1l.125.125v6l-.125.125h-1L9.375 18v-6l.125-.125z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14.5 20h-9c0-1.475 2.05-2.5 4.5-2.5s4.5 1.025 4.5 2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.879 1.567a.5.5 0 0 1 .242-.97l4 1a.5.5 0 0 1-.242.97l-4-1z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10.203 9.747a.5.5 0 0 1-.94-.343L12.356.911a.5.5 0 1 1 .94.342l-3.093 8.494z"
  })));
};

module.exports.Coctail = function Coctail(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M6 8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1H6z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "m2.767 5.68 6.5 7a1 1 0 0 0 1.466 0l6.5-7c.594-.64.14-1.68-.733-1.68h-13c-.873 0-1.327 1.04-.733 1.68zm11.44.32L10 10.53 5.793 6h8.414z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M11 11.5v7H9v-7h2z"
  }), React.createElement("path", {
    d: "M14.5 20h-9c0-1.475 2.05-2.5 4.5-2.5s4.5 1.025 4.5 2.5z"
  }), React.createElement("path", {
    d: "M12.818 1.728a.75.75 0 0 1 .364-1.456l4 1a.75.75 0 0 1-.364 1.456l-4-1z"
  }), React.createElement("path", {
    d: "M11.211 8.737a.75.75 0 1 1-1.423-.474l2.5-7.5a.75.75 0 1 1 1.423.474l-2.5 7.5z"
  })));
};

module.exports.ColorPickerPrint = function ColorPickerPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M17.928 3.768c.976.976.818 2.717-.354 3.889L8.6 16.632a1.172 1.172 0 0 1-.33.232c-.376.177-.762.392-1.677.921-.452.262-.652.377-.896.513-1.673.935-2.293 1.18-2.885.587-.592-.592-.348-1.212.581-2.877.138-.246.254-.448.518-.905.53-.915.745-1.3.921-1.677.057-.12.136-.233.233-.33l8.975-8.975c1.171-1.171 2.912-1.33 3.889-.353z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M16.324 6.717a2.5 2.5 0 0 0-3.535-3.535l-8.975 8.975-.112.17c-.165.417-.366.827-.865 1.797-1.255 2.436-1.455 2.935-.923 3.468.533.533 1.032.332 3.468-.923.97-.5 1.38-.7 1.798-.865l.17-.112 8.974-8.975zm-.707-2.828a1.5 1.5 0 0 1 0 2.121l-8.903 8.903c-.426.174-.858.387-1.79.867-.95.49-1.351.687-1.766.853a3.757 3.757 0 0 1-.435.15c.031-.118.08-.264.15-.435.166-.414.364-.816.853-1.766.48-.932.693-1.364.867-1.79l8.903-8.903a1.5 1.5 0 0 1 2.121 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.851 3.824a.5.5 0 1 1 .707-.707l5.657 5.657a.5.5 0 1 1-.707.707L9.85 3.824z"
  })));
};

module.exports.ColorPicker = function ColorPicker(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.536 15.236c-1.56.617-4.257 2.372-4.728 1.9-.306-.305.323-1.545.972-2.805h4.66l-.905.905z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M15.803 5.555a1 1 0 1 1 1.415 1.414l-8.975 8.975a1 1 0 0 1-.34.222c-.396.157-.8.355-1.753.846-.47.242-.679.348-.933.474-1.748.861-2.405 1.068-3.116.357-.71-.71-.504-1.367.351-3.105.127-.257.234-.468.48-.945.491-.953.689-1.356.845-1.753A1 1 0 0 1 4 11.701l8.975-8.975a1 1 0 1 1 1.414 1.414l-8.832 8.832c-.174.415-.393.857-.847 1.737a52.494 52.494 0 0 0-.535 1.06l.158-.077c.24-.119.441-.221.902-.458.88-.454 1.321-.673 1.736-.847l8.832-8.832z"
  }), React.createElement("path", {
    d: "M14.39 4.14a1 1 0 1 1-1.415-1.414 3 3 0 1 1 4.243 4.243 1 1 0 1 1-1.415-1.414A1 1 0 0 0 14.39 4.14z"
  }), React.createElement("path", {
    d: "M9.437 4.845a1 1 0 0 1 1.415-1.414l5.656 5.657a1 1 0 0 1-1.414 1.414L9.437 4.845z"
  })));
};

module.exports.ContractPrint = function ContractPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M13 5.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5z"
  }), React.createElement("path", {
    d: "M7 11h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M5.354 15.354a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708.708l-4 4z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 15a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0v4z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5 11.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1H5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.354 9.354a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708.708l-4 4z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11 9.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.5 9a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0v4z"
  })));
};

module.exports.Contract = function Contract(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M11.707 9.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414l-4 4z"
  }), React.createElement("path", {
    d: "M11 10a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-4z"
  }), React.createElement("path", {
    d: "M12 9a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0v4z"
  }), React.createElement("path", {
    d: "M5.707 15.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414l-4 4z"
  }), React.createElement("path", {
    d: "M10 15a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4z"
  }), React.createElement("path", {
    d: "M5 12a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2H5z"
  })));
};

module.exports.ControllerPrint = function ControllerPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M6.5 6.5h9A4.5 4.5 0 0 1 20 11v2a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 2 13v-2a4.5 4.5 0 0 1 4.5-4.5z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.25 10a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14.25 12.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14.5 4.5h-9A4.5 4.5 0 0 0 1 9v2a4.5 4.5 0 0 0 4.5 4.5h9A4.5 4.5 0 0 0 19 11V9a4.5 4.5 0 0 0-4.5-4.5zM2 9a3.5 3.5 0 0 1 3.5-3.5h9A3.5 3.5 0 0 1 18 9v2a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 2 11V9z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M4 11a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2H4z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M7 12a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v4z"
  })));
};

module.exports.Controller = function Controller(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M12.25 10a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
  }), React.createElement("path", {
    d: "M14.25 12.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 4h-9a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5zm-12 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V9z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M4 11a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2H4z"
  }), React.createElement("path", {
    d: "M7 12a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v4z"
  })));
};

module.exports.CreditCardPrint = function CreditCardPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M5.5 6h12A2.5 2.5 0 0 1 20 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-12A2.5 2.5 0 0 1 3 15.5v-7A2.5 2.5 0 0 1 5.5 6z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M16 4H4a2.5 2.5 0 0 0-2.5 2.5v7A2.5 2.5 0 0 0 4 16h12a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 16 4zM2.5 6.5A1.5 1.5 0 0 1 4 5h12a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 16 15H4a1.5 1.5 0 0 1-1.5-1.5v-7z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M2.5 6.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 2 8V7a.5.5 0 0 1 .5-.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M6 9.5H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm-1 2v-1h1v1H5z",
    "clip-rule": "evenodd"
  })));
};

module.exports.CreditCard = function CreditCard(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 3.5H4a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm-13 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M2.5 6.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 2 8V7a.5.5 0 0 1 .5-.5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M6 9.5H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1zm-1 2v-1h1v1H5z",
    "clip-rule": "evenodd"
  })));
};

module.exports.CrownPrint = function CrownPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M4.62 8.496c-.217-.892.781-1.581 1.538-1.061l1.83 1.256a1 1 0 0 0 1.417-.298l1.244-2.016a1 1 0 0 1 1.702 0l1.244 2.016a1 1 0 0 0 1.417.298l1.83-1.256c.757-.52 1.755.169 1.538 1.06l-1.4 5.742a1 1 0 0 1-.971.763H6.99a1 1 0 0 1-.971-.763l-1.4-5.741z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.825 10.532a3 3 0 0 1-3.931-1.088l-.394-.638-.394.638a3 3 0 0 1-3.93 1.088l.6 2.468h7.447l.602-2.468zM6.158 7.435c-.757-.52-1.755.169-1.538 1.06l1.4 5.742a1 1 0 0 0 .97.763h9.018a1 1 0 0 0 .971-.763l1.4-5.741c.217-.892-.781-1.581-1.538-1.061l-1.83 1.256a1 1 0 0 1-1.417-.298L12.35 6.377a1 1 0 0 0-1.702 0L9.405 8.393a1 1 0 0 1-1.417.298l-1.83-1.256z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M12.5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  }), React.createElement("path", {
    d: "M20 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 16.5a.75.75 0 0 1 .75-.75h8.737a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m14.896 13.818 1.515-5.766-2.214 1.41a2 2 0 0 1-2.74-.578L10 6.695l-1.458 2.19a2 2 0 0 1-2.74.577L3.59 8.052l1.515 5.766h9.792zm-10.77-6.61c-.767-.489-1.736.218-1.505 1.098l1.516 5.766a1 1 0 0 0 .967.746h9.792a1 1 0 0 0 .967-.746l1.516-5.766c.23-.88-.738-1.586-1.505-1.098l-2.214 1.41a1 1 0 0 1-1.37-.288l-1.458-2.19a1 1 0 0 0-1.664 0L7.71 8.33a1 1 0 0 1-1.37.289l-2.214-1.41z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10.944 3.945a.945.945 0 1 1-1.89.002.945.945 0 0 1 1.89-.002z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M18.5 5.836a.945.945 0 1 1-1.89.001.945.945 0 0 1 1.89 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M3.389 5.836a.945.945 0 1 1-1.89.001.945.945 0 0 1 1.89 0z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5.25 16a.5.5 0 0 1 .5-.5h8.737a.5.5 0 1 1 0 1H5.75a.5.5 0 0 1-.5-.5z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Crown = function Crown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "m15.267 9.928-.367.234a3 3 0 0 1-4.107-.867L10 8.105l-.793 1.19a3 3 0 0 1-4.107.867l-.367-.234L5.542 13h8.916l.809-3.072zM3.654 6.87c-.768-.488-1.736.219-1.504 1.099l1.654 6.285A1 1 0 0 0 4.77 15h10.458a1 1 0 0 0 .967-.745l1.654-6.286c.232-.88-.736-1.587-1.504-1.099l-2.52 1.604a1 1 0 0 1-1.369-.289l-1.625-2.437a1 1 0 0 0-1.664 0L7.543 8.185a1 1 0 0 1-1.369.29L3.654 6.87z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M11 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  }), React.createElement("path", {
    d: "M19 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  }), React.createElement("path", {
    d: "M3 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.5 16.25a1 1 0 0 1 1-1h9.251a1 1 0 1 1 0 2H5.5a1 1 0 0 1-1-1z",
    "clip-rule": "evenodd"
  })));
};

module.exports.CupPrint = function CupPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M5.5 16h11a1 1 0 1 1 0 2h-11a1 1 0 1 1 0-2z"
  }), React.createElement("path", {
    d: "M17.478 7.21C18.67 7.591 19.5 8.46 19.5 9.5c0 1.428-1.55 2.5-3.393 2.5-.048 0-.096 0-.144-.002C14.746 13.878 12.953 15 11 15c-3.626 0-6.5-3.832-6.5-8.5A.5.5 0 0 1 5 6h12a.5.5 0 0 1 .5.5c0 .238-.007.474-.022.71z"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M15 4.5H3a.5.5 0 0 0-.5.5c0 4.668 2.874 8.5 6.5 8.5s6.5-3.832 6.5-8.5a.5.5 0 0 0-.5-.5zm-.512 1c-.19 3.932-2.608 7-5.488 7-2.88 0-5.298-3.068-5.488-7h10.976z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "m13.862 10.329.276-.961c.303.086.63.132.97.132C16.46 9.5 17.5 8.78 17.5 8s-1.04-1.5-2.393-1.5v-1C16.95 5.5 18.5 6.572 18.5 8s-1.55 2.5-3.393 2.5c-.431 0-.852-.058-1.245-.171z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M3.5 14.75h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1 0-1.5z"
  })));
};

module.exports.Cup = function Cup(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.5 4h-12a1 1 0 0 0-1 1c0 4.918 3.061 9 7 9s7-4.082 7-9a1 1 0 0 0-1-1zm-6 8c-2.455 0-4.596-2.57-4.949-6h9.898c-.353 3.43-2.494 6-4.949 6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M4 14.5h11a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z"
  }), React.createElement("path", {
    d: "m14.024 10.81.552-1.923c.257.074.539.113.831.113 1.107 0 1.893-.543 1.893-1 0-.457-.786-1-1.893-1V5C17.495 5 19.3 6.248 19.3 8s-1.805 3-3.893 3c-.477 0-.944-.065-1.383-.19z"
  })));
};

module.exports.DivisionPrint = function DivisionPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M6.5 12.5a1.5 1.5 0 0 1 0-3h10a1.5 1.5 0 0 1 0 3h-10z"
  }), React.createElement("circle", {
    cx: "11",
    cy: "7",
    r: "2"
  }), React.createElement("circle", {
    cx: "11",
    cy: "15",
    r: "2"
  })), React.createElement("path", {
    fill: "#000",
    d: "M5 10.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1H5z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M8.5 6a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M8.5 14a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Division = function Division(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H5z"
  }), React.createElement("circle", {
    cx: "10",
    cy: "5.5",
    r: "1.5"
  }), React.createElement("circle", {
    cx: "10",
    cy: "14.5",
    r: "1.5"
  })));
};

module.exports.DotsXPrint = function DotsXPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M6.5 13a1.5 1.5 0 0 1 0-3h11a1.5 1.5 0 0 1 0 3h-11z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14 10.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9 10.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M4 10.25a1.249 1.249 0 1 1 2.5 0 1.25 1.25 0 1 1-2.5 0z"
  })));
};

module.exports.DotsX = function DotsX(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("circle", {
    cx: "5",
    cy: "10",
    r: "2"
  }), React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "2"
  }), React.createElement("circle", {
    cx: "15",
    cy: "10",
    r: "2"
  })));
};

module.exports.DotsYPrint = function DotsYPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M11 6.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9 10.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9 5.25a1.249 1.249 0 1 1 2.5 0 1.25 1.25 0 1 1-2.5 0z"
  })));
};

module.exports.DotsY = function DotsY(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("circle", {
    cx: "10",
    cy: "15",
    r: "2"
  }), React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "2"
  }), React.createElement("circle", {
    cx: "10",
    cy: "5",
    r: "2"
  })));
};

module.exports.DressPrint = function DressPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.537.808a.75.75 0 0 0-.98.404L12.35 4.11a2.212 2.212 0 0 0-1.265.035L11 4.173l-.084-.027A2.222 2.222 0 0 0 9.65 4.11L8.442 1.212a.75.75 0 0 0-1.384.576l1.25 3a.75.75 0 0 0 .106.18 2.214 2.214 0 0 0-.396 1.56l.114.935A2.88 2.88 0 0 0 8.815 9a3 3 0 0 0-1.412.402c-1.594.921-2.774 1.958-3.538 3.109-.246.37-.495.708-.728 1.023-1.015 1.375-1.718 2.327-.469 3.705C4.203 18.935 7.456 20 10.648 20c3.193 0 6.373-.628 8.437-2.76 1.528-1.578.893-2.282-.095-3.377-.347-.384-.737-.816-1.092-1.351-.794-1.196-1.98-2.238-3.556-3.126a3 3 0 0 0-1.17-.37 2.88 2.88 0 0 0 .696-1.553l.115-.935a2.224 2.224 0 0 0-.396-1.56.75.75 0 0 0 .105-.18l1.25-3a.75.75 0 0 0-.405-.98z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10.085 3.145 10 3.173l-.084-.027a2.222 2.222 0 0 0-2.898 2.382l.114.935a2.89 2.89 0 0 0 5.736 0l.115-.935a2.224 2.224 0 0 0-2.898-2.383zm-1.01.9c.178-.023.359-.005.53.05l.395.13.396-.13a1.222 1.222 0 0 1 1.594 1.311l-.115.935a1.89 1.89 0 0 1-3.75 0l-.115-.935a1.222 1.222 0 0 1 1.065-1.362z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M11.87 8H7.904a3 3 0 0 0-1.5.403c-1.595.921-2.775 1.958-3.54 3.109-.245.37-.494.708-.727 1.023-1.015 1.375-1.718 2.327-.469 3.705C3.203 17.935 6.456 19 9.648 19c3.193 0 6.373-.628 8.437-2.76 1.528-1.578.893-2.282-.095-3.377-.347-.384-.737-.816-1.092-1.351-.794-1.196-1.98-2.237-3.556-3.126A3 3 0 0 0 11.87 8zM6.904 9.268a2 2 0 0 1 1-.268h3.966a2 2 0 0 1 .981.258c1.446.814 2.513 1.752 3.214 2.807.166.25.346.492.545.736.023.028.106.123.22.252.341.39.961 1.098 1.069 1.273.194.316.15.514-.533 1.219C15.73 17.236 13.11 18 9.648 18c-2.996 0-5.946-1.005-7.239-2.431-.38-.42-.455-.666-.384-.943.056-.22.206-.5.493-.912.036-.053.155-.216.303-.418.255-.35.596-.818.74-1.03l.137-.2c.672-1.013 1.736-1.948 3.206-2.798z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.536 1.186a.5.5 0 1 1 .928-.372l1 2.5a.5.5 0 0 1-.928.372l-1-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.536.814a.5.5 0 1 1 .928.372l-1 2.5a.5.5 0 1 1-.928-.372l1-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 11.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M7.084 11.223a.5.5 0 1 1 .832.554l-2 3a.5.5 0 0 1-.832-.554l2-3z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.916 11.223a.5.5 0 1 0-.832.554l2 3a.5.5 0 0 0 .832-.554l-2-3z"
  })));
};

module.exports.Dress = function Dress(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "m10 2.702-.354-.108A2.628 2.628 0 0 0 6.272 5.45l.19 1.442A3 3 0 0 0 9.436 9.5h1.127a3 3 0 0 0 2.974-2.609l.19-1.442a2.628 2.628 0 0 0-3.374-2.855l-.354.108zM8.795 4.484a.628.628 0 0 1 .265.023l.938.287.939-.288a.628.628 0 0 1 .806.683l-.19 1.441a1 1 0 0 1-.991.87H9.436a1 1 0 0 1-.991-.87l-.19-1.441a.628.628 0 0 1 .54-.705z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.994 8H7.767a3 3 0 0 0-1.534.421c-1.698 1.01-2.953 2.147-3.765 3.41-.26.404-.522.773-.768 1.117-1.07 1.499-1.813 2.538-.495 4.041C2.825 18.84 6.26 20 9.63 20c3.37 0 6.726-.685 8.905-3.01 1.613-1.723.943-2.49-.1-3.685-.366-.419-.778-.89-1.153-1.474-.843-1.312-2.104-2.454-3.783-3.427A3 3 0 0 0 11.994 8zm3.604 4.912a11.102 11.102 0 0 0 .997 1.315c.282.334.646.764.823.99a4.516 4.516 0 0 1-.344.405C15.557 17.242 13.041 18 9.63 18c-2.908 0-5.757-1.003-6.92-2.33-.195-.221-.21-.226-.21-.23l.001-.001c.03-.118.146-.343.394-.712l.294-.418c.27-.383.648-.918.812-1.166.051-.077.102-.154.15-.23.632-.982 1.658-1.912 3.105-2.773a1 1 0 0 1 .512-.14h4.227a1 1 0 0 1 .502.135c1.417.821 2.442 1.75 3.102 2.777z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M5.804 1.279A.75.75 0 0 1 7.196.72l1 2.5a.75.75 0 0 1-1.392.558l-1-2.5z"
  }), React.createElement("path", {
    d: "M12.804.721a.75.75 0 0 1 1.392.558l-1 2.5a.75.75 0 0 1-1.392-.558l1-2.5z"
  }), React.createElement("path", {
    d: "M9.5 12.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4z"
  }), React.createElement("path", {
    d: "M7.053 12.277a.5.5 0 1 1 .894.446l-1.5 3.008a.5.5 0 0 1-.894-.447l1.5-3.007z"
  }), React.createElement("path", {
    d: "M12.947 12.276a.5.5 0 1 0-.894.448l1.5 3a.5.5 0 1 0 .894-.448l-1.5-3z"
  })));
};

module.exports.DuplicatePrint = function DuplicatePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M15 9h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-2H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M15 7.5H8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5zm-6.5 7v-6h6v6h-6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.5 11.5h3v1H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3.5h-1v-3h-6v6z"
  })));
};

module.exports.Duplicate = function Duplicate(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.5 6.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-7 8v-6h6v6h-6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M6.5 13.5h-2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h-2v-1h-6v6h1v2z"
  })));
};

module.exports.ElectricityPrint = function ElectricityPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 21"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M12.187 10H16a.5.5 0 0 1 .325.88l-4.958 4.241-5.024 4.743c-.39.368-1.007-.053-.807-.55L8.474 12H6a.5.5 0 0 1-.46-.697l3-7A.5.5 0 0 1 9 4h5a.5.5 0 0 1 .46.697L12.187 10z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M15 8.5h-3.813l2.273-5.303A.5.5 0 0 0 13 2.5H8a.5.5 0 0 0-.46.303l-3 7A.5.5 0 0 0 5 10.5h2.474l-2.938 7.314c-.2.497.417.918.807.55l5.024-4.743 4.958-4.241A.5.5 0 0 0 15 8.5zm-4.571 1h3.217l-3.948 3.378-3.385 3.195 2.365-5.887a.5.5 0 0 0-.464-.686H5.758l2.572-6h3.912L9.969 8.803a.5.5 0 0 0 .46.697z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Electricity = function Electricity(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15 8h-3.055l1.974-4.606A1 1 0 0 0 13 2H8a1 1 0 0 0-.92.606l-3 7A1 1 0 0 0 5 11h1.734l-2.662 6.627c-.4.995.835 1.836 1.614 1.1l5.024-4.742 4.94-4.225C16.356 9.156 15.93 8 15 8zm-5.49.606A1 1 0 0 0 10.428 10h1.864l-2.92 2.498-1.748 1.65 1.517-3.775A1 1 0 0 0 8.214 9H6.517l2.142-5h2.824L9.51 8.606z",
    "clip-rule": "evenodd"
  }));
};

module.exports.EnterPrint = function EnterPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("rect", {
    width: "10",
    height: "15",
    x: "8.25",
    y: "4",
    fill: "currentColor",
    opacity: ".8",
    rx: "1"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8.867 7.5 10.95 10 8.867 7.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8.867 12.5 10.95 10l-2.083 2.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M10.5 10H3"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M15.5 17H6.3"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M15.5 3H6.326"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M6.25 17v-4"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M6.25 7V3"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M15.6 17V3"
  })));
};

module.exports.Enter = function Enter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    strokeLinejoin: "round",
    d: "m8.867 8 2.083 2.5L8.867 8z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    strokeLinejoin: "round",
    d: "m8.867 13 2.083-2.5L8.867 13z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M9.7 10.5H3.2"
  }), React.createElement("path", {
    d: "M15.25 17.5h-9"
  }), React.createElement("path", {
    d: "M15.25 3.5h-9"
  }), React.createElement("path", {
    d: "M6.25 17.5v-4"
  }), React.createElement("path", {
    d: "M6.25 7.5v-4"
  }), React.createElement("path", {
    d: "M15.6 17.5v-14"
  })));
};

module.exports.ExclamationFilled = function ExclamationFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-12a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    "clip-rule": "evenodd"
  }));
};

module.exports.ExclamationPrint = function ExclamationPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("circle", {
    cx: "12",
    cy: "11",
    r: "7",
    fill: "currentColor",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 6.5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0v-5z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M3 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0zm13 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0z",
    "clip-rule": "evenodd"
  }), React.createElement("circle", {
    cx: "10",
    cy: "13.75",
    r: ".75",
    fill: "#000"
  })));
};

module.exports.Exclamation = function Exclamation(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M9 7a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0V7z"
  }), React.createElement("circle", {
    cx: "10",
    cy: "14",
    r: "1"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm14 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0z",
    "clip-rule": "evenodd"
  })));
};

module.exports.ExpandPrint = function ExpandPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M13 5h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
  }), React.createElement("path", {
    d: "M7 11h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M11.354 9.354a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708.708l-4 4z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.354 15.354a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708.708l-4 4z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5 15.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1H5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.5 15a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0v4z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M15.5 9a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0v4z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11 5.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"
  })));
};

module.exports.Expand = function Expand(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M5.707 15.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414l-4 4z"
  }), React.createElement("path", {
    d: "M5 16a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2H5z"
  }), React.createElement("path", {
    d: "M6 15a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0v4z"
  }), React.createElement("path", {
    d: "M11.707 9.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414l-4 4z"
  }), React.createElement("path", {
    d: "M16 9a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0v4z"
  }), React.createElement("path", {
    d: "M11 6a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-4z"
  })));
};

module.exports.EyeClosedPrint = function EyeClosedPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2.917 8.91a1 1 0 0 0-.23 1.396c.2.276.432.538.696.785L2.26 12.327a1 1 0 0 0 1.48 1.346l1.302-1.433c.455.235.945.44 1.464.612l-.476 1.905a1 1 0 0 0 1.94.486l.48-1.92c.504.08 1.022.135 1.55.16V15.5a1 1 0 1 0 2 0v-2.058a13.626 13.626 0 0 0 1.525-.223l.005.024.5 2a1 1 0 1 0 1.94-.486l-.5-2a1.015 1.015 0 0 0-.03-.1 9.453 9.453 0 0 0 1.224-.579l1.629 1.63a1 1 0 0 0 1.414-1.415l-1.44-1.44c.166-.176.318-.358.454-.547a1 1 0 0 0-1.625-1.167c-.303.423-.772.827-1.38 1.177-1.293.746-3.084 1.184-5.012 1.184-1.927 0-3.719-.438-5.012-1.184-.607-.35-1.076-.754-1.38-1.177a1 1 0 0 0-1.395-.229z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M2.094 8.014a.5.5 0 0 1 .812-.583c.348.484.87.934 1.536 1.318C5.815 9.541 7.692 10 9.704 10c2.012 0 3.89-.459 5.263-1.251.665-.384 1.187-.834 1.535-1.318a.5.5 0 0 1 .813.583c-.437.608-1.067 1.15-1.848 1.601C13.934 10.499 11.884 11 9.704 11c-2.18 0-4.23-.5-5.762-1.385-.782-.451-1.412-.993-1.848-1.6z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10.5 11a.5.5 0 0 0-1 0v2.5a.5.5 0 0 0 1 0V11z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.01 10.402a.5.5 0 1 1 .98.196l-.5 2.5a.5.5 0 0 1-.98-.196l.5-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.99 10.402a.5.5 0 0 0-.98.196l.5 2.5a.5.5 0 0 0 .98-.196l-.5-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M16.354 8.646a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708-.708l-2-2z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M3.448 8.664a.5.5 0 1 1 .74.672l-1.818 2a.5.5 0 0 1-.74-.672l1.818-2z"
  })));
};

module.exports.EyeClosed = function EyeClosed(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M1.688 8.306a1 1 0 1 1 1.624-1.167c.304.423.773.827 1.38 1.177C5.985 9.062 7.777 9.5 9.704 9.5c1.928 0 3.72-.438 5.013-1.184.607-.35 1.075-.754 1.38-1.177a1 1 0 1 1 1.624 1.167c-.48.669-1.164 1.257-2.004 1.742-1.612.93-3.748 1.452-6.013 1.452-2.264 0-4.4-.522-6.012-1.452-.84-.485-1.524-1.073-2.004-1.742z"
  }), React.createElement("path", {
    d: "M11 11a1 1 0 1 0-2 0v2.5a1 1 0 1 0 2 0V11z"
  }), React.createElement("path", {
    d: "M5.53 10.758a1 1 0 0 1 1.94.485l-.5 2a1 1 0 1 1-1.94-.486l.5-2z"
  }), React.createElement("path", {
    d: "M13.97 10.758a1 1 0 0 0-1.94.485l.5 2a1 1 0 1 0 1.94-.486l-.5-2z"
  }), React.createElement("path", {
    d: "M16.525 8.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414-1.414l-2-2z"
  }), React.createElement("path", {
    d: "M3.078 8.327a1 1 0 0 1 1.48 1.346l-1.818 2a1 1 0 1 1-1.48-1.346l1.818-2z"
  })));
};

module.exports.EyeOffPrint = function EyeOffPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10 4.5a1 1 0 1 1 2 0v2.032c.56.037 1.107.104 1.634.2l.385-1.928a1 1 0 0 1 1.962.392l-.409 2.042c.515.181.997.392 1.44.631l1.13-1.883a1 1 0 0 1 1.716 1.029L18.64 9.04C19.501 9.88 20 10.886 20 12c0 3.192-4.103 5.5-9 5.5S2 15.192 2 12c0-1.114.5-2.12 1.359-2.959L2.143 7.014a1 1 0 1 1 1.714-1.029l1.13 1.884c.444-.239.926-.45 1.44-.63L6.02 5.195a1 1 0 0 1 1.962-.392l.385 1.927A14.506 14.506 0 0 1 10 6.532V4.5zM8 8.855C5.61 9.45 4 10.71 4 12c0 1.778 3.06 3.5 7 3.5s7-1.722 7-3.5c0-1.29-1.61-2.55-4-3.145a4 4 0 1 1-6.001 0z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10 16c4.658 0 8.5-2.161 8.5-5S14.658 6 10 6c-4.658 0-8.5 2.161-8.5 5s3.842 5 8.5 5zm0-9c4.179 0 7.5 1.868 7.5 4 0 2.132-3.321 4-7.5 4s-7.5-1.868-7.5-4c0-2.132 3.321-4 7.5-4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 3.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.51 3.902a.5.5 0 0 1 .98.196l-.5 2.5a.5.5 0 0 1-.98-.196l.5-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.49 3.902a.5.5 0 0 0-.98.196l.5 2.5a.5.5 0 0 0 .98-.196l-.5-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M2.429 5.243a.5.5 0 1 0-.858.514l1.5 2.5a.5.5 0 0 0 .858-.514l-1.5-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M17.571 5.243a.5.5 0 1 1 .858.514l-1.5 2.5a.5.5 0 0 1-.858-.514l1.5-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M17.612 17.655a.5.5 0 0 1-.724.69l-15.75-16.5a.5.5 0 0 1 .724-.69l15.75 16.5z"
  })));
};

module.exports.EyeOff = function EyeOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 16.5c4.897 0 9-2.308 9-5.5s-4.103-5.5-9-5.5S1 7.808 1 11s4.103 5.5 9 5.5zm0-9c3.94 0 7 1.722 7 3.5s-3.06 3.5-7 3.5-7-1.722-7-3.5 3.06-3.5 7-3.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M9 3.5a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0v-3z"
  }), React.createElement("path", {
    d: "M13.02 3.804a1 1 0 0 1 1.96.392l-.5 2.5a1 1 0 1 1-1.96-.392l.5-2.5z"
  }), React.createElement("path", {
    d: "M6.98 3.804a1 1 0 0 0-1.96.392l.5 2.5a1 1 0 0 0 1.96-.392l-.5-2.5z"
  }), React.createElement("path", {
    d: "M2.858 4.986a1 1 0 1 0-1.715 1.029l1.5 2.5a1 1 0 1 0 1.715-1.03l-1.5-2.5z"
  }), React.createElement("path", {
    d: "M17.142 4.986a1 1 0 0 1 1.716 1.029l-1.5 2.5a1 1 0 1 1-1.716-1.03l1.5-2.5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 14a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M17.974 17.31a1 1 0 0 1-1.448 1.38l-15.25-16a1 1 0 0 1 1.448-1.38l15.25 16z"
  })));
};

module.exports.EyePrint = function EyePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10 4.5a1 1 0 1 1 2 0v2.032c.56.037 1.107.104 1.634.2l.385-1.928a1 1 0 0 1 1.962.392l-.409 2.042c.515.181.997.392 1.44.631l1.13-1.883a1 1 0 0 1 1.716 1.029L18.64 9.04C19.501 9.88 20 10.886 20 12c0 3.192-4.103 5.5-9 5.5S2 15.192 2 12c0-1.114.5-2.12 1.359-2.959L2.143 7.014a1 1 0 1 1 1.715-1.029l1.13 1.884c.443-.239.925-.45 1.44-.63l-.409-2.043a1 1 0 0 1 1.962-.392l.385 1.927A14.507 14.507 0 0 1 10 6.532V4.5zM8 8.855C5.61 9.45 4 10.71 4 12c0 1.778 3.06 3.5 7 3.5s7-1.722 7-3.5c0-1.29-1.61-2.55-4-3.145a4 4 0 1 1-6.001 0z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10 16c4.658 0 8.5-2.161 8.5-5S14.658 6 10 6c-4.658 0-8.5 2.161-8.5 5s3.842 5 8.5 5zm0-9c4.179 0 7.5 1.868 7.5 4 0 2.132-3.321 4-7.5 4s-7.5-1.868-7.5-4c0-2.132 3.321-4 7.5-4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 3.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.51 3.902a.5.5 0 0 1 .98.196l-.5 2.5a.5.5 0 0 1-.98-.196l.5-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.49 3.902a.5.5 0 0 0-.98.196l.5 2.5a.5.5 0 1 0 .98-.196l-.5-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M2.429 5.243a.5.5 0 1 0-.858.514l1.5 2.5a.5.5 0 0 0 .858-.514l-1.5-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M17.571 5.243a.5.5 0 1 1 .858.514l-1.5 2.5a.5.5 0 0 1-.858-.514l1.5-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
  })));
};

module.exports.Eye = function Eye(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 16.5c4.897 0 9-2.308 9-5.5s-4.103-5.5-9-5.5S1 7.808 1 11s4.103 5.5 9 5.5zm0-9c3.94 0 7 1.722 7 3.5s-3.06 3.5-7 3.5-7-1.722-7-3.5 3.06-3.5 7-3.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M9 3.5a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0v-3z"
  }), React.createElement("path", {
    d: "M13.02 3.804a1 1 0 0 1 1.96.392l-.5 2.5a1 1 0 1 1-1.96-.392l.5-2.5z"
  }), React.createElement("path", {
    d: "M6.98 3.804a1 1 0 0 0-1.96.392l.5 2.5a1 1 0 0 0 1.96-.392l-.5-2.5z"
  }), React.createElement("path", {
    d: "M2.858 4.986a1 1 0 1 0-1.715 1.029l1.5 2.5a1 1 0 1 0 1.715-1.03l-1.5-2.5z"
  }), React.createElement("path", {
    d: "M17.142 4.986a1 1 0 0 1 1.716 1.029l-1.5 2.5a1 1 0 1 1-1.716-1.03l1.5-2.5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 14a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z",
    "clip-rule": "evenodd"
  })));
};

module.exports.FilePrint = function FilePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M6.5 2h6.685a1.5 1.5 0 0 1 1.106.486l4.314 4.702A1.5 1.5 0 0 1 19 8.202V18.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5v-15A1.5 1.5 0 0 1 6.5 2z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.5 11a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.5 14a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M11.185 1H4.5A1.5 1.5 0 0 0 3 2.5v15A1.5 1.5 0 0 0 4.5 19h11a1.5 1.5 0 0 0 1.5-1.5V7.202a1.5 1.5 0 0 0-.395-1.014l-4.314-4.702A1.5 1.5 0 0 0 11.185 1zM4 2.5a.5.5 0 0 1 .5-.5h6.685a.5.5 0 0 1 .369.162l4.314 4.702a.5.5 0 0 1 .132.338V17.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-15z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11 7h5.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0V7z"
  })));
};

module.exports.File = function File(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M6.5 11.25a.75.75 0 0 1 0-1.5h7a.75.75 0 0 1 0 1.5h-7z"
  }), React.createElement("path", {
    d: "M6.5 14.25a.75.75 0 0 1 0-1.5h7a.75.75 0 0 1 0 1.5h-7z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.185.5H4.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7.202a2 2 0 0 0-.526-1.352l-4.315-4.702A2 2 0 0 0 11.185.5zM4.5 17.5v-15h6.685L15.5 7.202V17.5h-11z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M11.5 6.5h5a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 2 0v5z"
  })));
};

module.exports.FilmFramePrint = function FilmFramePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M2 6.5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-12z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M2 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2zm13.5 1.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 15 6V5a.5.5 0 0 1 .5-.5zm1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 17 9V8a.5.5 0 0 0-.5-.5zm-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-13-9h1A.5.5 0 0 1 5 5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 3 6V5a.5.5 0 0 1 .5-.5zm1 3h-1A.5.5 0 0 0 3 8v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 5 9V8a.5.5 0 0 0-.5-.5zm-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 3 12v-1a.5.5 0 0 1 .5-.5zm1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 5 15v-1a.5.5 0 0 0-.5-.5zm2 2.5V4h7v12h-7z",
    "clip-rule": "evenodd"
  })));
};

module.exports.FilmFrame = function FilmFrame(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M1.5 2.5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-17zm14 2h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 15 6V5a.5.5 0 0 1 .5-.5zm1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 17 9V8a.5.5 0 0 0-.5-.5zm-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-13-9h1A.5.5 0 0 1 5 5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 3 6V5a.5.5 0 0 1 .5-.5zm1 3h-1A.5.5 0 0 0 3 8v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 5 9V8a.5.5 0 0 0-.5-.5zm-1 3h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 3 12v-1a.5.5 0 0 1 .5-.5zm1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1A.5.5 0 0 0 5 15v-1a.5.5 0 0 0-.5-.5zm2 2v-11h7v11h-7z",
    "clip-rule": "evenodd"
  }));
};

module.exports.FlagPrint = function FlagPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "m8 4.97.954-.396a4 4 0 0 1 2.908.058l1.482.613a4 4 0 0 0 2.693.13l.893-.271A1.604 1.604 0 0 1 19 6.638V10.7a3.22 3.22 0 0 1-1.66 2.817l-.734.407a4 4 0 0 1-3.88 0l-.453-.251a4 4 0 0 0-3.88 0l-.226.126c-.055.03-.11.056-.167.079V19a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1c.81 0 1 .97 1 .97z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m6.804 2.632-.637.264A3.507 3.507 0 0 0 4 6.137v4.386a1.46 1.46 0 0 0 2.167 1.276l.227-.126a4 4 0 0 1 3.88 0l.453.251a4 4 0 0 0 3.88 0l.734-.407A3.222 3.222 0 0 0 17 8.7V4.638a1.605 1.605 0 0 0-2.07-1.534l-.893.272a4 4 0 0 1-2.694-.13l-1.48-.614a4 4 0 0 0-3.059 0zM5 6.137c0-1.014.611-1.929 1.549-2.317l.638-.264a3 3 0 0 1 2.293 0l1.481.613a5 5 0 0 0 3.367.163l.893-.271a.604.604 0 0 1 .779.577V8.7c0 .807-.438 1.551-1.144 1.943l-.735.407a3 3 0 0 1-2.91 0l-.453-.252a5 5 0 0 0-4.85 0l-.226.126A.46.46 0 0 1 5 10.523V6.137z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5 2a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Flag = function Flag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "m6.804 2.632-.637.264A3.507 3.507 0 0 0 4 6.137v4.386a1.46 1.46 0 0 0 2.167 1.276l.227-.126a4 4 0 0 1 3.88 0l.453.251a4 4 0 0 0 3.88 0l.734-.407A3.222 3.222 0 0 0 17 8.7V4.638a1.605 1.605 0 0 0-2.07-1.534l-.893.272a4 4 0 0 1-2.694-.131l-1.48-.613a4 4 0 0 0-3.059 0zm4.893 7.543-.454-.251A6 6 0 0 0 6 9.644V6.136c0-.61.368-1.16.931-1.393l.638-.263a2 2 0 0 1 1.529 0l1.481.612a6 6 0 0 0 4.04.196L15 5.173V8.7c0 .444-.241.853-.63 1.068l-.733.407a2 2 0 0 1-1.94 0z",
    "clip-rule": "evenodd"
  }), React.createElement("rect", {
    width: "2",
    height: "16",
    x: "4",
    y: "2",
    rx: "1"
  })));
};

module.exports.FlowerBudPrint = function FlowerBudPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M17.156 7.804A3.205 3.205 0 0 1 20 11a3.205 3.205 0 0 1-2.844 3.196c.122.34.188.707.188 1.09 0 1.775-1.427 3.214-3.188 3.214a3.178 3.178 0 0 1-2.656-1.437A3.178 3.178 0 0 1 8.844 18.5c-1.76 0-3.188-1.44-3.188-3.214 0-.383.067-.75.188-1.09A3.205 3.205 0 0 1 3 11a3.205 3.205 0 0 1 2.844-3.196 3.233 3.233 0 0 1-.188-1.09C5.656 4.94 7.083 3.5 8.844 3.5c1.108 0 2.085.57 2.656 1.437A3.178 3.178 0 0 1 14.156 3.5c1.76 0 3.188 1.44 3.188 3.214 0 .383-.067.75-.188 1.09z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M15.944 13.371a3.502 3.502 0 0 0 0-6.742A3.5 3.5 0 0 0 10 3.55a3.5 3.5 0 0 0-5.944 3.078 3.502 3.502 0 0 0 0 6.742A3.5 3.5 0 0 0 10 16.45a3.5 3.5 0 0 0 5.944-3.078zm-1.091-6.523a.5.5 0 0 0 .417.666 2.5 2.5 0 0 1 0 4.972.5.5 0 0 0-.417.666 2.5 2.5 0 0 1-4.436 2.23.5.5 0 0 0-.833 0 2.5 2.5 0 0 1-4.436-2.23.5.5 0 0 0-.418-.666 2.5 2.5 0 0 1 0-4.972.5.5 0 0 0 .417-.666 2.5 2.5 0 0 1 4.436-2.23.5.5 0 0 0 .833 0 2.5 2.5 0 0 1 4.436 2.23z",
    "clip-rule": "evenodd"
  })));
};

module.exports.FlowerBud = function FlowerBud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.49 13.713a4.003 4.003 0 0 0 0-7.426A4 4 0 0 0 10 2.877a4 4 0 0 0-6.49 3.41 4.003 4.003 0 0 0 0 7.426 4 4 0 0 0 6.49 3.41 4 4 0 0 0 6.49-3.41zm-2.108-7.035a1 1 0 0 0 .835 1.334 2 2 0 0 1 0 3.976 1 1 0 0 0-.835 1.334 2 2 0 0 1-3.55 1.783 1 1 0 0 0-1.665 0 2 2 0 0 1-3.55-1.783 1 1 0 0 0-.834-1.333 2 2 0 0 1 0-3.977 1 1 0 0 0 .835-1.334 2 2 0 0 1 3.55-1.783 1 1 0 0 0 1.665 0 2 2 0 0 1 3.55 1.783z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M13.5 10a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
  })));
};

module.exports.FlowerPrint = function FlowerPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m14.958 3.703-.073.079c-.334.365-.54.573-.71.708a63.19 63.19 0 0 1-.481-.636c-.289-.374-.529-.645-.775-.852-.3-.254-.598-.4-.919-.4-.169 0-.333.042-.491.119-.387.188-.711.541-1.145 1.148-.055.076-.192.272-.274.39l-.063.09-.106.147-.016-.012c-.179-.137-.394-.346-.749-.717l-.069-.072c-.533-.56-.678-.707-.901-.889-.182-.148-.339-.243-.51-.285a.632.632 0 0 0-.767.41A6.905 6.905 0 0 0 6.5 5.288c0 3.38 1.696 5.786 4.665 6.16A.995.995 0 0 0 11 12v3.772c-.399-.472-.871-.94-1.39-1.374-1.684-1.414-3.77-1.804-4.707-.687-.937 1.116-.19 3.103 1.494 4.517 1.612 1.353 4.263 2.048 5.37 1.245.066.015.134.024.203.027 1.13.76 3.739.066 5.332-1.272 1.685-1.414 2.432-3.4 1.495-4.517-.937-1.117-3.024-.727-4.708.687-.394.33-.76.679-1.089 1.034V12a.996.996 0 0 0-.165-.551c2.969-.375 4.665-2.78 4.665-6.16 0-.82-.14-1.616-.41-2.358a.629.629 0 0 0-.766-.409c-.17.043-.324.14-.5.29-.216.183-.35.325-.866.89z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m12.958 2.703-.073.079c-.334.365-.54.573-.71.708a63.19 63.19 0 0 1-.481-.636c-.289-.374-.529-.645-.775-.852-.3-.254-.598-.4-.919-.4-.169 0-.333.042-.491.119-.387.188-.711.541-1.145 1.148-.055.076-.192.272-.274.39l-.063.09-.106.147-.016-.012c-.179-.137-.394-.346-.749-.717l-.069-.072c-.533-.56-.678-.707-.901-.889-.182-.148-.339-.243-.51-.285a.632.632 0 0 0-.767.41A6.905 6.905 0 0 0 4.5 4.288C4.5 7.974 6.516 10.5 10 10.5s5.5-2.526 5.5-6.212a6.89 6.89 0 0 0-.41-2.357.629.629 0 0 0-.766-.409c-.17.043-.324.14-.5.29-.216.183-.35.325-.866.89zM5.5 4.288c0-.54.071-1.069.209-1.572.133.124.305.302.654.669l.07.073c.391.409.63.64.863.82.455.348.874.471 1.224.071.094-.107.19-.235.323-.423.009-.011.036-.05.072-.102l.262-.373c.337-.47.585-.741.768-.83A.159.159 0 0 1 10 2.6c.039 0 .137.05.274.165.18.15.38.377.628.7-.032-.042.545.73.68.883.35.402.77.276 1.212-.074.226-.179.457-.412.829-.818l.074-.08c.313-.344.477-.52.6-.642a5.97 5.97 0 0 1 .203 1.553C14.5 7.465 12.876 9.5 10 9.5S5.5 7.465 5.5 4.288z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 11a.5.5 0 0 1 1 0v6.5a.5.5 0 0 1-1 0V11z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M12.089 13.398c-1.975 1.657-3.287 3.786-2.377 4.871.929 1.107 3.859.412 5.59-1.04 1.685-1.414 2.432-3.402 1.495-4.518-.937-1.117-3.024-.727-4.708.687zm2.57 3.064c-1.362 1.144-3.728 1.704-4.18 1.164-.364-.433.7-2.16 2.252-3.462 1.318-1.106 2.817-1.386 3.3-.81.483.575-.053 2.002-1.371 3.108z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M7.61 13.398c1.975 1.657 3.288 3.786 2.377 4.871-.928 1.107-3.859.412-5.59-1.04-1.685-1.414-2.431-3.402-1.494-4.518.937-1.117 3.023-.727 4.708.687zm-2.57 3.064c1.363 1.144 3.728 1.704 4.181 1.164.364-.433-.7-2.16-2.253-3.462-1.318-1.106-2.816-1.386-3.3-.81-.482.575.054 2.002 1.372 3.108z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Flower = function Flower(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "m12.588 2.366-.071.078a18.36 18.36 0 0 1-.28.3 106.06 106.06 0 0 1-.148-.195c-.308-.4-.568-.694-.847-.929-.382-.323-.78-.518-1.242-.518-.25 0-.487.061-.71.17-.488.236-.85.631-1.333 1.306a26.93 26.93 0 0 0-.12.17c-.092-.09-.197-.198-.32-.327l-.067-.07c-.554-.582-.701-.73-.949-.932-.234-.191-.445-.32-.705-.384a1.132 1.132 0 0 0-1.357.726A7.405 7.405 0 0 0 4 4.288C4 8.228 6.212 11 10 11s6-2.771 6-6.712a7.38 7.38 0 0 0-.44-2.527 1.128 1.128 0 0 0-1.36-.724c-.262.067-.47.199-.7.395-.24.202-.375.346-.912.934zM10 9C7.428 9 6 7.21 6 4.288c0-.18.009-.357.025-.533l.047.048c.408.428.66.672.92.872.648.496 1.304.689 1.904.003.108-.123.214-.262.356-.463l.075-.108.257-.365c.175-.246.322-.427.429-.54a4.9 4.9 0 0 1 .493.569c-.045-.058.55.737.7.907.602.689 1.266.49 1.899-.01.25-.2.492-.443.874-.86.014.159.021.319.021.48C14 7.211 12.572 9 10 9z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M9 11a1 1 0 1 1 2 0v6.5a1 1 0 1 1-2 0V11z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.767 13.015c-2.185 1.834-3.622 4.165-2.438 5.576 1.166 1.39 4.38.628 6.295-.98 1.868-1.567 2.72-3.835 1.556-5.222-1.164-1.387-3.545-.942-5.413.626zm-.847 4.328a.184.184 0 0 1-.036-.018l.018.03c.008.006.013.004.018-.012zm3.418-1.264c-1.107.93-3.014 1.422-3.418 1.264a.32.32 0 0 0 .007-.03c.038-.189.156-.457.348-.769.404-.656 1.077-1.409 1.778-1.997 1.134-.952 2.339-1.177 2.595-.872.256.305-.175 1.452-1.31 2.404z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.932 13.015c2.186 1.834 3.622 4.165 2.438 5.576-1.166 1.39-4.379.628-6.294-.98-1.869-1.567-2.72-3.835-1.556-5.222 1.164-1.387 3.544-.942 5.412.626zm.848 4.328a.183.183 0 0 0 .035-.018l-.018.03c-.008.006-.013.004-.017-.012zM5.36 16.08c1.108.93 3.015 1.422 3.419 1.264a.307.307 0 0 1-.007-.03c-.038-.189-.156-.457-.348-.769-.405-.656-1.077-1.409-1.778-1.997-1.135-.952-2.34-1.177-2.595-.872-.256.305.175 1.452 1.31 2.404z",
    "clip-rule": "evenodd"
  })));
};

module.exports.FolderPrint = function FolderPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M12.219 7.5H17.5A2.5 2.5 0 0 1 20 10v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17V7.5A2.5 2.5 0 0 1 6.5 5h2.84a2.5 2.5 0 0 1 2.17 1.26l.709 1.24z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M15.5 5.5h-5.281L9.51 4.26A2.5 2.5 0 0 0 7.34 3H4.5A2.5 2.5 0 0 0 2 5.5V15a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 18 15V8a2.5 2.5 0 0 0-2.5-2.5zm-11 11A1.5 1.5 0 0 1 3 15V5.5A1.5 1.5 0 0 1 4.5 4h2.84a1.5 1.5 0 0 1 1.302.756l.852 1.492a.5.5 0 0 0 .435.252H15.5A1.5 1.5 0 0 1 17 8v7a1.5 1.5 0 0 1-1.5 1.5h-11z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Folder = function Folder(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.5 5h-4.991l-.565-.988A3 3 0 0 0 7.34 2.5H4.5a3 3 0 0 0-3 3V15a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-11 11a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1h2.84a1 1 0 0 1 .868.504l.852 1.492A1 1 0 0 0 9.93 7h5.57a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-11z",
    "clip-rule": "evenodd"
  }));
};

module.exports.GearPrint = function GearPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M11.558 3.25a.75.75 0 0 1 .685.447l.443 1c.044.1.065.202.065.302a6.2 6.2 0 0 1 1.254.52.751.751 0 0 1 .219-.151l.97-.443a.75.75 0 0 1 .843.151l.837.838a.75.75 0 0 1 .17.8l-.395 1.02a.748.748 0 0 1-.168.26c.218.398.392.818.52 1.255a.75.75 0 0 1 .261.048l1 .373a.75.75 0 0 1 .488.703v1.184a.75.75 0 0 1-.447.686l-1 .443a.75.75 0 0 1-.302.065 6.221 6.221 0 0 1-.52 1.254.75.75 0 0 1 .151.219l.444.97a.75.75 0 0 1-.152.843l-.838.837a.75.75 0 0 1-.8.17l-1.02-.395a.747.747 0 0 1-.26-.168 6.225 6.225 0 0 1-1.255.52.75.75 0 0 1-.048.261l-.373 1a.75.75 0 0 1-.703.488h-1.184a.75.75 0 0 1-.686-.447l-.443-1a.748.748 0 0 1-.065-.302 6.226 6.226 0 0 1-1.254-.52.752.752 0 0 1-.219.151l-.97.443a.75.75 0 0 1-.843-.151l-.837-.838a.75.75 0 0 1-.17-.8l.395-1.02a.749.749 0 0 1 .168-.26 6.224 6.224 0 0 1-.52-1.255.752.752 0 0 1-.261-.048l-1-.373a.75.75 0 0 1-.488-.703v-1.184a.75.75 0 0 1 .447-.686l1-.443a.748.748 0 0 1 .302-.065 6.2 6.2 0 0 1 .52-1.254.75.75 0 0 1-.15-.219l-.444-.97a.75.75 0 0 1 .151-.843l.838-.837a.75.75 0 0 1 .801-.17l1.02.395c.102.04.189.097.26.168a6.224 6.224 0 0 1 1.254-.52.75.75 0 0 1 .048-.261l.373-1a.75.75 0 0 1 .703-.488h1.185z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8.232 11.518A2.493 2.493 0 0 0 10 12.25c.672 0 1.302-.267 1.768-.732A2.493 2.493 0 0 0 12.5 9.75c0-.672-.267-1.302-.732-1.768A2.493 2.493 0 0 0 10 7.25c-.672 0-1.302.267-1.768.732A2.493 2.493 0 0 0 7.5 9.75c0 .672.267 1.302.732 1.768zm2.829-.707c-.28.28-.657.439-1.061.439-.404 0-.78-.16-1.06-.44s-.44-.656-.44-1.06.16-.78.44-1.06.656-.44 1.06-.44.78.16 1.06.44.44.656.44 1.06-.16.78-.44 1.06z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m14.216 3.523-1.27.714a6.213 6.213 0 0 0-1.166-.48l-.47-1.414A.5.5 0 0 0 10.837 2H9.06a.5.5 0 0 0-.481.365l-.392 1.403a6.214 6.214 0 0 0-1.164.486L5.69 3.585a.5.5 0 0 0-.578.094L3.855 4.935a.5.5 0 0 0-.082.599l.714 1.27c-.199.37-.36.76-.48 1.166l-1.414.47a.5.5 0 0 0-.343.474v1.777a.5.5 0 0 0 .365.481l1.403.392c.122.405.285.794.486 1.164l-.669 1.333a.5.5 0 0 0 .094.578l1.256 1.256a.5.5 0 0 0 .599.082l1.27-.714c.37.199.76.36 1.166.48l.47 1.414a.5.5 0 0 0 .474.343h1.777a.5.5 0 0 0 .481-.365l.392-1.403a6.21 6.21 0 0 0 1.164-.486l1.333.669a.5.5 0 0 0 .578-.093l1.256-1.257a.5.5 0 0 0 .082-.599l-.714-1.27c.199-.37.36-.76.48-1.166l1.414-.47a.5.5 0 0 0 .343-.474V8.81a.5.5 0 0 0-.365-.481l-1.403-.392a6.208 6.208 0 0 0-.486-1.164l.669-1.333a.5.5 0 0 0-.093-.578l-1.257-1.256a.5.5 0 0 0-.599-.082zm-1.024 1.724 1.184-.667.733.733-.627 1.25a.5.5 0 0 0 .019.482c.265.44.464.918.59 1.418a.5.5 0 0 0 .35.36l1.309.366v1.037l-1.327.44a.5.5 0 0 0-.328.354 5.216 5.216 0 0 1-.585 1.42.5.5 0 0 0-.007.502l.667 1.184-.733.733-1.25-.627a.5.5 0 0 0-.482.019c-.44.265-.918.464-1.418.59a.5.5 0 0 0-.36.35l-.366 1.309H9.525l-.44-1.327a.5.5 0 0 0-.355-.328 5.217 5.217 0 0 1-1.42-.585.5.5 0 0 0-.502-.007l-1.184.667-.733-.733.627-1.25a.5.5 0 0 0-.019-.482 5.216 5.216 0 0 1-.59-1.418.5.5 0 0 0-.35-.36l-1.309-.366V9.275l1.327-.44a.5.5 0 0 0 .327-.355c.125-.5.323-.979.586-1.42a.5.5 0 0 0 .007-.502L4.83 5.374l.733-.733 1.25.627a.5.5 0 0 0 .482-.019c.44-.265.918-.464 1.418-.59a.5.5 0 0 0 .36-.35L9.439 3h1.037l.44 1.327a.5.5 0 0 0 .354.327c.5.125.979.323 1.42.586a.5.5 0 0 0 .502.007z"
  })));
};

module.exports.Gear = function Gear(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M10.558 2.25a.75.75 0 0 1 .685.447l.443 1A.75.75 0 0 1 11 4.75H9a.75.75 0 0 1-.703-1.012l.373-1a.75.75 0 0 1 .703-.488h1.185z"
  }), React.createElement("path", {
    d: "M9.443 17.75a.75.75 0 0 1-.686-.447l-.443-1A.75.75 0 0 1 9 15.25h2a.75.75 0 0 1 .703 1.012l-.373 1a.75.75 0 0 1-.703.488H9.443z"
  }), React.createElement("path", {
    d: "M17.75 10.557a.75.75 0 0 1-.447.686l-1 .443A.75.75 0 0 1 15.25 11V9a.75.75 0 0 1 1.012-.703l1 .373a.75.75 0 0 1 .488.703v1.184z"
  }), React.createElement("path", {
    d: "M2.25 9.442a.75.75 0 0 1 .447-.685l1-.443A.75.75 0 0 1 4.75 9v2a.75.75 0 0 1-1.012.703l-1-.373a.75.75 0 0 1-.488-.703V9.442z"
  }), React.createElement("path", {
    d: "M15.874 4.914a.75.75 0 0 1 .17.8l-.395 1.02a.75.75 0 0 1-1.23.26l-1.414-1.413a.75.75 0 0 1 .219-1.213l.97-.443a.75.75 0 0 1 .843.151l.837.838z"
  }), React.createElement("path", {
    d: "M4.126 15.086a.75.75 0 0 1-.17-.8l.395-1.02a.75.75 0 0 1 1.23-.26l1.414 1.413a.75.75 0 0 1-.219 1.213l-.97.443a.75.75 0 0 1-.843-.151l-.837-.838z"
  }), React.createElement("path", {
    d: "M15.086 15.874a.75.75 0 0 1-.8.17l-1.02-.395a.75.75 0 0 1-.26-1.23l1.414-1.414a.75.75 0 0 1 1.212.219l.444.97a.75.75 0 0 1-.152.842l-.838.838z"
  }), React.createElement("path", {
    d: "M4.914 4.126a.75.75 0 0 1 .8-.17l1.02.395a.75.75 0 0 1 .26 1.23L5.582 6.995a.75.75 0 0 1-1.213-.219l-.443-.97a.75.75 0 0 1 .151-.843l.838-.837z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.58 14.42A6.236 6.236 0 0 0 10 16.25a6.236 6.236 0 0 0 4.42-1.83A6.236 6.236 0 0 0 16.25 10a6.236 6.236 0 0 0-1.83-4.42A6.236 6.236 0 0 0 10 3.75a6.236 6.236 0 0 0-4.42 1.83A6.236 6.236 0 0 0 3.75 10c0 1.678.668 3.256 1.83 4.42zm5.657-3.183A1.737 1.737 0 0 1 10 11.75c-.472 0-.91-.185-1.237-.513A1.737 1.737 0 0 1 8.25 10c0-.472.185-.91.513-1.237A1.737 1.737 0 0 1 10 8.25c.472 0 .91.185 1.237.513.328.327.513.765.513 1.237 0 .472-.185.91-.513 1.237z",
    "clip-rule": "evenodd"
  })));
};

module.exports.GiftPrint = function GiftPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M20 8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M3 5h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm14 12V6H3v11h14z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 5.5h1v12h-1z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M2 10.5h16v1H2z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M8.943 1.554c1.125.978 1.787 3.001 1.035 3.866-.75.864-2.374.27-3.659-.847-1.094-.951-1.469-2.399-.712-3.269.756-.87 2.242-.701 3.336.25zM6.975 3.82c.897.779 2.033 1.194 2.249.945.3-.344-.174-1.792-.937-2.455-.725-.63-1.595-.73-1.926-.349-.33.38-.11 1.228.614 1.859z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M11.298 1.554c-1.124.978-1.787 3.001-1.035 3.866.75.864 2.374.27 3.66-.847 1.094-.951 1.469-2.399.712-3.269-.756-.87-2.242-.701-3.337.25zm1.969 2.265c-.897.779-2.033 1.194-2.249.945-.3-.344.174-1.792.936-2.455.725-.63 1.596-.73 1.926-.349.33.38.111 1.228-.613 1.859z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Gift = function Gift(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M9 7h2v11H9z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.356 6.998c.978-1.125.222-3.435-1.085-4.57C7.992 1.314 6.2 1.11 5.23 2.225c-.97 1.115-.517 2.863.762 3.975 1.48 1.286 3.347 1.968 4.365.797zM8.85 5.681a.352.352 0 0 1 .142-.1 1.182 1.182 0 0 1-.147-.023c.012.065.013.11.002.126l.003-.003zm-1.548-.99c.388.337.887.644 1.302.795.09.033.172.057.24.072-.06-.333-.404-1.202-.886-1.621-.54-.47-1.103-.534-1.22-.399-.118.135.024.684.564 1.153z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.886 6.998c-.978-1.125-.222-3.435 1.084-4.57 1.28-1.113 3.073-1.317 4.042-.202.97 1.115.518 2.863-.761 3.975-1.48 1.286-3.347 1.968-4.365.797zm1.504-1.317a.352.352 0 0 0-.14-.1 1.18 1.18 0 0 0 .146-.023c-.012.065-.013.11-.002.126l-.004-.003zm1.549-.99c-.388.337-.887.644-1.302.795a1.898 1.898 0 0 1-.241.072c.06-.333.404-1.202.886-1.621.54-.47 1.104-.534 1.22-.399.118.135-.024.684-.563 1.153z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M17 11v2H3v-2z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M3 6h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm13 11V8H4v9h12z",
    "clip-rule": "evenodd"
  })));
};

module.exports.GrabPrint = function GrabPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M4 8a1 1 0 0 1 0-2h14.423a1 1 0 1 1 0 2H4z"
  }), React.createElement("path", {
    d: "M4 11.75a1 1 0 1 1 0-2h14.423a1 1 0 1 1 0 2H4z"
  }), React.createElement("path", {
    d: "M4 15a1 1 0 1 1 0-2h14.423a1 1 0 1 1 0 2H4z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M3 7a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1H3z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M3 10.25a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1H3z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M3 13.5a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1H3z"
  })));
};

module.exports.Grab = function Grab(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M2.5 8a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2h-15z"
  }), React.createElement("path", {
    d: "M2.5 11.25a1 1 0 1 1 0-2h15a1 1 0 1 1 0 2h-15z"
  }), React.createElement("path", {
    d: "M2.5 14.5a1 1 0 1 1 0-2h15a1 1 0 1 1 0 2h-15z"
  })));
};

module.exports.HamburgerPrint = function HamburgerPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 21"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M19 7.613c0 1.213-.685 1.924-1.937 2.208-.871.197-1.658.21-4.035.142A66.31 66.31 0 0 0 11 9.926c-.59 0-1.103.01-2.028.037-2.377.068-3.164.055-4.035-.142C3.685 9.537 3 8.826 3 7.613 3 4.863 6.503 3 11 3s8 1.864 8 4.613z"
  }), React.createElement("path", {
    d: "M2.997 18.374c0 .948.614 1.45 1.674 1.58.692.086 1.122.065 3.296-.105 1.282-.101 2.118-.146 3.03-.146.912 0 1.747.045 3.03.146 2.174.17 2.603.19 3.295.105 1.06-.13 1.675-.632 1.675-1.58 0-1.967-2.052-2.366-7.295-2.377h-1.411c-5.243.01-7.294.41-7.294 2.377z"
  }), React.createElement("path", {
    d: "M3.754 12.614a1 1 0 1 1-1.008-1.728 4.573 4.573 0 0 1 2.334-.636c.573 0 .919.1 1.426.34l.013.006c.272.128.361.154.606.154.236 0 .302-.02.537-.14l.011-.006c.485-.248.832-.354 1.413-.354.59 0 .939.109 1.426.365l.004.002c.222.117.275.133.484.133.209 0 .26-.016.482-.133l.005-.002c.486-.256.835-.365 1.427-.365.584 0 .93.106 1.422.356.246.124.31.144.539.144.23 0 .299-.02.544-.144l.006-.003c.495-.248.841-.353 1.423-.353.814 0 1.609.21 2.374.618a1 1 0 1 1-.944 1.764 2.985 2.985 0 0 0-1.43-.382c-.22 0-.285.02-.526.14-.506.254-.856.36-1.447.36-.592 0-.943-.107-1.439-.358l-.005-.003c-.236-.12-.298-.139-.517-.139-.217 0-.272.017-.496.135l-.005.002c-.483.255-.829.363-1.413.363-.584 0-.93-.108-1.414-.363l-.004-.002c-.225-.118-.28-.135-.496-.135-.215 0-.275.018-.501.134l-.012.006c-.492.252-.849.36-1.448.36-.59 0-.944-.102-1.46-.346l-.012-.005c-.265-.125-.347-.149-.573-.149-.47 0-.907.12-1.326.364z"
  }), React.createElement("path", {
    d: "M4 15.25a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H4z"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M3.671 18.204c-1.06-.13-1.674-.632-1.674-1.58 0-1.967 2.051-2.366 7.294-2.377h1.411c5.243.01 7.295.41 7.295 2.377 0 .948-.615 1.45-1.675 1.58-.692.086-1.121.065-3.295-.105-1.283-.101-2.118-.146-3.03-.146-.912 0-1.748.045-3.03.146-2.174.17-2.604.19-3.296.105zm5.622-2.957c-4.42.009-6.296.375-6.296 1.377 0 .361.185.512.797.588.592.073 1.021.052 3.095-.11 1.306-.103 2.163-.149 3.108-.149.944 0 1.801.046 3.108.149 2.073.162 2.503.183 3.095.11.611-.076.797-.227.797-.588 0-1.002-1.877-1.368-6.297-1.377H9.293z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M16.063 8.07C17.315 7.788 18 7.077 18 5.864c0-2.75-3.503-4.613-8-4.613S2 3.114 2 5.863c0 1.213.685 1.924 1.937 2.208.871.197 1.658.21 4.035.142A66.31 66.31 0 0 1 10 8.176c.59 0 1.104.01 2.028.037 2.377.068 3.164.055 4.035-.142zM10 2.25c4.018 0 7 1.587 7 3.613 0 .703-.329 1.044-1.158 1.232-.752.17-1.514.183-3.785.118A67.172 67.172 0 0 0 10 7.176c-.602 0-1.123.01-2.057.037-2.271.065-3.033.053-3.785-.118C3.328 6.907 3 6.566 3 5.863 3 3.837 5.982 2.25 10 2.25z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M2.502 10.432a.5.5 0 0 1-.504-.864A4.074 4.074 0 0 1 4.08 9c.486 0 .766.081 1.213.292l.012.006c.334.157.489.202.82.202.327 0 .466-.042.764-.195l.012-.006C7.321 9.084 7.596 9 8.086 9c.497 0 .772.086 1.193.307.292.154.418.193.721.193s.428-.04.715-.19l.004-.003c.421-.22.697-.307 1.195-.307.492 0 .768.084 1.196.301l.005.003c.304.154.44.196.76.196s.46-.042.768-.197l.006-.003c.432-.217.708-.3 1.199-.3.73 0 1.444.188 2.138.56a.5.5 0 0 1-.472.88c-.552-.294-1.105-.44-1.666-.44-.31 0-.446.041-.75.194l-.007.003c-.435.219-.715.303-1.216.303s-.78-.085-1.212-.304l-.006-.003c-.3-.152-.433-.193-.743-.193s-.44.04-.729.193l-.005.002c-.417.22-.69.305-1.18.305s-.763-.085-1.182-.305l-.004-.002c-.29-.153-.418-.193-.728-.193-.307 0-.438.04-.729.189l-.012.006c-.428.22-.712.305-1.22.305-.504 0-.791-.083-1.247-.298l-.012-.006C4.541 10.043 4.393 10 4.08 10c-.56 0-1.082.143-1.578.432z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M3 13a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1H3z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.1 5.25a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8.6 4.25a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10.6 5.75a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.6 4.25a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M15.1 5.25a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0z"
  })));
};

module.exports.Hamburger = function Hamburger(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.393 13.805c1.288.172 2.103.893 2.103 2.166 0 1.49-1.113 2.326-2.917 2.707-1.181.25-2.533.32-4.877.325l-.674.001H9.29c-2.344-.006-3.696-.077-4.877-.326-1.803-.38-2.917-1.218-2.917-2.707 0-1.273.815-1.994 2.103-2.166.75-.1 1.18-.078 3.412.111 1.27.108 2.092.156 2.985.156.893 0 1.716-.048 2.985-.155 2.232-.19 2.662-.213 3.412-.112zm-5.695 3.198c4.064-.008 5.798-.374 5.798-1.032 0-.051.002-.082-.012-.104-.026-.04-.106-.047-.357-.08-.533-.071-.962-.049-2.977.122-1.321.112-2.19.163-3.154.163-.963 0-1.833-.05-3.154-.163-2.015-.17-2.444-.193-2.977-.122-.25.033-.331.04-.357.08-.014.022-.012.053-.012.104 0 .658 1.734 1.024 5.798 1.032l.67.001h.734z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M2.887 10.642a.75.75 0 1 1-.774-1.284 4.124 4.124 0 0 1 2.158-.608c.52 0 .83.092 1.296.32l.012.006c.288.14.4.174.671.174.263 0 .357-.03.61-.163l.011-.006c.443-.234.75-.331 1.276-.331.536 0 .844.1 1.288.34.246.134.326.16.565.16.239 0 .318-.026.559-.157.449-.243.757-.343 1.293-.343.53 0 .836.097 1.287.333l.005.003c.258.135.35.164.606.164.257 0 .352-.03.615-.166.46-.238.767-.334 1.294-.334.755 0 1.493.2 2.204.594a.75.75 0 0 1-.726 1.312c-.494-.273-.984-.406-1.478-.406-.247 0-.338.028-.598.163l-.006.003c-.457.237-.768.334-1.305.334-.538 0-.848-.098-1.303-.336l-.005-.003c-.254-.133-.343-.161-.59-.161-.247 0-.329.027-.572.159-.446.242-.751.341-1.28.341s-.834-.099-1.276-.339c-.248-.134-.33-.161-.577-.161-.243 0-.33.027-.574.157l-.012.006c-.45.238-.767.337-1.311.337-.537 0-.854-.094-1.329-.326l-.012-.006c-.28-.136-.385-.168-.638-.168-.49 0-.947.129-1.384.392z"
  }), React.createElement("path", {
    d: "M3 11.25h14c1.333 0 1.333 2 0 2H3c-1.333 0-1.333-2 0-2z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.173 8.21c1.464-.332 2.327-1.228 2.327-2.696 0-3.11-3.764-5.113-8.5-5.113-4.737 0-8.5 2.003-8.5 5.113 0 1.468.863 2.364 2.327 2.695.93.211 1.73.224 4.159.155A65.9 65.9 0 0 1 10 8.327c.584 0 1.094.01 2.014.037 2.43.07 3.229.056 4.16-.155zM10 2.4c3.778 0 6.5 1.448 6.5 3.113 0 .448-.151.605-.769.745-.692.157-1.441.169-3.66.105A67.582 67.582 0 0 0 10 6.327c-.608 0-1.133.01-2.071.037-2.22.064-2.968.052-3.66-.105-.618-.14-.77-.297-.77-.745 0-1.665 2.723-3.113 6.5-3.113z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M6.1 5a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0z"
  }), React.createElement("path", {
    d: "M8.6 4a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0z"
  }), React.createElement("path", {
    d: "M10.6 5.5a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0z"
  }), React.createElement("path", {
    d: "M12.6 4a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0z"
  }), React.createElement("path", {
    d: "M15.1 5a.6.6 0 1 1-1.2 0 .6.6 0 0 1 1.2 0z"
  })));
};

module.exports.HashPrint = function HashPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    strokeLinecap: "round"
  }, React.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "3",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M5.5 8.75h11"
  }), React.createElement("path", {
    d: "M5.5 14.25h11"
  }), React.createElement("path", {
    d: "m8.75 5-1 12"
  }), React.createElement("path", {
    d: "m14.25 5-1 12"
  })), React.createElement("path", {
    stroke: "#000",
    d: "M3.5 7.75h13"
  }), React.createElement("path", {
    stroke: "#000",
    d: "M3.5 13.25h13"
  }), React.createElement("path", {
    stroke: "#000",
    d: "m7.75 4-1 12"
  }), React.createElement("path", {
    stroke: "#000",
    d: "m13.25 4-1 12"
  })));
};

module.exports.Hash = function Hash(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    d: "M4 7.25h12"
  }), React.createElement("path", {
    d: "M4 12.75h12"
  }), React.createElement("path", {
    d: "m7.75 4-1 12"
  }), React.createElement("path", {
    d: "m13.25 4-1 12"
  })));
};

module.exports.HeadphonePrint = function HeadphonePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M18.88 17.069a1 1 0 0 1-1.347.602A2.976 2.976 0 0 1 15.013 19h-.016a1 1 0 0 1-.981-1.014l.054-4A1 1 0 0 1 15.089 13c.97.019 1.825.496 2.36 1.222.034-.348.051-.7.051-1.056 0-4.456-2.756-7.412-6.5-7.412S4.5 8.71 4.5 13.166c0 .39.02.775.062 1.155a2.975 2.975 0 0 1 2.491-1.287h.017a1 1 0 0 1 .98 1.014l-.054 4a1 1 0 0 1-1.019.986 2.997 2.997 0 0 1-2.47-1.382 1 1 0 0 1-1.388-.584 12.4 12.4 0 0 1-.619-3.902c0-5.53 3.619-9.412 8.5-9.412s8.5 3.882 8.5 9.412c0 1.354-.212 2.673-.62 3.902z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M17.405 14.911a.5.5 0 1 1-.949-.315c.358-1.076.544-2.236.544-3.43 0-4.725-2.972-7.912-7-7.912-4.029 0-7 3.187-7 7.912a10.9 10.9 0 0 0 .544 3.43.5.5 0 1 1-.95.315A11.9 11.9 0 0 1 2 11.166c0-5.262 3.403-8.912 8-8.912 4.597 0 8 3.65 8 8.912 0 1.3-.203 2.567-.595 3.745z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.977 17.034a3 3 0 0 1-2.942-3.04v-.022a2.978 2.978 0 0 1 3.018-2.938h.017a1 1 0 0 1 .98 1.014l-.054 4a1 1 0 0 1-1.019.986z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14.089 11a3 3 0 0 1 2.942 3.04v.022A2.978 2.978 0 0 1 14.013 17h-.016a1 1 0 0 1-.981-1.014l.054-4A1 1 0 0 1 14.089 11z"
  })));
};

module.exports.Headphone = function Headphone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M17.88 15.069a1 1 0 0 1-1.898-.63 10.4 10.4 0 0 0 .518-3.273c0-4.456-2.756-7.412-6.5-7.412S3.5 6.71 3.5 11.166c0 1.14.178 2.247.518 3.273a1 1 0 0 1-1.898.63 12.4 12.4 0 0 1-.62-3.903c0-5.53 3.619-9.412 8.5-9.412s8.5 3.882 8.5 9.412c0 1.354-.212 2.673-.62 3.902z"
  }), React.createElement("path", {
    d: "M5.977 17.034a3 3 0 0 1-2.942-3.04v-.022a2.978 2.978 0 0 1 3.035-2.937 1 1 0 0 1 .98 1.013l-.054 4a1 1 0 0 1-1.019.986z"
  }), React.createElement("path", {
    d: "M14.089 11a3 3 0 0 1 2.942 3.04v.022A2.978 2.978 0 0 1 14.013 17h-.016a1 1 0 0 1-.981-1.014l.054-4A1 1 0 0 1 14.089 11z"
  })));
};

module.exports.HeartPrint = function HeartPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M12 7.492c1.464-2.62 6.5-1.705 6.5 2.08 0 2.53-2.167 4.838-6.5 6.928-4.333-2.09-6.5-4.399-6.5-6.928 0-3.785 5.036-4.7 6.5-2.08z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10.217 15.95C14.705 13.786 17 11.34 17 8.572c0-3.815-4.86-5.346-7-2.94-2.14-2.406-7-.875-7 2.94 0 2.768 2.295 5.214 6.783 7.378l.217.105.217-.105zm.22-9.214C11.745 4.394 16 5.5 16 8.572c0 2.25-1.967 4.386-6 6.372-4.033-1.986-6-4.122-6-6.372C4 5.5 8.255 4.394 9.564 6.736c0 0 .218.298.436.298s.437-.298.437-.298z"
  })));
};

module.exports.Heart = function Heart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10 6.492c1.464-2.62 6.5-1.705 6.5 2.08 0 2.53-2.167 4.838-6.5 6.928-4.333-2.09-6.5-4.399-6.5-6.928 0-3.785 5.036-4.7 6.5-2.08z",
    "clip-rule": "evenodd"
  }));
};

module.exports.HousePrint = function HousePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M3.889 11H2.5a.5.5 0 0 1-.33-.875l8.5-7.5a.5.5 0 0 1 .66 0l8.5 7.5a.5.5 0 0 1-.33.875h-1.389v7a.5.5 0 0 1-.5.5H4.39a.5.5 0 0 1-.5-.5v-7z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M1 10h1.389v7a.5.5 0 0 0 .5.5H16.11a.5.5 0 0 0 .5-.5v-7H18a.5.5 0 0 0 .33-.875l-8.5-7.5a.5.5 0 0 0-.66 0l-8.5 7.5A.5.5 0 0 0 1 10zm1.889-1h-.567L9.5 2.667 16.678 9h-.567a.5.5 0 0 0-.5.5v7H3.39v-7a.5.5 0 0 0-.5-.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10.708 11.5h-2.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-2.5 5v-4h2.5v4h-2.5z",
    "clip-rule": "evenodd"
  })));
};

module.exports.House = function House(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 22 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2 11c-.92 0-1.352-1.137-.664-1.747l9-8a1 1 0 0 1 1.328 0l9 8C21.352 9.863 20.92 11 20 11h-1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H2zm6 6v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h3v-7a1 1 0 0 1 .512-.873L11 3.337l-6.512 5.79A1 1 0 0 1 5 10v7h3zm2 0v-4h2v4h-2z",
    "clip-rule": "evenodd"
  }));
};

module.exports.IdentificationPrint = function IdentificationPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3 7.5A2.5 2.5 0 0 1 5.5 5h12A2.5 2.5 0 0 1 20 7.5v7a2.5 2.5 0 0 1-2.5 2.5h-12A2.5 2.5 0 0 1 3 14.5v-7z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M4 4a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 4 14h12a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 16 4H4zM1.5 5.5A2.5 2.5 0 0 1 4 3h12a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 16 15H4a2.5 2.5 0 0 1-2.5-2.5v-7z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M9.182 6.818a.5.5 0 0 1 .5-.5h2.727a.5.5 0 0 1 0 1H9.682a.5.5 0 0 1-.5-.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M9.182 10.91a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1H9.682a.5.5 0 0 1-.5-.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M9.182 8.182a.5.5 0 0 1 .5-.5h5.454a.5.5 0 0 1 0 1H9.682a.5.5 0 0 1-.5-.5zm0 1.363a.5.5 0 0 1 .5-.5h5.454a.5.5 0 0 1 0 1H9.682a.5.5 0 0 1-.5-.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M7.773 8.182a1.364 1.364 0 1 1-2.728 0 1.364 1.364 0 0 1 2.728 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8.045 10.775c0 .688-.732.623-1.636.623-.904 0-1.636.066-1.636-.623 0-.688.732-1.557 1.636-1.557.904 0 1.636.87 1.636 1.557z"
  })));
};

module.exports.Identification = function Identification(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M9 8a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H9.5A.5.5 0 0 1 9 8z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M9 11.75a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M9 9.25a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 1.25a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M7.75 9.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z"
  }), React.createElement("path", {
    d: "M8 11.627c0 .631-.672.571-1.5.571s-1.5.06-1.5-.57c0-.631.672-1.428 1.5-1.428s1.5.797 1.5 1.428z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 6.5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-7zm3-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H4z",
    "clip-rule": "evenodd"
  })));
};

module.exports.InfoFilled = function InfoFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-9.071a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1zM10 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    "clip-rule": "evenodd"
  }));
};

module.exports.InfoPrint = function InfoPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("circle", {
    cx: "12",
    cy: "11",
    r: "7",
    fill: "currentColor",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 9a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0V9z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M3 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0zm13 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0z",
    "clip-rule": "evenodd"
  }), React.createElement("circle", {
    cx: "10",
    cy: "6.75",
    r: ".75",
    fill: "#000"
  })));
};

module.exports.Info = function Info(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M9 10a1 1 0 0 1 2 0v4a1 1 0 1 1-2 0v-4z"
  }), React.createElement("circle", {
    cx: "10",
    cy: "7",
    r: "1"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm14 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0z",
    "clip-rule": "evenodd"
  })));
};

module.exports.InternetPrint = function InternetPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M11.5 20a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M1.5 10a8.5 8.5 0 1 0 17 0 8.5 8.5 0 0 0-17 0zm16 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M6.5 10c0 4.396 1.442 8 3.5 8s3.5-3.604 3.5-8-1.442-8-3.5-8-3.5 3.604-3.5 8zm6 0c0 3.889-1.245 7-2.5 7s-2.5-3.111-2.5-7S8.745 3 10 3s2.5 3.111 2.5 7z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "m3.735 5.312.67-.742c.107.096.221.19.343.281 1.318.988 3.398 1.59 5.665 1.59 1.933 0 3.737-.437 5.055-1.19a5.59 5.59 0 0 0 .857-.597l.65.76c-.298.255-.636.49-1.01.704-1.477.845-3.452 1.323-5.552 1.323-2.47 0-4.762-.663-6.265-1.79a5.81 5.81 0 0 1-.413-.34z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m3.735 14.7.67.74c.107-.096.221-.19.343-.28 1.318-.988 3.398-1.59 5.665-1.59 1.933 0 3.737.436 5.055 1.19.321.184.608.384.857.596l.65-.76a6.583 6.583 0 0 0-1.01-.704c-1.477-.844-3.452-1.322-5.552-1.322-2.47 0-4.762.663-6.265 1.789-.146.11-.284.223-.413.34z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M2 10.5v-1h16v1H2z"
  })));
};

module.exports.Internet = function Internet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.25 10a8.75 8.75 0 1 0 17.5 0 8.75 8.75 0 0 0-17.5 0zm16 0a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 10c0 4.522 1.491 8.25 3.75 8.25s3.75-3.728 3.75-8.25S12.259 1.75 10 1.75 6.25 5.478 6.25 10zm6 0c0 3.762-1.195 6.75-2.25 6.75S7.75 13.762 7.75 10 8.945 3.25 10 3.25s2.25 2.988 2.25 6.75z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "m3.602 5.467 1.006-1.112c.1.09.209.18.325.267 1.271.952 3.3 1.54 5.515 1.54 1.891 0 3.652-.427 4.931-1.158.308-.176.582-.367.819-.57l.974 1.141a6.73 6.73 0 0 1-1.048.73c-1.516.868-3.534 1.356-5.676 1.356-2.522 0-4.865-.678-6.415-1.839a6.063 6.063 0 0 1-.431-.355z"
  }), React.createElement("path", {
    d: "m3.602 14.549 1.006 1.112c.1-.091.209-.18.325-.267 1.271-.952 3.3-1.54 5.515-1.54 1.891 0 3.652.427 4.931 1.158.308.176.582.367.819.57l.974-1.141a6.841 6.841 0 0 0-1.048-.73c-1.516-.868-3.534-1.356-5.676-1.356-2.522 0-4.865.678-6.415 1.839a6.06 6.06 0 0 0-.431.355z"
  }), React.createElement("path", {
    d: "M1.75 10.75v-1.5h16.5v1.5H1.75z"
  })));
};

module.exports.KeyPrint = function KeyPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M14.5 9v2.611a.5.5 0 0 1-.14.348l-1.004 1.036.998 1a.5.5 0 0 1 .146.354v.775a.5.5 0 0 1-.252.434l-.716.41.786.646A.5.5 0 0 1 14.5 17a2.5 2.5 0 0 1-5 0V9a2.6 2.6 0 0 1 .012-.25 4.5 4.5 0 1 1 4.975 0c.009.083.013.166.013.25z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M12.5 11.611V9a2.6 2.6 0 0 0-.012-.25 4.5 4.5 0 1 0-4.975 0A2.523 2.523 0 0 0 7.5 9v8a2.5 2.5 0 0 0 5 0 .5.5 0 0 0-.182-.386l-.786-.646.716-.41a.5.5 0 0 0 .252-.434v-.775a.5.5 0 0 0-.146-.353l-.998-1.001 1.003-1.036a.5.5 0 0 0 .141-.348zm-1.047-2.986c.031.121.047.247.047.375v2.409l-1.204 1.243a.5.5 0 0 0 .005.701l1.199 1.203v.278l-1.093.626a.5.5 0 0 0-.07.82l1.147.943A1.5 1.5 0 0 1 8.5 17V9c0-.128.016-.254.047-.375a.5.5 0 0 0-.242-.562 3.5 3.5 0 1 1 3.39 0 .5.5 0 0 0-.242.562z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Key = function Key(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M12.718 12.307A1 1 0 0 0 13 11.61V9a5 5 0 1 0-6 0v8a3 3 0 1 0 6 0 1 1 0 0 0-.365-.772l-.226-.186.088-.05a1 1 0 0 0 .503-.868v-.775a1 1 0 0 0-.292-.706l-.65-.653.66-.683zm-1.75-3.558A.998.998 0 0 1 11 9v2.206l-1.063 1.098a1 1 0 0 0 .01 1.402l.915.917-.703.402a1 1 0 0 0-.14 1.64l.897.738A1 1 0 0 1 9 17V9c0-.086.01-.17.031-.25a1 1 0 0 0-.483-1.124 3 3 0 1 1 2.904 0 1 1 0 0 0-.483 1.123z"
  }), React.createElement("path", {
    d: "M10 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z"
  })));
};

module.exports.KniveForkPrint = function KniveForkPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.905.834C13.672 1.992 12.5 3.64 12.5 5.717c0 1.957 1.046 3.315 3 3.979V11.2a1.5 1.5 0 0 0-.75 1.299v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-.75-1.3V1.5a.75.75 0 0 0-1.095-.666zM5.783 2.463a.75.75 0 0 1 1.498.074c-.082 1.638.003 2.747.219 3.267a.644.644 0 0 0 .5.418V2.5a.75.75 0 0 1 1.5 0v3.722a.644.644 0 0 0 .5-.418c.216-.52.3-1.63.219-3.267a.75.75 0 0 1 1.498-.074c.092 1.846-.006 3.131-.331 3.915-.336.81-1 1.267-1.886 1.356V11.2a1.5 1.5 0 0 1 .75 1.299v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 8 11.2V7.735c-.886-.089-1.55-.546-1.886-1.356-.325-.784-.424-2.069-.331-3.915z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14.28 1.051C12.12 2.115 11 3.611 11 5.506c0 1.82 1.037 3.051 3 3.631V11a.5.5 0 0 0 1 0V1.5a.5.5 0 0 0-.72-.449zM12 5.506c0-1.268.65-2.314 2-3.158v5.74c-1.364-.477-2-1.321-2-2.582z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M13 12.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-3 0zm1.5 5.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M4.532 2.475a.5.5 0 1 1 1 .05c-.084 1.672.003 2.81.237 3.374.183.442.544.634 1.202.597a.5.5 0 0 1 .058.998c-1.058.06-1.826-.349-2.184-1.211-.307-.74-.403-1.996-.313-3.808z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.467 2.475a.5.5 0 1 0-.998.05c.083 1.672-.004 2.81-.238 3.374-.183.442-.544.634-1.202.597a.5.5 0 0 0-.058.998c1.058.06 1.826-.349 2.184-1.211.307-.74.403-1.996.312-3.808z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.5 2.5a.5.5 0 0 1 1 0v9a.5.5 0 0 1-1 0v-9z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5.5 12.5v5a1.5 1.5 0 0 0 3 0v-5a1.5 1.5 0 0 0-3 0zM7 18a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5z",
    "clip-rule": "evenodd"
  })));
};

module.exports.KniveFork = function KniveFork(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.27 5.506c0 1.942 1.063 3.308 3 3.994V11a1 1 0 1 0 2 0V1.5a1 1 0 0 0-1.442-.897c-2.316 1.141-3.558 2.8-3.558 4.903zm2 0c0-.82.319-1.535 1-2.161v3.971c-.695-.411-1-.999-1-1.81z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M13.27 17.5v-5a2 2 0 1 1 4 0v5a2 2 0 0 1-4 0z"
  }), React.createElement("path", {
    d: "M3.283 2.45a1 1 0 1 1 1.998.1c-.08 1.603.002 2.682.2 3.158.095.23.253.315.712.288a1 1 0 1 1 .114 1.997c-1.258.073-2.229-.446-2.674-1.519-.343-.828-.444-2.142-.35-4.024z"
  }), React.createElement("path", {
    d: "M10.717 2.45a1 1 0 1 0-1.998.1c.08 1.603-.002 2.682-.2 3.158-.096.23-.253.315-.712.288a1 1 0 1 0-.115 1.997c1.258.073 2.23-.446 2.675-1.519.343-.828.444-2.142.35-4.024z"
  }), React.createElement("path", {
    d: "M6 2.5a1 1 0 0 1 2 0v9a1 1 0 1 1-2 0v-9z"
  }), React.createElement("path", {
    d: "M5 17.5v-5a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0z"
  })));
};

module.exports.LabelPrint = function LabelPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M4.485 2.487v-.003h.003a36.006 36.006 0 0 1 1.816-.115c1.459-.058 3.193-.05 4.48.142a.386.386 0 0 1 .21.117l7.753 7.754a.5.5 0 0 1 0 .707l-5.657 5.657a.5.5 0 0 1-.707 0L4.63 8.992a.386.386 0 0 1-.118-.21c-.191-1.286-.2-3.02-.142-4.48a36.65 36.65 0 0 1 .115-1.815z",
    opacity: ".8"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M2.285 9.7a.883.883 0 0 1-.259-.49c-.198-1.334-.205-3.105-.147-4.573.03-.73.074-1.375.117-1.841.015-.162.03-.3.043-.412.112-.014.25-.028.412-.043a36.495 36.495 0 0 1 1.841-.117c1.468-.058 3.24-.052 4.574.147a.883.883 0 0 1 .49.259l7.753 7.753a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414 0L2.285 9.701z"
  }), React.createElement("circle", {
    cx: "6.95",
    cy: "7.38",
    r: "1",
    stroke: "#000",
    transform: "rotate(-45 6.95 7.38)"
  })));
};

module.exports.Label = function Label(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 22 22"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M4.979 4.636v-.003h.003a36.006 36.006 0 0 1 1.815-.115c1.46-.058 3.193-.05 4.48.142a.386.386 0 0 1 .21.117l7.754 7.753a.5.5 0 0 1 0 .708l-5.657 5.656a.5.5 0 0 1-.707 0l-7.754-7.753a.386.386 0 0 1-.117-.21c-.192-1.287-.2-3.02-.142-4.48.028-.722.073-1.359.115-1.815z"
  }), React.createElement("circle", {
    cx: "9.435",
    cy: "9.173",
    r: "1",
    fill: "currentColor",
    transform: "rotate(-45 9.435 9.173)"
  })));
};

module.exports.LeavePrint = function LeavePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("rect", {
    width: "10",
    height: "15",
    x: "6",
    y: "4",
    fill: "currentColor",
    opacity: ".8",
    rx: "1"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.667 7.5 17.75 10l-2.083-2.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.667 12.5 17.75 10l-2.083 2.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M17 10H9.5"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M4 3h9"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M4 17h9"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M13 3v4"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M13 13v4"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M4 3v14"
  })));
};

module.exports.Leave = function Leave(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2"
  }, React.createElement("path", {
    strokeLinejoin: "round",
    d: "m15.667 8 2.083 2.5L15.667 8z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    strokeLinejoin: "round",
    d: "m15.667 13 2.083-2.5-2.083 2.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M16.5 10.5H10"
  }), React.createElement("path", {
    d: "M4 3.5h9"
  }), React.createElement("path", {
    d: "M4 17.5h9"
  }), React.createElement("path", {
    d: "M13 3.5v4"
  }), React.createElement("path", {
    d: "M13 13.5v4"
  }), React.createElement("path", {
    d: "M4 3.5v14"
  })));
};

module.exports.LetterPrint = function LetterPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("rect", {
    width: "15",
    height: "12",
    x: "4.5",
    y: "5.5",
    fill: "currentColor",
    opacity: ".8",
    rx: "1.5"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M17 4H3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 17 4zM3.5 15V5h13v10h-13z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m17.324 4.88-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 3 4h14a.5.5 0 0 1 .324.88zM15.642 5H4.345l5.612 4.841L15.642 5z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Letter = function Letter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M17 3.5H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1zm-13 11v-9h12v9H4z"
  }), React.createElement("path", {
    d: "m17.648 5.261-7.045 6a1 1 0 0 1-1.301-.004l-6.955-6C1.645 4.652 2.073 3.5 3 3.5h14c.93 0 1.356 1.158.648 1.761zM5.69 5.5l4.27 3.683L14.282 5.5H5.69z"
  })));
};

module.exports.ListPrint = function ListPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    opacity: ".8"
  }, React.createElement("circle", {
    cx: "6",
    cy: "7.25",
    r: "1.5",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "6",
    cy: "11.25",
    r: "1.5",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "6",
    cy: "15.25",
    r: "1.5",
    fill: "currentColor"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M9.5 7.25h7"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M9.5 11.25h7"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M9.5 15.25h7"
  })), React.createElement("circle", {
    cx: "5",
    cy: "6",
    r: "1.5",
    fill: "#000"
  }), React.createElement("circle", {
    cx: "5",
    cy: "10",
    r: "1.5",
    fill: "#000"
  }), React.createElement("circle", {
    cx: "5",
    cy: "14",
    r: "1.5",
    fill: "#000"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M8 6.5h8"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M8 10.5h8"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M8 14.5h8"
  })));
};

module.exports.List = function List(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("circle", {
    cx: "5",
    cy: "6",
    r: "1.5",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "5",
    cy: "10",
    r: "1.5",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "5",
    cy: "14",
    r: "1.5",
    fill: "currentColor"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M8.5 6h7"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M8.5 10h7"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M8.5 14h7"
  })));
};

module.exports.LockClosedPrint = function LockClosedPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 9.645V6.5a3.5 3.5 0 1 1 7 0v3.145c1.446.43 2.5 1.77 2.5 3.355v3a3.5 3.5 0 0 1-3.5 3.5H9A3.5 3.5 0 0 1 5.5 16v-3A3.502 3.502 0 0 1 8 9.645zM9.5 9.5v-3a2 2 0 1 1 4 0v3h-4z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M7.5 12.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M12 7.5H7A3.5 3.5 0 0 0 3.5 11v3A3.5 3.5 0 0 0 7 17.5h5a3.5 3.5 0 0 0 3.5-3.5v-3A3.5 3.5 0 0 0 12 7.5zM4.5 11A2.5 2.5 0 0 1 7 8.5h5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 14v-3z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M7 8a.5.5 0 0 1-1 0V4.5a3.5 3.5 0 1 1 7 0V8a.5.5 0 0 1-1 0V4.5a2.5 2.5 0 0 0-5 0V8z"
  })));
};

module.exports.LockClosed = function LockClosed(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M8 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm2.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
  }), React.createElement("path", {
    d: "M13 7H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4zm-8 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4z"
  }), React.createElement("path", {
    d: "M14 4a4 4 0 0 0-8 0v5h8V4zm-2 0v3H8V4a2 2 0 1 1 4 0z"
  })));
};

module.exports.LockOpenPrint = function LockOpenPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9.5 9.5H14a3.5 3.5 0 0 1 3.5 3.5v3a3.5 3.5 0 0 1-3.5 3.5H9A3.5 3.5 0 0 1 5.5 16v-3A3.502 3.502 0 0 1 8 9.645V6.75C8 4.693 9.552 3 11.5 3S15 4.693 15 6.75V7a.75.75 0 0 1-1.5 0v-.25c0-1.257-.91-2.25-2-2.25-1.09 0-2 .993-2 2.25V9.5z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M7.5 12.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M12 7.5H7A3.5 3.5 0 0 0 3.5 11v3A3.5 3.5 0 0 0 7 17.5h5a3.5 3.5 0 0 0 3.5-3.5v-3A3.5 3.5 0 0 0 12 7.5zM4.5 11A2.5 2.5 0 0 1 7 8.5h5a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 14v-3z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M7 8a.5.5 0 0 1-1 0V4.5a3.5 3.5 0 1 1 7 0v1a.5.5 0 0 1-1 0v-1a2.5 2.5 0 0 0-5 0V8z"
  })));
};

module.exports.LockOpen = function LockOpen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M13 7H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4zm-8 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M8 8a1 1 0 1 1-2 0V4a4 4 0 1 1 8 0v.5a1 1 0 1 1-2 0V4a2 2 0 1 0-4 0v4z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 13a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm2.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z",
    "clip-rule": "evenodd"
  })));
};

module.exports.LoopMinusPrint = function LoopMinusPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.828 5.828a6 6 0 0 0 6.865 9.642c.058.091.127.178.207.258l3.535 3.535a1.5 1.5 0 1 0 2.121-2.12l-3.535-3.536-.06-.057a6.002 6.002 0 0 0-9.133-7.722z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5.182 5.182a5.5 5.5 0 1 0 7.778 7.778 5.5 5.5 0 0 0-7.778-7.778zm7.071 7.071A4.5 4.5 0 1 1 5.89 5.889a4.5 4.5 0 0 1 6.364 6.364z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12 14.121a1 1 0 0 1 1.414-1.414l3.789 3.789a1 1 0 0 1-1.414 1.414L12 14.12z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.707 9.414a.5.5 0 1 1 0-1h4.485a.5.5 0 0 1 0 1H6.707z"
  })));
};

module.exports.LoopMinus = function LoopMinus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.828 4.828a6 6 0 1 0 8.486 8.486 6 6 0 0 0-8.486-8.486zM11.9 11.9a4 4 0 1 1-5.656-5.656A4 4 0 0 1 11.9 11.9z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M11.9 14.728a1.5 1.5 0 0 1 2.12-2.121l3.536 3.535a1.5 1.5 0 1 1-2.12 2.121l-3.537-3.535z"
  }), React.createElement("path", {
    d: "M6.707 9.914a1 1 0 1 1 0-2h4.485a1 1 0 1 1 0 2H6.707z"
  })));
};

module.exports.LoopPlusPrint = function LoopPlusPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.828 5.828a6 6 0 0 0 6.865 9.642c.058.091.127.178.207.258l3.535 3.535a1.5 1.5 0 1 0 2.121-2.12l-3.535-3.536-.06-.057a6.002 6.002 0 0 0-9.133-7.722z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5.182 5.182a5.5 5.5 0 1 0 7.778 7.778 5.5 5.5 0 0 0-7.778-7.778zm7.071 7.071A4.5 4.5 0 1 1 5.89 5.889a4.5 4.5 0 0 1 6.364 6.364z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12 14.121a1 1 0 0 1 1.414-1.414l3.789 3.789a1 1 0 0 1-1.414 1.414L12 14.12z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M7.207 9.664a.5.5 0 1 1 0-1h4a.5.5 0 0 1 0 1h-4z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8.707 7.164a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4z"
  })));
};

module.exports.LoopPlus = function LoopPlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.828 4.828a6 6 0 1 0 8.486 8.486 6 6 0 0 0-8.486-8.486zM11.9 11.9a4 4 0 1 1-5.656-5.656A4 4 0 0 1 11.9 11.9z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M11.9 14.728a1.5 1.5 0 0 1 2.12-2.121l3.536 3.535a1.5 1.5 0 1 1-2.12 2.121l-3.537-3.535z"
  }), React.createElement("path", {
    d: "M7.207 10.164a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-4z"
  }), React.createElement("path", {
    d: "M8.207 7.164a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0v-4z"
  })));
};

module.exports.LoopPrint = function LoopPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.5 9.5a5.5 5.5 0 0 0 8.22 4.782c.06.099.133.193.22.279l3 3a1.5 1.5 0 0 0 2.12-2.122l-3-3a1.505 1.505 0 0 0-.278-.22A5.5 5.5 0 1 0 5.5 9.5z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M4.828 4.828A5 5 0 1 0 11.9 11.9a5 5 0 0 0-7.07-7.07zm6.364 6.364a4 4 0 1 1-5.656-5.657 4 4 0 0 1 5.656 5.657z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.192 12.627a1 1 0 0 1 1.415-1.414l2.828 2.829a1 1 0 0 1-1.414 1.414l-2.829-2.829z"
  })));
};

module.exports.Loop = function Loop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.475 4.475a5.5 5.5 0 1 0 7.778 7.778 5.5 5.5 0 0 0-7.778-7.778zm6.364 6.364a3.5 3.5 0 1 1-4.95-4.95 3.5 3.5 0 0 1 4.95 4.95z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M11.192 13.314a1.5 1.5 0 1 1 2.122-2.122l3.535 3.536a1.5 1.5 0 1 1-2.121 2.121l-3.536-3.535z"
  })));
};

module.exports.MagnetPrint = function MagnetPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M8.132 4.646a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.242 4.243a1.214 1.214 0 1 0 1.717 1.717l4.243-4.243a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.243 4.242A6.5 6.5 0 0 1 3.89 8.89l4.243-4.243z"
  }), React.createElement("path", {
    d: "M14.401 8.428a1 1 0 0 1-.557-1.3l1.35-3.375 1.559.52.818-1.706a1 1 0 0 1 1.803.866l-1.581 3.294-1.442-.48-.65 1.624a1 1 0 0 1-1.3.557z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M7.132 3.646a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.242 4.243a1.214 1.214 0 1 0 1.717 1.717L12.587 9.1a.5.5 0 0 1 .707 0l3.03 3.03a.5.5 0 0 1 0 .708l-4.243 4.242A6.5 6.5 0 0 1 2.89 7.89l4.243-4.243zm.353 1.061-3.889 3.89a5.5 5.5 0 1 0 7.778 7.777l3.89-3.889-2.324-2.323-3.889 3.889A2.214 2.214 0 1 1 5.92 10.92l3.889-3.89-2.324-2.323z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m7.485 10.06-3.03-3.03.707-.707 3.03 3.03-.707.708z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m12.94 15.516-3.03-3.03.707-.708 3.03 3.03-.707.708z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.587 6.964a.5.5 0 0 1-.279-.65l1.175-2.937 1.53.51 1.01-2.103a.5.5 0 0 1 .9.432l-1.39 2.898-1.471-.49-.825 2.062a.5.5 0 0 1-.65.278z"
  })));
};

module.exports.Magnet = function Magnet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M7.293 1.393a1 1 0 0 1 1.414 0l3.536 3.536a1 1 0 0 1 0 1.414l-4.95 4.95a1 1 0 1 0 1.414 1.414l4.95-4.95a1 1 0 0 1 1.414 0l3.536 3.536a1 1 0 0 1 0 1.414l-4.95 4.95A8 8 0 1 1 2.343 6.343l4.95-4.95zM8 3.515 3.757 7.757a6 6 0 1 0 8.486 8.486L16.485 12l-2.121-2.121-4.243 4.242A3 3 0 1 1 5.88 9.88l4.242-4.243L8 3.515z"
  }), React.createElement("path", {
    d: "m7.293 8.464-2.121-2.12 1.414-1.415L8.707 7.05 7.293 8.464z"
  }), React.createElement("path", {
    d: "m13.657 14.828-2.121-2.12 1.414-1.415 2.121 2.121-1.414 1.414z"
  }), React.createElement("path", {
    d: "M14.629 6.428a1 1 0 0 1-.557-1.3l1.35-3.375 1.558.52.819-1.706a1 1 0 0 1 1.803.866L18.02 4.727l-1.442-.48-.65 1.624a1 1 0 0 1-1.3.557z"
  })));
};

module.exports.MapPrint = function MapPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.69 9.534a2.998 2.998 0 0 1 1.859 1.925l1.301 4.05c.512 1.594-.33 3.312-1.879 3.838a2.88 2.88 0 0 1-.927.153h-8.09C6.324 19.5 5 18.14 5 16.462c0-.323.05-.645.15-.952l1.3-4.05a2.998 2.998 0 0 1 1.86-1.926C8.116 8.901 8 8.297 8 7.786 8 5.419 9.79 3.5 12 3.5s4 1.919 4 4.286c0 .511-.115 1.115-.31 1.748z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5.5 6.286C5.5 8.959 8.153 13.5 10 13.5c1.848 0 4.5-4.541 4.5-7.214C14.5 3.65 12.493 1.5 10 1.5S5.5 3.65 5.5 6.286zm8 0c0 2.193-2.348 6.214-3.5 6.214-1.151 0-3.5-4.02-3.5-6.214C6.5 4.187 8.075 2.5 10 2.5s3.5 1.687 3.5 3.786z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.435 9.14a.5.5 0 0 1 .369-.929 3 3 0 0 1 1.74 1.84l1.334 4a3 3 0 0 1-2.847 3.95H5.97a3 3 0 0 1-2.846-3.95l1.333-4A3 3 0 0 1 6.24 8.194a.5.5 0 1 1 .355.936 2 2 0 0 0-1.19 1.238l-1.333 4A2 2 0 0 0 5.97 17h8.062a2 2 0 0 0 1.898-2.632l-1.334-4a2 2 0 0 0-1.16-1.227z"
  })));
};

module.exports.Map = function Map(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0-3a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M5 7.286C5 10.199 7.805 15 10 15s5-4.801 5-7.714C15 4.38 12.777 2 10 2S5 4.381 5 7.286zm8 0C13 9.24 10.803 13 10 13c-.803 0-3-3.76-3-5.714C7 5.456 8.36 4 10 4s3 1.456 3 3.286z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M13.73 10a1 1 0 1 1 0-2 3 3 0 0 1 2.89 2.197l1.39 5A3 3 0 0 1 15.118 19H4.88a3 3 0 0 1-2.89-3.803l1.389-5A3 3 0 0 1 6.27 8a1 1 0 0 1 0 2 1 1 0 0 0-.963.732l-1.39 5A1 1 0 0 0 4.882 17H15.12a1 1 0 0 0 .963-1.268l-1.389-5A1 1 0 0 0 13.73 10z"
  })));
};

module.exports.MegaphonePrint = function MegaphonePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M6.137 11.783a1 1 0 0 1-.737-.965V6.382a1 1 0 0 1 .737-.965l7.6-2.073A1 1 0 0 1 15 4.31v8.582a1 1 0 0 1-1.263.964l-7.6-2.072z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "m7.4 10.054 5.6 1.527V5.619L7.4 7.146v2.908zm-2 .764a1 1 0 0 0 .737.965l7.6 2.072A1 1 0 0 0 15 12.891V4.309a1 1 0 0 0-1.263-.965l-7.6 2.073a1 1 0 0 0-.737.965v4.436z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M7.016 10.8a1 1 0 0 1-1 1h-2.76a.555.555 0 0 1-.405-.176c-1.593-1.7-1.6-4.36.002-6.052a.55.55 0 0 1 .4-.172h2.763a1 1 0 0 1 1 1v4.4z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.016 9.8V7.4H3.969a2.429 2.429 0 0 0 .004 2.4h1.043zm1 2a1 1 0 0 0 1-1V6.4a1 1 0 0 0-1-1H3.253a.55.55 0 0 0-.4.172c-1.602 1.691-1.595 4.353-.002 6.052a.555.555 0 0 0 .405.176h2.76z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M3.902 11.506A2 2 0 0 1 5.84 10h.584a2 2 0 0 1 1.938 2.495l-.767 3A2 2 0 0 1 5.657 17h-1.87a1 1 0 0 1-.969-1.247l1.084-4.247z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.424 12H5.84l-.766 3h.583l.767-3zm-.584-2a2 2 0 0 0-1.938 1.506l-1.084 4.247A1 1 0 0 0 3.788 17h1.87a2 2 0 0 0 1.937-1.505l.767-3A2 2 0 0 0 6.424 10H5.84z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M19.032 4.445a1 1 0 0 1-.277 1.387l-1.5 1a1 1 0 0 1-1.11-1.664l1.5-1a1 1 0 0 1 1.387.277z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.7 8.6a1 1 0 0 1 1-1h1.5a1 1 0 0 1 0 2h-1.5a1 1 0 0 1-1-1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.934 10.509a1 1 0 0 1 1.409-.123l1.38 1.16a1 1 0 0 1-1.286 1.531l-1.38-1.16a1 1 0 0 1-.123-1.408z",
    "clip-rule": "evenodd"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M6.4 4.882v4.436l7.6 2.073V2.809L6.4 4.882zm-1 4.436a1 1 0 0 0 .737.965l7.6 2.072A1 1 0 0 0 15 11.391V2.809a1 1 0 0 0-1.263-.965l-7.6 2.073a1 1 0 0 0-.737.965v4.436z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M3.456 9.3H5.5V4.9H3.453a3.422 3.422 0 0 0 .003 4.4zm2.044 1a1 1 0 0 0 1-1V4.9a1 1 0 0 0-1-1H3.253a.55.55 0 0 0-.4.172c-1.602 1.691-1.595 4.353-.002 6.052a.555.555 0 0 0 .405.176H5.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m7.269 10.87-2.51-.28-.978 3.91h2.636l.852-3.63zm-2.4-1.273a1 1 0 0 0-1.081.75l-.977 3.91a1 1 0 0 0 .97 1.243h2.636a1 1 0 0 0 .974-.772l.852-3.63a1 1 0 0 0-.864-1.223l-2.51-.278z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M18.616 3.223a.5.5 0 0 1-.139.693l-1.5 1a.5.5 0 1 1-.554-.832l1.5-1a.5.5 0 0 1 .693.139z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M16.2 7.1a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M16.317 9.33a.5.5 0 0 1 .705-.06l1.38 1.159a.5.5 0 0 1-.643.765l-1.38-1.16a.5.5 0 0 1-.062-.704z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Megaphone = function Megaphone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M6.137 11.783a1 1 0 0 1-.737-.965V6.382a1 1 0 0 1 .737-.965l7.6-2.073A1 1 0 0 1 15 4.31v8.582a1 1 0 0 1-1.263.964l-7.6-2.072z"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m7.4 10.054 5.6 1.527V5.62L7.4 7.146v2.908zm-2 .764a1 1 0 0 0 .737.965l7.6 2.072A1 1 0 0 0 15 12.891V4.309a1 1 0 0 0-1.263-.965l-7.6 2.073a1 1 0 0 0-.737.965v4.436z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.016 9.8V7.4H3.969a2.429 2.429 0 0 0 .004 2.4h1.043zm1 2a1 1 0 0 0 1-1V6.4a1 1 0 0 0-1-1H3.253a.55.55 0 0 0-.4.172c-1.602 1.691-1.595 4.353-.002 6.052a.555.555 0 0 0 .405.176h2.76z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.424 12H5.84l-.766 3h.583l.767-3zm-.584-2a2 2 0 0 0-1.938 1.506l-1.084 4.247A1 1 0 0 0 3.788 17h1.87a2 2 0 0 0 1.937-1.505l.767-3A2 2 0 0 0 6.424 10H5.84z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.032 4.445a1 1 0 0 1-.277 1.387l-1.5 1a1 1 0 0 1-1.11-1.664l1.5-1a1 1 0 0 1 1.387.277z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.7 8.6a1 1 0 0 1 1-1h1.5a1 1 0 0 1 0 2h-1.5a1 1 0 0 1-1-1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.934 10.509a1 1 0 0 1 1.409-.123l1.38 1.16a1 1 0 0 1-1.286 1.531l-1.38-1.16a1 1 0 0 1-.123-1.408z",
    "clip-rule": "evenodd"
  })));
};

module.exports.MicrophonePrint = function MicrophonePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.5 2.5A2.5 2.5 0 0 0 9 5v4a2.5 2.5 0 0 0 5 0V5a2.5 2.5 0 0 0-2.5-2.5zM7 18c0 .792 1.666 1 4.5 1s4.5-.208 4.5-1c0-.69-1.264-.937-3.464-.989v-1.588C15.333 15 17.5 12.9 17.5 10.3V8.5a1 1 0 1 0-2 0v1.8c0 1.725-1.756 3.2-4 3.2-2.244 0-4-1.475-4-3.2V8.5a1 1 0 0 0-2 0v1.8c0 2.623 2.204 4.737 5.036 5.133v1.576C8.292 17.058 7 17.303 7 18z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M7.75 4.25a2.25 2.25 0 0 1 4.5 0v3.5a2.25 2.25 0 0 1-4.5 0v-3.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10 17c-2.48 0-4-.217-4-1s1.52-1 4-1 4 .217 4 1-1.52 1-4 1z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 12.5h1V16h-1v-3.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14 7.5a.5.5 0 0 1 1 0v1.65c0 2.421-2.254 4.35-5 4.35s-5-1.929-5-4.35V7.5a.5.5 0 0 1 1 0v1.65c0 1.831 1.775 3.35 4 3.35s4-1.519 4-3.35V7.5z"
  })));
};

module.exports.Microphone = function Microphone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.5 4.5a2.5 2.5 0 0 1 5 0v4a2.5 2.5 0 0 1-5 0v-4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M10 18.5c-2.834 0-4.5-.208-4.5-1s1.666-1 4.5-1 4.5.208 4.5 1-1.666 1-4.5 1z"
  }), React.createElement("path", {
    d: "M9.036 13.5h2V18h-2v-4.5z"
  }), React.createElement("path", {
    d: "M14 8a1 1 0 1 1 2 0v1.8c0 2.914-2.721 5.2-6 5.2s-6-2.286-6-5.2V8a1 1 0 0 1 2 0v1.8c0 1.725 1.756 3.2 4 3.2 2.244 0 4-1.475 4-3.2V8z"
  })));
};

module.exports.MinusPrint = function MinusPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M6.5 12.5a1.5 1.5 0 0 1 0-3h10a1.5 1.5 0 0 1 0 3h-10z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5 10.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1H5z"
  })));
};

module.exports.Minus = function Minus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H5z"
  }));
};

module.exports.MonitorPrint = function MonitorPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M8.531 18.75a1.002 1.002 0 0 1-.031-.25V16h-5A1.5 1.5 0 0 1 2 14.5v-10A1.5 1.5 0 0 1 3.5 3h15A1.5 1.5 0 0 1 20 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-5v2.5a1 1 0 0 1-.031.25H15.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1h2.031z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M17.5 1.5h-15a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2zm-16 2a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-10z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M11.5 14.5h-3a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1zm-3 3.5v-2.5h3V18h-3z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.5 19a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1h-9z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M2.5 3h15a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5z"
  })));
};

module.exports.Monitor = function Monitor(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M17.5 1h-15A2.5 2.5 0 0 0 0 3.5v10A2.5 2.5 0 0 0 2.5 16h15a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 17.5 1zM2 3.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-10z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.5 14.5h-3a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1zm-2.5 3V16h2v1.5H9z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M5.5 19.5a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2h-9z"
  }), React.createElement("path", {
    d: "M3.5 4h13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5z"
  })));
};

module.exports.Monitor2Print = function Monitor2Print(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2 4.5A1.5 1.5 0 0 1 3.5 3h15A1.5 1.5 0 0 1 20 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-5v2.5a1 1 0 0 1-.031.25H15.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1h2.031a1.002 1.002 0 0 1-.031-.25V16h-5A1.5 1.5 0 0 1 2 14.5v-10z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M17.5 1.5h-15a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-10a2 2 0 0 0-2-2zm-16 2a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-10z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10 14a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M11.5 14.5h-3a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1zm-3 3.5v-2.5h3V18h-3z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.5 19a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1h-9z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M19 12H1v-1h18v1z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Monitor2 = function Monitor2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M17.5 1h-15A2.5 2.5 0 0 0 0 3.5v10A2.5 2.5 0 0 0 2.5 16h15a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 17.5 1zM2 3.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-10z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M10 13.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.5 14.5h-3a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1zm-2.5 3V16h2v1.5H9z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M5.5 19.5a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2h-9z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M19 12H1v-1h18v1z",
    "clip-rule": "evenodd"
  })));
};

module.exports.MoonFilled = function MoonFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M11.364 2.932a4.506 4.506 0 0 0-2.6 3.196 4.505 4.505 0 0 0 3.464 5.347 4.504 4.504 0 0 0 4.885-2.245c.489-.894 1.845-.57 1.877.449a9.045 9.045 0 0 1-.195 2.166c-1.035 4.87-5.815 7.98-10.678 6.947-4.862-1.034-7.964-5.82-6.929-10.69.974-4.58 5.283-7.644 9.895-7.078 1.008.124 1.21 1.498.28 1.908z"
  }));
};

module.exports.MoonPrint = function MoonPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M12.612 3.474a5.006 5.006 0 0 0-2.887 3.55 5.005 5.005 0 0 0 3.85 5.94A5.004 5.004 0 0 0 19 10.47c.245-.447.923-.285.939.224a8.544 8.544 0 0 1-.184 2.047c-.978 4.6-5.493 7.538-10.085 6.562-4.592-.976-7.521-5.497-6.544-10.097.92-4.326 4.99-7.22 9.345-6.686.504.062.605.75.14.954z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M8.275 6.024a5.006 5.006 0 0 1 2.887-3.55c.465-.205.364-.892-.14-.954C6.667.986 2.597 3.88 1.677 8.206c-.977 4.6 1.952 9.12 6.544 10.097 4.592.976 9.107-1.962 10.085-6.562a8.544 8.544 0 0 0 .184-2.047c-.016-.509-.694-.671-.939-.224a5.004 5.004 0 0 1-5.427 2.494 5.005 5.005 0 0 1-3.849-5.94zm-5.62 2.39a7.52 7.52 0 0 1 6.618-5.923c-.989.844-1.694 2-1.976 3.325a6.005 6.005 0 0 0 4.62 7.126 6 6 0 0 0 5.446-1.584 7.627 7.627 0 0 1-.035.175c-.863 4.06-4.848 6.653-8.899 5.792-4.051-.862-6.636-4.85-5.773-8.91z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Moon = function Moon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.764 6.128a4.506 4.506 0 0 1 2.6-3.196c.93-.41.727-1.784-.281-1.908C6.47.458 2.162 3.522 1.188 8.102c-1.035 4.87 2.067 9.656 6.93 10.69 4.862 1.033 9.642-2.078 10.677-6.947a9.045 9.045 0 0 0 .195-2.166c-.032-1.019-1.388-1.343-1.877-.449a4.504 4.504 0 0 1-4.885 2.245 4.505 4.505 0 0 1-3.464-5.347zm-.23 10.707c-3.782-.803-6.195-4.527-5.39-8.317a7.022 7.022 0 0 1 4.727-5.23 6.512 6.512 0 0 0-1.063 2.424c-.747 3.516 1.493 6.973 5.005 7.72a6.487 6.487 0 0 0 4.636-.752c-1.273 3.053-4.57 4.867-7.916 4.155z",
    "clip-rule": "evenodd"
  }));
};

module.exports.MotorcyclePrint = function MotorcyclePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13.322 7.384A4.501 4.501 0 0 1 16 11.5V14a2 2 0 0 1-2 2h-.585c.055.156.085.325.085.5v2A1.5 1.5 0 0 1 12 20h-1a1.5 1.5 0 0 1-1.5-1.5v-2c0-.175.03-.344.085-.5H9a2 2 0 0 1-2-2v-2.5a4.5 4.5 0 0 1 2.678-4.116 3 3 0 1 1 3.643 0z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.75 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.25 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10.5 14h-1A1.5 1.5 0 0 0 8 15.5v2A1.5 1.5 0 0 0 9.5 19h1a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5zM9 15.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-2z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M15.5 3.75a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5h-2z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M2.5 3.75a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5h-2z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m4.106 3.364.302-.97 3.698.742-.302.97-3.698-.742z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m11.894 3.136.302.97 3.698-.742-.302-.97-3.698.742z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14.5 10.5a4.5 4.5 0 1 0-9 0V13a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2.5zm-8 0a3.5 3.5 0 1 1 7 0V13a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-2.5z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Motorcycle = function Motorcycle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M12.75 12.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  }), React.createElement("path", {
    d: "M9.25 12.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M10 14a2 2 0 0 1 2 2v1.5a2 2 0 1 1-4 0V16a2 2 0 0 1 2-2z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15 11a5 5 0 0 0-10 0v2.5A2.5 2.5 0 0 0 7.5 16h5a2.5 2.5 0 0 0 2.5-2.5V11zm-8 0a3 3 0 0 1 6 0v2.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V11z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M15.5 4.5a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2h-2z"
  }), React.createElement("path", {
    d: "M2.5 4.5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2h-2z"
  }), React.createElement("path", {
    d: "m3.41 4.046.476-1.455 4.524.863-.477 1.456-4.523-.864z"
  }), React.createElement("path", {
    d: "m11.59 3.454.477 1.456 4.523-.864-.476-1.455-4.524.863z"
  })));
};

module.exports.MoveXPrint = function MoveXPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 21 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M14.706 6.348a1.5 1.5 0 0 1 2.113.192l3.333 4a1.5 1.5 0 1 1-2.304 1.92l-3.334-4a1.5 1.5 0 0 1 .192-2.112z"
  }), React.createElement("path", {
    d: "M14.706 16.652a1.5 1.5 0 0 1-.192-2.112l3.334-4a1.5 1.5 0 1 1 2.304 1.92l-3.333 4a1.5 1.5 0 0 1-2.113.192z"
  }), React.createElement("path", {
    d: "M18.5 11.5A1.5 1.5 0 0 1 17 13H9a1.5 1.5 0 0 1 0-3h8a1.5 1.5 0 0 1 1.5 1.5z"
  }), React.createElement("path", {
    d: "M9.294 16.652a1.5 1.5 0 0 1-2.113-.192l-3.333-4a1.5 1.5 0 1 1 2.304-1.92l3.334 4a1.5 1.5 0 0 1-.192 2.112z"
  }), React.createElement("path", {
    d: "M9.294 6.348a1.5 1.5 0 0 1 .192 2.112l-3.334 4a1.5 1.5 0 0 1-2.304-1.92l3.333-4a1.5 1.5 0 0 1 2.113-.192z"
  }), React.createElement("path", {
    d: "M5.5 11.5A1.5 1.5 0 0 1 7 10h8a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 1-1.5-1.5z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M13.347 5.616a.5.5 0 0 1 .704.064l3.333 4a.5.5 0 0 1-.768.64l-3.333-4a.5.5 0 0 1 .064-.704z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.347 14.384a.5.5 0 0 1-.064-.704l3.333-4a.5.5 0 1 1 .768.64l-3.333 4a.5.5 0 0 1-.704.064z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M3.5 9.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.653 14.384a.5.5 0 0 1-.704-.064l-3.333-4a.5.5 0 0 1 .768-.64l3.333 4a.5.5 0 0 1-.064.704z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.653 5.616a.5.5 0 0 1 .064.704l-3.333 4a.5.5 0 0 1-.768-.64l3.333-4a.5.5 0 0 1 .704-.064z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M4.5 10a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
  })));
};

module.exports.MoveX = function MoveX(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M13.027 5.232a1 1 0 0 1 1.408.128l3.333 4a1 1 0 1 1-1.536 1.28l-3.334-4a1 1 0 0 1 .129-1.408z"
  }), React.createElement("path", {
    d: "M13.027 14.768a1 1 0 0 1-.129-1.408l3.334-4a1 1 0 1 1 1.536 1.28l-3.333 4a1 1 0 0 1-1.409.128z"
  }), React.createElement("path", {
    d: "M16 10a1 1 0 0 1-1 1H7a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1z"
  }), React.createElement("path", {
    d: "M6.974 14.768a1 1 0 0 1-1.409-.128l-3.333-4a1 1 0 1 1 1.536-1.28l3.334 4a1 1 0 0 1-.128 1.408z"
  }), React.createElement("path", {
    d: "M6.974 5.232a1 1 0 0 1 .128 1.408l-3.334 4a1 1 0 1 1-1.536-1.28l3.333-4a1 1 0 0 1 1.409-.128z"
  }), React.createElement("path", {
    d: "M4 10a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1z"
  })));
};

module.exports.MoveYPrint = function MoveYPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M6.348 8.294A1.5 1.5 0 0 1 6.54 6.18l4-3.333a1.5 1.5 0 0 1 1.92 2.304l-4 3.334a1.5 1.5 0 0 1-2.112-.192z"
  }), React.createElement("path", {
    d: "M16.652 8.294a1.5 1.5 0 0 1-2.112.192l-4-3.334a1.5 1.5 0 0 1 1.92-2.304l4 3.333a1.5 1.5 0 0 1 .192 2.113z"
  }), React.createElement("path", {
    d: "M11.5 4.5A1.5 1.5 0 0 1 13 6v8a1.5 1.5 0 0 1-3 0V6a1.5 1.5 0 0 1 1.5-1.5z"
  }), React.createElement("path", {
    d: "M16.652 13.707a1.5 1.5 0 0 1-.192 2.112l-4 3.333a1.5 1.5 0 0 1-1.92-2.304l4-3.333a1.5 1.5 0 0 1 2.112.191z"
  }), React.createElement("path", {
    d: "M6.348 13.707a1.5 1.5 0 0 1 2.112-.193l4 3.334a1.5 1.5 0 1 1-1.92 2.305l-4-3.334a1.5 1.5 0 0 1-.192-2.113z"
  }), React.createElement("path", {
    d: "M11.5 17.5A1.5 1.5 0 0 1 10 16V8a1.5 1.5 0 0 1 3 0v8a1.5 1.5 0 0 1-1.5 1.5z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M5.616 6.653a.5.5 0 0 1 .064-.704l4-3.333a.5.5 0 1 1 .64.768l-4 3.333a.5.5 0 0 1-.704-.064z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14.384 6.653a.5.5 0 0 1-.704.064l-4-3.333a.5.5 0 1 1 .64-.768l4 3.333a.5.5 0 0 1 .064.704z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10 4.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14.384 13.347a.5.5 0 0 1-.064.704l-4 3.333a.5.5 0 0 1-.64-.768l4-3.333a.5.5 0 0 1 .704.064z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.616 13.347a.5.5 0 0 1 .704-.064l4 3.333a.5.5 0 0 1-.64.768l-4-3.333a.5.5 0 0 1-.064-.704z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10 17a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
  })));
};

module.exports.MoveY = function MoveY(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M5.232 6.974a1 1 0 0 1 .128-1.409l4-3.333a1 1 0 1 1 1.28 1.536l-4 3.334a1 1 0 0 1-1.408-.128z"
  }), React.createElement("path", {
    d: "M14.768 6.974a1 1 0 0 1-1.408.128l-4-3.334a1 1 0 1 1 1.28-1.536l4 3.333a1 1 0 0 1 .128 1.409z"
  }), React.createElement("path", {
    d: "M10 4a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1z"
  }), React.createElement("path", {
    d: "M14.768 13.027a1 1 0 0 1-.128 1.408l-4 3.333a1 1 0 0 1-1.28-1.536l4-3.334a1 1 0 0 1 1.408.129z"
  }), React.createElement("path", {
    d: "M5.232 13.027a1 1 0 0 1 1.408-.129l4 3.334a1 1 0 1 1-1.28 1.536l-4-3.333a1 1 0 0 1-.128-1.409z"
  }), React.createElement("path", {
    d: "M10 16a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1z"
  })));
};

module.exports.MusicNoteDoublePrint = function MusicNoteDoublePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.25 3.81a1 1 0 0 1 .906-.996l9-.846a1 1 0 0 1 1.094.996V16c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5 1.343-2.5 3-2.5c.35 0 .687.05 1 .142V6.25l-7 .695V17c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5 1.343-2.5 3-2.5c.35 0 .687.05 1 .142V3.81z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m15.139 1.376-7 .52A1.5 1.5 0 0 0 6.75 3.392v.737a2.324 2.324 0 0 0 .005.117 1.5 1.5 0 0 0 1.612 1.378l7-.55A1.5 1.5 0 0 0 16.75 3.58v-.707c0-.056 0-.056-.004-.112a1.5 1.5 0 0 0-1.607-1.384zM7.75 4.129v-.737a.5.5 0 0 1 .463-.498l7-.521a.5.5 0 0 1 .537.499v.707a.5.5 0 0 1-.46.499l-7 .55a.5.5 0 0 1-.538-.46l-.002-.04z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M1.75 16c0 1.408 1.365 2.5 3 2.5s3-1.092 3-2.5-1.365-2.5-3-2.5-3 1.092-3 2.5zm5 0c0 .8-.874 1.5-2 1.5s-2-.7-2-1.5.874-1.5 2-1.5 2 .7 2 1.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M11.67 16.805c.556.445 1.296.695 2.08.695 1.635 0 3-1.092 3-2.5s-1.365-2.5-3-2.5-3 1.092-3 2.5c0 .697.34 1.341.92 1.805zM15.75 15c0 .8-.874 1.5-2 1.5-.56 0-1.08-.176-1.455-.476-.353-.282-.545-.646-.545-1.024 0-.8.874-1.5 2-1.5s2 .7 2 1.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.75 3.5a.5.5 0 0 1 1 0V16a.5.5 0 0 1-1 0V3.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M15.75 3.5a.5.5 0 0 1 1 0V15a.5.5 0 0 1-1 0V3.5z"
  })));
};

module.exports.MusicNoteDouble = function MusicNoteDouble(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 3.81a1 1 0 0 1 .906-.996l9-.846a1 1 0 0 1 1.094.996v2.181a1 1 0 0 1-.901.995l-9 .893a1 1 0 0 1-1.099-.995V3.81z",
    "clip-rule": "evenodd"
  }), React.createElement("ellipse", {
    cx: "14.75",
    cy: "15",
    rx: "3",
    ry: "2.5"
  }), React.createElement("ellipse", {
    cx: "5.75",
    cy: "16",
    rx: "3",
    ry: "2.5"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.75 5h2v10h-2V5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 6h2v10h-2V6z",
    "clip-rule": "evenodd"
  })));
};

module.exports.MusicNoteSinglePrint = function MusicNoteSinglePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.531 2.336C15.854 5.274 18 7.401 18 8.943c0 1.492-.82 2.7-2.396 3.583-.436.245-.922-.232-.685-.672.407-.759.273-1.607-.461-2.617a5.936 5.936 0 0 0-1.708-1.57v7.972l-.001.05.001.075c0 1.482-1.48 2.625-3.25 2.625s-3.25-1.143-3.25-2.625 1.48-2.625 3.25-2.625c.44 0 .864.07 1.25.2V2.75a.5.5 0 0 1 .781-.414z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M16.75 7.804c0-1.542-2.146-3.669-6.469-6.606a.5.5 0 0 0-.781.413v3.684a.5.5 0 0 0 .343.475c1.474.487 2.591 1.263 3.365 2.328.734 1.01.868 1.858.46 2.617-.236.44.25.917.686.672 1.575-.884 2.396-2.09 2.396-3.583zM10.5 4.941V2.564c3.492 2.45 5.25 4.259 5.25 5.24 0 .746-.278 1.396-.854 1.96-.02-.724-.317-1.48-.88-2.254-.838-1.155-2.015-2.012-3.516-2.57z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 4.5a.5.5 0 0 1 1 0V15a.5.5 0 0 1-1 0V4.5z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M4.5 15c0 1.408 1.365 2.5 3 2.5s3-1.092 3-2.5-1.365-2.5-3-2.5-3 1.092-3 2.5zm5 0c0 .8-.874 1.5-2 1.5s-2-.7-2-1.5.874-1.5 2-1.5 2 .7 2 1.5z",
    "clip-rule": "evenodd"
  })));
};

module.exports.MusicNoteSingle = function MusicNoteSingle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M9.781 1.698c4.323 2.937 6.469 5.064 6.469 6.606 0 1.492-.82 2.7-2.396 3.583-.436.245-.922-.232-.685-.672.407-.758.273-1.607-.461-2.617-.774-1.065-1.89-1.84-3.365-2.328A.5.5 0 0 1 9 5.795V2.111a.5.5 0 0 1 .781-.413z"
  }), React.createElement("path", {
    d: "M7.75 17.75c-1.77 0-3.25-1.143-3.25-2.625S5.98 12.5 7.75 12.5 11 13.643 11 15.125 9.52 17.75 7.75 17.75z"
  }), React.createElement("path", {
    d: "M10 4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1z"
  })));
};

module.exports.OpenPrint = function OpenPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("rect", {
    width: "11",
    height: "11",
    x: "7",
    y: "6",
    fill: "currentColor",
    opacity: ".8",
    rx: "1"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14.5 14.5v-3.25a.5.5 0 0 1 1 0V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h3.75a.5.5 0 0 1 0 1H5.5v9h9z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10.354 10.354a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708.708l-5 5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M15.5 8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0v3.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.5 5.5a.5.5 0 0 1 0-1H15a.5.5 0 0 1 0 1h-3.5z"
  })));
};

module.exports.Open = function Open(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M10.707 10.707a1 1 0 0 1-1.414-1.414l6-6a1 1 0 1 1 1.414 1.414l-6 6z"
  }), React.createElement("path", {
    d: "M15 15v-3.5a1 1 0 1 1 2 0V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4.5a1 1 0 0 1 0 2H5v10h10z"
  }), React.createElement("path", {
    d: "M17 8a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0v4z"
  }), React.createElement("path", {
    d: "M12 5a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-4z"
  })));
};

module.exports.PaintPalletPrint = function PaintPalletPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M10.59 5.939c3.8 1.018 6.105 4.772 5.135 8.395-1.094 4.08-6.298 7.344-8.882 4.56-.823-.886-1.035-1.86-.89-3.16.025-.225.046-.372.113-.794.162-1.032.16-1.44-.054-1.788-.207-.336-.578-.423-1.678-.436l-.108-.002c-1.548-.022-2.3-.28-2.682-1.363-1.27-3.589 4.779-6.556 9.046-5.412z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.843 4.43c-.512-.02-.982-.338-1.306-.946-.557-1.048-.679-2.567.111-2.987.79-.42 1.98.53 2.538 1.579.3.565.322 1.096.107 1.518a.995.995 0 0 1 .448.454l4.093 8.4a.652.652 0 0 1-1.149.611l-4.708-8.07a.994.994 0 0 1-.134-.559z",
    "clip-rule": "evenodd"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14.725 13.334c.97-3.623-1.336-7.377-5.135-8.395C5.323 3.795-.725 6.762.544 10.35c.383 1.084 1.134 1.341 2.682 1.363l.108.002c1.1.013 1.471.1 1.678.436.214.348.216.756.054 1.788-.067.422-.088.569-.113.794-.145 1.3.067 2.274.89 3.16 2.584 2.784 7.788-.48 8.882-4.56zM1.486 10.017c-.908-2.57 4.217-5.084 7.845-4.112 3.277.878 5.252 4.093 4.428 7.17-.924 3.446-5.287 6.181-7.183 4.14-.594-.64-.745-1.333-.63-2.37.024-.205.044-.344.108-.75.2-1.275.197-1.836-.19-2.467-.465-.756-1.059-.894-2.517-.912l-.107-.002c-1.159-.016-1.562-.154-1.754-.697z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M4.75 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8.75 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.25 12.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.75 16a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.37 3.605a1 1 0 0 1 1.371.443l4.093 8.4a.652.652 0 0 1-1.149.611l-4.708-8.07a.998.998 0 0 1 .394-1.384z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M11.537 3.484c.487.915 1.306 1.171 2.098.75.791-.42 1.038-1.243.551-2.158C13.63 1.028 12.438.078 11.648.497c-.79.42-.668 1.939-.11 2.987zm.883-.47a3.165 3.165 0 0 1-.32-1.137 1.975 1.975 0 0 1 .018-.496l.018.009c.05.024.205.096.403.254.302.241.602.596.764.901.229.43.164.646-.138.807-.3.16-.516.092-.745-.337z",
    "clip-rule": "evenodd"
  })));
};

module.exports.PaintPallet = function PaintPallet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.22 13.956c1.044-3.896-1.428-7.92-5.489-9.008-4.586-1.23-11.095 1.964-9.647 6.061.48 1.355 1.404 1.672 3.147 1.697l.109.002c.921.011 1.18.071 1.258.197.127.208.129.539-.014 1.45-.068.43-.09.58-.116.815-.159 1.431.083 2.547 1.02 3.557 2.928 3.153 8.553-.373 9.732-4.771zM2.97 10.341c-.729-2.06 3.936-4.349 7.243-3.463 3.017.809 4.826 3.754 4.075 6.559-.838 3.128-4.782 5.6-6.334 3.928-.48-.516-.599-1.068-.498-1.975.021-.194.041-.328.104-.726.219-1.397.216-2.035-.258-2.806-.594-.967-1.3-1.13-2.937-1.151l-.106-.002c-.964-.013-1.193-.092-1.29-.364z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M6 10a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 6 10z"
  }), React.createElement("path", {
    d: "M9.75 10a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
  }), React.createElement("path", {
    d: "M12.25 13a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
  }), React.createElement("path", {
    d: "M10.75 16.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
  }), React.createElement("path", {
    d: "M14.37 3.605a1 1 0 0 1 1.371.443l4.093 8.4a.652.652 0 0 1-1.149.611l-4.708-8.07a.998.998 0 0 1 .394-1.384z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.537 3.484c.487.915 1.306 1.171 2.098.75.791-.42 1.038-1.243.551-2.158C14.63 1.028 13.438.078 12.648.497c-.79.42-.668 1.939-.11 2.987zm.883-.47a3.165 3.165 0 0 1-.32-1.137 1.975 1.975 0 0 1 .018-.496l.018.009c.05.024.205.096.403.254.302.241.602.596.764.901.229.43.164.646-.138.807-.3.16-.516.092-.745-.337z",
    "clip-rule": "evenodd"
  })));
};

module.exports.PenPrint = function PenPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M4.796 11.724 14.874 1.646a.5.5 0 0 1 .707 0l3.89 3.89a.5.5 0 0 1 0 .707L9.393 16.32a.5.5 0 0 1-.278.14l-4.595.706a.5.5 0 0 1-.57-.57l.706-4.595a.5.5 0 0 1 .14-.278z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M13.082.854 3.004 10.93a.5.5 0 0 0-.141.278l-.706 4.595a.5.5 0 0 0 .57.57l4.595-.706a.5.5 0 0 0 .278-.14L17.678 5.45a.5.5 0 0 0 0-.707l-3.89-3.89a.5.5 0 0 0-.707 0zM3.248 15.282l.577-3.76 9.609-9.608 3.182 3.182-9.609 9.609-3.759.577z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "m10.854 4.061.706-.708 3.537 3.53-.707.708-3.536-3.53z"
  })));
};

module.exports.Pen = function Pen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.198 1.22 3.12 11.298a1 1 0 0 0-.282.555l-.705 4.594a1 1 0 0 0 1.14 1.14l4.595-.705a1 1 0 0 0 .555-.281L18.501 6.523a1 1 0 0 0 0-1.414l-3.89-3.89a1 1 0 0 0-1.413 0zM4.317 15.404l.448-2.924 9.14-9.14 2.475 2.476-9.14 9.14-2.923.448z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "m11.442 5.247 1.06-1.061 3.242 3.24-1.061 1.061-3.241-3.24z"
  })));
};

module.exports.PeoplePrint = function PeoplePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M9.75 7.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.75 8.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.8 11.5A1.5 1.5 0 0 0 5.3 13v1.5a1 1 0 0 1-2 0V13a3.5 3.5 0 0 1 7 0v.5a1 1 0 1 1-2 0V13a1.5 1.5 0 0 0-1.5-1.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M12.75 7.75a3 3 0 1 0 6 0 3 3 0 0 0-6 0z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.75 8.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.7 11.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1 1 0 1 0 2 0V13a3.5 3.5 0 0 0-7 0v.5a1 1 0 1 0 2 0V13a1.5 1.5 0 0 1 1.5-1.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.3 14.25a1.5 1.5 0 0 0-1.5 1.5v1.5a1 1 0 0 1-2 0v-1.5a3.5 3.5 0 0 1 7 0v1.5a1 1 0 1 1-2 0v-1.5a1.5 1.5 0 0 0-1.5-1.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M14.25 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.25 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M4.25 11.5h5v4h-5v-4z"
  }), React.createElement("path", {
    d: "M13.25 11.5h5v4h-5v-4z"
  }), React.createElement("path", {
    d: "M9.25 13.5h4l.5 4.75h-5l.5-4.75z"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M3.854 8.896a.5.5 0 0 1 0 .708l-.338.337A3.47 3.47 0 0 0 2.5 12.394v1.856a.5.5 0 1 1-1 0v-1.856a4.47 4.47 0 0 1 1.309-3.16l.337-.338a.5.5 0 0 1 .708 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M15.646 8.596a.5.5 0 0 0 0 .708l.338.337A3.469 3.469 0 0 1 17 12.094v2.156a.5.5 0 0 0 1 0v-2.156a4.47 4.47 0 0 0-1.309-3.16l-.337-.338a.5.5 0 0 0-.708 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M9.5 13.25a2.5 2.5 0 0 0-2.5 2.5v1.3a.5.5 0 0 1-1 0v-1.3a3.5 3.5 0 0 1 7 0v1.3a.5.5 0 1 1-1 0v-1.3a2.5 2.5 0 0 0-2.5-2.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M9.5 11.75a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    "clip-rule": "evenodd"
  })));
};

module.exports.People = function People(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.5 8.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.55 11a1.5 1.5 0 0 0-1.5 1.5V14a1 1 0 1 1-2 0v-1.5a3.5 3.5 0 0 1 7 0v.5a1 1 0 1 1-2 0v-.5a1.5 1.5 0 0 0-1.5-1.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.5 8.25a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.45 11a1.5 1.5 0 0 1 1.5 1.5V14a1 1 0 1 0 2 0v-1.5a3.5 3.5 0 1 0-7 0v.5a1 1 0 1 0 2 0v-.5a1.5 1.5 0 0 1 1.5-1.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10.05 13.75a1.5 1.5 0 0 0-1.5 1.5v1.5a1 1 0 1 1-2 0v-1.5a3.5 3.5 0 0 1 7 0v1.5a1 1 0 1 1-2 0v-1.5a1.5 1.5 0 0 0-1.5-1.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    "clip-rule": "evenodd"
  })));
};

module.exports.PersonCheckmarkPrint = function PersonCheckmarkPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 21 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M10.5 6.6c0 1.436-1.12 2.6-2.5 2.6S5.5 8.036 5.5 6.6C5.5 5.164 6.62 4 8 4s2.5 1.164 2.5 2.6z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 5c-.792 0-1.5.679-1.5 1.6S7.208 8.2 8 8.2s1.5-.679 1.5-1.6S8.792 5 8 5zM4.5 6.6C4.5 4.65 6.03 3 8 3s3.5 1.65 3.5 3.6c0 1.95-1.53 3.6-3.5 3.6S4.5 8.55 4.5 6.6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13 17v-2.167c0-2.684-2.254-4.766-4.987-4.766C5.281 10.067 3 12.149 3 14.833L3.002 17",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 14.833c0-3.295 2.79-5.766 6.013-5.766 3.232 0 5.987 2.478 5.987 5.766V17a1 1 0 1 1-2 0v-2.167c0-2.08-1.753-3.766-3.987-3.766-2.24 0-4.013 1.692-4.013 3.766l.002 2.166a1 1 0 0 1-2 .002L2 14.833z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M19.597 4.126a1 1 0 0 1 .388 1.36l-2.777 5a1 1 0 1 1-1.749-.972l2.778-5a1 1 0 0 1 1.36-.388z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.775 7.153a1 1 0 0 1 1.405-.156l2.778 2.222a1 1 0 1 1-1.25 1.562l-2.777-2.222a1 1 0 0 1-.156-1.406z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13 18H3v-1h10v1z",
    "clip-rule": "evenodd"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M6.8 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3.3 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M.8 14.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0v-2z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M18.154 3.563a.5.5 0 0 1 .194.68l-2.778 5a.5.5 0 0 1-.874-.486l2.778-5a.5.5 0 0 1 .68-.194z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M11.965 6.465a.5.5 0 0 1 .703-.078l2.778 2.223a.5.5 0 1 1-.625.78l-2.778-2.222a.5.5 0 0 1-.078-.703z",
    "clip-rule": "evenodd"
  })));
};

module.exports.PersonCheckmark = function PersonCheckmark(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M7 5c-.792 0-1.5.679-1.5 1.6S6.208 8.2 7 8.2s1.5-.679 1.5-1.6S7.792 5 7 5zM3.5 6.6C3.5 4.65 5.03 3 7 3s3.5 1.65 3.5 3.6c0 1.95-1.53 3.6-3.5 3.6S3.5 8.55 3.5 6.6z"
  }), React.createElement("path", {
    d: "M1 14.833c0-3.295 2.79-5.766 6.013-5.766 3.232 0 5.987 2.478 5.987 5.766V17a1 1 0 1 1-2 0v-2.167c0-2.08-1.753-3.766-3.987-3.766-2.24 0-4.013 1.692-4.013 3.766l.002 2.166a1 1 0 0 1-2 .002L1 14.833z"
  }), React.createElement("path", {
    d: "M18.597 4.126a1 1 0 0 1 .388 1.36l-2.777 5a1 1 0 1 1-1.749-.972l2.778-5a1 1 0 0 1 1.36-.388z"
  }), React.createElement("path", {
    d: "M11.775 7.153a1 1 0 0 1 1.405-.156l2.778 2.222a1 1 0 1 1-1.25 1.562l-2.777-2.222a1 1 0 0 1-.156-1.406z"
  })));
};

module.exports.PersonFilled = function PersonFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 15.5c0-3.191-2.686-5.5-6-5.5s-6 2.309-6 5.5l.002 1.5a1 1 0 0 0 1 1H15a1 1 0 0 0 1-1v-1.5z",
    "clip-rule": "evenodd"
  })));
};

module.exports.PersonPlusPrint = function PersonPlusPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.45 7.75a1 1 0 0 1 1-1h5.25a1 1 0 1 1 0 2h-5.25a1 1 0 0 1-1-1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 11.5a1 1 0 0 1-1-1V5.25a1 1 0 1 1 2 0v5.25a1 1 0 0 1-1 1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M10.5 6.6c0 1.436-1.12 2.6-2.5 2.6S5.5 8.036 5.5 6.6C5.5 5.164 6.62 4 8 4s2.5 1.164 2.5 2.6z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 5c-.792 0-1.5.679-1.5 1.6S7.208 8.2 8 8.2s1.5-.679 1.5-1.6S8.792 5 8 5zM4.5 6.6C4.5 4.65 6.03 3 8 3s3.5 1.65 3.5 3.6c0 1.95-1.53 3.6-3.5 3.6S4.5 8.55 4.5 6.6z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13 17v-2.167c0-2.684-2.254-4.766-4.987-4.766C5.281 10.067 3 12.149 3 14.833L3.002 17",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 14.833c0-3.295 2.79-5.766 6.013-5.766 3.232 0 5.987 2.478 5.987 5.766V17a1 1 0 1 1-2 0v-2.167c0-2.08-1.753-3.766-3.987-3.766-2.24 0-4.013 1.692-4.013 3.766l.002 2.166a1 1 0 0 1-2 .002L2 14.833z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13 18H3v-1h10v1z",
    "clip-rule": "evenodd"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M11.95 6.75a.5.5 0 0 1 .5-.5h5.25a.5.5 0 1 1 0 1h-5.25a.5.5 0 0 1-.5-.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M15 10a.5.5 0 0 1-.5-.5V4.25a.5.5 0 0 1 1 0V9.5a.5.5 0 0 1-.5.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M6.8 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3.3 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M.8 14.5c0-3.322 2.67-6.5 6-6.5s6 3.178 6 6.5v2a.5.5 0 0 1-1 0v-2c0-2.873-2.32-5.5-5-5.5s-5 2.627-5 5.5v2a.5.5 0 0 1-1 0v-2z",
    "clip-rule": "evenodd"
  })));
};

module.exports.PersonPlus = function PersonPlus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M11.45 7.75a1 1 0 0 1 1-1h5.25a1 1 0 1 1 0 2h-5.25a1 1 0 0 1-1-1z"
  }), React.createElement("path", {
    d: "M15 11.5a1 1 0 0 1-1-1V5.25a1 1 0 1 1 2 0v5.25a1 1 0 0 1-1 1z"
  }), React.createElement("path", {
    d: "M7 5c-.792 0-1.5.679-1.5 1.6S6.208 8.2 7 8.2s1.5-.679 1.5-1.6S7.792 5 7 5zM3.5 6.6C3.5 4.65 5.03 3 7 3s3.5 1.65 3.5 3.6c0 1.95-1.53 3.6-3.5 3.6S3.5 8.55 3.5 6.6z"
  }), React.createElement("path", {
    d: "M1 14.833c0-3.295 2.79-5.766 6.013-5.766 3.232 0 5.987 2.478 5.987 5.766V17a1 1 0 1 1-2 0v-2.167c0-2.08-1.753-3.766-3.987-3.766-2.24 0-4.013 1.692-4.013 3.766l.002 2.166a1 1 0 0 1-2 .002L1 14.833z"
  })));
};

module.exports.PersonPrint = function PersonPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M11.5 9.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M18 16.688c0-3.59-2.91-6.188-6.5-6.188S5 13.098 5 16.688l.002 1.812a1 1 0 0 0 1 1H17a1 1 0 0 0 1-1v-1.813.001z",
    "clip-rule": "evenodd"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M7.5 6a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zM10 2.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm.016 7c-3.505 0-6.516 2.58-6.516 6l.002 2.5a.5.5 0 1 0 1 0L4.5 15.5c0-2.775 2.464-5 5.516-5 3.049 0 5.484 2.222 5.484 5V18a.5.5 0 0 0 1 0v-2.5c0-3.417-2.975-6-6.484-6z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Person = function Person(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M6 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M17 18a1 1 0 1 1-2 0v-2.5c0-2.494-2.206-4.5-4.984-4.5C7.23 11 5 13.013 5 15.5l.002 2.5a1 1 0 1 1-2 0L3 15.5C3 11.86 6.169 9 10.016 9 13.86 9 17 11.857 17 15.5V18z"
  })));
};

module.exports.PersonsPrint = function PersonsPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.736 10.805a4.954 4.954 0 0 0-.832 2.748v.697a1 1 0 0 1-2 0v-.697c0-1.373.406-2.715 1.168-3.858l1.664 1.11z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.707 9.75c-.792 0-1.532.396-1.971 1.055l-1.664-1.11A4.369 4.369 0 0 1 7.707 7.75h.197a1 1 0 0 1 0 2h-.197z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.918 10.805c.543.813.832 1.77.832 2.748v.697a1 1 0 0 0 2 0v-.697a6.954 6.954 0 0 0-1.168-3.858l-1.664 1.11z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.947 9.75c.792 0 1.532.396 1.97 1.055l1.665-1.11A4.368 4.368 0 0 0 7.947 7.75H7.75a1 1 0 0 0 0 2h.197z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 14.75a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M11 5.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.75 7a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm0 2a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M4.5 9.75H11v5H4.5v-5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.986 14.055a4.954 4.954 0 0 0-.832 2.748v.697a1 1 0 0 1-2 0v-.697c0-1.373.406-2.715 1.168-3.858l1.664 1.11z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.957 13c-.792 0-1.532.396-1.971 1.055l-1.664-1.11A4.369 4.369 0 0 1 14.957 11h.197a1 1 0 1 1 0 2h-.197z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M17.168 14.055c.543.813.832 1.77.832 2.748v.697a1 1 0 0 0 2 0v-.697a6.954 6.954 0 0 0-1.168-3.858l-1.664 1.11z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.197 13c.792 0 1.532.396 1.97 1.055l1.665-1.11A4.369 4.369 0 0 0 15.197 11H15a1 1 0 1 0 0 2h.197z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.5 18a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M18.25 9a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15 10.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm0 2a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M11.5 12.75H18v5h-6.5v-5z"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M3.36 9.977a5.5 5.5 0 0 0-.923 3.05V14a.5.5 0 1 1-1 0v-.972A6.5 6.5 0 0 1 2.53 9.422l.108-.162a.5.5 0 1 1 .832.555l-.108.162z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M6.18 8.365c-1.09 0-2.107.544-2.711 1.45l-.832-.554a4.258 4.258 0 0 1 3.542-1.896h.22a.5.5 0 0 1 0 1h-.22z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M9.258 9.965c.47.706.721 1.534.721 2.382h1a5.289 5.289 0 0 0-.889-2.936l-.1-.15a.5.5 0 1 0-.832.554l.1.15z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M6.448 8.365c1.089 0 2.106.544 2.71 1.45l.832-.554a4.258 4.258 0 0 0-3.542-1.896h-.22a.5.5 0 1 0 0 1h.22z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M6.25 7.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zm0 1a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10.508 13.186a5.5 5.5 0 0 0-.923 3.051v1.034a.5.5 0 1 1-1 0v-1.034a6.5 6.5 0 0 1 1.091-3.605l.133-.2a.5.5 0 0 1 .832.556l-.133.198z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M13.42 11.5a3.34 3.34 0 0 0-2.78 1.488l-.831-.555A4.34 4.34 0 0 1 13.42 10.5h.224a.5.5 0 1 1 0 1h-.224z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M16.607 13.186a5.5 5.5 0 0 1 .924 3.051v1.034a.5.5 0 1 0 1 0v-1.034a6.5 6.5 0 0 0-1.092-3.605l-.133-.2a.5.5 0 1 0-.832.556l.133.198z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M13.695 11.5a3.34 3.34 0 0 1 2.78 1.488l.832-.555a4.34 4.34 0 0 0-3.612-1.933h-.225a.5.5 0 1 0 0 1h.225z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M13.5 10.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5zm0 1a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Persons = function Persons(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M4.236 10.055a4.954 4.954 0 0 0-.832 2.748v.697a1 1 0 0 1-2 0v-.697c0-1.373.406-2.715 1.168-3.858l1.664 1.11z"
  }), React.createElement("path", {
    d: "M6.207 9c-.792 0-1.532.396-1.971 1.055l-1.664-1.11A4.369 4.369 0 0 1 6.207 7h.197a1 1 0 0 1 0 2h-.197z"
  }), React.createElement("path", {
    d: "M8.418 10.055c.543.813.832 1.77.832 2.748v.697a1 1 0 0 0 2 0v-.697a6.955 6.955 0 0 0-1.168-3.858l-1.664 1.11z"
  }), React.createElement("path", {
    d: "M6.447 9c.792 0 1.532.396 1.971 1.055l1.664-1.11A4.369 4.369 0 0 0 6.447 7H6.25a1 1 0 0 0 0 2h.197z"
  }), React.createElement("path", {
    d: "M6.25 6.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm0 2a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z"
  }), React.createElement("path", {
    d: "M11.486 13.305a4.954 4.954 0 0 0-.832 2.748v.697a1 1 0 0 1-2 0v-.697c0-1.373.406-2.715 1.168-3.858l1.664 1.11z"
  }), React.createElement("path", {
    d: "M13.457 12.25c-.792 0-1.532.396-1.971 1.055l-1.664-1.11a4.369 4.369 0 0 1 3.635-1.945h.197a1 1 0 0 1 0 2h-.197z"
  }), React.createElement("path", {
    d: "M15.668 13.305c.543.813.832 1.77.832 2.748v.697a1 1 0 0 0 2 0v-.697a6.955 6.955 0 0 0-1.168-3.858l-1.664 1.11z"
  }), React.createElement("path", {
    d: "M13.697 12.25c.792 0 1.532.396 1.971 1.055l1.664-1.11a4.369 4.369 0 0 0-3.635-1.945H13.5a1 1 0 1 0 0 2h.197z"
  }), React.createElement("path", {
    d: "M13.5 9.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm0 2a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z"
  })));
};

module.exports.PhonePrint = function PhonePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "m12.439 11.774.582-.582a3 3 0 0 1 4.242 0l1.415 1.415a3 3 0 0 1 0 4.242l-2.806 2.806a1 1 0 0 1-1.064.227C8.318 17.404 3.874 12.93 1.5 6.57a1 1 0 0 1 .23-1.057l2.806-2.806a3 3 0 0 1 4.242 0l1.414 1.414a3 3 0 0 1 0 4.243l-.58.58a31.116 31.116 0 0 0 2.827 2.83z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m12.874 9.546-.91.911A31.647 31.647 0 0 1 8.428 6.92l.91-.91a2.5 2.5 0 0 0 0-3.535L7.925 1.06a2.5 2.5 0 0 0-3.536 0L1.583 3.866a.5.5 0 0 0-.114.529c2.324 6.226 6.661 10.593 13.018 13.02a.5.5 0 0 0 .531-.114l2.806-2.805a2.5 2.5 0 0 0 0-3.536L16.41 9.546a2.5 2.5 0 0 0-3.536 0zm4.243 2.121a1.5 1.5 0 0 1 0 2.122l-2.575 2.575c-5.821-2.306-9.811-6.32-12.023-12.02l2.577-2.576a1.5 1.5 0 0 1 2.122 0l1.414 1.414a1.5 1.5 0 0 1 0 2.121L7.398 6.537a.5.5 0 0 0-.032.673 32.66 32.66 0 0 0 4.307 4.31.5.5 0 0 0 .673-.031l1.236-1.236a1.5 1.5 0 0 1 2.12 0l1.415 1.414z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Phone = function Phone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m12.52 10.192-.581.582a31.121 31.121 0 0 1-2.827-2.83l.58-.58a3 3 0 0 0 0-4.243L8.278 1.707a3 3 0 0 0-4.242 0L1.23 4.513A1 1 0 0 0 1 5.57c2.374 6.36 6.818 10.834 13.308 13.312a1 1 0 0 0 1.064-.227l2.806-2.806a3 3 0 0 0 0-4.242l-1.415-1.415a3 3 0 0 0-4.242 0zm4.244 2.829a1 1 0 0 1 0 1.414l-2.342 2.341c-5.424-2.23-9.173-6-11.317-11.31L5.45 3.12a1 1 0 0 1 1.414 0l1.414 1.415a1 1 0 0 1 0 1.414L7.044 7.184a1 1 0 0 0-.063 1.345 33.167 33.167 0 0 0 4.373 4.376 1 1 0 0 0 1.345-.063l1.236-1.235a1 1 0 0 1 1.414 0l1.415 1.414z",
    "clip-rule": "evenodd"
  }));
};

module.exports.PhotoCameraPrint = function PhotoCameraPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "m7.762 7.5.41-1.268A2.5 2.5 0 0 1 10.55 4.5h2.898a2.5 2.5 0 0 1 2.379 1.732l.41 1.268H17.5A2.5 2.5 0 0 1 20 10v6a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16v-6a2.5 2.5 0 0 1 2.5-2.5h1.262z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M6.172 5.232 5.762 6.5H4.5A2.5 2.5 0 0 0 2 9v6a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 18 15V9a2.5 2.5 0 0 0-2.5-2.5h-1.263l-.409-1.268a2.5 2.5 0 0 0-2.38-1.732H8.552a2.5 2.5 0 0 0-2.38 1.732zM4.5 7.5h1.99l.633-1.96A1.5 1.5 0 0 1 8.551 4.5h2.898a1.5 1.5 0 0 1 1.427 1.04l.633 1.96H15.5A1.5 1.5 0 0 1 17 9v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 15V9a1.5 1.5 0 0 1 1.5-1.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M7 11.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0zm5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z",
    "clip-rule": "evenodd"
  })));
};

module.exports.PhotoCamera = function PhotoCamera(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M5.696 5.078 5.398 6H4.5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-.899l-.297-.922A3 3 0 0 0 11.449 3H8.55a3 3 0 0 0-2.855 2.078zM4.5 8h2.354L7.6 5.693A1 1 0 0 1 8.551 5h2.898a1 1 0 0 1 .951.693L13.145 8H15.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
  }), React.createElement("path", {
    d: "M6.5 11.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
  })));
};

module.exports.PhotoPrint = function PhotoPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M4.5 3A1.5 1.5 0 0 0 3 4.5v14A1.5 1.5 0 0 0 4.5 20h14a1.5 1.5 0 0 0 1.5-1.5v-14A1.5 1.5 0 0 0 18.5 3h-14zM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm4.006 1.123a1 1 0 0 0-1.512 0l-1.563 1.805-.628-.846a1 1 0 0 0-1.606 0l-1.91 2.572a1 1 0 0 0 .804 1.596h8.666a1 1 0 0 0 .756-1.655l-3.007-3.472z"
  }), React.createElement("path", {
    d: "M5 5v6.36l1.091-1.47c.02-.028.04-.054.062-.08A3.987 3.987 0 0 1 5 7c0-.729.195-1.412.535-2H5zm-.5-2A1.5 1.5 0 0 0 3 4.5v14A1.5 1.5 0 0 0 4.5 20h14a1.5 1.5 0 0 0 1.5-1.5v-14A1.5 1.5 0 0 0 18.5 3h-14zm7.965 2H18v8.021a3.07 3.07 0 0 0-.475-.735l-3.007-3.472a2.98 2.98 0 0 0-1.609-.964A4.01 4.01 0 0 0 12.465 5zm-.733 4.921a1 1 0 0 1 1.274.202l3.007 3.472a1 1 0 0 1-.756 1.655H6.591a1 1 0 0 1-.803-1.596l1.909-2.572a1 1 0 0 1 1.606 0l.628.846 1.563-1.805a1 1 0 0 1 .238-.201zm-1.588-1.28A1.993 1.993 0 0 0 11 7a2 2 0 1 0-.856 1.64zM18 15.465c-.45 1.014-1.444 1.785-2.743 1.785H6.591A2.97 2.97 0 0 1 5 16.8V18h13v-2.535z"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M8 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M7.5 10.678 5.59 13.25H7.5l1.91 1H5.59a1 1 0 0 1-.802-1.596l1.909-2.572a1 1 0 0 1 1.606 0l.955 1.286-.803.596-.955-1.286z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14.257 13.25 11.25 9.778 8.243 13.25h6.014zm-2.251-4.127a1 1 0 0 0-1.512 0l-3.007 3.472a1 1 0 0 0 .756 1.655h6.014a1 1 0 0 0 .756-1.655l-3.007-3.472z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M17 2.5H3a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zm-14-1A1.5 1.5 0 0 0 1.5 3v14A1.5 1.5 0 0 0 3 18.5h14a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 17 1.5H3z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Photo = function Photo(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M6.697 10.082a1 1 0 0 1 1.606 0l1.91 2.572a1 1 0 0 1-.804 1.596H5.591a1 1 0 0 1-.803-1.596l1.909-2.572z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "m7.5 11.517-.916 1.233h1.832L7.5 11.517zm.803-1.435a1 1 0 0 0-1.606 0l-1.91 2.572a1 1 0 0 0 .804 1.596h3.818a1 1 0 0 0 .803-1.596l-1.91-2.572z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M10.494 9.123a1 1 0 0 1 1.512 0l3.007 3.472a1 1 0 0 1-.756 1.655H8.243a1 1 0 0 1-.756-1.655l3.007-3.472z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.25 10.541 9.337 12.75h3.826l-1.913-2.209zm.756-1.418a1 1 0 0 0-1.512 0l-3.007 3.472a1 1 0 0 0 .756 1.655h6.014a1 1 0 0 0 .756-1.655l-3.007-3.472z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 3.5v13h13v-13h-13zm-.5-2A1.5 1.5 0 0 0 1.5 3v14A1.5 1.5 0 0 0 3 18.5h14a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 17 1.5H3z",
    "clip-rule": "evenodd"
  })));
};

module.exports.PillPrint = function PillPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.065 4.429a4.1 4.1 0 0 1 5.799 0l5.799 5.799a4.1 4.1 0 0 1-5.799 5.799l-5.799-5.8a4.1 4.1 0 0 1 0-5.798z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M15.85 10.192 9.484 3.828a4 4 0 0 0-5.657 5.657l6.364 6.364a4 4 0 1 0 5.657-5.657zM4.535 4.536a3 3 0 0 1 4.242 0l6.364 6.364a3 3 0 1 1-4.242 4.242L4.535 8.778a3 3 0 0 1 0-4.242z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "m13.037 7.58-.243.97c-1.201-.3-2.223-.154-3.101.432-.87.58-1.454 1.687-1.73 3.355l-.987-.164c.318-1.917 1.032-3.27 2.162-4.023 1.122-.748 2.434-.936 3.899-.57z"
  })));
};

module.exports.Pill = function Pill(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m10.546 4.182 6.364 6.364a4.5 4.5 0 1 1-6.364 6.364l-6.364-6.364a4.5 4.5 0 1 1 6.364-6.364zM13 9.5c-.667-.667-1.5-.833-2.5-.5-1 .333-1.667 1.333-2 3l3.42 3.444.006.006c.973.973 2.55.973 3.524 0l.007-.008a2.49 2.49 0 0 0-.015-3.52L13 9.5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.PinpointFilled = function PinpointFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2.5 8.123C2.5 12.366 6.882 19.5 10 19.5c3.118 0 7.5-7.134 7.5-11.377C17.5 3.917 14.146.5 10 .5S2.5 3.917 2.5 8.123zM10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z",
    "clip-rule": "evenodd"
  }));
};

module.exports.PinpointOffFilled = function PinpointOffFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 21 21"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5 8.123C2.5 12.366 6.882 19.5 10 19.5c3.118 0 7.5-7.134 7.5-11.377C17.5 3.917 14.146.5 10 .5S2.5 3.917 2.5 8.123zM10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M1.533 2.447a1 1 0 0 1 1.434-1.394l17 17.5a1 1 0 0 1-1.434 1.394l-17-17.5z"
  })));
};

module.exports.PinpointOffPrint = function PinpointOffPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M12.5 19.5c-2.777 0-7-6.875-7-10.877 0-3.932 3.132-7.123 7-7.123s7 3.191 7 7.123c0 4.002-4.223 10.877-7 10.877z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M1.646 1.854a.5.5 0 1 1 .708-.708l16.5 16.5a.5.5 0 0 1-.708.708l-16.5-16.5z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M3 8.123C3 12.125 7.223 19 10 19s7-6.875 7-10.877C17 4.191 13.868 1 10 1S3 4.191 3 8.123zm13 0C16 11.643 12.096 18 10 18s-6-6.357-6-9.877C4 4.74 6.688 2 10 2s6 2.74 6 6.123z",
    "clip-rule": "evenodd"
  })));
};

module.exports.PinpointOff = function PinpointOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414l-16-16z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.5 8.123C2.5 12.366 6.882 19.5 10 19.5c3.118 0 7.5-7.134 7.5-11.377C17.5 3.917 14.146.5 10 .5S2.5 3.917 2.5 8.123zm13 0c0 3.28-3.745 9.377-5.5 9.377s-5.5-6.097-5.5-9.377C4.5 5.013 6.967 2.5 10 2.5s5.5 2.513 5.5 5.623z",
    "clip-rule": "evenodd"
  })));
};

module.exports.PinpointPrint = function PinpointPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M12.5 19.5c-2.777 0-7-6.875-7-10.877 0-3.932 3.132-7.123 7-7.123s7 3.191 7 7.123c0 4.002-4.223 10.877-7 10.877z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M3 8.123C3 12.125 7.223 19 10 19s7-6.875 7-10.877C17 4.191 13.868 1 10 1S3 4.191 3 8.123zm13 0C16 11.643 12.096 18 10 18s-6-6.357-6-9.877C4 4.74 6.688 2 10 2s6 2.74 6 6.123z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Pinpoint = function Pinpoint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M10 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
  }), React.createElement("path", {
    d: "M2.5 8.123C2.5 12.366 6.882 19.5 10 19.5c3.118 0 7.5-7.134 7.5-11.377C17.5 3.917 14.146.5 10 .5S2.5 3.917 2.5 8.123zm13 0c0 3.28-3.745 9.377-5.5 9.377s-5.5-6.097-5.5-9.377C4.5 5.013 6.967 2.5 10 2.5s5.5 2.513 5.5 5.623z"
  })));
};

module.exports.PlusPrint = function PlusPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.5 4.5A1.5 1.5 0 0 0 10 6v3.5H6.5a1.5 1.5 0 0 0 0 3H10V16a1.5 1.5 0 0 0 3 0v-3.5h3.5a1.5 1.5 0 0 0 0-3H13V6a1.5 1.5 0 0 0-1.5-1.5z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5 10.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1H5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 5a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0V5z"
  })));
};

module.exports.Plus = function Plus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H5z"
  }), React.createElement("path", {
    d: "M9 5a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V5z"
  })));
};

module.exports.PowerPrint = function PowerPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M11.5 20a7 7 0 1 1 0-14 7 7 0 0 1 0 14z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M4.477 5.46a.6.6 0 1 1 .854.842 6.018 6.018 0 0 0-1.731 4.24c0 3.312 2.643 5.992 5.9 5.992 3.257 0 5.9-2.68 5.9-5.992a6.02 6.02 0 0 0-1.731-4.24.6.6 0 1 1 .854-.842 7.218 7.218 0 0 1 2.077 5.082c0 3.97-3.177 7.192-7.1 7.192-3.923 0-7.1-3.222-7.1-7.192 0-1.93.756-3.743 2.077-5.082z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8.878 1.25a.6.6 0 0 1 1.2 0v7.085a.6.6 0 0 1-1.2 0V1.25z"
  })));
};

module.exports.Power = function Power(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M4.338 5.179a1 1 0 1 1 1.424 1.404A6.127 6.127 0 0 0 4 10.901C4 14.272 6.69 17 10 17s6-2.728 6-6.1c0-1.643-.641-3.18-1.762-4.317a1 1 0 1 1 1.424-1.404A8.127 8.127 0 0 1 18 10.9c0 4.47-3.579 8.1-8 8.1-4.421 0-8-3.63-8-8.1 0-2.173.85-4.213 2.338-5.721z"
  }), React.createElement("rect", {
    width: "2",
    height: "10.5",
    x: "9",
    y: "1",
    rx: "1"
  })));
};

module.exports.PrinterPrint = function PrinterPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("rect", {
    width: "18",
    height: "11",
    x: "2",
    y: "7.5",
    fill: "currentColor",
    opacity: ".8",
    rx: "3"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M4.5 2a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4.5h-11V2z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5 6.5H4V2.1C4 1.234 4.612.5 5.417.5h9.166C15.388.5 16 1.234 16 2.1v4.4h-1V2.1c0-.35-.209-.6-.417-.6H5.417c-.208 0-.417.25-.417.6v4.4z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M16 6H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zM2 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M15.5 17.531a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V11.97h11v5.562z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M15 11.969h1v5.25c0 .97-.588 1.812-1.417 1.812H5.417C4.588 19.031 4 18.19 4 17.22v-5.25h1v5.25c0 .479.233.812.417.812h9.166c.184 0 .417-.333.417-.812v-5.25z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.5 15.5a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h7z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.5 13.5a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h7z"
  })));
};

module.exports.Printer = function Printer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M5 7V3c0-.552.373-1 .833-1h8.334c.46 0 .833.448.833 1v4",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M6 3v4a1 1 0 0 1-2 0V3c0-1.068.776-2 1.833-2h8.334C15.224 1 16 1.932 16 3v4a1 1 0 1 1-2 0V3H6z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M4 6h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z"
  }), React.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M5 12v4.8c0 .663.373 1.2.833 1.2h8.334c.46 0 .833-.537.833-1.2V12",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M6 16.8V12a1 1 0 1 0-2 0v4.8c0 1.154.727 2.2 1.833 2.2h8.334C15.273 19 16 17.954 16 16.8V12a1 1 0 1 0-2 0v4.8a.661.661 0 0 1-.029.2H6.029A.66.66 0 0 1 6 16.8z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M7 16a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1H7z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M7 14a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1H7z"
  })));
};

module.exports.QrCodePrint = function QrCodePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    opacity: ".8"
  }, React.createElement("mask", {
    id: "a",
    fill: "#fff"
  }, React.createElement("rect", {
    width: "13.5",
    height: "13.5",
    x: "5",
    y: "5",
    rx: ".5"
  })), React.createElement("rect", {
    width: "13.5",
    height: "13.5",
    x: "5",
    y: "5",
    fill: "currentColor",
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeLinejoin: "round",
    strokeWidth: "3",
    mask: "url(#a)",
    rx: ".5"
  })), React.createElement("mask", {
    id: "b",
    fill: "#fff"
  }, React.createElement("rect", {
    width: "5",
    height: "5",
    x: "4.5",
    y: "4.5",
    rx: ".5"
  })), React.createElement("rect", {
    width: "5",
    height: "5",
    x: "4.5",
    y: "4.5",
    stroke: "#000",
    strokeLinecap: "square",
    strokeLinejoin: "round",
    strokeWidth: "2",
    mask: "url(#b)",
    rx: ".5"
  }), React.createElement("mask", {
    id: "c",
    fill: "#fff"
  }, React.createElement("rect", {
    width: "5",
    height: "5",
    x: "10.5",
    y: "4.5",
    rx: ".5"
  })), React.createElement("rect", {
    width: "5",
    height: "5",
    x: "10.5",
    y: "4.5",
    stroke: "#000",
    strokeLinecap: "square",
    strokeLinejoin: "round",
    strokeWidth: "2",
    mask: "url(#c)",
    rx: ".5"
  }), React.createElement("mask", {
    id: "d",
    fill: "#fff"
  }, React.createElement("rect", {
    width: "5",
    height: "5",
    x: "4.5",
    y: "10.5",
    rx: ".5"
  })), React.createElement("rect", {
    width: "5",
    height: "5",
    x: "4.5",
    y: "10.5",
    stroke: "#000",
    strokeLinecap: "square",
    strokeLinejoin: "round",
    strokeWidth: "2",
    mask: "url(#d)",
    rx: ".5"
  }), React.createElement("mask", {
    id: "e",
    fill: "#fff"
  }, React.createElement("rect", {
    width: "5",
    height: "5",
    x: "10.5",
    y: "10.5",
    rx: ".5"
  })), React.createElement("rect", {
    width: "5",
    height: "5",
    x: "10.5",
    y: "10.5",
    fill: "#000",
    stroke: "#000",
    strokeLinecap: "square",
    strokeLinejoin: "round",
    strokeWidth: "2",
    mask: "url(#e)",
    rx: ".5"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M3 3h3.5"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M3 3v3.5"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M3 17v-3.5"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M3 17h3.5"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M17 17h-3.5"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M17 17v-3.5"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M17 3v3.5"
  }), React.createElement("path", {
    stroke: "#000",
    strokeLinecap: "round",
    d: "M17 3h-3.5"
  })));
};

module.exports.QrCode = function QrCode(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("mask", {
    id: "a",
    fill: "#fff"
  }, React.createElement("rect", {
    width: "5",
    height: "5",
    x: "4.5",
    y: "4.5",
    rx: ".5"
  })), React.createElement("rect", {
    width: "5",
    height: "5",
    x: "4.5",
    y: "4.5",
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeLinejoin: "round",
    strokeWidth: "3",
    mask: "url(#a)",
    rx: ".5"
  }), React.createElement("mask", {
    id: "b",
    fill: "#fff"
  }, React.createElement("rect", {
    width: "5",
    height: "5",
    x: "10.5",
    y: "4.5",
    rx: ".5"
  })), React.createElement("rect", {
    width: "5",
    height: "5",
    x: "10.5",
    y: "4.5",
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeLinejoin: "round",
    strokeWidth: "3",
    mask: "url(#b)",
    rx: ".5"
  }), React.createElement("mask", {
    id: "c",
    fill: "#fff"
  }, React.createElement("rect", {
    width: "5",
    height: "5",
    x: "4.5",
    y: "10.5",
    rx: ".5"
  })), React.createElement("rect", {
    width: "5",
    height: "5",
    x: "4.5",
    y: "10.5",
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeLinejoin: "round",
    strokeWidth: "3",
    mask: "url(#c)",
    rx: ".5"
  }), React.createElement("mask", {
    id: "d",
    fill: "#fff"
  }, React.createElement("rect", {
    width: "5",
    height: "5",
    x: "10.5",
    y: "10.5",
    rx: ".5"
  })), React.createElement("rect", {
    width: "5",
    height: "5",
    x: "10.5",
    y: "10.5",
    fill: "currentColor",
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeLinejoin: "round",
    strokeWidth: "3",
    mask: "url(#d)",
    rx: ".5"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M3 3h3.5"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M3 3v3.5"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M3 17v-3.5"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M3 17h3.5"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M17 17h-3.5"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M17 17v-3.5"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M17 3v3.5"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "2",
    d: "M17 3h-3.5"
  })));
};

module.exports.RefreshPrint = function RefreshPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("circle", {
    cx: "12",
    cy: "10.5",
    r: "6.5",
    fill: "currentColor",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.254 14.596a.5.5 0 0 1 .707-.707A5.5 5.5 0 0 0 15.35 10a.5.5 0 0 1 .999.001 6.5 6.5 0 0 1-11.096 4.596z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.131 12.416a.5.5 0 0 1-.555-.832l3-2a.5.5 0 1 1 .555.832l-3 2z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M18.266 12.723a.5.5 0 1 1-.832.554l-2-3a.5.5 0 0 1 .832-.554l2 3z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14.354 5.205a.5.5 0 0 1-.708.707 5.5 5.5 0 0 0-9.389 3.89.5.5 0 0 1-1-.001 6.5 6.5 0 0 1 11.097-4.596z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.476 7.385a.5.5 0 0 1 .555.832l-3 2a.5.5 0 1 1-.555-.832l3-2z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M1.341 7.078a.5.5 0 1 1 .832-.554l2 3a.5.5 0 0 1-.832.554l-2-3z"
  })));
};

module.exports.Refresh = function Refresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M5.05 14.95a1 1 0 1 1 1.414-1.414A5 5 0 0 0 15 10a1 1 0 1 1 2 0 7 7 0 0 1-11.95 4.95z"
  }), React.createElement("path", {
    d: "M13.559 12.832a1 1 0 1 1-1.11-1.664l3-2a1 1 0 1 1 1.11 1.664l-3 2z"
  }), React.createElement("path", {
    d: "M18.832 12.445a1 1 0 0 1-1.664 1.11l-2-3a1 1 0 1 1 1.664-1.11l2 3z"
  }), React.createElement("path", {
    d: "M14.857 4.851a1 1 0 1 1-1.414 1.414 5 5 0 0 0-8.536 3.536 1 1 0 1 1-2 0 7 7 0 0 1 11.95-4.95z"
  }), React.createElement("path", {
    d: "M6.349 6.969a1 1 0 0 1 1.11 1.664l-3.001 2a1 1 0 1 1-1.11-1.664l3-2z"
  }), React.createElement("path", {
    d: "M1.075 7.356a1 1 0 1 1 1.664-1.11l2 3a1 1 0 1 1-1.664 1.11l-2-3z"
  })));
};

module.exports.ReloadPrint = function ReloadPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("circle", {
    cx: "12",
    cy: "11.5",
    r: "6.5",
    fill: "currentColor",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.374 5.038a.5.5 0 0 1-.563.827A5 5 0 1 0 15 10a.5.5 0 0 1 1 0 6 6 0 1 1-2.626-4.962z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.769 11.585a.5.5 0 1 1-.539-.842l3.482-2.227a.5.5 0 1 1 .539.842l-3.482 2.227z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M17.947 12.114a.5.5 0 0 1-.913.407l-1.509-3.38a.5.5 0 1 1 .914-.408l1.508 3.381z"
  })));
};

module.exports.Reload = function Reload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M13.937 4.211a1 1 0 0 1-1.126 1.653A5 5 0 1 0 15 10a1 1 0 1 1 2 0 7 7 0 1 1-3.063-5.789z"
  }), React.createElement("path", {
    d: "M13.539 12.506a1 1 0 1 1-1.078-1.685l3.482-2.227a1 1 0 0 1 1.077 1.685l-3.481 2.227z"
  }), React.createElement("path", {
    d: "M18.903 12.41a1 1 0 0 1-1.826.815l-1.508-3.38a1 1 0 1 1 1.826-.815l1.508 3.38z"
  })));
};

module.exports.ScissorsPrint = function ScissorsPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.5 19.5a3 3 0 0 0 2.435-4.753.749.749 0 0 0 .595-.217l1.72-1.72 5.72 5.72a.75.75 0 1 0 1.06-1.06l-5.72-5.72 5.72-5.72a.75.75 0 0 0-1.06-1.06l-5.72 5.72-1.72-1.72a.747.747 0 0 0-.316-.19 3 3 0 1 0-.869 1.085.75.75 0 0 0 .125.165l1.72 1.72-1.72 1.72a.748.748 0 0 0-.217.595A3 3 0 1 0 6.5 19.5z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5.5 8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5.5 18.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M16.978 15.782a.5.5 0 0 1-.697.717L7.405 7.873a.5.5 0 1 1 .697-.717l8.876 8.626z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M7.146 13.146a.5.5 0 0 0 .708.708l9-9a.5.5 0 0 0-.708-.708l-9 9z"
  })));
};

module.exports.Scissors = function Scissors(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 5.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 14a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0zm5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M16.707 15.293a1 1 0 0 1-1.414 1.414l-8.5-8.5a1 1 0 0 1 1.414-1.414l8.5 8.5z"
  }), React.createElement("path", {
    d: "M6.793 11.293a1 1 0 1 0 1.414 1.414l8.5-8.5a1 1 0 0 0-1.414-1.414l-8.5 8.5z"
  })));
};

module.exports.SendPrint = function SendPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M1.874 9.454a.5.5 0 0 1-.048-.952l15.715-5.855a.5.5 0 0 1 .654.61l-4.744 16.085a.5.5 0 0 1-.95.026L9.696 11.5 1.874 9.454z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M.874 7.454 8.697 9.5l2.803 7.868a.5.5 0 0 0 .95-.026l4.745-16.085a.5.5 0 0 0-.654-.61L.826 6.502a.5.5 0 0 0 .048.952zm1.783-.567 13.296-4.954-4.027 13.652-2.376-6.67a.5.5 0 0 0-.344-.315L2.657 6.887z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "m16 1.293.707.707L9 9.707 8.293 9 16 1.293z"
  })));
};

module.exports.Send = function Send(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.685 6.659c-.926.309-.906 1.626.03 1.906l7.493 2.242 2.447 7.71c.293.922 1.596.932 1.902.013L18.86 2.62a1 1 0 0 0-1.265-1.265L1.685 6.66zm3.633.897 11.012-3.67-3.698 11.096-1.677-5.284a1 1 0 0 0-.667-.655l-4.97-1.487z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "m17.767 1.44 1.044 1.077-8.828 8.543-1.044-1.077 8.828-8.543z"
  })));
};

module.exports.ShareAndroidPrint = function ShareAndroidPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7.175 14.207a2.5 2.5 0 1 1 .233-4.274l5.093-3.01a2.5 2.5 0 1 1 .434 1.487l-4.593 2.714a2.494 2.494 0 0 1-.09 1.963l4.658 2.54a2.5 2.5 0 1 1-.408 1.486l-5.327-2.905z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14 17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0-4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "m6.754 9.18-.508-.86 5.5-3.25.508.86-5.5 3.25z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m12 14.878.479-.878-5.5-3-.479.878 5.5 3z"
  })));
};

module.exports.ShareAndroid = function ShareAndroid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M5 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "m6.236 9.777-.763-1.291 6.791-4.013.763 1.291-6.791 4.013z"
  }), React.createElement("path", {
    d: "m12.257 15.529.772-1.286-6.286-3.772-.772 1.286 6.286 3.772z"
  })));
};

module.exports.ShareIosPrint = function ShareIosPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.5 9h1c1.105 0 2 .758 2 1.692v7.616c0 .934-.895 1.692-2 1.692h-8c-1.105 0-2-.758-2-1.692v-7.616C6.5 9.758 7.395 9 8.5 9h1",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.998 2.5a.5.5 0 1 1 1 0L11 13a.5.5 0 1 1-1 0L9.998 2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10.82 2.884a.5.5 0 0 0-.64-.768l-3 2.5a.5.5 0 1 0 .64.768l3-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10.18 2.884a.5.5 0 1 1 .64-.768l3 2.5a.5.5 0 0 1-.64.768l-3-2.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.248 9a.5.5 0 0 1 0-1h.917c1.271 0 2.333.891 2.333 2.039v6.923c0 1.147-1.062 2.038-2.333 2.038H6.832c-1.271 0-2.334-.891-2.334-2.038v-6.923C4.498 8.89 5.561 8 6.832 8h.916a.5.5 0 0 1 0 1h-.916c-.754 0-1.334.486-1.334 1.039v6.923c0 .552.58 1.038 1.334 1.038h7.333c.754 0 1.333-.486 1.333-1.038v-6.923c0-.553-.58-1.039-1.333-1.039h-.917z"
  })));
};

module.exports.ShareIos = function ShareIos(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M9 3a1 1 0 0 1 2 0v10.5a1 1 0 1 1-2 0V3z"
  }), React.createElement("path", {
    d: "M10.64 2.768a1 1 0 1 0-1.28-1.536l-3 2.5a1 1 0 0 0 1.28 1.536l3-2.5z"
  }), React.createElement("path", {
    d: "M9.36 2.768a1 1 0 1 1 1.28-1.536l3 2.5a1 1 0 1 1-1.28 1.536l-3-2.5z"
  }), React.createElement("path", {
    d: "M13 9a1 1 0 1 1 0-2h1c1.623 0 3 1.165 3 2.692v7.616C17 18.835 15.623 20 14 20H6c-1.623 0-3-1.165-3-2.692V9.692C3 8.165 4.377 7 6 7h1a1 1 0 0 1 0 2H6c-.586 0-1 .35-1 .692v7.616c0 .342.414.692 1 .692h8c.586 0 1-.35 1-.692V9.692C15 9.35 14.586 9 14 9h-1z"
  })));
};

module.exports.SmartphoneNotchPrint = function SmartphoneNotchPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M6 2.5A1.5 1.5 0 0 1 7.5 1h9A1.5 1.5 0 0 1 18 2.5v16a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 18.5v-16z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5.5.5A1.5 1.5 0 0 0 4 2v16a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 16 18V2A1.5 1.5 0 0 0 14.5.5h-9zM5 2a.5.5 0 0 1 .5-.5H7v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1h1.5a.5.5 0 0 1 .5.5v16a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 5 18V2z",
    "clip-rule": "evenodd"
  })));
};

module.exports.SmartphoneNotch = function SmartphoneNotch(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6 0h9c1.105 0 2 .943 2 2.105v15.79C17 19.057 16.105 20 15 20H6c-1.105 0-2-.943-2-2.105V2.105C4 .943 4.895 0 6 0zm1 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1v1.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V2H7z",
    "clip-rule": "evenodd"
  }));
};

module.exports.SmartphonePrint = function SmartphonePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M6 2.583C6 1.71 6.672 1 7.5 1h9c.828 0 1.5.709 1.5 1.583v15.834C18 19.29 17.328 20 16.5 20h-9c-.828 0-1.5-.709-1.5-1.583V2.583z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.5 2.54c0-.298.224-.54.5-.54h8c.276 0 .5.242.5.54v12.42c0 .298-.224.54-.5.54H6c-.276 0-.5-.242-.5-.54V2.54z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M4 2.083C4 1.21 4.672.5 5.5.5h9c.828 0 1.5.709 1.5 1.583v15.834c0 .874-.672 1.583-1.5 1.583h-9c-.828 0-1.5-.709-1.5-1.583V2.083zm1.5-.527c-.276 0-.5.236-.5.527v15.834c0 .291.224.527.5.527h9c.276 0 .5-.236.5-.527V2.083a.514.514 0 0 0-.5-.527h-9z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M9 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Smartphone = function Smartphone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.25 3a.25.25 0 0 1 .25-.25h7a.25.25 0 0 1 .25.25v12a.25.25 0 0 1-.25.25h-7a.25.25 0 0 1-.25-.25V3z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 0h-9c-1.105 0-2 .943-2 2.105v15.79c0 1.162.895 2.105 2 2.105h9c1.105 0 2-.943 2-2.105V2.105C16.5.943 15.605 0 14.5 0zm-9 18V2h9v16h-9z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M10.5 16.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M9 16.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Smartphone2Print = function Smartphone2Print(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M7.636 1h8.728C17.267 1 18 1.672 18 2.5v16c0 .828-.733 1.5-1.636 1.5H7.636C6.733 20 6 19.328 6 18.5v-16C6 1.672 6.733 1 7.636 1z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14.5.5h-9A1.5 1.5 0 0 0 4 2v16a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 16 18V2A1.5 1.5 0 0 0 14.5.5zM5 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v16a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 5 18V2z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  })));
};

module.exports.Smartphone2 = function Smartphone2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 0h-9a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-9 18V2h9v16h-9z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M10 17.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
  })));
};

module.exports.SoftDrinkPrint = function SoftDrinkPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M8.59 4.5h6.821a2 2 0 0 1 1.985 2.242l-1.217 10a2 2 0 0 1-1.985 1.758H9.809a2 2 0 0 1-1.985-1.758l-1.22-10A2 2 0 0 1 8.59 4.5z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M13.411 4.5H6.589a2.001 2.001 0 0 0-1.985 2.242l1.22 10A2 2 0 0 0 7.81 18.5h4.385a2 2 0 0 0 1.985-1.758l1.217-10A2 2 0 0 0 13.411 4.5zM6.468 5.507A1 1 0 0 1 6.59 5.5h6.822a1 1 0 0 1 .993 1.12l-1.218 10a1 1 0 0 1-.992.88H7.809a1 1 0 0 1-.992-.879l-1.22-10a1 1 0 0 1 .871-1.114z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M8.978 14.647a.5.5 0 1 1-.956-.294l4-13a.5.5 0 1 1 .956.294l-4 13z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.5 10a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1h-9z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.379 1.985a.5.5 0 0 1 .242-.97l4 1a.5.5 0 0 1-.242.97l-4-1z"
  })));
};

module.exports.SoftDrink = function SoftDrink(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.411 4H6.589a2.502 2.502 0 0 0-2.481 2.803l1.22 10A2.5 2.5 0 0 0 7.809 19h4.385a2.5 2.5 0 0 0 2.481-2.198l1.218-10A2.5 2.5 0 0 0 13.41 4zM6.529 6.004A.5.5 0 0 1 6.589 6h6.822a.5.5 0 0 1 .496.56l-1.217 10a.5.5 0 0 1-.496.44H7.809a.5.5 0 0 1-.496-.44l-1.22-10a.5.5 0 0 1 .436-.556z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M9.217 14.72a.75.75 0 0 1-1.434-.44l4-13a.75.75 0 1 1 1.434.44l-4 13z"
  }), React.createElement("path", {
    d: "M5.5 10.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5h-9z"
  }), React.createElement("path", {
    d: "M12.318 2.228a.75.75 0 0 1 .364-1.456l4 1a.75.75 0 1 1-.364 1.456l-4-1z"
  })));
};

module.exports.SortPrint = function SortPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M11.44 9.56a1.5 1.5 0 0 1 0-2.12l3-3a1.5 1.5 0 0 1 2.12 2.12l-3 3a1.5 1.5 0 0 1-2.12 0z"
  }), React.createElement("path", {
    d: "M19.56 9.56a1.5 1.5 0 0 1-2.12 0l-3-3a1.5 1.5 0 0 1 2.12-2.12l3 3a1.5 1.5 0 0 1 0 2.12z"
  }), React.createElement("path", {
    d: "M15.5 6A1.5 1.5 0 0 1 17 7.5v8a1.5 1.5 0 0 1-3 0v-8A1.5 1.5 0 0 1 15.5 6z"
  }), React.createElement("path", {
    d: "M11.56 13.44a1.5 1.5 0 0 1 0 2.12l-3 3a1.5 1.5 0 0 1-2.12-2.12l3-3a1.5 1.5 0 0 1 2.12 0z"
  }), React.createElement("path", {
    d: "M3.44 13.44a1.5 1.5 0 0 1 2.12 0l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1 0-2.12z"
  }), React.createElement("path", {
    d: "M7.5 17A1.5 1.5 0 0 1 6 15.5v-8a1.5 1.5 0 1 1 3 0v8A1.5 1.5 0 0 1 7.5 17z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M10.646 7.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M17.354 7.354a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14 4a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 14 4z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.354 12.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M2.646 12.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6 16a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 1 0v9.5a.5.5 0 0 1-.5.5z"
  })));
};

module.exports.Sort = function Sort(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M10.293 7.707a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0z"
  }), React.createElement("path", {
    d: "M17.707 7.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
  }), React.createElement("path", {
    d: "M14 5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1z"
  }), React.createElement("path", {
    d: "M9.707 12.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0z"
  }), React.createElement("path", {
    d: "M2.293 12.293a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414z"
  }), React.createElement("path", {
    d: "M6 15a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1z"
  })));
};

module.exports.SpeakerHighPrint = function SpeakerHighPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.295 13.54H3a.5.5 0 0 1-.5-.5v-5.2a.5.5 0 0 1 .5-.5h3.4l4.272-3.717A.5.5 0 0 1 11.5 4v13a.5.5 0 0 1-.83.376l-4.375-3.835z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M13.652 13.758a1 1 0 1 1-1.304-1.516 1.23 1.23 0 0 0 .083-.079c.118-.123.227-.281.316-.47A2.8 2.8 0 0 0 13 10.5c0-.692-.227-1.308-.569-1.663a1.217 1.217 0 0 0-.083-.079 1 1 0 0 1 1.304-1.516c.075.065.148.134.219.206C14.589 8.193 15 9.31 15 10.5c0 .732-.155 1.44-.447 2.053-.18.378-.41.716-.682.999-.07.072-.144.142-.22.206z"
  }), React.createElement("path", {
    d: "M14.549 16.836a1 1 0 1 1-1.097-1.672 5.761 5.761 0 0 0 1.585-1.553 5.565 5.565 0 0 0 .719-1.486 5.464 5.464 0 0 0 .217-2.175 5.474 5.474 0 0 0-.936-2.56 5.635 5.635 0 0 0-1.132-1.224 5.766 5.766 0 0 0-.453-.33 1 1 0 1 1 1.097-1.672 7.79 7.79 0 0 1 1.685 1.498 7.621 7.621 0 0 1 1.175 1.917 7.488 7.488 0 0 1 0 5.842 7.533 7.533 0 0 1-1.175 1.917 7.679 7.679 0 0 1-1.686 1.498z"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M9.672 2.123 5.399 5.84H2a.5.5 0 0 0-.5.5v5.2a.5.5 0 0 0 .5.5h3.295l4.375 3.835a.5.5 0 0 0 .83-.376v-13a.5.5 0 0 0-.828-.377zM5.884 6.745 9.5 3.598v10.799L6.014 11.34a.5.5 0 0 0-.458-.3H2.5v-4.2h2.894a.492.492 0 0 0 .49-.096z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.326 11.88a.5.5 0 0 1-.652-.76c.04-.033.079-.07.117-.11.157-.162.295-.366.407-.602.195-.409.302-.896.302-1.408 0-.817-.273-1.558-.709-2.01a1.738 1.738 0 0 0-.117-.11.5.5 0 0 1 .652-.76c.064.056.125.114.185.176.624.647.989 1.639.989 2.704 0 .66-.14 1.293-.399 1.838-.157.33-.356.624-.59.866a2.76 2.76 0 0 1-.185.175z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14.274 14.918a.5.5 0 0 1-.548-.836 6.278 6.278 0 0 0 1.359-1.208 6.125 6.125 0 0 0 .942-1.537A5.939 5.939 0 0 0 16.5 9a6.053 6.053 0 0 0-.267-1.773 5.937 5.937 0 0 0-.783-1.62 6.125 6.125 0 0 0-1.232-1.33 6.291 6.291 0 0 0-.492-.359.5.5 0 0 1 .548-.836 7.266 7.266 0 0 1 2.002 1.961 7.1 7.1 0 0 1 .913 1.889A6.956 6.956 0 0 1 17.5 9a7.04 7.04 0 0 1-.311 2.068 6.997 6.997 0 0 1-1.338 2.45 7.21 7.21 0 0 1-1.577 1.4z"
  })));
};

module.exports.SpeakerHigh = function SpeakerHigh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "m10.334 1.754-4.68 4.178H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.535l4.796 4.312c.644.578 1.669.122 1.669-.744v-15c0-.864-1.021-1.321-1.666-.746zM6.666 7.709 10 4.733v10.523l-3.126-2.81A1 1 0 0 0 6 11.932H3v-4h2.751c.302.079.642.02.915-.223z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M15.489 13.069a.75.75 0 1 1-.978-1.138c.034-.029.067-.06.1-.094.138-.143.261-.324.362-.536A3.05 3.05 0 0 0 15.25 10c0-.754-.25-1.433-.639-1.837a1.488 1.488 0 0 0-.1-.094.75.75 0 1 1 .978-1.138c.07.06.137.124.202.191.67.696 1.059 1.75 1.059 2.878 0 .696-.147 1.366-.423 1.945-.168.355-.383.67-.636.933a2.942 2.942 0 0 1-.202.19z"
  }), React.createElement("path", {
    d: "M16.411 16.127a.75.75 0 0 1-.822-1.254 6.032 6.032 0 0 0 1.304-1.16 5.91 5.91 0 0 0 .904-1.474 5.72 5.72 0 0 0 .425-2.813 5.732 5.732 0 0 0-1.329-3.14 5.968 5.968 0 0 0-1.304-1.159.75.75 0 1 1 .822-1.254 7.51 7.51 0 0 1 2.071 2.03 7.32 7.32 0 0 1 .945 1.955 7.21 7.21 0 0 1 .287 2.865 7.248 7.248 0 0 1-2.166 4.49 7.515 7.515 0 0 1-1.137.914z"
  })));
};

module.exports.SpeakerLowPrint = function SpeakerLowPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.295 13.54H3a.5.5 0 0 1-.5-.5v-5.2a.5.5 0 0 1 .5-.5h3.4l4.272-3.717A.5.5 0 0 1 11.5 4v13a.5.5 0 0 1-.83.376l-4.375-3.835z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M13.652 13.758a1 1 0 1 1-1.304-1.516c.028-.024.056-.05.083-.079.118-.123.227-.281.316-.47A2.8 2.8 0 0 0 13 10.5c0-.692-.227-1.308-.569-1.663a1.24 1.24 0 0 0-.083-.079 1 1 0 1 1 1.304-1.516c.075.065.148.134.219.206C14.589 8.193 15 9.31 15 10.5c0 .732-.155 1.44-.447 2.053-.18.378-.41.716-.682.999-.07.072-.144.142-.22.206z"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M9.672 2.123 5.399 5.84H2a.5.5 0 0 0-.5.5v5.2a.5.5 0 0 0 .5.5h3.295l4.375 3.835a.5.5 0 0 0 .83-.376v-13a.5.5 0 0 0-.828-.377zM5.884 6.745 9.5 3.598v10.799L6.014 11.34a.5.5 0 0 0-.458-.3H2.5v-4.2h2.894a.492.492 0 0 0 .49-.096z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.326 11.88a.5.5 0 0 1-.652-.76c.04-.033.079-.07.117-.11.157-.162.295-.366.407-.602.195-.409.302-.896.302-1.408 0-.817-.273-1.558-.709-2.01a1.714 1.714 0 0 0-.117-.11.5.5 0 0 1 .652-.76c.064.056.125.114.185.176.624.647.989 1.639.989 2.704 0 .66-.14 1.293-.399 1.838-.157.33-.356.624-.59.866a2.76 2.76 0 0 1-.185.175z"
  })));
};

module.exports.SpeakerLow = function SpeakerLow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "m10.334 1.754-4.68 4.178H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.535l4.796 4.312c.644.578 1.669.122 1.669-.744v-15c0-.864-1.021-1.321-1.666-.746zM6.666 7.709 10 4.733v10.523l-3.126-2.81A1 1 0 0 0 6 11.932H3v-4h2.751c.302.079.642.02.915-.223z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M15.489 13.069a.75.75 0 0 1-.978-1.138c.034-.029.067-.06.1-.094.138-.143.261-.324.362-.536A3.05 3.05 0 0 0 15.25 10c0-.754-.25-1.433-.639-1.837a1.464 1.464 0 0 0-.1-.094.75.75 0 1 1 .978-1.138c.07.06.137.124.202.191.67.696 1.059 1.75 1.059 2.878 0 .696-.147 1.366-.423 1.945-.168.355-.383.67-.636.933a2.964 2.964 0 0 1-.202.19z"
  })));
};

module.exports.SpeakerOffPrint = function SpeakerOffPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.295 13.54H3a.5.5 0 0 1-.5-.5v-5.2a.5.5 0 0 1 .5-.5h3.4l4.272-3.717A.5.5 0 0 1 11.5 4v13a.5.5 0 0 1-.83.376l-4.375-3.835z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M13.652 13.758a1 1 0 1 1-1.304-1.516c.028-.024.056-.05.083-.079.118-.123.227-.281.316-.47A2.8 2.8 0 0 0 13 10.5c0-.692-.227-1.308-.569-1.663a1.24 1.24 0 0 0-.083-.079 1 1 0 1 1 1.304-1.516c.075.065.148.134.219.206C14.589 8.193 15 9.31 15 10.5c0 .732-.155 1.44-.447 2.053-.18.378-.41.716-.682.999-.07.072-.144.142-.22.206z"
  }), React.createElement("path", {
    d: "M14.548 16.836a1 1 0 1 1-1.097-1.672 5.761 5.761 0 0 0 1.586-1.553 5.59 5.59 0 0 0 .719-1.486A5.436 5.436 0 0 0 16 10.5a5.575 5.575 0 0 0-.244-1.625 5.477 5.477 0 0 0-.719-1.486 5.66 5.66 0 0 0-1.132-1.223 5.766 5.766 0 0 0-.454-.33 1 1 0 0 1 1.097-1.672 7.754 7.754 0 0 1 2.14 2.097 7.59 7.59 0 0 1 .978 2.023 7.463 7.463 0 0 1 .297 2.963 7.478 7.478 0 0 1-1.274 3.492 7.65 7.65 0 0 1-1.53 1.653c-.196.158-.4.306-.61.444z"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M9.672 2.123 5.399 5.84H2a.5.5 0 0 0-.5.5v5.2a.5.5 0 0 0 .5.5h3.295l4.375 3.835a.5.5 0 0 0 .83-.376v-13a.5.5 0 0 0-.828-.377zM5.884 6.745 9.5 3.598v10.799L6.014 11.34a.5.5 0 0 0-.458-.3H2.5v-4.2h2.894a.492.492 0 0 0 .49-.096z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M13.326 11.88a.5.5 0 0 1-.652-.76c.04-.033.079-.07.117-.11.157-.162.295-.366.407-.602.195-.409.302-.896.302-1.408 0-.817-.273-1.558-.709-2.01a1.714 1.714 0 0 0-.117-.11.5.5 0 0 1 .652-.76c.064.056.125.114.185.176.624.647.989 1.639.989 2.704 0 .66-.14 1.293-.399 1.838-.157.33-.356.624-.59.866a2.76 2.76 0 0 1-.185.175z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14.274 14.918a.5.5 0 0 1-.548-.836 6.241 6.241 0 0 0 2.04-2.204 6 6 0 0 0-.681-6.753 6.213 6.213 0 0 0-1.36-1.207.5.5 0 0 1 .55-.836 7.264 7.264 0 0 1 2 1.961 7.1 7.1 0 0 1 .914 1.889 6.956 6.956 0 0 1 .276 2.766 6.988 6.988 0 0 1-1.614 3.82 7.187 7.187 0 0 1-1.577 1.4z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M1.682 3.386a.5.5 0 1 1 .636-.772l17 14a.5.5 0 0 1-.636.772l-17-14z"
  })));
};

module.exports.SpeakerOff = function SpeakerOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "m10.334 1.754-4.68 4.178H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.535l4.796 4.312c.644.578 1.669.122 1.669-.744v-15c0-.864-1.021-1.321-1.666-.746zM6.666 7.709 10 4.733v10.523l-3.126-2.81A1 1 0 0 0 6 11.932H3v-4h2.751c.302.079.642.02.915-.223z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M15.489 13.069a.75.75 0 0 1-.978-1.138c.034-.029.067-.06.1-.094.138-.143.261-.324.362-.536A3.05 3.05 0 0 0 15.25 10c0-.754-.25-1.433-.639-1.837a1.464 1.464 0 0 0-.1-.094.75.75 0 1 1 .978-1.138c.07.06.137.124.202.191.67.696 1.059 1.75 1.059 2.878 0 .696-.147 1.366-.423 1.945-.168.355-.383.67-.636.933a2.964 2.964 0 0 1-.202.19z"
  }), React.createElement("path", {
    d: "M16.411 16.127a.75.75 0 0 1-.822-1.254 6.032 6.032 0 0 0 1.304-1.16 5.91 5.91 0 0 0 .904-1.474 5.72 5.72 0 0 0 .425-2.813 5.732 5.732 0 0 0-1.329-3.14 5.968 5.968 0 0 0-1.304-1.159.75.75 0 1 1 .822-1.254 7.51 7.51 0 0 1 2.071 2.03 7.32 7.32 0 0 1 .945 1.955 7.21 7.21 0 0 1 .287 2.865 7.248 7.248 0 0 1-2.166 4.49 7.515 7.515 0 0 1-1.137.914z"
  }), React.createElement("path", {
    d: "M1.364 3.772a1 1 0 0 1 1.272-1.544l17 14a1 1 0 0 1-1.272 1.544l-17-14z"
  })));
};

module.exports.SquareFilled = function SquareFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M6 4.5h8A1.5 1.5 0 0 1 15.5 6v8a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 14V6A1.5 1.5 0 0 1 6 4.5z"
  }));
};

module.exports.SquarePrint = function SquarePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M8 7h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 8 7z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14 5.5H6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5zm-7.5 8v-7h7v7h-7z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Square = function Square(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14 5H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-7 8V7h6v6H7z",
    "clip-rule": "evenodd"
  }));
};

module.exports.StarFilled = function StarFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m10 15.97-4.295 1.915a1 1 0 0 1-1.402-1.018l.494-4.677L1.65 8.697a1 1 0 0 1 .535-1.647l4.6-.976L9.134 2a1 1 0 0 1 1.732 0l2.35 4.074 4.6.976a1 1 0 0 1 .535 1.647l-3.148 3.494.494 4.676a1 1 0 0 1-1.402 1.018L10 15.972z"
  }));
};

module.exports.StarPrint = function StarPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.5 15.9 6.865 18l.533-5.13L4 9.04l4.965-1.07L11.5 3.5l2.535 4.469L19 9.039l-3.398 3.831.533 5.13-4.635-2.1z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.571 17.455 10 15.448l4.429 2.007a.5.5 0 0 0 .704-.507l-.51-4.91 3.251-3.668a.5.5 0 0 0-.269-.82L12.86 6.527l-2.425-4.274a.5.5 0 0 0-.87 0L7.14 6.527 2.395 7.55a.5.5 0 0 0-.27.82l3.253 3.667-.51 4.911a.5.5 0 0 0 .703.507zm4.223-3.01-3.842 1.74.443-4.263a.5.5 0 0 0-.123-.384l-2.83-3.191 4.128-.89a.5.5 0 0 0 .33-.242L10 3.513l2.1 3.702a.5.5 0 0 0 .33.242l4.128.89-2.83 3.191a.5.5 0 0 0-.123.384l.443 4.263-3.842-1.74a.5.5 0 0 0-.412 0z"
  })));
};

module.exports.Star = function Star(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.705 17.886 10 15.97l4.295 1.915a1 1 0 0 0 1.402-1.019l-.494-4.677 3.148-3.493a1 1 0 0 0-.535-1.647l-4.6-.976L10.866 2a1 1 0 0 0-1.732 0l-2.35 4.074-4.6.976a1 1 0 0 0-.535 1.647l3.148 3.494-.494 4.676a1 1 0 0 0 1.402 1.018zm3.888-3.924-3.119 1.39.359-3.395a1 1 0 0 0-.252-.774L4.295 8.646l3.34-.708a1 1 0 0 0 .66-.478L10 4.502l1.706 2.958a1 1 0 0 0 .659.478l3.34.708-2.286 2.537a1 1 0 0 0-.252.774l.359 3.396-3.119-1.39a1 1 0 0 0-.814 0z",
    "clip-rule": "evenodd"
  }));
};

module.exports.SunFilled = function SunFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M13.5 10a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
  }), React.createElement("path", {
    d: "M.5 10a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1z"
  }), React.createElement("path", {
    d: "M15.5 10a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1z"
  }), React.createElement("path", {
    d: "m15.414 14 1.414 1.414a1 1 0 0 1-1.414 1.414L14 15.414A1 1 0 0 1 15.414 14z"
  }), React.createElement("path", {
    d: "M3 3a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L3 4.414A1 1 0 0 1 3 3z"
  }), React.createElement("path", {
    d: "M10 15.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"
  }), React.createElement("path", {
    d: "M10 .5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"
  }), React.createElement("path", {
    d: "M16.828 3a1 1 0 0 1 0 1.414l-1.414 1.414A1 1 0 1 1 14 4.414L15.414 3a1 1 0 0 1 1.414 0z"
  }), React.createElement("path", {
    d: "M5.828 14a1 1 0 0 1 0 1.414l-1.414 1.414A1 1 0 0 1 3 15.414L4.414 14a1 1 0 0 1 1.414 0z"
  })));
};

module.exports.SunPrint = function SunPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M14 10.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
  }), React.createElement("path", {
    d: "M1 10.5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1z"
  }), React.createElement("path", {
    d: "M16 10.5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1z"
  }), React.createElement("path", {
    d: "M14.5 14.5a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L14.5 15.914a1 1 0 0 1 0-1.414z"
  }), React.createElement("path", {
    d: "M3.5 3.5a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414L3.5 4.914a1 1 0 0 1 0-1.414z"
  }), React.createElement("path", {
    d: "M10.5 16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"
  }), React.createElement("path", {
    d: "M10.5 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1z"
  }), React.createElement("path", {
    d: "M17.328 3.5a1 1 0 0 1 0 1.414l-1.414 1.414A1 1 0 1 1 14.5 4.914L15.914 3.5a1 1 0 0 1 1.414 0z"
  }), React.createElement("path", {
    d: "M6.328 14.5a1 1 0 0 1 0 1.414l-1.414 1.414A1 1 0 1 1 3.5 15.914L4.914 14.5a1 1 0 0 1 1.414 0z"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10 13.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z",
    "clip-rule": "evenodd"
  }), React.createElement("rect", {
    width: "1",
    height: "3",
    x: "1",
    y: "10.5",
    fill: "#000",
    rx: ".5",
    transform: "rotate(-90 1 10.5)"
  }), React.createElement("rect", {
    width: "1",
    height: "3",
    x: "16",
    y: "10.5",
    fill: "#000",
    rx: ".5",
    transform: "rotate(-90 16 10.5)"
  }), React.createElement("rect", {
    width: "1",
    height: "3",
    x: "14",
    y: "14.707",
    fill: "#000",
    rx: ".5",
    transform: "rotate(-45 14 14.707)"
  }), React.createElement("rect", {
    width: "1",
    height: "3",
    x: "3",
    y: "3.707",
    fill: "#000",
    rx: ".5",
    transform: "rotate(-45 3 3.707)"
  }), React.createElement("rect", {
    width: "1",
    height: "3",
    x: "9.5",
    y: "16",
    fill: "#000",
    rx: ".5"
  }), React.createElement("rect", {
    width: "1",
    height: "3",
    x: "9.5",
    y: "1",
    fill: "#000",
    rx: ".5"
  }), React.createElement("rect", {
    width: "1",
    height: "3",
    x: "16.121",
    y: "3",
    fill: "#000",
    rx: ".5",
    transform: "rotate(45 16.121 3)"
  }), React.createElement("rect", {
    width: "1",
    height: "3",
    x: "5.121",
    y: "14",
    fill: "#000",
    rx: ".5",
    transform: "rotate(45 5.121 14)"
  })));
};

module.exports.Sun = function Sun(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M.5 10a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1z"
  }), React.createElement("path", {
    d: "M15.5 10a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1z"
  }), React.createElement("path", {
    d: "M14 14a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L14 15.414A1 1 0 0 1 14 14z"
  }), React.createElement("path", {
    d: "M3 3a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L3 4.414A1 1 0 0 1 3 3z"
  }), React.createElement("path", {
    d: "M10 15.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"
  }), React.createElement("path", {
    d: "M10 .5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"
  }), React.createElement("path", {
    d: "M16.828 3a1 1 0 0 1 0 1.414l-1.414 1.414A1 1 0 1 1 14 4.414L15.414 3a1 1 0 0 1 1.414 0z"
  }), React.createElement("path", {
    d: "m5.828 15.414-1.414 1.414A1 1 0 1 1 3 15.414L4.414 14a1 1 0 0 1 1.414 1.414z"
  })));
};

module.exports.SyringePrint = function SyringePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9.555 18.494a.75.75 0 1 1-1.06 1.06l-2.477-2.476-.69.69.841.84a.75.75 0 1 1-1.06 1.061L2.28 16.841a.75.75 0 0 1 1.061-1.06l.927.926.69-.69-2.428-2.426a.75.75 0 0 1 1.061-1.06l1.068 1.067a1.99 1.99 0 0 1 .548-1.027l6.979-6.979a2 2 0 0 1 1.435-.585l1.375.014c.27.003.528.06.763.16l2.71-2.711a.75.75 0 1 1 1.061 1.06l-2.712 2.713c.095.226.15.473.156.733l.032 1.407a2 2 0 0 1-.585 1.46l-6.971 6.97a1.99 1.99 0 0 1-1.027.549l1.132 1.132z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M3.207 11.571a2 2 0 0 0 0 2.829l1.414 1.414a2 2 0 0 0 2.829 0l6.97-6.971a2 2 0 0 0 .586-1.46l-.032-1.407a2 2 0 0 0-1.978-1.955l-1.375-.014a2 2 0 0 0-1.435.585l-6.979 6.98zm10.507-3.436-6.971 6.972a1 1 0 0 1-1.415 0l-1.414-1.415a1 1 0 0 1 0-1.414L10.893 5.3a1 1 0 0 1 .718-.292l1.374.014a1 1 0 0 1 .99.978l.031 1.407a1 1 0 0 1-.292.73z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.52 12.107a.5.5 0 1 1-.706.707l-1.415-1.415a.5.5 0 1 1 .708-.707l1.414 1.415z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M3.564 17.764a.5.5 0 0 1-.707.707L.328 15.942a.5.5 0 1 1 .708-.707l2.528 2.529z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M7.354 17.646a.5.5 0 1 1-.708.707l-6-6a.5.5 0 1 1 .708-.707l6 6z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.642 9.985a.5.5 0 0 1-.707.707L9.521 9.278a.5.5 0 0 1 .707-.707l1.414 1.414z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m2 17.457-.707-.707 2.457-2.457.707.707L2 17.457z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M16.854 1.354a.5.5 0 1 1 .707.707l-3 3a.5.5 0 1 1-.707-.707l3-3z"
  })));
};

module.exports.Syringe = function Syringe(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M4.354 10.717a2.5 2.5 0 0 0 0 3.536l1.414 1.414a2.5 2.5 0 0 0 3.535 0l6.971-6.97a2.5 2.5 0 0 0 .732-1.825l-.032-1.407a2.5 2.5 0 0 0-2.473-2.444l-1.374-.014a2.5 2.5 0 0 0-1.795.732l-6.978 6.979zM14.86 7.282l-6.97 6.971a.5.5 0 0 1-.708 0l-1.414-1.414a.5.5 0 0 1 0-.707l6.978-6.979a.5.5 0 0 1 .36-.146l1.374.014a.5.5 0 0 1 .495.489l.032 1.407a.5.5 0 0 1-.147.365z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M11.02 11.607a.5.5 0 1 1-.706.707l-1.415-1.415a.5.5 0 1 1 .708-.707l1.414 1.415z"
  }), React.createElement("path", {
    d: "M5.718 16.91a1 1 0 1 1-1.415 1.414l-2.828-2.828a1 1 0 1 1 1.414-1.415l2.829 2.829z"
  }), React.createElement("path", {
    d: "M9.385 16.67a1 1 0 1 1-1.414 1.415l-5.964-5.964a1 1 0 1 1 1.414-1.414l5.964 5.964z"
  }), React.createElement("path", {
    d: "M13.142 9.485a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 1 1 .707-.707l1.414 1.414z"
  }), React.createElement("path", {
    d: "M5 16.414 3.586 15 5 13.586 6.414 15 5 16.414z"
  }), React.createElement("path", {
    d: "M17.97.97a.75.75 0 0 1 1.061 1.061l-3 3a.75.75 0 0 1-1.06-1.06l3-3z"
  })));
};

module.exports.TShirtPrint = function TShirtPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "m4.832 10.426-1.166.582a.5.5 0 0 1-.712-.338l-.942-4.238a.5.5 0 0 1 .135-.463l2.246-2.24A2.5 2.5 0 0 1 6.158 3h2.007a.5.5 0 0 1 .493.415c.286 1.658 1.039 2.409 2.34 2.409s2.055-.751 2.342-2.41A.5.5 0 0 1 13.833 3h2.007a2.5 2.5 0 0 1 1.765.73l2.248 2.24a.5.5 0 0 1 .135.462l-.944 4.236a.5.5 0 0 1-.712.338l-1.166-.58V17.5a2.5 2.5 0 0 1-2.5 2.5H7.332a2.5 2.5 0 0 1-2.5-2.5v-7.074z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m2.668 10.008 1.166-.582V16.5a2.5 2.5 0 0 0 2.5 2.5h7.335a2.5 2.5 0 0 0 2.5-2.5V9.425l1.166.581a.5.5 0 0 0 .71-.338l.945-4.236a.5.5 0 0 0-.135-.463l-2.248-2.24A2.5 2.5 0 0 0 14.842 2h-2.007a.5.5 0 0 0-.493.415c-.287 1.658-1.04 2.409-2.342 2.409-1.3 0-2.054-.751-2.34-2.409A.5.5 0 0 0 7.167 2H5.161a2.5 2.5 0 0 0-1.766.73L1.15 4.97a.5.5 0 0 0-.135.462l.943 4.238a.5.5 0 0 0 .711.338zM5.161 3h1.598C7.195 4.84 8.297 5.824 10 5.824S12.806 4.84 13.243 3h1.6a1.5 1.5 0 0 1 1.058.437l2.053 2.046-.745 3.343-1.317-.656a.5.5 0 0 0-.723.448V16.5a1.5 1.5 0 0 1-1.5 1.5H6.333a1.5 1.5 0 0 1-1.5-1.5V8.618a.5.5 0 0 0-.724-.448l-1.316.658-.744-3.345L4.1 3.438A1.5 1.5 0 0 1 5.161 3z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12 10.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2z"
  })));
};

module.exports.TShirt = function TShirt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M2.448 10.396 3 10.12V17a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6.882l.553.276a1 1 0 0 0 1.423-.677l1-4.5a1 1 0 0 0-.269-.924l-2.414-2.414A3 3 0 0 0 15.172 1H13a1 1 0 0 0-.986.83C11.748 3.382 11.129 4 10 4c-1.13 0-1.747-.618-2.013-2.17A1 1 0 0 0 7 1H4.829a3 3 0 0 0-2.122.88L.295 4.292a1 1 0 0 0-.27.923l.999 4.503a1 1 0 0 0 1.424.678zm1.673-7.103A1 1 0 0 1 4.83 3h1.377C6.777 4.928 8.078 6 10 6c1.922 0 3.223-1.072 3.795-3h1.378a1 1 0 0 1 .707.293l2.026 2.026-.603 2.714-.855-.427A1 1 0 0 0 15 8.5V17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8.5a1 1 0 0 0-1.448-.894l-.853.428-.602-2.715 2.024-2.026z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M11.5 10.5a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2h-2z"
  })));
};

module.exports.TaxiPrint = function TaxiPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M13 3.5a1.5 1.5 0 1 0-2.915.5H7.671a2 2 0 0 0-1.94 1.515L4.6 10.04A2 2 0 0 0 3 12v3a2 2 0 0 0 1.164 1.817A1.494 1.494 0 0 0 4 17.5v1a1.5 1.5 0 0 0 3 0v-1c0-.175-.03-.344-.085-.5h9.17a1.497 1.497 0 0 0-.085.5v1a1.5 1.5 0 0 0 3 0v-1c0-.246-.06-.478-.164-.683A2 2 0 0 0 20 15v-3a2 2 0 0 0-1.6-1.96l-1.13-4.525A2 2 0 0 0 15.328 4h-2.414c.055-.156.085-.325.085-.5z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.171 3a2 2 0 0 0-1.94 1.515L3.1 9.04A2 2 0 0 0 1.5 11v3a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-3a2 2 0 0 0-1.6-1.96l-1.13-4.525A2 2 0 0 0 13.828 3H6.17zM3.5 10a.5.5 0 0 0 .485-.379l1.216-4.864A1 1 0 0 1 6.171 4h7.658a1 1 0 0 1 .97.757l1.216 4.864A.5.5 0 0 0 16.5 10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M15 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.5 16.5a1.5 1.5 0 0 0-3 0v1a1.5 1.5 0 0 0 3 0v-1zm-2 0a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M17.5 16.5a1.5 1.5 0 0 0-3 0v1a1.5 1.5 0 0 0 3 0v-1zm-2 0a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.648 5H7.352a1.5 1.5 0 0 0-1.457 1.143l-.49 2A1.5 1.5 0 0 0 6.862 10h6.276a1.5 1.5 0 0 0 1.457-1.857l-.49-2A1.5 1.5 0 0 0 12.647 5zM6.866 6.381A.5.5 0 0 1 7.352 6h5.296a.5.5 0 0 1 .485.381l.49 2a.5.5 0 0 1-.485.619H6.862a.5.5 0 0 1-.486-.619l.49-2z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.5 2.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm-2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0z"
  })));
};

module.exports.Taxi = function Taxi(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.171 3a2.5 2.5 0 0 0-2.425 1.894l-1.06 4.242A2.501 2.501 0 0 0 1 11.5v3A2.5 2.5 0 0 0 3.5 17h13a2.5 2.5 0 0 0 2.5-2.5v-3a2.501 2.501 0 0 0-1.685-2.364l-1.06-4.242A2.5 2.5 0 0 0 13.828 3H6.17zM3.5 11a1 1 0 0 0 .97-.758L5.686 5.38A.5.5 0 0 1 6.171 5h7.659a.5.5 0 0 1 .485.379l1.216 4.864a1 1 0 0 0 .97.757.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M16.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
  }), React.createElement("path", {
    d: "M6.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
  }), React.createElement("path", {
    d: "M4 15.5A1.5 1.5 0 0 1 5.5 17v1a1.5 1.5 0 0 1-3 0v-1A1.5 1.5 0 0 1 4 15.5z"
  }), React.createElement("path", {
    d: "M16 15.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-3 0v-1a1.5 1.5 0 0 1 1.5-1.5z"
  }), React.createElement("path", {
    d: "M10 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.15 7.08a2 2 0 0 0-1.955-1.58h-4.39a2 2 0 0 0-1.956 1.58l-.429 2a2 2 0 0 0 1.956 2.42h5.248a1.999 1.999 0 0 0 1.955-2.42l-.429-2zM12.624 9.5H7.376l.429-2h4.39l.429 2z",
    "clip-rule": "evenodd"
  })));
};

module.exports.TelevisionPrint = function TelevisionPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m12 5.424 1.914-2.393c.625-.78 1.796.157 1.172.938L13.46 6H16a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H8.5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2.04L8.914 3.969c-.624-.781.547-1.718 1.172-.938L12 5.424z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M3.25 9v5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-7.5a3 3 0 0 0-3 3zm3 7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "m9.86 5.688 2-2.5c.416-.52 1.197.104.78.624l-2 2.5c-.416.52-1.197-.104-.78-.624z"
  }), React.createElement("path", {
    fill: "#000",
    d: "m8.86 6.312-2-2.5c-.417-.52.364-1.145.78-.624l2 2.5c.417.52-.364 1.145-.78.624z"
  })));
};

module.exports.Television = function Television(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M2 8v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3zm3 8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M11.28 5.625a1 1 0 0 1-1.56-1.25l2-2.5a1 1 0 0 1 1.56 1.25l-2 2.5z"
  }), React.createElement("path", {
    d: "M8.72 5.625a1 1 0 0 0 1.56-1.25l-2-2.5a1 1 0 0 0-1.56 1.25l2 2.5z"
  })));
};

module.exports.TextBubblePrint = function TextBubblePrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6.102a2 2 0 0 1-2 2h-7.55S8.364 18 7.705 18c-.66 0-1.056-1.898-1.056-1.898H6a2 2 0 0 1-2-2V8z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M1.5 12.102a2.5 2.5 0 0 0 2.5 2.5h.249c.307 1.238.741 1.898 1.455 1.898.603 0 1.519-.62 2.94-1.898H16a2.5 2.5 0 0 0 2.5-2.5V6A2.5 2.5 0 0 0 16 3.5H4A2.5 2.5 0 0 0 1.5 6v6.102zm1 0V6A1.5 1.5 0 0 1 4 4.5h12A1.5 1.5 0 0 1 17.5 6v6.102a1.5 1.5 0 0 1-1.5 1.5H8.257l-.143.13C6.834 14.898 5.96 15.5 5.704 15.5c-.092 0-.35-.463-.567-1.5l-.083-.398H4a1.5 1.5 0 0 1-1.5-1.5z",
    "clip-rule": "evenodd"
  }), React.createElement("circle", {
    cx: "7",
    cy: "9",
    r: "1",
    fill: "#000"
  }), React.createElement("circle", {
    cx: "10",
    cy: "9",
    r: "1",
    fill: "#000"
  }), React.createElement("circle", {
    cx: "13",
    cy: "9",
    r: "1",
    fill: "#000"
  })));
};

module.exports.TextBubble = function TextBubble(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("circle", {
    cx: "7",
    cy: "9",
    r: "1"
  }), React.createElement("circle", {
    cx: "10",
    cy: "9",
    r: "1"
  }), React.createElement("circle", {
    cx: "13",
    cy: "9",
    r: "1"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M1 6v6.102A3 3 0 0 0 3.864 15.1c.36 1.224.894 1.901 1.84 1.901.757 0 1.684-.609 3.13-1.898H16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3zm7.064 7.102-.286.26c-.864.786-1.543 1.304-1.869 1.522a5.58 5.58 0 0 1-.283-.986l-.166-.796H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6.102a1 1 0 0 1-1 1H8.064z",
    "clip-rule": "evenodd"
  })));
};

module.exports.ThumbsDownPrint = function ThumbsDownPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M19.31 12.11a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1v-5.5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v5.5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.81 12.11h2.5v-5.5h-2.5v5.5zm2.5 1a1 1 0 0 0 1-1v-5.5a1 1 0 0 0-1-1h-2.5a1 1 0 0 0-1 1v5.5a1 1 0 0 0 1 1h2.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.415 17.596a1 1 0 0 1-.822-1.15l.204-1.222a5.162 5.162 0 0 1 2.228-3.446l1.109 1.664a3.161 3.161 0 0 0-1.365 2.11l-.203 1.222a1 1 0 0 1-1.151.822z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.329 16.445a.167.167 0 0 0 .28-.078l1.94.485c-.408 1.635-2.443 2.199-3.635 1.007l-.042-.042a1 1 0 1 1 1.414-1.414l.043.042z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.572 13.14a1 1 0 0 1 .727 1.213l-.148.594a1.98 1.98 0 0 0-.058.547l.014.41c.007.2.084.39.216.538l-1.488 1.336a2.849 2.849 0 0 1-.727-1.805l-.014-.41a3.971 3.971 0 0 1 .117-1.102l.148-.594a1 1 0 0 1 1.213-.727z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.08 14.11a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M6.303 12.321c.242.484.736.789 1.276.789v2a3.427 3.427 0 0 1-3.065-1.894l-.33-.659a1 1 0 1 1 1.79-.894l.329.658z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M5.934 6.175a1 1 0 0 1 .58 1.29l-.54 1.426a3.899 3.899 0 0 0 .032 2.844l-1.854.75a5.899 5.899 0 0 1-.048-4.302l.54-1.427a1 1 0 0 1 1.29-.581z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.307 6.572a1.432 1.432 0 0 0-1.609.628l-.267.434a1 1 0 0 1-1.703-1.048l.267-.434A3.432 3.432 0 0 1 8.85 4.648l-.544 1.924z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.56 6.806a1 1 0 0 1-1.177.785l-5-1a1 1 0 0 1 .392-1.962l5 1a1 1 0 0 1 .785 1.177z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.58 13.61a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "m13.81 12.11-3 5-2.5-2.5-2.5-2.5-.5-2.5.5-3.5 7.5.5.5 5.5z"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14.1 10.081h2.5v-5.5h-2.5v5.5zm2.5 1a1 1 0 0 0 1-1v-5.5a1 1 0 0 0-1-1h-2.5a1 1 0 0 0-1 1v5.5a1 1 0 0 0 1 1h2.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M10.056 15.755a.55.55 0 0 1-.451-.632l.223-1.342a5.12 5.12 0 0 1 2.21-3.419l.61.914a4.021 4.021 0 0 0-1.736 2.685l-.224 1.342a.55.55 0 0 1-.632.452z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M8.384 15.42a.733.733 0 0 0 1.23-.34l1.065.266c-.345 1.381-2.065 1.858-3.071.851l-.047-.046a.55.55 0 1 1 .777-.777l.046.046z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M7.808 11.934a.55.55 0 0 1 .4.666l-.163.653c-.062.246-.089.5-.08.753l.015.451c.012.348.146.68.378.939l-.817.733a2.58 2.58 0 0 1-.658-1.634l-.016-.451a3.821 3.821 0 0 1 .112-1.058l.163-.652a.55.55 0 0 1 .666-.4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M7.95 12.467a.55.55 0 0 1-.55.55H5.753a.55.55 0 1 1 0-1.1H7.4a.55.55 0 0 1 .55.55z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M3.86 10.748a2.117 2.117 0 0 0 1.893 1.17v1.098a3.215 3.215 0 0 1-2.876-1.777l-.362-.723a.55.55 0 1 1 .983-.491l.361.723z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M3.75 4.264a.55.55 0 0 1 .32.708L3.475 6.54a4.832 4.832 0 0 0 .04 3.524l-1.019.412a5.93 5.93 0 0 1-.049-4.325l.594-1.568a.55.55 0 0 1 .708-.319z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M6.702 3.659a2.122 2.122 0 0 0-2.385.93l-.293.477a.55.55 0 1 1-.936-.576l.293-.477a3.22 3.22 0 0 1 3.62-1.411l-.3 1.057z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M12.882 4.336a.55.55 0 0 1-.646.431L6.743 3.67a.55.55 0 1 1 .216-1.077L12.45 3.69a.55.55 0 0 1 .43.646z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M12.34 11.369a.55.55 0 0 1-.55-.55V4.23a.55.55 0 1 1 1.098 0v6.59a.55.55 0 0 1-.549.55z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M14.35 6.081a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"
  })));
};

module.exports.ThumbsDown = function ThumbsDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M17.81 11.108a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1v-5.5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v5.5z"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.31 11.108h2.5v-5.5h-2.5v5.5zm2.5 1a1 1 0 0 0 1-1v-5.5a1 1 0 0 0-1-1h-2.5a1 1 0 0 0-1 1v5.5a1 1 0 0 0 1 1h2.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9.916 16.594a1 1 0 0 1-.822-1.15l.203-1.222a5.161 5.161 0 0 1 2.228-3.446l1.11 1.664a3.162 3.162 0 0 0-1.365 2.11l-.204 1.222a1 1 0 0 1-1.15.822z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.83 15.443a.167.167 0 0 0 .28-.078l1.94.485c-.408 1.635-2.444 2.198-3.635 1.007l-.042-.042A1 1 0 0 1 8.787 15.4l.042.042z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.073 12.138A1 1 0 0 1 8.8 13.35l-.148.594a1.979 1.979 0 0 0-.058.548l.014.41c.007.2.083.39.216.538l-1.488 1.336a2.848 2.848 0 0 1-.727-1.805l-.014-.41a3.97 3.97 0 0 1 .116-1.102l.149-.594a1 1 0 0 1 1.213-.727z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.58 13.108a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.804 11.319c.241.483.736.789 1.276.789v2a3.427 3.427 0 0 1-3.065-1.895l-.33-.658a1 1 0 0 1 1.79-.894l.329.658z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.434 5.173a1 1 0 0 1 .581 1.289l-.54 1.427a3.898 3.898 0 0 0 .032 2.843l-1.854.751a5.899 5.899 0 0 1-.049-4.302l.54-1.427a1 1 0 0 1 1.29-.581z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.808 5.57a1.432 1.432 0 0 0-1.61.628l-.266.434a1 1 0 0 1-1.704-1.048l.268-.434a3.432 3.432 0 0 1 3.856-1.505L6.808 5.57z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13.06 5.804a1 1 0 0 1-1.176.784l-5-1a1 1 0 1 1 .392-1.96l5 1a1 1 0 0 1 .785 1.176z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.08 12.608a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M14.56 7.108a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"
  })));
};

module.exports.ThumbsUpPrint = function ThumbsUpPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M3.75 9.75a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1v-5.5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M7.25 9.75h-2.5v5.5h2.5v-5.5zm-2.5-1a1 1 0 0 0-1 1v5.5a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 0-1-1h-2.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.645 4.264a1 1 0 0 1 .822 1.15l-.204 1.222a5.161 5.161 0 0 1-2.228 3.446L8.926 8.418a3.161 3.161 0 0 0 1.365-2.11l.203-1.222a1 1 0 0 1 1.151-.822z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.731 5.415a.167.167 0 0 0-.28.078l-1.94-.486c.408-1.634 2.443-2.198 3.635-1.006l.042.042a1 1 0 0 1-1.414 1.414l-.043-.042z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.488 8.72a1 1 0 0 1-.727-1.213l.148-.594a1.98 1.98 0 0 0 .058-.547l-.014-.41a.849.849 0 0 0-.216-.538l1.488-1.336c.447.498.704 1.137.727 1.805l.014.41a3.98 3.98 0 0 1-.117 1.102l-.148.594a1 1 0 0 1-1.213.727z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M12.98 7.75a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M16.757 9.539a1.427 1.427 0 0 0-1.276-.789v-2c1.298 0 2.484.733 3.065 1.894l.33.659a1 1 0 1 1-1.79.894l-.329-.658z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M17.127 15.685a1 1 0 0 1-.581-1.29l.54-1.426a3.9 3.9 0 0 0-.032-2.844l1.854-.75a5.898 5.898 0 0 1 .048 4.302l-.54 1.427a1 1 0 0 1-1.29.581z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.753 15.288a1.432 1.432 0 0 0 1.609-.628l.267-.434a1 1 0 0 1 1.703 1.048l-.267.434a3.432 3.432 0 0 1-3.856 1.504l.544-1.924z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.5 15.054a1 1 0 0 1 1.177-.785l5 1a1 1 0 0 1-.392 1.962l-5-1a1 1 0 0 1-.785-1.177z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.48 8.25a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "m9.25 9.75 3-5 2.5 2.5 2.5 2.5.5 2.5-.5 3.5-7.5-.5-.5-5.5z"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5.7 8.503H3.2v5.5h2.5v-5.5zm-2.5-1a1 1 0 0 0-1 1v5.5a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-5.5a1 1 0 0 0-1-1H3.2z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M9.744 2.83c.3.05.501.333.451.632l-.223 1.342a5.12 5.12 0 0 1-2.21 3.418l-.61-.914a4.022 4.022 0 0 0 1.736-2.685l.224-1.342a.55.55 0 0 1 .632-.451z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M11.416 3.164a.733.733 0 0 0-1.23.34l-1.065-.266c.345-1.38 2.065-1.857 3.071-.85l.047.046a.55.55 0 1 1-.777.777l-.046-.047z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M11.992 6.65a.55.55 0 0 1-.4-.665l.163-.653c.062-.246.089-.5.08-.753l-.015-.451a1.481 1.481 0 0 0-.378-.939l.817-.733a2.57 2.57 0 0 1 .658 1.634l.016.451a3.82 3.82 0 0 1-.112 1.058l-.163.652a.55.55 0 0 1-.666.4z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M11.85 6.118a.55.55 0 0 1 .55-.55h1.647a.55.55 0 0 1 0 1.099H12.4a.55.55 0 0 1-.55-.55z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M15.94 7.837a2.117 2.117 0 0 0-1.893-1.17V5.569c1.218 0 2.331.688 2.876 1.777l.362.723a.55.55 0 0 1-.983.491l-.361-.723z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M16.05 14.32a.55.55 0 0 1-.32-.707l.594-1.568a4.832 4.832 0 0 0-.04-3.524l1.019-.412a5.93 5.93 0 0 1 .049 4.325l-.594 1.568a.55.55 0 0 1-.708.319z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M13.098 14.926a2.122 2.122 0 0 0 2.385-.93l.293-.477a.55.55 0 1 1 .936.576l-.293.477a3.22 3.22 0 0 1-3.62 1.411l.3-1.057z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M6.918 14.248a.55.55 0 0 1 .646-.43l5.493 1.098a.55.55 0 1 1-.216 1.077L7.35 14.895a.55.55 0 0 1-.431-.646z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M7.46 7.216a.55.55 0 0 1 .55.55v6.59a.55.55 0 1 1-1.098 0v-6.59a.55.55 0 0 1 .549-.55z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.45 12.504a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  })));
};

module.exports.ThumbsUp = function ThumbsUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "M2.5 9a1 1 0 0 1 1-1H6a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1V9z"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6 9H3.5v5.5H6V9zM3.5 8a1 1 0 0 0-1 1v5.5a1 1 0 0 0 1 1H6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10.395 3.514a1 1 0 0 1 .822 1.15l-.204 1.222a5.161 5.161 0 0 1-2.228 3.446L7.676 7.668a3.161 3.161 0 0 0 1.365-2.11l.203-1.222a1 1 0 0 1 1.151-.822z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.481 4.665a.167.167 0 0 0-.28.078l-1.94-.486c.408-1.634 2.443-2.198 3.635-1.006l.042.042a1 1 0 0 1-1.414 1.414l-.043-.042z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.238 7.97a1 1 0 0 1-.727-1.213l.148-.594a1.98 1.98 0 0 0 .058-.547l-.014-.41a.849.849 0 0 0-.216-.538l1.488-1.336c.447.498.704 1.137.727 1.805l.014.41a3.98 3.98 0 0 1-.117 1.102l-.148.594a1 1 0 0 1-1.213.727z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.73 7a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.507 8.789A1.427 1.427 0 0 0 14.231 8V6c1.298 0 2.484.733 3.065 1.894l.33.659a1 1 0 1 1-1.79.894l-.329-.658z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.877 14.935a1 1 0 0 1-.582-1.29l.54-1.426a3.9 3.9 0 0 0-.031-2.844l1.854-.75a5.898 5.898 0 0 1 .048 4.302l-.54 1.427a1 1 0 0 1-1.29.581z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13.503 14.538a1.432 1.432 0 0 0 1.609-.628l.267-.434a1 1 0 0 1 1.703 1.048l-.267.434a3.432 3.432 0 0 1-3.856 1.504l.544-1.924z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7.25 14.304a1 1 0 0 1 1.177-.785l5 1a1 1 0 0 1-.392 1.962l-5-1a1 1 0 0 1-.785-1.177z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.23 7.5a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#fff",
    d: "M5.75 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  })));
};

module.exports.TimesPrint = function TimesPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.132 6.477a1.5 1.5 0 0 0 .073 2.12L8.78 11l-2.575 2.403a1.5 1.5 0 0 0 2.047 2.194l2.727-2.545 2.726 2.545a1.5 1.5 0 0 0 2.047-2.194L13.177 11l2.575-2.403a1.5 1.5 0 1 0-2.047-2.194L10.98 8.948 8.252 6.403a1.5 1.5 0 0 0-2.12.074z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.854 13.854a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708.708l-7 7z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M6.146 6.854a.5.5 0 1 1 .708-.708l7 7a.5.5 0 0 1-.708.708l-7-7z"
  })));
};

module.exports.Times = function Times(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M7.172 14.243a1 1 0 1 1-1.415-1.415l7.071-7.07a1 1 0 0 1 1.415 1.414l-7.071 7.07z"
  }), React.createElement("path", {
    d: "M5.757 7.172a1 1 0 1 1 1.415-1.415l7.07 7.071a1 1 0 0 1-1.414 1.415l-7.07-7.071z"
  })));
};

module.exports.ToolPrint = function ToolPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "m13.3 7.832 5.303 6.32a2.5 2.5 0 1 1-3.83 3.213L9.47 11.046a3.003 3.003 0 0 1-.325-.471c-1.354.04-2.71-.569-3.645-1.683-1.18-1.41-1.442-3.332-.687-4.862a.5.5 0 0 1 .831-.1l1.742 2.075a.5.5 0 0 0 .704.062l.581-.488a.5.5 0 0 0 .062-.704L6.99 2.799a.5.5 0 0 1 .244-.801c1.638-.478 3.485.113 4.668 1.522.947 1.129 1.309 2.592 1.014 3.93.139.116.267.244.384.382z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M11.876 7.574a2.995 2.995 0 0 0-.384-.382c.295-1.338-.066-2.802-1.014-3.93-1.182-1.41-3.03-2-4.668-1.523a.5.5 0 0 0-.243.801l1.741 2.076a.5.5 0 0 1-.061.704l-.581.488a.5.5 0 0 1-.705-.062L4.22 3.671a.5.5 0 0 0-.832.1c-.755 1.531-.494 3.453.689 4.862.935 1.114 2.29 1.724 3.645 1.683.092.167.2.325.324.471l5.302 6.32a2.5 2.5 0 1 0 3.83-3.214l-5.302-6.32zm-7.033.416c-.735-.875-1.016-1.99-.82-2.997l1.172 1.396a1.5 1.5 0 0 0 2.113.185l.582-.488a1.5 1.5 0 0 0 .184-2.113L6.903 2.577c1.025-.02 2.075.452 2.81 1.327.813.97 1.077 2.24.732 3.34a.5.5 0 0 0 .208.571 2 2 0 0 1 .457.401l5.303 6.32a1.5 1.5 0 1 1-2.299 1.928l-5.302-6.32a2 2 0 0 1-.323-.538.5.5 0 0 0-.522-.31c-1.133.133-2.32-.348-3.124-1.306z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Tool = function Tool(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m17.562 13.571-5.303-6.319a3.5 3.5 0 0 0-.224-.243c.22-1.408-.194-2.902-1.174-4.07C9.553 1.382 7.502.726 5.671 1.26a1 1 0 0 0-.487 1.603l1.741 2.075-.58.488L4.602 3.35a1 1 0 0 0-1.663.2c-.844 1.712-.554 3.845.754 5.404.966 1.151 2.342 1.817 3.748 1.861.068.102.142.2.221.294l5.302 6.319a3 3 0 1 0 4.597-3.857zM5.226 7.67a3.28 3.28 0 0 1-.656-1.247l.242.288a2 2 0 0 0 2.818.247l.581-.488a2 2 0 0 0 .247-2.817l-.243-.29a3.28 3.28 0 0 1 1.114.863c.705.84.932 1.933.639 2.87a1 1 0 0 0 .416 1.142 1.5 1.5 0 0 1 .343.3l5.303 6.32a1 1 0 0 1-1.533 1.285l-5.301-6.32a1.5 1.5 0 0 1-.242-.404 1 1 0 0 0-1.045-.62c-.964.114-1.986-.3-2.682-1.13z",
    "clip-rule": "evenodd"
  }));
};

module.exports.TrainPrint = function TrainPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 21"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19 5a3.5 3.5 0 0 0-3.5-3.5h-7A3.5 3.5 0 0 0 5 5v6.955a3.5 3.5 0 0 0 1.543 2.902l-.977 3.908a1 1 0 0 0 1.94.485l.18-.721h8.7l.18.721a1 1 0 0 0 1.94-.485l-.987-3.95A3.5 3.5 0 0 0 19 11.955V5zm-3.114 11.529-.245-.98A15.056 15.056 0 0 1 12 16c-1.192 0-2.383-.145-3.572-.435l-.241.964h7.699z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M17 4.5A3.5 3.5 0 0 0 13.5 1h-7A3.5 3.5 0 0 0 3 4.5v6.955A3.5 3.5 0 0 0 5.465 14.8a15.27 15.27 0 0 0 4.535.7 15.27 15.27 0 0 0 4.535-.701A3.5 3.5 0 0 0 17 11.455V4.5zM4 11.455V4.5A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v6.955a2.5 2.5 0 0 1-1.76 2.389A14.27 14.27 0 0 1 10 14.5a14.27 14.27 0 0 1-4.24-.656A2.5 2.5 0 0 1 4 11.455z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M13.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M15.532 18.676a.5.5 0 0 0 .936-.351l-1.5-4a.5.5 0 0 0-.936.35l1.5 4z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.532 14.325a.5.5 0 1 1 .936.35l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M15 5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2.565a2 2 0 0 0 1.444 1.921C7.628 9.83 8.814 10 10 10s2.372-.171 3.556-.514A2 2 0 0 0 15 7.565V5zM6 7.565V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2.565a1 1 0 0 1-.722.96A11.746 11.746 0 0 1 10 9c-1.091 0-2.184-.158-3.278-.474A1 1 0 0 1 6 7.565z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M5.25 17.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1h-10z"
  })));
};

module.exports.Train = function Train(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 21"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    fillRule: "evenodd",
    d: "M17.5 5a4 4 0 0 0-4-4h-7a4 4 0 0 0-4 4v6.99a4 4 0 0 0 2.814 3.82c1.558.483 3.121.726 4.686.726s3.128-.243 4.686-.727a4 4 0 0 0 2.814-3.82V5zm-13 6.99V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v6.99a2 2 0 0 1-1.407 1.91 13.733 13.733 0 0 1-4.093.636 13.73 13.73 0 0 1-4.093-.637A2 2 0 0 1 4.5 11.99z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M8 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
  }), React.createElement("path", {
    d: "M15 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
  }), React.createElement("path", {
    d: "M4.581 15.147a1 1 0 1 1 1.841.781l-1.475 3.475a1 1 0 1 1-1.84-.781l1.474-3.475z"
  }), React.createElement("path", {
    d: "M15.468 14.653a1 1 0 0 0-1.876.694l1.47 3.97a1 1 0 0 0 1.876-.694l-1.47-3.97z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M15 6a2.5 2.5 0 0 0-2.5-2.5h-5A2.5 2.5 0 0 0 5 6v1.535a2.5 2.5 0 0 0 2.076 2.463c.974.168 1.949.252 2.924.252.975 0 1.95-.084 2.924-.252A2.5 2.5 0 0 0 15 7.535V6zM7 7.535V6a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v1.535a.5.5 0 0 1-.415.492 15.161 15.161 0 0 1-5.17 0A.5.5 0 0 1 7 7.535z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M4.75 18.25v-1.5h10.501v1.5H4.75z"
  })));
};

module.exports.TrashPrint = function TrashPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("rect", {
    width: "10",
    height: "11.5",
    x: "7",
    y: "7",
    rx: "1"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M10.016 4.25A2.003 2.003 0 0 1 12 2.5c1.018 0 1.86.765 1.984 1.75H17a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h3.016z",
    "clip-rule": "evenodd"
  })), React.createElement("path", {
    fill: "#000",
    d: "M8.5 14.999a.5.5 0 1 1-1 0v-6a.5.5 0 0 1 1 0v6z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10.5 14.999a.5.5 0 1 1-1 0v-6a.5.5 0 0 1 1 0v6z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M12.5 14.999a.5.5 0 1 1-1 0v-6a.5.5 0 0 1 1 0v6z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.5 4.499h-3a1.501 1.501 0 0 1 3-.001z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M4.5 4.999a.5.5 0 1 1 0-1h11a.5.5 0 0 1 0 1h-11z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14.5 5.5h-9A.5.5 0 0 0 5 6v11a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5zM6 16.5v-10h8v10H6z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Trash = function Trash(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5z"
  }), React.createElement("path", {
    d: "M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z",
    "clip-rule": "evenodd"
  })));
};

module.exports.TriangleDownFilled = function TriangleDownFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m8.728 15.795-5-8A1.5 1.5 0 0 1 5 5.5h10a1.5 1.5 0 0 1 1.272 2.295l-5 8a1.5 1.5 0 0 1-2.544 0z"
  }));
};

module.exports.TriangleDownPrint = function TriangleDownPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "m12.076 16.265-5-8A.5.5 0 0 1 7.5 7.5h10a.5.5 0 0 1 .424.765l-5 8a.5.5 0 0 1-.848 0z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m4.576 7.265 5 8a.5.5 0 0 0 .848 0l5-8A.5.5 0 0 0 15 6.5H5a.5.5 0 0 0-.424.765zm9.522.235L10 14.057 5.902 7.5h8.196z",
    "clip-rule": "evenodd"
  })));
};

module.exports.TriangleDown = function TriangleDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m4.152 7.53 5 8a1 1 0 0 0 1.696 0l5-8A1 1 0 0 0 15 6H5a1 1 0 0 0-.848 1.53zm9.044.47L10 13.113 6.804 8h6.392z",
    "clip-rule": "evenodd"
  }));
};

module.exports.TriangleLeftFilled = function TriangleLeftFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m4.205 8.728 8-5A1.5 1.5 0 0 1 14.5 5v10a1.5 1.5 0 0 1-2.295 1.272l-8-5a1.5 1.5 0 0 1 0-2.544z"
  }));
};

module.exports.TriangleLeftPrint = function TriangleLeftPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "m7.735 10.576 8-5A.5.5 0 0 1 16.5 6v10a.5.5 0 0 1-.765.424l-8-5a.5.5 0 0 1 0-.848z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m13.735 4.576-8 5a.5.5 0 0 0 0 .848l8 5A.5.5 0 0 0 14.5 15V5a.5.5 0 0 0-.765-.424zM13.5 5.902v8.196L6.943 10 13.5 5.902z",
    "clip-rule": "evenodd"
  })));
};

module.exports.TriangleLeft = function TriangleLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m12.47 4.152-8 5a1 1 0 0 0 0 1.696l8 5A1 1 0 0 0 14 15V5a1 1 0 0 0-1.53-.848zM12 6.804v6.392L6.887 10 12 6.804z",
    "clip-rule": "evenodd"
  }));
};

module.exports.TriangleRightFilled = function TriangleRightFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m15.795 11.272-8 5A1.5 1.5 0 0 1 5.5 15V5a1.5 1.5 0 0 1 2.295-1.272l8 5a1.5 1.5 0 0 1 0 2.544z"
  }));
};

module.exports.TriangleRightPrint = function TriangleRightPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "m17.265 11.424-8 5A.5.5 0 0 1 8.5 16V6a.5.5 0 0 1 .765-.424l8 5a.5.5 0 0 1 0 .848z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m7.265 15.424 8-5a.5.5 0 0 0 0-.848l-8-5A.5.5 0 0 0 6.5 5v10a.5.5 0 0 0 .765.424zm.235-1.326V5.902L14.057 10 7.5 14.098z",
    "clip-rule": "evenodd"
  })));
};

module.exports.TriangleRight = function TriangleRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m7.53 15.848 8-5a1 1 0 0 0 0-1.696l-8-5A1 1 0 0 0 6 5v10a1 1 0 0 0 1.53.848zM8 13.196V6.804L13.113 10 8 13.196z",
    "clip-rule": "evenodd"
  }));
};

module.exports.TriangleUpFilled = function TriangleUpFilled(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m11.272 5.205 5 8A1.5 1.5 0 0 1 15 15.5H5a1.5 1.5 0 0 1-1.272-2.295l5-8a1.5 1.5 0 0 1 2.544 0z"
  }));
};

module.exports.TriangleUpPrint = function TriangleUpPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    d: "m12.924 6.735 5 8a.5.5 0 0 1-.424.765h-10a.5.5 0 0 1-.424-.765l5-8a.5.5 0 0 1 .848 0z",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m15.424 13.735-5-8a.5.5 0 0 0-.848 0l-5 8A.5.5 0 0 0 5 14.5h10a.5.5 0 0 0 .424-.765zM5.902 13.5 10 6.943l4.098 6.557H5.902z",
    "clip-rule": "evenodd"
  })));
};

module.exports.TriangleUp = function TriangleUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m15.848 13.47-5-8a1 1 0 0 0-1.696 0l-5 8A1 1 0 0 0 5 15h10a1 1 0 0 0 .848-1.53zM6.804 13 10 7.887 13.196 13H6.804z",
    "clip-rule": "evenodd"
  }));
};

module.exports.TrophyPrint = function TrophyPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M5.327 5.783A2 2 0 0 1 7.307 3.5h7.386a2 2 0 0 1 1.98 2.283l-.637 4.451a1.793 1.793 0 0 1-.142.487c-1.909 4.204-7.88 4.204-9.788 0a1.79 1.79 0 0 1-.142-.487l-.637-4.45z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.693 5.5H7.307l.632 4.42c1.208 2.605 4.914 2.605 6.122 0l.632-4.42zm-7.386-2a2 2 0 0 0-1.98 2.283l.637 4.451c.024.168.072.332.142.487 1.909 4.204 7.88 4.204 9.788 0 .07-.155.118-.319.142-.487l.637-4.45a2 2 0 0 0-1.98-2.284H7.307z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 16.5v-3h2v3h-2z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M8 16.5a4.243 4.243 0 0 1 6 0l.793.793c.63.63.184 1.707-.707 1.707H7.914c-.89 0-1.337-1.077-.707-1.707L8 16.5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M9.123 17.5c1.054-.99 2.7-.99 3.754 0H9.123zm4.877-1a4.243 4.243 0 0 0-6 0l-.793.793c-.63.63-.184 1.707.707 1.707h6.172c.89 0 1.337-1.077.707-1.707L14 16.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M18.547 5.501a1 1 0 0 1 1.04 1.14l-.07.49a5.155 5.155 0 0 1-4.255 4.355l-.003-.02A1.01 1.01 0 0 1 15 11.5H7a1.03 1.03 0 0 1-.186-.017A5.155 5.155 0 0 1 2.58 7.13l-.068-.473A1.003 1.003 0 0 1 3.518 5.5H18.5l.047.001z",
    "clip-rule": "evenodd"
  })), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M13.693 3.25H6.307a1 1 0 0 0-.99 1.142l.637 4.45c.01.075.031.147.062.216 1.554 3.421 6.414 3.421 7.967 0a.792.792 0 0 0 .063-.216l.637-4.45a1 1 0 0 0-.99-1.142zm-7.386-1a2 2 0 0 0-1.98 2.283l.637 4.451c.024.168.072.332.142.487 1.909 4.204 7.88 4.204 9.788 0 .07-.155.118-.319.142-.487l.637-4.45a2 2 0 0 0-1.98-2.284H6.307z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M9.5 14.75v-2.5h1v2.5h-1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "m13.086 16.75-.793-.793a3.243 3.243 0 0 0-4.586 0l-.793.793h6.172zM13 15.25a4.243 4.243 0 0 0-6 0l-.793.793c-.63.63-.184 1.707.707 1.707h6.172c.89 0 1.337-1.077.707-1.707L13 15.25z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5 5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1 0-1h2.5A.5.5 0 0 1 5 5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5.429 9.495c-2.151-.31-3.774-2.123-3.916-4.276l-.012-.186a.5.5 0 0 1 .998-.066l.012.186c.112 1.697 1.391 3.112 3.06 3.352l-.142.99z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M15 5a.5.5 0 0 0 .5.5H18a.5.5 0 0 0 0-1h-2.5a.5.5 0 0 0-.5.5z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14.571 9.495c2.114-.304 3.77-1.946 3.906-4.116l.022-.348a.5.5 0 0 0-.998-.062l-.022.347c-.103 1.66-1.366 2.947-3.05 3.19l.142.989z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Trophy = function Trophy(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor",
    fillRule: "evenodd",
    "clip-rule": "evenodd"
  }, React.createElement("path", {
    d: "M13.675 4.5H6.227l.635 4.418c1.222 2.623 4.956 2.623 6.178 0l.635-4.418zm-7.448-2a2 2 0 0 0-1.98 2.285l.64 4.446c.024.17.073.336.144.492 1.925 4.216 7.915 4.216 9.84 0 .071-.156.12-.322.144-.492l.64-4.446a2 2 0 0 0-1.98-2.285H6.227z"
  }), React.createElement("path", {
    d: "M8.95 15.5v-3h2v3h-2z"
  }), React.createElement("path", {
    d: "M8.058 16.5a2.778 2.778 0 0 1 3.786 0H8.058zm4.91-1a4.277 4.277 0 0 0-6.033 0l-.796.791c-.632.63-.187 1.709.706 1.709h6.212c.893 0 1.338-1.08.706-1.709l-.796-.791z"
  }), React.createElement("path", {
    d: "M5.421 5.5a1 1 0 0 1-1 1h-2.01a1 1 0 0 1 0-2h2.01a1 1 0 0 1 1 1z"
  }), React.createElement("path", {
    d: "M2.268 4.512a1.003 1.003 0 0 1 1.135.848l.07.489a3.165 3.165 0 0 0 2.62 2.667l-.328 1.968a5.168 5.168 0 0 1-4.277-4.356l-.07-.488a.997.997 0 0 1 .85-1.128z"
  }), React.createElement("path", {
    d: "M14.579 5.5a1 1 0 0 0 1 1h2.01a1 1 0 1 0 0-2h-2.01a1 1 0 0 0-1 1z"
  }), React.createElement("path", {
    d: "M17.732 4.512a1.003 1.003 0 0 0-1.135.848l-.07.489a3.166 3.166 0 0 1-2.62 2.667l.328 1.968a5.168 5.168 0 0 0 4.277-4.356l.07-.488a.997.997 0 0 0-.85-1.128z"
  })));
};

module.exports.TruckPrint = function TruckPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9 6h9a2 2 0 0 1 2 2v7a2 2 0 0 1-.906 1.675 2.25 2.25 0 1 1-4.288.325h-4.612a2.25 2.25 0 1 1-4.388 0H3a2 2 0 0 1-2-2v-2l.8-2.59A2 2 0 0 1 3.71 9H7V8a2 2 0 0 1 2-2z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M5.5 16.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M14.5 16.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M17 4.5H9a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zm-9 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-7z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10.25 8.5a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1h-5.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10.25 10.5a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1h-5.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M10.25 12.5a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1h-5.5z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M6 7.5H2.71A2 2 0 0 0 .8 8.91L0 11.5v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-5 6v-1.85l.755-2.445A1 1 0 0 1 2.71 8.5H6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M4.5 9.6H2.79a.5.5 0 0 0-.484.378l-.29 1.15L2 11.25v.85a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zm-1.5 2v-.288l.18-.712H4v1H3z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Truck = function Truck(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M7.5 18.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5z"
  }), React.createElement("path", {
    d: "M16.5 18.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M18 4.5H8a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6.5a2 2 0 0 0-2-2zM8 14V6.5h10V14H8z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M10.25 8.75a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1h-5.5z"
  }), React.createElement("path", {
    d: "M10.25 10.75a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1h-5.5z"
  }), React.createElement("path", {
    d: "M10.25 12.75a.5.5 0 0 1 0-1h5.5a.5.5 0 0 1 0 1h-5.5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "M6 7.5H2.736a2 2 0 0 0-1.92 1.442L0 11.75V14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9.5a2 2 0 0 0-2-2zM2 14v-1.966L2.736 9.5H6V14H2z",
    "clip-rule": "evenodd"
  }), React.createElement("path", {
    d: "M3.29 10.1H5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-.85l.015-.122.29-1.15a.5.5 0 0 1 .485-.378z"
  })));
};

module.exports.UmbrellaPrint = function UmbrellaPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M17.998 12.515c.928.004 1.502-.585 1.502-1.5 0-3.928-2.78-7.045-6.54-7.454a1 1 0 0 0 .04-.283V1.753a1 1 0 1 0-2 0v1.525c0 .108.017.212.049.309C7.337 4.09 4.5 7.196 4.5 11.015c0 .913.584 1.474 1.485 1.5.328.01.57-.163.837-.473.082-.095.165-.203.269-.345l.169-.235.09-.127c.359-.494.596-.73.755-.765.037-.008.175.071.552.37.603.477.931.65 1.425.569.306-.051.57-.186.918-.428v6.434l.007.119c.165 1.388 1.034 2.24 2.38 2.24 1.504 0 2.224-1.2 2.224-3.039a1 1 0 0 0-2 0c0 .879-.096 1.038-.225 1.038-.274 0-.337-.049-.386-.42v-6.368c.365.253.613.377.925.425.49.074.808-.106 1.417-.611.378-.313.524-.4.558-.394.141.03.379.275.743.793l.047.067.213.304c.103.144.187.255.27.353.264.315.502.492.825.493z",
    "clip-rule": "evenodd",
    opacity: ".8"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 10.5a.5.5 0 0 1 1 0l-.004 6.556c.084.678.364.944.964.944.521 0 .79-.433.79-1.575a.5.5 0 0 1 1 0c0 1.624-.59 2.575-1.79 2.575-1.12 0-1.813-.656-1.96-1.883V10.5z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M9.5 1.765a.5.5 0 0 1 1 0V3.29a.5.5 0 0 1-1 0V1.765z"
  }), React.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M15.998 12.265c.928.004 1.502-.585 1.502-1.5 0-4.217-3.205-7.5-7.386-7.5-4.22 0-7.614 3.323-7.614 7.5 0 .913.584 1.474 1.485 1.5.328.01.57-.163.837-.473.082-.095.165-.203.269-.345l.169-.235.09-.127c.359-.494.596-.73.755-.765.037-.008.175.071.552.37.603.477.931.65 1.425.569.31-.052.578-.19.935-.44l.2-.142c.428-.309.617-.409.791-.412.154-.002.338.096.768.41l.083.06c.446.322.716.472 1.066.525.491.074.808-.106 1.417-.611.378-.313.524-.4.558-.394.141.03.379.275.743.793l.047.067.213.304c.103.144.187.255.27.353.264.315.502.492.825.493zm-5.884-8c3.623 0 6.386 2.83 6.386 6.5 0 .368-.13.502-.498.5.03 0-.036-.092-.202-.32-.086-.12-.2-.275-.34-.473-.525-.746-.861-1.094-1.36-1.196-.48-.099-.73.051-1.396.603-.372.308-.542.405-.629.392-.14-.021-.312-.117-.63-.347l-.08-.058c-.62-.45-.914-.608-1.373-.6-.457.007-.759.167-1.36.6-.096.069-.137.099-.187.133-.244.17-.402.252-.527.273-.1.017-.27-.073-.64-.367-.663-.524-.91-.664-1.383-.562-.498.106-.844.45-1.354 1.155-.12.167-.22.302-.3.409-.192.259-.265.357-.226.359-.376-.011-.515-.145-.515-.5 0-3.621 2.94-6.5 6.614-6.5z",
    "clip-rule": "evenodd"
  })));
};

module.exports.Umbrella = function Umbrella(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M11.386 17.358c.129 0 .225-.16.225-1.038a1 1 0 0 1 2 0c0 1.84-.72 3.038-2.225 3.038-1.345 0-2.214-.851-2.379-2.24L9 17v-6.5a1 1 0 0 1 2 0v6.438c.049.37.112.42.386.42z"
  }), React.createElement("path", {
    d: "M9 1.5a1 1 0 0 1 2 0V3a1 1 0 1 1-2 0V1.5z"
  }), React.createElement("path", {
    fillRule: "evenodd",
    d: "m5.668 11.235.088-.122a6.99 6.99 0 0 1 .37-.47l.221.173c.719.57 1.126.785 1.817.67.404-.067.725-.233 1.14-.522.058-.04.107-.076.206-.147.341-.246.474-.317.506-.317.001 0 .13.069.466.313l.084.061c.51.369.828.545 1.284.615.693.105 1.083-.117 1.811-.72.094-.078.162-.134.214-.175.004.005.009.01.013.017.078.097.2.25.346.46l.044.062.218.31c.11.155.201.276.293.385.354.422.689.67 1.207.672 1.208.005 2.004-.812 2.004-2 0-4.49-3.426-8-7.886-8C5.619 2.5 2 6.044 2 10.5c0 1.191.807 1.965 1.97 2 .528.015.872-.23 1.231-.648.092-.107.183-.224.294-.376l.173-.241zm-1.656-1.123C4.213 6.954 6.847 4.5 10.114 4.5c3.207 0 5.676 2.395 5.873 5.587l-.117-.169c-.606-.86-.992-1.26-1.67-1.398-.43-.088-.816.018-1.19.242-.197.117-.306.202-.625.467-.155.128-.246.2-.316.245a3.85 3.85 0 0 1-.33-.22l-.08-.058c-.714-.519-1.064-.706-1.675-.696-.6.01-.957.2-1.644.695l-.181.129c-.114.08-.196.13-.25.159a3.375 3.375 0 0 1-.32-.235c-.325-.256-.427-.332-.623-.443-.37-.21-.754-.307-1.176-.217-.667.143-1.068.542-1.654 1.352l-.102.142-.022.03z",
    "clip-rule": "evenodd"
  })));
};

module.exports.WifiPrint = function WifiPrint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("g", {
    fill: "currentColor",
    opacity: ".8"
  }, React.createElement("path", {
    d: "M14.696 12.282a1 1 0 1 1-1.392 1.436 1.46 1.46 0 0 0-.102-.09 2.43 2.43 0 0 0-.623-.348c-.453-.18-1-.28-1.579-.28-.914 0-1.733.251-2.202.629-.037.03-.071.059-.102.089a1 1 0 1 1-1.392-1.436c.076-.073.156-.144.24-.212C8.395 11.387 9.656 11 11 11c.827 0 1.624.146 2.316.42.43.17.815.389 1.14.65.084.068.164.139.24.212z"
  }), React.createElement("path", {
    d: "M17.213 9.689a1 1 0 1 1-1.426 1.402 4.189 4.189 0 0 0-.312-.285 5.446 5.446 0 0 0-.767-.521 6.118 6.118 0 0 0-.932-.425 7.268 7.268 0 0 0-1.057-.298 8.19 8.19 0 0 0-1.137-.153 8.814 8.814 0 0 0-1.74.058 8.196 8.196 0 0 0-1.102.227 7.281 7.281 0 0 0-1 .364 6.132 6.132 0 0 0-.854.477 4.8 4.8 0 0 0-.361.27 4.173 4.173 0 0 0-.312.286A1 1 0 1 1 4.787 9.69c.145-.147.299-.288.462-.424a7.446 7.446 0 0 1 1.662-1.027 8.712 8.712 0 0 1 1.286-.469 9.777 9.777 0 0 1 1.379-.284A10.53 10.53 0 0 1 11 7.39a10.81 10.81 0 0 1 1.424.095 10.182 10.182 0 0 1 1.38.284 9.291 9.291 0 0 1 1.285.469 8.117 8.117 0 0 1 1.15.643 6.468 6.468 0 0 1 .974.808z"
  }), React.createElement("path", {
    d: "M19.245 7.222a1 1 0 0 1-1.49 1.333 6.338 6.338 0 0 0-.456-.459 7.021 7.021 0 0 0-.52-.43 8.358 8.358 0 0 0-1.215-.747 8.983 8.983 0 0 0-1.408-.563 10.076 10.076 0 0 0-1.542-.35A10.86 10.86 0 0 0 11 5.89a11.177 11.177 0 0 0-1.614.117 10.5 10.5 0 0 0-1.542.35 9.572 9.572 0 0 0-1.407.564 8.37 8.37 0 0 0-.635.353 7.696 7.696 0 0 0-.58.393 7.01 7.01 0 0 0-.52.43 6.336 6.336 0 0 0-.457.46 1 1 0 0 1-1.49-1.334 8.832 8.832 0 0 1 1.268-1.157 10.368 10.368 0 0 1 2.352-1.309 11.566 11.566 0 0 1 1.785-.554 12.499 12.499 0 0 1 1.883-.279 13.172 13.172 0 0 1 2.864.105 12.498 12.498 0 0 1 1.842.418 11.558 11.558 0 0 1 1.71.686 10.355 10.355 0 0 1 1.518.933 8.542 8.542 0 0 1 1.269 1.157z"
  }), React.createElement("path", {
    d: "M13 16.25a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
  })), React.createElement("path", {
    fill: "#000",
    d: "M13.348 11.641a.5.5 0 0 1-.696.718 1.932 1.932 0 0 0-.136-.12 2.922 2.922 0 0 0-.753-.424A4.84 4.84 0 0 0 10 11.5c-1.022 0-1.951.285-2.516.739-.048.039-.094.08-.136.12a.5.5 0 0 1-.696-.718c.065-.063.133-.123.206-.182.754-.606 1.905-.959 3.142-.959.765 0 1.5.134 2.132.385.385.153.726.346 1.01.574.073.059.141.12.206.182z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M15.856 9.04a.5.5 0 1 1-.712.7 4.659 4.659 0 0 0-.35-.32 5.317 5.317 0 0 0-.399-.298 6.592 6.592 0 0 0-1.449-.731 7.768 7.768 0 0 0-1.127-.319 8.684 8.684 0 0 0-1.204-.162 9.312 9.312 0 0 0-1.839.061 8.69 8.69 0 0 0-1.172.242 7.781 7.781 0 0 0-1.071.39 6.6 6.6 0 0 0-.928.519 4.659 4.659 0 0 0-.748.62.5.5 0 0 1-.713-.703c.132-.134.274-.264.424-.389a6.947 6.947 0 0 1 1.55-.957 8.222 8.222 0 0 1 1.215-.443 9.278 9.278 0 0 1 1.31-.27A10.044 10.044 0 0 1 10 6.89a10.318 10.318 0 0 1 1.357.09 9.7 9.7 0 0 1 1.31.27 8.782 8.782 0 0 1 1.215.443 7.608 7.608 0 0 1 1.076.602 5.663 5.663 0 0 1 .898.745z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M17.873 6.555a.5.5 0 1 1-.746.667 6.827 6.827 0 0 0-.492-.496 7.52 7.52 0 0 0-.557-.46 8.85 8.85 0 0 0-1.29-.794 9.497 9.497 0 0 0-1.484-.594 10.577 10.577 0 0 0-1.617-.366A11.367 11.367 0 0 0 10 4.389a11.673 11.673 0 0 0-1.687.123 11.001 11.001 0 0 0-1.617.366 10.066 10.066 0 0 0-1.483.595 8.867 8.867 0 0 0-.673.374 8.194 8.194 0 0 0-.618.42 7.202 7.202 0 0 0-1.049.955.5.5 0 1 1-.746-.667c.176-.196.364-.386.564-.568a9.198 9.198 0 0 1 1.325-.992 9.87 9.87 0 0 1 1.546-.775 11.07 11.07 0 0 1 1.709-.53 11.998 11.998 0 0 1 1.808-.268 12.673 12.673 0 0 1 2.754.1 11.984 11.984 0 0 1 1.767.401 11.063 11.063 0 0 1 1.635.656c.258.129.508.268.748.416a8.503 8.503 0 0 1 1.325.992c.2.182.389.372.565.568z"
  }), React.createElement("path", {
    fill: "#000",
    d: "M11.75 15.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z"
  })));
};

module.exports.Wifi = function Wifi(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }), React.createElement("g", {
    fill: "currentColor"
  }, React.createElement("path", {
    d: "M13.696 11.282a1 1 0 1 1-1.392 1.436 1.46 1.46 0 0 0-.102-.09 2.43 2.43 0 0 0-.623-.348c-.453-.18-1-.28-1.579-.28-.914 0-1.733.251-2.202.629-.037.03-.071.059-.102.089a1 1 0 1 1-1.392-1.436c.076-.073.156-.144.24-.212C7.395 10.387 8.656 10 10 10c.827 0 1.624.146 2.316.42.43.17.815.389 1.14.65.084.068.164.139.24.212z"
  }), React.createElement("path", {
    d: "M16.213 8.689a1 1 0 1 1-1.426 1.402 4.187 4.187 0 0 0-.312-.285 5.436 5.436 0 0 0-.767-.521 6.079 6.079 0 0 0-.932-.425 7.268 7.268 0 0 0-1.057-.298 8.19 8.19 0 0 0-1.137-.153 8.814 8.814 0 0 0-1.74.058 8.196 8.196 0 0 0-1.102.227 7.281 7.281 0 0 0-1 .364 6.093 6.093 0 0 0-.854.477 4.792 4.792 0 0 0-.361.27 4.171 4.171 0 0 0-.312.286A1 1 0 1 1 3.787 8.69c.145-.147.299-.288.462-.424a7.446 7.446 0 0 1 1.662-1.027 8.712 8.712 0 0 1 1.286-.469 9.777 9.777 0 0 1 1.379-.284A10.533 10.533 0 0 1 10 6.39a10.81 10.81 0 0 1 1.424.095 10.182 10.182 0 0 1 1.38.284 9.291 9.291 0 0 1 1.285.469 8.117 8.117 0 0 1 1.15.643 6.468 6.468 0 0 1 .974.808z"
  }), React.createElement("path", {
    d: "M18.245 6.222a1 1 0 0 1-1.49 1.333 6.338 6.338 0 0 0-.456-.459 7.021 7.021 0 0 0-.52-.43 8.358 8.358 0 0 0-1.215-.747 8.983 8.983 0 0 0-1.408-.563 10.076 10.076 0 0 0-1.542-.35A10.86 10.86 0 0 0 10 4.89a11.178 11.178 0 0 0-1.614.117 10.5 10.5 0 0 0-1.542.35 9.572 9.572 0 0 0-1.407.564 8.37 8.37 0 0 0-.635.353 7.696 7.696 0 0 0-.58.393 7.01 7.01 0 0 0-.52.43 6.336 6.336 0 0 0-.457.46 1 1 0 0 1-1.49-1.334 8.832 8.832 0 0 1 1.268-1.157 10.368 10.368 0 0 1 2.352-1.309 11.566 11.566 0 0 1 1.785-.554 12.499 12.499 0 0 1 1.883-.279 13.173 13.173 0 0 1 2.864.105 12.498 12.498 0 0 1 1.842.418 11.558 11.558 0 0 1 1.71.686 10.355 10.355 0 0 1 1.518.933 8.542 8.542 0 0 1 1.269 1.157z"
  }), React.createElement("path", {
    d: "M12 15.25a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
  })));
};