"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tslib = require("tslib");
var _react = require("react");
var _useMemoizedFn = _interopRequireDefault(require("../useMemoizedFn"));
var useResetState = function useResetState(initialState) {
  var _a = (0, _tslib.__read)((0, _react.useState)(initialState), 2),
    state = _a[0],
    setState = _a[1];
  var resetState = (0, _useMemoizedFn["default"])(function () {
    setState(initialState);
  });
  return [state, setState, resetState];
};
var _default = exports["default"] = useResetState;