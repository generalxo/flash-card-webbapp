import { useEffect, useState } from 'react';
import ApiClient from '../../components/misc/ApiClient';

const DeckListMaper: React.FC = () => {

    const [decks, setDecks] = useState<CardListI>([]);

    useEffect(() => {
        const request = async () => {
            try {
                const response = await ApiClient.get('/deck/all');
                console.log('Response:', response.data);
                setDecks(response.data);
            } catch (e) {
                console.error('Error:', e);
            }
        };
        request();
    }, []);

    return (
        <>
            {decks.map((deck, index) => {
                // render the decks here using a component
            })}
        </>
    );
};

export default DeckListMaper;