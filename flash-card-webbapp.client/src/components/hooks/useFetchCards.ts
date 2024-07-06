import { useState, useEffect } from 'react';
import ApiClient from '../misc/ApiClient';

export const useFetchCards = (deckId: string) => {
    const [cards, setCards] = useState<ICard[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await ApiClient.get<ICardLst>(`/card/deck/${deckId}`);
                const cardData: ICard[] = response.data.cards;
                setCards(cardData);
            } catch (err) {
                setError('Failed to fetch cards');
            } finally {
                setLoading(false);
            }
        };
        fetchCards();
    }, []);
    return { cards, loading, error };
};