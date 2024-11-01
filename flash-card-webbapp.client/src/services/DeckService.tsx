import axios from "axios";
import { handleError } from "../helpers/ErrorHandler";

const apiBaseUrl = 'http://localhost:3001/api/deck/';

export const GetAllDecks = async () => {
    try {
        const response = await axios.get(apiBaseUrl + 'all');
        console.log(response);
        return response;
    } catch (error) {
        handleError(error);
    }
}