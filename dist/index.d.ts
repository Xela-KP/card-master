type Deck = {
    deck_id: string;
    [key: string]: any;
};
export declare const createNewDeck: (shuffled?: boolean, jokersEnabled?: boolean, count?: number) => Promise<any>;
export declare const createPartialDeck: (shuffled?: boolean, cards?: string[]) => Promise<any>;
export declare const createNewPile: (deck: Deck, pileName: string, cards: string) => Promise<any>;
export declare const listPile: (deck: Deck, pileName: string) => Promise<any>;
export declare const draw: (deck: Deck, count?: number) => Promise<any>;
export declare const drawFromPile: (deck: Deck, pileName: string, option?: {
    count: number;
} | {
    cards: string;
} | string) => Promise<any>;
export declare const returnToDeck: (deck: Deck, cards?: string) => Promise<any>;
export declare const returnFromPile: (deck: Deck, pileName: string, cards?: string) => Promise<any>;
export declare const shuffleDeck: (deck: Deck, remaining?: boolean) => Promise<any>;
export declare const shufflePile: (deck: Deck, pileName: string) => Promise<any>;
export {};
