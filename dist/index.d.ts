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
export declare const createNewDeck: (shuffled?: boolean, jokersEnabled?: boolean, count?: number) => Promise<any>;
/**
 * Creates a new shuffled (optional) deck with a specified list of cards.
 *
 * @param {boolean} shuffled - Whether to shuffle the deck (defaults to false).
 * @param {string[]} cards - A list of comma-separated card codes to include in the deck (defaults to a full deck).
 * @returns {Promise<object>} - A promise resolving to the deck data as a JSON object.
 * @throws {Error} - On network errors or unexpected API responses.
 */
export declare const createPartialDeck: (shuffled?: boolean, cards?: string[]) => Promise<any>;
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
export declare const createNewPile: (deck: Deck, pileName: string, cards: string) => Promise<any>;
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
export declare const listPile: (deck: Deck, pileName: string) => Promise<any>;
/**
 * Draws a specified number of cards (defaults to 1) from the provided `deck`.
 *
 * @param {Deck} deck - The deck object representing the deck to draw from.
 * @param {number} count - The number of cards to draw (defaults to 1).
 * @returns {Promise<object>} - A promise resolving to the drawn cards data as a JSON object.
 * @throws {MissingDeckError} - If `deck` is not provided.
 * @throws {Error} - On network errors or unexpected API
 */
export declare const draw: (deck: Deck, count?: number) => Promise<any>;
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
export declare const drawFromPile: (deck: Deck, pileName: string, option?: {
    count: number;
} | {
    cards: string;
} | string) => Promise<any>;
/**
 * Returns a specified comma-separated list of cards (optional) to the provided `deck`.
 *
 * @param {Deck} deck - The deck object representing the deck to return cards to.
 * @param {string} cards - A comma-separated list of card codes to return (optional).
 * @returns {Promise<object>} - A promise resolving to the deck data as a JSON object.
 * @throws {MissingDeckError} - If `deck` is not provided.
 * @throws {Error} - On network errors or unexpected API responses.
 */
export declare const returnToDeck: (deck: Deck, cards?: string) => Promise<any>;
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
export declare const returnFromPile: (deck: Deck, pileName: string, cards?: string) => Promise<any>;
/**
 * Shuffles the provided `deck`. Optionally shuffles only remaining cards (refer to Deck of Cards API documentation).
 *
 * @param {Deck} deck - The deck object representing the deck to shuffle.
 * @param {boolean} remaining - Whether to shuffle only remaining cards (defaults to false).
 * @returns {Promise<object>} - A promise resolving to the deck data as a JSON object.
 * @throws {MissingDeckError} - If `deck` is not provided.
 * @throws {Error} - On network errors or unexpected API responses.
 */
export declare const shuffleDeck: (deck: Deck, remaining?: boolean) => Promise<any>;
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
export declare const shufflePile: (deck: Deck, pileName: string) => Promise<any>;
export {};
