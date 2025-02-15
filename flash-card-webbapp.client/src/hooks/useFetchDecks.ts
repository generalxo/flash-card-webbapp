import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchDecks = () => {
    const [decks, setDecks] = useState<IDeck[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const baseUrl = 'https://localhost:7163/api/deck/';

    useEffect(() => {
        const fetchDecks = async () => {
            try {
                const response = await axios.get(baseUrl + 'all');
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