interface IDeck {
    id: string;
    title: string;
    cardCount: number;
}

interface IDeckLst {
    decks: IDeck[];
}