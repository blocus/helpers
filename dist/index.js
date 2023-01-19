"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = exports.isValidPassword = exports.isValidEmail = exports.symbols = exports.digits = exports.uppers = exports.lowers = void 0;
exports.lowers = 'abcdefghijklmnopqrstuvwxyz';
exports.uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
exports.digits = '0123456789';
exports.symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
var isValidEmail = function (email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase());
};
exports.isValidEmail = isValidEmail;
var isValidPassword = function (password, params) {
    var minLength = (params === null || params === void 0 ? void 0 : params.length) || 8;
    if (password.length < minLength)
        return false;
    if ((params === null || params === void 0 ? void 0 : params.lower) !== false && password.split('').filter(function (char) { return exports.lowers.includes(char); }).length === 0)
        return false;
    if ((params === null || params === void 0 ? void 0 : params.upper) !== false && password.split('').filter(function (char) { return exports.uppers.includes(char); }).length === 0)
        return false;
    if ((params === null || params === void 0 ? void 0 : params.digits) !== false && password.split('').filter(function (char) { return exports.digits.includes(char); }).length === 0)
        return false;
    if ((params === null || params === void 0 ? void 0 : params.symbols) !== false && password.split('').filter(function (char) { return exports.symbols.includes(char); }).length === 0)
        return false;
    return true;
};
exports.isValidPassword = isValidPassword;
var generateRandomString = function (param, params) {
    var useLowers = typeof param === 'number' ? (params === null || params === void 0 ? void 0 : params.lower) !== false : (param === null || param === void 0 ? void 0 : param.lower) !== false;
    var useUppers = typeof param === 'number' ? (params === null || params === void 0 ? void 0 : params.upper) !== false : (param === null || param === void 0 ? void 0 : param.upper) !== false;
    var useDigits = typeof param === 'number' ? (params === null || params === void 0 ? void 0 : params.digits) !== false : (param === null || param === void 0 ? void 0 : param.digits) !== false;
    var useSymbols = typeof param === 'number' ? (params === null || params === void 0 ? void 0 : params.symbols) !== false : (param === null || param === void 0 ? void 0 : param.symbols) !== false;
    var globalString = (useLowers ? exports.lowers : '') + (useUppers ? exports.uppers : '') + (useDigits ? exports.digits : '') + (useSymbols ? exports.symbols : '');
    if (globalString.length === 0) {
        throw new Error('You should at least enable a parameter');
    }
    return Array.from({ length: typeof param === 'number' ? param : 32 })
        .map(function () { return globalString[Math.floor(Math.random() * globalString.length)]; })
        .join('');
};
exports.generateRandomString = generateRandomString;
