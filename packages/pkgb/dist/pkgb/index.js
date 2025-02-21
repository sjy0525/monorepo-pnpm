"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOdd = void 0;
//我们将pkga作为pkgb的依赖项引入
var pkga_1 = require("../pkga");
var isOdd = function (x) { return !(0, pkga_1.isEven)(x); };
exports.isOdd = isOdd;
