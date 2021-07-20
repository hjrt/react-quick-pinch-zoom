"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTouch = exports.make3dTransformValue = exports.make2dTransformValue = exports.hasTranslate3DSupport = exports.default = void 0;
var component_1 = require("./PinchZoom/component");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(component_1).default; } });
var utils_1 = require("./utils");
Object.defineProperty(exports, "hasTranslate3DSupport", { enumerable: true, get: function () { return utils_1.hasTranslate3DSupport; } });
Object.defineProperty(exports, "make2dTransformValue", { enumerable: true, get: function () { return utils_1.make2dTransformValue; } });
Object.defineProperty(exports, "make3dTransformValue", { enumerable: true, get: function () { return utils_1.make3dTransformValue; } });
Object.defineProperty(exports, "isTouch", { enumerable: true, get: function () { return utils_1.isTouch; } });
