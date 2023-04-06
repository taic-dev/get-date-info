"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialObj = void 0;
const date = new Date();
exports.initialObj = {
    y: date.getFullYear(),
    m: date.getMonth(),
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    w: date.getDay(),
    ms: date.getMilliseconds(),
};
