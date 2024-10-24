import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchCards = (deckId: string) => {
    const [cards, setCards] = useState<ICard[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const baseUrl = 'https://localhost:7163/api/card/deck/';

    useEffect(() => {
        const fetchCards = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get<ICardLst>(baseUrl + deckId);
                const cardData: ICard[] = response.data.cards;
                setCards(cardData);
            } catch (err) {
                setError('Failed to fetch cards');
            } finally {
                setLoading(false);
            }
        };
        fetchCards();
    }, [deckId]);
    return { cards, loading, error };
};