import styled from 'styled-components';
import Deck from '../deck/Deck';
import { useFetchDecks } from '../../components/hooks/useFetchDecks';

const DeckContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
`;

const DeckListMaper: React.FC = () => {
    const { decks, loading, error } = useFetchDecks();

    // Create better loading, error and 0 Cards handeling

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    if (decks.length == 0) {
        return <div>Create your first deck !</div>
    }

    return (
        <>
            <DeckContainer>
                {decks.map((deck, index) => (
                    <Deck key={index} title={deck.title} />
                ))}
            </DeckContainer>
        </>
    );
}

export default DeckListMaper;
