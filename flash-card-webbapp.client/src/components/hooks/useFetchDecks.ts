import { useState, useEffect } from 'react';
import ApiClient from '../misc/ApiClient';

export const useFetchDecks = () => {
    const [decks, setDecks] = useState<IDeck[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDecks = async () => {
            try {
                const response = await ApiClient.get<IDeckLst>('/deck/all');
                const deckData: IDeck[] = response.data.decks;
                setDecks(deckData);
            } catch (err) {
                setError('Failed to fetch decks');
            } finally {
                setLoading(false);
            }
        };
        fetchDecks();
    }, []);
    return { decks, loading, error };
};