import styled from '@emotion/styled';
import Deck from './Deck';
import useGetAllDecksApi from '../../hooks/useGetAllDecks';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DeckContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
`;

const DeckListMapper: React.FC = () => {
    const { getDecks, loading } = useGetAllDecksApi();
    const [decks, setDecks] = useState<IDeck[]>([]);

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const response = await getDecks(controller.signal);
                setDecks(response.deckArray);
            } catch (error) {
                if(axios.isCancel(error)) {
                    console.log("Request cancelled");
                    return;
                }
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, []);

    // Create a component to display while loading
    if (loading) {
        return <p>Loading...</p>;
    }

    // Create a component to display when there are no decks available
    if (decks.length === 0) {
        return <p>No decks available.</p>;
    }

    return (
        <DeckContainer>
            {decks.map((deck: IDeck) => (
                <Deck key={deck.id} title={deck.title} cardCount={deck.cardCount} id={deck.id} />
            ))}
        </DeckContainer>
    );
};

export default DeckListMapper;