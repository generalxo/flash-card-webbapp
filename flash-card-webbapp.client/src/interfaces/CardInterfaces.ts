interface ICard {
    id: string;
    question: string;
    answer: string;
    optionString?: string;
    streak: number;
    blankPos: number;
    deckId: string;
}

interface ICardForm {
    question: string;
    answer: string;
    optionString?: string;
    strictness: number;
    deckId: string;
}

interface ICardLst {
    cards: ICard[];
}

interface ICardOptForm {
    question: string;
    answer: string;
    optionArr: string[];
    deckId: string;
    option: string;
};

interface ICardStrForm {
    question: string;
    answer: string;
    deckId: string;
    strictness: string;
};

interface CardDto {
    deckId: string;
    question: string;
    answer: string;
    strictness: number;
    optionString: string | null;
}