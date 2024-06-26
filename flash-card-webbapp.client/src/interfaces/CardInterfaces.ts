interface CardI {
    Title: string | null;
    Question: string | null;
    Answer: string | null;
    OptionString?: string | null;
    Streak: number;
    BlankPos: number;
}

interface CardListI extends Array<CardI> { }

