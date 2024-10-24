import axios from "axios";
import { handleError } from "../helpers/ErrorHandler";

const apiBaseRoute = 'http://localhost:7163/api/cards';

export const CreateCardApiRequest = async (card: ICard) => {
    try {
        const response = await axios.post(apiBaseRoute + '/create', card);
        return response;
    } catch (error) {
        handleError(error);
    }
}

