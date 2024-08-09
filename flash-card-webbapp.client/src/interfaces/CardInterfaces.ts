interface ICard {
    id: string;
    question: string;
    answer: string;
    optionString?: string;
    streak: number;
    blankPos: number;
    deckId: string;
}

interface ICardLst {
    cards: ICard[];
}

interface ICardOptForm {
    question: string;
    answer: string;
    optionString: string;
    deckId: string;
};