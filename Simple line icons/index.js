function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var React = require("react");

module.exports.ActionRedo = function ActionRedo(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M34 878h1q12 0 19.5-8t8.5-21q1-8 3-20.5T80.5 785t31-59 55.5-61.5 85.5-57.5 124-40.5T544 550l1 184q0 20 18.5 29t33.5-4l415-344q6-5 9-11.5t3-13.5q0-15-12-25L597 25q-15-13-33.5-4.5T545 50l-1 179q-281 9-423 175-43 50-70.5 114.5T13 635 1 741t-.5 76T4 851t10 19.5 20 7.5zm543-392q-92 0-169.5 12.5T278 530t-95.5 47.5-69 54T65 690q19-145 105-244 43-50 103-84.5T409.5 310 577 293q13 0 22.5-9.5T609 261V117l333 273-333 276V518q0-4-1-8.5t-3-8-5-6.5q-10-9-23-9z"
  }));
};

module.exports.ActionUndo = function ActionUndo(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M990 878h-1q-12 0-19.5-8t-8.5-21q-1-14-6.5-36.5t-35-72.5-76.5-89-142.5-70T479 550v184q0 5-1.5 9t-3.5 8-5.5 7-7.5 5q-19 9-34-4L12 415q-6-5-9-11.5T0 390q0-15 12-25L427 25q15-13 33.5-4.5T479 50v179q40 2 77 6.5t72 12 67 18.5 61 25.5 55 31.5 49 37.5 43 43.5q43 50 70.5 114.5T1011 635t12 106 .5 76-3.5 34-10 19.5-20 7.5zM447 486q78 0 144 8t116 23.5 89.5 34 70.5 43 52 46.5 40 49q-19-145-105-244-131-153-407-153-13 0-22.5-9.5T415 261V117L82 390l333 276V518q0-13 9-23 3-3 7-5t8-3 8-1z"
  }));
};

module.exports.Anchor = function Anchor(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1056"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m1021 747-82-151-6-11q-5-8-15-10-4-1-8.5-.5T901 578l-10 6v1l-146 98q-5 3-8 9t-3 12 3 12l7 7q4 8 14 9t18-4l87-60q-15 124-105 210.5T544 977V335h128q13 0 22.5-9.5T704 303t-9.5-22.5T672 271H543l-1-1v-1q43-11 71-46t28-80q0-53-37.5-91t-91-38T421 52t-38 91q0 45 28 80t71 45v2l-1 1H352q-13 0-22.5 9.5T320 303t9.5 22.5T352 335h128v642q-124-12-213.5-98T161 668l87 60q8 5 18 4t14-9l7-7q2-4 2.5-9t-.5-9.5-3.5-8.5-6.5-6l-146-99-10-6q-8-6-17-3-5 1-8.5 3.5T91 585l-6 11L3 747q-5 9-2.5 18.5T11 780l9 4q8 5 17 1.5T51 773l48-89q22 154 139.5 256T512 1042t273.5-102T925 684l48 89q5 9 14 12.5t17-1.5l9-4q8-5 10.5-14.5T1021 747zM448 143q0-27 19-46t45.5-19 46 19 19.5 46q0 11-3.5 20.5T565 181t-14 14-18 9.5-21 3.5q-5 0-10-1t-10-2.5-9.5-4-8.5-5.5-7.5-6.5-6.5-7.5-5.5-8.5-4-9-2-10-.5-10.5z"
  }));
};

module.exports.ArrowDownCircle = function ArrowDownCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M0 512q0 139 68.5 257T255 955.5t257 68.5 257-68.5T955.5 769t68.5-257-68.5-257T769 68.5 512 0 255 68.5 68.5 255 0 512zm961 0q0 91-35.5 174t-96 143T686 924.5 512 960t-174-35.5T195 829 99.5 686 64 512t35.5-174T195 195t143-95.5T512 64t174 35.5T829.5 195t96 143T961 512zM480 288v360L364 532q-3-3-7-5t-8-3-8-1-8 1-7.5 3-6.5 5q-18 18-5 39 2 4 5 7l194 189 194-189q9-10 9-23t-9.5-22.5T684 523t-23 9L544 650V288q0-14-9.5-23t-22.5-9q-7 0-13 2.5t-10 6.5-6.5 10-2.5 13z"
  }));
};

module.exports.ArrowDown = function ArrowDown(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M8 211q0-14 10-24t24-10 24 10l452 452 445-445q10-10 24-10t24 10 10 24-10 24L542 711q-10 10-24 10t-24-10L18 236q-2-2-3.5-4.5t-2.5-5l-2-5-1.5-5L8 211z"
  }));
};

module.exports.ArrowLeftCircle = function ArrowLeftCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 0Q373 0 255 68.5T68.5 255 0 512t68.5 257T255 955.5t257 68.5 257-68.5T955.5 769t68.5-257-68.5-257T769 68.5 512 0zm0 961q-73 0-141.5-22.5T247 874t-96.5-97-64-123.5T64 512q0-91 35.5-174T195 195t143-95.5T512 64t174 35.5T829 195t95.5 143T960 512t-35.5 174T829 829.5t-143 96T512 961zm224-481H376l116-116q9-9 9-22.5t-9.5-23T469 309t-23 10L257 513l189 194q3 2 5.5 4t5.5 3 6 1.5 6 .5q13 0 23-9 4-5 6.5-11t2.5-12-2.5-12-6.5-11L374 544h362q14 0 23-9.5t9-23-9-22.5-23-9z"
  }));
};

module.exports.ArrowLeft = function ArrowLeft(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 576 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M528 0q14 0 24 10 4 3 6 7t3 8.5 1 9-1 8.5-3 8-6 8L96 515l450 450q6 6 8.5 15t0 18-8.5 15q-10 10-24.5 10t-24.5-10L23 539q-10-10-10-24t10-24L504 10q10-10 24-10z"
  }));
};

module.exports.ArrowRightCircle = function ArrowRightCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 0Q373 0 255 68.5T68.5 255 0 512t68.5 257T255 955.5t257 68.5 257-68.5T955.5 769t68.5-257-68.5-257T769 68.5 512 0zm0 961q-73 0-141.5-22.5T247 874t-96.5-97-64-123.5T64 512q0-91 35.5-174T195 195t143-95.5T512 64t174 35.5T829 195t95.5 143T960 512t-35.5 174T829 829.5t-143 96T512 961zm20.5-642.5q-9.5 9.5-9.5 23t9 22.5l116 116H288q-14 0-23 9t-9 22.5 9 23 23 9.5h362L532 661q-4 5-6.5 11t-2.5 12 2.5 12 7 10.5 10.5 7 12 2.5q13 0 23-9l189-194-189-194q-10-10-23-10t-22.5 9.5z"
  }));
};

module.exports.ArrowRight = function ArrowRight(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 576 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M48 1023q-14 0-24.5-10T13 989t10-24l457-457L30 59q-6-7-8.5-16t0-17.5T30 10Q40 0 54.5 0T79 10l473 474q5 5 7.5 11.5t2.5 13-2.5 12.5-7.5 11L72 1013q-5 5-11.5 7.5T48 1023z"
  }));
};

module.exports.ArrowUpCircle = function ArrowUpCircle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1024 512q0-139-68.5-257T769 68.5 512 0 255 68.5 68.5 255 0 512t68.5 257T255 955.5t257 68.5 257-68.5T955.5 769t68.5-257zm-961 0q0-91 35.5-174t96-143T338 99.5 512 64t174 35.5T829 195t95.5 143T960 512t-35.5 174T829 829t-143 95.5T512 960t-174-35.5T194.5 829t-96-143T63 512zm481 224V376l116 116q9 9 22.5 9t23-9.5T715 469t-10-23L511 257 317 446q-9 10-9 23t9 23q5 4 11 6.5t12 2.5 12-2.5 11-6.5l117-118v362q0 9 4.5 16.5t12 11.5 15.5 4q14 0 23-9t9-23z"
  }));
};

module.exports.ArrowUp = function ArrowUp(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M8 687.5q0 6.5 2.5 13T18 711q10 10 24 10t24-10l452-451 445 445q10 10 24 10t24-10 10-24-10-24L542 187q-10-9-24-9t-24 9L18 663q-5 5-7.5 11.5t-2.5 13z"
  }));
};

module.exports.Badge = function Badge(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1037 840 850 494q30-68 30-142 0-96-47.5-177T704 47 528 0q-58 0-111.5 18T320 68.5 244 144t-50.5 97T176 352q0 26 3.5 51t10.5 48 17 46L19 840q-10 18 2.5 34.5T54 886l161-36 55 153q7 19 28 21h2q19 0 28-17l164-305q18 2 36 2 5 0 10.5-.5t11-.5 11.5-1l167 305q9 17 28 17h3q20-2 27-21l55-153 161 36q9 3 18-.5t14-10.5q13-17 3-35zm-731 73-40-112q-3-7-9-12.5t-13.5-7.5-15.5 0l-119 27 136-247q70 94 181 128zm-66-561q0-119 84.5-203.5T528 64q78 0 144 38.5t104.5 105T815 352q0 39-10 76.5t-28.5 69-45.5 58-58.5 45-68.5 29-76 10.5q-78 0-144.5-39t-105-105T240 352zm588 429q-12-3-22.5 3T790 801l-40 113-123-224q56-17 103.5-50.5T812 559l135 249z"
  }));
};

module.exports.Bag = function Bag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 832 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M768 159H577V97q0-26-13-48t-35-35-48-13H353q-15 0-30 5t-26.5 14T276 40.5 262 67t-5 30v62H64q-27 0-45.5 18.5T0 223v736q0 26 18.5 45t45.5 19h704q27 0 45.5-19t18.5-45V223q0-27-18.5-45.5T768 159zM321 97q0-13 9.5-22.5T353 65h128q13 0 22.5 9.5T513 97v62H321V97zm447 862H64V223h193v66q0 3 1 8.5t8.5 14.5 22.5 9q16 0 24-8t8-16v-74h192v69l1.5 7.5 4.5 10 9.5 8L545 321q9 0 15.5-3.5t9.5-8 4.5-9.5 2.5-8v-69h191v736z"
  }));
};

module.exports.Ban = function Ban(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 0Q373 0 255 68.5T68.5 255 0 512t68.5 257T255 955.5t257 68.5 257-68.5T955.5 769t68.5-257-68.5-257T769 68.5 512 0zM64 512q0-167 110-294l632 632Q679 961 512 961q-73 0-141.5-22.5T247 874t-96.5-97-64-123.5T64 512zm787 293L219 173q61-52 136-80.5T512 64q73 0 141.5 22.5t123.5 64 96.5 96.5 64 123.5T960 512q0 166-109 293z"
  }));
};

module.exports.BasketLoaded = function BasketLoaded(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 992"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1015.5 267.5Q1006 254 990 254H890L685 80q-13-13-29-17t-32.5 0T594 80L393 254h-82L259 77q-7-24-19-41t-25.5-24T191 2.5 171 0H34Q21 0 12 9T3 32q0 8 4 15.5T18.5 59 34 63h137q3 0 5.5 1t6.5 3.5 8 9.5 7 18l177 650q3 10 11.5 16.5T405 768h432q10 0 18.5-6t11.5-15l153-450q5-16-4.5-29.5zM640 125l152 130H487zm175 579H430L328 318h616zm-63 128q-33 0-56.5 23.5T672 912t23.5 56.5T752 992t56.5-23.5T832 912q0-16-6.5-31t-17-25.5-25.5-17-31-6.5zm-288 0q-22 0-40.5 11t-29 29-10.5 40q0 33 23.5 56.5T464 992t56.5-23.5T544 912q0-46-41-69-18-11-39-11z"
  }));
};

module.exports.Basket = function Basket(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 992"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1015.5 267.5Q1006 254 990 254H311L259 77q-7-24-19-41t-25.5-24T191 2.5 171 0H34Q21 0 12 9T3 32q0 8 4 15.5T18.5 59 34 63h137q4 0 7.5 1t9.5 8.5T198 95l177 650q2 6 6.5 11.5T392 765t13 3h432q10 0 18.5-6t11.5-15l153-450q5-16-4.5-29.5zM815 704H430L328 318h616zm-63 128q-33 0-56.5 23.5T672 912t23.5 56.5T752 992t56.5-23.5T832 912t-23.5-56.5T752 832zm-288 0q-22 0-40.5 11t-29 29-10.5 40q0 33 23.5 56.5T464 992t56.5-23.5T544 912q0-8-1.5-16t-4.5-15-7.5-13.5-10-12-12-10T495 838t-15-4.5-16-1.5z"
  }));
};

module.exports.Bell = function Bell(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 896 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m842 712-20-25-19.5-26-19-29.5-15-30-11.5-33-4-31.5V328q0-67-24-127.5t-64.5-104T567 27 446 1q-84 0-154.5 44T181 164t-40 164v209q0 18-5 36.5t-18 40-20 32T72 681t-22 28l-18 25.5-14 22-10.5 22L5 798l5 21q17 33 83 33h183q0 71 50 121t121 50 121-50 50-121h187q66 0 81-33 4-7 4.5-14.5t0-13.5-4.5-14.5-7-14.5-10.5-16-12.5-16-14-18zM447 956q-21 0-40-8.5t-33-22-22.5-33T343 852h208q0 43-30.5 73.5T447 956zm358-172H81q6-10 24-34 1-2 20-27t25-33 21-32.5 20.5-39.5 11.5-38 6-43V328q0-108 68.5-183.5T446 69q29 0 56 7t50.5 19.5 44 30.5 37 40.5 28 47.5 17.5 54 6 60v209q0 31 9 62.5t27.5 61.5 32 48.5T789 755l4.5 6 4.5 5.5 5 6 4.5 5.5 4.5 6h-7z"
  }));
};

module.exports.BookOpen = function BookOpen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1040"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M952 2 529 116q-4 1-10 1.5t-12.5.5-12.5-.5-10-1.5L72 2q-28-8-50 9T0 56v778q0 24 16 44.5T55 906l412 114q17 5 40 5 9 0 19.5-1t19.5-4l423-115q23-6 39-26.5t16-44.5V56q0-28-22-45t-50-9zM480 957 71 844q-2-1-4.5-4t-2.5-6V66l403 112q3 0 6 1t7 1v777zm480-123q0 2-3 5.5t-5 4.5L544 954V178h2L960 66v768zM642 366q5 0 9-1l224-63q12-4 18.5-15.5T897 263q-3-9-9-15t-14-8-17 0l-224 63q-12 4-18.5 15.5T611 343q8 22 31 23zm0 192q5 0 9-1l224-63q12-4 18.5-15.5t3-24-15-19T857 432l-224 63q-12 4-18.5 15.5T611 535q8 22 31 23zm0 192h4.5l4.5-1 224-63q12-4 18.5-15.5t3-24-15-19T857 624l-224 63q-12 4-18.5 15.5T611 727q8 22 31 23zM395 303l-224-63q-7-1-13 0t-11.5 3.5-9.5 7.5-6 12q-3 12 3.5 23.5T153 302l224 63q2 1 4.5 1h4.5q7 0 13.5-2.5t11-8T417 343q6-23-14-36-5-2-8-4zm0 192-224-63q-9-2-17 0t-14 8-9 15q-1 5-1 10t2 9.5 5 8.5 7 7 9 4l224 63q4 1 9 1 11 0 19.5-6.5T417 535q6-23-14-36-5-2-8-4zm0 192-224-63q-13-3-24.5 3.5T131 647q-1 5-1 10t2 9.5 5 8.5 7 7 9 4l224 63q5 1 9 1 11 0 19.5-6.5T417 727q7-24-15-36-4-2-7-4z"
  }));
};

module.exports.Briefcase = function Briefcase(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 960"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M960 159H704V97q0-26-12.5-48t-35-35T608 1H416q-40 0-68 28.5T320 97v62H64q-26 0-45 19T0 223v672q0 26 19 45t45 19h896q26 0 45-19t19-45V223q0-17-8.5-31.5T992 168t-32-9zM384 97q0-13 9.5-22.5T416 65h192q14 0 23 9.5t9 22.5v62H384V97zM64 223h896v225H608v-33q0-17-9-32t-23.5-23.5T544 351h-64q-27 0-45.5 19T416 415v33H64V223zm480 353h-64V415h64v161zM64 895V512h352v64q0 27 18.5 45.5T480 640h64q17 0 31.5-8.5T599 608t9-32v-64h352v383H64z"
  }));
};

module.exports.Bubble = function Bubble(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 64q121 0 224.5 43T900 223.5 960 384t-60 160.5T736.5 661 512 704h-27q-14 0-24-.5t-23-2.5l-35-5-23 28q-5 5-16.5 14.5T336 760t-38 25.5-43 23.5q10-25 16-51t6-50l1-2v-45l-35-18q-85-43-132-111T64 384q0-87 60-160.5T287.5 107 512 64zm0-64Q373 0 255 51.5t-186.5 140T0 384q0 99 56 181.5T214 700q0 1-.5 1.5t-.5 1.5q0 65-51 153-2 5-2 11 0 12 8.5 20.5T189 896h8q46-8 99-36t86.5-54 46.5-42q26 4 56 4h27q139 0 257-51.5t186.5-140T1024 384q0-141-122-249Q775 24 583 4q-36-4-71-4z"
  }));
};

module.exports.Bubbles = function Bubbles(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 960"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M425 647q115 0 208-40.5T779.5 491 832 320q0-32-8.5-63t-24-59-38-53-50-46-61-38T580 32.5t-78-18T418 8Q304 8 208 49.5T56 163 0 320t42 162 121 117v2q0 44-55 138h1q-2 4-2 9 0 3 .5 5.5t1.5 5 2.5 4.5 3.5 3.5 4.5 2.5l5 2 5.5 1q1 0 3.5-.5l2.5-.5h1q28-4 65.5-21.5t69-38.5 55-39.5T357 644q7 1 13 2t11.5 1H425zm-94-69-41 34q-8 10-35 31.5T203 680q10-27 15-47.5t6-26.5v-7l3-39-35-18q-63-32-95.5-93.5T64 320q0-68 47.5-125t129-90T418 72t176.5 33 127 90T768 320q0 56-26 105.5t-71 84T562.5 564 427 584q-30 1-61-3zm693 0q0-133-118-202-3 29-16 69 40 28 55 58.5t15 74.5q0 26-6 48.5t-19 42-33.5 36T853 736l-31 15q3 82 8 103-18-13-33-26t-24-23-15.5-18-9.5-13l-2-4-34 5q-6 1-18 1.5t-22 .5h-9q-125 0-206-63h-91l-1 1q19 23 43 42.5t52 35 60 26.5 68 16.5 75 5.5h19q21 0 39-2 22 25 75 65t98 48h6q9 0 15-6t6-15q0-4-2-8-5-8-11-24t-11-34-8.5-37.5T885 793v-2q139-72 139-213z"
  }));
};

module.exports.Bulb = function Bulb(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 736 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M368 0q-97 0-178.5 48t-128 130.5T15 359q0 36 5.5 68t16 58 22 46.5 28.5 40 29 31.5 30 28q3 3 9 8 20 18 29 27t16.5 21 7.5 23v54q0 1 1 4h-1v93q0 48 20 85t56.5 57.5T369 1024q71 0 115-45t44-118v-93h-1v-1q1-2 1-3v-54q0-18 10.5-35.5t21-27.5 38.5-35q18-16 29.5-27t27.5-29.5 26.5-37T702 476t14.5-53.5T721 359q0-49-12.5-95.5t-35-85.5-55-72.5-71-56.5T463 13 368 0zm-1 960q-45 0-70-26.5T272 861v-43q41 14 96 14 29 0 53-4t43-11v44q0 47-25.5 73T367 960zm189-396q-2 1-6 5-21 18-32 29t-26 29.5-21.5 38.5-6.5 44v40q-34 19-97 19-16 0-29.5-1.5t-23.5-3-18.5-4T282 756t-10-5v-41q0-49-55-101-7-6-21-19l-7-6q-17-15-27.5-26t-25-27.5-23.5-33T95.5 460 83 413.5 79 359q0-123 84-209t205-86q80 0 146.5 39.5T619 211t38 148q0 27-3.5 50.5t-11 42.5-16 33.5T605 515t-23 25-26 24z"
  }));
};

module.exports.Calculator = function Calculator(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M960 0H64Q38 0 19 19T0 64v896q0 26 19 45t45 19h896q26 0 45-19t19-45V64q0-17-8.5-32T992 8.5 960 0zm0 960H64V64h896v896zM224 352h64v64q0 14 9.5 23t22.5 9 22.5-9 9.5-23v-64h64q13 0 22.5-9t9.5-22.5-9.5-23T416 288h-64v-64q0-13-9.5-22.5T320 192t-22.5 9.5T288 224v64h-64q-13 0-22.5 9.5t-9.5 23 9.5 22.5 22.5 9zm209.5 239.5q-9.5-9.5-23-9.5t-22.5 9l-68 68-68-68q-9-9-22.5-9t-23 9.5T197 614t10 22l68 68-68 68q-6 6-8.5 14.5t0 16.5 8.5 14q4 5 10 7.5t12.5 2.5 12.5-2.5 10-7.5l68-67 68 67q4 5 10 7.5t12.5 2.5 12.5-2.5 10-7.5q23-22 0-45l-68-68 68-68q10-9 10-22t-9.5-22.5zM608 352h192q13 0 22.5-9t9.5-22.5-9.5-23T800 288H608q-13 0-22.5 9.5t-9.5 23 9.5 22.5 22.5 9zm0 320h192q13 0 22.5-9t9.5-22.5-9.5-23T800 608H608q-13 0-22.5 9.5t-9.5 23 9.5 22.5 22.5 9zm0 128h192q13 0 22.5-9t9.5-22.5-9.5-23T800 736H608q-13 0-22.5 9.5t-9.5 23 9.5 22.5 22.5 9z"
  }));
};

module.exports.Calendar = function Calendar(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M960 96H704V32q0-13-9.5-22.5T672 0t-22.5 9.5T640 32v64H384V32q0-13-9.5-22.5T352 0t-22.5 9.5T320 32v64H64q-27 0-45.5 18.5T0 160v800q0 17 8.5 32t23.5 23.5 32 8.5h896q27 0 45.5-19t18.5-45V160q0-18-8.5-32.5t-23.5-23-32-8.5zm0 864H64V160h256v32q0 13 9.5 22.5T352 224t22.5-9.5T384 192v-32h256v32q0 13 9.5 22.5T672 224t22.5-9.5T704 192v-32h256v800zM736 512h64q13 0 22.5-9.5T832 480v-64q0-13-9.5-22.5T800 384h-64q-13 0-22.5 9.5T704 416v64q0 13 9.5 22.5T736 512zm0 256h64q13 0 22.5-9.5T832 736v-64q0-13-9.5-22.5T800 640h-64q-13 0-22.5 9.5T704 672v64q0 13 9.5 22.5T736 768zM544 640h-64q-13 0-22.5 9.5T448 672v64q0 5 1.5 10t4.5 9 7 7 9 4.5 10 1.5h64q13 0 22.5-9.5T576 736v-64q0-4-1-8.5t-3-8-5-6.5-6.5-5-8-3-8.5-1zm0-256h-64q-13 0-22.5 9.5T448 416v64q0 13 9.5 22.5T480 512h64q13 0 22.5-9.5T576 480v-64q0-7-2.5-12.5t-7-10-10-7T544 384zm-256 0h-64q-13 0-22.5 9.5T192 416v64q0 13 9.5 22.5T224 512h64q13 0 22.5-9.5T320 480v-64q0-7-2.5-12.5t-7-10-10-7T288 384zm0 256h-64q-13 0-22.5 9.5T192 672v64q0 13 9.5 22.5T224 768h64q13 0 22.5-9.5T320 736v-64q0-4-1-8.5t-3-8-5-6.5-6.5-5-8-3-8.5-1z"
  }));
};

module.exports.CallEnd = function CallEnd(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1040"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M962 216v1l-1 1q-86 60-199 132-8 1-21-6-18-9-89-50l-35-20-33 23q-67 47-161 141T283 598l-24 33 20 36q41 71 50 89 4 7 5.5 12t1.5 8v1q-50 79-133 200-7 1-15-5-42-30-79.5-67T64 851q5-90 81.5-212.5T362 376q70-69 136-123.5T624 160t114-58.5T836 79q17 6 54 43.5t67 79.5q4 7 5 14zm62 0q0-6-1-11l-2-10-3-10-4.5-10-5.5-10q-4-6-12.5-17t-30-36.5-42-45.5T879 30t-42-15q-62 2-133 31t-140.5 77.5T435 222 317 331 207.5 449t-99 128.5-77.5 141T0 853v1q0 17 16 41t36.5 44.5 45 42T134 1012l16 12q32 20 60.5 16.5T253 1016q3-3 13.5-19t24.5-37 30.5-45.5T352 868t25-38.5 14-21.5q4-6 6.5-14.5T400 776q0-6-1-12t-3-12.5-4.5-13T386 726q-10-19-51-91 43-61 134-152 52-52 90-84.5t61-48.5q73 41 91 51 50 26 83 5 16-10 105.5-70t100.5-68q24-17 24-52z"
  }));
};

module.exports.CallIn = function CallIn(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 1056"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1016 788q-4-4-25-18t-49-32.5l-56-37-50-33-28-17.5q-4-3-9.5-5t-11-3-11.5-1q-4 0-7 .5t-6.5 1-7.5 1.5-7.5 2-7 2.5-7.5 3-7 3.5q-19 10-91 51-61-43-152-134-90-90-133-151 41-73 51-91 26-50 5-83-11-17-70.5-107T268 39q-17-24-52-24-9 0-17.5 2t-17 5.5T165 31q-5 4-16.5 13t-37 30.5-45.5 42-36 45T15 204q1 42 15 88.5T68 385t53.5 91 66.5 90 71 82.5 72 75.5q59 59 118 109.5t128.5 99 141 77.5 134.5 31h1q17 0 41-16t44.5-36.5 42-45T1012 907l12-16q31-44 9-84-7-12-17-19zm-44 65q-30 42-67 79.5T851 977q-90-5-212.5-81.5T376.5 679 160 416.5 79 205q6-17 43.5-54T202 84q2-2 4-3t4.5-1.5 5.5-.5q1 0 2 1 60 86 132 199 0 8-6 21-2 3-5 9t-7.5 14-10.5 18-12.5 22-14.5 26l-20 35 23 33q47 67 141 161t160 140l33 24 36-20q29-17 54-31.5t35-18.5q11-7 20-7h1q81 51 200 133 1 7-5 15zM660 393q7 6 16 6h13l229 1q6 0 11.5-3.5t9-9T942 376v-17q-1-11-9-17.5t-18-6.5H764l262-262q9-9 9-22t-9.5-22.5T1003 19t-23 9L718 291l1-155q0-10-7-17t-16-7h-17q-6 0-11.5 2.5t-9 7T655 133v231h1l-2 12q1 11 6 17z"
  }));
};

module.exports.CallOut = function CallOut(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 1056"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1016 788q-4-4-25-18t-49-32.5l-56-37-50-33-28-17.5q-4-3-9.5-5t-11-3-11.5-1q-4 0-7 .5t-6.5 1-7.5 1.5-7.5 2-7 2.5-7.5 3-7 3.5q-19 10-91 51-61-43-152-134-90-90-133-151 41-73 51-91 26-50 5-83-11-17-70.5-107T268 39q-17-24-52-24-9 0-17.5 2t-17 5.5T165 31q-5 4-16.5 13t-37 30.5-45.5 42-36 45T15 204q1 42 15 88.5T68 385t53.5 91 66.5 90 71 82.5 72 75.5q59 59 118 109.5t128.5 99 141 77.5 134.5 31h1q17 0 41-16t44.5-36.5 42-45T1012 907l12-16q31-44 9-84-7-12-17-19zm-44 65q-30 42-67 79.5T851 977q-90-5-212.5-81.5T376.5 679 160 416.5 79 205q6-17 43.5-54T202 84q2-2 4-3t4.5-1.5 5.5-.5q1 0 2 1 60 86 132 199 0 8-6 21-2 3-5 9t-7.5 14-10.5 18-12.5 22-14.5 26l-20 35 23 33q47 67 141 161t160 140l33 24 36-20q29-17 54-31.5t35-18.5q11-7 20-7h1q81 51 200 133 1 7-5 15zM700 398l275-273-1 155q0 10 7 17t16 7h17q4 0 8.5-1.5t8-4.5 5-7 2.5-8V52l-.5-.5-.5-.5 2-12q0-10-6-16-3-3-7.5-5t-8.5-2l-12 1h-1l-229-1q-3 0-5.5.5t-5 2-4.5 3-3.5 3.5-3 4.5-2 5-.5 5.5v16q1 11 9 17.5t18 6.5h151L655 353q-10 9-10 22.5t9.5 23 23 9.5 22.5-10z"
  }));
};

module.exports.Camera = function Camera(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M928 160H781L704 32H320l-77 128H96q-30 0-63 26T0 255v513q0 38 28.5 67T89 864h841q21 0 43-13t36.5-35.5T1024 769V256q0-18-10-39t-33-39-53-18zm32 609q0 9-11 19.5T930 800H90q-7-1-16.5-10.5T64 768V255q0-13 12.5-21.5T96 224h183l77-128h314l57 97 18 31h183q10 0 18 8t11 14.5 3 9.5v513zM512 256q-93 0-158.5 65.5T288 480t65.5 158.5T512 704t158.5-65.5T736 480t-65.5-158.5T512 256zm0 384q-66 0-113-47t-47-113 47-113 113-47 113 47 47 113-47 113-113 47z"
  }));
};

module.exports.Camrecorder = function Camrecorder(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M638 159q2 0 2 3v127q0 39 34 57 3 1 5.5 2l5 2 5 1.5 5 1 5 .5h4.5q10 0 20-2.5t18-8.5l218-123v457L741 556q-16-11-37-11h-6l-6 .5-6 1.5-5.5 2-5.5 3q-6 3-11.5 7.5t-10 10-7 12-4.5 13-2 14.5v125q0 1-.5 2t-1.5 1H66l-2-3V162q0-1 .5-2t1.5-1h572zm352-32q-4 0-8.5 1t-10 3-9.5 6L704 289V162q0-14-5-26t-14-21-21-14.5-26-5.5H66q-27 0-46.5 19.5T0 162v572q0 28 19.5 47.5T66 801h572q27 0 46.5-19.5T704 734V609l263 153q7 7 24 7 7 0 13-3 20-8 20-30V161q0-23-20-31-6-3-14-3z"
  }));
};

module.exports.Chart = function Chart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 992 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M256 320H32q-13 0-22.5 9.5T0 352v640q0 13 9.5 22.5T32 1024h224q13 0 22.5-9.5T288 992V352q0-13-9.5-22.5T256 320zm-32 640H64V384h160v576zm384-450H384q-14 0-23 9.5t-9 22.5v450q0 13 9 22.5t23 9.5h224q13 0 22.5-9.5T640 992V542q0-13-9.5-22.5T608 510zm-32 450H416V574h160v386zM960 0H736q-13 0-22.5 9.5T704 32v960q0 13 9.5 22.5t22.5 9.5h224q13 0 22.5-9.5T992 992V32q0-13-9.5-22.5T960 0zm-32 960H768V64h160v896z"
  }));
};

module.exports.Check = function Check(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 0Q373 0 255 68.5T68.5 255 0 512t68.5 257T255 955.5t257 68.5 257-68.5T955.5 769t68.5-257-68.5-257T769 68.5 512 0zm0 961q-73 0-141.5-22.5T247 874t-96.5-97-64-123.5T64 512q0-91 35.5-174T195 195t143-95.5T512 64t174 35.5T829 195t95.5 143T960 512t-35.5 174T829 829.5t-143 96T512 961zm204-636L416 627 281 492q-10-10-23-10t-23 10q-2 2-4 5.5t-3 6.5-1.5 6.5 0 7 1.5 7 3 6.5l4 6 159 158q9 10 22.5 10t22.5-10l4-4 319-321q9-9 9-22.5t-9-22.5q-18-18-39-5-4 2-7 5z"
  }));
};

module.exports.Chemistry = function Chemistry(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 640 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M618 971 448 769V416h21q14 0 23-9.5t9-23-9-22.5-23-9h-53q-13 0-22.5 9t-9.5 23v397q0 13 8 22l131 157H117l131-157q8-9 8-22V384q0-14-9.5-23t-22.5-9h-53q-14 0-23 9t-9 22.5 9 23 23 9.5h21v353L22 971q-14 15-6 34 4 9 12 14t17 5h550q20 0 28.5-19t-5.5-34zM288 320q26 0 45-19t19-45.5-19-45-45-18.5q-13 0-25 5t-20.5 13.5T229 231t-5 25q0 6 1 11.5t3 10.5 5 10 6.5 9 7.5 7.5 9 6.5 10 5 10.5 3 11.5 1zm208.5-95q46.5 0 79.5-33t33-79.5T576 33 496.5 0 417 33t-33 79.5 33 79.5 79.5 33zM496 64q10 0 19 3.5t15.5 10 10 15.5 3.5 19q0 20-14 34t-34 14q-13 0-24-6.5T454.5 136t-6.5-24q0-20 14-34t34-14z"
  }));
};

module.exports.Clock = function Clock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 0Q373 0 255 68.5T68.5 255 0 512t68.5 257T255 955.5t257 68.5 257-68.5T955.5 769t68.5-257-68.5-257T769 68.5 512 0zm0 961q-73 0-141.5-22.5T247 874t-96.5-97-64-123.5T64 512q0-91 35.5-174T195 195t143-95.5T512 64t174 35.5T829 195t95.5 143T960 512t-35.5 174T829 829.5t-143 96T512 961zm32-462V192q0-13-9.5-22.5T512 160t-22.5 9.5T480 192v320q0 14 10 23l.5 1 .5 1 159 158q9 10 22.5 10t22.5-9.5 9-23-9-22.5z"
  }));
};

module.exports.Close = function Close(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 0Q373 0 255 68.5T68.5 255 0 512t68.5 257T255 955.5t257 68.5 257-68.5T955.5 769t68.5-257-68.5-257T769 68.5 512 0zm0 961q-73 0-141.5-22.5T247 874t-96.5-97-64-123.5T64 512q0-91 35.5-174T195 195t143-95.5T512 64t174 35.5T829 195t95.5 143T960 512t-35.5 174T829 829.5t-143 96T512 961zm181-630q-9-9-22.5-9t-22.5 9L512 467 376 331q-9-9-22.5-9t-22.5 9-9 22.5 9 22.5l136 136-136 136q-6 6-8.5 14t0 16.5T331 693q9 9 22.5 9t22.5-9l136-136 136 136q9 9 22.5 9t22.5-9q6-6 8.5-14.5t0-16.5-8.5-14L557 512l136-136q9-9 9-22.5t-9-22.5z"
  }));
};

module.exports.CloudDownload = function CloudDownload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M763 196q-34-91-106.5-142T478 3Q341 3 251.5 92.5T153 318q-67 22-110 83.5T0 540q0 94 64 163t152 69h28q7 0 13-2.5t10-7 6.5-10.5 2.5-12q0-13-9-22.5t-23-9.5h-28q-62 0-107.5-50T63 540q0-60 37-108t90-57l29-5-2-30h-1q0-119 72-196t190-77q179 0 231 169l7 22 23 1q59 1 110 30t82 79.5T962 477q0 28-6 55.5t-16.5 53-27 48-36 39-44.5 26-52 9.5h-9q-6 0-12 2.5t-10.5 7-7 10T739 740q0 13 9.5 22.5T771 772q58-2 107-28.5t80-69 48.5-93.5 17.5-104q0-109-75.5-189T763 196zM646 711q-6-7-15.5-7t-16.5 7l-70 78V467q0-3-1-6.5t-2-6-3-5.5-4-5-4.5-3.5-5.5-3-6-2-6-.5q-14 0-23 9.5t-9 22.5v322l-68-76q-7-7-16.5-7.5T379 711l-8 5q-7 7-7 17t7 17l116 127v1l8 8q7 7 16.5 7t16.5-7l8-8v-1l118-129q15-15 0-30z"
  }));
};

module.exports.CloudUpload = function CloudUpload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M763 196q-34-91-106.5-142T478 3q-91 0-163.5 41.5t-114 113T153 318q-67 22-110 83.5T0 540q0 94 64 163t152 69h92q14 0 23-9.5t9-22.5q0-7-2.5-12.5t-6.5-10-10-7-13-2.5h-92q-62 0-107.5-50T63 540q0-60 37-108t90-57l29-5-2-30h-1q0-78 32-140t92-97.5T478 67q179 0 231 169l7 22 23 1q90 1 156.5 65T962 477q0 56-22 108.5T875.5 673 780 708h-73q-13 0-22.5 9.5T675 740t9.5 22.5T707 772h73q58-2 105.5-28.5t77-69T1008 581t16-104q0-109-75.5-189T763 196zM536 451v-1l-8-8q-7-7-16.5-7t-16.5 7l-8 8v1L371 579q-7 7-7 16.5t7 17.5l8 5q7 7 16 5.5t17-8.5l68-76v322q0 14 9 23t22.5 9 23-9 9.5-23V539l70 78q7 7 16 8.5t16-5.5l8-5q7-8 7-17.5t-7-16.5z"
  }));
};

module.exports.Compass = function Compass(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M733 280 420 415q-9 4-13 13L263 717q-9 20 6 35 2 2 4.5 4t5 3 5.5 1.5 6 .5q7 0 13-3l306-127q2-1 3.5-2l3-2 2.5-2.5 2-3 2-2.5 151-297q11-20-4.5-36t-35.5-6zM358 665l87-178 88 110zm227-105-89-112 177-69zM512 0Q408 0 313 40.5t-163.5 109T40.5 313 0 512t40.5 199 109 163.5 163.5 109 199 40.5 199-40.5 163.5-109 109-163.5 40.5-199-40.5-199-109-163.5T711 40.5 512 0zm0 961q-73 0-141.5-22.5T247 874t-96.5-97-64-123.5T64 512q0-91 35.5-174T195 195t143-95.5T512 64t174 35.5T829 195t95.5 143T960 512t-35.5 174T829 829.5t-143 96T512 961z"
  }));
};

module.exports.ControlEnd = function ControlEnd(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 928 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M896 0q-13 0-22.5 9.5T864 32v470q-5-29-29-44L99 11Q83 1 65 1 48 1 34 9q-15 9-24 24T1 65L0 959q0 37 33 56 7 4 15 6t16 2q9 0 17.5-2.5T98 1013l737-447q24-15 29-44v470q0 13 9.5 22.5t22.5 9.5 22.5-9.5T928 992V32q0-24-23-31-5-1-9-1zM64 959l1-894 736 447z"
  }));
};

module.exports.ControlForward = function ControlForward(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m450 134 505 314-505 314V515L66 762V134l384 247V125v9zm3-64q-18 0-33 8-15 9-24.5 24t-9.5 32v132L88 80q-4-3-8-4.5l-8-3-8.5-2L55 70q-11 0-26 8Q2 93 2 134v628q0 41 28 56 14 8 28 8 16 0 31-10l297-186v132q0 9 2.5 17t7 15.5 11 13.5 13.5 10 15.5 6 16.5 2q19 0 34-10l506-314q9-5 16-13.5t10.5-19 3.5-21.5-3.5-21.5-10.5-19-16-13.5L486 80q-7-5-15.5-7.5T453 70z"
  }));
};

module.exports.ControlPause = function ControlPause(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 704 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M256 0H32q-6 0-12 2.5t-10.5 7-7 10T0 32v960q0 13 9.5 22.5T32 1024h224q14 0 23-9.5t9-22.5V32q0-13-9-22.5T256 0zm-32 960H64V64h160v896zM672 0H449q-13 0-22.5 9.5T417 32v960q0 13 9.5 22.5t22.5 9.5h223q6 0 12-2.5t10.5-7 7-10T704 992V32q0-9-4.5-16T688 4.5 672 0zm-32 960H481V64h159v896z"
  }));
};

module.exports.ControlPlay = function ControlPlay(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 864 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m65 65 735 447L64 959zm0-64Q48 1 34 9 1 28 1 65L0 959q0 37 33 56 7 4 15 6t16 2q9 0 17.5-2.5T97 1013l737-447q30-18 30-54 0-11-3.5-21.5t-10.5-19-16-13.5L98 11q-5-3-10.5-5t-11-3.5T65 1z"
  }));
};

module.exports.ControlRewind = function ControlRewind(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M574 134 69 448l505 314V515l384 247V134L574 381V125v9zm-3-64q18 0 33 8 34 19 34 56v132L936 80q5-4 10.5-6t11-3 11.5-1q11 0 25.5 8t21 22.5 6.5 33.5v628q0 12-2.5 22.5t-9 19.5-16.5 14q-7 4-13.5 6t-14.5 2q-9 0-16-2.5t-15-7.5L638 630v132q0 37-34 56-15 8-32 8-19 0-34-10L32 502q-7-4-12.5-10T10 479t-6-15-2-16q0-17 8-31.5T32 394L538 80q15-10 33-10z"
  }));
};

module.exports.ControlStart = function ControlStart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 928 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M927 65q0-37-33-56-14-8-31-8-18 0-34 10L93 458q-24 15-29 44V32q0-13-9.5-22.5T32 0 9.5 9.5 0 32v960q0 9 4.5 16t11.5 11.5 16 4.5q13 0 22.5-9.5T64 992V522q5 29 29 44l737 447q8 5 16.5 7.5t17.5 2.5q17 0 31-8 33-19 33-56zM127 512 863 65l1 894z"
  }));
};

module.exports.CreditCard = function CreditCard(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M928 112H96q-26 0-48 13t-35 35-13 48v480q0 40 28 68t68 28h832q40 0 68-28t28-68V208q0-26-13-48t-35-35-48-13zM96 176h832q13 0 22.5 9.5T960 208v64H64v-64q0-13 9.5-22.5T96 176zm832 544H96q-13 0-22.5-9.5T64 688V400h896v288q0 13-9.5 22.5T928 720z"
  }));
};

module.exports.Crop = function Crop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M992 800H864V206L983 87q7-6 9-14.5t0-16.5-9-14q-9-10-22-10t-23 10L820 160H224V32q0-13-9.5-22.5T192 0t-22.5 9.5T160 32v128H32q-13 0-22.5 9.5T0 192t9.5 22.5T32 224h128v608q0 2 1 7l1 1v4q3 6 7.5 10.5T180 862h4q6 2 8 2h608v128q0 13 9.5 22.5t22.5 9.5 22.5-9.5T864 992V864h128q13 0 22.5-9.5t9.5-22.5-9.5-22.5T992 800zM755 224 224 755V224h531zM269 800l531-530v530H269z"
  }));
};

module.exports.Cup = function Cup(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M833 416q-13 0-65-1v-64q0-26-18.5-45T704 287H64q-27 0-45.5 19T0 351v481q0 80 56 136t136 56h385q79 0 135-56t56-136v-33q21 1 40.5 1H833q79 0 135-56t56-135q0-89-68-147-54-46-123-46zM704 832q0 35-17 64.5T640.5 943 577 960H192q-53 0-90.5-37.5T64 832V351h640v481zm129-95q-10 0-65-1V480h65q54 0 91 36.5t37 91.5-37 92-91 37zM576 224q13 0 22.5-9.5T608 192V32q0-13-9.5-22.5T576 0t-22.5 9.5T544 32v160q0 13 9.5 22.5T576 224zm-384 0q13 0 22.5-9.5T224 192V32q0-13-9.5-22.5T192 0t-22.5 9.5T160 32v160q0 13 9.5 22.5T192 224zm192 0q13 0 22.5-9.5T416 192V32q0-13-9.5-22.5T384 0t-22.5 9.5T352 32v160q0 13 9.5 22.5T384 224z"
  }));
};

module.exports.CursorMove = function CursorMove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m1016 497-8-8v-1h-1L878 370q-7-7-17-7t-17 7l-6 8q-6 7-5 16t8 16l77 70H546V106l70 77q7 7 16 8t16-5l8-6q7-7 7-17t-7-17L543 22q-4-8-12-13l-2-1q-6-7-15.5-7T497 8l-8 8-1 1-115 127q-7 7-7 17t7 17l8 6q2 2 4 3t4.5 1.5 5 .5 5-.5 5-1.5 4.5-2.5 4-3.5l69-77v375H106l77-69q7-7 8-16t-5-16l-6-8q-4-5-10.5-6.5t-12.5 0-11 6.5L22 483q-8 4-13 12l-1 2q-7 6-7 15.5T8 529l8 8 1 1 127 115q5 4 11 6t12.5 0 10.5-6l6-8q4-4 5-10t-1.5-12-6.5-10l-78-69h379v376l-69-77q-7-7-16-8t-16 5l-8 6q-4 4-6 10.5t0 12.5 6 11l115 127 1 1 8 8q7 7 16.5 7t15.5-7l8-8q1 0 1-.5v-.5l118-129q7-7 7-17t-7-17l-8-6q-7-6-16-5t-16 8l-69 77V544h373l-77 69q-7 7-8 16t5 16l6 8q4 4 10.5 6t12.5 0 11-6l127-115q0-1 1-1l8-8q7-7 7-16.5t-7-15.5z"
  }));
};

module.exports.Cursor = function Cursor(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M921 103 585 889 466 545 121 440zm83-102q-9 0-22 5L28 411Q2 422 .5 440.5T23 474l395 123 130 404q13 22 31 22 19 0 31-27l408-954q8-19 4-30t-18-11z"
  }));
};

module.exports.Diamond = function Diamond(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1019 295 879 28q-6-12-20-20t-27-8H192q-13 0-27 8t-20 20L5 290q-6 12-5 28t9 26l480 670q8 10 19 10 5 0 10-2.5t9-7.5l488-664q16-23 6-50-1-3-2-5zm-77-7H771l69-197zM575 64h206l-64 183zm93 224H371L511 86zm-354-31L250 64h199zm367 95L509 844 345 352h336zM437 831 93 352h185zm312-479h185L581 832zM188 82l69 206H79z"
  }));
};

module.exports.Direction = function Direction(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 928 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M919 298 740 106q-10-10-24-10H449l-1-66q0-3-.5-6.5T445 17t-4-5.5-5-4.5-6-3.5-6.5-2.5-7.5-1q-5 0-9.5 1.5T398 6t-6.5 6.5-4 8T386 30l-1 66H32q-8 0-15.5 4.5T4.5 112 0 128v384q0 13 9.5 22.5T32 544h353v450q0 12 9.5 21t22.5 9 22.5-9 9.5-21V544h267q7 0 13-2.5t11-7.5l179-192q8-9 8.5-22t-8.5-22zM702 480H64V160h638l150 160z"
  }));
};

module.exports.Directions = function Directions(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1017 186 917 75q-9-11-24-11H543V30q0-4-1-8t-3-7-5-6-6.5-5-7.5-3-9-1q-13 0-22.5 9T479 30v34H223q-13 0-22.5 9.5T191 96v224q0 13 9.5 22.5T223 352h256v64H131q-15 0-24 10L7 540q-8 9-8 21t8 21l100 113q4 5 10 7t14 2h348v290q0 12 9.5 21t22.5 9 22.5-9 9.5-21V704h257q13 0 22.5-9t9.5-23V448q0-14-9.5-23t-22.5-9H543v-64h350q15 0 24-11l100-112q5-6 7-14t0-15.5-7-13.5zM768 640H145l-71-79 71-81h623v160zm111-352H255V128h624l71 79z"
  }));
};

module.exports.Disc = function Disc(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 0Q373 0 255 68.5T68.5 255 0 512t68.5 257T255 955.5t257 68.5 257-68.5T955.5 769t68.5-257-68.5-257T769 68.5 512 0zm448 512q0 97-41 186L636 546l2-8 1.5-8.5 1-9 .5-8.5q0-18-4.5-34.5t-13-30.5-20.5-26-26-20.5-30.5-13T512 383q-21 0-42 7L301 117q99-53 211-53 170 0 298 113 123 110 146 272 4 32 4 63zm-448-65q27 0 46 19t19 46-19 46-46 19-46-19-19-46 19-46 46-19zM247 151l170 274-1 1-2 2-283-152q47-74 116-125zM64 512q0-94 38-179l284 152q-3 14-3 27 0 35 17.5 64.5t47 47T512 641q18 0 36-5l170 274q-97 50-206 50-73 0-141.5-22.5t-123.5-64-96.5-96.5-64-123.5T64 512zm708 364L603 603h1v-1l285 152q-47 72-117 122z"
  }));
};

module.exports.Dislike = function Dislike(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M431 0q249 0 296 18 13 6 34 21 15 12 54.5 19.5T947 72q8 1 14.5 4t10.5 8q2 3 8 13t17 33.5 20.5 51.5 16.5 70 7 85q0 145-49 224-3 4-7.5 7.5T975 574t-11 2q-84 0-184.5 102T606 955q-18 41-25 49-19 19-60 20-27 0-54.5-17T423 964q-19-31-22-89t3.5-108 17.5-96q-180 1-242 1-59 0-95.5-32T47 556q-1-44 9-67-40-39-41-77-1-47 46-96-1-2-4-9.5T52.5 294 50 281.5 49 267q2-55 64-98-5-33 1-59Q138 0 431 0zm499 137q-164-13-208-46l-3-3q-9-6-14.5-9t-22-6.5-45.5-5-79-2.5-127-1q-242 0-255 60-4 22 19 45 5 12 0 24.5T179 211h-1q-5 2-12 5t-20.5 11-22.5 19.5-10 23.5q0 3 .5 6.5t1 6.5 2 6l2.5 5 2.5 4 2.5 3.5 2 2.5 1.5 2 .5 1q7 10 4.5 23T120 351q-6 3-13 8.5T89.5 380 79 410q1 25 38 47 13 7 16 22 1 7-.5 13.5T127 505q-2 2-4.5 7t-7 18.5T111 555q0 7 2 13.5t5 11.5 6.5 9 8 7 9 5 9.5 3.5 9 2 8.5 1 7 .5h4.5q153 0 288-1 17 0 27 15 9 13 3 30-25 72-32.5 155T478 931q1 2 4.5 8.5t5.5 8.5 6.5 5.5 11 5T521 960q13 0 26-30 77-186 186-296.5T944 513q33-74 33-176 0-45-9-89.5t-18.5-70T930 137z"
  }));
};

module.exports.Doc = function Doc(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 736 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M416 0H64Q37 0 18.5 18.5T0 64v896q0 27 18.5 45.5T64 1024h608q27 0 45.5-18.5T736 960V320zm256 347v5H384V64h6zM64 960V64h256v352h352v544H64z"
  }));
};

module.exports.Docs = function Docs(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M768 0H416q-27 0-45.5 18.5T352 64h352v256h256v512H736v64h224q27 0 45.5-18.5T1024 832V256zm0 256V90l165 166H768zM64 128q-27 0-45.5 18.5T0 192v768q0 27 18.5 45.5T64 1024h544q27 0 45.5-18.5T672 960V384L416 128H64zm544 832H64V192h288v256h256v512zM416 384V218l165 166H416z"
  }));
};

module.exports.Drawer = function Drawer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1023 446 905 39q-1-7-6-12.5T888 18t-13-3H139q-7 0-13.5 3t-11 8.5T108 39L1 426q-1 5-.5 10.5T3 447q-3 10-3 18v352q0 26 18.5 45T64 881h896q27 0 45.5-19t18.5-45V460q0-8-1-14zM164 79h686l93 322H645q0 23-6.5 43T620 480t-28 27.5-36.5 17.5-43.5 6q-29 0-53-9.5T417.5 495 390 454t-10-53H74zm796 738H64V465h263q21 61 70 95.5T512 595q44 0 81.5-15.5t64-45T698 465h262v352z"
  }));
};

module.exports.Drop = function Drop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 704 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M350 1023q-95 0-175.5-46.5T47 850.5 0 677q0-174 234-531 50-77 91-132 9-13 25-13t26 13q7 9 18 24.5T432.5 92t53.5 79 58.5 94T604 371t50.5 106.5T691 583t13 94q0 56-18 109t-50.5 95.5-76 74.5-97.5 49.5-112 17.5zm1-935q-39 55-78 116t-91.5 151.5-85 177T64 677q0 116 84 199t202 83q120 0 205-83t85-199q0-41-15.5-95.5t-43-112-57.5-112-65.5-110-60-91T351 88z"
  }));
};

module.exports.EarphonesAlt = function EarphonesAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1056"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1024 589q0-69-6-124-11-96-54.5-179.5T854 142.5 700 49 515 15q-135 0-249 64T82 255.5 5 505q-2 49-3 75v15q0 3-.5 6l-1 6-.5 6v215q0 35 25 60t60 25h86q36 0 60.5-25t24.5-60V613q0-23-11-42.5t-30.5-31T171 528H85q-9 0-17 2v-7.5l.5-6 .5-5V509q6-121 67-219.5T297 135t218-56q172 0 296 111.5T954 472q1 7 2 23t2 35q-10-2-19-2h-85q-36 0-60.5 25T769 613v214q0 23 12 43t33 31l-206 81v-5q0-9-4-16.5T592.5 949t-16.5-4h-96q-13 0-22.5 9t-9.5 23v32q0 13 9.5 22.5t22.5 9.5h97l57-1 330-129 4-2 3.5-2.5 3.5-3.5q22-10 35.5-30.5T1024 827V613q0-7-2-15 2-5 2-9zm-939 3h86q5 0 8.5 1.5t6.5 4.5 4.5 7 1.5 8v215q0 8-6 14.5t-15 6.5H85q-9 0-15-6.5T64 828V613q0-4 1.5-8t4.5-7 7-4.5 8-1.5zm748 21q0-3 1-6.5t3-6 4.5-4.5 5.5-3 7-1h85q6 0 10.5 3t7.5 7.5 3 10.5v214q0 5-3 10t-7.5 8-10.5 3h-85q-9 0-15-6.5t-6-14.5V613z"
  }));
};

module.exports.Earphones = function Earphones(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 992"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1024 589q0-69-6-124-14-128-84-231T754 73 515 15q-135 0-249 64T82 255.5 5 505q-2 49-3 75v15q0 3-.5 6l-1 6-.5 6v279q0 35 25 60t60 25h86q36 0 60.5-25t24.5-60V613q0-23-11-42.5t-30.5-31T171 528H85q-4 0-8.5.5T68 530q0-6 .5-13.5l.5-7.5q5-91 42-170.5T207 202t139.5-90T515 79q85 0 161.5 30T811 190.5 907 315t47 157q2 14 4 58-3 0-6-.5t-6.5-1-6.5-.5h-85q-36 0-60.5 25T769 613v278q0 14 4 26.5t12 23 18.5 18.5 23.5 12.5 27 4.5h85q35 0 60-25t25-60V613q0-7-2-15 2-5 2-9zm-939 3h86q6 0 11 3t7.5 7.5T192 613v279q0 8-6 14.5t-15 6.5H85q-6 0-10.5-3t-7.5-8-3-10V613q0-9 6-15t15-6zm875 299q0 8-6 14.5t-15 6.5h-85q-3 0-5.5-.5t-4.5-2-3.5-2.5-3-3-2.5-4-1.5-4.5-.5-4.5V613q0-9 6-15t15-6h85q9 0 15 6t6 15v278z"
  }));
};

module.exports.Emotsmile = function Emotsmile(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M781 607q-12-5-24.5-.5T739 623l-4.5 9-12.5 20-22 29-32 30.5-42 28.5-52.5 20.5L510 769q-1 0-2 .5l-1 .5q-28 0-54-6t-46-16.5-37.5-22.5-31-26.5T315 672t-17-24-10-17-4-8q-6-12-18-16.5t-24.5 1-17 17.5 1.5 25q1 3 3.5 8t10.5 17.5 16.5 25 23 28.5 30.5 30 37.5 28 45 24 53 16.5T506 834q1 0 4-1 57 0 108-19.5t81-43 54.5-54.5 32-44.5T797 649q3-4 3.5-9.5t-1-10-3.5-9-6-8-9-5.5zM512 0Q408 0 313 40.5t-163.5 109T40.5 313 0 512t40.5 199 109 163.5 163.5 109 199 40.5 199-40.5 163.5-109 109-163.5 40.5-199-40.5-199-109-163.5T711 40.5 512 0zm0 960q-73 0-141.5-22.5t-123.5-64-96.5-96.5-64-123.5T64 512q0-91 35.5-174T195 195t143-95.5T512 64t174 35.5T829 195t95.5 143T960 512t-35.5 174T829 829t-143 95.5T512 960zM352 480q26 0 44.5-19t18.5-45q0-17-8.5-32t-23-23.5T352 352q-27 0-45.5 19T288 416q0 39 34 57 15 7 30 7zm320 0q7 0 14-2t13.5-5 12-7.5 10-10T729 444t4.5-13.5T735 416q0-26-18.5-45t-45-19-45 19-18.5 45 18.5 45 45.5 19z"
  }));
};

module.exports.Energy = function Energy(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 704 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M435 65h1-1zm0 0-72 379 262 1-356 514 72-417-262-1zm0-64h-5q-8 1-14 3.5T402.5 12 389 24q-1 1-1.5 2t-1.5 2L27 502q-23 32-5 67 3 6 7.5 11.5t10 10 12 7.5 13.5 4.5 14 1.5l185 1-59 343q-4 22 7 41.5t31 28.5q6 3 12.5 4t13.5 1q29 0 49-26l359-514q23-32 5-67t-57-35H440l58-301q1-4 1.5-7.5t.5-7.5q0-9-2.5-17T491 33t-9.5-13T469 10t-15-6.5T438 1h-3z"
  }));
};

module.exports.EnvelopeLetter = function EnvelopeLetter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1023 473q0-4-1-8t-2.5-8-3.5-7.5-5-6.5l-1-1q-2-3-5-6l-6-6-167-168V159q0-13-9.5-22.5T800 127H699L582 27q-11-11-24.5-17.5T529 1t-30 0-28.5 8.5T446 27L330 127H224q-13 0-22.5 9.5T192 159v105L29 427Q0 446 0 481v479q0 27 19 45.5t45 18.5h896q17 0 32-8.5t23.5-23.5 8.5-32V478l-1-5zM269 726 64 916V545zm62 30q6-3 11-9 1-1 2-2.5t2-3.5l138-128q11-9 25-9t24 8l384 348H110zm427-26 202-179v361zm140-313h-1l55 55-120 107V351zM491 72q10-9 23-9 6 0 12 2.5t11 6.5l64 55H427zm277 119v445l-57 51-137-124q-6-5-13-9t-14-6.5-14.5-4.5-15.5-2.5-15.5 0T486 543t-15 5-14.5 7-13.5 9L316 682l-60-53V191h512zM104 443l88-88v217L75 469l27-26h2z"
  }));
};

module.exports.EnvelopeOpen = function EnvelopeOpen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1023 473q0-4-1-8t-2.5-8-3.5-7.5-5-6.5l-1-1q-2-3-5-6l-6-6L582 27Q555 0 514 0t-68 27L29 427q-6 6-12 13T5.5 458.5 0 481v479q0 27 19 45.5t45 18.5h896q17 0 32-8.5t23.5-23.5 8.5-32V478l-1-5zM270 726 64 916V545zm66 27 6-6 1-1 141-130q11-9 25-9t24 8l384 345H110zm421-22 203-180v362zM104 443 491 72q10-9 23-9t23 9l361 345h-1l55 55-242 215-136-121q-18-15-41-20t-47 0-43 21L317 683 75 469l27-26h2z"
  }));
};

module.exports.Envelope = function Envelope(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1023 168q1-3 1-6t-1-6l-2-6q-12-54-77-54H112q-30 0-57.5 11T13 137l-5 5q-10 11-7 26-1 2-1 4v516q0 40 36 76t76 36h832q37 0 58.5-34t21.5-78V170.5l-1-2.5zm-911-8h832L512 505 81 161q8-1 31-1zm832 576H112q-9 0-20.5-8T72 708.5 64 688V230l427 341q9 8 21 8 12-1 21-8l427-341v462q0 44-16 44z"
  }));
};

module.exports.Equalizer = function Equalizer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M160 388V32q0-13-9.5-22.5T128 0t-22.5 9.5T96 32v356q-42 11-69 45.5T0 512t27 78.5T96 636v356q0 13 9.5 22.5t22.5 9.5 22.5-9.5T160 992V636q42-11 69-45.5t27-78.5q0-11-1.5-22t-5-20.5-9-19T229 433t-14-15-16.5-13-18.5-10-20-7zm-32 188q-27 0-45.5-19T64 512t18.5-45 45.5-19q27 0 45.5 19t18.5 45q0 39-35 57-14 7-29 7zm416 4V32q0-13-9.5-22.5T512 0t-22.5 9.5T480 32v548q-42 11-69 45.5T384 704t27 78.5 69 45.5v164q0 13 9.5 22.5t22.5 9.5 22.5-9.5T544 992V828q16-4 31-12.5t27-20 20.5-26 13-31T640 704q0-44-27-78.5T544 580zm-32 188q-9 0-17.5-2.5T479 759t-12.5-10-9.5-13-6.5-15-2.5-17q0-26 18.5-45t45.5-19q27 0 45.5 19t18.5 45q0 39-35 57-14 7-29 7zm416-572V32q0-13-9.5-22.5T896 0q-6 0-12 2.5t-10.5 7-7 10T864 32v164q-42 11-69 45.5T768 320t27 78.5 69 45.5v548q0 13 9.5 22.5t22.5 9.5 22.5-9.5T928 992V444q21-5 38.5-17t30.5-28 20-36.5 7-42.5q0-44-27-78.5T928 196zm-32 188q-13 0-25-5t-20.5-13.5T837 345t-5-25q0-26 18.5-45t45.5-19q27 0 45.5 19t18.5 45q0 39-35 57-14 7-29 7z"
  }));
};

module.exports.Event = function Event(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M676 862q-12 0-20-8.5t-8-20.5V691q0-12 8-20t20-8h142q12 0 20.5 8t8.5 20v142q0 12-8.5 20.5T818 862H676zm142-171H676v142h142V691zM960 96q26 0 45 19t19 45v800q0 26-19 45t-45 19H64q-26 0-45-19T0 960V160q0-26 19-45t45-19h256V32q0-14 9-23t23-9 23 9 9 23v64h256V32q0-14 9-23t23-9 23 9 9 23v64h256zM64 960h896V160H704v32q0 14-9 23t-23 9-23-9-9-23v-32H384v32q0 14-9 23t-23 9-23-9-9-23v-32H64v800z"
  }));
};

module.exports.Exclamation = function Exclamation(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M480 674V192q0-14 9-23t23-9 23 9 9 23v482h-64zm0 63h64v60h-64v-60zM0 512q0-212 150-362T512 0t362 150 150 362-150 362-362 150-362-150T0 512zm961 0q0-185-132-316.5T512 64 195.5 195.5 64 512t131.5 316.5T512 960t317-131.5T961 512z"
  }));
};

module.exports.Eye = function Eye(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M531 257q-39 0-74.5 15.5t-61 41-41 61T339 449t15.5 75 41 61.5 61 40.5 74.5 15q53 0 97-25.5t69.5-69.5 25.5-97q0-79-56-135.5T531 257zm0 320q-34 0-64-17.5t-47.5-47T402 448q0-26 10-49.5t27.5-41 41-27.5 49.5-10q53 0 90.5 37.5T658 448t-37 91-90 38zm509-136q0-1-.5-2.5t-.5-2.5-.5-1.5l-.5-.5v-1l-1-2q-68-157-206-246.5T530 95q-107 0-206 39T144.5 249.5 18 431v2.5l-1 1.5v3l-1 2q-1 6-1 9 0 2 .5 4t.5 4q0 1 1 3v2l.5 1.5.5.5v3q69 157 207.5 245.5T528 801q107 0 205.5-38.5T912 648t125-181q1 0 1-1v-1.5l.5-1 .5-.5v-3l1-2q1-6 1-9 0-2-.5-4t-.5-4zM528 737q-142 0-263-74.5T81 449q63-139 185-214.5T530 159q92 0 176.5 32T862 289.5 975 449q-63 139-184 213.5T528 737z"
  }));
};

module.exports.Eyeglass = function Eyeglass(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1041 588q0-2-61-368 0-5-2-13v-2q-2-13-3-20.5t-4.5-22-8.5-24-13.5-22.5T928 95t-28-15.5T861.5 68 813 64q-14 0-23 9.5T781 96t9 22.5 23 9.5q26 0 44.5 5t28.5 11 16.5 19 8 22 4.5 28q1 12 2 17 0 2 13.5 75T952 431q-11-9-23-16t-25.5-12.5T876 393t-29-6-30-2q-60 0-111.5 30T623 495q-18-7-42-12t-53-5q-52 0-94 17-20-33-49-57.5T319 399t-78-14q-79 0-141 50 8-53 21.5-127.5T136 230l2-17q2-16 3.5-23.5T147 170t10.5-18 17-12.5 27-9T240 128q13 0 22.5-9.5T272 96t-9.5-22.5T240 64q-30 0-55 5.5T144 83t-28.5 21.5-19.5 24-11.5 27-6 25.5-3.5 24l-1 2-1 13-58 366q-1 4 0 9v14q0 92 67 157.5T241 832q93 0 158.5-65.5T465 609q0-27-7-54 8-3 16.5-5.5t23-5T528 542q21 0 39 3.5t31 8.5q-4 13-5.5 27t-1.5 28q0 92 66.5 157.5T817 832t158.5-65.5T1041 609q0-2-.5-5.5t-.5-4.5q2-6 1-11zM241 768q-66 0-114-47.5t-48-112 48-112T241 449q44 0 80.5 21.5t58 58T401 609q0 66-47 112.5T241 768zm576 0q-66 0-114-47.5t-48-112 48-112T817 449q38 0 70.5 16.5t55 45T973 574v5l.5 4.5.5 4.5v4l2 8q1 8 1 9 0 32-13 61.5t-34 51-50.5 34T817 768z"
  }));
};

module.exports.Feed = function Feed(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M102 330q-14 0-23.5 9.5T69 363q0 9 4.5 16.5t12 12T102 396q89 0 170.5 25.5t145.5 73 111.5 112T602 752t25 171q0 14 9.5 23.5T660 956q7 0 13-2.5t10.5-7 7-10.5 2.5-13q0-126-45-236T525 498.5 337.5 375 102 330zm0-327q-7 0-13 2.5t-10 7T72 23t-3 12q0 14 10 23.5t23 9.5q87 0 171.5 17.5t160 49.5 145 79T705 318t104 126.5 79 145 49.5 160T955 921q0 13 9.5 23t23.5 10q6 0 12-3t10.5-7 7-10.5 2.5-12.5q0-125-33-244t-92-219.5T751 272 565.5 128 346 36 102 3zm82 657q-75 0-127.5 53T4 840.5 56.5 968t127.5 53 127.5-53T364 840.5 311.5 713 184 660zm0 298q-48 0-82.5-34.5t-34.5-83 34.5-83T184 723q32 0 59 15.5t42.5 43T301 840q0 49-34.5 83.5T184 958z"
  }));
};

module.exports.Film = function Film(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 992"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M800 256h64q13 0 22.5-9t9.5-23v-32q0-13-9.5-22.5T864 160h-64q-13 0-22.5 9.5T768 192v32q0 14 9.5 23t22.5 9zm0 192h64q13 0 22.5-9t9.5-23v-32q0-13-9.5-22.5T864 352h-64q-13 0-22.5 9.5T768 384v32q0 14 9.5 23t22.5 9zm0 192h64q13 0 22.5-9t9.5-23v-32q0-13-9.5-22.5T864 544h-64q-13 0-22.5 9.5T768 576v32q0 14 9.5 23t22.5 9zm0 192h64q13 0 22.5-9t9.5-23v-32q0-13-9.5-22.5T864 736h-64q-13 0-22.5 9.5T768 768v32q0 14 9.5 23t22.5 9zM160 256h64q13 0 22.5-9t9.5-23v-32q0-13-9.5-22.5T224 160h-64q-13 0-22.5 9.5T128 192v32q0 14 9.5 23t22.5 9zm0 192h64q13 0 22.5-9t9.5-23v-32q0-13-9.5-22.5T224 352h-64q-13 0-22.5 9.5T128 384v32q0 14 9.5 23t22.5 9zm0 192h64q13 0 22.5-9t9.5-23v-32q0-13-9.5-22.5T224 544h-64q-13 0-22.5 9.5T128 576v32q0 14 9.5 23t22.5 9zm0 192h64q13 0 22.5-9t9.5-23v-32q0-13-9.5-22.5T224 736h-64q-13 0-22.5 9.5T128 768v32q0 14 9.5 23t22.5 9zM960 0H64Q38 0 19 19T0 64v864q0 26 19 45t45 19h896q26 0 45-19t19-45V64q0-17-8.5-32T992 8.5 960 0zm0 928H64V64h896v864z"
  }));
};

module.exports.Fire = function Fire(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 832 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M412 1023q-180 0-296-112T0 626q0-35 8-74.5T26 483t22.5-58.5 18.5-41T77 366q10-19 31-16 10 1 17.5 7.5T135 373q19 73 46 116 26 41 56 61-29-123-7-238 13-69 43.5-126.5t61.5-89T402.5 41t52-30T480 2q8-2 16-.5T511 9q13 12 9 30-1 8-3 20.5t-4 51 .5 75.5 13 86 29.5 91q5 9 11 20.5t14 24.5q4-37 13-67 22-79 85-115 5-3 8-4 8-4 16.5-3t15.5 6.5 10.5 14T731 257q0 3-.5 8t.5 20 4.5 31 13 40 24.5 48q34 57 46.5 103.5T832 626q0 68-20 129.5t-57.5 110-89 84T549 1004t-137 19zM100 468q-36 90-36 157 0 146 98 240t250 94q155 0 255.5-94T768 625q0-42-4.5-71.5t-15-56T718 437q-35-58-46-116-11 17-17 38-8 30-12 68.5t-3.5 55.5 1.5 24q0 11-5.5 20T619 540q-5 1-10 1.5t-10-1.5-9-5-7-7q-60-85-85-138-59-128-46-305-23 14-44 32t-45 46-42.5 70-27.5 91q-7 38-7 80.5t4 74 11 61 10.5 41.5 5.5 16 2 8.5-.5 8.5-2.5 8-5 8q-13 14-31 10-5-1-12.5-3.5T241 625t-36.5-21-39-33.5T127 523q-7-11-14-25.5T100 468z"
  }));
};

module.exports.Flag = function Flag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 896 1040"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M616 111q-37 0-71.5-7T485 86.5t-55.5-23-59-23-70.5-18-89-7.5q-37 0-72 10.5t-59 25-43 29T9 104l-9 10v895q0 8 4.5 15.5t11.5 12 16 4.5q13 0 22.5-9.5T64 1009V601q64-42 139-42 68 0 128.5 15t98 33 89.5 33 105 15q45 0 89.5-9.5t76-24T846 593t38-24l12-10V15q-5 4-14 10.5t-38.5 23-60 29.5-76.5 23-91 10zm216 416q-99 64-208 64-15 0-29.5-1t-28.5-4-25-6-26-8.5-24-9L464 552q-34-13-54-20.5T355 514t-72.5-14.5T203 495q-73 0-139 32V140q67-61 147-61 33 0 61.5 3.5T328 94t42.5 14 43.5 18q37 16 59 24.5t62 16.5 81 8q108 0 216-49v401z"
  }));
};

module.exports.FolderAlt = function FolderAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M960 144H480l-96-96H64q-26 0-45 18.5T0 112v672q0 27 19 45.5T64 848h896q27 0 45.5-18.5T1024 784V208q0-10-3-20t-9-18-14-14-17.5-9-20.5-3zM64 112h291l79 77 20 19h506v64H64V112zm0 672V336h896v448H64z"
  }));
};

module.exports.Folder = function Folder(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m355 112 78 77 20 19h507v576H64V112h291zm29-64H64q-27 0-45.5 18.5T0 112v672q0 27 18.5 45.5T64 848h896q27 0 45.5-18.5T1024 784V208q0-27-18.5-45.5T960 144H480z"
  }));
};

module.exports.Frame = function Frame(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M224 48H32q-13 0-22.5 9.5T0 80v192q0 13 9.5 22.5T32 304t22.5-9.5T64 272V112h160q13 0 22.5-9.5T256 80t-9.5-22.5T224 48zm768 544q-13 0-22.5 9.5T960 624v160H800q-13 0-22.5 9.5T768 816t9.5 22.5T800 848h192q13 0 22.5-9.5t9.5-22.5V624q0-13-9.5-22.5T992 592zM224 784H64V624q0-13-9.5-22.5T32 592t-22.5 9.5T0 624v192q0 13 9.5 22.5T32 848h192q13 0 22.5-9.5T256 816t-9.5-22.5T224 784zM992 48H800q-13 0-22.5 9.5T768 80t9.5 22.5T800 112h160v160q0 13 9.5 22.5T992 304t22.5-9.5 9.5-22.5V80q0-13-9.5-22.5T992 48z"
  }));
};

module.exports.GameController = function GameController(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1056"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M743 92q-51-25-72-35-42-21-80.5-31.5T515 15q-110 0-209 99L99 322Q16 405 2.5 493T42 687q11 23 34 72 19 40 28.5 60.5t28 55.5 31.5 54 32.5 44 37 37.5 39 21.5 44.5 9h9q19-2 35.5-8.5t29-15.5 24.5-25.5 20.5-30T453 925t14.5-38.5T480 844t10-42 10-44q9-42 13-57 5-22 18-40t45-50l6-6 4-4 9-9q16-16 27-26t21.5-18 20-12 21.5-7q18-5 57-13 37-9 56-13.5t53.5-14T905 471t44-21.5 38.5-28.5 24-35 12.5-44-6-47-20-41-36.5-38-44-33.5T862 150t-57-29-62-29zm215 244q-1 19-16.5 35.5T905 399t-55.5 22-60 17-65 15-57.5 13q-14 4-26.5 9.5t-23 11.5-22.5 16-22 19.5-24 23.5l-3.5 3.5-3 3-3.5 2.5q-1 1-4 4.5t-5 4.5q-24 25-37.5 40.5t-25 36T451 683q-5 18-12 49.5T427 787t-13 53-17 51.5-20 41-25.5 30T321 975h-5q-20 0-41-16t-38.5-38-38-59-34.5-66-34.5-72.5T98 657q-31-62-34-114.5T80.5 449t62.5-84q7-6 59-59 47-46 88-88 8-8 29.5-29t30.5-30q80-81 163-81 58 0 128 35 23 12 73 35 154 72 201 113 46 39 43 75zm-479 31h64v-64h-64v64zm0-96h64v-64h-64v64zm96 0h64v-64h-64v64zm0 96h64v-64h-64v64zM330 559l24-24q9-9 9-21.5t-9-21.5-21.5-9-21.5 9l-25 24-24-24q-9-9-21.5-9t-21.5 9q-4 3-6 7.5t-3 9 0 9.5 3 9.5 6 7.5l24 24-24 25q-9 9-9 21.5t9 21.5 21.5 9 21.5-9l24-24 25 25q9 9 22 9t22-9q2-2 4-4.5t3-5.5 1.5-6 .5-6-.5-6-1.5-5.5-3-5-4-5.5z"
  }));
};

module.exports.Ghost = function Ghost(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 832 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M416 0Q303 0 207.5 59.5T56 222 0 445v547q0 10 6 18t15 12q5 2 11 2 15 0 24-10l121-134 94 131q10 13 26 13 8 0 14.5-3.5t11.5-9.5l94-127 94 127q9 13 25 13 5 0 10-1.5t9-4.5 7-7l96-130 118 132q6 8 16 10.5t19-1.5 15-12 6-18V445q0-171-108-299Q621 25 470 4q-27-4-54-4zm352 908-89-99q-10-12-25-11-7 0-13.5 3.5T630 811l-94 127-93-127q-9-13-25-13t-26 13l-95 127-92-127q-1-2-3.5-4t-4.5-3.5-4.5-3-5.5-2-6-.5h-2q-14 0-23 10L64 909V445q0-103 47.5-191T240 115t176-51 176 51 128.5 139T768 445v463zM576 352q-17 0-32 8.5T520.5 384t-8.5 32q0 13 5 25t13.5 20.5T551 475t25 5q26 0 45-19t19-45q0-13-5-25t-13.5-20.5T601 357t-25-5zm-320 0q-26 0-45 19t-19 45 19 45 45 19 45-19 19-45q0-7-1.5-13t-4-12-6-11-7.5-9-9-7.5-11-6-12-4-13-1.5z"
  }));
};

module.exports.GlobeAlt = function GlobeAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 864 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M850 414q0-36-5.5-71t-16-68.5T803 210t-35-60-44-55-52.5-48.5T612 5q-8-5-16.5-5t-16 4.5T568 16q-7 12-3.5 24.5T579 60q97 57 152 151t55 203q0 90-31.5 168t-87 133-133 86.5T367 833q-13 0-26.5-1t-27-2.5-26.5-4-25.5-6T236 812t-25-9-24.5 0-17.5 17 .5 24.5T187 862q86 35 180 35h1v63h-93q-14 0-24 9t-10 22.5 10 23 24 9.5h253q14 0 23.5-9.5t9.5-23-9.5-22.5-23.5-9h-97v-67q186-22 302.5-154T850 414zm-131 3q0-57-17.5-111t-50-97.5-76-76T478 82 367 64q-72 0-137 28t-112.5 75.5-75 113T15 417q0 96 47 177t128 128 177 47q72 0 137-28t112.5-75 75-112T719 417zm-641 0q0-78 39-144.5T222.5 167 367 128q119 0 203.5 85T655 417q0 59-22.5 112T571 620.5 479 682t-112 23q-119 0-204-84.5T78 417z"
  }));
};

module.exports.Globe = function Globe(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1041 512q0-67-17-131t-48-119-75.5-101.5T803 80 687.5 25.5 559 1q-5-1-9-1h-22Q424 0 329 40.5t-164 109T55.5 313 15 512q0 83 26 161.5t73.5 141 110.5 110T366.5 998t161.5 26h20l5.5-.5 5.5-.5q99-6 188-48.5T900.5 864 1003 704t38-192zm-95 165q-52-15-140-26 10-68 10-139 0-56-7-111 44-5 81-12t48-10.5 17-5.5l-12-33q34 82 34 172 0 43-8 84.5T946 677zM301 512q0-18 1-35.5t2.5-34.5 3.5-34q27 2 55.5 3.5T426 414t69 1v222q-97 1-183 8-10-66-11-133zM559 68q39 11 73.5 49.5t61 96.5T735 344q-25 2-52 3.5t-58.5 2.5-65.5 2V68zm-64 1v283q-94-1-176-8 35-163 117-239 29-26 59-36zm0 632v254q-78-25-134-145-21-48-35-102 79-6 169-7zm64 255V701q47 1 89.5 2.5T728 708q-25 99-70 165.5T559 956zm0-319V415q101-1 186-8 7 52 7 105 0 68-11 133-83-7-182-8zm372-323q-3 1-7.5 2t-12.5 3-19 4.5-24.5 5-31 5T800 338q-6-29-13-56t-15.5-52-19-48-22-43-23.5-38q73 32 131 87t93 126zM375 91q-40 45-70.5 108.5T257 339q-82-9-134-22 67-136 202-205 25-12 50-21zM100 377q52 14 145 25-4 27-5.5 54.5T238 512q0 70 12 139-85 9-141 22-30-78-30-161 0-69 21-135zm37 355q53-11 127-19 18 67 46.5 123t64.5 97q-76-27-137-79T137 732zm570 191q28-40 50.5-93T794 714q29 4 55.5 8t41 7 26.5 6q-74 129-210 188z"
  }));
};

module.exports.Graduation = function Graduation(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M991 632V374l16-8q8-4 12.5-12t4.5-16q0-5-1-9t-3-7.5-5.5-7-6.5-5.5L526 52q-15-9-31 0L16 310q-16 9-16 28 0 9 4.5 16.5T17 366l210 112q-4 7-4 15v271q0 15 11 24 9 9 28.5 19.5t88 25.5T510 848q37 0 70-2t58.5-6 47-8.5T723 822t27.5-9.5 20-9.5 12-7.5 5.5-4.5q6-4 9-10.5t3-13.5V489q0-3-.5-6.5T797 476l130-68v224q-10 6-17 14.5t-11 19-4 22.5q0 5 1 10t2.5 9.5 3.5 9 5 8.5 6.5 7.5 7.5 6.5 8.5 5.5 9 4 10 2.5 10.5 1q27 0 45.5-19t18.5-45q0-37-32-56zM736 748q-17 8-40 15t-73.5 14-112.5 7q-151 0-223-37V510l208 110q3 2 7 3t8 1l15-4 211-111v239zM510 556 98 337l413-221 413 221z"
  }));
};

module.exports.Graph = function Graph(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M944 160q-33 0-56.5 23.5T864 240q0 12 5 26L674 434q-23-18-50-18-32 0-56 23l-153-77q-2-31-24.5-52.5T336 288q-22 0-40.5 10.5t-29 29T256 368q0 17 8 34L108 581q-14-5-28-5-33 0-56.5 23.5T0 656t23.5 56.5T80 736t56.5-23.5T160 656q0-15-6-30l158-182q13 4 24 4 17 0 32-7t27-19l149 75q0 16 6.5 30.5t17 25 25.5 17 31 6.5q9 0 18-2t17-6 15-9.5 12.5-12.5 9.5-15 6-17 2-18v-4l208-179q15 7 32 7 33 0 56.5-23.5T1024 240t-23.5-56.5T944 160z"
  }));
};

module.exports.Grid = function Grid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M960 1024H640q-27 0-45.5-18.5T576 960V640q0-27 18.5-45.5T640 576h320q27 0 45.5 18.5T1024 640v320q0 27-18.5 45.5T960 1024zm0-384H640v320h320V640zm0-192H640q-27 0-45.5-18.5T576 384V64q0-27 18.5-45.5T640 0h320q27 0 45.5 18.5T1024 64v320q0 27-18.5 45.5T960 448zm0-384H640v320h320V64zm-576 960H64q-27 0-45.5-18.5T0 960V640q0-27 18.5-45.5T64 576h320q27 0 45.5 18.5T448 640v320q0 27-18.5 45.5T384 1024zm0-384H64v320h320V640zm0-192H64q-27 0-45.5-18.5T0 384V64q0-27 18.5-45.5T64 0h320q27 0 45.5 18.5T448 64v320q0 27-18.5 45.5T384 448zm0-384H64v320h320V64z"
  }));
};

module.exports.Handbag = function Handbag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1056"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m1023 959-84-504q-5-49-44-84t-88-35h-71v-85q0-48-16.5-91.5t-46-75.5-71-50.5T513 15q-64 0-115.5 32T317 133t-29 118v85h-77q-16 0-32 4.5t-30 12-26 18.5-21 24-15 28-8 30L2 958q-5 40 15 62 19 21 54 21h873q23 0 38-7t24-17q20-23 17-58zM352 251q0-72 45.5-122T513 79q35 0 65 13.5t50.5 37 32 55T672 251v85H352v-85zm595 725-872 1q-12 0-10-11l77-504q2-12 8-23.5t15.5-20T187 405t24-5h77v73q-7 5-13 10.5T265 496t-6.5 15.5T256 528q0 27 18.5 45.5T320 592t45.5-18.5T384 528q0-36-32-55v-73h320v73q-32 19-32 55 0 27 18.5 45.5T704 592t45.5-18.5T768 528q0-36-32-55v-73h71q6 0 12 1.5t12 4 11.5 6 10 7.5 8.5 9 7 11 5 12 3 13l83 503q1 4-2 6.5t-10 2.5z"
  }));
};

module.exports.Heart = function Heart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1040 928"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M288 66q73 0 180 106l46 45 45-46q15-16 31.5-30t32.5-26 31.5-21T684 78.5t27.5-9.5 24.5-3q89 0 157 68 69 69 69 166t-69 167q-5 4-359 387-5 5-11 6.5t-10 1.5q-12 0-21-8-324-360-359-395-8-8-15.5-17.5t-14-19-12-19.5-10-20.5T74 361t-5.5-22-3.5-23-1-23q0-98 69-167 32-31 70-45.5T288 66zm0-64q-59 0-109 19T88 81q-43 43-65.5 99T0 292.5 22.5 405 88 504q9 9 49.5 53.5t91 100.5 100 111 83.5 92l34 37q27 28 66.5 28t67.5-28q354-383 358-386 88-88 88-212T938 89q-44-44-93.5-65.5T736 2q-53 0-111.5 35T513 126Q387 2 288 2z"
  }));
};

module.exports.Home = function Home(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1033 513 552 10q-4-5-10-7.5T529 0q-13 0-23 10L23 513q-6 7-8 15t.5 16.5T24 559q5 4 11 6.5t12 2 12-3 10-6.5l44-45v479q0 13 9 22.5t23 9.5h223q4 0 7.5-1t6.5-2.5 6-4 5-5 3.5-5.5 2.5-7 1-7l1-320h255v320q0 13 9.5 22.5t22.5 9.5h224q13 0 22.5-9.5T944 992V513l43 45q9 10 23 10 13 0 22-9 9-10 9.5-23t-8.5-23zm-153-58v505H720V640q0-13-9.5-22.5T688 608H369q-13 0-22.5 9.5T337 640l-1 320H177V455q0-4-1-8L529 79l352 368q-1 4-1 8z"
  }));
};

module.exports.Hourglass = function Hourglass(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 736 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M689 65h-64v215q0 78-44 138.5T446 525q64 32 103 70t58 84 19 105q0 94-1 175h64q13 0 22.5 9.5t9.5 23-9.5 22.5-22.5 9H47q-13 0-22.5-9T15 991.5t9.5-23T47 959h66q-1-86-1-175 0-88 42.5-149.5T290 525q-90-46-133.5-106T113 280V65H47q-13 0-22.5-9.5t-9.5-23T24.5 10 47 1h642q5 0 10 1.5t9 4.5 7 7 4.5 8.5T721 33q0 13-9.5 22.5T689 65zM176 784q0 89 1 175h384q1-92 1-175 0-36-8-63.5t-28.5-56T466 610t-98-50q-47 19-81 40t-55.5 41.5-34 44.5-17 47-4.5 51zM561 65H177v215q0 27 6.5 50t25 51.5 59 56.5T368 491q61-25 102-53t59-56.5 25-51.5 7-50V65z"
  }));
};

module.exports.Info = function Info(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M576 736h-32V448q0-13-9.5-22.5T512 416h-64q-13 0-22.5 9.5T416 448t9.5 22.5T448 480h32v256h-32q-13 0-22.5 9.5T416 768t9.5 22.5T448 800h128q13 0 22.5-9.5T608 768t-9.5-22.5T576 736zm-64-384q27 0 45.5-18.5T576 288t-18.5-45.5T512 224t-45.5 18.5T448 288t18.5 45.5T512 352zm0-352q-83 0-161.5 26T209 99 99 209 26 350.5 0 512q0 104 40.5 199t109 163.5 163.5 109 199 40.5 199-40.5 163.5-109 109-163.5 40.5-199q0-83-26-161.5T925 209 815 99 673.5 26 512 0zm0 961q-73 0-141.5-22.5T247 874t-96.5-97-64-123.5T64 512q0-91 35.5-174T195 195t143-95.5T512 64t174 35.5T829 195t95.5 143T960 512t-35.5 174T829 829.5t-143 96T512 961z"
  }));
};

module.exports.Key = function Key(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 864 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M576 0q-34 0-66.5 7.5t-60.5 22-53 34-45 44.5-34 53.5-21.5 61T288 288q0 107 69 187-7 0-13.5 2.5T332 485L10 809q-10 9-10 22.5T10 854v1h1l157 160q9 9 22 9t22.5-9 9.5-22.5-9-22.5L77 832l83-83 136 138q9 9 22 9t23-9q6-6 8-14.5t0-16.5-8-14L205 703l172-173q5-5 7.5-11.5T387 506q81 71 189 71 119 0 203.5-84.5T864 288q0-122-88-207Q691 0 576 0zm0 512q-61 0-112.5-30T382 400.5 352 288q0-93 65.5-158.5t158-65.5T734 129.5 800 288t-66 158.5T576 512z"
  }));
};

module.exports.Layers = function Layers(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m22 302 475 259q7 3 15 3 4 0 8-1t7-2l481-259q17-9 16-29 0-9-4.5-16.5T1007 245L532 4q-15-7-29 0L23 245q-8 4-13 11.5T5 273q0 20 17 29zM517 68l406 207-411 221-406-221zm484 412-95-48-68 37 80 41-411 221-406-221 85-43-68-37-101 50Q0 489-.5 508.5T16 537l475 259q8 4 16 4 4 0 7.5-1t7.5-3l480-259q17-9 17-28.5t-18-28.5zm0 224-90-44-68 37 75 37-411 221-406-221 79-36-68-37-95 43Q0 713-.5 732.5T16 761l475 259q3 1 5.5 2t5 1.5 5.5.5q4 0 7.5-1t7.5-3l480-259q17-9 17-28.5t-18-28.5z"
  }));
};

module.exports.Like = function Like(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M625 1024q-108 0-168.5-2t-93-8.5-41-11T295 985q-15-12-54.5-19.5T109 952q-16-1-25-12-2-3-8-13t-17-33.5T38.5 842 22 772t-7-85q0-146 49-224 10-15 28-15 84 0 184.5-102T450 69q2-3 6.5-14t5.5-14 5.5-11.5 8-11T485 11t12.5-6.5 16-3T535 0q18 0 37 8t35 21.5T633 60q19 31 22 89t-3.5 108-17.5 96q178-1 242-1 59 0 95.5 32t37.5 84q1 44-9 67 17 17 28.5 35.5T1041 612q1 47-46 96 1 2 4 9.5t4.5 12.5 2.5 12.5 1 14.5q-2 55-64 98 5 33-1 59-24 110-317 110zM126 887q164 13 208 46 16 12 28 16t72 7.5 191 3.5q41 0 74.5-2t77.5-7 71-18 32-33q4-21-19-45-5-12 0-24.5t16-17.5h1q5-2 12-5t20.5-11 22.5-19.5 10-22.5q0-4-.5-7.5t-1-6.5-2-6l-2.5-5-2.5-4-2.5-3.5-2-2.5-1.5-2-.5-1q-4-5-5-11t0-12 4.5-11.5 8.5-9.5q6-3 13-8.5t17.5-20.5 10.5-30q-1-25-38-47-6-4-10-9.5t-6-12.5q-1-4-.5-8.5t2-9 4.5-8.5q1-1 2-2.5t4-7.5 5-11.5 3.5-13.5 1.5-15q-1-18-9.5-30t-22-16.5T892 417t-16-1H642l-54 1q-4 0-8-1t-7.5-3-6.5-4.5-5-6.5q-9-13-3-30 16-46 25.5-101t9-105T578 93q-1-2-4-7t-4-7-4.5-5.5-7-5-9.5-3-14-1.5q-3 0-6 2t-9 9-11 19q-77 186-186 296.5T112 511q-8 18-14 36t-12.5 57-6.5 83q0 45 9 89.5t18.5 70T126 887z"
  }));
};

module.exports.Link = function Link(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M295.5 732.5Q305 742 318 742q7 0 12.5-2.5T341 732l388-390q9-10 9-23t-9.5-22.5T706 287t-23 10L296 687q-10 10-10 23t9.5 22.5zM476 664q8 36-1 69t-36 60L310 918q-42 42-102 42t-102-42-42-102 42-101l126-131q42-42 102-42 17 0 38 6l50-50q-42-20-88-20-86 0-147 61L61 669Q0 730 0 816t61 147 147 61 147-61l129-125q46-46 57-107t-14-117zM963 61q-30-30-68-45.5T816 0q-86 1-147 61L540 186q-48 47-58.5 113.5T500 424l50-50q-12-36-2.5-75t37.5-68l129-125q10-10 22-18t25-13.5 27-8 28-2.5q60 0 102 42t42 102-42 101L789 439q-20 20-46.5 31T687 481q-23 0-28-1l-51 51q13 5 26.5 8t26 4.5T687 545q41 0 79-15.5t68-45.5l129-129q68-68 60-165-7-76-60-129z"
  }));
};

module.exports.List = function List(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M96 384H32q-13 0-22.5 9.5T0 416v64q0 13 9.5 22.5T32 512h64q13 0 22.5-9.5T128 480v-64q0-13-9.5-22.5T96 384zm896 32H320q-13 0-22.5 9.5T288 448t9.5 22.5T320 480h672q13 0 22.5-9.5t9.5-22.5-9.5-22.5T992 416zM96 640H32q-13 0-22.5 9.5T0 672v64q0 13 9.5 22.5T32 768h64q13 0 22.5-9.5T128 736v-64q0-13-9.5-22.5T96 640zm896 32H320q-13 0-22.5 9.5T288 704t9.5 22.5T320 736h672q13 0 22.5-9.5t9.5-22.5-9.5-22.5T992 672zM96 128H32q-13 0-22.5 9.5T0 160v64q0 13 9.5 22.5T32 256h64q13 0 22.5-9.5T128 224v-64q0-13-9.5-22.5T96 128zm224 96h672q13 0 22.5-9.5t9.5-22.5-9.5-22.5T992 160H320q-13 0-22.5 9.5T288 192t9.5 22.5T320 224z"
  }));
};

module.exports.LocationPin = function LocationPin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 768 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M388 0q-78 0-149.5 31.5t-123.5 84T31.5 240 0 390q0 44 12 92t28 89 46 91 53.5 84.5 63.5 84 62 75.5 62 72q12 14 18 20 2 3 7 7.5t18 11.5 25 7h3q28 0 50-26 320-368 320-608 0-167-102-277Q560 0 388 0zm12 955q-1 2-4 4l-4-4-17-19q-38-44-59-68.5T257 796t-60-79.5-51-79-44.5-84-26.5-81T64 390q0-87 44-162.5T226.5 108 388 64q79 0 141 27.5t99.5 74.5T685 270t19 120q0 216-304 565zm-15-762q-31 0-60.5 10t-53 27.5T230 272t-27.5 53-9.5 60q0 80 56.5 136t136 56T521 521t56-136q0-39-15-74.5t-41-61-61.5-41T385 193zm0 320q-53 0-91-38t-38-91 37.5-90.5T384 256t90.5 37.5T512 384q0 66-53 105-33 24-74 24z"
  }));
};

module.exports.LockOpen = function LockOpen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 832 1056"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M704 401H247l-17-74q-21-81 15-150t118.5-91T513 105t88 122l14 54q3 13 14.5 19.5T654 304t19.5-14.5T677 265l-14-54Q634 103 544.5 49.5T347 24Q239 53 189.5 145T169 343l13 58h-54q-53 0-90.5 37.5T0 529v384q0 53 37.5 90.5T128 1041h576q53 0 90.5-37.5T832 913V529q0-53-37.5-90.5T704 401zm64 512q0 17-8.5 32T736 968.5t-32 8.5H128q-26 0-45-18.5T64 913V529q0-26 19-45t45-19h576q26 0 45 19t19 45v384zM416 593q-27 0-45.5 19T352 657q0 37 32 55v105q0 13 9.5 22.5T416 849t22.5-9.5T448 817V712q32-18 32-55 0-26-18.5-45T416 593z"
  }));
};

module.exports.Lock = function Lock(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 832 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M704 384h-32V262q0-111-72.5-186.5T415 0q-74 0-133 35.5t-90.5 95T160 262v122h-32q-53 0-90.5 37.5T0 512v384q0 53 37.5 90.5T128 1024h576q53 0 90.5-37.5T832 896V512q0-53-37.5-90.5T704 384zM224 262q0-84 53-141t138-57 139 56.5T608 262v122H224V262zm544 634q0 17-8.5 32T736 951.5t-32 8.5H128q-26 0-45-19t-19-45V512q0-26 19-45t45-19h576q26 0 45 19t19 45v384zM416 576q-27 0-45.5 18.5T352 640q0 36 32 55v105q0 13 9.5 22.5T416 832t22.5-9.5T448 800V695q32-19 32-55 0-27-18.5-45.5T416 576z"
  }));
};

module.exports.Login = function Login(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M533 661q-7 7-9 15t0 16.5 9 14.5q4 4 10 6.5t12 2.5q13 0 23-9l189-194-189-194q-10-10-23-10t-22 10q-4 3-6 6.5t-3 7.5-1 8 1 8 3 8 6 7l115 116H32q-13 0-22.5 9T0 511.5t9.5 23T32 544h618zM960 0H384q-17 0-32 8.5T328.5 32 320 64v288h65V103q0-10 5-19t14-14.5 19-5.5h497q16 0 27.5 11.5T959 103l1 818q0 16-11.5 27.5T921 960H423q-16 0-27-11.5T385 921V671h-65v289q0 27 19 45.5t45 18.5h576q27 0 45.5-18.5T1024 960V64q0-39-35-57-14-7-29-7z"
  }));
};

module.exports.Logout = function Logout(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M117 544h554q14 0 23-9.5t9-23-9-22.5-23-9H119l116-116q9-9 9-22.5t-9-22.5q-7-6-15-8.5t-16.5 0T189 319L0 513l189 194q5 4 11 6.5t12 2.5q13 0 23-9 3-3 5-7t3-8 1-8-1-8-3-8-5-7zM960 0H416q-27 0-45.5 18.5T352 64v288h64V103q0-10 5-19t14-14.5 20-5.5h465q16 0 27 11.5t11 27.5l1 818q0 16-11 27.5T921 960H455q-16 0-27.5-11.5T416 921V671h-64v289q0 27 18.5 45.5T416 1024h544q6 0 12.5-1.5t12-3.5 11-5.5 9.5-8 7.5-9.5 6-11 4-12 1.5-13V64q0-39-35-57-14-7-29-7z"
  }));
};

module.exports.Loop = function Loop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M960 38H64q-27 0-45.5 18.5T0 102v576q0 26 18.5 45T64 742h160q9 0 17-7t11.5-14.5 3.5-11-3.5-10.5-11-14.5T224 677H103q-16 0-27.5-11T64 639V142q0-8 3-15t8.5-12.5T88 106t15-3l818-1q11 0 20 5.5t14 14 5 19.5v498q0 16-11.5 27T921 677H518l76-69q7-7 8.5-16t-5.5-16l-5-8q-5-4-11-5.5t-12.5 0T558 568L428 687l-9 8q-3 3-5 7.5t-2 9 2 8.5 5 8l9 8 128 115q7 7 17 7t17-7l5-8q7-7 5.5-16t-8.5-16l-77-69h445q17 0 32-8.5t23.5-23.5 8.5-32V102q0-39-35-57-14-7-29-7z"
  }));
};

module.exports.MagicWand = function MagicWand(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1037 429 934 276l51-179q5-18-8.5-31.5T945 57l-178 52L612 6q-15-11-32-2.5T562 31l-5 186-147 115q-6 5-9.5 13t-1.5 17q0 3 1.5 6.5t3 6 4 5 5.5 4.5 6 3l138 49q-3 2-3 3L23 969q-6 6-8 14.5t0 16.5 8 15q10 9 23 9t23-9l530-531q3-3 5-7l54 148q7 17 25 20 3 1 5 1 16 0 26-13l113-147 184-7q9 0 16.5-4.5T1039 462q8-17-2-33zm-227-6q-15 0-24 12l-88 113-49-134q-5-14-19-19l-134-49 112-88q4-3 6.5-6.5t4-8 1.5-9.5l5-143 118 80q13 8 27 4l137-40-39 137q-1 3-1 6v5.5l.5 5.5 2 5.5 2.5 4.5 81 118z"
  }));
};

module.exports.Magnet = function Magnet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 896 1056"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M896 76V47q0-13-9-22.5T864 15H640q-14 0-23 9.5T608 47v528q0 76-40.5 125.5T457 750q-72 0-120.5-51T288 575V47q0-13-9-22.5T256 15H32q-14 0-23 9.5T0 47v543q0 61 16 119.5t44.5 108 70 91T221 979t107 45.5 120 16.5q91 0 174.5-36T766 909t95-143.5T896 590V76zm-64 3v129H672V79h160zm-608 0v129H64V79h160zm224 898q-105 0-193.5-52T115 784 64 590V272h160v303q0 100 67.5 169.5T457 814q64 0 113.5-32t75.5-86 26-121V272h160v318q0 79-30 150.5T720.5 864t-123 82.5T448 977z"
  }));
};

module.exports.MagnifierAdd = function MagnifierAdd(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1040 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1031 969 748 684q97-116 97-267 0-85-33-162t-88.5-133T591 33 429 0Q316 0 220 55.5T68.5 207 13 416.5 68.5 626 220 777.5 429 833q156 0 274-103l282 284q4 4 8.5 6.5t9.5 3 10 0 9.5-3 8.5-6.5q9-9 9-22.5t-9-22.5zM429 768q-96 0-177-47.5T124 592 77 416t47-176 128-128.5T428.5 64 605 111.5 733.5 240 781 416q0 141-98 243-97 101-236 109h-18zm160-384H461V256q0-13-9.5-22.5t-23-9.5-22.5 9.5-9 22.5v128H269q-14 0-23 9.5t-9 22.5 9 22.5 23 9.5h128v128q0 13 9 22.5t22.5 9.5 23-9.5T461 576V448h128q13 0 22.5-9.5T621 416t-9.5-22.5T589 384z"
  }));
};

module.exports.MagnifierRemove = function MagnifierRemove(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1040 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1031 969 748 684q97-116 97-267 0-85-33-162t-88.5-133T591 33 429 0Q316 0 220 55.5T68.5 207 13 416.5 68.5 626 220 777.5 429 833q156 0 274-103l282 284q4 4 8.5 6.5t9.5 3 10 0 9.5-3 8.5-6.5q9-9 9-22.5t-9-22.5zM429 768q-96 0-177-47.5T124 592 77 416t47-176 128-128.5T428.5 64 605 111.5 733.5 240 781 416q0 141-98 243-97 101-236 109h-18zm160-384H269q-14 0-23 9.5t-9 22.5 9 22.5 23 9.5h320q13 0 22.5-9.5T621 416t-9.5-22.5T589 384z"
  }));
};

module.exports.Magnifier = function Magnifier(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1040 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1031 969 720 656q93-111 93-256 0-109-53.5-201t-146-145.5T412.5 0 212 53.5 66.5 199 13 400t53.5 201T212 746.5 413 800q149 0 262-98l310 312q10 10 23 10t22.5-9.5 9.5-23-9-22.5zM413 737q-92 0-169.5-45.5T121 568.5 76 400t45-168.5 122.5-123 169-45.5 169 45.5 122.5 123T749 400q0 39-9 77t-25.5 71-39.5 62.5-52 52.5-62 39.5-71 25.5-77 9z"
  }));
};

module.exports.Map = function Map(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M993 135 672 2 353 128 31 2q-4-1-8-1t-7.5 1T9 5t-5 5-3 7-1 8v830q0 14 9 25.5T31 896l322 127 319-129 321 126q4 1 8 1 10 0 16.5-7t6.5-18V176q0-9-4-17.5t-11-15-16-8.5zm-609 46L640 81v761L384 944V181zM64 87l256 94v762L64 839V87zm896 851-256-96V82l256 110v746z"
  }));
};

module.exports.Menu = function Menu(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M27 130q-4-4-7-9t-4-10.5T15 98q0-19 12-31t31-12h913q19 0 31 12t12 31-12 31.5-31 12.5H58q-19 0-31-12zm975 285q12 12 12 31t-12 31-31 12H58q-19 0-31-12-2-2-4-5t-3.5-6-2.5-6-1.5-6.5-.5-7.5q0-19 12-31t31-12h913q19 0 31 12zm0 347q12 12 12 31t-12 31.5-31 12.5H58q-19 0-31-12-2-2-3.5-4.5l-3-5-2.5-5-2-5.5-1-5.5V793q0-19 12-31t31-12h913q18 0 31 12z"
  }));
};

module.exports.Microphone = function Microphone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 640 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M319 704h7q67 0 110.5-44T480 548V167q0-70-44.5-118.5T326 0h-7q-32 0-61.5 13t-51 35.5-34 53.5-12.5 65v381q0 67 45.5 111.5T319 704zm-95-537q0-43 28-73t67-30h7q39 0 64.5 29.5T416 167v381q0 41-24.5 66.5T326 640h-7q-28 0-49.5-11.5T236 596t-12-48V167zm384 185q-13 0-22.5 9.5T576 384v133q0 143-51.5 213T368 800h-95q-38 0-69-9t-52.5-24-37.5-37.5T88.5 683t-15-53.5-7.5-56-2-56.5V384q0-13-9.5-22.5T32 352t-22.5 9.5T0 384v133q0 167 69.5 257T273 864h15v96H128q-13 0-22.5 9.5T96 992t9.5 22.5 22.5 9.5h384q13 0 22.5-9.5T544 992t-9.5-22.5T512 960H352v-96h16q41 0 76.5-8t72.5-31.5 63.5-61 43-100.5T640 517V384q0-7-2.5-12.5t-7-10-10-7T608 352z"
  }));
};

module.exports.Minus = function Minus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 0q212 0 362 150t150 362-150 362-362 150-362-150T0 512t150-362T512 0zm0 961q185 0 316.5-132T960 512 828.5 195.5 512 64 195.5 195.5 64 512t131.5 317T512 961zm-35-417H288q-14 0-23-9t-9-23 9-23 23-9h448q14 0 23 9t9 23-9 23-23 9H477z"
  }));
};

module.exports.Mouse = function Mouse(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 576 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M290 0Q171 0 85.5 84T0 286v452q0 118 85.5 202t204.5 84q118 0 202-84t84-202V286q0-118-84-202T290 0zm222 738q0 92-65 157t-157 65q-93 0-159.5-65.5T64 738V286q0-91 66.5-156.5T290 64q92 0 157 65t65 157v452zM288.5 192q-13.5 0-23 9.5T256 224v160q0 13 9.5 22.5t23 9.5 22.5-9.5 9-22.5V224q0-13-9-22.5t-22.5-9.5z"
  }));
};

module.exports.MusicToneAlt = function MusicToneAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 992 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M976 705V37q0-6-1-11-2-11-10.5-18.5T944 0q-4 0-8.5 1T928 4L330 160q-17 4-22 21-4 7-4 15v572q-23-15-52-23.5t-60-8.5q-73 0-125 42T15 880t52 102 125 42q48 0 88.5-19t64.5-52.5 24-72.5q0-5-1-12V216L912 75v533q-49-32-112-32-73 0-125 42t-52 102q0 29 14 56t38 46 56.5 30.5T800 864q73 0 125-42t52-102q-1-8-1-15zM193 960q-24 0-45.5-7t-36-18.5-23-26T80 880q0-19 14-37.5t40.5-30.5 58.5-12q28 0 52.5 10t39 25 19.5 32v1q0 2 .5 4.5t.5 4.5l1 1v2q0 14-8.5 28.5t-23 26-36 18.5-45.5 7zm607-160q-19 0-37-4.5T731.5 783 708 764.5t-15-22-5-22.5q0-19 14-37.5t40-30.5 58-12q47 0 79.5 25t32.5 55-32.5 55-79.5 25z"
  }));
};

module.exports.MusicTone = function MusicTone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 704 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M693 323 380 10q-16-16-37-6-22 8-22 30v709q-54-41-127-41-31 0-60.5 8.5t-53 23T39 768t-27.5 44.5T2 863q0 66 56.5 113t136 47T330 976t56-113v-8l-1-4V107l262 262q5 4 11 6.5t12 2.5 12-2.5 11-6.5q17-18 5-39-3-4-5-7zM193 959q-36 0-66-15t-46-36.5T65 863q0-36 37-66t91-30q22 0 42 5.5t35 14.5 26.5 21 18 25.5T322 860v6q-2 35-39 64t-90 29z"
  }));
};

module.exports.Mustache = function Mustache(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M809 673q-36 0-67-7t-56.5-21.5T646 620t-34-26q-13-11-37-32-6-5-9-8t-8.5-7.5-9-7.5-7.5-6-7-4.5-4-2.5h-8l-1 1q-5 2-37 30-7 5-11 8.5t-10 9-12 10-12 9.5l-3 2q-23 18-37 27.5t-39 23-54.5 19.5-63.5 6q-53 0-102-22.5T60 589q-61-76-39-186 4-18 20.5-24t30.5 6q24 17 59 17 28 0 57-13 15-6 28.5-19.5t30-35.5 23.5-29q17-19 27.5-29.5T326 251t38-21 43-7q33 0 62.5 12.5T526 272q26-24 55.5-36t61.5-12q24 0 44 6.5t38.5 20.5 29 24.5T783 306q7 7 23.5 28.5t30.5 35 29 19.5q29 13 57 13 40 0 62-18 15-10 31-4 16 7 20 24 5 35 4.5 61.5t-8.5 51-17 40.5-21 31q-32 39-81.5 62T809 673zM526.5 462h9.5l1.5.5 1.5.5q11 1 24 9t23 16 31 26q21 19 35 30 18 15 29 23t31.5 19.5 44.5 17 52 5.5q26 0 52-7.5t47.5-21.5 37-33 23.5-41 8-48q-6 2-12 3.5t-12.5 2.5-14 1.5-15.5.5q-42 0-83-18-13-6-25.5-15t-23-20.5T772 391t-19-22.5-17-19.5q-30-33-49-47t-43-14q-51 0-94 50-2 3-4 4.5t-4.5 3-5 2.5-5 1.5-5.5.5q-15 0-24-12-19-21-41.5-36T408 287q-24 0-43 14t-48 47q-6 7-20.5 25T272 402.5t-26.5 25T214 448q-42 18-83 18-27 0-52-8 0 52 30 90 22 28 58 44t75 16q18 0 34.5-2t30.5-7 25-10 24-13.5 20.5-14T397 546l3-3q7-6 16-13t13.5-11 13.5-11q13-12 20-17.5t16.5-12.5 16.5-10 14-5h4.5l5.5-.5 6.5-.5z"
  }));
};

module.exports.Note = function Note(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M815 960H79V160h450l65-62-2-2H79q-26 0-45 19t-19 45v800q0 27 19 45.5t45 18.5h736q27 0 45.5-18.5T879 960V492l-64 61v407zM990 41Q947 0 895 0q-57 0-102 45L354 483q-2 2-3.5 4t-2.5 4-1 4q-15 54-70 233-1 5-1 10t2 9.5 6 7.5q8 8 19 8 4 0 8-1 131-44 229-73 6-2 11-7 427-421 441-436 50-51 49-104-2-54-51-101zm-44 160q-27 28-414 410l-20 19q-20 6-62 19.5T359 679q36-118 47-158Q822 106 838 90q26-26 57-26 26 0 51 24 30 29 31 55 0 26-31 58z"
  }));
};

module.exports.Notebook = function Notebook(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 896 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M785 0H147q-22 0-37.5 10t-22 24.5T81 66v127H46q-13 0-22 9.5T15 225q0 8 4 15.5T30.5 252t15.5 4h35v129H49q-8 0-15.5 4T22 400.5 18 416q0 13 9 22t22 9h32v130H48q-6 0-11.5 2.5t-10 6.5-7 10-2.5 12q0 13 9.5 22.5T48 640h33v128H48q-4 0-8 1t-7.5 3-6.5 5-5 6.5-3 7.5-1 8q0 13 9.5 22.5T48 831h33v129q0 35 20.5 49.5T146 1024h639q40 0 68-28t28-68V96q0-40-28-68T785 0zM145 960V831h33q13 0 22.5-9.5T210 799q0-6-2.5-12t-7-10-10-6.5T178 768h-33V640h33q9 0 16-4.5t11.5-11.5 4.5-16q0-13-9.5-22t-22.5-9h-33V447h34q9 0 16-4t11-11 4-16q0-6-2-12t-6.5-10-10-6.5T179 385h-34V256h31q13 0 22-9t9-22-9-22.5-22-9.5h-31V64h512v896H145zm672-32q0 13-9.5 22.5T785 960h-64V64h64q13 0 22.5 9.5T817 96v832z"
  }));
};

module.exports.OptionsVertical = function OptionsVertical(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 272 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M5 896v-27q0-1 1-2l1-4q6-43 38-73.5t74-32.5q47-4 83 20.5t49 68.5q1 1 1.5 3t1 3.5.5 3 .5 3.5 1 3.5 1 3.5.5 3v27l-.5 2.5-1.5 3.5q-6 39-32.5 67.5T157 1006q-3 1-8 2-3 1-4 1h-29q-3-1-4-2-39-6-66.5-32T9 911q-1-3-2.5-8T5 896zm252-768v27l-.5 2.5-1.5 3.5q-6 43-38.5 73.5T142 267q-31 2-58-8.5T38 227t-28-50q0-3-5-22v-27q0-1 1-3l1-3Q21 45 97 20q4-1 11.5-3t8.5-2h28l1 1q3 1 4 1 39 6 67 32t37 65q1 4 3 13v1zm0 370v28l-1 2.5-1 3.5q-7 43-39.5 73.5T141 638q-48 2-84.5-24T9 544q-1-6-4-18v-28l1-2.5 1-3.5q6-43 39-73.5t75-32.5q48-2 84.5 24t47.5 70q1 6 4 18z"
  }));
};

module.exports.Options = function Options(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1008 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M883 574h-27q-1 0-2-1-3-1-4-1-21-3-40-13t-33-25-23-34-10-40q-4-47 20.5-83t68.5-49q3-1 7-2t8.5-2 7.5-2h29l4 2q39 6 67.5 32.5T993 422l3 12v29q-1 3-2 4-6 39-32 66.5T898 570l-9 3q-4 1-6 1zM115 322h27q1 0 2 1l4 1q29 4 52.5 20t38 40.5T254 437q3 46-21.5 82.5T164 569q-3 0-22 5h-27q-1 0-3-1t-3-1Q32 558 7 482q-1-3-2-6.5T3.5 468 2 462v-28l1-1q1-3 1-4 4-26 17-47.5t33.5-36T101 325q4-1 14-3zm370 0h28l2.5 1 3.5 1q43 7 73.5 39.5T625 438q2 48-24 84.5T531 570q-6 1-18 4h-28q-1 0-2-1l-4-1q-43-6-73.5-39T373 458q-1-19 3-36.5t12-33 19.5-28 26.5-21 33-13.5q6-1 18-4z"
  }));
};

module.exports.Organization = function Organization(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1040"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M815 592h145q26 0 45 19t19 45v320q0 26-19 45t-45 19H640q-26 0-45-19t-19-45V656q0-26 19-45t45-19h113v-38H270v38h114q26 0 45 19t19 45v320q0 26-19 45t-45 19H64q-26 0-45-19T0 976V656q0-26 19-45t45-19h144v-60q0-15 16-24t37-9h220v-36H343q-26 0-45-19t-19-45V79q0-26 19-45t45-19h320q26 0 45 19t19 45v320q0 26-19 45t-45 19H545v37q41 0 108-.5t109-.5q21 0 37 8.5t16 24.5v60zm145 64H640v320h320V656zM663 79H343v320h320V79zM384 656H64v320h320V656z"
  }));
};

module.exports.PaperClip = function PaperClip(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 992"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M189 992q-67 0-119-52-55-55-55-133.5T70 673L645 63q44-45 101.5-58T863 12t109 69q16 17 29.5 37.5t22 43 13 47.5 4.5 50q-2 106-72 177L534 898q-9 10-22 10.5t-22.5-8.5-10-22.5T488 854l435-462q53-54 54-134t-51-131q-32-33-71-50t-84-11-80 41L116 717q-37 37-37 89t37 89q17 17 37 25.5t42 6.5q44-2 82-41l457-486q5-5 9.5-10.5t9.5-13 8-16 4-17-3-17.5-12-17q-19-20-37-18-19 2-43 25L326 682q-6 6-14 8.5t-16.5.5-14.5-8q-10-9-10-22t9-23l344-367q41-40 83-44 48-4 88 36 38 37 33.5 87T780 444L323 931q-56 56-125 60-2 0-4.5.5t-4.5.5z"
  }));
};

module.exports.PaperPlane = function PaperPlane(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1004 0q-9 0-22 5L27 410q-17 8-23.5 18.5T2 451t20 22l270 168q16 10 34 26t34 34 25 34l162 265q7 11 15 16.5t16 5.5q20 0 31-27l409-954q15-36-9-41h-5zM326 584 107 448l734-312-473 481q-23-21-42-33zm247 331L442 702q-3-6-8-13t-10-13.5-11-13.5l474-482z"
  }));
};

module.exports.Paypal = function Paypal(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 896 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M255 855H39q-6 0-12-2.5T16 845q-8-11-6-25L148 68q6-31 29.5-49.5T233 0h332q100 0 161.5 58.5T788 212q0 33-8 71.5t-23 80-40 80-57 69-77 48.5-96 18H342l-58 254q-2 6-6 11.5t-10 8-13 2.5zM75 796h156l59-253q2-10 10-16.5t18-6.5h169q31 0 59-9t50-24.5 41.5-36.5 33.5-45 25.5-49.5T715 304t10.5-49 3.5-43q0-35-11.5-63.5t-33-48-52-30.5T565 59H233q-23 0-27 21zm282 228H141q-13 0-22-10.5t-7-23.5l28-158q2-12 12-19t22-5q8 1 14 6.5t9 12.5 1 15l-21 123h156l56-256q2-7 6-12t10-8 13-3h169q35 0 66.5-12t55-31.5 44-45.5 34-54.5 23-58 14-56.5 4.5-50q0-102-84-139-12-5-16.5-16.5t.5-22.5 16.5-15.5 22.5.5q39 17 66 44.5t40.5 65.5 13.5 83q0 40-10.5 87T842 562t-57.5 90.5-85 66.5T587 745H442l-56 256q-2 10-10 16.5t-19 6.5zm39-611h-58q-14 0-23-11-2-2-3.5-5t-2.5-6-1-6.5V378l39-215q1-6 4-10.5t6.5-7.5 8.5-5 10-2h94q55 0 82 33 30 35 19 99-7 50-27.5 81.5T487 398t-91 15zm-23-59h23q62 0 86-21.5t31-72.5q6-37-6-51-4-4-10.5-7t-12.5-4-14-1h-69z"
  }));
};

module.exports.Pencil = function Pencil(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1040 1056"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M964 66q-26-25-54.5-38T850 15q-69 0-124 55-18 17-633 633-6 6-9 14-4 17-84 281-5 19 9 33 1 2 3 3t3.5 2 3.5 2 4 1.5l4 1 4 .5q6 0 10-2 211-69 276-88 4-1 7.5-3t6.5-5q114-113 363-359.5T967 312q59-61 58-126-2-64-61-120zM716 172q50 12 94 56 18 18 30.5 41t16 34.5T862 325Q727 459 333 849q-20-46-55-82-42-42-94-63l1-1 1-1 1-1v-1h1l1-1 1-1v-1h1l1-1 1-1v-1h1l1-1 1-1v-1h1l1-1 1-1 1-1v-1h1l1-1 1-1v-1h1l1-1 1-1 1-1v-1h1l1-1 1-1 1-1v-1l1-1h1l1-1 1-1 1-1v-1l1-1h1l1-1 1-1 1-1v-1l1-1h1l1-1 1-1 1-1 1-1v-1l1-1h1l1-1 1-1 1-1 1-1 1-1v-1h1l1-1 1-1 1-1 1-1 1-1 1-1v-1l1-1h1l1-1 1-1 1-1 1-1 1-1 1-1 1-1v-1l1-1h1l1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1v-1l1-1 1-1h1l1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1v-1l1-1 1-1 1-1h1l1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1v-1l1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1h1l1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 2-2 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-2 1-1 1-1 1-1 1-1 2-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-2 1-1 1-1 2-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-2 1-1 1-1 2-1 1-1 1-1 1-1 1-1 1-1 1-1 1-2 1-1 1-1 2-1 1-1 1-1 1-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-1 1-1 1-2 1-1 1-1 2-1 1-1 1-1 1-1 1-1 1-2 1-1 1-1 2-1 1-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-1 1-2 1-1 2-1 1-1 1-1 1-1 1-1 1-2 1-1 1-1 2-1 1-1 1-1 1-1 1-1 1-2 1-1 1-1 2-1 1-1 1-1 1-1 1-1 1-1 1-2 1-1 1-1 1-1 2-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-2 1-1 1-1 1-1 2-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-1 1-2 1-1 1-1 1-1 1-1zM140 758q49 13 92 56 34 34 48 80-20 7-95.5 32T76 962q9-30 33-104.5t31-99.5zm780-492q0 1-1 2l-2 2-3 3q-20-52-58-91-40-40-89-61l3-3 2-2q5-5 12.5-11t27-15 38.5-9q18 0 35.5 8t33.5 24q20 19 30.5 38t10.5 37q0 37-40 78z"
  }));
};

module.exports.People = function People(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1040"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M746 851 545 740q50-40 72.5-109T640 500V365q0-44-34.5-88T515 204.5 401 176q-34 0-70 11t-66 30-54 42.5-37.5 51.5-13.5 54v135q0 56 25 127t76 112L54 851q-6 3-15 8t-24 19-15 27v81q0 23 16 38.5t38 15.5h692q22 0 38-15.5t16-38.5v-81q0-6-3-12.5t-7.5-11.5-10.5-10-12-8.5-10.5-6-7.5-3.5zm-10 125H64v-57q8-6 16-9l4-2 207-113q5-2 9-5.5t7.5-7 6.5-8 5-9.5 3.5-10 1.5-10q3-34-23-56-19-15-34.5-40T242 597t-13.5-52-4.5-45V365q0-38 56.5-81.5T401 240q66 0 120.5 43t54.5 82v135q0 49-17 104.5T505 689q-27 22-24 56t33 51l201 111 6 3q7 3 15 9v57zm234-284L766 580q26-21 46-52.5t31-65.5 16-64.5 5-56.5V206q0-33-21.5-67.5T788 77t-77.5-44.5T622 15q-56 0-111.5 27.5T419 112q5 0 16 .5t17 1 15.5 1.5 17.5 2.5 15 3.5q54-41 122-41 66 0 122 43.5t56 82.5v135q0 47-18.5 103.5T726 530q-27 21-24 56 0 6 2 12t5 11.5 6.5 10.5 8.5 9 11 8l204 111q2 1 3.5 1.5t3 1.5 3.5 2l4 2 3.5 2 3.5 2v57H831q9 7 15.5 18t9.5 20 8 26h106q15 0 27.5-7t19.5-19.5 7-27.5v-80q0-14-13.5-27.5T983 698z"
  }));
};

module.exports.Phone = function Phone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1008 1008"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M246 37q57 78 134 200 19 32-6 79-8 16-48 89 8 12 18.5 25t22.5 27.5 26 29.5 29.5 31.5T455 552q88 88 146 130 65-38 89-50 25-14 48-14 18 0 31 8 89 54 202 134 20 16 24 42 3 27-17 58-8 12-31 40-21 26-63.5 66t-69.5 40h-2q-103-4-229-81T307 699Q8 399 0 194q0-27 40-71 39-42 65-63 26-20 42-31 21-15 49-15 32 0 50 23zm-64 41q-39 28-76 65-36 36-42 53 8 180 287.5 459T812 944q15-6 51-43t65-77q3-4 4-7.5t0-6.5q-115-80-194-130-8 0-20 6-4 2-32 18t-55 30l-33 20-33-22q-63-43-155-137-90-91-135-155l-24-31 20-35q37-67 48-87 6-12 6-20-34-54-66-102.5T198 74h-2q-8 0-14 4z"
  }));
};

module.exports.Picture = function Picture(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M960 16H64q-26 0-45 19T0 80v736q0 26 19 45t45 19h896q26 0 45-19t19-45V80q0-17-8.5-32T992 24.5 960 16zm0 800H64V628l257-249 265 264q8 10 20.5 9.5T630 644l117-106 210 217q1 0 3 2v59zm0-150L772 473q-9-8-20.5-9t-21.5 7L609 576 345 314q-9-11-23-12t-24 9L64 538V80h896v586zM736 336q17 0 32-8.5t23.5-23T800 272q0-26-19-45t-45-19-45 19-19 45.5 19 45 45 18.5z"
  }));
};

module.exports.PieChart = function PieChart(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M576 93q-14 0-23 9.5t-9 23 9 22.5 23 9q83 0 155 30t122 81.5 78.5 124T960 549t-32.5 160T840 840t-131 87.5T549 960q-170 0-281-110T157 570q0-13-9-22.5t-22.5-9.5-23 9.5T93 570q0 129 59 233t163.5 162.5T549 1024q49 0 96-9.5t89-27.5 80.5-44 70.5-58 58-70.5 44-80.5 27.5-89 9.5-96q0-129-57-233T807 152.5 576 93zm-96 355V32q0-13-9-22.5T448 0q-92 0-175 35.5t-142.5 95-95 142.5T0 448q0 14 9.5 23t22.5 9h416q24 0 31-22 1-5 1-10zm-64-32H65q12-141 111-240T416 65v351z"
  }));
};

module.exports.Pin = function Pin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1015 380 647 10q-13-13-31-9-5 1-9.5 4.5t-8 7.5-5.5 10q-33 106-7 194-2 1-3 2l-2 2-171 171q-85-39-174-39-56 0-109 16-17 6-22 23-2 8 .5 16t8.5 14l219 221L26 954l-26 70 64-25 314-311 221 223q10 10 23 10 4 0 8-1 5-2 9.5-5t8-7.5 5.5-9.5q44-142-21-283l175-175 .5-1 1.5-1q20 6 40.5 9t41.5 3q27 0 55-4.5t56-12.5q17-6 21-23 2-8 0-16t-8-14zM603 824 200 419q52-6 105 5t102 38 89 67q97 98 108 230 3 34-1 65zm-3-267q-6-10-13-19.5T573 519t-15-18-17-17q-16-17-34.5-32T468 424l144-144q22 39 57 74 36 35 76 58zm115-249q-92-91-73-212l287 288q-122 16-214-76z"
  }));
};

module.exports.Plane = function Plane(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M934 66q13 0 22 3 2 6 2.5 15t-1 23-11 31-25.5 33L690 402l2 28q4 76 16 260 9 161 10 166 0 6-4 11-7 7-18 20t-24 27q-59-157-98-267l-35-94-71 71-130 125-19 19v25q-1 19 0 90v54l1 1 2 1q-6-10-8-14l-6-9q-58-92-68-109l-9-13-13-9q-68-41-135-84 1 0 2 2l1 1h67.5l9.5.5 10.5.5H231l26-1 18-18 126-130 71-71-94-34q-109-40-269-100 14-14 26.5-25t20.5-17l7-4h2q7 0 180 11 189 13 249 16l29 2 231-231q37-37 80-37zm0-64q-31 0-63.5 13.5T809 58L598 268q-32-2-88.5-5.5t-112.5-7-108-7-85.5-5.5-35.5-2h-5q-6 0-12.5 1t-16.5 5-19 12l-73 66q-19 19-16 41 2 22 26 32 63 25 304 113L230 641h-20q-21 0-66.5-.5T88 640H73.5l-5 .5L62 642l-8 3.5-10 5.5-11.5 7.5L19 669l-3 3Q2 687 1 704t14 29q22 18 170 107 11 18 73 116 28 46 30 49 10 16 29 17h1q18 0 35-17 7-8 12.5-15.5T374 976l5-10 2.5-8.5 1-6.5v-5l-.5-3q1-10 .5-69t.5-79l130-126q23 63 65 177t47 125q9 23 31 26h5q9 0 18.5-4.5T697 980q5-5 13.5-14t26-28.5T763 907q20-24 18-54 0-2-4.5-82t-11-187.5T756 427l211-211q26-27 40.5-57.5T1023 102t-4.5-47-16.5-31Q980 2 934 2z"
  }));
};

module.exports.Playlist = function Playlist(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M34 64h448q13 0 22.5-9.5T514 32t-9.5-22.5T482 0H34Q21 0 11.5 9.5T2 32q0 23 22 30 5 2 10 2zm0 192h448q13 0 22.5-9.5T514 224t-9.5-22.5T482 192H34q-13 0-22.5 9.5T2 224q0 23 22 30 5 2 10 2zm480 160q0-13-9.5-22.5T482 384H34q-13 0-22.5 9.5T2 416t9.5 22.5T34 448h448q13 0 22.5-9.5T514 416zm499-91L700 12q-7-8-17.5-9.5T663 6q-9 3-15 11t-6 19v708q-55-40-128-40-79 0-135.5 47T322 864t56.5 113 136 47T650 977t56-113V108l262 262q6 6 14 8t16.5 0 14.5-8q9-10 9-23t-9-22zM642 867q-2 35-38.5 64T514 960q-55 0-92-30t-37-66 37-66 92-30q35 0 64.5 14t46 35 17.5 44v6z"
  }));
};

module.exports.Plus = function Plus(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 0Q373 0 255 68.5T68.5 255 0 512t68.5 257T255 955.5t257 68.5 257-68.5T955.5 769t68.5-257-68.5-257T769 68.5 512 0zm0 961q-73 0-141.5-22.5T247 874t-96.5-97-64-123.5T64 512q0-91 35.5-174T195 195t143-95.5T512 64t174 35.5T829 195t95.5 143T960 512t-35.5 174T829 829.5t-143 96T512 961zm224-481H544V288q0-13-9.5-22.5T512 256t-22.5 9.5T480 288v192H288q-13 0-22.5 9.5T256 512t9.5 22.5T288 544h192v192q0 13 9.5 22.5T512 768t22.5-9.5T544 736V544h192q13 0 22.5-9.5T768 512t-9.5-22.5T736 480z"
  }));
};

module.exports.Power = function Power(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 912 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M654 164q-9-3-17-2.5t-15 5.5-11 13-3 16 6 15 12 11q122 57 182 176.5T841 650q-21 103-90 179.5T584.5 939 384 951q-152-31-241-166-42-65-56.5-140t.5-151q9-44 28-85t46.5-76 63-63 76.5-48q12-5 16.5-17.5t-1-24.5-18-16.5T274 165q-98 46-163 128.5T25 481q-19 89-2 176.5T90 820q103 157 281 194 23 4 45.5 6.5t45.5 2.5q104 0 197-45t158-128 86-187q32-154-38-293T654 164zM464 416q13 0 22.5-9.5T496 384V32q0-13-9.5-22.5T464 0t-22.5 9.5T432 32v352q0 13 9.5 22.5T464 416z"
  }));
};

module.exports.Present = function Present(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 992"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1024 304q0-6-1.5-12.5t-3.5-12-5.5-10.5-8-9.5-9.5-8-11-6-12-4-13-1.5H851q46-45 46-109 0-30-11-55t-39.5-43T776 15q-17 0-34.5 3.5T708 29t-31.5 15.5-30 19.5-28 22.5-26 25-23.5 26-21.5 26T529 188t-15 23q-21-32-45.5-61.5t-59.5-62T332 35t-83-20q-42 0-70.5 18T139 76t-11 55q0 64 47 110H64q-27 0-45.5 18.5T0 305v191h65v417q0 26 18.5 45t45.5 19h767q27 0 45.5-19t18.5-45V496h64V304zM776 79q57 0 57 52 0 34-23 59.5T752.5 228 679 240H571q19-28 40.5-53.5t48.5-51 57.5-41T776 79zm-527 0q54 0 109.5 49T457 240H349q-61 0-109-30t-48-80q0-48 51-50 3-1 6-1zm711 353H544V304h416v128zM64 304h416v128H64V304zm65 192h351v417H129V496zm767 417H544V496h352v417z"
  }));
};

module.exports.Printer = function Printer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M953 255H832V0H192v255H71q-29 0-50 21T0 326v434q0 30 21 51t50 21h121v192h640V832h121q19 0 35.5-10t26-26 9.5-36V326q0-29-21-50t-50-21zM256 63h512v192H256V63zm512 897H256V607h512v353zm192-200q0 8-7 8H832V543H192v224H71q-7 0-7-7V326q0-7 7-7h882q7 0 7 7v434zM832 383h-32q-13 0-22.5 9.5t-9.5 23 9.5 22.5 22.5 9h32q13 0 22.5-9t9.5-22.5-9.5-23T832 383z"
  }));
};

module.exports.Puzzle = function Puzzle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 1024q-4 0-7.5-.5t-7.5-1-7.5-1.5-6.5-2.5-6.5-3-6.5-4-6-4.5-6-5L22 565Q0 543 0 511.5T22 458l160-160q7-7 17.5-9t19.5 3 14 14.5 3 19.5q-2 7-2.5 12.5T233 349q0 35 17 64.5t46.5 47T360 478q52 0 87-37.5t35-91.5q0-26-9.5-49T447 259.5 408.5 232 360 222q-9 0-23 3-23 4-34-17t6-37L458 21q11-10 25-15.5T512 0t29 5.5T566 21l109 110q17-54 63-88.5T842 8q36 0 68.5 14t56 37.5T1004 116t14 68q0 23-5.5 45.5T996 271t-26 34.5-34 27.5-40 19l106 106q22 22 22 53.5t-22 53.5l-436 437q-23 22-54 22zM175 395 67 503q-9 9 0 17l436 437q9 8 18 0l436-437q2-2 3-5t0-6.5-3-5.5L803 349q-16-16-6-36.5t32-17.5h5l1 1h7q47 0 79.5-32.5t32.5-79-32.5-79.5T842 72q-22 0-43 9t-36 24-24 36-9 43q0 3 1 8l1 6q1 6-1 12.5t-6.5 11.5-10.5 8q-20 10-36-6L521 67q-2-2-4-3t-3.5-1.5-3 0T507 64t-4 3l-97 97q63 15 101.5 66.5T546 349q0 26-6.5 51T521 446t-28.5 39-37 30.5-45 19.5-50.5 7q-13 0-26-2t-25.5-5.5-24-9-22-12-20.5-14-18.5-16.5-16-19.5-14-21.5-11-22.5T175 395z"
  }));
};

module.exports.Question = function Question(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 0Q373 0 255 68.5T68.5 255 0 512t68.5 257T255 955.5t257 68.5q104 0 199-40.5t163.5-109 109-163.5 40.5-199-40.5-199-109-163.5T711 40.5 512 0zm0 961q-73 0-141.5-22.5T247 874t-96.5-97-64-123.5T64 512q0-91 35.5-174T195 195t143-95.5T512 64t174 35.5T829 195t95.5 143T960 512t-35.5 174T829 829.5t-143 96T512 961zm-47-161h80v-81h-80v81zm46-576q-14 0-27 1.5t-25 4.5-23 7.5-21.5 10.5-19.5 13q-21 18-33 51.5T351 379l1 3h74q0-21 6.5-43t18.5-31q12-10 27-15t33-5q21 0 36.5 6t26.5 17q22 22 22 63 0 18-4 32.5T580 434q-17 24-55 70-40 36-49.5 58t-9.5 78h77q0-35 4-52 2-8 8.5-17.5T573 550q22-22 40.5-43.5T646 465q27-42 27-93 0-70-42.5-109T511 224z"
  }));
};

module.exports.Refresh = function Refresh(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 928 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M449 899v-1l-92-144q-5-8-14-10.5t-18 2.5l-8 5q-8 4-8.5 14t4.5 18l59 92q-2-1-5-1.5t-5.5-1-4.5-1.5q-52-13-97.5-40T178 765.5 117 680Q45 541 93 392q11-36 29.5-68.5T165 263t53.5-51 63.5-41q11-6 15-18t-2-23.5-18-15.5-23 2q-79 41-136.5 107.5T34 373Q7 457 14.5 543.5T62 708q43 83 116 141.5T341 931q1 1 2 1h2l-81 42q-8 4-10.5 13t2.5 17l3 8q11 18 29 9l149-77 10-5q8-5 10.5-14t-2.5-17zm417-578q-43-83-114.5-141.5T590 98q-9-3-26-6l80-40q9-5 12-14t-1-17l-3-8q-3-5-8.5-8T632 2t-12 2L471 81l-10 5q-9 5-11 14t3 17l5 10h1l92 144q5 8 14 10.5t17-2.5l8-5q8-4 9-14t-4-18l-59-92q22 3 38 8 22 6 43 14t40.5 19 37.5 24 34.5 28 31 32 27 35.5T811 349q72 139 24 288-23 72-71 129t-115 92q-11 6-15 18t2 24q8 17 27 17 8 0 15-4 78-40 134-106.5T894 656q54-167-23-325z"
  }));
};

module.exports.Reload = function Reload(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 944 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M479 0q-94 0-180 37t-148 99-99 148-37 180q0 118 56 220.5t153 167T439 926l-92 47q-9 4-12.5 13t1.5 18l3 8q5 9 14.5 11.5t18.5-2.5l153-78v-1h1l10-5q3-2 5-4t3.5-4.5 2.5-5.5q2-9-3-18l-6-10-95-148q-5-8-14.5-11t-18.5 2l-7 5q-8 5-9.5 15t4.5 18l55 87q-103-7-189-62T128.5 656.5 79 464q0-81 32-155t85.5-128T324 95.5 479 64q109 0 201.5 53.5t146 146T880 464q0 95-42 179T720 784q-7 5-10 13t-2 16.5 6 15.5q8 10 21 12t24-6q88-66 136.5-163.5T944 464q0-175-116-306Q717 32 552 6q-37-6-73-6z"
  }));
};

module.exports.Rocket = function Rocket(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1040 1056"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M210 899q-10 21-16 30t-21.5 20.5-41 17T65 973q1-32 4.5-54.5T77 883t13.5-23 17-14.5T130 833q39-19 62-37l-39-50q-15 11-52 30-38 19-57.5 39T12 880.5 0 1004l1 33 31-1q62 0 103-6t66-21.5 38-31.5 27-45q15-31 22-44l-47-43q-7 9-13.5 19.5t-9.5 17-8 17.5zm495-694q-53 0-90.5 37.5T577 333q0 35 17 64.5t46.5 46.5 64.5 17 64.5-17 46.5-46.5 17-64.5q0-21-6.5-40.5t-18-35.5-27.5-27.5-35.5-18T705 205zm-.5 192q-26.5 0-45-19T641 333t18.5-45 45.5-19q17 0 32 8.5t23.5 23.5 8.5 32q0 26-19 45t-45.5 19zM1024 45q-1-12-9.5-20.5T994 15q-4 0-10.5-.5T955 14t-45 1-56.5 4.5-66 9-71 15.5T643 67q-92 34-163 117-9 10-17.5 21.5T445 233t-16 27.5-17.5 32T396 323t-17 33.5-15 29.5l-7 14-6 12.5-7 13.5-6 11.5-6 12-6 10.5H148q-14 0-24 10L7 598q-12 13-6.5 30.5T24 650l191 44q12 15 69 78l72 80 39 165q4 18 22 23 1 1 2.5 1t3.5.5 3 .5q12 0 21-8l119-118q2-2 4.5-5t4-6 2-6.5.5-6.5V727q7-5 17.5-11t29-16 24.5-13q18-11 75-40.5t93.5-51T873 556q45-40 68-74.5t41-83.5q15-41 25-92t13.5-92 4.5-83 0-59-1-27zM922 375q-16 43-34.5 71T831 508q-18 16-54 37t-89 48-71 38q-81 45-92 54-3 2-5 5t-3.5 6-2.5 6.5-1 7.5v167l-68 74-28-121q-3-9-8-14-145-162-154-172-4-4-8.5-7t-9.5-4L91 600l72-76h182q2 0 5-.5t5.5-1.5 5-2.5 4.5-3 3.5-3.5 3.5-5q14-22 49-93 3-5 16.5-32t18.5-37.5 17-33 19.5-35T510 250t18-25q60-70 137-98 133-50 296-49 3 184-39 297z"
  }));
};

module.exports.ScreenDesktop = function ScreenDesktop(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M960 32H64q-26 0-45 18.5T0 96v544q0 26 19 45t45 19h416v96H320q-13 0-22.5 9.5T288 832t9.5 22.5T320 864h384q13 0 22.5-9.5T736 832t-9.5-22.5T704 800H544v-96h416q26 0 45-19t19-45V96q0-27-19-45.5T960 32zm0 608H64V96h896v544z"
  }));
};

module.exports.ScreenSmartphone = function ScreenSmartphone(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 576 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M480 0H96Q70 0 48 13T13 48 0 96v832q0 40 28 68t68 28h384q40 0 68-28t28-68V96q0-26-13-48t-35-35-48-13zm32 928q0 13-9.5 22.5T480 960H96q-13 0-22.5-9.5T64 928V96q0-13 9.5-22.5T96 64h384q13 0 22.5 9.5T512 96v832zM288.5 800q-26.5 0-45.5 19t-19 45q0 17 8.5 32t23.5 23.5 32 8.5 32-8.5 23.5-23.5 8.5-32q0-26-18.5-45t-45-19zM352 96H224q-13 0-22.5 9.5T192 128t9.5 22.5T224 160h128q13 0 22.5-9.5T384 128t-9.5-22.5T352 96z"
  }));
};

module.exports.ScreenTablet = function ScreenTablet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 832 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M736 0H96Q70 0 48 13T13 48 0 96v832q0 40 28 68t68 28h640q40 0 68-28t28-68V96q0-26-13-48t-35-35-48-13zm32 928q0 13-9.5 22.5T736 960H96q-13 0-22.5-9.5T64 928V96q0-13 9.5-22.5T96 64h640q13 0 22.5 9.5T768 96v832zM416 800q-26 0-45 19t-19 45 19 45 45 19 45-19 19-45q0-17-8.5-32T448 808.5t-32-8.5zm64-704H352q-13 0-22.5 9.5T320 128t9.5 22.5T352 160h128q13 0 22.5-9.5T512 128t-9.5-22.5T480 96z"
  }));
};

module.exports.Settings = function Settings(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m960 415-82-18q-9-29-24-59l44-74q9-14 13.5-29.5T913 202t-15-29l-45-45q-9-9-21.5-13.5t-25-4T782 115t-22 10l-72 46-8-4-8-4-8-3.5-8.5-3.5-8.5-3.5-8.5-3-8.5-2.5-18-84q-5-24-24-43.5T544 0h-64q-25 0-41.5 19T416 64l-21 82q-16 5-31.5 11.5T333 172l-74-47q-13-9-29.5-12.5t-33.5 0-29 15.5l-46 45q-17 22-15.5 45t15.5 46l47 78q-14 29-22 55l-82 18q-25 5-44.5 23.5T0 483v64q0 24 19 41t45 23l83 20q8 25 21 51l-47 78q-14 23-15.5 46t15.5 45l46 45q20 18 46 17.5t46-14.5l74-47 12 6 12.5 5.5 13 5 13 5L396 878l20 82q6 26 23 45t41 19h64q17 0 32-9.5t24-24 12-30.5l18-83q30-9 58-24l72 46q21 14 47 14.5t46-17.5l45-45q17-22 15.5-45T898 760l-44-74q14-27 23-55l83-20q26-6 45-23t19-41v-64q0-39-41-60-11-6-23-8zm0 127q-1 1-3 2t-5 2l-6 2-119 30-11 33q-4 12-8.5 23.5T797 657l-16 32 63 104q5 9 6 16l-42 42q-4-1-7-2.5t-4-2.5l-105-67-33 17q-8 4-16 7.5l-16 7-16 5.5-35 12-26 119q-1 4-3 7.5t-4 5.5h-58q-4-6-6-14l-30-118-34-11q-3-1-5.5-2t-5.5-2l-6-2-6-2.5-6-2.5-6-2.5-5.5-2.5-5.5-2.5-6-3.5-33-17-105 67q-7 5-13 5l-42-41q1-7 6-15l65-109-15-31q-11-22-18-42l-11-34-117-30q-10-2-16-6v-59q1 0 2.5-1t4-2.5T75 478l121-27 11-35q6-21 18-46l16-31-65-108q-2-4-4-8.5t-2-7.5l42-42 11 5 107 68 33-17q25-13 52-22l34-11 29-116q2-10 7-16h59l1 3q1 1 1.5 2t1 3 1.5 3l26 121 35 12q25 8 49 20l33 17 103-66q7-4 13-4l42 41q-1 2-2 6t-4 8l-63 105 16 32q7 13 12 25t8 24l11 35 119 27q11 2 14 7zM512.5 320q-79.5 0-136 56T320 512t56.5 136T512 704q40 0 75.5-15t61.5-41 41-61.5 15-74.5q0-80-56.5-136t-136-56zm-.5 320q-53 0-90.5-37.5T384 512t37.5-90.5T512 384t90.5 37.5T640 512t-37.5 90.5T512 640z"
  }));
};

module.exports.ShareAlt = function ShareAlt(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M902 949H70V309h257l65-62-2-2H70q-27 0-45.5 19T6 309v640q0 18 8.5 32.5t23 23T70 1013h832q26 0 45-18.5t19-45.5V449l-64 61v439zM270 693h65q22-126 97.5-228t190-161T868 245q9 0 33 1L784 363q-3 3-5 6.5t-3 7.5-1 8.5 1 8 3 7.5 5 7q4 5 10 7t13 2q4 0 8-1t7.5-3 6.5-5l189-194L829 20q-9-9-22.5-9T784 20q-6 6-8.5 14.5t0 16.5 8.5 14l116 116h-30q-149 0-278.5 67.5T377.5 433 270 693z"
  }));
};

module.exports.Share = function Share(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M864 704q-39 0-72.5 17.5T736 769L314 554q6-21 6-42 0-13-2.5-26.5T311 460l424-206q22 31 56 48.5t73 17.5q66 0 113-47t47-113q0-43-21.5-80T944 21.5 864 0t-80 21.5T725.5 80 704 160v6l.5 6 .5 6 .5 6 1.5 6 1 6-430 209q-22-25-52.5-39T160 352q-66 0-113 47T0 512t47 113 113 47q77 0 125-61l424 216q-2 6-3 12t-1.5 12.5-.5 12.5q0 43 21.5 80t58.5 58.5 80 21.5q66 0 113-47t47-113-47-113-113-47zm0-640q40 0 68 28t28 68-28 68-68 28-68-28-28-68 28-68 68-28zM160 608q-40 0-68-28t-28-68 28-68 68-28 68 28 28 68-28 68-68 28zm704 352q-40 0-68-28t-28-68 28-68 68-28 68 28 28 68-28 68-68 28z"
  }));
};

module.exports.Shield = function Shield(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 832 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M812 144q-9-8-20.5-12.5T768 127h-4l-1 .5-2.5.5H737q-72 0-128-14-29-7-62-28t-63.5-46.5T450 12Q434 1 415 1q-10 0-19 2.5T379 12l-5 5-13.5 12.5L341 47l-25 20-28.5 19-31 16.5L224 114q-56 14-129 14H73.5l-3.5-.5-2-.5h-4q-12 0-23.5 4.5T20 145Q0 164 0 191v160q0 121 22 223t54.5 168.5 77.5 120 83 81 79.5 47.5 58.5 24.5 28 6.5q3 1 6 1h6q5 0 11-1 7-1 18-4t39.5-14 55.5-25.5 63-42.5 66.5-62.5T730 787t53-113 35.5-144.5T832 351V191q0-28-20-47zm-44 207q0 357-192 523-81 68-161 85-8-1-20.5-4.5t-49-21-69.5-42-73.5-72.5T133 710.5t-49-154T64 351V191q1 0 2.5.5t3.5.5h25q80 0 145-16 39-9 82.5-37T391 88l24-23q10 10 27.5 25.5t64.5 46 86 39.5q65 16 144 16h16l12-1h3v160zm-216-5q-10-9-23-9t-23 9l-90 91-91-91q-9-9-22.5-9t-22.5 9q-6 6-8 14.5t0 16.5 8 14l91 91-91 91q-9 9-9 22t9 22.5 22.5 9.5 22.5-9l91-91 90 91q10 9 23 9t23-9q17-18 5-39-3-4-5-6l-91-91 91-91q6-6 8-14t0-16.5-8-14.5z"
  }));
};

module.exports.Shuffle = function Shuffle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 960"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m402 442 40-55-135-184H3v64h271zm517-175-78 70q-7 7-8 16t5 16l6 8q7 7 17 7t17-7l127-115h.5l.5-1 8-8q7-6 7-15.5t-7-16.5l-8-8h-1v-1L876 94q-4-3-8.5-5t-9-2-9 2-7.5 5l-6 8q-6 7-5 16t8 16l76 69H684L274 779H3v64h304l410-576h202zm87 522h-1v-1L876 670q-5-4-11-6t-12.5 0-10.5 6l-6 8q-4 4-5 10t1.5 12 6.5 10l77 70-199-1-115-177-39 56 121 185 234 1-77 69q-7 7-8 16t5 16l6 8q3 4 7.5 5.5t9 1.5 9-1.5 8.5-5.5l127-115h.5l.5-1 8-8q7-6 7-15.5t-7-16.5z"
  }));
};

module.exports.SizeActual = function SizeActual(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M383 347V116q-1-10-7.5-15.5T359 95h-17q-9 0-16 7t-7 17l1 155L54 10q-9-9-22.5-9t-23 9.5T-1 33 9 56l265 262-151 1q-10-1-18 5.5T96 342v17q0 10 7 17t17 7l229-1h13q9 0 16-6 3-3 4.5-7.5t1.5-9.5l-2-12h1zm263 29q7 6 16 6h13l229 1q7 0 12-3.5t8.5-9T928 359v-17q-1-11-9-17.5t-18-5.5l-151-1 265-262q10-10 10-23t-9.5-22.5-23-9.5-22.5 9L704 274l1-155q0-10-7-17t-16-7h-17q-10 0-16.5 5.5T641 116v231h1l-2 12q0 5 1.5 9.5t4.5 7.5zM378 647q-7-6-16-6h-13l-229-1q-10 1-17 7.5T96 664v17q1 11 9 17.5t18 5.5l151 1L9 968q-6 7-8.5 15t0 16.5T9 1014t14 8 16.5 0 14.5-8l266-265-1 156q0 10 7 17t16 7h17q10 0 16.5-5.5T383 908V677h-1l2-13q0-11-6-17zm372 58 151-1q22 1 27-20v-20q0-10-7-16.5t-17-7.5H660q-7 0-16 8-6 6-6 17l2 12h-1v231q1 10 7.5 15.5T663 929h18q9 0 16-7t7-17l-1-154 267 263q4 3 8.5 5.5t9.5 3 9.5 0 9.5-3 8-5.5q10-10 10-23t-10-23z"
  }));
};

module.exports.SizeFullscreen = function SizeFullscreen(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m702 383 275-273-1 155q0 9 7 16.5t16 7.5h17q10-1 16.5-6.5t7.5-14.5V37l-.5-.5-.5-.5 2-12q0-10-6-16-7-7-16-7l-12 1h-1L777 1q-5 0-9.5 2T760 8t-5 7.5-2 9.5v16q1 11 9 17.5t18 6.5h151L657 338q-10 9-10 22.5t10 22.5q17 18 39 5 3-3 6-5zM355 641 80 914l1-155q0-9-7-16.5T58 735H40q-4 1-8.5 2.5t-8 4-5 6.5-2.5 8v231l.5.5.5.5-2 12q0 5 1.5 9t4.5 7q7 7 16 7l12-1h1l230 1q10 0 17-7t7-17v-16q-1-11-9-17.5t-18-6.5H126l274-273q5-5 7.5-10.5t2.5-12-2.5-12.5-7.5-10q-6-6-14-8.5t-16.5 0T355 641zm685 346V756q-1-9-7.5-14.5T1016 735h-17q-9 0-16 7t-7 17l1 155-275-273q-6-6-14.5-8.5t-16.5 0-14 8.5q-10 9-10 22.5t10 22.5l274 273H780q-7 0-12.5 2.5T758 970t-5 13v16q0 7 3.5 12.5t8.5 8.5 12 3l229-1h1l12 1q9 0 16-7 6-6 6-16l-2-12h1v-1zM126 65h151q10 0 18-6.5t9-17.5V25q0-10-7-17t-17-7L50 2h-1L37 1q-9 0-16 7-3 3-4.5 7T15 24l2 12h-.5l-.5 1v231q1 9 7.5 14.5T40 289h18q6 0 11.5-3.5t8.5-9 3-11.5l-1-155 275 273q9 10 22.5 10t23-9.5 9.5-23-10-22.5z"
  }));
};

module.exports.SocialBehance = function SocialBehance(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M393 351q12-7 18-20t6-32q0-41-32-54-27-9-68-9H164v129h167q38 0 62-14zm-17-52q0 14-4 17-14 9-41 9H205v-49h112q33 0 54 7l.5.5 1.5 1.5 1.5 2.5 1 4.5.5 7zm15 168q-3-2-7-3t-8.5-2.5-9.5-2l-10-1-11-1-12-.5H164v156h167q19 0 33.5-2.5T390 603q38-19 38-73 0-23-9-39t-28-24zm-186 30h128q16 1 26 2.5t15 4.5q14 6 14 26 0 28-16 36-1 1-2.5 1.5t-4 1-6 1.5-7.5 1.5-9.5.5H205v-75zm659-108q-9-8-19.5-13t-22-7.5T798 366q-22 0-39 6t-29 18q-24 25-30 67v2h195l-1-2q-4-45-30-68zm-104 29q12-12 38-12 23 0 38 12h-76zm283 22q-9-58-40-104-10-14-21-26t-23.5-22-26.5-18V109H663v162q-24 15-45 36-47 47-62 122-6-8-12.5-15.5T529 399q1-1 2-1.5t2-2.5q35-42 35-109 0-63-33-110-55-75-179-77H12v651h324q48 0 89-9 23-5 43-14t37-22q15-11 27.5-25t22.5-31q8-13 14-26 10 25 24.5 45t33.5 35q76 61 174 61 120 0 188-75 45-47 51-98l3-22h3v-39q1-28 0-50.5t-3-39.5zm-585-38-3 1 4 2q43 15 65 49.5t22 83.5q0 16-2.5 32t-8.5 30.5-14 27.5q-16 27-40 45-27 21-64 29-37 7-81 7H53V139h302q104 2 147 61l8 12 6.5 13 5 14.5 4 15 2 15.5.5 16q0 52-26 84-15 17-44 32zm340-165q-17 0-30 1h-64v-89h188v89h-64q-18-1-30-1zM698 530q0 16 3.5 30t9 25.5 13.5 20 19 15.5q26 16 62 16 9 0 18-1t16.5-3.5T854 626t13-9q4-3 8-7.5t8-9.5 7-12h110q-5 37-40 74-57 62-159 62-12 0-23.5-1t-22.5-3.5-22-5.5-21.5-7-20.5-9.5-19.5-12T653 672q-64-52-64-169 0-109 58-167 49-50 123-58h55q20 2 37.5 7t33.5 12q22 10 40.5 25.5T969 359q26 37 33 87 5 29 4 83H698v1zm144 56q-13 11-37 11-9 0-16-1.5t-13-3.5-12-5q-11-8-17-18h107q-6 11-12 17z"
  }));
};

module.exports.SocialDribbble = function SocialDribbble(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 0q-52 0-101.5 10T315 40l-6 3Q171 103 85.5 230T0 512q0 104 40.5 198.5T150 874t163.5 109.5T512 1024t198.5-40.5T874 874t109.5-163.5T1024 512q0-83-26-161t-73.5-141T814 99.5 673 26 512 0zm448 512q0 2-.5 6t-.5 5q-155-42-326-4-5-12-10.5-23.5t-11-23.5-11.5-24-13-24q0-1-1.5-3.5T583 416q110-42 172.5-96T846 214q113 128 114 298zM798 167q-6 14-14.5 28t-28 36-44.5 42.5-66.5 44T553 359Q459 188 378 85q65-21 134-21 53 0 104.5 12.5T713 112t85 55zm-482-57q18 21 39 50t59 89.5T491 380q-70 21-140 33.5t-125.5 15-90 2T72 428q20-105 85-188.5T316 110zM64 512q0-9 1-21 40 5 88 5 183 0 369-59 2 4 4.5 8.5t4.5 8.5q10 20 20 40.5t19 41.5q-8 2-16.5 5l-17 6-16.5 6.5-16.5 7L486 568q-64 29-118 65.5t-89.5 73-56 62.5-34.5 51q-59-61-91.5-140.5T64 512zm172 352q10-18 25.5-39.5T309 767t85.5-74T513 626q13-6 27-11.5t27.5-10.5 27.5-9q67 172 88 331-40 16-83 25t-88 9q-154 0-276-96zm508 31q-23-154-86-316 51-10 102.5-12t91 2.5 62 9T953 587q-11 65-40 123t-72 105-97 80z"
  }));
};

module.exports.SocialDropbox = function SocialDropbox(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 992"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1023.5 208.5Q1022 192 1008 184L723 6q-19-12-37 2L512 149 338 8q-18-14-37-2L16 184Q2 193 .5 209T12 236l165 138L36 486q-13 10-12.5 26T38 537l131 88q-11 9-11 23v129q0 17 15 27l322 182q8 5 17 5 4 0 8.5-1t8.5-4l318-182q15-10 15-27V620l124-83q13-9 14-25 0-8-3-15t-9-11L847 374l165-138q13-11 11.5-27.5zM737 375 512 515 287 375l225-147zM87 215 315 72l143 115-228 148zm143 199 226 142-128 98-218-145zm-8 246 89 60q9 5 19 5t19-6l129-99v282L222 759v-99zm576 99L542 904V617l133 102q4 3 9 4.5t10 1.5 9.5-1.5 8.5-3.5l86-58v97zm115-251L695 654l-127-98 226-142zM794 335 566 187 709 72l228 143z"
  }));
};

module.exports.SocialFacebook = function SocialFacebook(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 528 992"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m342 64 6 1h83v96h-83q-7 0-13.5 1t-10.5 3.5-7.5 5.5-6 6-4 6.5-2 6l-1 5-.5 3.5v154h162l-23 96H303v480h-96V448H79v-96h128V203q0-31 8-55.5t21.5-38.5T264 85t31-14 27-5.5 20-1.5zm89 1zM342 0q-62 0-111 30-88 53-88 173v85H79q-26 0-45 19t-19 45v96q0 26 19 45t45 19h64v415q0 27 18.5 45.5T207 991h96q26 0 45-18.5t19-45.5V512h75q22 0 39-13t23-33l22-96q9-31-10-56.5T465 288h-98v-63h64q26 0 45-19t19-45V65q0-27-18.5-45.5T432 1h-82q-4-1-8-1z"
  }));
};

module.exports.SocialFoursqare = function SocialFoursqare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 736 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m1 76 2-6Q25 0 98 0h543q24 0 42 6 45 12 50 60 4 29-11 99-17 86-50 244.5T631 605q-6 30-15 47-23 43-82 44H382q-14 0-22 9-41 48-108 126-140 162-151 175-22 25-60 17-29-7-38-40 0-1-1-3t-1-3V76zm86 848q1-1 1-2l2-3q39-49 97-121 73-92 109-137 24-30 61-29h173q20 0 30-8.5t15-28.5q2-14 11.5-59t14.5-69q4-22-5.5-33.5T564 422q-171 0-186 1-40 1-58.5-17T304 348q3-62 62-62h237q19 0 28.5-7.5T645 253q10-50 26-128 10-47-38-47H125q-23 0-32 9.5T84 120v789q0 10 3 15z"
  }));
};

module.exports.SocialGithub = function SocialGithub(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 800 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M47 523q-21 0-26-19-12-36-17-80.5t-3.5-90 14-88.5T50 176q-7-28-7-57.5T50 60t20-48Q78-1 94 0q26 1 49.5 6.5T188 22t35 18 34 22q87-23 187-17 17 1 48 8 29 6 37 5.5T561 41q21-14 33-19 45-20 99-22 12 0 20 7.5t8.5 19-7 19.5-19.5 9q-44 1-79 17-8 3-24 14-36 25-58 27-18 2-54-7-28-6-39-7-98-5-182 19-12 3-22-4l-7-5q-25-16-38-24t-36.5-17T108 56q-10 24-10.5 58.5T106 173q8 18-7 31-36 30-43 122.5T73 487q3 10-2 20.5T55 521q-4 2-8 2zm208 270-6-1q-11-2-17.5-11.5T228 759l2-7q14-63 25-92-84-17-144-56.5T22 508q-5-10-1.5-21T34 471t21-1.5T71 483q26 51 86 84.5T303 613q18 3 23 20 4 18-10 29-13 12-33 101l-2 8q-2 10-9.5 16t-16.5 6zm-51 200q-2 0-5-1-11-2-17.5-11t-4.5-20q5-26 34-43 9-5 10-8 7-14 4-75-2-23-2-35-33 5-63.5 6.5t-59-11T55 754q-7-11-16.5-34.5T23 688q-7-9-6-20t10-18.5 20-6 18 9.5q13 15 25 47 2 6 3.5 9.5T97 718t4 8q14 23 49 25.5t96-11.5q13-3 23.5 6.5T278 770q-1 16 1 62 3 75-9 101-9 19-32 32-7 5-8 5-1 10-8.5 16.5T204 993zm398-5q-15 0-23-13-2-3-11-9-21-15-30-32-11-22-12.5-57.5T527 807q3-61 0-86-3-20-20-42-14-19-20-30-6-13 2-26 7-12 21-13 77-6 135.5-40.5T733 477q5-10 15.5-13.5t21 1.5 14 16-1.5 21q-31 61-88.5 101.5T560 659q17 25 21 55t1 96q-4 80 5 99 2 3 4 5.5t8 6.5q17 11 26 24 6 10 3.5 21T617 983q-4 2-7.5 3.5T602 988zm155-471q-3 0-7-1-11-3-16.5-13t-2.5-21q23-79 9.5-167T688 193q-14-12-8-30 8-29 4.5-63.5T669 38q-4-10 0-20.5t14.5-15 21-.5T719 16q14 31 19 69.5t-2 78.5q32 35 48 94t15.5 122T784 497q-7 19-27 20zm-245 507q-8 0-15-4-20-13-48-56-19-29-27-290-1-8 2.5-14.5t10-10T448 645q11 0 19.5 8t8.5 19q7 228 20 264 22 34 30 38 10 6 12.5 17t-4.5 21q-7 12-22 12zm-208 0q-15 0-23-12-6-10-3.5-21t11.5-17q9-4 31-38 12-34 19-264 1-11 9-19t19.5-7.5 19 8.5 7.5 20q-8 261-27 290-28 43-48 56-7 4-15 4z"
  }));
};

module.exports.SocialGoogle = function SocialGoogle(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M707 360q-48-51-91-69t-93-19h-2q-97 0-171 71.5T276 520q0 106 77.5 172.5T520 759h1q57 0 105.5-20.5T718 656H472V401l523 2q14 73 14 125 0 219-135.5 357T516 1023q-105 0-200-40T152 875 42 713 1 515q0-139 69-255.5t187.5-184T516 8q110 0 212.5 45T898 188zm-187 93v154h263q-4 22-14 45.5t-31.5 51-49.5 49-72 35.5-96 14q-119 0-203-84t-84-201 85-202 202-85q111 0 185 72l126-119Q703 63 520 63q-192 0-328 132.5T56 517q0 188 136 320.5T520 970q201 0 323-123.5T965 528q0-41-6-75H520z"
  }));
};

module.exports.SocialInstagram = function SocialInstagram(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M511 4q128 0 209 3 69 3 123 24 52 20 90 58t58 90q21 54 24 123 3 81 3 209t-3 209q-3 69-24 123-20 52-58 90t-90 58q-54 21-123 24-81 3-209 3t-209-3q-69-3-123-24-52-20-90-58t-58-90Q10 789 7 720q-3-81-3-209t3-209q3-69 24-123 20-52 58-90t90-58q54-21 123-24 81-3 209-3zm0 66q-133 0-217 3-54 2-100 19-72 30-102 102-17 46-19 100-3 84-3 217t3 217q2 54 19 100 30 72 102 102 46 17 100 19 84 3 217 3t217-3q54-2 100-19 72-30 102-102 17-46 19-100 3-84 3-217t-3-217q-2-54-19-100-30-72-102-102-46-17-100-19-84-3-217-3zm0 644q84 0 143.5-59.5T714 511t-59.5-143.5T511 308t-143.5 59.5T308 511t59.5 143.5T511 714zm0-463q108 0 184 76t76 184-76 184-184 76-184-76-76-184 76-184 184-76zm332-10q0 25-18 42.5T781 301q-25 0-42.5-17.5T721 241q0-26 17.5-44t42.5-18 43.5 18.5T843 241z"
  }));
};

module.exports.SocialLinkedin = function SocialLinkedin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 992"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M998 986H790q-11 0-19-7.5t-8-18.5V625q0-33-6.5-56t-15-34-21.5-17.5-19.5-7-16.5-.5q-24 0-43 12t-26.5 23.5T602 569q-2 6-3.5 16.5T597 610v350q0 11-8 19t-19 8H362q-5 0-10-2t-9-6q-8-8-7-19v-92l.5-93 .5-108V456l-.5-78-.5-43q-1-11 7-19.5t19-8.5h208q6 0 11 2t8.5 5.5 5.5 8.5 2 11v15q64-57 161-57 125 0 195.5 82t70.5 227v359q0 5-2 10t-5.5 8.5-8.5 5.5-10 2zm-182-53h155V601q0-122-55.5-188.5T758 346q-104 0-162 86-5 19-25 19h-2q-15 0-23-14-6-10-2-21v-56H389q2 111 0 573h155V610q0-39 9-61 7-17 17-31.5t22.5-26 27-19 31-12T684 456q42 0 71.5 20t45 57.5T816 625v308zm-569 53H39q-11 0-19-7.5T12 960V334q0-11 8-19t19-8h208q11 0 19 8t8 19v626q0 7-3.5 13t-10 9.5T247 986zM66 933h155V360H66v573zm77-658h-1q-62 0-102-38.5t-40-97T41 43 145 5q61 0 101 37.5t41 96.5q0 59-40.5 97.5T143 275zm2-217q-41 0-66.5 22.5T53 140q0 36 25 59t64 23h1q27 0 47.5-10.5t32-29T234 140q-1-37-25-59.5T145 58z"
  }));
};

module.exports.SocialPinterest = function SocialPinterest(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 768 976"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M759 335q-3-139-105.5-230T396 14q-33 0-68 5-124 17-211 99T12 315q-8 58 1.5 113t44 100 90.5 59l17 4 10-14q4-7 10-17t13-31.5 5-37.5q-1-8-5-16t-7-11.5-8-8.5l-3-3q-14-22-19-55t0-64q14-75 71.5-125T370 152q10-1 22-1 83 0 134.5 45.5T582 318q1 16 .5 32t-2 31.5-4.5 30-7 28.5-9 27-11 25-12.5 22.5T522 534t-17 17l-3 3q-22 19-42 22-3 1-5.5 1t-5 .5-5.5.5q-28 0-45-16t-18-37q-1-30 24-96 10-28 15-44t9-41 1-46q-5-35-33-59t-64-24q-9 0-18.5 2t-18.5 5q-25 10-43.5 29T225 294.5t-12 53 1 57.5 14 57q-3 17-8.5 37.5t-9 34.5-10.5 38q-12 46-18.5 70.5T166 711t-11.5 76.5T153 862t8 82l6 31 28-12q13-5 24.5-16.5t17-19.5 14.5-23q5-8 7-12 28-44 47-97t34-118q62 47 154 37 64-7 116.5-43.5t84.5-90 49-117T759 335zM279 465l1-7-3-7q-14-37-15.5-74t11.5-67 41-41q5-2 9.5-2.5t9.5-.5q12 0 22 5t17 14 8 20q2 16-1.5 35.5T371 373t-14 39q-27 76-26 115t32 70 81 31q11 0 23-2t23-5.5 19.5-9.5 13.5-9.5 12-10.5l3-3q48-41 73-114.5T632 315q-5-103-79-162.5T367 101q-22 2-42.5 6.5T285 119t-36.5 17-33.5 22-30 25.5-25.5 30-20.5 34-16 36.5-11 40q-7 40 0 82.5t26 71.5q3 6 9 12t6 7q1 4 0 9.5t-4 12-6 13.5q-51-22-71-82.5T62 322q15-99 90.5-169T335 68q31-4 61-4 134 0 222 77t91 195q1 76-23 146.5t-76 122T487 664q-7 1-14.5 1.5t-13.5.5q-38 0-63.5-12.5T342 613l-32-32-10 44q-11 52-20.5 86.5t-26.5 78-37 75.5q-2 3-3 5t-2.5 4.5-3.5 5.5-3 5q-4-50 3-107.5t15.5-93.5 26.5-99q8-29 11-41.5t9-36 10-42.5z"
  }));
};

module.exports.SocialReddit = function SocialReddit(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M665 666q-15-4-36 10l-1 1q-17 17-48.5 26t-75.5 9q-90 0-125-35-2-2-5-3.5t-6.5-2.5-7.5-1-7 1-6.5 2.5-5.5 3.5q-5 5-7 12.5t0 14.5 7 12q32 27 73.5 40t95.5 13q116 0 169-53 7-8 7-19t-6-18q-6-11-15-13zM438 515q0-21-11-40.5T398 443t-38-12q-31 0-54.5 25.5T282 515q0 45 39 68 18 11 39 11 32 0 55-23.5t23-55.5zm222-78q-45 0-68 39-11 19-11 39 0 16 6.5 30.5t17 25 25 17T660 594q44 0 67-40 11-18 11-39 0-15-6.5-29.5t-17-25-25-17T660 437zm237-125q-42 0-76 29-104-66-267-78l50-167 140 34q3 39 33 67t70 28q41 0 72-31t31-72-31-72-72-31q-14 0-28.5 4T792 34.5 770 52t-16 22L587 32h-2q-10 0-19 7.5T556 58l-66 204q-163 2-292 80-37-23-75-23-50 0-86 35.5T1 441q0 31 14.5 57.5T57 540v25q0 133 135 220 129 89 318 89 92 0 175.5-23T831 785q26-18 47.5-38t38.5-42 28.5-44.5T963 614t6-49v-26q10-8 19.5-19.5t17-25.5 12-29.5 4.5-30.5q0-62-54-99-33-22-71-23zm65 129q0 20-17 39-18-49-75-99 13-6 27-6 45 0 60 40 5 12 5 26zm-56 124q0 95-108 173-130 80-288 80-81 0-156-21t-132-59q-114-76-114-173t114-173q58-38 130.5-58.5T504 313q80 0 155.5 20.5T792 392q113 77 114 173zM150 378q-49 40-78 99-14-23-14-36 0-19 8-34t23-23.5 34-8.5q20 0 27 3zm650-256q0-9 3.5-18t10-15 15-9.5T847 76q13 0 23.5 6T887 98.5t6 23.5q0 10-3.5 18.5t-9.5 15-15 10-18 3.5q-20 0-33.5-13.5T800 122z"
  }));
};

module.exports.SocialSkype = function SocialSkype(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M978 574q2-17 3.5-34t1.5-34q0-97-38-185T843.5 169.5 692 68.5 508 31q-32 0-66 4Q376 0 301 0 178 0 91 87T4 297q0 74 34 138-2 18-3.5 35.5T33 506q0 77 24 149.5t68 131T227.5 889t131 68T508 981q14 0 28-1t27-3q73 47 160 47 123 0 210-87t87-210q0-82-42-153zm-93 315q-33 32-74.5 49.5T723 956q-69 0-126-38l-17-11-20 2q-25 4-52 4-83 0-158-32-73-31-129.5-87.5T133 664q-32-75-32-158 0-33 5-65l3-18-9-16q-14-25-21-53t-7-57q0-95 67-162 33-33 74.5-50T301 68q29 0 57.5 7.5T413 97l16 9 19-3q14-2 29.5-3t30.5-1q83 0 158 32 73 31 130 87 28 28 50 60.5t37 69.5q32 75 32 158 0 10-.5 21t-1.5 21.5-3 20.5l-3 20 11 17q17 28 25.5 58.5T952 727q0 95-67 162zM579 462l-96-22q-40-9-59.5-22.5T404 385q0-13 5.5-23.5T426 342q21-16 61-16 23 0 41.5 5t33.5 15q8 5 36 35 19 20 40 20 10 0 19.5-3t17.5-9q15-12 15-34 0-48-64-83-60-34-132-34-41 0-75.5 8.5T357 273q-32 21-48 50.5T293 392q0 107 123 138l130 33q49 12 49 52 0 27-24 46-26 21-68 21-50 0-80-24-7-5-38-43-20-24-44-24-21 0-35 13-7 7-10 15.5t-3 19.5q0 47 51 83 59 44 159 44 50 0 89-11.5t66-34.5q52-42 52-113 1-115-131-145z"
  }));
};

module.exports.SocialSoundcloud = function SocialSoundcloud(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1022 514q0 66-47 112.5T862 673h-63q-14 0-23-9t-9-23q0-3 .5-5.5t1.5-5 2.5-5 3-4.5 3.5-4 4.5-3l5-2 5.5-1.5 6-.5h63q26 0 48-13t35-35 13-48q0-16-5-30.5t-13.5-26T919 437t-26.5-14-30.5-5q-20 0-38.5-8T792 388t-20-33v-1q-13-34-37-62t-57.5-44.5T606 228q-9 0-15.5 4.5T580 244t-4 15v382q0 7-2.5 12.5t-7 10-10.5 7-12 2.5q-13 0-22.5-9.5T512 641V259q0-15 5-29.5t13.5-26 20-20.5 26-14 30.5-5q77 4 138 50.5T831 332l1 1q7 22 30 22h7q64 2 108.5 48.5T1022 514zM416.5 673q-13.5 0-22.5-9t-9-23V291q0-13 9-22.5t22.5-9.5 22.5 9.5 9 22.5v350q0 13-9 22.5t-22.5 9.5zM289 673q-13 0-22.5-9t-9.5-23V275q0-13 9.5-22.5T289 243q8 0 15.5 4t12 11.5T321 275v366q0 13-9.5 22.5T289 673zm-128 0q-5 0-10-1.5t-8.5-4.5-6.5-7-4.5-8.5T130 641V386q0-4 1-8t3-7.5 5-6.5 6.5-5 7.5-3 8-1q14 0 23 9t9 22v255q0 13-9 22.5t-23 9.5zM34 609q-13 0-22.5-9T2 578V450q0-13 9.5-22.5T34 418q9 0 16 4.5t11.5 12T66 450v128q0 13-9.5 22T34 609zm637 0q13 0 22.5 9.5T703 641t-9.5 22.5T671 673q-8 0-15.5-4.5t-12-11.5-4.5-15.5 4.5-16 12-12T671 609z"
  }));
};

module.exports.SocialSpotify = function SocialSpotify(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M418 311q123 3 214 20.5T802 389q15 7 26 15.5t15 18.5 2 26.5-10 21.5q-5 4-12.5 6.5t-15 4-15 .5-13.5-3q-156-81-360-73-53 2-151 21-56 11-68-31-5-16 .5-29t17-19.5T245 338q18-4 173-27zm23 152q87 6 164 25.5T750 547q4 2 9 6t9 9 7.5 10.5 5.5 11 2 10.5q2 22-19 28.5t-48-7.5q-176-93-390-57-3 0-20 5.5t-25 3.5q-3-1-6.5-2t-6.5-2.5l-6-3-6-3.5-6.5-4-6-3.5-6-3.5-6.5-3q3-5 9-17.5t11.5-20T263 496q26-7 54-12t68.5-11.5T441 463zm-21 153q170 3 278 64 10 5 15.5 9.5t11.5 11 5 14.5-8 16q-5 8-24 9t-29-5q-131-70-317-47-7 1-17.5 3.5T315 696t-17 1-15.5-4-18-8.5T250 677q2-4 6-9t6.5-9.5 6-9 7.5-7.5 7-4q24-5 49.5-9.5t54.5-8 33-4.5zm604-104q0 212-150 362t-362 150-362-150T0 512t150-362q25-25 51.5-46t55-37.5 59-29 62-21T443 4t69-4q212 0 362 150t150 362zm-64 0q0-186-131-317T512 64 195 195 64 512t131 318 317 132 317-132 131-318z"
  }));
};

module.exports.SocialSteam = function SocialSteam(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 928"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M760 8q40 0 88.5 19.5T923 73l30 30q27 28 44 72t20 88v37q-6 84-57.5 147.5T834 536q-29 10-54.5 12.5T747 556L547 703q-5 4-10 7t-7 5q-10 81-71.5 128.5T319 891q-56 0-103-26.5T142 787q-6-11-9.5-19.5T127 752t-4-11l-99-40q-18-7-20-21l-2-12V455q2-32 29-32 3 0 13 2 18 7 83 33t100 41l16-7q38-16 88-16 10-14 16-23l89-127q24-31 39-57 4-64 24.5-105T564 78q33-31 86-50.5T760 8zM326 520q-35 0-84 21-7 3-14 3-6 0-34-11-24-10-74-30t-74-30v189l99 40q11 5 16 14t9.5 24.5T181 767q41 80 139 80 60 0 108-35.5t57-96.5l2-11q1-7 4.5-12.5t6-8 11-8.5 11.5-8l201-147q16-12 48-15.5t51-10.5q61-21 104.5-74T973 297v-32q-5-76-52-131l-29-29q-58-53-150-53-49 0-88 19-127 63-139 216-13 23-44 65l-88 126q-5 5-10.5 16.5t-12 18T343 520h-17zm-9 283q-29 0-58-20-32-23-37-40 3 1 37.5 15t56.5 14q33 0 64-28 29-27 29-70-3-44-30.5-68.5T305 568q3-4 6-4h11q53 0 87 35.5t34 83.5q0 49-33.5 84.5T317 803zm303-530q0-55 38.5-94t93.5-39 94 39 39 94-39 93.5-94 38.5-93.5-38.5T620 273zm44 0q0 37 25.5 62.5T752 361t63-25.5 26-62.5-26-63-63-26-62.5 26-25.5 63z"
  }));
};

module.exports.SocialStumbleupon = function SocialStumbleupon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M777 837q-97 0-166.5-69T540 601V467q0-12 10.5-19t21.5-1l58 27 90-27q11-3 20 3 9 7 9 19v135q0 11 8 19.5t20 8.5 20-8.5 8-19.5V466q0-9 7-16 6-7 16-7h164q9 0 16 7t7 16v133q0 98-70 168t-168 70zM585 503v98q1 79 57.5 134.5T777 791q52 0 96.5-25.5t70-70T969 599V489H850v115q0 30-21.5 51.5t-52 21.5-52-21.5T703 604V499l-68 21q-9 2-17-1zM246 837q-98 0-167.5-70T9 599V466q0-9 6.5-16t16.5-7h164q6 0 11 3t8.5 8.5T219 466v132q0 11 8 19.5t20 8.5q7 0 13.5-4t10.5-10.5 4-13.5V288q1-39 13.5-74t34.5-63 51-49 64.5-32.5T512 58q63 0 117 30.5t86 83T749 288v69q0 17-17 22l-98 29q-8 2-16-1l-65-31q-14-6-14-21v-59q0-7-3.5-13.5t-10-10.5-14.5-4q-11 0-19.5 8.5T483 296v306q-1 97-70.5 166T246 837zM55 489v110q0 80 56 136t135 56q31 0 60-9.5t52.5-27 41.5-41 27.5-52T438 602V296q0-6 1-13t3.5-12.5 5.5-11 7-10.5 9-9 10.5-7.5T486 227t12.5-3 13.5-1q30 0 51.5 21.5T585 296v45l45 20 73-21v-51q-2-78-57.5-131.5T512 104t-133.5 53.5T321 288v310q0 30-22 51.5T247 671q-20 0-37-10t-27-26.5-10-36.5V489H55z"
  }));
};

module.exports.SocialTumblr = function SocialTumblr(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 672 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M352 64v224h224v96H353v278q0 26 .5 45.5t2.5 33 5 21.5q2 5 5 10t8 10.5 10.5 10T398 801t17 7 20 5 23 2q87 0 150-47v149q-33 16-103 32-46 11-99 11-153 0-201-120-12-32-12-94V384H64v-98q13 0 28-3t35.5-11 38.5-24 34-39 25.5-61 9.5-84h117zm0-64H235q-26 0-45 18.5T171 64q0 30-4.5 54.5t-12 40.5-17.5 28-20 18.5T96 216t-18 5-14 1q-17 0-31.5 8.5T9 253.5 0 285v98q0 13 4.5 25T18 429t21 14 25 5h65v298q0 74 17 117 9 24 22 45t35 43 49 37.5 67 25.5 87 10q61 0 114-12l7-2q69-16 109-35 16-8 26-24t10-34V768q0-40-35-58-14-6-29-6-21 0-38 12-46 35-112 35-27 0-37-12-1-4-2-10t-1.5-24.5-.5-42.5V448h159q27 0 45.5-19t18.5-45v-96q0-27-18.5-45.5T576 224H416V64q0-27-18.5-45.5T352 0z"
  }));
};

module.exports.SocialTwitter = function SocialTwitter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M684 95q80 0 135 56 62-12 116-43-21 64-80 98 55-6 105-28-12 18-26.5 34.5t-31 31T868 271q1 12 1 23 0 59-15.5 119t-45 117-75 106-102 86-130 58T346 801q-153 0-282-80 11 1 21.5 2t22.5 1q128 0 228-77-60-1-107-35.5T164 523q6 1 11.5 2t11.5 1.5 12 .5q25 0 48-7-63-12-105-61t-42-114v-2q39 21 83 22-25-16-43-38.5t-28.5-51T101 217q0-24 6.5-47t18.5-43q69 83 167.5 132T505 314q-5-20-5-41 0-74 54-126t130-52zm276 83zM684 31q-93 0-163 60.5T439 241Q278 209 175 86q-19-23-49-23l-5 1q-33 2-50 30-34 57-34 123 0 43 15 83-16 19-16 43v2q0 95 66 165-2 8-1.5 16.5T103 543q22 65 74 109-17 4-34.5 6t-34.5 2q-20 0-37-2l-7-1q-21 0-37.5 12T3 700q-7 21 .5 42.5T30 775q144 90 316 90 106 0 200-31.5T709 747t119.5-126.5 77-153T933 302q45-37 78-85 7-8 10-18t3-21q0-33-27-52 3-13 2-25t-7-23.5T976 58q-18-14-41-14-4 0-8 .5t-8 1.5-8 2.5-8 3.5q-31 19-67 29-68-50-152-50z"
  }));
};

module.exports.SocialVkontakte = function SocialVkontakte(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M3 184q0-51 58-55l149 1q15 0 20 15 23 75 51.5 129.5T356 400q4 9 13 9 7 0 11-7l3-11 1-173q0-18-8.5-24t-31.5-9q-18-3-18-22 0-4 1-6 21-65 120-65l56-1q38 0 63 19t25 60v227q7 5 13 5 15 0 26-18 110-154 119-206 0-1 2-5 7-15 23-26t28-15q4-2 9-2h155l10 1q20 0 31 19 4 6 5.5 13t2 14 .5 8v7q-7 41-35.5 87.5T907 380t-55 71q-9 12-9 22 0 8 8 18l146 184q12 16 12 35 0 23-18 38t-43 17l-17 1H779q-1 0-4 .5t-4 .5q-22 0-41-19-7-8-94-118-5-7-14-13-4 16-10.5 46t-9.5 43l-3 17q-10 35-42 42l-14 1h-98q-83 0-165.5-76T131 493.5 8 213q-5-13-5-29zm601 259q-21 0-38-11.5T549 400V170q0-20-10-28.5t-35-8.5l-57 2q-43 0-65 15 44 21 44 68v176q-2 25-20 41.5T366 452q-30 0-46-29-78-118-116-224l-9-26-133-1q-13 0-14.5 1.5T46 182q0 9 2 19l21 56q84 217 182.5 342T445 724h100q6 0 9-3.5t5-13.5l2-10 19-88q8-18 14-24 11-11 26-11 24 0 49 29l85 108q8 13 17 13h165q30 0 30-15 0-5-3-10L818 518q-17-21-17-45t16-46q13-20 50.5-66.5t65.5-87 37-73.5l3-13q-1-2-1-6.5t-1-7.5H814q-15 6-24 18l-6 19q-25 69-131 213-21 20-49 20z"
  }));
};

module.exports.SocialYoutube = function SocialYoutube(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1056 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M957 126q-13-9-35-16t-67-14.5-128.5-12T528 79q-348 0-415 41-79 47-95 277-2 30-3 57 1 34 4.5 71.5t12.5 92 30 98 50 61.5q67 40 416 40 364 0 429-46 26-19 44-60t26-92 10.5-89.5 3.5-76.5q-1-34-3.5-71.5t-10-92.5-25.5-99.5-45-63.5zm-38 593q-9 6-34 12.5t-119.5 14T528 753q-139 0-231-7t-117-12.5-35-11.5q-25-15-44.5-88T79 454q2-108 22-186.5t45-93.5q9-5 34-11t117-13 231-7q143 0 237.5 7.5t119.5 14 34 13.5q11 7 21 30t18 57.5 13 83.5 6 104q-1 108-18 178.5T919 719zM736 423 448 246q-16-10-32-.5T400 274v353q0 19 16 28 8 4 16 4 4 0 8.5-1t7.5-4l288-176q16-10 16-28-1-18-16-27zM464 570V330l194 120z"
  }));
};

module.exports.Speech = function Speech(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M960 0H64Q37 0 18.5 18.5T0 64v577q0 27 18.5 45.5T64 705h128v159q0 5 1 9.5t3.5 8.5 6.5 7 8 5q3 1 6 1.5t7 .5q13 0 22-9l185-182h529q27 0 45.5-18.5T1024 641V64q0-11-3-20.5t-9-17.5-14-14-18-9-20-3zm0 641H405L256 788V641H64V64h896v577zM224 385h576q13 0 22.5-9.5T832 353t-9.5-22.5T800 321H224q-13 0-22.5 9.5T192 353t9.5 22.5T224 385zm0-128h576q13 0 22.5-9.5T832 225t-9.5-22.5T800 193H224q-13 0-22.5 9.5T192 225t9.5 22.5T224 257zm0 256h384q13 0 22.5-9.5T640 481t-9.5-22.5T608 449H224q-13 0-22.5 9.5T192 481t9.5 22.5T224 513z"
  }));
};

module.exports.Speedometer = function Speedometer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 960"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 4Q408 4 313.5 44.5t-163 109T41.5 317 1 516q0 132 63.5 247T241 949q11 7 24 4t20-14 4-24-14-20q-81-51-134-129l34-20q11-6 14.5-19t-3-24.5-19.5-15-24 3.5l-34 19q-18-38-29-79t-14-84h35q14 0 23-9.5t9-22.5-9-22.5-23-9.5H66q6-87 45-165l32 19q7 4 16 4 18 0 27-16 7-11 3.5-24T175 282l-32-19q49-71 120-119l18 31q9 16 28 16 8 0 16-4 5-3 9-8.5t5.5-11 1-12T336 143l-18-31q38-18 78.5-28.5T479 69v40q0 14 9.5 23t23 9 22.5-9 9-23V69q87 6 165 44l-18 30q-1 3-2 5.5t-1.5 5.5-.5 5.5.5 5.5 1.5 5.5 2.5 5 3 4.5 3.5 4 5 3l4 2 4 1.5 4 .5h4q4 0 8-1t7.5-3 7-5 5.5-7l17-30q71 49 119 119l-30 18q-6 3-9.5 8t-5.5 11-1 12.5 4 11.5q5 8 12.5 12t15.5 4q4 0 8-1t8-3l30-17q38 77 44 164h-35q-13 0-22.5 9.5T891 516t9.5 22.5T923 548h35q-6 85-42 161l-32-18q-12-7-24.5-3.5T840 703q-3 5-4 11.5t1 12.5 5.5 11 9.5 8l32 19q-54 80-138 132-11 7-14 19.5t4 24.5q3 4 7.5 7.5t9.5 5.5 10 2q9 0 17-5 114-70 178.5-185.5T1023 515q0-103-40.5-198t-109-163.5-163-109T512 4zm236 412q8-5 12-12.5t4-15.5-4-16q-7-11-19.5-14.5T716 360L542 461q-15-9-31-9-26 0-45 19t-19 45q0 17 8.5 32t23.5 23.5 32 8.5q26 0 45-19t19-45z"
  }));
};

module.exports.Star = function Star(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 992"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m512 61 137 286 313 46-226 226 7 45 46 270-277-148-277 148 46-270 7-45L62 393l312-46 21-43zm0-61q-22 0-40 11t-27 30L329 282 62 321q-20 3-36 16T3 370q-14 41 18 73l195 195-45 271q-4 20 4.5 39t25.5 31q3 2 6.5 4t7 3.5 7 2.5l7 2 7.5 1h8q19 0 35-9l233-125 232 125q9 5 18 7t18 2q24 0 43-13 17-12 25.5-31t4.5-39l-45-271 195-195q32-32 18-73-7-20-23-33t-36-16l-267-39L579 41q-2-5-5-9t-6.5-8-7.5-7.5-8.5-6-9-4.5-9.5-3.5-10.5-2T512 0z"
  }));
};

module.exports.Support = function Support(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 0Q373 0 255 68.5T68.5 255 0 512t68.5 257T255 955.5t257 68.5 257-68.5T955.5 769t68.5-257-68.5-257T769 68.5 512 0zm128 83q54 16 102 45t86.5 67.5T896 282t45 102H733q-34-59-93-93V83zm64 429q0 80-56.5 136T512 704q-52 0-96-25.5t-70-70-26-96.5q0-79 56.5-135.5T512 320q52 0 96 26t70 70 26 96zM448 69q32-5 64-5t64 5v196q-32-9-63.5-9t-64.5 9V69zm-64 14v208q-29 17-52.5 40.5T291 384H83q45-151 175-240 59-41 126-61zM64 512q0-8 .5-16l1-16 1.5-16 2-16h196q-9 32-9 64t8 64H69q-5-34-5-64zm320 429q-108-32-188.5-112.5T83 640h208q34 59 93 93v208zm192 14q-32 5-64 5t-64-5V760q33 8 64.5 8t63.5-8v195zm64-14V733q59-34 93-93h208q-22 72-65 132.5t-103.5 104T640 941zm120-365q4-16 6-32t2-32q0-32-9-64h196q5 34 5 64t-5 64H760z"
  }));
};

module.exports.SymbolFemale = function SymbolFemale(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M624 0Q515 0 423 53.5T277.5 199 224 400q0 146 94 258L191 786 56 650q-10-10-23-10t-22 10q-18 17-5 39 2 3 5 6l135 137L10 969q-10 9-10 22.5t9.5 22.5 23 9 22.5-9l136-137 137 138q9 9 22 9t23-9q3-4 5.5-8.5t3-9.5 0-10-3-9.5-5.5-7.5L236 832l128-129q112 97 260 97 81 0 155-32t127.5-85.5T992 555t32-155.5T992 244t-85.5-127.5-127.5-85T624 0zm-.5 736Q555 736 493 709.5T385.5 638t-72-107.5T287 400q0-92 45-169.5T454.5 108 624 63q45 0 89 12t81 34 68 53 52.5 68 33.5 80.5 12 89.5q0 68-26.5 130.5T862 638t-107.5 71.5-131 26.5z"
  }));
};

module.exports.SymbolMale = function SymbolMale(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1056"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1023 39q0-5-1-9.5t-4-7.5q-7-7-17-6h-12l-294-1q-9 0-16 7t-7 17v16q1 12 8.5 18.5T698 79l216 1-257 254q-111-93-256-93-109 0-201 53.5T54.5 440 1 641q0 81 31.5 155t85 128 127.5 85.5 156 31.5q108 0 200.5-53.5t146-145.5T801 641q0-149-98-262l257-255-1 219q0 6 3 12t8.5 9 11.5 3h16q5 0 9.5-1.5t7.5-4 5-6.5 2-9l1-295-.5-.5-.5-.5zM737 641q0 91-45 168.5T569.5 932 401 977q-69 0-131-26.5T162.5 879t-72-107.5T64 641q0-91 45-169t122.5-123T401 304q55 0 106 17t92.5 48.5T672 442t48 92.5T737 641z"
  }));
};

module.exports.Tag = function Tag(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1024 416V78q0-32-23-55T946 0H601q-55 0-76 21L19 527Q0 546 0 573q0 13 5 24.5T19 618l387 387q18 19 45 19t46-19l506-506q21-21 21-78v-5zm-67 38L451 960 64 573 570 67q1-1 3-1.5t5-.5 6-.5 6.5-.5H946q6 0 10 4t4 10v339q0 32-3 37zM768 128q-53 0-90.5 37.5T640 256q0 35 17 64.5t46.5 46.5 64.5 17q53 0 90.5-37.5T896 256q0-35-17-64.5T832.5 145 768 128zm.5 192q-26.5 0-45.5-18.5T704 256t19-45.5 45.5-18.5 45 18.5T832 256t-18.5 45.5-45 18.5z"
  }));
};

module.exports.Target = function Target(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M992 480h-97q-12-140-111.5-239.5T544 130V32q0-13-9.5-22.5T512 0t-22.5 9.5T480 32v98q-92 7-169.5 55T185 310.5 129 480H32q-13 0-22.5 9.5T0 512t9.5 22.5T32 544h97q12 140 111.5 239.5T480 894v98q0 13 9.5 22.5t22.5 9.5 22.5-9.5T544 992v-98q140-11 239.5-110.5T895 544h97q13 0 22.5-9.5t9.5-22.5-9.5-22.5T992 480zM480 194v286H194q7-75 46.5-137.5t102-102T480 194zM194 544h286v286q-113-11-194-92t-92-194zm350 286V544h286q-11 113-92 194t-194 92zm0-350V194q37 3 72.5 15.5T682 241t56 45 45 56 31.5 65.5T830 480H544z"
  }));
};

module.exports.Trash = function Trash(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 832 1056"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M801 175H576V88q0-20-10-37t-27-26.5-37-9.5H330q-30 0-52 21t-22 52v87H31q-13 0-22.5 9.5T-1 207t9.5 22.5T31 239h44l74 740q3 26 22.5 44t45.5 18h398q26 0 45.5-18t21.5-44l75-740h44q8 0 15.5-4.5t12-11.5 4.5-16q0-13-9.5-22.5T801 175zM320 88q0-10 10-10h172q10 0 10 10v87H320V88zm299 885q-1 4-4 4H217q-3 0-4-4l-73-734h552z"
  }));
};

module.exports.Trophy = function Trophy(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 960"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M736 896H286q-13 0-22.5 9.5T254 928t9.5 22.5T286 960h450q13 0 22.5-9.5T768 928t-9.5-22.5T736 896zm281-806q-1-6-4-10.5t-7-8-9-5.5-11-2H829V32q0-13-9-22.5T797 0H222q-13 0-22.5 9.5T190 32v32H38q-7 0-14 3.5t-11.5 9T7 90q-1 5-2.5 14.5t-2 33 2.5 46 13.5 50T47 283q53 66 162 69 31 92 103.5 153T477 576v223h-95q-14 0-23 9.5t-9 22.5 9 22.5 23 9.5h258q13 0 22.5-9.5T672 831t-9.5-22.5T640 799h-99V576q93-10 165.5-71T810 352q56-1 98-18.5t69-50.5q56-69 42-181-1-7-2-12zM96 243q-33-41-29-115h123v118.5l.5 10.5 1 10 1 10 1.5 10q-33-3-57.5-14T96 243zm669-7q0 56-20 107.5t-54.5 89T609 492t-99 22q-106 0-181-81.5T254 236V64h511v172zm163 7q-17 19-42.5 30.5T825 287q2-13 3-25.5t1-25.5V128h128q3 74-29 115z"
  }));
};

module.exports.Umbrella = function Umbrella(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1024 510q0 13-9 22.5t-23 9.5H543v324q0 43-21 79t-57.5 57.5T385 1024q-65 0-111.5-46.5T227 866q0-13 9.5-22.5T259 834q9 0 16.5 4t11.5 11.5 4 16.5q0 39 27.5 66.5T385 960t67-27.5 28-66.5V542H32q-9 0-16.5-4.5T4 525.5 0 510q0-123 57.5-215T223 151.5 480 95V32q0-6 2.5-12T489 9.5t10-7T512 0q13 0 22 9.5t9 22.5v63q259 9 387 152 94 106 94 263zm-65-32q-6-75-39-134.5T830 243t-137.5-63T512 158q-201 0-318 84.5T65 478h894z"
  }));
};

module.exports.UserFemale = function UserFemale(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M960 803 682 671q11-6 43.5-12.5t63-11.5 57-13.5T876 613q-3-3-6.5-9.5t-14.5-28-19.5-44-18-55.5-13.5-65q-1-11-9.5-74T780 226q-11-99-86.5-162.5T512 0q-70 0-128.5 28.5T288 109t-44 117q-4 36-9 72t-9 66.5-6 46.5q-7 51-24.5 101.5T163 588l-15 25q4 12 30.5 20.5t57 13.5 63 11.5T342 671L64 803q-3 1-7 2.5T42 814t-19.5 15T7 850t-7 28v85q0 13 5 24.5t13.5 19.5 20.5 12.5 25 4.5h896q27 0 45.5-17.5T1024 963v-85q0-47-57-73-6-2-7-2zM64 960v-82q0-2 7-7t15-8l5-3 279-132q16-7 26-22.5t10-34.5q1-4 .5-8t-1.5-7.5-2.5-7.5-3.5-7.5-4-6.5-5-6-6-5.5l-6-5-7-4.5q-23-11-95-24-23-4-39-7 36-82 46-164 2-17 7-54 5-33 9-64t8-66q9-75 66-122.5T512 64q82 0 139 47.5T717 234q6 57 17 130 1 9 2 15t2 13.5 1.5 14T741 418q10 82 46 164-16 3-39 7-72 13-95 24-11 6-19 15t-12.5 20-3.5 23q0 6 1 12t3 11.5 5.5 10.5 7.5 9.5 9 8 10 5.5l279 133 5 2q7 3 14 7.5t8 7.5v82H64z"
  }));
};

module.exports.UserFollow = function UserFollow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M64 895q0-25 27-37l281-133q15-7 25-20.5t12-29.5q4-36-24-58-45-37-71-107.5T288 384V224q0-16 9-35t24.5-36.5T359 119t46.5-28T458 71.5t54-7.5 54 7 52.5 19 46 28.5 37 34 25 36T736 224v160q0 57-24 127t-71 106q-8 7-14 16.5t-8.5 20T617 675q2 17 12 30.5t25 20.5l96 45 16-64-85-39q60-48 89.5-130.5T800 384V224q0-31-16.5-64t-45-61T674 48.5 595.5 13 512 0q-69 0-136.5 33.5t-109.5 86T224 224v160q0 66 30.5 150.5T345 667L64 800l-32 18Q1 842 0 864v96q0 26 19 45t45 19h704v-64H64v-65zm928-63h-96v-96q0-13-9.5-22.5T864 704q-9 0-16 4t-11.5 11.5T832 736v96h-96q-9 0-16 4t-11.5 11.5T704 864q0 13 9.5 22.5T736 896h96v96q0 13 9.5 22.5t22.5 9.5 22.5-9.5T896 992v-96h96q13 0 22.5-9.5t9.5-22.5-9.5-22.5T992 832z"
  }));
};

module.exports.UserFollowing = function UserFollowing(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M64 960v-65q0-25 26-37l281-133q33-15 37-50t-23-58q-46-36-72-107t-26-126V224q0-16 9.5-35t25-36.5T359 119t46.5-28 52-19.5T511 64q52 0 105.5 26t86 63 32.5 71v160q0 57-24 127t-70 106q-9 7-14.5 16.5t-8 20T617 675q2 17 12 30.5t25 20.5l162 77 38-54-173-81q60-48 89-130.5T799 384V224q0-52-42-104T647.5 34t-136-34T375 34t-110 86-42 104v160q0 66 30.5 150.5T344 667L63 800q-1 0-3 1.5t-9 5-13 7.5-13.5 10T12 836t-8.5 13T0 864v96q0 26 18.5 45t44.5 19h640l-52-64H64zm948-236q-4-4-9-5.5t-9.5-1.5-9.5 1-9 4-8 7L830 938l-85-85q-9-10-22-10t-23 10q-4 3-6 7.5t-3 9.5 0 10 3 9.5 6 8.5l113 113q10 9 23 9t23-9q4-4 6-10l153-233q8-10 6.5-23t-12.5-21z"
  }));
};

module.exports.UserUnfollow = function UserUnfollow(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1040 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M815 384V224q0-52-42-104.5t-109.5-86T527.5 0 391 33.5t-110 86T239 224v160q0 66 30.5 150T360 667L79 800q-2 1-6.5 3T57 812t-19.5 14T22 843.5 15 864v96q0 26 19 45t45 19h608v-64H79v-65q0-25 27-37l281-133q15-7 25-20.5t12-29.5q1-8 0-16.5t-4-16-8-14-11-11.5q-46-37-72-107.5T303 384V224q0-33 33-70.5T422.5 90 527 64q52 0 105.5 25.5t86 63T751 224v160q0 57-24 127t-70 106q-28 22-24 58 2 17 12 30.5t25 20.5l18 8 28-52-20-15q61-47 90-129.5T815 384zm126 495 90-91q9-9 9-22.5t-9-22.5-22.5-9-22.5 9l-91 91-90-91q-9-9-22.5-9t-23 9-9.5 22.5 10 22.5l90 91-90 90q-10 10-10 23t9.5 22.5 23 9.5 22.5-9l90-91 91 91q9 9 22.5 9t22.5-9.5 9-22.5-9-23z"
  }));
};

module.exports.User = function User(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M512 64q39 0 80.5 15.5t72.5 39 51 52 20 53.5v160q0 57-24 127t-71 106q-8 7-14 16.5t-8.5 20T617 675q5 36 37 51l279 132 2 .5 4 1.5 5 3 5.5 4.5 5 6.5 3.5 10 1 13v62l-895 1v-65q0-25 27-37l281-133q32-15 36.5-50.5T385 617q-46-37-71.5-107.5T288 384V224q0-33 33-70.5T407 90t105-26zm0-64q-69 0-136.5 33.5t-109.5 86T224 224v160q0 65 30.5 149.5T345 667L64 800q-3 1-7 3t-15 9-19.5 14T7 843.5 0 863v97q0 26 18.5 44.5T64 1023h896q26 0 44.5-18.5T1023 960v-97q0-10-6.5-20.5t-16-18T982 811t-16-9l-6-2-279-133q60-47 89.5-130T800 384V224q0-39-25.5-79.5T709 72t-93-52T512 0z"
  }));
};

module.exports.Vector = function Vector(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 896"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M992 608h-32v-2q0-48-10-94t-29-87.5-45.5-78.5-59.5-67.5-72-54.5h161q8 15 23 23.5t32 8.5q27 0 45.5-18.5T1024 192t-18.5-45.5T960 128q-36 0-55 32H608v-32q0-13-9.5-22.5T576 96H448q-13 0-22.5 9.5T416 128v32H119q-19-32-55-32-27 0-45.5 18.5T0 192t18.5 45.5T64 256q36 0 55-32h161q-99 60-157.5 161.5T64 606v2H32q-13 0-22.5 9.5T0 640v128q0 13 9.5 22.5T32 800h128q13 0 22.5-9.5T192 768V640q0-13-9.5-22.5T160 608h-32v-2q0-132 81.5-235.5T416 235v21q0 13 9.5 22.5T448 288h128q13 0 22.5-9.5T608 256v-21q61 16 114.5 51t91.5 83.5 60 110T896 606v2h-32q-13 0-22.5 9.5T832 640v128q0 13 9.5 22.5T864 800h128q13 0 22.5-9.5t9.5-22.5V640q0-9-4.5-16t-11.5-11.5-16-4.5zM128 736H64v-64h64v64zm416-512h-64v-64h64v64zm416 512h-64v-64h64v64z"
  }));
};

module.exports.Volume1 = function Volume1(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 864 928"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M575 18q-17-9-33 2L221 272H114q-41 0-70 25t-29 61l2 211q0 36 29 61.5t70 25.5h106l320 252q4 3 8.5 4.5t9.5 1.5q8 0 15-4 17-9 17-28V46q-1-19-17-28zm-47 804L250 597l-4-2-4.5-2-4.5-1H116q-15 0-25-7t-10-16l-2-211q0-8 10-15t25-7h117q9 0 17-6l280-224v716zm182-522q-13-3-24 5t-13 21 5.5 24 20.5 13q38 6 62 36t24 71q0 25-11 47.5t-31 38-45 20.5q-8 2-14.5 7.5T674 597t-1 17q2 11 11 18.5t20 7.5q4 0 7-1 60-12 99-60t39-109q0-84-63-136-34-27-76-34z"
  }));
};

module.exports.Volume2 = function Volume2(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 928"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M574 18q-16-9-32 2L220 272H114q-41 0-70 25t-29 61l2 211q0 36 29 61.5t70 25.5h106l320 252q8 6 17 6 3 0 5.5-.5t5-1.5 4.5-2q8-4 12.5-11.5T591 882V46q-1-19-17-28zm-47 804L250 597q-8-5-18-5H116q-10 0-18.5-3.5T85 580t-4-11l-2-211q0-4 2.5-8t7-7 11-5 14.5-2h116q10 0 18-6l279-224v716zm321-352q0-42-17.5-78.5t-49.5-61-71-30.5q-14-3-24.5 5T673 326t5.5 24 20.5 13q38 6 61.5 36t23.5 71q0 38-24 68.5T698 576q-6 1-11.5 5t-9 9-4.5 11 0 13q2 11 11 18.5t20 7.5q3 0 6-1 60-12 99-60t39-109zm-42-294q-12-5-24.5.5t-17 18 1 24.5 18.5 17q35 13 65.5 37t51.5 54.5 32.5 67T945 470q0 77-44.5 141.5T784 704q-13 4-18.5 16t-.5 25q4 9 12 14.5t18 5.5q3 0 5.5-.5t5.5-1.5q91-34 147-115t56-178.5T953 291 806 176z"
  }));
};

module.exports.VolumeOff = function VolumeOff(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 992 928"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M559.5 18Q543 9 527 20L206 272H99q-41 0-70 25T0 358l2 211q0 36 29 61.5t70 25.5h106l320 252q4 3 8.5 4.5t8.5 1.5q8 0 15-4 17-9 17-28V46q0-19-16.5-28zM512 822 235 597q-8-5-18-5H101q-15 0-25-7t-10-16l-2-211q0-8 10-15t25-7h116q10 0 18-6l279-224v716zm366-357 105-106q9-10 9-23t-9.5-22.5T960 304t-23 9L833 419 729 313q-10-9-23-9t-22.5 9.5T674 336t9 23l105 106-104 104-4 6-3 6.5-1.5 7v7l1.5 7 3 6.5 4 6q10 9 23 9t23-9l103-105 103 105q10 9 23 9t22.5-9.5T991 592t-9-23z"
  }));
};

module.exports.Wallet = function Wallet(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 928"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1024 242q0-11-2.5-22.5t-9.5-27-24-28.5-42-20L223 0q-26 0-48 13t-35 35-13 48v128H95q-39 1-67 29T0 320v512q0 40 28 68t68 28h832q40 0 68-28t28-68V242zM191 96q0-13 8.5-22T221 64l706 143-2.5 4.5-10 9L896 224H191V96zm769 736q0 13-9.5 22.5T928 864H96q-13 0-22.5-9.5T64 832V320q0-13 9.5-22.5T96 288h800q26 0 45-8.5t19-23.5v576zM191.5 512q-26.5 0-45 19T128 576.5t18.5 45 45 18.5 45.5-18.5 19-45-19-45.5-45.5-19z"
  }));
};

module.exports.Wrench = function Wrench(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 1024 1024"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M1006 216q-8-4-16.5-2.5T974 221L813 366 667 216 811 50q13-15 5-33-4-8-11.5-12.5T788 0h-8q-41 0-78 2.5T618 12t-86.5 23.5T468 77l-14 14q-35 36-53 87t-16 103.5 22 99.5L37 758Q0 796 0 849.5T37 941l45 46q38 37 90.5 37t90.5-37l374-378q14 7 29.5 13t31.5 10 32.5 6.5T762 641q101 0 175-75l13-14q22-21 37-55.5t22-63.5 10.5-73 4-62.5.5-53.5q-1-19-18-28zM906 509l-12 14q-18 18-39.5 30T810 571t-48 6q-19 0-41-4t-38-10q-30-13-55-36L218 941q-19 19-45.5 19T127 941l-45-46q-12-12-16.5-28.5t0-33.5T82 804l401-409q-19-28-28-63-7-33-6.5-68t13-70.5T497 134l14-14q27-28 86.5-41T720 62L603 197q-8 9-7.5 21.5T604 239l185 190q9 9 21 9.5t21-7.5l131-118q-10 148-56 196z"
  }));
};