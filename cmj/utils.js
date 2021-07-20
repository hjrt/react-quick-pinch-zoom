"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasTranslate3DSupport = exports.make3dTransformValue = exports.make2dTransformValue = exports.isTouch = void 0;
var isTouch = function () {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};
exports.isTouch = isTouch;
var make2dTransformValue = function (_a) {
    var x = _a.x, y = _a.y, scale = _a.scale;
    return "scale(" + scale + ") translate(" + x + "px, " + y + "px)";
};
exports.make2dTransformValue = make2dTransformValue;
var make3dTransformValue = function (_a) {
    var x = _a.x, y = _a.y, scale = _a.scale;
    return "scale3d(" + scale + "," + scale + ", 1) translate3d(" + x + "px, " + y + "px, 0)";
};
exports.make3dTransformValue = make3dTransformValue;
var hasTranslate3DSupport = function () {
    var css = window.CSS;
    return css && css.supports && css.supports('transform', 'translate3d(0,0,0)');
};
exports.hasTranslate3DSupport = hasTranslate3DSupport;
