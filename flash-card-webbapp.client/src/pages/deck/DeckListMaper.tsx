import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ApiClient from '../../components/misc/ApiClient';
import Deck from '../deck/Deck';

const DeckContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
`;

interface DeckI {
    Title: string;
}

const DeckListMaper: React.FC = () => {
    const [decks, setDecks] = useState<DeckI[]>([]);

    useEffect(() => {
        const request = async () => {
            try {
                const response = await ApiClient.get('/deck/all');
                //console.log("response:", response.data)
                const deckData = response.data.decks.map((deck: { title: string }) => ({ Title: deck.title }));
                setDecks(deckData);
                //console.log("setDecks:", deckData);
            } catch (e) {
                //console.error('Error:', e);
                setDecks([]);
            }
        };
        request();
    }, []);

    //console.log("Decks:", decks);

    return (
        <>
            <DeckContainer>
                {decks.map((deck, index) => (
                    <Deck key={index} Title={deck.Title} />
                ))}
            </DeckContainer>
        </>
    );
}

export default DeckListMaper;
