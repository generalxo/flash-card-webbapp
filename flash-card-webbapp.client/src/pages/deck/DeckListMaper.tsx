import { useEffect, useState } from 'react';
import ApiClient from '../../components/misc/ApiClient';
import Deck from '../deck/Deck';

const DeckListMaper: React.FC = () => {

    const [decks, setDecks] = useState<DeckListI>([]);

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
                <Deck key={index} {...deck} />
            })}
        </>
    );
};

export default DeckListMaper;