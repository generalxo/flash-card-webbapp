import { useEffect, useState } from 'react';
import Styled from 'styled-components';

/* To do when basic functionality is done.
    Idea 1.
    Have a stack of cards that gets larger as you add more cards to it, above the cards will be the title of the deck.
    When the stack of cards is clicked on it will go to card list page.
    Title should have an edit btn
    Title should have a delete btn

    Idea 2.
    Create a deck that looks like a playing card deck, with a title on it, stats on it and a play btn.
*/ 



const DeckContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Deck: React.FC = () => {
    return (
        <>
            <p>temp</p>
        </>
    );
};

export default Deck;