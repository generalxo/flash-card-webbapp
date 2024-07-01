interface CardI {
    Title: string;
    Question: string;
    Answer: string;
    OptionString?: string;
    Streak: number;
    BlankPos: number;
}

interface CardListI extends Array<CardI> { }

