import axios from "axios";
import { handleError } from "../helpers/ErrorHandler";

class DeckService {
	private readonly baseUrl:string = 'https://localhost:7163/api/deck/';
	
	// Fetches all decks
	async getAllDecksOld(signal?: AbortSignal): Promise<ApiResponse<IDeck[]>> {
		try{
			const response = await axios.get(this.baseUrl + "all", {
				signal,
				validateStatus: (status) => status === 200
			});

			if(response.status != 200) {
				handleError(response);
				throw response.status;
			} else {
				return {
					data: response.data.data.decks,
					status: response.status,
					message: response.data.message
				};
			}

		} catch(error) {
			if (axios.isCancel(error)) {
				throw new Error('Request cancelled');
			}
			handleError(error);
			throw error;
		}
	}

	async getAllDecks(signal?: AbortSignal): Promise<ApiResponse<IDeck[]>> {
		try{
			const response = await axios.get(this.baseUrl + "all", {
				signal,
				validateStatus: (status) => status === 200
			});
			return {
				data: response.data.data.decks,
				status: response.status,
				message: response.data.message
			};
		} catch(error) {
			handleError(error);
			throw error;
		}
	}

	// Cretes a new deck
	async createDeck(deckTitle: string, signal?: AbortSignal): Promise<ApiResponse<IDeck>> {
		try {
			const data: IDeckCreate = { title: deckTitle };
			const response = await axios.post(this.baseUrl + "create", data, {
				signal,
				validateStatus: (status) => status === 200
			});

			if (response.status != 200) {
				throw handleError(response);
			} else {
				return {
					data: response.data,
					status: response.status,
					message: response.data.message
				};
			}
		} catch (error) {
			if (axios.isCancel(error)) {
				throw new Error('Request cancelled');
			}
			throw handleError(error);
		}
	}
}

export const deckService = new DeckService();
