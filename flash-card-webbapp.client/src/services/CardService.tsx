import axios from "axios";
import { handleError } from "../helpers/ErrorHandler";

const apiBaseRoute = 'http://localhost:7163/api/card';

export const CreateCardApiRequest = async (card: CardDto) => {
    try {
        const response = await axios.post(apiBaseRoute + '/create', card);
        return response;
    } catch (error) {
        handleError(error);
    }
}
