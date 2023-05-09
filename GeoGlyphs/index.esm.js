function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
export function TurfAlong(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M10.658 91.166a2 2 0 0 1-1.414-3.414l7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071c-.39.391-.903.586-1.414.586z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M53.084 48.74a2 2 0 0 1-1.414-3.414l7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071c-.391.39-.902.586-1.414.586z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M67.227 34.598a2 2 0 0 1-1.414-3.414l7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071c-.391.39-.903.586-1.414.586z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M81.368 20.456a2 2 0 0 1-1.414-3.414l7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071c-.39.39-.902.586-1.414.586z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m27.655 69.34-4.27 4.269a2 2 0 1 0 2.828 2.828l4.27-4.269a9.152 9.152 0 0 1-2.828-2.828z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M47.427 52.396a2 2 0 0 0-2.828 0l-4.421 4.421a9.14 9.14 0 0 1 2.828 2.828l4.421-4.421a2 2 0 0 0 0-2.828z"
  }), React.createElement("circle", {
    cx: "35.331",
    cy: "64.493",
    r: "6.845",
    fill: "currentColor"
  }));
}
;
export function TurfBboxPolygon(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M85.445 87.445h-70.89a2 2 0 0 1-2-2v-70.89a2 2 0 0 1 2-2h70.891a2 2 0 0 1 2 2v70.891a2 2 0 0 1-2.001 1.999zm-68.89-4h66.891v-66.89H16.555v66.89z"
  }));
}
;
export function TurfBezier(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("circle", {
    cx: "40.274",
    cy: "39.666",
    r: "4.763",
    fill: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m12.729 63.898-5.714 5.6a1.999 1.999 0 0 0 1.4 3.429c.505 0 1.011-.19 1.4-.571l5.714-5.6a2 2 0 0 0-2.8-2.858z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m24.156 52.699-5.714 5.6a1.999 1.999 0 0 0 1.4 3.429c.505 0 1.011-.19 1.4-.571l5.714-5.6a2 2 0 0 0-2.8-2.858z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m47.017 35.834.145-.08 2.648-2.595a1.999 1.999 0 1 0-2.8-2.856l-2.762 2.707a7.808 7.808 0 0 1 2.769 2.824z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M54.124 28.131c.505 0 1.011-.19 1.399-.571l5.714-5.599a2 2 0 0 0-2.799-2.858l-5.714 5.599a2 2 0 0 0 1.4 3.429z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M65.552 16.932c.505 0 1.011-.19 1.399-.572l5.714-5.6a2 2 0 1 0-2.799-2.856l-5.714 5.6a2 2 0 0 0 1.4 3.428z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M92.917 42.969C80.419 30.471 61.223 27.94 47.162 35.754l-.121.119a7.708 7.708 0 0 1 .997 3.793c0 .072-.009.142-.011.214 12.618-7.75 30.503-5.642 42.062 5.916a2 2 0 0 0 2.828-2.827z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m47.041 35.873.121-.119-.145.08.024.039z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M42.688 90.66c-6.166-6.166-9.561-14.437-9.561-23.29 0-7.347 2.346-14.29 6.666-19.965a7.695 7.695 0 0 1-3.445-1.053 7.544 7.544 0 0 1-.505-.32 7.813 7.813 0 0 1-2.307-2.525L29.87 47.1a2 2 0 0 0 2.8 2.858l1.672-1.638c-3.398 5.669-5.214 12.206-5.214 19.051 0 9.922 3.812 19.197 10.733 26.118.39.391.902.586 1.414.586s1.024-.195 1.414-.586a2 2 0 0 0-.001-2.829z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M42.097 39.228c.196.062.397.102.6.102.505 0 1.011-.19 1.4-.572l.659-.646a4.666 4.666 0 0 0-.296-.674 33.17 33.17 0 0 0-2.363 1.79z"
  }));
}
;
export function TurfBuffer(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M26.422 99h-.063c-2.205 0-4.384-.496-6.475-1.25-.806-.291-1.595-.693-2.345-1.085-1.224-.639-1.699-2.177-1.061-3.401.638-1.224 2.149-1.713 3.373-1.075.553.288 1.135.537 1.732.752a14.02 14.02 0 0 0 4.777.837c1.381 0 2.532 1.23 2.532 2.611S27.803 99 26.422 99zm7.659-2.138a2.5 2.5 0 0 1-1.167-4.713 14.093 14.093 0 0 0 5.014-4.441 2.5 2.5 0 1 1 4.116 2.84 19.092 19.092 0 0 1-6.799 6.025 2.494 2.494 0 0 1-1.164.289zm-21.307-5.185a2.495 2.495 0 0 1-2.055-1.073 19.188 19.188 0 0 1-3.266-8.471 2.501 2.501 0 0 1 4.959-.639 14.19 14.19 0 0 0 2.413 6.256 2.499 2.499 0 0 1-2.051 3.927zm30.415-7.315a2.5 2.5 0 0 1-2.351-3.35l2.708-7.495a2.5 2.5 0 1 1 4.702 1.699l-2.708 7.495a2.5 2.5 0 0 1-2.351 1.651zm-32.361-7.888a2.5 2.5 0 0 1-2.351-3.35l2.708-7.495a2.5 2.5 0 1 1 4.702 1.699l-2.708 7.495a2.502 2.502 0 0 1-2.351 1.651zm37.777-7.102a2.5 2.5 0 0 1-2.351-3.35l2.708-7.495a2.5 2.5 0 0 1 4.703 1.699l-2.709 7.495a2.502 2.502 0 0 1-2.351 1.651zm-32.361-7.889a2.5 2.5 0 0 1-2.351-3.35l2.708-7.495a2.5 2.5 0 1 1 4.702 1.7l-2.708 7.495a2.5 2.5 0 0 1-2.351 1.65zm38.455-6.529a2.5 2.5 0 0 1-1.223-4.682l6.955-3.89a2.5 2.5 0 1 1 2.441 4.364l-6.955 3.89a2.487 2.487 0 0 1-1.218.318zm13.91-7.78a2.5 2.5 0 0 1-1.223-4.682l6.955-3.891a2.5 2.5 0 0 1 2.441 4.363l-6.955 3.891a2.478 2.478 0 0 1-1.218.319zm-46.948-.681a2.5 2.5 0 0 1-2.351-3.35l2.708-7.495a2.5 2.5 0 1 1 4.702 1.7l-2.708 7.495a2.501 2.501 0 0 1-2.351 1.65zm60.86-7.099a2.5 2.5 0 0 1-1.223-4.682l3.437-1.922a14.161 14.161 0 0 0 2.759-2.014 2.5 2.5 0 0 1 3.418 3.649 19.083 19.083 0 0 1-3.736 2.729l-3.436 1.922a2.505 2.505 0 0 1-1.219.318zm-53.979-7.097a2.501 2.501 0 0 1-1.748-4.288 19.018 19.018 0 0 1 4.021-3.005l3.138-1.755a2.5 2.5 0 1 1 2.441 4.363l-3.138 1.755a14.033 14.033 0 0 0-2.965 2.217 2.494 2.494 0 0 1-1.749.713zm64.961-3.812a2.5 2.5 0 0 1-2.36-3.324 14.123 14.123 0 0 0 .645-6.671 2.5 2.5 0 0 1 2.113-2.834 2.505 2.505 0 0 1 2.834 2.114 19.092 19.092 0 0 1-.872 9.04 2.501 2.501 0 0 1-2.36 1.675zm-51.372-4.444a2.501 2.501 0 0 1-1.223-4.682l6.955-3.89a2.501 2.501 0 0 1 2.441 4.364l-6.955 3.89a2.498 2.498 0 0 1-1.218.318zm13.91-7.781a2.5 2.5 0 0 1-1.223-4.682l6.955-3.89a2.5 2.5 0 0 1 2.441 4.364l-6.955 3.89a2.487 2.487 0 0 1-1.218.318zm35.252-2.944c-.775 0-1.54-.36-2.029-1.037a14.034 14.034 0 0 0-5.104-4.333 2.5 2.5 0 0 1 2.233-4.475 19.081 19.081 0 0 1 6.926 5.882 2.5 2.5 0 0 1-2.026 3.963zM69.952 8.48a2.502 2.502 0 0 1-1.199-4.696 19.101 19.101 0 0 1 8.784-2.324 2.479 2.479 0 0 1 2.542 2.458 2.501 2.501 0 0 1-2.458 2.542c-2.28.039-4.458.615-6.474 1.714-.38.208-.791.306-1.195.306z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M26.359 82.213a2.5 2.5 0 0 1-2.351-3.35l14.075-38.952 38.569-21.573a2.5 2.5 0 0 1 2.441 4.364L42.152 43.364 28.71 80.562a2.5 2.5 0 0 1-2.351 1.651z"
  }));
}
;
export function TurfCenter(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("circle", {
    cx: "52.178",
    cy: "51.646",
    r: "7.796",
    fill: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M56.257 97.633c-.091 0-.183-.006-.274-.019a32.543 32.543 0 0 1-9.804-2.968 1.998 1.998 0 0 1-.926-2.672 1.999 1.999 0 0 1 2.672-.926 28.592 28.592 0 0 0 8.601 2.603 1.999 1.999 0 0 1 1.71 2.253 2.002 2.002 0 0 1-1.979 1.729z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M65.863 97.443a2 2 0 0 1-.348-3.968 28.528 28.528 0 0 0 8.49-2.943 2 2 0 0 1 1.889 3.525 32.467 32.467 0 0 1-9.68 3.355 1.9 1.9 0 0 1-.351.031z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M39.165 89.348c-.498 0-.997-.186-1.385-.558a32.764 32.764 0 0 1-6.19-8.156 2 2 0 1 1 3.525-1.891 28.81 28.81 0 0 0 5.436 7.162 2 2 0 0 1-1.386 3.443z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M82.615 88.486a2 2 0 0 1-1.442-3.387 28.726 28.726 0 0 0 5.148-7.369 2.002 2.002 0 0 1 2.674-.924 2.002 2.002 0 0 1 .924 2.674 32.804 32.804 0 0 1-5.863 8.393 1.992 1.992 0 0 1-1.441.613z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M30.193 72.605a2 2 0 0 1-1.966-1.648 33.035 33.035 0 0 1-.213-10.234 2.003 2.003 0 0 1 2.251-1.712 1.998 1.998 0 0 1 1.712 2.251 28.998 28.998 0 0 0 .187 8.992 2 2 0 0 1-1.971 2.351z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M90.917 71.407a2 2 0 0 1-1.984-2.273 29.08 29.08 0 0 0-.168-8.994 2 2 0 1 1 3.939-.693 33.11 33.11 0 0 1 .192 10.233 2 2 0 0 1-1.979 1.727z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M32.771 53.788a2 2 0 0 1-1.799-2.871 32.728 32.728 0 0 1 5.849-8.404 2 2 0 1 1 2.887 2.769 28.767 28.767 0 0 0-5.135 7.378 2.001 2.001 0 0 1-1.802 1.128z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M87.595 52.706a1.999 1.999 0 0 1-1.766-1.059 28.784 28.784 0 0 0-5.424-7.171 2 2 0 1 1 2.775-2.88 32.76 32.76 0 0 1 6.176 8.167 2 2 0 0 1-1.761 2.943z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M45.92 40.077a2 2 0 0 1-.949-3.762 32.502 32.502 0 0 1 9.674-3.372 2.001 2.001 0 0 1 .705 3.938 28.512 28.512 0 0 0-8.484 2.958 2.008 2.008 0 0 1-.946.238z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m73.042 39.323-.118-.058a28.518 28.518 0 0 0-8.581-2.577 2.001 2.001 0 0 1-1.715-2.25 2.006 2.006 0 0 1 2.25-1.714 32.523 32.523 0 0 1 9.811 2.951l-.774 1.848-.873 1.8z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M34.043 10.779a2 2 0 0 1-1.309-3.513l3.783-3.27a2.002 2.002 0 0 1 1.946-.382l4.739 1.594a2 2 0 1 1-1.275 3.791l-3.657-1.23-2.919 2.523a1.996 1.996 0 0 1-1.308.487z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M20.148 22.79a2 2 0 0 1-1.309-3.513l6.947-6.006a2 2 0 1 1 2.616 3.026l-6.947 6.006a1.992 1.992 0 0 1-1.307.487z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M10.003 37.031c-1 0-1.863-.748-1.983-1.765l-.589-4.965a2 2 0 0 1 .678-1.749l3.782-3.27a2 2 0 1 1 2.616 3.026l-2.979 2.575.464 3.911a2.001 2.001 0 0 1-1.989 2.237z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12.352 56.816c-1 0-1.863-.747-1.983-1.765L9.194 45.16a2 2 0 1 1 3.972-.472l1.174 9.893a2 2 0 0 1-1.988 2.235z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.098 72.146c-.063 0-.126-.003-.191-.009l-4.978-.471a1.999 1.999 0 0 1-1.797-1.756l-.589-4.965a2 2 0 0 1 1.75-2.222c1.093-.117 2.091.653 2.221 1.751l.399 3.361 3.371.318a2 2 0 0 1-.186 3.993z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M52.177 75.275c-.062 0-.126-.003-.19-.009l-8.27-.782a2 2 0 1 1 .377-3.983l8.27.782a2.001 2.001 0 0 1-.187 3.992z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M35.638 73.711a2.05 2.05 0 0 1-.191-.009l-8.27-.782a2 2 0 1 1 .377-3.983l8.27.782a2 2 0 0 1-.186 3.992z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M65.425 76.529c-.063 0-.127-.003-.19-.009l-4.979-.471a2.001 2.001 0 0 1-1.803-2.18 1.987 1.987 0 0 1 2.18-1.803l3.228.306.717-3.161a1.999 1.999 0 1 1 3.901.883l-1.104 4.876a2.002 2.002 0 0 1-1.95 1.559z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M68.603 62.503a2 2 0 0 1-1.952-2.443l2.073-9.15a2 2 0 1 1 3.901.884l-2.073 9.15a2.002 2.002 0 0 1-1.949 1.559z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M72.749 44.203a2 2 0 0 1-1.952-2.443l2.073-9.15a2 2 0 1 1 3.901.884l-2.073 9.15a2.002 2.002 0 0 1-1.949 1.559z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M76.896 25.902a2 2 0 0 1-1.952-2.443l.706-3.114-3.027-1.019a2 2 0 1 1 1.275-3.791l4.739 1.594a1.998 1.998 0 0 1 1.312 2.338l-1.105 4.876a2 2 0 0 1-1.948 1.559z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M63.027 15.989c-.211 0-.426-.034-.638-.105l-10.232-3.442a2 2 0 1 1 1.275-3.791l10.232 3.442a2 2 0 0 1-.637 3.896z"
  }));
}
;
export function TurfCentroid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("circle", {
    cx: "50.178",
    cy: "49.646",
    r: "7.796",
    fill: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M85.342 21.482a2 2 0 0 1-2-2v-3h-3a2 2 0 0 1 0-4h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M71.724 16.482h-8.618a2 2 0 0 1 0-4h8.618a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M54.487 16.482H45.87a2 2 0 0 1 0-4h8.618a2 2 0 0 1-.001 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M37.252 16.482h-8.618a2 2 0 0 1 0-4h8.618a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M15.016 21.482a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h5a2 2 0 0 1 0 4h-3v3a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M15.016 73.19a2 2 0 0 1-2-2v-8.618a2 2 0 0 1 4 0v8.618a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M15.016 55.954a2 2 0 0 1-2-2v-8.618a2 2 0 0 1 4 0v8.618a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M15.016 38.719a2 2 0 0 1-2-2v-8.618a2 2 0 0 1 4 0v8.618a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M20.016 86.809h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 4 0v3h3a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M71.723 86.809h-8.617a2 2 0 0 1 0-4h8.617a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M54.487 86.809h-8.618a2 2 0 0 1 0-4h8.618a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M37.251 86.809h-8.618a2 2 0 0 1 0-4h8.618a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M85.342 86.809h-5a2 2 0 0 1 0-4h3v-3a2 2 0 0 1 4 0v5a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M85.342 73.19a2 2 0 0 1-2-2v-8.618a2 2 0 0 1 4 0v8.618a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M85.342 55.954a2 2 0 0 1-2-2v-8.618a2 2 0 0 1 4 0v8.618a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M85.342 38.719a2 2 0 0 1-2-2v-8.618a2 2 0 0 1 4 0v8.618a2 2 0 0 1-2 2z"
  }));
}
;
export function TurfConcave(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("circle", {
    cx: "13.162",
    cy: "54.683",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "51.116",
    cy: "15.612",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "87.954",
    cy: "83.706",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "50",
    cy: "50.218",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M73.939 80.269a1.99 1.99 0 0 1-.724-.137l-9.353-3.629a2 2 0 0 1 1.447-3.729l9.353 3.629a2 2 0 0 1-.723 3.866z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M55.234 73.01a1.99 1.99 0 0 1-.724-.137l-9.353-3.629a2 2 0 1 1 1.447-3.729l9.353 3.629a2 2 0 0 1-.723 3.866z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M36.528 65.751a1.98 1.98 0 0 1-.723-.137l-9.353-3.629a2 2 0 1 1 1.447-3.729l9.353 3.629a2.001 2.001 0 0 1-.724 3.866z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M22.843 46.717a2 2 0 0 1-1.435-3.393l6.197-6.379a2 2 0 0 1 2.869 2.787l-6.197 6.379a1.992 1.992 0 0 1-1.434.606z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M35.238 33.958a2 2 0 0 1-1.435-3.393L40 24.185a2 2 0 0 1 2.869 2.787l-6.197 6.379a1.992 1.992 0 0 1-1.434.607z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m50.427 39.017-.065-.001a2 2 0 0 1-1.935-2.063l.265-8.204a1.983 1.983 0 0 1 2.063-1.935 2 2 0 0 1 1.935 2.063l-.265 8.204a2 2 0 0 1-1.998 1.936z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M78.113 77.023c-.47 0-.941-.165-1.322-.5l-6.092-5.374a2.001 2.001 0 0 1 2.646-3l6.092 5.374a2.001 2.001 0 0 1-1.324 3.5z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M65.931 66.274c-.47 0-.942-.165-1.322-.5L58.518 60.4a2.001 2.001 0 0 1 2.646-3l6.091 5.374a2.001 2.001 0 0 1-1.324 3.5z"
  }));
}
;
export function TurfConvex(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("circle", {
    cx: "13.162",
    cy: "54.683",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "51.116",
    cy: "15.612",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "87.954",
    cy: "83.706",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "50",
    cy: "50.218",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M73.939 80.269a1.99 1.99 0 0 1-.724-.137l-9.353-3.629a2 2 0 0 1 1.447-3.729l9.353 3.629a2 2 0 0 1-.723 3.866z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M55.234 73.01a1.99 1.99 0 0 1-.724-.137l-9.353-3.629a2 2 0 1 1 1.447-3.729l9.353 3.629a2 2 0 0 1-.723 3.866z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M36.528 65.751a1.98 1.98 0 0 1-.723-.137l-9.353-3.629a2 2 0 1 1 1.447-3.729l9.353 3.629a2.001 2.001 0 0 1-.724 3.866z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M22.843 46.717a2 2 0 0 1-1.435-3.393l6.197-6.379a2 2 0 0 1 2.869 2.787l-6.197 6.379a1.992 1.992 0 0 1-1.434.606z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M35.238 33.958a2 2 0 0 1-1.435-3.393L40 24.185a2 2 0 0 1 2.869 2.787l-6.197 6.379a1.992 1.992 0 0 1-1.434.607z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M80.994 72.837a1.999 1.999 0 0 1-1.761-1.048l-4.583-8.471a2 2 0 0 1 3.518-1.904l4.583 8.471a2 2 0 0 1-1.757 2.952z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M71.828 55.895a1.998 1.998 0 0 1-1.761-1.049l-4.582-8.471a2 2 0 0 1 3.518-1.903l4.582 8.472a2 2 0 0 1-1.757 2.951z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M62.663 38.953a2 2 0 0 1-1.761-1.049l-4.583-8.471a2.001 2.001 0 0 1 3.518-1.903L64.42 36a2.001 2.001 0 0 1-1.757 2.953z"
  }));
}
;
export function TurfDestination(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M26.483 83.137c-5.401 0-9.796-4.395-9.796-9.796s4.395-9.796 9.796-9.796 9.795 4.395 9.795 9.796-4.393 9.796-9.795 9.796zm0-15.592c-3.196 0-5.796 2.6-5.796 5.796s2.6 5.796 5.796 5.796 5.795-2.6 5.795-5.796-2.599-5.796-5.795-5.796z"
  }), React.createElement("circle", {
    cx: "73.178",
    cy: "26.646",
    r: "7.796",
    fill: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m64.243 35.212-8.669 2.322L58.04 40 35.147 62.894l1.414 1.414 22.893-22.894 2.467 2.467z"
  }));
}
;
export function TurfEnvelope(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("circle", {
    cx: "13.162",
    cy: "54.683",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "51.116",
    cy: "15.612",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "87.954",
    cy: "83.706",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M36.674 82h-9.256a2 2 0 0 0 0 4h9.256a2 2 0 0 0 0-4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M55.187 82H45.93a2 2 0 0 0 0 4h9.256a2 2 0 0 0 .001-4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M73.698 82h-9.256a2 2 0 0 0 0 4h9.256a2 2 0 0 0 0-4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M18.162 82H15v-3.294a2 2 0 0 0-4 0v5C11 84.811 12.058 86 13.162 86h5a2 2 0 0 0 0-4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M11 64.301v2.786a2 2 0 0 0 4 0v-2.786c0 .134-1.315.206-2 .206s-1-.072-2-.206z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M14.708 45.005c.233-.327.292-.724.292-1.156V32.23a2 2 0 0 0-4 0v11.619c0 .432.221.829.454 1.156.531-.089 1.072-.146 1.627-.146s1.097.057 1.627.146z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M13 22.612a2 2 0 0 0 2-2V18h3.162a2 2 0 0 0 0-4h-5C12.058 14 11 14.507 11 15.612v5a2 2 0 0 0 2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M27.418 18h9.256a2 2 0 0 0 0-4h-9.256a2 2 0 0 0 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M73.698 14h-9.256a2 2 0 0 0 0 4h9.256a2 2 0 0 0 0-4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M82.954 18H86v2.612a2 2 0 0 0 4 0v-5C90 14.507 89.059 14 87.954 14h-5a2 2 0 0 0 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M90 32.231a2 2 0 0 0-4 0V43.85a2 2 0 0 0 4 0V32.231z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M88 53.469a2 2 0 0 0-2 2v11.618a2 2 0 0 0 4 0V55.469a2 2 0 0 0-2-2z"
  }));
}
;
export function TurfErased(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m76.107 36.425 3.842-16.958c.228-1-.34-2.01-1.312-2.337L38.462 3.613a2.002 2.002 0 0 0-1.946.382L8.109 28.552a2.002 2.002 0 0 0-.678 1.749l4.7 39.609a2 2 0 0 0 1.797 1.756l14.747 1.395C32.259 87.55 45.39 97.917 60.458 97.917c18.056 0 32.744-14.689 32.744-32.744 0-11.947-6.665-23.05-17.095-28.748zM60.458 93.917c-12.749 0-23.916-8.453-27.524-20.452l.671.064a2 2 0 1 0 .377-3.983l-1.961-.185c-.009-.06-.014-.12-.022-.179a29.438 29.438 0 0 1-.285-4.008c0-15.85 12.895-28.745 28.745-28.745 3.266 0 6.436.535 9.46 1.592l.011.005a28.99 28.99 0 0 1 1.578.604l-.412 1.818a2 2 0 0 0 1.952 2.443 2 2 0 0 0 1.948-1.559l.189-.832c8.586 5.149 14.018 14.568 14.018 24.673-.001 15.849-12.895 28.744-28.745 28.744z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M56.312 75.667c-.062 0-.126-.003-.19-.009l-5.629-.532a2 2 0 0 1-1.803-2.18 1.992 1.992 0 0 1 2.18-1.803l5.629.532a2.001 2.001 0 0 1-.187 3.992zm-11.258-1.065c-.063 0-.126-.003-.191-.009l-5.629-.532a2 2 0 0 1-1.803-2.18 1.994 1.994 0 0 1 2.18-1.803l5.629.532a2 2 0 0 1-.186 3.992z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M65.425 76.529a2.03 2.03 0 0 1-.19-.009l-3.484-.329a2.001 2.001 0 0 1-1.803-2.18 1.99 1.99 0 0 1 2.18-1.803l1.733.164.386-1.699a2 2 0 1 1 3.901.885l-.773 3.413a2.002 2.002 0 0 1-1.95 1.558z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M67.567 67.071a2 2 0 0 1-1.952-2.443l1.37-6.045a2 2 0 1 1 3.901.885l-1.37 6.045a2.001 2.001 0 0 1-1.949 1.558zm2.741-12.091a2 2 0 0 1-1.952-2.443l1.37-6.044a2 2 0 1 1 3.901.884l-1.37 6.045a2.001 2.001 0 0 1-1.949 1.558z"
  }));
}
;
export function TurfExplode(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("circle", {
    cx: "55.795",
    cy: "12.538",
    r: "7.423",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "90.497",
    cy: "47.24",
    r: "7.423",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "70.977",
    cy: "88.448",
    r: "7.423",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "11.334",
    cy: "68.928",
    r: "7.423",
    fill: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M56.171 82.671a2.165 2.165 0 0 0-2.715 1.425 2.167 2.167 0 0 0 1.425 2.715l4.35 1.354c.036-1.506.347-2.946.901-4.262l-3.961-1.232z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m12.762 57.264-.258-3.091c-1.059.314-2.178.49-3.338.49-.33 0-.655-.023-.978-.05l.245 2.932c.93-.237 1.899-.377 2.902-.377.483 0 .958.039 1.427.096z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M80.362 74.212a2.17 2.17 0 0 0-3.963-1.765l-2.104 4.725c1.419.418 2.723 1.1 3.865 1.985l2.202-4.945z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m24.901 72.937-2.286-.712a11.728 11.728 0 0 1-2.012 3.916l3.009.937a2.17 2.17 0 0 0 1.289-4.141z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M41.091 22.574a2.168 2.168 0 0 0-2.972-.758l-9.387 5.574a2.17 2.17 0 0 0 2.214 3.73l9.387-5.574a2.17 2.17 0 0 0 .758-2.972z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m45.748 79.426-10.423-3.245a2.169 2.169 0 0 0-1.289 4.14l10.423 3.245a2.17 2.17 0 0 0 1.289-4.14z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m65.524 21.534 6.832 7.303a2.166 2.166 0 0 0 3.066.102 2.17 2.17 0 0 0 .103-3.065l-7.227-7.725a11.852 11.852 0 0 1-2.774 3.385z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M80.842 62.475a2.17 2.17 0 1 0 3.962 1.764l2.531-5.683a11.703 11.703 0 0 1-3.89-1.927l-2.603 5.846z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m85.546 36.587-2.565-2.741a2.168 2.168 0 1 0-3.167 2.963l2.179 2.329a11.838 11.838 0 0 1 3.553-2.551z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m19.734 37.778 1.826-1.084a2.17 2.17 0 0 0-2.214-3.73l-2.212 1.314a11.798 11.798 0 0 1 2.6 3.5z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m88.877 43.321-.906.822-.688.648z"
  }), React.createElement("circle", {
    cx: "9.165",
    cy: "42.902",
    r: "7.423",
    fill: "currentColor"
  }));
}
;
export function TurfExtent(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("circle", {
    cx: "13.162",
    cy: "54.683",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "51.116",
    cy: "15.612",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "87.954",
    cy: "83.706",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "50",
    cy: "50.218",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M36.674 82h-9.256a2 2 0 0 0 0 4h9.256a2 2 0 0 0 0-4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M55.187 82H45.93a2 2 0 0 0 0 4h9.256a2 2 0 0 0 .001-4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M73.698 82h-9.256a2 2 0 0 0 0 4h9.256a2 2 0 0 0 0-4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M18.162 82H15v-3.294a2 2 0 0 0-4 0v5C11 84.811 12.058 86 13.162 86h5a2 2 0 0 0 0-4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M11 64.301v2.786a2 2 0 0 0 4 0v-2.786c0 .134-1.315.206-2 .206s-1-.072-2-.206z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M14.708 45.005c.233-.327.292-.724.292-1.156V32.23a2 2 0 0 0-4 0v11.619c0 .432.221.829.454 1.156.531-.089 1.072-.146 1.627-.146s1.097.057 1.627.146z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M13 22.612a2 2 0 0 0 2-2V18h3.162a2 2 0 0 0 0-4h-5C12.058 14 11 14.507 11 15.612v5a2 2 0 0 0 2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M27.418 18h9.256a2 2 0 0 0 0-4h-9.256a2 2 0 0 0 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M73.698 14h-9.256a2 2 0 0 0 0 4h9.256a2 2 0 0 0 0-4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M82.954 18H86v2.612a2 2 0 0 0 4 0v-5C90 14.507 89.059 14 87.954 14h-5a2 2 0 0 0 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M90 32.231a2 2 0 0 0-4 0V43.85a2 2 0 0 0 4 0V32.231z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M88 53.469a2 2 0 0 0-2 2v11.618a2 2 0 0 0 4 0V55.469a2 2 0 0 0-2-2z"
  }));
}
;
export function TurfIntersect(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m76.107 36.425 3.842-16.958c.228-1-.34-2.01-1.312-2.337L38.462 3.613a2.002 2.002 0 0 0-1.946.382L8.109 28.552a2.002 2.002 0 0 0-.678 1.749l4.7 39.609a2 2 0 0 0 1.797 1.756l14.747 1.395C32.259 87.55 45.39 97.917 60.458 97.917c18.056 0 32.744-14.689 32.744-32.744 0-11.947-6.665-23.05-17.095-28.748zM15.913 67.836l-4.385-36.952L38.269 7.769l37.38 12.577-3.247 14.33c-.246-.097-.496-.182-.743-.272-.171-.062-.34-.128-.512-.187a31.597 31.597 0 0 0-1.539-.492l-.075-.023a32.227 32.227 0 0 0-1.644-.425c-.167-.039-.335-.071-.502-.107a32.9 32.9 0 0 0-1.166-.231 33.562 33.562 0 0 0-1.709-.254c-.206-.025-.411-.05-.618-.072a35.2 35.2 0 0 0-1.173-.098c-.181-.012-.361-.028-.542-.037a33.896 33.896 0 0 0-1.721-.047c-18.056 0-32.745 14.689-32.745 32.745 0 .591.02 1.182.052 1.774.01.188.028.375.042.562.029.406.062.811.106 1.216.009.083.012.166.022.249l-12.022-1.141zm44.545 26.081c-12.75 0-23.921-8.453-27.528-20.453l32.304 3.056c.063.006.127.009.19.009.034 0 .067-.007.102-.009a2.08 2.08 0 0 0 .369-.055l.096-.025c.088-.026.172-.059.255-.096l.059-.026c.09-.045.176-.096.258-.154l.036-.024c.083-.061.161-.129.234-.202l.03-.029c.07-.073.132-.151.191-.234.011-.015.023-.028.033-.043.053-.081.099-.167.14-.256.01-.021.022-.039.031-.06.047-.11.086-.224.113-.345l7.814-34.486C83.774 45.634 89.2 55.065 89.2 65.172c.002 15.85-12.892 28.745-28.742 28.745z"
  }));
}
;
export function TurfKinks(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12.711 16.536a1.992 1.992 0 0 1-1.45-.622l-3.36-3.536A2 2 0 0 1 9.351 9H14a2 2 0 0 1 .011 4l.15.158a2 2 0 0 1-1.45 3.378z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M39.749 43.398a1.99 1.99 0 0 1-1.414-.586l-6.715-6.716a2 2 0 1 1 2.828-2.828l6.715 6.716a2 2 0 0 1-1.414 3.414z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M26.317 29.967a1.99 1.99 0 0 1-1.414-.586l-6.715-6.716a2 2 0 1 1 2.828-2.828l6.715 6.716a2 2 0 0 1-1.414 3.414z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M60.251 43.398a2 2 0 0 1-1.414-3.414l6.716-6.715a2 2 0 1 1 2.828 2.828l-6.716 6.715a1.992 1.992 0 0 1-1.414.586z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M73.683 29.967a2 2 0 0 1-1.414-3.414l6.716-6.715a2 2 0 1 1 2.828 2.828l-6.716 6.715c-.391.39-.903.586-1.414.586z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M87.289 16.536a2 2 0 0 1-1.449-3.378l.149-.158A2 2 0 0 1 86 9h4.649a1.998 1.998 0 0 1 1.449 3.378l-3.36 3.536a1.994 1.994 0 0 1-1.449.622z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M75 13H65a2 2 0 0 1 0-4h10a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M55 13H45a2 2 0 0 1 0-4h10a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M35 13H25a2 2 0 0 1 0-4h10a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M14 94H9.351a2 2 0 0 1-1.447-3.381l3.366-3.529a2.001 2.001 0 0 1 2.895 2.762l-.143.148A2 2 0 0 1 14 94z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.606 83.782a2.002 2.002 0 0 1-1.412-3.417l6.713-6.688a2.004 2.004 0 0 1 2.829.005 2.002 2.002 0 0 1-.005 2.829l-6.713 6.688a1.994 1.994 0 0 1-1.412.583z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M33.032 70.405a2.002 2.002 0 0 1-1.412-3.417l6.713-6.688a2.003 2.003 0 0 1 2.829.005 2.002 2.002 0 0 1-.005 2.829l-6.713 6.688c-.39.389-.901.583-1.412.583z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M80.395 83.782a1.99 1.99 0 0 1-1.411-.583l-6.714-6.688a2 2 0 1 1 2.822-2.834l6.714 6.688a2 2 0 0 1-1.411 3.417z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M66.968 70.406a1.994 1.994 0 0 1-1.412-.583l-6.713-6.688a2.002 2.002 0 0 1-.005-2.829 2.002 2.002 0 0 1 2.829-.005l6.713 6.688a2.002 2.002 0 0 1-1.412 3.417z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M90.649 94H86a2 2 0 0 1-.022-4l-.143-.148a2.001 2.001 0 0 1 2.894-2.762l3.367 3.529A2.002 2.002 0 0 1 90.649 94z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M75 94H65a2 2 0 0 1 0-4h10a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M55 94H45a2 2 0 0 1 0-4h10a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M35 94H25a2 2 0 0 1 0-4h10a2 2 0 0 1 0 4z"
  }), React.createElement("circle", {
    cx: "50.178",
    cy: "51.646",
    r: "7.796",
    fill: "currentColor"
  }));
}
;
export function TurfLineSlice(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M22.977 90.884a2.003 2.003 0 0 1-1.881-2.681l1.699-4.702a1.999 1.999 0 0 1 2.561-1.201 1.999 1.999 0 0 1 1.201 2.561l-1.699 4.702a2.003 2.003 0 0 1-1.881 1.321z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M65.953 29.276a2 2 0 0 1-.984-3.743l9.304-5.249a2 2 0 0 1 1.965 3.484l-9.304 5.249a1.984 1.984 0 0 1-.981.259z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M84.56 18.779a2 2 0 0 1-.984-3.743l4.354-2.457a2 2 0 0 1 1.965 3.484L85.54 18.52a1.991 1.991 0 0 1-.98.259z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M57.687 31.938a2.002 2.002 0 0 0-2.725-.759l-16.009 9.032c-.417.235-.764.612-.926 1.062L30 63.408v.002l-3.603 10.046a2.007 2.007 0 0 0 1.902 2.681c.818 0 1.412-.507 1.706-1.321L32 68.808v-.002l9.385-25.476 15.452-8.667c.962-.542 1.392-1.762.85-2.725z"
  }));
}
;
export function TurfMerge(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m76.111 36.407 3.838-16.94c.228-1-.34-2.01-1.312-2.337L38.462 3.613a2.002 2.002 0 0 0-1.946.382L8.109 28.552a2.002 2.002 0 0 0-.678 1.749l4.7 39.609a2 2 0 0 0 1.797 1.756l14.745 1.396c3.583 14.489 16.717 24.855 31.784 24.855 18.056 0 32.744-14.689 32.744-32.744.001-11.949-6.657-23.069-17.09-28.766zm-23.425-3.051a33.062 33.062 0 0 1 9.073-.903 1.999 1.999 0 0 1 1.921 2.075c-.042 1.104-.924 1.975-2.075 1.922a29.18 29.18 0 0 0-7.972.792 2 2 0 0 1-.947-3.886zM28.449 58.242a32.569 32.569 0 0 1 3.155-8.563 2 2 0 0 1 3.522 1.895 28.567 28.567 0 0 0-2.768 7.51 2 2 0 1 1-3.909-.842zm5.844 15.342a2.05 2.05 0 0 1-.191-.009l-3.982-.377a2 2 0 0 1-1.773-1.601 33.144 33.144 0 0 1-.561-4.22 2 2 0 0 1 1.861-2.13c1.114-.096 2.056.76 2.13 1.86.05.751.131 1.504.241 2.252l2.46.232a2 2 0 0 1-.185 3.993zm4.141-27.863a2 2 0 0 1-1.432-3.396 32.89 32.89 0 0 1 7.209-5.587 1.999 1.999 0 1 1 1.987 3.471 28.904 28.904 0 0 0-6.332 4.908 1.995 1.995 0 0 1-1.432.604zm13.959 29.576c-.062 0-.126-.003-.19-.009l-9.05-.856a2 2 0 1 1 .377-3.983l9.05.856a2.001 2.001 0 0 1-.187 3.992zm15.864-4.226-.884 3.9a1.999 1.999 0 0 1-2.137 1.549l-3.982-.376a2 2 0 0 1-1.804-2.179 1.995 1.995 0 0 1 2.179-1.804l2.232.211.496-2.187a1.996 1.996 0 0 1 2.393-1.508 2.002 2.002 0 0 1 1.507 2.394zm4.419-19.501-2.21 9.75a2 2 0 1 1-3.9-.885l2.21-9.75a2 2 0 1 1 3.9.885zm3.093-13.652-.884 3.901a2.001 2.001 0 0 1-2.391 1.509 2 2 0 0 1-1.509-2.393l.522-2.306a28.261 28.261 0 0 0-2.021-.754 2 2 0 0 1 1.255-3.798c1.343.444 2.67.982 3.945 1.598a2 2 0 0 1 1.083 2.243z"
  }));
}
;
export function TurfMidpoint(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("circle", {
    cx: "49.331",
    cy: "50.493",
    r: "6.845",
    fill: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M85.331 23.338c-4.877 0-8.845-3.968-8.845-8.845 0-4.877 3.968-8.845 8.845-8.845s8.845 3.968 8.845 8.845c0 4.877-3.968 8.845-8.845 8.845zm0-13.69a4.85 4.85 0 0 0-4.845 4.845c0 2.671 2.173 4.845 4.845 4.845s4.845-2.173 4.845-4.845a4.85 4.85 0 0 0-4.845-4.845z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M14.331 94.338c-4.877 0-8.845-3.968-8.845-8.845s3.968-8.845 8.845-8.845c4.877 0 8.845 3.968 8.845 8.845s-3.968 8.845-8.845 8.845zm0-13.69c-2.672 0-4.845 2.173-4.845 4.845s2.173 4.845 4.845 4.845c2.671 0 4.845-2.173 4.845-4.845s-2.174-4.845-4.845-4.845z"
  }));
}
;
export function TurfPointGrid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("circle", {
    cx: "11.528",
    cy: "88.472",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "88.472",
    cy: "11.528",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "69.236",
    cy: "11.528",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "50",
    cy: "11.528",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "30.764",
    cy: "11.528",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "11.528",
    cy: "11.528",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "88.472",
    cy: "88.472",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "88.472",
    cy: "69.236",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "88.472",
    cy: "50",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "88.472",
    cy: "30.764",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "69.472",
    cy: "88.472",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "69.472",
    cy: "69.236",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "69.472",
    cy: "50",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "69.472",
    cy: "30.764",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "50.472",
    cy: "88.472",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "50.472",
    cy: "69.236",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "50.472",
    cy: "50",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "50.472",
    cy: "30.764",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "30.472",
    cy: "88.472",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "30.472",
    cy: "69.236",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "30.472",
    cy: "50",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "30.472",
    cy: "30.764",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "11.472",
    cy: "69.236",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "11.472",
    cy: "50",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "11.472",
    cy: "30.764",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "88.472",
    cy: "11.528",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "69.236",
    cy: "11.528",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "50",
    cy: "11.528",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "30.764",
    cy: "11.528",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "11.528",
    cy: "11.528",
    r: "5.824",
    fill: "currentColor"
  }));
}
;
export function TurfPointOnLine(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M10.658 91.166a2 2 0 0 1-1.414-3.414l7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071c-.39.391-.903.586-1.414.586z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M53.084 48.74a2 2 0 0 1-1.414-3.414l7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071c-.391.39-.902.586-1.414.586z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M67.227 34.598a2 2 0 0 1-1.414-3.414l7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071c-.391.39-.903.586-1.414.586z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M81.368 20.456a2 2 0 0 1-1.414-3.414l7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071c-.39.39-.902.586-1.414.586z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m27.655 69.34-4.27 4.269a2 2 0 1 0 2.828 2.828l4.27-4.269a9.152 9.152 0 0 1-2.828-2.828z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M47.427 52.396a2 2 0 0 0-2.828 0l-4.421 4.421a9.14 9.14 0 0 1 2.828 2.828l4.421-4.421a2 2 0 0 0 0-2.828z"
  }), React.createElement("circle", {
    cx: "35.331",
    cy: "64.493",
    r: "6.845",
    fill: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M17.331 55.338c-4.877 0-8.845-3.968-8.845-8.845 0-4.877 3.968-8.845 8.845-8.845 4.877 0 8.845 3.968 8.845 8.845 0 4.877-3.968 8.845-8.845 8.845zm0-13.69a4.85 4.85 0 0 0-4.845 4.845 4.85 4.85 0 0 0 4.845 4.845 4.85 4.85 0 0 0 4.845-4.845 4.85 4.85 0 0 0-4.845-4.845z"
  }));
}
;
export function TurfPointOnSurface(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M15 20a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h5a2 2 0 0 1 0 4h-3v3a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M15 60a2 2 0 0 1-2-2V48a2 2 0 0 1 4 0v10a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M15 40a2 2 0 0 1-2-2V28a2 2 0 0 1 4 0v10a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.174 76.749c-.377 0-.759-.106-1.098-.329L13.9 73.671A2 2 0 0 1 13 72v-5a2 2 0 0 1 4 0v3.922l3.276 2.156a2 2 0 0 1-1.102 3.671z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M74.989 91H64.976a2 2 0 0 1 0-4H74.99a2 2 0 0 1-.001 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M54.963 91H44.949a2 2 0 0 1 0-4h10.014a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M35.904 87.763c-.377 0-.759-.106-1.098-.33l-8.363-5.507a2 2 0 1 1 2.201-3.34l8.363 5.507a2 2 0 0 1-1.103 3.67z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M90 91h-5a2 2 0 0 1 0-4h2.866l-.186-2.86a2 2 0 0 1 1.867-2.125 2.008 2.008 0 0 1 2.125 1.867l.323 4.989A2.004 2.004 0 0 1 90 91z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M89.146 77.877a2 2 0 0 1-1.994-1.87l-.527-8.133a2 2 0 0 1 3.992-.26l.527 8.133a2 2 0 0 1-1.998 2.13z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M88.092 61.611a2 2 0 0 1-1.994-1.87l-.23-3.549-3.441-.898a2 2 0 0 1 1.011-3.871l4.838 1.264a2.003 2.003 0 0 1 1.49 1.806l.324 4.989a2 2 0 0 1-1.998 2.129z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M77.119 53.841a2.02 2.02 0 0 1-.507-.065l-5.813-1.519a2.002 2.002 0 0 1-1.43-2.441 1.995 1.995 0 0 1 2.441-1.43l5.813 1.519a2.002 2.002 0 0 1-.504 3.936z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M65.492 50.803a2.02 2.02 0 0 1-.507-.065l-4.838-1.264a2 2 0 0 1-1.085-3.147l3.029-3.978a2 2 0 0 1 3.182 2.424l-1.21 1.589 1.934.505a2.001 2.001 0 0 1-.505 3.936z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M70.431 36.7a2 2 0 0 1-1.589-3.212l6.749-8.861a2 2 0 1 1 3.182 2.424l-6.749 8.861c-.394.517-.99.788-1.593.788z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M83.948 18.978a2 2 0 0 1-1.593-3.207l.583-.771H82a2 2 0 0 1 0-4h4.96a2.001 2.001 0 0 1 1.595 3.207l-3.01 3.978a2 2 0 0 1-1.597.793z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M73 15h-9a2 2 0 0 1 0-4h9a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M55 15h-9a2 2 0 0 1 0-4h9a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M37 15h-9a2 2 0 0 1 0-4h9a2 2 0 0 1 0 4z"
  }), React.createElement("circle", {
    cx: "68.331",
    cy: "72.493",
    r: "6.845",
    fill: "currentColor"
  }));
}
;
export function TurfSimplify(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M51.458 93.438c-2.885 0-5.768-.285-8.568-.849a2 2 0 1 1 .788-3.921 39.94 39.94 0 0 0 9.467.735 1.981 1.981 0 0 1 2.081 1.915 2 2 0 0 1-1.915 2.081c-.615.026-1.232.039-1.853.039z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M63.065 91.784a2 2 0 0 1-.561-3.92 39.1 39.1 0 0 0 8.716-3.754 2 2 0 1 1 2.015 3.455 43.155 43.155 0 0 1-9.608 4.139c-.187.054-.375.08-.562.08z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M33.817 89.489c-.287 0-.579-.062-.855-.192a43.305 43.305 0 0 1-8.838-5.588 1.999 1.999 0 1 1 2.529-3.098 39.271 39.271 0 0 0 8.022 5.071 2 2 0 0 1-.858 3.807z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M80.174 81.807a1.999 1.999 0 0 1-1.392-3.436 39.457 39.457 0 0 0 5.97-7.376 2 2 0 0 1 3.391 2.123 43.462 43.462 0 0 1-6.577 8.126c-.388.375-.89.563-1.392.563z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M18.477 76.969a1.996 1.996 0 0 1-1.599-.797 43.3 43.3 0 0 1-5.235-9.054 2 2 0 1 1 3.68-1.568 39.274 39.274 0 0 0 4.75 8.216 2 2 0 0 1-1.596 3.203z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M90.682 65.028a1.999 1.999 0 0 1-1.9-2.623 39.179 39.179 0 0 0 1.833-9.308 1.99 1.99 0 0 1 2.142-1.848 2 2 0 0 1 1.849 2.141 43.238 43.238 0 0 1-2.022 10.259 2.005 2.005 0 0 1-1.902 1.379z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M10.715 58.749a2 2 0 0 1-1.972-1.683 43.504 43.504 0 0 1-.408-10.447 2.002 2.002 0 0 1 3.988.324 39.547 39.547 0 0 0 .37 9.488 2 2 0 0 1-1.978 2.318z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M92.147 45.28a2.002 2.002 0 0 1-1.971-1.669 39.064 39.064 0 0 0-2.699-9.097 2 2 0 0 1 3.668-1.596 43.12 43.12 0 0 1 2.977 10.03 2 2 0 0 1-1.975 2.332z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12.334 39.015a2.001 2.001 0 0 1-1.896-2.637 43.12 43.12 0 0 1 4.513-9.435 2 2 0 0 1 3.373 2.151 39.113 39.113 0 0 0-4.094 8.559 2.002 2.002 0 0 1-1.896 1.362z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M84.251 27.12c-.601 0-1.195-.27-1.59-.785a39.484 39.484 0 0 0-6.634-6.792 2 2 0 0 1 2.505-3.119 43.602 43.602 0 0 1 7.306 7.479 2 2 0 0 1-1.587 3.217z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M22.973 22.315a2 2 0 0 1-1.381-3.447 43.387 43.387 0 0 1 8.378-6.256 2 2 0 1 1 1.989 3.471 39.403 39.403 0 0 0-7.606 5.679 1.994 1.994 0 0 1-1.38.553z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M69.39 14.999c-.292 0-.589-.064-.869-.2a39.04 39.04 0 0 0-8.982-3.059 2 2 0 0 1 .82-3.915 43.039 43.039 0 0 1 9.902 3.373 2 2 0 0 1-.871 3.801z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M40.157 12.474a2 2 0 0 1-.546-3.924 43.234 43.234 0 0 1 10.33-1.616 2 2 0 0 1 .138 3.998 39.28 39.28 0 0 0-9.375 1.466 2.038 2.038 0 0 1-.547.076z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M87.819 40.859 62.79 14.107a3.996 3.996 0 0 0-4.964-.706l-41.25 24.496a4 4 0 0 0-1.944 3.772l1.851 22.153a4 4 0 0 0 2.797 3.486l48.799 15.19a4.003 4.003 0 0 0 4.843-2.192l15.63-35.087a4 4 0 0 0-.733-4.36z"
  }));
}
;
export function TurfSize(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M76.647 30.353a2 2 0 0 1-2-2v-3h-3a2 2 0 0 1 0-4h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M62.988 25.353h-8.659a2 2 0 0 1 0-4h8.659a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M45.67 25.353h-8.659a2 2 0 0 1 0-4h8.659a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M23.353 30.353a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h5a2 2 0 0 1 0 4h-3v3a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M23.353 64.988a2 2 0 0 1-2-2v-8.659a2 2 0 0 1 4 0v8.659a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M23.353 47.67a2 2 0 0 1-2-2v-8.659a2 2 0 0 1 4 0v8.659a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M28.353 78.647h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 4 0v3h3a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M62.988 78.647h-8.659a2 2 0 0 1 0-4h8.659a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M45.67 78.647h-8.659a2 2 0 0 1 0-4h8.659a2 2 0 0 1 0 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M76.647 78.647h-5a2 2 0 0 1 0-4h3v-3a2 2 0 0 1 4 0v5a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M76.647 64.988a2 2 0 0 1-2-2v-8.659a2 2 0 0 1 4 0v8.659a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M76.647 47.67a2 2 0 0 1-2-2v-8.659a2 2 0 0 1 4 0v8.659a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M90.216 92.216H9.784a2 2 0 0 1-2-2V9.784a2 2 0 0 1 2-2h80.432a2 2 0 0 1 2 2v80.432a2 2 0 0 1-2 2zm-78.432-4h76.432V11.784H11.784v76.432z"
  }));
}
;
export function TurfSquareGrid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("circle", {
    cx: "88.472",
    cy: "11.528",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "88.472",
    cy: "88.472",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "11.528",
    cy: "88.472",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "11.528",
    cy: "11.528",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M48 40.382V12H21.328c-.241 5.04-4.288 9.087-9.328 9.328V48h28.382A9.851 9.851 0 0 1 48 40.382z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M59.618 48H88V21.328c-5.04-.241-9.087-4.288-9.329-9.328H52v28.382A9.851 9.851 0 0 1 59.618 48z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M40.382 52H12v26.671c5.04.241 9.087 4.289 9.328 9.329H48V59.618A9.851 9.851 0 0 1 40.382 52z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M88 78.671V52H59.618A9.851 9.851 0 0 1 52 59.618V88h26.671c.241-5.04 4.289-9.088 9.329-9.329z"
  }));
}
;
export function TurfSquare(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M37.043 74.903a2 2 0 0 1-2-2v-9.161a2 2 0 0 1 4 0v9.161a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M37.043 56.581a2 2 0 0 1-2-2v-9.162a2 2 0 0 1 4 0v9.162a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M37.043 38.258a2 2 0 0 1-2-2v-9.161a2 2 0 0 1 4 0v9.161a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M62.957 74.903a2 2 0 0 1-2-2v-9.161a2 2 0 0 1 4 0v9.161a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M62.957 56.58a2 2 0 0 1-2-2v-9.161a2 2 0 0 1 4 0v9.161a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M62.957 38.258a2 2 0 0 1-2-2v-9.161a2 2 0 0 1 4 0v9.161a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "none",
    d: "M63 19.936a2 2 0 0 1-2-2V15H39v2.936a2 2 0 0 1-4 0V15H15v70h20v-2.936a2 2 0 0 1 4 0V85h22v-2.936a2 2 0 0 1 4 0V85h20V15H65v2.936a2 2 0 0 1-2 2z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M87.064 11H12.936C11.831 11 11 11.831 11 12.936v74.129c0 1.104.831 1.935 1.936 1.935h74.129C88.169 89 89 88.169 89 87.064V12.936C89 11.831 88.169 11 87.064 11zM85 85H65v-2.936a2 2 0 0 0-4 0V85H39v-2.936a2 2 0 0 0-4 0V85H15V15h20v2.936a2 2 0 0 0 4 0V15h22v2.936a2 2 0 0 0 4 0V15h20v70z"
  }));
}
;
export function TurfTin(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("circle", {
    cx: "13.162",
    cy: "54.683",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "51.116",
    cy: "15.612",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "87.954",
    cy: "83.706",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "50",
    cy: "50.218",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m40.7 53.359-17.757 2.152a9.797 9.797 0 0 1-2.934 6.202l58.146 22.491c-.008-.166-.025-.33-.025-.499a9.73 9.73 0 0 1 1.299-4.854l-23.552-20.78A9.756 9.756 0 0 1 50 60.042c-4.317 0-7.985-2.803-9.3-6.683z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M59.824 50.218a9.761 9.761 0 0 1-1.296 4.858l23.546 20.775a9.78 9.78 0 0 1 5.134-1.931L58.899 21.583a9.831 9.831 0 0 1-6.094 3.69l-.497 15.407c4.306 1.042 7.516 4.917 7.516 9.538z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m48.311 40.55.496-15.391a9.864 9.864 0 0 1-6.816-5.93L16.389 45.415a9.871 9.871 0 0 1 6.077 6.126l17.751-2.151c.376-4.466 3.747-8.082 8.094-8.84z"
  }));
}
;
export function TurfTriangleGrid(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("circle", {
    cx: "88.472",
    cy: "11.528",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "88.472",
    cy: "88.472",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "11.528",
    cy: "88.472",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: "11.528",
    cy: "11.528",
    r: "5.824",
    fill: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M52 88h27v.236c0-1.986.421-3.598 1.438-5.146L55.446 58.17A9.773 9.773 0 0 1 52 59.618V88z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.606 83.091C20.623 84.638 21 86.249 21 88.236V88h27V59.618a9.746 9.746 0 0 1-3.351-1.391L19.606 83.091z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M16.909 19.606C15.362 20.623 13.751 21 11.764 21H12v27h28.382a9.746 9.746 0 0 1 1.391-3.351L16.909 19.606z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 52v27h-.236c1.986 0 3.598.421 5.145 1.438l24.92-24.993a9.773 9.773 0 0 1-1.448-3.446H12z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M80.394 16.91C79.377 15.362 79 13.751 79 11.764V12H52v28.382a9.746 9.746 0 0 1 3.351 1.391L80.394 16.91z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M48 12H21v-.236c0 1.986-.421 3.598-1.438 5.145l24.993 24.92a9.773 9.773 0 0 1 3.446-1.448V12z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M88 48V21h.236c-1.986 0-3.598-.421-5.145-1.438L58.17 44.554A9.773 9.773 0 0 1 59.618 48H88z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M88 52H59.618a9.746 9.746 0 0 1-1.391 3.351L83.09 80.394C84.638 79.377 86.249 79 88.236 79H88V52z"
  }));
}
;
export function TurfUnion(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m76.111 36.407 3.838-16.94c.228-1-.34-2.01-1.312-2.337L38.462 3.613a2.002 2.002 0 0 0-1.946.382L8.109 28.552a2.002 2.002 0 0 0-.678 1.749l4.7 39.609a2 2 0 0 0 1.797 1.756l14.745 1.396c3.583 14.489 16.717 24.855 31.784 24.855 18.056 0 32.744-14.689 32.744-32.744.001-11.949-6.657-23.069-17.09-28.766zm-23.425-3.051a33.062 33.062 0 0 1 9.073-.903 1.999 1.999 0 0 1 1.921 2.075c-.042 1.104-.924 1.975-2.075 1.922a29.18 29.18 0 0 0-7.972.792 2 2 0 0 1-.947-3.886zM28.449 58.242a32.569 32.569 0 0 1 3.155-8.563 2 2 0 0 1 3.522 1.895 28.567 28.567 0 0 0-2.768 7.51 2 2 0 1 1-3.909-.842zm5.844 15.342a2.05 2.05 0 0 1-.191-.009l-3.982-.377a2 2 0 0 1-1.773-1.601 33.144 33.144 0 0 1-.561-4.22 2 2 0 0 1 1.861-2.13c1.114-.096 2.056.76 2.13 1.86.05.751.131 1.504.241 2.252l2.46.232a2 2 0 0 1-.185 3.993zm4.141-27.863a2 2 0 0 1-1.432-3.396 32.89 32.89 0 0 1 7.209-5.587 1.999 1.999 0 1 1 1.987 3.471 28.904 28.904 0 0 0-6.332 4.908 1.995 1.995 0 0 1-1.432.604zm13.959 29.576c-.062 0-.126-.003-.19-.009l-9.05-.856a2 2 0 1 1 .377-3.983l9.05.856a2.001 2.001 0 0 1-.187 3.992zm15.864-4.226-.884 3.9a1.999 1.999 0 0 1-2.137 1.549l-3.982-.376a2 2 0 0 1-1.804-2.179 1.995 1.995 0 0 1 2.179-1.804l2.232.211.496-2.187a1.996 1.996 0 0 1 2.393-1.508 2.002 2.002 0 0 1 1.507 2.394zm4.419-19.501-2.21 9.75a2 2 0 1 1-3.9-.885l2.21-9.75a2 2 0 1 1 3.9.885zm3.093-13.652-.884 3.901a2.001 2.001 0 0 1-2.391 1.509 2 2 0 0 1-1.509-2.393l.522-2.306a28.261 28.261 0 0 0-2.021-.754 2 2 0 0 1 1.255-3.798c1.343.444 2.67.982 3.945 1.598a2 2 0 0 1 1.083 2.243z"
  }));
}
;
export function UiEarthEast(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M28.318 65.346c.634.008 1.009-.696 1.191-1.304.673-2.247.725-4.676.15-6.95l-.931.053c.329 1.393-.68 2.957-2.085 3.232a7.057 7.057 0 0 0 .559 3.971c.22.479.588.992 1.116.998z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M74.711 59.541c-.843-.203-.803-1.43-1.32-2.126-.799-1.076-2.489-.515-3.658.139-1.8 1.006-3.672 1.939-5.422 3.031-2.06 1.285-2.264 3.833-2.587 5.993-.161 1.078-.736 1.973.248 2.656 1.861 1.292 4.482-1.764 6.358-2.042 2.497-.37 2.644 3.151 4.172 4.47a3.095 3.095 0 0 0 2.497.698 3.095 3.095 0 0 0 2.13-1.478c.356-1.398.964-2.277 1.788-3.466.596-.86 1.221-1.834 1.063-2.868-.139-.909-.845-1.605-1.385-2.35a7.392 7.392 0 0 1-1.103-6.289c-.85-.005-1.182 1.081-1.31 1.922-.129.84-.644 1.909-1.471 1.71z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m52.529 46.896-.136.436c.8.35 1.249 1.185 1.687 1.94.436.751.918 1.478 1.496 2.126a9.411 9.411 0 0 0 2.288 1.86c1.513.878 3.229 1.329 4.922 1.77 1.168.304 2.348.61 3.554.655s2.459-.193 3.443-.892c-2.523-.132-5.097-.043-7.522-.754a11.806 11.806 0 0 1-5.628-3.649c-.597-.701-1.112-1.473-1.753-2.136-.64-.663-1.439-1.224-2.351-1.356z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M63.168 52.315c.214.013.438.01.628-.088.452-.233.499-.844.555-1.349a5.758 5.758 0 0 1 .8-2.355c.209-.344.456-.671.588-1.051.132-.38.125-.841-.142-1.142-.306-.346-.855-.369-1.284-.197-.429.171-.775.496-1.138.78-.574.449-1.216.813-1.75 1.31-.534.496-.964 1.171-.942 1.9.019.634.39 1.227.902 1.603.511.375 1.149.55 1.783.589z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M71.874 50.449c-.153.677.431 1.303 1.043 1.631.612.329 1.323.527 1.786 1.044.365.408.521.956.789 1.433.267.477.744.924 1.287.854.492-.063.874-.534 1.369-.542.547-.009.918.524 1.258.954.339.429.945.83 1.391.512.357-.254.319-.832.04-1.169s-.715-.494-1.129-.636a.98.98 0 0 1 .291-.931l-3.688-2.183c-.502-.297-1.098-.603-1.639-.387-.402.161-.726.596-1.154.53-.356-.055-.552-.428-.752-.728s-.592-.581-.892-.382z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M72.421 26.824c-.258-.625-.745-1.268-.512-1.902.048-.131.127-.258.116-.397-.02-.24-.281-.367-.49-.486-.862-.49-1.27-1.485-1.761-2.346s-1.302-1.73-2.288-1.623l1.198 1.56c.856 1.115 1.729 2.262 2.134 3.607.405 1.346.249 2.953-.753 3.939-.301.296-.663.524-.979.804s-.596.637-.65 1.056c-.054.419.187.896.6.986.27.059.547-.049.796-.17.935-.454 1.786-1.131 2.308-2.031s.678-2.036.281-2.997z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M72.301 73.758c-.089.125-.106.286-.12.439l-.153 1.669c.24.123.507-.1.676-.31a8.793 8.793 0 0 0 1.201-1.977c-.263.101-.555.017-.832-.026-.276-.044-.609-.024-.772.205z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M50 2.608C23.858 2.608 2.666 23.8 2.666 49.942c0 26.142 21.192 47.334 47.334 47.334s47.334-21.192 47.334-47.334C97.334 23.8 76.142 2.608 50 2.608zm15.63 6.928c-.941.407-1.873.891-2.792 1.287-3.404 1.466-7.182 1.746-10.879 2.007l-5.792.409c-.032.602-.551 1.14-1.151 1.194-.6.055-1.207-.381-1.347-.967-1.848 1.351-4.33 1.79-6.53 1.157.003-.823 1.163-1.358 1.791-.825.341-1.123-.595-2.312-1.71-2.68-1.115-.368-2.328-.142-3.479.087-1.331.265-2.692.541-3.86 1.232-1.168.692-2.127 1.891-2.156 3.248l7.339-3.174-3.885 3.443c-.785.695-1.683 1.434-2.731 1.389-1.048-.045-1.967-1.416-1.233-2.165-1.395.988-3.148 1.156-4.862 1.425C29.86 10.364 39.499 6.608 50 6.608c5.51 0 10.778 1.044 15.63 2.928zM17.702 21.091c1.121-.076 2.28.381 3.005 1.245.875 1.042 1.07 2.606.478 3.832l2.315-.234.269 1.233 2.238.144c-.1 1.549-1.172 2.992-2.626 3.537-1.454.544-3.21.159-4.303-.943-.776.435-1.659-.545-1.706-1.434-.047-.889.322-1.783.143-2.655-.209-1.014-1.141-1.663-2.176-1.853a43.731 43.731 0 0 1 2.363-2.872zm40.914 71.322c.16-.417.213-.864.101-1.303a5.268 5.268 0 0 0 4.166-1.238c.624-1.521-.253-3.325-1.584-4.289-1.331-.964-3.008-1.287-4.624-1.585-3.553-.655-7.154-.256-10.708.161-2.934.344-6.249.978-8.321 3.285-.861.958-1.421 2.237-1.577 3.521C18.99 85.149 6.666 68.963 6.666 49.942c0-2.063.155-4.09.435-6.078.526.704 1.318 1.214 2.185 1.19l2.673 11.179c1.108 4.633 2.275 9.398 5.071 13.255.589.813 1.309 1.618 2.28 1.874 1.579.416 3.198-.841 3.819-2.352s.519-3.204.515-4.838a37.772 37.772 0 0 1 6.133-20.664c-1.603.567-3.705 1.003-4.738-.347-.463-.605-.548-1.409-.616-2.167l-.708-7.876a28.22 28.22 0 0 1 2.333 9.625 14.304 14.304 0 0 0 6.962-3.04c.578-.469 1.159-1.069 1.176-1.813.048-2.058-3.719-2.148-4.151-4.161.074.347 6.268 2.245 7.031 2.691 2.106 1.231 2.736 3.841 3.782 5.975.379.773.474 1.685.957 2.401.349.516.953.909 1.57.825 1.362-.186 2.271-3.533 2.861-4.659 1.15-2.197 2.456-3.595 4.191-1.358 1.472 1.899 3.479 4.082 4.474 6.275.788 1.736 1.032 4.038 3.639 3.936.28-.011-1.575-2.805-1.726-2.994-.895-1.119-1.404-2.231-2.003-3.589.757.967 1.84 1.753 3.065 1.848 1.224.094 2.549-.672 2.808-1.872s-.915-2.557-2.103-2.246c-.306-.683.278-1.475.97-1.76.692-.284 1.47-.249 2.201-.407 2.641-.572 4.097-4.121 2.618-6.383-.76-1.162-2.137-2.564-1.245-3.628.524-.625 1.586-.515 2.187.036.601.551.836 1.392.958 2.199l.756-.178c.696-3.367 1.311-7.054-.291-10.097-.452-.859-1.079-1.879-.576-2.709.287-.473.853-.685 1.274-1.044s.659-1.101.207-1.42l1.429.064c-.107 2.354 1.674 4.653 3.98 5.14a48.495 48.495 0 0 1-2.485-8.962C84.11 19.148 93.332 33.49 93.332 49.946c.002 20.941-14.935 38.46-34.716 42.467z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "m84.409 73.861-7.674 6.332c3.503-.341 6.675-2.958 7.674-6.332z"
  }));
}
;
export function UiEarthWest(props) {
  return React.createElement("svg", _extends({}, props, {
    width: props.width || 48,
    fill: "currentColor",
    viewBox: "0 0 100 100"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M54.669 11.225c1.662.25 3.093 1.629 3.405 3.28 1.244.04 2.263.943 3.237 1.718.974.775 2.212 1.502 3.399 1.126l-.452-3.411c-.101-.763-.21-1.549-.599-2.213-.556-.947-1.586-1.493-2.564-1.992-1.162-.592-2.345-1.192-3.628-1.426-1.283-.234-2.704-.054-3.708.778-.477.396-.849 1.107-.495 1.616.294.426.895.447 1.405.524z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M66.997 12.265c1.027.093 1.96.858 2.253 1.846.042.142.07.304-.005.433-.1.172-.332.204-.53.197a2.234 2.234 0 0 1-.928-.219 1.8 1.8 0 0 1-.848-.916 1.799 1.799 0 0 1-.037-1.248"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M75.208 51.717c-1.124-.241-2.339-1.324-2.975-2.235-.419-.601-.709-1.291-1.18-1.853-.521-.621-1.233-1.05-1.951-1.426a22.272 22.272 0 0 0-10.159-2.522c-2.319-.014-5.814-.328-7.148-2.74-.221-.399-.023-.886.068-1.334s-.065-1.06-.521-1.083c-.87-.044-1.072.994-2.168.867-.792-.092-1.863-.68-2.131-1.464-.244-.714.005-2.31.058-3.069.098-1.404 5.544-1.316 6.529-1.234-.185 1.072.898 2.747 2.097 1.772 1.039-.844-.248-3.176.657-4.342 1.181-1.524 2.697-3.045 4.029-4.475.375-.403.752-.807 1.182-1.15.939-.747 2.089-1.169 3.126-1.773-2.026-3.134-5.699-5.134-9.43-5.135-.288 0-.603.021-.815.216-.279.256-.263.693-.223 1.069.109 1.036.237 2.071.384 3.102l-3.19-1.267c-.789-.313-1.617-.656-2.131-1.332-.513-.676-.546-1.793.158-2.266.992-.667 2.498.38 3.478-.303.59-.412.743-1.321 1.408-1.596.595-.245 1.239.155 1.868.295.628.14 1.517-.367 1.213-.935-1.724-1.149-3.692-2.351-5.725-1.949-1.023.202-1.925.797-2.922 1.102-2.405.737-4.961-.276-7.271-1.272-.352-.152-.716-.311-.975-.594-.294-.321-.418-.763-.669-1.119-.796-1.127-3.758-1.124-3.564-1.179-.249-.021-.731.541-.98.519-.218-.019-2.433 2.247-2.838 2.519-1.357.914-2.885 1.289-4.538 1.777-1.625.48-3.472 2.333-.943 2.458 2.072.102 5.087-.639 7.104-1.103.372-.085.778-.177 1.121-.01.336.163.517.528.66.873a14.35 14.35 0 0 1 .447 9.653c-.332 1.072-.796 2.204-.469 3.278.472 1.548 2.42 2.356 2.711 3.948.125.685-.085 1.431.199 2.066.667 1.489 2.702.823 3.851.557-.006.002.17 2.318.328 2.572.558.895 2.018 1.123 2.938 1.38 3.393.949 6.378 2.392 9.436 4.136.74.422 1.514.876 1.945 1.612 1.155 1.97-.758 4.302-1.005 6.572a4.567 4.567 0 0 0 1.194 3.569c.503.536 1.132.943 1.632 1.484 1.165 1.26 1.491 3.112 1.307 4.819-.183 1.707-.811 3.328-1.337 4.962a42.947 42.947 0 0 0-1.9 9.421c-.083.953.429 1.201 1.283.939 1.217-.372.998-1.521 1.306-2.427.885-2.61 3.701-4.935 6.102-6.072 1.067-.505 2.238-.888 3.066-1.729 1.168-1.186 1.424-3.054 2.596-4.237.998-1.008 2.513-1.365 3.52-2.365 1.092-1.085 1.473-2.675 2.182-3.997.534-.995 1.556-1.808 2.007-2.809 1.349-2.999-2.296-2.769-4.032-3.141z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M50 2.608C23.858 2.608 2.666 23.8 2.666 49.942c0 26.142 21.192 47.334 47.334 47.334s47.334-21.192 47.334-47.334C97.334 23.8 76.142 2.608 50 2.608zm15.784 87.679c-1.119-.443-2.351-.599-3.534-.375-1.739.329-3.564 1.367-5.156.592-1.577-.767-1.895-3.052-1.033-4.58.862-1.528 2.527-2.416 4.176-3.013-1.121-.907-2.838-.486-4 .369-1.162.854-2.029 2.066-3.213 2.889-1.184.823-2.944 1.15-3.99.157-.035.819-.992 1.288-1.812 1.285-.82-.003-1.633-.292-2.445-.183-1.097.146-1.991 1.009-2.477 2.003-.456.934-.612 1.98-.745 3.013C21.69 88.503 6.666 70.947 6.666 49.942 6.666 26.047 26.106 6.608 50 6.608c8.651 0 16.71 2.558 23.482 6.943-.131.684-.179 1.373-.062 2.061.268 1.584 1.702 3.093 3.288 2.832l.29-1.151c2.002.403 3.708 2.021 4.216 3.999a1.887 1.887 0 0 0-.819 1.864c2.434.457 4.002 2.957 4.414 5.399s-.023 4.94.005 7.417c.044 3.895 1.618 8.176 5.168 9.779.987.446 2.165.624 3.167.286.116 1.288.185 2.589.185 3.906 0 18.325-11.441 34.019-27.55 40.344z"
  }));
}
;