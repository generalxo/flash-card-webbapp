import { deckService } from "../services/DeckService";
import { useState } from "react";

function useGetAllDecksApi() {
    const [loading, setLoading] = useState(true);
    const getDecks = async (signal?: AbortSignal) => {
        try{
            const data = await deckService.getAllDecks(signal);
            if (data.status !== 200) {
                throw new Error(data.message);
            }
            if(data.data === null) {
                setLoading(false);
                return { deckArray: [], loading };
            }
            const deckArray: IDeck[] = data.data;
            setLoading(false);
            return { deckArray, loading };
        } catch(error) {
            setLoading(false);
            throw error;
        }
    }

    return { getDecks, loading };
}

export default useGetAllDecksApi;
