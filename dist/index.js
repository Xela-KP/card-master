"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shufflePile = exports.shuffleDeck = exports.returnFromPile = exports.returnToDeck = exports.drawFromPile = exports.draw = exports.listPile = exports.createNewPile = exports.createPartialDeck = exports.createNewDeck = void 0;
const DEFAULT_CARDS = ["AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH"];
class MissingDeckError extends Error {
    constructor() {
        super("'deck' parameter is required.");
    }
}
class MissingPileError extends Error {
    constructor() {
        super("'pileName' parameter is required.");
    }
}
const createNewDeck = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (shuffled = false, jokersEnabled = false, count = 1) {
    console.log("create new deck(s)");
    try {
        const response = yield fetch(`https://www.deckofcardsapi.com/api/deck/new/${shuffled ? "shuffle/" : ""}?jokers_enabled=${jokersEnabled}&deck_count=${count}`);
        const data = yield response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.error(error);
    }
});
exports.createNewDeck = createNewDeck;
const createPartialDeck = (...args_2) => __awaiter(void 0, [...args_2], void 0, function* (shuffled = false, cards = DEFAULT_CARDS) {
    console.log("create partial deck");
    try {
        const response = yield fetch(`https://www.deckofcardsapi.com/api/deck/new/${shuffled ? "shuffle/" : ""}/?cards=${cards}`);
        const data = yield response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.error(error);
    }
});
exports.createPartialDeck = createPartialDeck;
const createNewPile = (deck, pileName, cards) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("create new pile");
    try {
        const response = yield fetch(`https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/pile/${pileName}/add/?cards=${cards}`);
        const data = yield response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        if (!deck)
            throw new MissingDeckError();
        if (!pileName)
            throw new MissingPileError();
        console.error(error);
    }
});
exports.createNewPile = createNewPile;
const listPile = (deck, pileName) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("list pile");
    try {
        const response = yield fetch(`https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/pile/${pileName}/list/`);
        const data = yield response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        if (!deck)
            throw new MissingDeckError();
        if (!pileName)
            throw new MissingPileError();
        console.error(error);
    }
});
exports.listPile = listPile;
const draw = (deck_1, ...args_3) => __awaiter(void 0, [deck_1, ...args_3], void 0, function* (deck, count = 1) {
    console.log("draw from deck");
    try {
        const response = yield fetch(`https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=${count}`);
        const data = yield response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        if (!deck)
            throw new MissingDeckError();
        console.error(error);
    }
});
exports.draw = draw;
const drawFromPile = (deck_2, pileName_1, ...args_4) => __awaiter(void 0, [deck_2, pileName_1, ...args_4], void 0, function* (deck, pileName, option = "bottom") {
    console.log("draw from pile");
    let url = `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/pile/${pileName}/draw/`;
    if (typeof option === "string")
        url += option;
    else {
        const [[param, value]] = Object.entries(option);
        url += `?${param}=${value}`;
        console.log(param, value);
    }
    console.log(url);
    try {
        const response = yield fetch(url);
        const data = yield response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        if (!deck)
            throw new MissingDeckError();
        console.error(error);
    }
});
exports.drawFromPile = drawFromPile;
const returnToDeck = (deck, cards) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("return to deck");
    let url = `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/return/`;
    if (cards)
        url += `?cards=${cards}`;
    try {
        const response = yield fetch(url);
        const data = yield response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        if (!deck)
            throw new MissingDeckError();
        console.error(error);
    }
});
exports.returnToDeck = returnToDeck;
const returnFromPile = (deck, pileName, cards) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("return from pile");
    let url = `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/pile/${pileName}/return/`;
    if (cards)
        url += `?cards=${cards}`;
    try {
        const response = yield fetch(url);
        const data = yield response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        if (!deck)
            throw new MissingDeckError();
        if (!pileName)
            throw new MissingPileError();
        console.error(error);
    }
});
exports.returnFromPile = returnFromPile;
const shuffleDeck = (deck_3, ...args_5) => __awaiter(void 0, [deck_3, ...args_5], void 0, function* (deck, remaining = false) {
    console.log("shuffle deck");
    try {
        const response = yield fetch(`https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/?remaining=${remaining}`);
        const data = yield response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        if (!deck)
            throw new MissingDeckError();
        console.error(error);
    }
});
exports.shuffleDeck = shuffleDeck;
const shufflePile = (deck, pileName) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("shuffle pile");
    try {
        const response = yield fetch(`https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/pile/${pileName}/shuffle/`);
        const data = yield response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        if (!deck)
            throw new MissingDeckError();
        if (!pileName)
            throw new MissingPileError();
        console.error(error);
    }
});
exports.shufflePile = shufflePile;
