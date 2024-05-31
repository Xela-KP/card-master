// src/index.ts
var DEFAULT_CARDS = ["AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH"];
var MissingDeckError = class extends Error {
  constructor() {
    super("'deck' parameter is required.");
  }
};
var MissingPileError = class extends Error {
  constructor() {
    super("'pileName' parameter is required.");
  }
};
var createNewDeck = async (shuffled = false, jokersEnabled = false, count = 1) => {
  console.log("create new deck(s)");
  try {
    const response = await fetch(
      `https://www.deckofcardsapi.com/api/deck/new/${shuffled ? "shuffle/" : ""}?jokers_enabled=${jokersEnabled}&deck_count=${count}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
var createPartialDeck = async (shuffled = false, cards = DEFAULT_CARDS) => {
  console.log("create partial deck");
  try {
    const response = await fetch(
      `https://www.deckofcardsapi.com/api/deck/new/${shuffled ? "shuffle/" : ""}/?cards=${cards}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
var createNewPile = async (deck, pileName, cards) => {
  console.log("create new pile");
  try {
    const response = await fetch(
      `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/pile/${pileName}/add/?cards=${cards}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    if (!deck) throw new MissingDeckError();
    if (!pileName) throw new MissingPileError();
    console.error(error);
  }
};
var listPile = async (deck, pileName) => {
  console.log("list pile");
  try {
    const response = await fetch(
      `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/pile/${pileName}/list/`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    if (!deck) throw new MissingDeckError();
    if (!pileName) throw new MissingPileError();
    console.error(error);
  }
};
var draw = async (deck, count = 1) => {
  console.log("draw from deck");
  try {
    const response = await fetch(
      `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=${count}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    if (!deck) throw new MissingDeckError();
    console.error(error);
  }
};
var drawFromPile = async (deck, pileName, option = "bottom") => {
  console.log("draw from pile");
  let url = `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/pile/${pileName}/draw/`;
  if (typeof option === "string") url += option;
  else {
    const [[param, value]] = Object.entries(option);
    url += `?${param}=${value}`;
    console.log(param, value);
  }
  console.log(url);
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    if (!deck) throw new MissingDeckError();
    console.error(error);
  }
};
var returnToDeck = async (deck, cards) => {
  console.log("return to deck");
  let url = `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/return/`;
  if (cards) url += `?cards=${cards}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    if (!deck) throw new MissingDeckError();
    console.error(error);
  }
};
var returnFromPile = async (deck, pileName, cards) => {
  console.log("return from pile");
  let url = `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/pile/${pileName}/return/`;
  if (cards) url += `?cards=${cards}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    if (!deck) throw new MissingDeckError();
    if (!pileName) throw new MissingPileError();
    console.error(error);
  }
};
var shuffleDeck = async (deck, remaining = false) => {
  console.log("shuffle deck");
  try {
    const response = await fetch(
      `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/?remaining=${remaining}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    if (!deck) throw new MissingDeckError();
    console.error(error);
  }
};
var shufflePile = async (deck, pileName) => {
  console.log("shuffle pile");
  try {
    const response = await fetch(
      `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/pile/${pileName}/shuffle/`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    if (!deck) throw new MissingDeckError();
    if (!pileName) throw new MissingPileError();
    console.error(error);
  }
};
export {
  createNewDeck,
  createNewPile,
  createPartialDeck,
  draw,
  drawFromPile,
  listPile,
  returnFromPile,
  returnToDeck,
  shuffleDeck,
  shufflePile
};
//# sourceMappingURL=index.mjs.map
