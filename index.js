"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shufflePile = exports.shuffleDeck = exports.returnFromPile = exports.returnToDeck = exports.drawFromPile = exports.draw = exports.listPile = exports.createNewPile = exports.createPartialDeck = exports.createNewDeck = void 0;
var DEFAULT_CARDS = ["AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH"];
var MissingDeckError = /** @class */ (function (_super) {
    __extends(MissingDeckError, _super);
    function MissingDeckError() {
        return _super.call(this, "'deck' parameter is required.") || this;
    }
    return MissingDeckError;
}(Error));
var MissingPileError = /** @class */ (function (_super) {
    __extends(MissingPileError, _super);
    function MissingPileError() {
        return _super.call(this, "'pileName' parameter is required.") || this;
    }
    return MissingPileError;
}(Error));
var createNewDeck = function () {
    var args_1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args_1[_i] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (shuffled, jokersEnabled, count) {
        var response, data, error_1;
        if (shuffled === void 0) { shuffled = false; }
        if (jokersEnabled === void 0) { jokersEnabled = false; }
        if (count === void 0) { count = 1; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("create new deck(s)");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://www.deckofcardsapi.com/api/deck/new/".concat(shuffled ? "shuffle/" : "", "?jokers_enabled=").concat(jokersEnabled, "&deck_count=").concat(count))];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/, data];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.createNewDeck = createNewDeck;
var createPartialDeck = function () {
    var args_1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args_1[_i] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (shuffled, cards) {
        var response, data, error_2;
        if (shuffled === void 0) { shuffled = false; }
        if (cards === void 0) { cards = DEFAULT_CARDS; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("create partial deck");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://www.deckofcardsapi.com/api/deck/new/".concat(shuffled ? "shuffle/" : "", "/?cards=").concat(cards))];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/, data];
                case 4:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.createPartialDeck = createPartialDeck;
var createNewPile = function (deck, pileName, cards) { return __awaiter(void 0, void 0, void 0, function () {
    var response, data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("create new pile");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch("https://www.deckofcardsapi.com/api/deck/".concat(deck.deck_id, "/pile/").concat(pileName, "/add/?cards=").concat(cards))];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                console.log(data);
                return [2 /*return*/, data];
            case 4:
                error_3 = _a.sent();
                if (!deck)
                    throw new MissingDeckError();
                if (!pileName)
                    throw new MissingPileError();
                console.error(error_3);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.createNewPile = createNewPile;
var listPile = function (deck, pileName) { return __awaiter(void 0, void 0, void 0, function () {
    var response, data, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("list pile");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch("https://www.deckofcardsapi.com/api/deck/".concat(deck.deck_id, "/pile/").concat(pileName, "/list/"))];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                console.log(data);
                return [2 /*return*/, data];
            case 4:
                error_4 = _a.sent();
                if (!deck)
                    throw new MissingDeckError();
                if (!pileName)
                    throw new MissingPileError();
                console.error(error_4);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.listPile = listPile;
var draw = function (deck_1) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([deck_1], args_1, true), void 0, function (deck, count) {
        var response, data, error_5;
        if (count === void 0) { count = 1; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("draw from deck");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://www.deckofcardsapi.com/api/deck/".concat(deck.deck_id, "/draw/?count=").concat(count))];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/, data];
                case 4:
                    error_5 = _a.sent();
                    if (!deck)
                        throw new MissingDeckError();
                    console.error(error_5);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.draw = draw;
var drawFromPile = function (deck_1, pileName_1) {
    var args_1 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args_1[_i - 2] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([deck_1, pileName_1], args_1, true), void 0, function (deck, pileName, option) {
        var url, _a, param, value, response, data, error_6;
        if (option === void 0) { option = "bottom"; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("draw from pile");
                    url = "https://www.deckofcardsapi.com/api/deck/".concat(deck.deck_id, "/pile/").concat(pileName, "/draw/");
                    if (typeof option === "string")
                        url += option;
                    else {
                        _a = Object.entries(option)[0], param = _a[0], value = _a[1];
                        url += "?".concat(param, "=").concat(value);
                        console.log(param, value);
                    }
                    console.log(url);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(url)];
                case 2:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _b.sent();
                    console.log(data);
                    return [2 /*return*/, data];
                case 4:
                    error_6 = _b.sent();
                    if (!deck)
                        throw new MissingDeckError();
                    console.error(error_6);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.drawFromPile = drawFromPile;
var returnToDeck = function (deck, cards) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, data, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("return to deck");
                url = "https://www.deckofcardsapi.com/api/deck/".concat(deck.deck_id, "/return/");
                if (cards)
                    url += "?cards=".concat(cards);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(url)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                console.log(data);
                return [2 /*return*/, data];
            case 4:
                error_7 = _a.sent();
                if (!deck)
                    throw new MissingDeckError();
                console.error(error_7);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.returnToDeck = returnToDeck;
var returnFromPile = function (deck, pileName, cards) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, data, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("return from pile");
                url = "https://www.deckofcardsapi.com/api/deck/".concat(deck.deck_id, "/pile/").concat(pileName, "/return/");
                if (cards)
                    url += "?cards=".concat(cards);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(url)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                console.log(data);
                return [2 /*return*/, data];
            case 4:
                error_8 = _a.sent();
                if (!deck)
                    throw new MissingDeckError();
                if (!pileName)
                    throw new MissingPileError();
                console.error(error_8);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.returnFromPile = returnFromPile;
var shuffleDeck = function (deck_1) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([deck_1], args_1, true), void 0, function (deck, remaining) {
        var response, data, error_9;
        if (remaining === void 0) { remaining = false; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("shuffle deck");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("https://www.deckofcardsapi.com/api/deck/".concat(deck.deck_id, "/shuffle/?remaining=").concat(remaining))];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/, data];
                case 4:
                    error_9 = _a.sent();
                    if (!deck)
                        throw new MissingDeckError();
                    console.error(error_9);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.shuffleDeck = shuffleDeck;
var shufflePile = function (deck, pileName) { return __awaiter(void 0, void 0, void 0, function () {
    var response, data, error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("shuffle pile");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch("https://www.deckofcardsapi.com/api/deck/".concat(deck.deck_id, "/pile/").concat(pileName, "/shuffle/"))];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                console.log(data);
                return [2 /*return*/, data];
            case 4:
                error_10 = _a.sent();
                if (!deck)
                    throw new MissingDeckError();
                if (!pileName)
                    throw new MissingPileError();
                console.error(error_10);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.shufflePile = shufflePile;
