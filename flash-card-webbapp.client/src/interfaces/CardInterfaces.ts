interface ICard {
    Id: string;
    Title: string;
    Question: string;
    Answer: string;
    OptionString?: string;
    Streak: number;
    BlankPos: number;
    DeckId: string;
}

interface ICardList {
    Cards: ICard[];
}

