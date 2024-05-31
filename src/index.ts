/** Default list of cards for creating a partial deck */
const DEFAULT_CARDS = ["AS,2S,KS,AD,2D,KD,AC,2C,KC,AH,2H,KH"];

/** Error class indicating a missing deck parameter */
class MissingDeckError extends Error {
  constructor() {
    super("'deck' parameter is required.");
  }
}

/** Error class indicating a missing pile name parameter */
class MissingPileError extends Error {
  constructor() {
    super("'pileName' parameter is required.");
  }
}

/**
 * Interface representing a deck of cards from the Deck of Cards API.
 * Properties might vary depending on the API response.
 */
type Deck = {
  deck_id: string;
  [key: string]: any;
};

/**
 * Creates a new shuffled (optional) deck with jokers (optional) and a specified number of decks (defaults to 1).
 *
 * @param {boolean} shuffled - Whether to shuffle the deck (defaults to false).
 * @param {boolean} jokersEnabled - Whether to include jokers in the deck (defaults to false).
 * @param {number} count - The number of decks to create (defaults to 1).
 * @returns {Promise<object>} - A promise resolving to the deck data as a JSON object.
 * @throws {Error} - On network errors or unexpected API responses.
 */
const createNewDeck = async (
  shuffled = false,
  jokersEnabled = false,
  count = 1
) => {
  console.log("create new deck(s)");
  try {
    const response = await fetch(
      `https://www.deckofcardsapi.com/api/deck/new/${
        shuffled ? "shuffle/" : ""
      }?jokers_enabled=${jokersEnabled}&deck_count=${count}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Creates a new shuffled (optional) deck with a specified list of cards.
 *
 * @param {boolean} shuffled - Whether to shuffle the deck (defaults to false).
 * @param {string[]} cards - A list of comma-separated card codes to include in the deck (defaults to a full deck).
 * @returns {Promise<object>} - A promise resolving to the deck data as a JSON object.
 * @throws {Error} - On network errors or unexpected API responses.
 */
const createPartialDeck = async (shuffled = false, cards = DEFAULT_CARDS) => {
  console.log("create partial deck");
  try {
    const response = await fetch(
      `https://www.deckofcardsapi.com/api/deck/new/${
        shuffled ? "shuffle/" : ""
      }/?cards=${cards}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Creates a new pile named `pileName` within the provided `deck` containing the specified comma-separated list of cards.
 *
 * @param {Deck} deck - The deck object representing the deck to add the pile to.
 * @param {string} pileName - The name of the pile to create.
 * @param {string} cards - A comma-separated list of card codes to add to the pile.
 * @returns {Promise<object>} - A promise resolving to the pile data as a JSON object.
 * @throws {MissingDeckError} - If `deck` is not provided.
 * @throws {Error} - On network errors or unexpected API responses.
 */
const createNewPile = async (deck: Deck, pileName: string, cards: string) => {
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

/**
 * Lists the contents of the pile named `pileName` within the provided `deck`.
 *
 * @param {Deck} deck - The deck object representing the deck containing the pile.
 * @param {string} pileName - The name of the pile to list.
 * @returns {Promise<object>} - A promise resolving to the pile data as a JSON object.
 * @throws {MissingDeckError} - If `deck` is not provided.
 * @throws {MissingPileError} - If `pileName` is not provided.
 * @throws {Error} - On network errors or unexpected API responses.
 */
const listPile = async (deck: Deck, pileName: string) => {
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

/**
 * Draws a specified number of cards (defaults to 1) from the provided `deck`.
 *
 * @param {Deck} deck - The deck object representing the deck to draw from.
 * @param {number} count - The number of cards to draw (defaults to 1).
 * @returns {Promise<object>} - A promise resolving to the drawn cards data as a JSON object.
 * @throws {MissingDeckError} - If `deck` is not provided.
 * @throws {Error} - On network errors or unexpected API
 */
const draw = async (deck: Deck, count = 1) => {
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

/**
 * Draws cards from the pile named `pileName` within the provided `deck`.
 *
 * @param {Deck} deck - The deck object representing the deck containing the pile.
 * @param {string} pileName - The name of the pile to draw from.
 * @param {object | number | string} option - The draw options:
 *     * `count: number` (optional): Specifies the number of cards to draw.
 *     * `cards: string` (optional): Specifies a comma-separated list of card codes to draw.
 *     * `string` (defaults to "bottom"): Specifies a draw location like "bottom" or "top" (refer to Deck of Cards API documentation for supported locations).
 * @returns {Promise<object>} - A promise resolving to the drawn cards data as a JSON object.
 * @throws {MissingDeckError} - If `deck` is not provided.
 * @throws {MissingPileError} - If `pileName` is not provided.
 * @throws {Error} - On network errors or unexpected API responses.
 */
const drawFromPile = async (
  deck: Deck,
  pileName: string,
  option: { count: number } | { cards: string } | string = "bottom"
) => {
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

/**
 * Returns a specified comma-separated list of cards (optional) to the provided `deck`.
 *
 * @param {Deck} deck - The deck object representing the deck to return cards to.
 * @param {string} cards - A comma-separated list of card codes to return (optional).
 * @returns {Promise<object>} - A promise resolving to the deck data as a JSON object.
 * @throws {MissingDeckError} - If `deck` is not provided.
 * @throws {Error} - On network errors or unexpected API responses.
 */
const returnToDeck = async (deck: Deck, cards?: string) => {
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

/**
 * Returns a specified comma-separated list of cards (optional) from the pile named `pileName` within the provided `deck` to the deck.
 *
 * @param {Deck} deck - The deck object representing the deck containing the pile.
 * @param {string} pileName - The name of the pile to return cards from.
 * @param {string} cards - A comma-separated list of card codes to return (optional).
 * @returns {Promise<object>} - A promise resolving to the deck data as a JSON object.
 * @throws {MissingDeckError} - If `deck` is not provided.
 * @throws {MissingPileError} - If `pileName` is not provided.
 * @throws {Error} - On network errors or unexpected API responses.
 */
const returnFromPile = async (deck: Deck, pileName: string, cards?: string) => {
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

/**
 * Shuffles the provided `deck`. Optionally shuffles only remaining cards (refer to Deck of Cards API documentation).
 *
 * @param {Deck} deck - The deck object representing the deck to shuffle.
 * @param {boolean} remaining - Whether to shuffle only remaining cards (defaults to false).
 * @returns {Promise<object>} - A promise resolving to the deck data as a JSON object.
 * @throws {MissingDeckError} - If `deck` is not provided.
 * @throws {Error} - On network errors or unexpected API responses.
 */
const shuffleDeck = async (deck: Deck, remaining = false) => {
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

/**
 * Shuffles the pile named `pileName` within the provided `deck`.
 *
 * @param {Deck} deck - The deck object representing the deck containing the pile.
 * @param {string} pileName - The name of the pile to shuffle.
 * @returns {Promise<object>} - A promise resolving to the pile data as a JSON object.
 * @throws {MissingDeckError} - If `deck` is not provided.
 * @throws {MissingPileError} - If `pileName` is not provided.
 * @throws {Error} - On network errors or unexpected API responses.
 */
const shufflePile = async (deck: Deck, pileName: string) => {
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

module.exports = {
  createNewDeck,
  createNewPile,
  createPartialDeck,
  listPile,
  draw,
  drawFromPile,
  returnToDeck,
  returnFromPile,
  shuffleDeck,
  shufflePile,
};
