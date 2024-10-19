import axios from "axios"
import { UserProfileToken } from "../models/User"
import { handleError } from "../helpers/ErrorHandler";

const apiBaseRoute = 'https://localhost:7163/api/auth/'

export const LoginApiRequest = async (email: string, password: string) => {
    try{
        const response = await axios.post<UserProfileToken>(apiBaseRoute + 'login', {
            email: email,
            password: password
        });
        return response;
    }
    catch (error) {
        handleError(error);
    }
}

export const RegisterApiRequest = async (email: string, password: string, name: string) => {
    try{
        const response = await axios.post<UserProfileToken>(apiBaseRoute + 'register', {
            email: email,
            password: password,
            name: name
        });
        return response;
    }
    catch (error) {
        handleError(error);
    }
};