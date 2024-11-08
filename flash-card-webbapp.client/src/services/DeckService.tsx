import axios from "axios";
import { handleError } from "../helpers/ErrorHandler";

const baseUrl = 'https://localhost:7163/api/deck/';

export const GetAllDecks = async () => {
    try {
        const response = await axios.get(baseUrl + 'all');
        console.log(response);
        return response;
    } catch (error) {
        handleError(error);
    }
}