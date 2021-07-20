export var isTouch = function () {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};
export var make2dTransformValue = function (_a) {
    var x = _a.x, y = _a.y, scale = _a.scale;
    return "scale(" + scale + ") translate(" + x + "px, " + y + "px)";
};
export var make3dTransformValue = function (_a) {
    var x = _a.x, y = _a.y, scale = _a.scale;
    return "scale3d(" + scale + "," + scale + ", 1) translate3d(" + x + "px, " + y + "px, 0)";
};
export var hasTranslate3DSupport = function () {
    var css = window.CSS;
    return css && css.supports && css.supports('transform', 'translate3d(0,0,0)');
};
