# Deck of Cards API Wrapper

This package provides a convenient interface to interact with the Deck of Cards API ([https://www.deckofcardsapi.com/](https://www.deckofcardsapi.com/)). It allows you to create, manipulate, and shuffle decks and piles of cards programmatically in your JavaScript applications.

## Installation

```bash
npm install deck-of-cards-api-wrapper
```

## Usage

The package exports several functions that correspond to different API functionalities. Here's a breakdown of some key functions:

### Creating Decks

* **`createNewDeck(shuffled = false, jokersEnabled = false, count = 1)`:** Creates a new shuffled (optional) deck with jokers (optional) and a specified number of decks (defaults to 1). Returns a promise resolving to the deck data as a JSON object.
* **`createPartialDeck(shuffled = false, cards = DEFAULT_CARDS)`:** Creates a new shuffled (optional) deck with a specified list of cards. Returns a promise resolving to the deck data as a JSON object.

**### Managing Piles:**

* **`createNewPile(deck, pileName, cards)`:** Creates a new pile named `pileName` within the provided `deck` containing the specified comma-separated list of cards. Returns a promise resolving to the pile data as a JSON object. Throws errors for missing deck or pile name.
* **`listPile(deck, pileName)`:** Lists the contents of the pile named `pileName` within the provided `deck`. Returns a promise resolving to the pile data as a JSON object. Throws errors for missing deck or pile name.

**### Drawing Cards:**

* **`draw(deck, count = 1)`:** Draws a specified number of cards (defaults to 1) from the provided `deck`. Returns a promise resolving to the drawn cards data as a JSON object. Throws an error for missing deck.
* **`drawFromPile(deck, pileName, option)`:** Draws cards from the pile named `pileName` within the provided `deck`. The `option` parameter can be a number specifying the count, a string specifying comma-separated card codes, or a string specifying the draw location ("bottom" or "top"). Returns a promise resolving to the drawn cards data as a JSON object. Throws errors for missing deck or pile name.

**### Returning Cards:**

* **`returnToDeck(deck, cards)`:** Returns a specified comma-separated list of cards (optional) to the provided `deck`. Returns a promise resolving to the deck data as a JSON object. Throws an error for missing deck.
* **`returnFromPile(deck, pileName, cards)`:** Returns a specified comma-separated list of cards (optional) from the pile named `pileName` within the provided `deck` to the deck. Returns a promise resolving to the deck data as a JSON object. Throws errors for missing deck or pile name.

**### Shuffling:**

* **`shuffleDeck(deck, remaining = false)`:** Shuffles the provided `deck`. Optionally shuffles only remaining cards (refer to Deck of Cards API documentation). Returns a promise resolving to the deck data as a JSON object. Throws an error for missing deck.
* **`shufflePile(deck, pileName)`:** Shuffles the pile named `pileName` within the provided `deck`. Returns a promise resolving to the pile data as a JSON object. Throws errors for missing deck or pile name.

## Error Handling

This package throws custom errors (`MissingDeckError` and `MissingPileError`) for missing required parameters (`deck` or `pileName`). It also logs any other errors encountered during API calls.

## Contributing

We welcome contributions to this package! Please feel free to open pull requests for bug fixes, improvements, or additional functionalities. Refer to the contributing guidelines for more details (if applicable to your project).

## License

This package is licensed under the MIT License (refer to LICENSE file for details).
