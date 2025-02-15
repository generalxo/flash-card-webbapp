import { deckService } from "../services/DeckService";
import { useState } from "react";

function useCreateDeckApi() {
    const [loading, setLoading] = useState(true);
    const createDeck = async (deckTitle: string, signal?: AbortSignal) => {
        try{
            const data = await deckService.createDeck(deckTitle, signal);
            setLoading(false);
            return { data, loading };
        } catch(error) {
            setLoading(false);
            throw error;
        }
    }

    return { createDeck, loading };
}

export default useCreateDeckApi;