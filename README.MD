# Deck of Cards API Wrapper

This package provides a convenient interface to interact with the Deck of Cards API ([https://www.deckofcardsapi.com/](https://www.deckofcardsapi.com/)). It allows you to create, manipulate, and shuffle decks and piles of cards programmatically in your JavaScript applications.

## Installation

```bash
npm install card-master
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

## Example Usage

**1. Creating Decks:**

* **New Deck with Shuffle (Default 1 Deck):**

```javascript
const { createNewDeck } = require('card-master');

(async () => {
  try {
    const newDeck = await createNewDeck(true);
    console.log(newDeck); // This will log the data for the new shuffled deck
  } catch (error) {
    console.error(error);
  }
})();
```

* **New Deck with Jokers (No Shuffle):**

```javascript
const { createNewDeck } = require('card-master');

(async () => {
  try {
    const newDeck = await createNewDeck(false, true); // shuffled = false, jokersEnabled = true
    console.log(newDeck); // This will log the data for the new deck with jokers
  } catch (error) {
    console.error(error);
  }
})();
```

* **New Deck with Specific Number (Shuffled):**

```javascript
const { createNewDeck } = require('card-master');

(async () => {
  try {
    const newDeck = await createNewDeck(true, false, 2); // shuffled, jokers disabled, 2 decks
    console.log(newDeck); // This will log the data for the 2 shuffled decks
  } catch (error) {
    console.error(error);
  }
})();
```

**2. Creating Piles and Decks with Specific Cards:**

* **New Pile in Existing Deck (Default Cards):**

```javascript
const { createNewDeck, createNewPile } = require('card-master');

(async () => {
  try {
    const newDeck = await createNewDeck();
    const pileName = "myPile";
    const newPile = await createNewPile(newDeck, pileName);
    console.log(newPile); // This will log the data for the new pile "myPile"
  } catch (error) {
    console.error(error);
  }
})();
```

* **New Deck with Partial Cards (No Shuffle):**

```javascript
const { createPartialDeck } = require('card-master');

(async () => {
  try {
    const customCards = ["AS", "KC", "5H", "JS"]; // Select your custom cards
    const newDeck = await createPartialDeck(false, customCards);
    console.log(newDeck); // This will log the data for the new deck with custom cards (not shuffled)
  } catch (error) {
    console.error(error);
  }
})();
```

**3. Working with Piles:**

* **List Cards in a Pile:**

```javascript
const { listPile, createNewDeck, createNewPile } = require('card-master');

(async () => {
  try {
    const newDeck = await createNewDeck();
    const pileName = "myPile";
    await createNewPile(newDeck, pileName, "AD,KH"); // Add some cards to the pile

    const pileData = await listPile(newDeck, pileName);
    console.log(pileData); // This will log the contents of the pile "myPile"
  } catch (error) {
    console.error(error);
  }
})();
```

* **Drawing Cards from a Pile (Specify Number):**

```javascript
const { drawFromPile, createNewDeck, createNewPile } = require('card-master');

(async () => {
  try {
    const newDeck = await createNewDeck();
    const pileName = "myPile";
    await createNewPile(newDeck, pileName, "AD,KH,QS"); // Add some cards to the pile

    const drawnCards = await drawFromPile(newDeck, pileName, { count: 2 }); // Draw 2 cards
    console.log(drawnCards); // This will log the data for the 2 drawn cards
  } catch (error) {
    console.error(error);
  }
})();
```

**4. Drawing and Returning Cards:**

* **Drawing a Card from a Deck:**

```javascript
const { draw, createNewDeck } = require('card-master');

(async () => {
  try {
    const newDeck = await createNewDeck();
    const drawnCard = await draw(newDeck);
    console.log(drawnCard); // This will log the data for the drawn card
  } catch (error) {
    console.error(error);
  }
})();
```

* **Returning a Card to the Deck:**

```javascript
const { draw, returnToDeck } = require('card-master');

(async () => {
  try {
    const newDeck = await createNewDeck();
    const drawnCard = await draw(newDeck);
    const cardCode = drawnCard.cards[0].code; // Get the code of the drawn card

    await returnToDeck(newDeck, cardCode);
    console.log("Card returned to the deck!");
  } catch (error) {
    console.error(error);
  }
})();
```

**5. Shuffling Decks and Piles:**

* **Shuffling an Existing Deck:**

```javascript
const { shuffleDeck, createNewDeck } = require('card-master');

(async () => {
  try {
    const newDeck = await createNewDeck();
    const shuffledDeck = await shuffleDeck(newDeck);
    console.log("Deck shuffled!"); // Data will be the same deck object, but shuffled
  } catch (error) {
    console.error(error);
  }
})();
```

* **Shuffling a Pile:**

```javascript
const { shufflePile, createNewDeck, createNewPile } = require('card-master');

(async () => {
  try {
    const newDeck = await createNewDeck();
    const pileName = "myPile";
    await createNewPile(newDeck, pileName);

    const shuffledPile = await shufflePile(newDeck, pileName);
    console.log("Pile shuffled!"); // Data will be the pile data after shuffling
  } catch (error) {
    console.error(error);
  }
})();
```

* Refer to the Deck of Cards API documentation ([https://www.deckofcardsapi.com/](https://www.deckofcardsapi.com/)) for more details on available options and functionalities.
